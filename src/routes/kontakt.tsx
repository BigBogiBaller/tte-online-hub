import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import Layout, { PageHeader } from "@/components/Layout";
import { site } from "@/lib/site";
import headerImg from "@/assets/bock/wegkreuz.jpg";

export const Route = createFileRoute("/kontakt")({
  component: Kontakt,
  head: () => ({
    meta: [
      { title: "Anfahrt & Öffnungszeiten – St. Oswalder Bockhütte" },
      {
        name: "description",
        content:
          "St. Oswald 4, 9546 Bad Kleinkirchheim: täglich 10:00 bis 16:30 geöffnet. Aufstieg, Parken und Kontakt zur St. Oswalder Bockhütte.",
      },
      { property: "og:title", content: "Anfahrt & Öffnungszeiten – St. Oswalder Bockhütte" },
      { property: "og:description", content: "Täglich 10:00–16:30, St. Oswald bei Bad Kleinkirchheim." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontakt" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
});

function Kontakt() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Besuch uns"
        title="Anfahrt & Öffnungszeiten"
        text="Die Hütte liegt oberhalb von St. Oswald – erreichbar über einen gemütlichen Almweg, rund 50 Minuten von der Bergbahn."
        image={headerImg}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="flex gap-4">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h2 className="font-display text-lg font-bold">Adresse</h2>
              <p className="mt-1 text-muted-foreground">{site.address}</p>
              <a
                href={site.maps}
                className="mt-2 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Route in Google Maps öffnen
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div>
              <h2 className="font-display text-lg font-bold">Kontakt</h2>
              <a href={site.phoneHref} className="mt-1 block text-muted-foreground hover:text-primary">
                {site.phone}
              </a>
              <a href={site.facebook} className="mt-1 block text-muted-foreground hover:text-primary">
                Facebook-Seite
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div className="w-full">
              <h2 className="font-display text-lg font-bold">Öffnungszeiten</h2>
              <ul className="mt-2 max-w-sm divide-y divide-border text-sm">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between py-2">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="font-semibold">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                In der Zwischensaison und bei schlechtem Wetter bitte kurz anrufen.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-border shadow-soft">
          <iframe
            title="Karte St. Oswalder Bockhütte"
            src="https://www.openstreetmap.org/export/embed.html?bbox=13.73%2C46.86%2C13.79%2C46.89&layer=mapnik&marker=46.873344%2C13.758535"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </Layout>
  );
}
