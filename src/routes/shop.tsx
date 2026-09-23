import { createFileRoute } from "@tanstack/react-router";
import Layout, { PageHeader } from "@/components/Layout";
import { formatPrice, products } from "@/lib/shop-data";
import { useCart } from "@/lib/cart";
import headerImg from "@/assets/bock/getraenkekuehlung.jpg";

export const Route = createFileRoute("/shop")({
  component: Shop,
  head: () => ({
    meta: [
      { title: "Hofladen – St. Oswalder Bockhütte" },
      {
        name: "description",
        content:
          "Kirschlikör, Bergkäse, Verhackert, Schwarzbeer-Marmelade und Gutscheine der St. Oswalder Bockhütte – online reservieren, auf der Hütte abholen.",
      },
      { property: "og:title", content: "Hofladen – St. Oswalder Bockhütte" },
      {
        property: "og:description",
        content: "Hausgemachtes von der Alm: Likör, Käse, Aufstriche und Gutscheine.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/shop" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
});

function Shop() {
  const { add, setOpen } = useCart();
  const categories = ["Hofladen", "Gutscheine"] as const;

  return (
    <Layout>
      <PageHeader
        eyebrow="Kleiner Shop"
        title="Hofladen"
        text="Ein Stück Bockhütte für daheim. Online reservieren, bei uns abholen oder nach Absprache versenden lassen."
        image={headerImg}
      />

      <div className="mx-auto max-w-6xl px-4 py-16">
        {categories.map((category) => (
          <section key={category} className="mb-16">
            <h2 className="font-display text-2xl font-bold text-primary">{category}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((p) => p.category === category)
                .map((product) => (
                  <article
                    key={product.id}
                    className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-48 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg font-bold">{product.name}</h3>
                      <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                        {product.unit}
                      </p>
                      <p className="mt-3 flex-1 text-sm text-muted-foreground">
                        {product.description}
                      </p>
                      <div className="mt-5 flex items-center justify-between gap-3">
                        <span className="font-display text-lg font-bold text-primary">
                          {formatPrice(product.price)}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            add(product.id);
                            setOpen(true);
                          }}
                          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                        >
                          In den Korb
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        ))}

        <div className="rounded-lg border border-border bg-cream p-6 text-sm text-muted-foreground">
          Bestellungen sind Reservierungen: Wir melden uns und vereinbaren Abholung oder Versand.
          Bezahlt wird bei der Übergabe.
        </div>
      </div>
    </Layout>
  );
}
