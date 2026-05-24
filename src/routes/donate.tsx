import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Heart, Sparkles, Phone, Mail, Building2, Copy, Check } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Held With Love Foundation" },
      { name: "description", content: "Your donation funds therapy for children in need. 80G & 12A tax benefits available." },
      { property: "og:title", content: "Donate to Held With Love" },
      { property: "og:description", content: "Every contribution brings hope and healing to a child's life." },
      { property: "og:url", content: "/donate" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: Donate,
});

const amounts = [500, 1000, 2500, 5000, 10000];

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-white/10 last:border-0">
      <div>
        <div className="text-xs uppercase tracking-widest text-secondary-foreground/60">{label}</div>
        <div className="font-mono font-semibold text-secondary-foreground">{value}</div>
      </div>
      <button
        onClick={() => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
        className="p-2 rounded-lg hover:bg-white/10 text-secondary-foreground/70 hover:text-sun"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check className="w-4 h-4 text-sun" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
}

function Donate() {
  const [amount, setAmount] = useState<number>(2500);
  const [custom, setCustom] = useState("");

  return (
    <Layout>
      <PageHero eyebrow="Donate" title="Every gift is a child's chance." subtitle="Your contribution funds therapy sessions, equipment and the compassionate care that changes lives. Donations are eligible for tax benefits under 80G & 12A." />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary fill-primary" /> Choose your gift
          </h2>
          <p className="mt-2 text-muted-foreground">Pick an amount or enter your own — every rupee reaches a child.</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {amounts.map((a) => (
              <button
                key={a}
                onClick={() => { setAmount(a); setCustom(""); }}
                className={`px-4 py-4 rounded-2xl border-2 font-bold text-lg transition ${
                  amount === a && !custom
                    ? "border-primary bg-primary text-primary-foreground shadow-soft"
                    : "border-border bg-background hover:border-primary/50 text-secondary"
                }`}
              >
                ₹{a.toLocaleString()}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <label className="text-sm font-semibold text-secondary">Other amount</label>
            <div className="mt-2 flex items-center rounded-2xl border-2 border-border focus-within:border-primary overflow-hidden">
              <span className="px-4 py-3 bg-accent text-secondary font-semibold">₹</span>
              <input
                type="number"
                min={100}
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder="Enter amount"
                className="flex-1 px-4 py-3 bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="mt-6 p-5 rounded-2xl gradient-soft border border-border">
            <div className="text-sm text-muted-foreground">Your impact</div>
            <div className="mt-1 font-display font-bold text-2xl text-secondary">
              ≈ {Math.max(1, Math.round((Number(custom) || amount) / 500))} therapy sessions funded
            </div>
          </div>

          <button className="mt-6 w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full gradient-brand text-primary-foreground font-bold text-lg shadow-soft hover:scale-[1.01] transition">
            <Sparkles className="w-5 h-5" /> Donate ₹{(Number(custom) || amount).toLocaleString()}
          </button>
          <p className="mt-3 text-xs text-center text-muted-foreground">
            You will be guided through a secure payment process. Tax receipt issued under 80G & 12A.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-secondary text-secondary-foreground p-8">
            <div className="flex items-center gap-2 text-sun">
              <Building2 className="w-5 h-5" /> <span className="text-xs uppercase tracking-widest font-bold">Bank Transfer</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold">Direct contributions</h3>
            <p className="mt-2 text-secondary-foreground/80 text-sm">
              Prefer to transfer directly? Use the details below — share your receipt with us for an 80G certificate.
            </p>
            <div className="mt-5 rounded-2xl bg-white/10 p-5">
              <CopyRow label="Account Name" value="Held With Love Foundation" />
              <CopyRow label="Account Number" value="1234 5678 9012" />
              <CopyRow label="IFSC" value="HDFC0001234" />
              <CopyRow label="UPI ID" value="heldwithlove@upi" />
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8">
            <h3 className="font-bold text-secondary text-lg">Need help donating?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Our team is happy to assist with corporate giving, CSR partnerships, or one-time gifts.</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-secondary"><Phone className="w-4 h-4 text-primary" /> 99947 08749</li>
              <li className="flex items-center gap-2 text-secondary"><Mail className="w-4 h-4 text-primary" /> donate@heldwithlove.org</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
