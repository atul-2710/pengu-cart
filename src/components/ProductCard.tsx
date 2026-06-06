import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { useState } from "react";
import { useCart, type Product } from "@/lib/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(product);
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
      <div className="px-1">
        <h3 className="line-clamp-1 font-bold text-[color:var(--ocean)]">{product.title}</h3>
        <p className="text-xs text-muted-foreground">{product.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-extrabold text-[color:var(--ocean)]">${product.price}</span>
          <motion.button
            onClick={handleAdd}
            animate={added ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.4 }}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
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
                <Plus className="h-3.5 w-3.5" /> Add
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
