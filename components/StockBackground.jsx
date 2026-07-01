"use client";

// Purely decorative animated "candlesticks" floating upward behind the hero.
// Uses CSS keyframes (see globals.css .candle) driven by inline randomized delays.
export default function StockBackground() {
  const candles = Array.from({ length: 18 }).map((_, i) => ({
    left: `${(i * 97) % 100}%`,
    delay: `${(i * 1.3) % 8}s`,
    duration: `${8 + (i % 5)}s`,
    height: 30 + ((i * 13) % 60),
    color: i % 3 === 0 ? "bg-danger/40" : "bg-success/40",
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {candles.map((c, i) => (
        <span
          key={i}
          className={`candle absolute bottom-0 w-1.5 rounded-full ${c.color}`}
          style={{
            left: c.left,
            height: `${c.height}px`,
            animationDelay: c.delay,
            animationDuration: c.duration,
          }}
        />
      ))}
    </div>
  );
}
