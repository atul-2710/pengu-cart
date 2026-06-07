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
  // Electronics
  { id: "p1", title: "Frosty Headphones", price: 6999, category: "Electronics", emoji: "🎧", color: "from-sky-200 to-blue-300" },
  { id: "p7", title: "Glacier Smart Watch", price: 8499, category: "Electronics", emoji: "⌚", color: "from-sky-100 to-blue-300" },
  { id: "p8", title: "Iceberg Speaker", price: 3299, category: "Electronics", emoji: "🔊", color: "from-cyan-200 to-sky-300" },
  // Clothes
  { id: "p2", title: "Arctic Puffer Jacket", price: 10499, category: "Clothes", emoji: "🧥", color: "from-cyan-200 to-sky-400" },
  { id: "p9", title: "Snowflake Beanie", price: 899, category: "Clothes", emoji: "🧣", color: "from-blue-100 to-sky-200" },
  { id: "p10", title: "Frost Sneakers", price: 4599, category: "Clothes", emoji: "👟", color: "from-sky-200 to-cyan-300" },
  // Home Accessories
  { id: "p3", title: "Iceberg Candle", price: 1899, category: "Home Accessories", emoji: "🕯️", color: "from-blue-100 to-indigo-200" },
  { id: "p11", title: "Polar Mug", price: 599, category: "Home Accessories", emoji: "☕", color: "from-sky-100 to-blue-200" },
  { id: "p12", title: "Snowy Wall Art", price: 2299, category: "Home Accessories", emoji: "🖼️", color: "from-cyan-100 to-indigo-200" },
  // Furniture
  { id: "p4", title: "Glacier Lounge Chair", price: 24999, category: "Furniture", emoji: "🛋️", color: "from-indigo-200 to-sky-300" },
  { id: "p13", title: "Iceberg Coffee Table", price: 12999, category: "Furniture", emoji: "🪑", color: "from-sky-200 to-indigo-200" },
  { id: "p14", title: "Tundra Floor Lamp", price: 5499, category: "Furniture", emoji: "💡", color: "from-blue-200 to-sky-300" },
  // Books
  { id: "p5", title: "Tales of the Tundra", price: 499, category: "Books", emoji: "📚", color: "from-sky-100 to-cyan-200" },
  { id: "p15", title: "Penguin Cookbook", price: 799, category: "Books", emoji: "📖", color: "from-cyan-100 to-blue-200" },
  { id: "p16", title: "Arctic Atlas", price: 1299, category: "Books", emoji: "🗺️", color: "from-blue-100 to-sky-200" },
  // Online Games
  { id: "p6", title: "Pengu Quest Online", price: 1499, category: "Online Games", emoji: "🎮", color: "from-cyan-100 to-blue-200" },
  { id: "p17", title: "Iceberg Racers", price: 999, category: "Online Games", emoji: "🏎️", color: "from-sky-200 to-cyan-300" },
  { id: "p18", title: "Snowball Showdown", price: 1199, category: "Online Games", emoji: "❄️", color: "from-blue-200 to-indigo-200" },
];
