import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { Penguin } from "./Penguin";
import { Minus, Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CartDrawer() {
  const { open, setOpen, items, total, add, remove, clear } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 bg-gradient-to-b from-sky-50 to-blue-100 sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-2xl font-extrabold text-[color:var(--ocean)]">
            Your Igloo Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Penguin size={180} mood="sad" />
            </motion.div>
            <div className="mx-auto mt-2 h-3 w-40 rounded-full bg-sky-200/80 blur-[1px]" />
            <h3 className="mt-4 text-xl font-bold text-[color:var(--ocean)]">
              Your cart is feeling a bit chilly!
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Add some treasures to warm it up.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-1 py-4">
              <AnimatePresence initial={false}>
                {items.map((it) => (
                  <motion.div
                    key={it.id}
                    layout
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    className="glass mb-3 flex items-center gap-3 rounded-2xl p-3"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${it.color} text-2xl`}
                    >
                      {it.emoji}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-[color:var(--ocean)]">{it.title}</p>
                      <p className="text-xs text-muted-foreground">${it.price}</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-white/70 px-2 py-1">
                      <button
                        onClick={() => remove(it.id)}
                        className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-sky-100"
                        aria-label="Decrease"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-5 text-center text-sm font-bold">{it.qty}</span>
                      <button
                        onClick={() => add(it)}
                        className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-sky-100"
                        aria-label="Increase"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="glass mt-2 space-y-3 rounded-2xl p-4">
              <div className="flex items-center justify-between text-[color:var(--ocean)]">
                <span className="font-semibold">Total</span>
                <span className="text-2xl font-extrabold">${total.toFixed(2)}</span>
              </div>
              <button className="w-full rounded-2xl bg-primary py-3 font-bold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110">
                Checkout
              </button>
              <button
                onClick={clear}
                className="flex w-full items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-3 w-3" /> Clear cart
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
