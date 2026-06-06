import type { Product } from "./cart-context";

export const CATEGORIES = [
  { name: "Electronics", emoji: "🎧", color: "from-sky-200 to-blue-300" },
  { name: "Clothes", emoji: "🧥", color: "from-cyan-200 to-sky-300" },
  { name: "Home Accessories", emoji: "🕯️", color: "from-blue-200 to-indigo-300" },
  { name: "Furniture", emoji: "🛋️", color: "from-indigo-200 to-sky-300" },
  { name: "Books", emoji: "📚", color: "from-sky-100 to-cyan-300" },
  { name: "Online Games", emoji: "🎮", color: "from-cyan-100 to-blue-300" },
];

export const FEATURED: Product[] = [
  { id: "p1", title: "Frosty Headphones", price: 89, category: "Electronics", emoji: "🎧", color: "from-sky-200 to-blue-300" },
  { id: "p2", title: "Arctic Puffer Jacket", price: 129, category: "Clothes", emoji: "🧥", color: "from-cyan-200 to-sky-400" },
  { id: "p3", title: "Iceberg Candle", price: 24, category: "Home Accessories", emoji: "🕯️", color: "from-blue-100 to-indigo-200" },
  { id: "p4", title: "Glacier Lounge Chair", price: 349, category: "Furniture", emoji: "🛋️", color: "from-indigo-200 to-sky-300" },
  { id: "p5", title: "Tales of the Tundra", price: 18, category: "Books", emoji: "📚", color: "from-sky-100 to-cyan-200" },
  { id: "p6", title: "Pengu Quest Online", price: 39, category: "Online Games", emoji: "🎮", color: "from-cyan-100 to-blue-200" },
];
