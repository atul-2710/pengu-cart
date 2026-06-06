type Props = { className?: string; size?: number; mood?: "happy" | "sad" };

export function Penguin({ className, size = 160, mood = "happy" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
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
      {/* Wings */}
      <ellipse cx="38" cy="125" rx="14" ry="38" fill="#0f172a" transform="rotate(-12 38 125)" />
      <ellipse cx="162" cy="125" rx="14" ry="38" fill="#0f172a" transform="rotate(12 162 125)" />
      {/* Head highlight */}
      <ellipse cx="100" cy="80" rx="62" ry="60" fill="#1e293b" />
      {/* Eyes */}
      <circle cx="80" cy="78" r="10" fill="#fff" />
      <circle cx="120" cy="78" r="10" fill="#fff" />
      {mood === "happy" ? (
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
    </svg>
  );
}
