import { Minus, Plus, ShoppingBasket, Trash2, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/shop-data";
import { site } from "@/lib/site";

export default function CartSheet() {
  const { items, total, count, setQuantity, remove, open, setOpen, clear } = useCart();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const orderLines = items
    .map((i) => `${i.quantity}x ${i.product.name} (${formatPrice(i.product.price * i.quantity)})`)
    .join("\n");

  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Bestellung Hofladen Bockhütte",
  )}&body=${encodeURIComponent(
    `Bestellung:\n${orderLines}\n\nSumme: ${formatPrice(total)}\n\nName: ${name}\nKontakt: ${contact}\nAnmerkung: ${note}\n\nAbholung auf der Hütte.`,
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Schließen"
        className="absolute inset-0 bg-foreground/40"
        onClick={() => setOpen(false)}
      />
      <aside className="relative flex h-full w-full max-w-md flex-col border-l border-border bg-background shadow-deep">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-display text-lg font-bold">Dein Korb ({count})</h2>
          <button type="button" onClick={() => setOpen(false)} aria-label="Warenkorb schließen">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
              <ShoppingBasket className="mb-3 h-8 w-8" />
              <p className="text-sm">Noch nichts im Korb. Schau im Hofladen vorbei.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-3 border-b border-border pb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold leading-tight">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.unit}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Weniger"
                        className="rounded border border-border p-1"
                        onClick={() => setQuantity(product.id, quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{quantity}</span>
                      <button
                        type="button"
                        aria-label="Mehr"
                        className="rounded border border-border p-1"
                        onClick={() => setQuantity(product.id, quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        aria-label="Entfernen"
                        className="ml-auto text-muted-foreground hover:text-destructive"
                        onClick={() => remove(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">{formatPrice(product.price * quantity)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="space-y-3 border-t border-border bg-cream px-5 py-4">
            <div className="flex items-center justify-between font-display text-lg font-bold">
              <span>Summe</span>
              <span>{formatPrice(total)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Bestellung reservieren und bei uns auf der Hütte abholen oder telefonisch versenden
              lassen.
            </p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dein Name"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Telefon oder E-Mail"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Wann möchtest du abholen?"
              rows={2}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
            <a
              href={mailHref}
              onClick={() => setSent(true)}
              className="block rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Bestellung absenden
            </a>
            <a
              href={site.phoneHref}
              className="block rounded-md border border-border px-4 py-3 text-center text-sm font-semibold hover:bg-secondary"
            >
              Lieber anrufen: {site.phone}
            </a>
            {sent && (
              <button
                type="button"
                onClick={() => {
                  clear();
                  setSent(false);
                  setOpen(false);
                }}
                className="w-full text-xs text-muted-foreground underline underline-offset-4"
              >
                Bestellung abgeschickt – Korb leeren
              </button>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
