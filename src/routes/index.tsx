import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Sparkles, Users, ArrowRight, Quote, MessageCircle, Brain, Puzzle, Activity } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import heroChild from "@/assets/hero-child.jpg";
import handsCare from "@/assets/hands-care.jpg";
import childrenGroup from "@/assets/children-group.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Held With Love Foundation — Therapy & Hope for Every Child" },
      { name: "description", content: "Join us in giving underprivileged children access to life-changing therapy. Every contribution brings hope, healing and a brighter tomorrow." },
      { property: "og:title", content: "Held With Love Foundation" },
      { property: "og:description", content: "Therapy and care for children who need it most." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: MessageCircle, title: "Speech Therapy", desc: "Improves communication skills, language development and confidence.", color: "text-sky bg-sky/10" },
  { icon: Brain, title: "Behaviour Therapy", desc: "Builds positive behaviour, social skills and emotional well-being.", color: "text-emerald-600 bg-emerald-500/10" },
  { icon: Puzzle, title: "Occupational Therapy", desc: "Enhances daily living skills, focus and independence.", color: "text-orange-600 bg-orange-500/10" },
  { icon: Activity, title: "Pediatric Physiotherapy", desc: "Improves strength, mobility, posture and physical development.", color: "text-primary bg-primary/10" },
];

function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-soft" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Fundraising Now
            </span>
            <h1 className="mt-5 text-5xl md:text-7xl font-bold text-secondary leading-[1.05]">
              Be the reason a child believes in a{" "}
              <span className="text-gradient">better tomorrow.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Held With Love Foundation, in association with Gifted Child Development Center,
              raises funds to provide therapy and care for children who need it most.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/donate" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-brand text-primary-foreground font-semibold shadow-soft hover:scale-[1.03] transition">
                <Heart className="w-5 h-5 fill-current" /> Donate Now
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-secondary-foreground transition">
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-sun/20 border border-sun/40">
              <span className="font-bold text-secondary">80G & 12A</span>
              <span className="text-sm text-secondary/80">Tax Benefits Available</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[5/6] rounded-3xl overflow-hidden shadow-glow ring-4 ring-background">
              <img src={heroChild} alt="A smiling child during a therapy session" width={1600} height={1100} className="w-full h-full object-cover" />
            </div>
            <div className="hidden md:flex absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-soft p-5 items-center gap-3 max-w-[220px]">
              <div className="p-3 rounded-full bg-primary/10 text-primary"><Heart className="w-5 h-5 fill-current" /></div>
              <div>
                <div className="font-bold text-2xl text-secondary">500+</div>
                <div className="text-xs text-muted-foreground">Lives touched</div>
              </div>
            </div>
            <div className="hidden md:flex absolute -top-6 -right-6 bg-card rounded-2xl shadow-soft p-5 items-center gap-3">
              <div className="p-3 rounded-full bg-sun/30 text-secondary"><Sparkles className="w-5 h-5" /></div>
              <div>
                <div className="font-bold text-2xl text-secondary">4</div>
                <div className="text-xs text-muted-foreground">Therapy programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: "Access to therapy", body: "Your support gives a child access to life-changing therapy they could not otherwise afford." },
            { icon: Users, title: "Skills & confidence", body: "Together, we help children build skills, confidence and lasting independence." },
            { icon: Sparkles, title: "Hope & healing", body: "Every contribution brings hope, healing and a brighter tomorrow for a child in need." },
          ].map((b) => (
            <div key={b.title} className="rounded-3xl bg-card border border-border p-8 hover:shadow-soft hover:-translate-y-1 transition">
              <div className="w-12 h-12 rounded-2xl gradient-brand text-primary-foreground flex items-center justify-center">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-secondary">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Our Therapy Services</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-secondary">Care designed around every child</h2>
            <p className="mt-4 text-muted-foreground">A multi-disciplinary approach delivered by trained professionals who believe in every child's potential.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-3xl bg-card border border-border p-6 hover:shadow-soft transition">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${s.color}`}>
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-5 font-bold text-lg text-secondary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/therapies" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Learn about our therapies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft order-2 lg:order-1">
            <img src={childrenGroup} alt="Children laughing together" width={1600} height={1000} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Our Mission</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-secondary">Helping every child discover their potential.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We work alongside families and therapists to make sure no child is denied care because of cost.
              From the first session to lifelong independence, we walk every step with them.
            </p>
            <blockquote className="mt-8 p-6 rounded-2xl bg-accent border-l-4 border-primary">
              <Quote className="w-6 h-6 text-primary mb-2" />
              <p className="text-secondary font-medium italic">
                "Empowering abilities, inspiring lives — together, we can create an inclusive and compassionate
                society where every child thrives."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl gradient-brand p-10 md:p-16 text-primary-foreground">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sun/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-sky/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <img src={handsCare} alt="Hands holding a child's hand" className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full object-cover ring-8 ring-white/10" />
            <h2 className="text-3xl md:text-5xl font-bold">Together, we can.</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Support · Donate · Share. Help us build a society where every child gets the chance to thrive.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/donate" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sun text-secondary font-bold hover:scale-[1.03] transition shadow-glow">
                <Heart className="w-5 h-5 fill-current" /> Donate Today
              </Link>
              <Link to="/get-involved" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 backdrop-blur text-primary-foreground border border-white/30 font-semibold hover:bg-white/25 transition">
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
