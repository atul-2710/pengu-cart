import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Snowflake, Heart, Sparkles } from "lucide-react";
import { Penguin } from "@/components/Penguin";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pengu Kart" },
      { name: "description", content: "The story behind Pengu Kart, built at the Newton Headstart Conference 2026." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageTransition>
      <div className="grid items-center gap-10 md:grid-cols-[1fr_220px]">
        <div>
          <h1 className="text-3xl font-extrabold text-[color:var(--ocean)] sm:text-5xl">
            A tiny shop with a <span className="text-primary">big heart.</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Pengu Kart began as a doodle of a penguin sliding down an iceberg with a
            shopping bag. Today it's a cozy little marketplace where every product is
            picked with care — and a wave of the flipper.
          </p>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="justify-self-center"
        >
          <Penguin size={200} />
        </motion.div>
      </div>

      {/* Conference banner */}
      <div className="glass mt-10 flex flex-col items-center gap-3 rounded-3xl bg-gradient-to-r from-sky-200/80 via-white/70 to-blue-200/80 px-6 py-8 text-center sm:flex-row sm:text-left">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
          <Sparkles className="h-7 w-7" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Made with love
          </p>
          <p className="text-lg font-extrabold text-[color:var(--ocean)] sm:text-xl">
            Proudly built as part of the Newton Headstart Conference 2026.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          { icon: Snowflake, title: "Crisp & clean", body: "An interface as fresh as polar air." },
          { icon: Heart, title: "Friendly first", body: "Designed to make shopping feel like a hug." },
          { icon: Sparkles, title: "A bit magical", body: "Little animations that spark joy." },
        ].map((f) => (
          <div key={f.title} className="glass rounded-2xl p-5">
            <f.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-bold text-[color:var(--ocean)]">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </PageTransition>
  );
}
