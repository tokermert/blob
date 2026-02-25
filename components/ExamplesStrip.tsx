const EXAMPLES = [
  { id: 1, a: "#FF7A00", b: "#FFD84D", c: "#FFAA3D", radius: "62% 38% 48% 52% / 44% 58% 42% 56%", speed: "8.4s" },
  { id: 2, a: "#FFD84D", b: "#FF7A00", c: "#FFBF40", radius: "56% 44% 58% 42% / 60% 42% 58% 40%", speed: "9.2s" },
  { id: 3, a: "#FFB347", b: "#FFD84D", c: "#FF7A00", radius: "46% 54% 38% 62% / 52% 44% 56% 48%", speed: "8.9s" },
  { id: 4, a: "#FFC35A", b: "#FF7A00", c: "#FFD84D", radius: "60% 40% 56% 44% / 36% 64% 36% 64%", speed: "9.6s" },
  { id: 5, a: "#FFD84D", b: "#FF9C2A", c: "#FF7A00", radius: "42% 58% 50% 50% / 64% 42% 58% 36%", speed: "8.2s" },
  { id: 6, a: "#FF7A00", b: "#FFC850", c: "#FFE27A", radius: "58% 42% 64% 36% / 42% 62% 38% 58%", speed: "9.8s" },
  { id: 7, a: "#FFE07A", b: "#FF7A00", c: "#FFB64A", radius: "64% 36% 46% 54% / 52% 36% 64% 48%", speed: "8.7s" },
  { id: 8, a: "#FF8B1A", b: "#FFD84D", c: "#FFC04B", radius: "48% 52% 42% 58% / 56% 48% 52% 44%", speed: "9.4s" }
];

function ExampleCard({ a, b, c, radius, speed }: { a: string; b: string; c: string; radius: string; speed: string }) {
  return (
    <article className="example-card">
      <div
        className="example-blob"
        style={{
          background: `radial-gradient(circle at 30% 25%, ${c} 0%, ${b} 45%, ${a} 100%)`,
          borderRadius: radius,
          animationDuration: speed
        }}
      />
    </article>
  );
}

export function ExamplesStrip() {
  const cards = [...EXAMPLES, ...EXAMPLES];

  return (
    <div className="examples-shell">
      <div className="examples-track">
        {cards.map((item, index) => (
          <ExampleCard key={`${item.id}-${index}`} a={item.a} b={item.b} c={item.c} radius={item.radius} speed={item.speed} />
        ))}
      </div>
    </div>
  );
}
