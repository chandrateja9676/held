import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import speech from "@/assets/therapy-speech.jpg";
import occ from "@/assets/therapy-occupational.jpg";
import beh from "@/assets/therapy-behaviour.jpg";
import specialEd from "@/assets/therapy-special-education.jpg";
import preVoc from "@/assets/therapy-prevocational.jpg";

export const Route = createFileRoute("/therapies")({
  head: () => ({
    meta: [
      { title: "Our Therapies — Held With Love Foundation" },
      { name: "description", content: "Speech, behaviour, occupational therapy, special education and pre-vocational training designed for every child's growth." },
      { property: "og:title", content: "Our Therapy Services" },
      { property: "og:description", content: "Multi-disciplinary care for children — funded by your generosity." },
      { property: "og:url", content: "/therapies" },
    ],
    links: [{ rel: "canonical", href: "/therapies" }],
  }),
  component: Therapies,
});

const items = [
  { img: speech, title: "Speech Therapy", body: "We help children find their voice — strengthening language, articulation, comprehension and the confidence to communicate with the world.", points: ["Articulation & clarity", "Language development", "Social communication"] },
  { img: beh, title: "Behaviour Therapy", body: "Through positive reinforcement and structured care, we nurture emotional regulation, social skills and lasting well-being.", points: ["Positive reinforcement", "Emotional regulation", "Social skills"] },
  { img: occ, title: "Occupational Therapy", body: "We build daily-living independence — fine motor skills, focus, sensory integration and the confidence that comes with doing it yourself.", points: ["Fine motor skills", "Sensory integration", "Independence in daily tasks"] },
  { img: specialEd, title: "Special Education", body: "Individualised learning plans meet each child where they are — building literacy, numeracy and cognitive skills at a pace that honours their unique journey.", points: ["Individualised learning plans", "Literacy & numeracy foundations", "Cognitive & academic skills"] },
  { img: preVoc, title: "Pre-Vocational Training", body: "We prepare adolescents and young adults for meaningful work and independent living — building practical skills, confidence and a sense of purpose.", points: ["Functional life skills", "Work-readiness & task training", "Confidence & independence"] },
];

function Therapies() {
  return (
    <Layout>
      <PageHero eyebrow="Programs" title="Therapy that meets every child where they are." subtitle="Five core programs, delivered by trained therapists and educators, funded by our community of donors and volunteers." />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {items.map((it, i) => (
          <div key={it.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft">
              <img src={it.img} alt={it.title} width={1200} height={900} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">{it.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{it.body}</p>
              <ul className="mt-6 space-y-2">
                {it.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-secondary">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
