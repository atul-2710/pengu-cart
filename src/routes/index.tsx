import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Penguin } from "@/components/Penguin";
import { ProductCard } from "@/components/ProductCard";
import { PageTransition } from "@/components/PageTransition";
import { CATEGORIES, FEATURED } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pengu Kart — Cool finds from the arctic" },
      { name: "description", content: "Shop electronics, clothes, home, furniture, books and games — the cozy arctic way." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="glass relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-12 sm:py-16">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sky-300/40 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-blue-300/40 blur-3xl" />

        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[color:var(--ocean)]">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Fresh from the iceberg
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[color:var(--ocean)] sm:text-6xl">
              Cool finds, <br />
              <span className="text-primary">cozy vibes.</span>
            </h1>
            <p className="mt-4 max-w-md text-base text-muted-foreground">
              Welcome to Pengu Kart — a tiny arctic marketplace packed with treasures
              hand-picked by our chief penguin.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/categories"
                className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-bold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110"
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/70 px-6 py-3 font-bold text-[color:var(--ocean)] hover:bg-white"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            {/* Ice base */}
            <div className="absolute bottom-2 h-6 w-56 rounded-full bg-gradient-to-r from-sky-200 via-white to-sky-200 blur-sm" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Penguin size={240} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mt-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-extrabold text-[color:var(--ocean)] sm:text-3xl">
            Browse categories
          </h2>
          <Link to="/categories" className="text-sm font-bold text-primary hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((c) => (
            <motion.div
              key={c.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`glass cursor-pointer rounded-2xl bg-gradient-to-br ${c.color} p-4 text-center`}
            >
              <div className="text-4xl">{c.emoji}</div>
              <div className="mt-2 text-sm font-bold text-[color:var(--ocean)]">{c.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mt-14">
        <h2 className="mb-6 text-2xl font-extrabold text-[color:var(--ocean)] sm:text-3xl">
          Featured for you
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FEATURED.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
