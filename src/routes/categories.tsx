import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES, FEATURED } from "@/lib/products";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — Pengu Kart" },
      { name: "description", content: "Browse every Pengu Kart category, from electronics to online games." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <PageTransition>
      <h1 className="text-3xl font-extrabold text-[color:var(--ocean)] sm:text-4xl">
        All categories
      </h1>
      <p className="mt-2 text-muted-foreground">Pick a tile and waddle on in.</p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {CATEGORIES.map((c) => (
          <motion.div
            key={c.name}
            whileHover={{ scale: 1.05 }}
            className={`glass rounded-3xl bg-gradient-to-br ${c.color} p-6 text-center`}
          >
            <div className="text-5xl">{c.emoji}</div>
            <div className="mt-3 text-lg font-bold text-[color:var(--ocean)]">{c.name}</div>
          </motion.div>
        ))}
      </div>

      <h2 className="mt-14 text-2xl font-extrabold text-[color:var(--ocean)]">All products</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {FEATURED.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </PageTransition>
  );
}
