import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Held With Love Foundation" },
      { name: "description", content: "Reach out about donations, partnerships, volunteering or general questions." },
      { property: "og:title", content: "Contact Us" },
      { property: "og:description", content: "We'd love to hear from you." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold text-secondary">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none bg-background"
      />
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." subtitle="Donations, partnerships, volunteering or simply saying hello — our team is here." />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div className="space-y-6">
          {[
            { icon: Phone, label: "Call us", value: "99947 08749" },
            { icon: Mail, label: "Email", value: "hello@heldwithlove.org" },
            { icon: MapPin, label: "Location", value: "Tamil Nadu, India" },
          ].map((c) => (
            <div key={c.label} className="rounded-3xl bg-card border border-border p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl gradient-brand text-primary-foreground flex items-center justify-center shrink-0">
                <c.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="mt-1 font-display font-bold text-secondary text-lg">{c.value}</div>
              </div>
            </div>
          ))}
          <div className="rounded-3xl gradient-soft border border-border p-6">
            <div className="text-xs font-bold tracking-widest uppercase text-primary">Tax Benefits</div>
            <div className="mt-2 text-2xl font-bold text-secondary">80G & 12A Registered</div>
            <p className="mt-2 text-sm text-muted-foreground">All donations are eligible for tax deduction under Indian Income Tax Act.</p>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-soft"
        >
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
              <h3 className="mt-4 text-2xl font-bold text-secondary">Thank you!</h3>
              <p className="mt-2 text-muted-foreground">We've received your message and will reach out within 48 hours.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-secondary">Send us a message</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Your name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <Field label="Phone (optional)" name="phone" />
                <div>
                  <label className="text-sm font-semibold text-secondary">I'm interested in</label>
                  <select name="topic" className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none bg-background">
                    <option>Donating</option>
                    <option>Volunteering</option>
                    <option>Corporate / CSR partnership</option>
                    <option>General enquiry</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-semibold text-secondary">Message</label>
                <textarea name="message" rows={5} required className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none bg-background resize-none" />
              </div>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-brand text-primary-foreground font-bold shadow-soft hover:scale-[1.02] transition">
                <Send className="w-4 h-4" /> Send message
              </button>
            </>
          )}
        </form>
      </section>
    </Layout>
  );
}
