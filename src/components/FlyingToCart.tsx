import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Penguin } from "./Penguin";

export function FlyingToCart() {
  const { fly, endFly, add } = useCart();
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!fly) return;
    const el = document.getElementById("cart-target");
    if (!el) {
      endFly();
      return;
    }
    const r = el.getBoundingClientRect();
    setTarget({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  }, [fly, endFly]);

  if (!fly || !target) return null;

  const dx = target.x - fly.from.x;
  const dy = target.y - fly.from.y;
  // Arc peak: midpoint, lifted upward
  const peakX = dx / 2;
  const peakY = Math.min(dy / 2 - 120, -60);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <AnimatePresence onExitComplete={endFly}>
        <motion.div
          key={fly.key}
          initial={{ x: fly.from.x - 32, y: fly.from.y - 32, opacity: 0, scale: 0.6 }}
          animate={{
            x: [fly.from.x - 32, fly.from.x - 32 + peakX, target.x - 32],
            y: [fly.from.y - 32, fly.from.y - 32 + peakY, target.y - 32],
            opacity: [0, 1, 1, 0],
            scale: [0.6, 1.1, 0.35],
            rotate: [0, -15, 25],
          }}
          transition={{
            duration: 0.95,
            times: [0, 0.4, 1],
            ease: "easeInOut",
            opacity: { duration: 0.95, times: [0, 0.15, 0.85, 1] },
          }}
          onAnimationComplete={() => {
            add(fly.product, fly.qty);
            endFly();
          }}
          className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center"
        >
          {/* Tiny mascot pushing the parcel */}
          <motion.div
            className="absolute -left-7 top-2"
            animate={{ y: [0, -2, 0, -2, 0] }}
            transition={{ duration: 0.5, repeat: 2 }}
          >
            <Penguin size={36} />
          </motion.div>
          {/* The parcel */}
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${fly.product.color} text-3xl shadow-xl ring-2 ring-white/80`}
          >
            <span className="drop-shadow">{fly.product.emoji}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
