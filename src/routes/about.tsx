import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Heart, Target, Users, Award } from "lucide-react";
import logo from "@/assets/heldwithlove-logo.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Held With Love Foundation" },
      { name: "description", content: "Our story: Held With Love Foundation partners with Gifted Child Development Center to bring therapy and care to underprivileged children." },
      { property: "og:title", content: "About — Held With Love Foundation" },
      { property: "og:description", content: "How we empower abilities and inspire lives." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero eyebrow="Our Story" title="Held With Love. Built on Hope." subtitle="A foundation born from a simple belief — every child deserves the chance to grow, learn and thrive, no matter their circumstance." />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-[260px_1fr] gap-10 items-start">
          <img src={logo} alt="Held With Love Foundation logo" className="w-full rounded-3xl shadow-soft" />
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-secondary">Held With Love Foundation</strong> was created to support children whose
              families cannot afford the therapy they desperately need. In association with the
              <strong className="text-secondary"> Gifted Child Development Center</strong>, we fund speech, behaviour,
              occupational and pediatric physiotherapy programs across our communities.
            </p>
            <p>
              Our work is rooted in the belief that ability is not a privilege. With the right care and a
              caring community, every child can find their voice, build their confidence, and step into a life
              of independence.
            </p>
            <p>
              The Foundation is registered under <strong className="text-primary">80G & 12A</strong>, ensuring your
              contributions are tax-deductible and fully accountable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-accent/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", body: "Helping every child discover their potential and live a better, brighter tomorrow." },
            { icon: Heart, title: "Our Vision", body: "An inclusive, compassionate society where every child thrives — regardless of background." },
            { icon: Users, title: "Our Values", body: "Compassion. Inclusion. Integrity. Accountability. Joy in every small victory." },
          ].map((b) => (
            <div key={b.title} className="rounded-3xl bg-card border border-border p-8">
              <div className="w-12 h-12 rounded-2xl gradient-brand text-primary-foreground flex items-center justify-center"><b.icon className="w-6 h-6" /></div>
              <h3 className="mt-5 text-xl font-bold text-secondary">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <Award className="w-10 h-10 mx-auto text-primary" />
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-secondary">Trust & Transparency</h2>
          <p className="mt-4 text-muted-foreground">
            Every rupee we receive is treated with the seriousness it deserves. We report our spending,
            measure our outcomes, and never lose sight of the child at the heart of every program.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { v: "500+", l: "Children supported" },
            { v: "4", l: "Therapy programs" },
            { v: "80G & 12A", l: "Registered trust" },
          ].map((s) => (
            <div key={s.l} className="rounded-3xl p-8 gradient-soft border border-border">
              <div className="text-4xl font-bold text-gradient">{s.v}</div>
              <div className="mt-2 text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
