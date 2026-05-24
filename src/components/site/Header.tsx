import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import logo from "@/assets/heldwithlove-logo.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/therapies", label: "Therapies" },
  { to: "/impact", label: "Impact" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Held With Love Foundation logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary transition" />
          <div className="leading-tight">
            <div className="font-display font-bold text-lg text-secondary">Held With Love</div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Foundation</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary rounded-md transition data-[status=active]:text-primary data-[status=active]:bg-accent"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-sun text-secondary font-semibold shadow-glow hover:scale-105 transition"
          >
            <Heart className="w-4 h-4 fill-current" /> Donate
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="px-3 py-2.5 rounded-md text-foreground/80 hover:bg-accent data-[status=active]:text-primary data-[status=active]:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full gradient-sun text-secondary font-semibold"
            >
              <Heart className="w-4 h-4 fill-current" /> Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
