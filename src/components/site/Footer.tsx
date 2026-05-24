import { Link } from "@tanstack/react-router";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-2xl font-display font-bold">
            <Heart className="w-6 h-6 text-primary fill-primary" />
            Held With Love Foundation
          </div>
          <p className="mt-4 text-secondary-foreground/80 max-w-md">
            In association with Gifted Child Development Center — empowering abilities and inspiring lives through therapy, care and community.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
            <span className="font-bold text-sun">80G & 12A</span>
            <span className="text-sm text-secondary-foreground/80">Tax Benefits Available</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sun">Explore</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            <li><Link to="/about" className="hover:text-sun">About</Link></li>
            <li><Link to="/therapies" className="hover:text-sun">Therapies</Link></li>
            <li><Link to="/impact" className="hover:text-sun">Our Impact</Link></li>
            <li><Link to="/get-involved" className="hover:text-sun">Get Involved</Link></li>
            <li><Link to="/gallery" className="hover:text-sun">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sun">Contact</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5" /> 99947 08749</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5" /> hello@heldwithlove.org</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> Tamil Nadu, India</li>
          </ul>
          <Link to="/donate" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-sun text-secondary font-semibold">
            <Heart className="w-4 h-4 fill-current" /> Donate Now
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Held With Love Foundation. All rights reserved.</p>
          <p className="italic text-sun/90">Empowering Abilities, Inspiring Lives</p>
        </div>
      </div>
    </footer>
  );
}
