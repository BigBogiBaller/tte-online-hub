import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBasket, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { site } from "@/lib/site";

const links = [
  { to: "/", label: "Hütte" },
  { to: "/speisekarte", label: "Speisekarte" },
  { to: "/shop", label: "Hofladen" },
  { to: "/galerie", label: "Galerie" },
  { to: "/kontakt", label: "Anfahrt" },
];

export default function Navigation() {
  const { count, setOpen } = useCart();
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link to="/" className="leading-tight" onClick={() => setMobile(false)}>
          <span className="block font-display text-lg font-bold text-primary">St. Oswalder</span>
          <span className="eyebrow block text-muted-foreground">Bockhütte</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary [&.active]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary lg:inline-flex"
          >
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Warenkorb öffnen"
            className="relative inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ShoppingBasket className="h-4 w-4" />
            <span className="hidden sm:inline">Korb</span>
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-xs font-bold text-accent-foreground">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            className="inline-flex rounded-md border border-border p-2 md:hidden"
            aria-label="Menü"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobile && (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobile(false)}
              className="block py-2 text-base font-semibold text-foreground/85 [&.active]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
