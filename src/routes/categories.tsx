import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { z } from "zod";
import { PageTransition } from "@/components/PageTransition";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES, FEATURED } from "@/lib/products";

const searchSchema = z.object({
  category: z.string().optional(),
});

export const Route = createFileRoute("/categories")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Categories — Pengu Kart" },
      { name: "description", content: "Browse every Pengu Kart category, from electronics to online games." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  const { category } = Route.useSearch();
  const navigate = useNavigate({ from: "/categories" });

  const setCategory = (name?: string) =>
    navigate({ search: name ? { category: name } : {} });

  const filtered = category
    ? FEATURED.filter((p) => p.category === category)
    : FEATURED;

  return (
    <PageTransition>
      <h1 className="text-3xl font-extrabold text-[color:var(--ocean)] sm:text-4xl">
        All categories
      </h1>
      <p className="mt-2 text-muted-foreground">Pick a tile and waddle on in.</p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {CATEGORIES.map((c) => {
          const active = category === c.name;
          return (
            <motion.button
              key={c.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCategory(active ? undefined : c.name)}
              className={`glass rounded-3xl bg-gradient-to-br ${c.color} p-6 text-center transition-shadow ${
                active ? "ring-4 ring-primary/70 shadow-xl" : ""
              }`}
            >
              <div className="text-5xl">{c.emoji}</div>
              <div className="mt-3 text-lg font-bold text-[color:var(--ocean)]">{c.name}</div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-extrabold text-[color:var(--ocean)]">
          {category ?? "All products"}
          <span className="ml-2 text-sm font-medium text-muted-foreground">
            ({filtered.length})
          </span>
        </h2>
        {category && (
          <button
            onClick={() => setCategory(undefined)}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-sm font-bold text-[color:var(--ocean)] hover:bg-white"
          >
            <X className="h-3.5 w-3.5" /> Clear filter
          </button>
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </PageTransition>
  );
}
