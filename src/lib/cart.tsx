import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "./shop-data";

export type CartLine = { id: string; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  items: { product: Product; quantity: number }[];
  count: number;
  total: number;
  add: (id: string, quantity?: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "bockhuette-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  const value = useMemo<CartContextValue>(() => {
    const items = lines
      .map((line) => {
        const product = products.find((p) => p.id === line.id);
        return product ? { product, quantity: line.quantity } : null;
      })
      .filter((x): x is { product: Product; quantity: number } => x !== null);

    return {
      lines,
      items,
      count: items.reduce((sum, i) => sum + i.quantity, 0),
      total: items.reduce((sum, i) => sum + i.quantity * i.product.price, 0),
      add: (id, quantity = 1) =>
        setLines((prev) => {
          const existing = prev.find((l) => l.id === id);
          return existing
            ? prev.map((l) => (l.id === id ? { ...l, quantity: l.quantity + quantity } : l))
            : [...prev, { id, quantity }];
        }),
      setQuantity: (id, quantity) =>
        setLines((prev) =>
          quantity <= 0
            ? prev.filter((l) => l.id !== id)
            : prev.map((l) => (l.id === id ? { ...l, quantity } : l)),
        ),
      remove: (id) => setLines((prev) => prev.filter((l) => l.id !== id)),
      clear: () => setLines([]),
      open,
      setOpen,
    };
  }, [lines, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
