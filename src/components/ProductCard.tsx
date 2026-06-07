import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart, type Product } from "@/lib/cart-context";
import { formatINR } from "@/lib/currency";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [status, setStatus] = useState<"idle" | "sliding" | "added">("idle");

  const handleAdd = () => {
    if (status !== "idle") return;
    add(product, qty);
    setStatus("sliding");
    setTimeout(() => setStatus("added"), 650);
    setTimeout(() => setStatus("idle"), 1600);
  };

  const btnBase =
    "mt-3 relative flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold overflow-hidden";
  const btnIdle = "bg-primary text-primary-foreground hover:brightness-110";
  const btnAdded = "bg-emerald-500 text-white";

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

        <button onClick={handleAdd} className={`${btnBase} ${status === "added" ? btnAdded : btnIdle}`}>
          <AnimatePresence mode="wait">
            {status === "sliding" && (
              <motion.div
                key="slide"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <ShoppingCart className="h-4 w-4" />
              </motion.div>
            )}

            {status === "idle" && (
              <motion.span
                key="idle"
                className="flex items-center gap-1.5"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="h-3.5 w-3.5" /> Add to Cart
              </motion.span>
            )}

            {status === "added" && (
              <motion.span
                key="added"
                className="flex items-center gap-1.5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <Check className="h-3.5 w-3.5" /> Added to Cart
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
}
