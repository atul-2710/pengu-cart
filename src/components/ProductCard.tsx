import { motion } from "framer-motion";
import { Check, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useCart, type Product } from "@/lib/cart-context";
import { formatINR } from "@/lib/currency";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1100);
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass flex w-full flex-col overflow-hidden rounded-3xl p-3"
    >
      <div
        className={`mb-3 flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br ${product.color} text-6xl`}
      >
        <span className="drop-shadow-md">{product.emoji}</span>
      </div>
      <div className="flex flex-1 flex-col px-1">
        <h3 className="line-clamp-1 font-bold text-[color:var(--ocean)]">{product.title}</h3>
        <p className="text-xs text-muted-foreground">{product.category}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-extrabold text-[color:var(--ocean)]">
            {formatINR(product.price)}
          </span>
          <div className="flex items-center gap-1 rounded-full bg-white/70 px-1.5 py-1">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-sky-100"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-5 text-center text-sm font-bold">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-sky-100"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
        </div>

        <motion.button
          onClick={handleAdd}
          animate={added ? { scale: [1, 1.08, 1] } : {}}
          transition={{ duration: 0.4 }}
          className={`mt-3 flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold transition-colors ${
            added
              ? "bg-emerald-500 text-white"
              : "bg-primary text-primary-foreground hover:brightness-110"
          }`}
        >
          {added ? (
            <>
              <Check className="h-3.5 w-3.5" /> Added!
            </>
          ) : (
            <>
              <Plus className="h-3.5 w-3.5" /> Add to Cart
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
