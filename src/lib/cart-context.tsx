import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  emoji: string;
  color: string;
};

export type CartItem = Product & { qty: number };

export type FlyPayload = {
  key: number;
  product: Product;
  qty: number;
  from: { x: number; y: number };
};

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  bumpKey: number;
  fly: FlyPayload | null;
  triggerFly: (p: Product, from: { x: number; y: number }, qty?: number) => void;
  endFly: () => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [bumpKey, setBumpKey] = useState(0);
  const [fly, setFly] = useState<FlyPayload | null>(null);

  const add = (p: Product, qty: number = 1) => {
    setItems((cur) => {
      const ex = cur.find((i) => i.id === p.id);
      if (ex) return cur.map((i) => (i.id === p.id ? { ...i, qty: i.qty + qty } : i));
      return [...cur, { ...p, qty }];
    });
    setBumpKey((k) => k + 1);
  };
  const remove = (id: string) =>
    setItems((cur) => cur.flatMap((i) => (i.id === id ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i])));
  const clear = () => setItems([]);

  const triggerFly = useCallback((p: Product, from: { x: number; y: number }) => {
    setFly({ key: Date.now() + Math.random(), emoji: p.emoji, color: p.color, from });
  }, []);
  const endFly = useCallback(() => setFly(null), []);

  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <Ctx.Provider
      value={{ items, count, total, open, setOpen, add, remove, clear, bumpKey, fly, triggerFly, endFly }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be inside CartProvider");
  return c;
}
