import { createFileRoute } from "@tanstack/react-router";
import Layout, { PageHeader } from "@/components/Layout";
import huette from "@/assets/bock/huette-eingang.jpg";
import huette2 from "@/assets/bock/huette-2.jpg";
import ansicht from "@/assets/bock/ansicht-huette.jpg";
import landschaft1 from "@/assets/bock/landschaft-1.jpg";
import landschaft2 from "@/assets/bock/landschaft-2.jpg";
import wegkreuz from "@/assets/bock/wegkreuz.jpg";
import gipfel from "@/assets/bock/gipfel-winter.jpg";
import kaese from "@/assets/bock/kaeseplatte.jpg";
import krautsuppe from "@/assets/bock/krautsuppe.jpg";
import mehlspeisen from "@/assets/bock/mehlspeisen.jpg";
import getraenke from "@/assets/bock/getraenkekuehlung.jpg";
import speise from "@/assets/bock/speise-krautsuppe.jpg";

const gallery = [
  { src: huette, alt: "Eingang der St. Oswalder Bockhütte mit Grüss-Gott-Schild" },
  { src: wegkreuz, alt: "Wegkreuz mit Blick auf die Bockhütte" },
  { src: mehlspeisen, alt: "Frische Bauernkrapfen und Mehlspeisen vor der Hütte" },
  { src: kaese, alt: "Käseplatte auf dem Holzbrett" },
  { src: landschaft1, alt: "Almlandschaft rund um die Bockhütte" },
  { src: krautsuppe, alt: "Krautsuppe mit Löwenzahnblüte" },
  { src: ansicht, alt: "Ansicht der Hütte" },
  { src: gipfel, alt: "Verschneiter Gipfelgrat über der Alm" },
  { src: getraenke, alt: "Natürliche Getränkekühlung am Brunnen" },
  { src: landschaft2, alt: "Wiesen und Wälder bei der Bockhütte" },
  { src: speise, alt: "Hausgemachte Speisen auf der Hütte" },
  { src: huette2, alt: "Die Bockhütte von der Seite" },
];

export const Route = createFileRoute("/galerie")({
  component: Galerie,
  head: () => ({
    meta: [
      { title: "Galerie – St. Oswalder Bockhütte" },
      {
        name: "description",
        content:
          "Bilder von der St. Oswalder Bockhütte: urige Holzhütte, Almlandschaft, Brettljause und Mehlspeisen in Bad Kleinkirchheim.",
      },
      { property: "og:title", content: "Galerie – St. Oswalder Bockhütte" },
      { property: "og:description", content: "Hütte, Berge und Almküche in Bildern." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/galerie" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/galerie" }],
  }),
});

function Galerie() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Eindrücke"
        title="Galerie"
        text="Fotos von der Hütte, der Terrasse und den Bergen rundherum – aufgenommen von unseren Gästen."
        image={landschaft1}
      />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>img]:mb-4">
          {gallery.map((photo) => (
            <img
              key={photo.alt}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full break-inside-avoid rounded-lg object-cover shadow-soft"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
