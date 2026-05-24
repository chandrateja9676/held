import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Heart, Quote } from "lucide-react";
import childrenGroup from "@/assets/children-group.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Held With Love Foundation" },
      { name: "description", content: "Real stories, real change. See how your support transforms the lives of children across our community." },
      { property: "og:title", content: "Our Impact" },
      { property: "og:description", content: "Stories of hope, healing and brighter tomorrows." },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: Impact,
});

const stories = [
  { name: "Aarav, age 5", quote: "When Aarav first came to us, he had never spoken a full sentence. Today, he sings songs at school assemblies.", role: "Speech therapy" },
  { name: "Meera, age 7", quote: "Meera's parents thought she would never walk without support. Six months later, she runs to greet her therapist.", role: "Pediatric physiotherapy" },
  { name: "Kabir, age 4", quote: "Kabir's tantrums used to last hours. Now he uses his words, his calm-down corner and a proud smile.", role: "Behaviour therapy" },
];

function Impact() {
  return (
    <Layout>
      <PageHero eyebrow="Impact" title="Small victories. Lifelong change." subtitle="Every session is a step forward. Every child is a story of resilience. Here's what your support makes possible." />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { v: "500+", l: "Children supported" },
            { v: "12,000+", l: "Therapy sessions delivered" },
            { v: "98%", l: "Of donations reach programs" },
          ].map((s) => (
            <div key={s.l} className="rounded-3xl p-10 gradient-soft border border-border">
              <div className="text-5xl font-bold text-gradient">{s.v}</div>
              <div className="mt-3 text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary text-center">Stories of hope</h2>
          <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">Names changed to protect each child's privacy — every story is real.</p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <article key={s.name} className="rounded-3xl bg-card border border-border p-8 hover:shadow-soft transition">
                <Quote className="w-8 h-8 text-primary" />
                <p className="mt-4 text-secondary italic">"{s.quote}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-bold text-secondary">{s.name}</div>
                  <div className="text-sm text-muted-foreground">{s.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-soft">
          <img src={childrenGroup} alt="Children together" width={1600} height={1000} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Why your support matters</h2>
          <ul className="mt-6 space-y-4">
            {[
              "Provides therapy access for underprivileged children.",
              "Improves communication, mobility, independence and life skills.",
              "Helps build a more inclusive and compassionate society.",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 p-1.5 rounded-full bg-primary/10 text-primary"><Heart className="w-4 h-4 fill-current" /></span>
                <span className="text-secondary">{p}</span>
              </li>
            ))}
          </ul>
          <Link to="/donate" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-brand text-primary-foreground font-semibold shadow-soft">
            <Heart className="w-5 h-5 fill-current" /> Be Part of the Story
          </Link>
        </div>
      </section>
    </Layout>
  );
}
