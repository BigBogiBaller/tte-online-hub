import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="surface-forest mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold">{site.name}</h3>
          <p className="mt-3 max-w-xs text-sm opacity-85">{site.tagline}</p>
        </div>
        <div className="text-sm">
          <p className="eyebrow opacity-70">Kontakt</p>
          <p className="mt-3 opacity-90">{site.address}</p>
          <a href={site.phoneHref} className="mt-2 block underline-offset-4 hover:underline">
            {site.phone}
          </a>
          <a href={site.facebook} className="mt-1 block underline-offset-4 hover:underline">
            Facebook
          </a>
          <a href={site.tripadvisor} className="mt-1 block underline-offset-4 hover:underline">
            Tripadvisor
          </a>
        </div>
        <div className="text-sm">
          <p className="eyebrow opacity-70">Seiten</p>
          <div className="mt-3 flex flex-col gap-1">
            <Link to="/speisekarte" className="underline-offset-4 hover:underline">
              Speisekarte
            </Link>
            <Link to="/shop" className="underline-offset-4 hover:underline">
              Hofladen
            </Link>
            <Link to="/galerie" className="underline-offset-4 hover:underline">
              Galerie
            </Link>
            <Link to="/kontakt" className="underline-offset-4 hover:underline">
              Anfahrt & Öffnungszeiten
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-5 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {site.name} · Alle Preise inkl. MwSt.
      </div>
    </footer>
  );
}
