import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Dog, Leaf, MapPin, Mountain, Star, Utensils } from "lucide-react";
import Layout from "@/components/Layout";
import { reviews, site } from "@/lib/site";
import { formatPrice, products } from "@/lib/shop-data";
import { useCart } from "@/lib/cart";
import heroImg from "@/assets/bock/huette-eingang.jpg";
import landschaft from "@/assets/bock/landschaft-1.jpg";
import kaese from "@/assets/bock/kaeseplatte.jpg";
import mehlspeisen from "@/assets/bock/mehlspeisen.jpg";
import krautsuppe from "@/assets/bock/krautsuppe.jpg";
import wegkreuz from "@/assets/bock/wegkreuz.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "St. Oswalder Bockhütte – Almhütte in Bad Kleinkirchheim" },
      {
        name: "description",
        content:
          "Urige Almhütte über St. Oswald in Bad Kleinkirchheim: hausgemachte Brettljause, Mehlspeisen, Panoramaterrasse und ein kleiner Hofladen mit Kirschlikör & Co.",
      },
      { property: "og:title", content: "St. Oswalder Bockhütte" },
      {
        property: "og:description",
        content:
          "Hausgemachte Almküche, Panoramaterrasse und kleiner Hofladen – 4,4 Sterne bei Tripadvisor.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const favourites = [
  {
    name: "Bockhütten-Brettljause",
    description: "Hausspeck, Hauswurst, Bergkäse, Verhackert, Kren und Bauernbrot",
    price: "16,50",
    img: kaese,
  },
  {
    name: "Krautsuppe mit Löwenzahnblüte",
    description: "Cremige Krautsuppe mit Kräutern aus der Almwiese",
    price: "6,90",
    img: krautsuppe,
  },
  {
    name: "Bauernkrapfen mit Marmelade",
    description: "Frisch gebacken – solange der Vorrat reicht",
    price: "5,50",
    img: mehlspeisen,
  },
];

function Index() {
  const { add, setOpen } = useCart();
  const highlights = products.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Eingang der St. Oswalder Bockhütte" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 text-primary-foreground">
          <p className="eyebrow opacity-85">Bad Kleinkirchheim · Kärnten</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
            St. Oswalder Bockhütte
          </h1>
          <p className="mt-5 max-w-xl text-lg opacity-90">
            Grüß Gott. Eine urige Holzhütte auf der Alm, hausgemachte Jause, Getränke aus dem
            Brunnen und eine Terrasse mit Blick über das ganze Tal.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/speisekarte"
              className="rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Speisekarte ansehen
            </Link>
            <Link
              to="/shop"
              className="rounded-md border border-white/40 px-5 py-3 text-sm font-bold transition-colors hover:bg-white/10"
            >
              Zum Hofladen
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm opacity-90">
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-current" /> {site.rating.toLocaleString("de-AT")} von 5 ·{" "}
              {site.reviewCount} Bewertungen
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" /> Täglich 10:00 – 16:30
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> St. Oswald 4, Bad Kleinkirchheim
            </span>
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-muted-foreground">Unsere Hütte</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
            Einfach, ehrlich, mitten in der Almlandschaft
          </h2>
          <p className="mt-5 text-muted-foreground">
            Die Bockhütte liegt oberhalb von St. Oswald – dunkles Lärchenholz, Geweihe an der Wand,
            Blumenkisterl am Fenster und ein Brunnen, in dem die Getränke kühlen. Drinnen wärmt der
            Kachelofen, draußen sitzt man auf der Terrasse und schaut den Wolken beim Ziehen zu.
          </p>
          <p className="mt-4 text-muted-foreground">
            Gekocht wird, was da ist: Speck, Käse und Aufstriche aus eigener Produktion, Kräuter von
            der Almwiese, Beeren aus dem Wald. Hunde sind bei uns ausdrücklich willkommen.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              { icon: Utensils, title: "Hausgemacht", text: "Jause, Suppen und Mehlspeisen frisch von uns" },
              { icon: Mountain, title: "Panoramaterrasse", text: "Rund 50 Minuten von der Bergbahn" },
              { icon: Dog, title: "Hundefreundlich", text: "Wassernapf und Schatten inklusive" },
            ].map((f) => (
              <div key={f.title}>
                <f.icon className="h-5 w-5 text-primary" />
                <p className="mt-2 font-semibold">{f.title}</p>
                <p className="text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={landschaft} alt="Almlandschaft" className="h-64 w-full rounded-lg object-cover shadow-soft" />
          <img src={kaese} alt="Käseplatte" className="mt-8 h-64 w-full rounded-lg object-cover shadow-soft" />
          <img src={wegkreuz} alt="Wegkreuz auf der Alm" className="h-56 w-full rounded-lg object-cover shadow-soft" />
          <img src={mehlspeisen} alt="Frische Mehlspeisen" className="mt-[-2rem] h-56 w-full rounded-lg object-cover shadow-soft" />
        </div>
      </section>

      {/* Speisekarte-Auszug */}
      <section className="surface-forest py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow opacity-75">Aus der Küche</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Beliebt bei unseren Gästen</h2>
            </div>
            <Link
              to="/speisekarte"
              className="rounded-md border border-white/40 px-5 py-3 text-sm font-bold transition-colors hover:bg-white/10"
            >
              Ganze Speisekarte
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {favourites.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-lg bg-white/10">
                <img src={item.img} alt={item.name} className="h-52 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{item.name}</h3>
                  <p className="mt-2 text-sm opacity-85">{item.description}</p>
                  <p className="mt-4 font-display font-bold">€ {item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shop */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-muted-foreground">Kleiner Hofladen</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              Ein Stück Alm für daheim
            </h2>
          </div>
          <Link
            to="/shop"
            className="rounded-md border border-border px-5 py-3 text-sm font-bold transition-colors hover:bg-secondary"
          >
            Alle Produkte
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((product) => (
            <article
              key={product.id}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft"
            >
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover" loading="lazy" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{product.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      add(product.id);
                      setOpen(true);
                    }}
                    className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
                  >
                    In den Korb
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bewertungen */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="eyebrow text-muted-foreground">Gästestimmen</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
            {site.rating.toLocaleString("de-AT")} von 5 auf Tripadvisor
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review.title} className="rounded-lg border border-border bg-card p-6 shadow-soft">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 font-display font-bold">{review.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">„{review.text}“</p>
                <footer className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
                  {review.author}
                </footer>
              </blockquote>
            ))}
          </div>
          <a
            href={site.tripadvisor}
            className="mt-8 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Alle {site.reviewCount} Bewertungen auf Tripadvisor lesen
          </a>
        </div>
      </section>

      {/* Anfahrt CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 rounded-lg border border-border bg-card p-8 shadow-soft sm:grid-cols-3">
          <div>
            <Clock className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-display text-lg font-bold">Geöffnet</h3>
            <p className="mt-1 text-sm text-muted-foreground">Täglich 10:00 – 16:30 Uhr</p>
          </div>
          <div>
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-display text-lg font-bold">So findest du uns</h3>
            <p className="mt-1 text-sm text-muted-foreground">{site.address}</p>
          </div>
          <div>
            <Leaf className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-display text-lg font-bold">Reservieren</h3>
            <a href={site.phoneHref} className="mt-1 block text-sm font-semibold text-primary">
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
