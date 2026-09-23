import { createFileRoute } from "@tanstack/react-router";
import Layout, { PageHeader } from "@/components/Layout";
import { menu } from "@/lib/menu-data";
import { site } from "@/lib/site";
import headerImg from "@/assets/bock/kaeseplatte.jpg";

export const Route = createFileRoute("/speisekarte")({
  component: Speisekarte,
  head: () => ({
    meta: [
      { title: "Speisekarte – St. Oswalder Bockhütte" },
      {
        name: "description",
        content:
          "Brettljause, Kaspressknödelsuppe, Kasnudeln, Bauernkrapfen und hausgemachter Kirschlikör – die Karte der St. Oswalder Bockhütte in Bad Kleinkirchheim.",
      },
      { property: "og:title", content: "Speisekarte – St. Oswalder Bockhütte" },
      {
        property: "og:description",
        content: "Hausgemachte Almküche mit Produkten aus der Region.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/speisekarte" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/speisekarte" }],
  }),
});

function Speisekarte() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Almküche"
        title="Speisekarte"
        text="Fast alles kommt aus eigener Produktion oder von Bauern aus dem Tal. Was aus ist, ist aus – dafür ist alles frisch."
        image={headerImg}
      />

      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-14">
          {menu.map((section) => (
            <section key={section.id}>
              <h2 className="font-display text-2xl font-bold text-primary">{section.title}</h2>
              {section.note && (
                <p className="mt-2 text-sm italic text-muted-foreground">{section.note}</p>
              )}
              <ul className="mt-6 divide-y divide-border">
                {section.items.map((item) => (
                  <li key={item.name} className="flex gap-6 py-4">
                    <div className="flex-1">
                      <p className="font-semibold">
                        {item.name}
                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="ml-2 rounded-full bg-secondary px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </p>
                      {item.description && (
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      )}
                    </div>
                    <span className="whitespace-nowrap font-display font-bold text-primary">
                      {item.price === "gratis" ? "gratis" : `€ ${item.price}`}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-border bg-cream p-6 text-sm">
          <p className="font-semibold">Gruppen & Hüttenabende</p>
          <p className="mt-2 text-muted-foreground">
            Für Gruppen ab 10 Personen kochen wir gerne nach Absprache. Ruf uns einfach an:{" "}
            <a href={site.phoneHref} className="font-semibold text-primary underline-offset-4 hover:underline">
              {site.phone}
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
