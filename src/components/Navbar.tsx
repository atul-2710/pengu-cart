import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Penguin } from "./Penguin";

export function Navbar() {
  const { count, setOpen, bumpKey } = useCart();
  const [bump, setBump] = useState(false);

  useEffect(() => {
    if (bumpKey === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 450);
    return () => clearTimeout(t);
  }, [bumpKey]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-3xl px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <Penguin size={40} />
          <span className="text-xl font-extrabold tracking-tight text-[color:var(--ocean)]">
            Pengu Kart
          </span>
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-semibold text-[color:var(--ocean)] md:flex">
          {[
            { to: "/", label: "Home" },
            { to: "/categories", label: "Categories" },
            { to: "/about", label: "About" },
          ].map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary" }}
                className="transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <motion.button
          onClick={() => setOpen(true)}
          animate={bump ? { scale: [1, 1.25, 0.95, 1] } : { scale: 1 }}
          transition={{ duration: 0.45 }}
          className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          aria-label="Open cart"
        >
          <ShoppingCart className="h-5 w-5" />
          <AnimatePresence>
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[color:var(--ocean)] px-1 text-[11px] font-bold text-white"
              >
                {count}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>
    </header>
  );
}
