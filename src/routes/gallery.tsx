import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import hero from "@/assets/hero-child.jpg";
import hands from "@/assets/hands-care.jpg";
import group from "@/assets/children-group.jpg";
import speech from "@/assets/therapy-speech.jpg";
import occ from "@/assets/therapy-occupational.jpg";
import phys from "@/assets/therapy-physio.jpg";
import beh from "@/assets/therapy-behaviour.jpg";
import event from "@/assets/event-community.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Events — Held With Love Foundation" },
      { name: "description", content: "Moments from our therapy sessions, community events and fundraisers." },
      { property: "og:title", content: "Gallery & Events" },
      { property: "og:description", content: "A look inside the work we do, every day." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const images = [
  { src: hero, alt: "A child smiling with a therapist", tall: true },
  { src: speech, alt: "Speech therapy session", tall: false },
  { src: event, alt: "Community fundraising event", tall: true },
  { src: occ, alt: "Occupational therapy session", tall: false },
  { src: group, alt: "Children playing together", tall: false },
  { src: beh, alt: "Behaviour therapy session", tall: true },
  { src: phys, alt: "Physiotherapy session", tall: false },
  { src: hands, alt: "Holding a child's hand", tall: false },
];

const events = [
  { date: "Coming Soon", title: "Therapy Sponsorship Drive", body: "Sponsor a full year of therapy for one child." },
  { date: "Quarterly", title: "Parent Support Circles", body: "Free workshops and community for families." },
  { date: "Annual", title: "Held With Love Gala", body: "Our flagship fundraising evening with performances and stories." },
];

function Gallery() {
  return (
    <Layout>
      <PageHero eyebrow="Gallery & Events" title="Moments that move us forward." subtitle="A glimpse of the joy, the work, and the community that makes everything possible." />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {images.map((img) => (
            <div key={img.src} className="mb-4 break-inside-avoid rounded-3xl overflow-hidden shadow-soft hover:shadow-glow transition">
              <img src={img.src} alt={img.alt} loading="lazy" className={`w-full object-cover ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary text-center">Upcoming events</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {events.map((e) => (
              <div key={e.title} className="rounded-3xl bg-card border border-border p-8">
                <div className="text-xs font-bold tracking-widest uppercase text-primary">{e.date}</div>
                <h3 className="mt-3 text-xl font-bold text-secondary">{e.title}</h3>
                <p className="mt-2 text-muted-foreground">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
