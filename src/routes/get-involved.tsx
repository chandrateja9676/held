import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { HeartHandshake, Megaphone, Briefcase, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Held With Love Foundation" },
      { name: "description", content: "Volunteer, partner, fundraise or spread the word. There are many ways to support children in need." },
      { property: "og:title", content: "Get Involved" },
      { property: "og:description", content: "Volunteer, partner and amplify our mission." },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolved,
});

const ways = [
  { icon: HeartHandshake, title: "Volunteer", body: "Give your time at therapy sessions, events, content support or admin help.", action: "Apply to volunteer" },
  { icon: Megaphone, title: "Fundraise", body: "Run a birthday fundraiser, a marathon page, or a community drive in your city.", action: "Start a campaign" },
  { icon: Briefcase, title: "Corporate / CSR", body: "Partner through CSR, employee giving or sponsorship of an entire therapy program.", action: "Partner with us" },
  { icon: Users, title: "Spread the word", body: "Share our story on social media — awareness leads to action. Use #HeldWithLove.", action: "Share now" },
];

function GetInvolved() {
  return (
    <Layout>
      <PageHero eyebrow="Get Involved" title="There's a way for everyone to help." subtitle="Whether you have time, skills, reach or resources — your contribution moves a child forward." />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-6">
        {ways.map((w) => (
          <div key={w.title} className="group rounded-3xl bg-card border border-border p-8 hover:shadow-soft hover:-translate-y-1 transition">
            <div className="w-14 h-14 rounded-2xl gradient-brand text-primary-foreground flex items-center justify-center">
              <w.icon className="w-7 h-7" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-secondary">{w.title}</h3>
            <p className="mt-2 text-muted-foreground">{w.body}</p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
              {w.action} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl gradient-brand p-10 md:p-14 text-primary-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to help?</h2>
          <p className="mt-3 text-primary-foreground/90 max-w-xl mx-auto">
            Tell us how you'd like to be involved and our team will reach out within 48 hours.
          </p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sun text-secondary font-bold shadow-glow">
            Contact our team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
