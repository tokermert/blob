const EXAMPLES = [
  { id: 1, a: "#FF7A00", b: "#FFD84D", c: "#FFAA3D" },
  { id: 2, a: "#FFD84D", b: "#FF7A00", c: "#FFBF40" },
  { id: 3, a: "#FFB347", b: "#FFD84D", c: "#FF7A00" },
  { id: 4, a: "#FFC35A", b: "#FF7A00", c: "#FFD84D" },
  { id: 5, a: "#FFD84D", b: "#FF9C2A", c: "#FF7A00" },
  { id: 6, a: "#FF7A00", b: "#FFC850", c: "#FFE27A" },
  { id: 7, a: "#FFE07A", b: "#FF7A00", c: "#FFB64A" },
  { id: 8, a: "#FF8B1A", b: "#FFD84D", c: "#FFC04B" }
];

function ExampleCard({ a, b, c }: { a: string; b: string; c: string }) {
  return (
    <article className="example-card">
      <div
        className="example-blob"
        style={{
          background: `radial-gradient(circle at 30% 25%, ${c} 0%, ${b} 45%, ${a} 100%)`
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
          <ExampleCard key={`${item.id}-${index}`} a={item.a} b={item.b} c={item.c} />
        ))}
      </div>
    </div>
  );
}
