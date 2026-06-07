import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  className?: string;
  size?: number;
  mood?: "happy" | "sad";
  interactive?: boolean;
};

export function Penguin({ className, size = 160, mood = "happy", interactive = false }: Props) {
  const [hovered, setHovered] = useState(false);
  const isWaving = interactive && hovered;
  const happy = mood === "happy";

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role={interactive ? "img" : undefined}
      aria-label={interactive ? "Friendly penguin mascot" : undefined}
      onHoverStart={() => interactive && setHovered(true)}
      onHoverEnd={() => interactive && setHovered(false)}
      onTap={() => interactive && setHovered((h) => !h)}
      style={{ cursor: interactive ? "pointer" : undefined }}
      animate={isWaving ? { rotate: [0, -4, 4, -3, 3, 0] } : { rotate: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {/* Shadow */}
      <ellipse cx="100" cy="208" rx="55" ry="6" fill="#1e3a5f" opacity="0.15" />
      {/* Body */}
      <ellipse cx="100" cy="120" rx="70" ry="85" fill="#1e293b" />
      {/* Belly */}
      <ellipse cx="100" cy="135" rx="48" ry="65" fill="#fafafa" />
      {/* Feet */}
      <ellipse cx="75" cy="200" rx="18" ry="9" fill="#fb923c" />
      <ellipse cx="125" cy="200" rx="18" ry="9" fill="#fb923c" />
      {/* Left wing */}
      <motion.ellipse
        cx="38"
        cy="125"
        rx="14"
        ry="38"
        fill="#0f172a"
        style={{ originX: "38px", originY: "95px" }}
        animate={isWaving ? { rotate: [-12, -55, -30, -55, -12] } : { rotate: -12 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
      {/* Right wing */}
      <motion.ellipse
        cx="162"
        cy="125"
        rx="14"
        ry="38"
        fill="#0f172a"
        style={{ originX: "162px", originY: "95px" }}
        animate={isWaving ? { rotate: [12, 25, 12] } : { rotate: 12 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
      {/* Head */}
      <ellipse cx="100" cy="80" rx="62" ry="60" fill="#1e293b" />
      {/* Eyes */}
      <circle cx="80" cy="78" r="10" fill="#fff" />
      <circle cx="120" cy="78" r="10" fill="#fff" />
      {isWaving ? (
        <>
          {/* Happy closed eyes */}
          <path d="M72 78 Q80 72 88 78" stroke="#0f172a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M112 78 Q120 72 128 78" stroke="#0f172a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </>
      ) : happy ? (
        <>
          <circle cx="82" cy="80" r="5" fill="#0f172a" />
          <circle cx="122" cy="80" r="5" fill="#0f172a" />
          <circle cx="84" cy="78" r="1.6" fill="#fff" />
          <circle cx="124" cy="78" r="1.6" fill="#fff" />
        </>
      ) : (
        <>
          <circle cx="80" cy="82" r="4" fill="#0f172a" />
          <circle cx="120" cy="82" r="4" fill="#0f172a" />
        </>
      )}
      {/* Beak */}
      <polygon points="92,92 108,92 100,108" fill="#fb923c" stroke="#ea7c1c" strokeWidth="1.5" />
      {/* Cheeks */}
      <circle cx="70" cy="95" r="5" fill="#fda4af" opacity="0.6" />
      <circle cx="130" cy="95" r="5" fill="#fda4af" opacity="0.6" />
      {/* Speech bubble on hover */}
      {isWaving && (
        <motion.g
          initial={{ opacity: 0, y: 8, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
        >
          <rect x="130" y="18" width="62" height="28" rx="14" fill="#fff" stroke="#bae6fd" strokeWidth="2" />
          <polygon points="138,44 132,54 148,46" fill="#fff" stroke="#bae6fd" strokeWidth="2" />
          <text x="161" y="37" textAnchor="middle" fontSize="13" fontWeight="800" fill="#0c4a6e">
            Hi!
          </text>
        </motion.g>
      )}
    </motion.svg>
  );
}
