import Link from "next/link";
import { BlobCanvas } from "@/components/BlobCanvas";
import { ExamplesStrip } from "@/components/ExamplesStrip";
import { Reveal } from "@/components/Reveal";

const featureItems = [
  {
    title: "Procedural",
    text: "Not presets. Infinite variations."
  },
  {
    title: "Seeded",
    text: "Every shape is reproducible."
  },
  {
    title: "Exportable",
    text: "Video, PNG or ready-to-use code."
  },
  {
    title: "Instant",
    text: "Generate in milliseconds."
  }
];

const audienceItems = [
  {
    title: "Designers",
    text: "Hero visuals, posters, branding systems."
  },
  {
    title: "Developers",
    text: "Backgrounds, shaders, WebGL experiments."
  },
  {
    title: "Creators",
    text: "Album art, loops, generative visuals."
  }
];

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-base text-zinc-100">
      <header className="fixed left-6 top-6 z-50">
        <p className="text-sm font-medium tracking-[0.18em] text-zinc-200">bloblob</p>
      </header>

      <section className="mx-auto flex min-h-svh w-full max-w-[1200px] items-center px-5 pb-10 pt-24 sm:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <Reveal className="hero-canvas-shell h-[48vh] min-h-[360px] w-full overflow-hidden rounded-[28px] border border-zinc-800 bg-[#0b0b0b] sm:h-[56vh] lg:h-[70vh]">
            <BlobCanvas />
          </Reveal>

          <Reveal className="max-w-[520px]" delay={120}>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-500">A liquid asset generator.</p>
            <h1 className="text-6xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              bloblob
            </h1>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-zinc-300">
              Generate liquid visuals.
              <br />
              Export video, image or code.
              <br />
              100% free. No login required.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/editor" className="button-accent">
                Try it now <span aria-hidden="true">→</span>
              </Link>
              <Link href="#examples" className="button-muted">
                View examples
              </Link>
            </div>

            <p className="mt-4 text-sm text-zinc-500">Free forever · Runs in your browser · No account</p>
          </Reveal>
        </div>
      </section>

      <section className="section-wrap px-5 py-20 sm:px-8">
        <Reveal className="mx-auto w-full max-w-[1200px] rounded-[30px] border border-zinc-800 bg-surface p-6 sm:p-8 lg:p-10">
          <h2 className="mb-8 text-3xl font-medium tracking-[-0.03em] text-zinc-100 sm:text-4xl">Featured features</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureItems.map((item, index) => (
              <Reveal
                key={item.title}
                className="feature-card rounded-2xl border border-zinc-800 bg-[#0a0a0a] p-6"
                delay={index * 80}
              >
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-zinc-100">{item.title}</h3>
                <p className="mt-3 text-zinc-400">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="examples" className="px-5 py-12 sm:px-8">
        <Reveal className="mx-auto w-full max-w-[1200px] rounded-[30px] border border-zinc-800 bg-surface p-6 sm:p-8">
          <h2 className="mb-6 text-3xl font-medium tracking-[-0.03em] text-zinc-100 sm:text-4xl">Live examples</h2>
          <ExamplesStrip />
        </Reveal>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <Reveal className="mx-auto w-full max-w-[1200px] rounded-[30px] border border-zinc-800 bg-surface p-6 sm:p-8 lg:p-10">
          <h2 className="mb-8 text-3xl font-medium tracking-[-0.03em] text-zinc-100 sm:text-4xl">Who is this for</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {audienceItems.map((item, index) => (
              <Reveal key={item.title} className="rounded-2xl border border-zinc-800 bg-[#0a0a0a] p-6" delay={index * 80}>
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-zinc-100">{item.title}</h3>
                <p className="mt-3 text-zinc-400">{item.text}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-zinc-500">Made for curious people.</p>
        </Reveal>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <Reveal className="mx-auto w-full max-w-[1200px] rounded-[30px] border border-zinc-800 bg-surface p-6 sm:p-8 lg:p-10">
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-zinc-100 sm:text-4xl">About the maker</h2>
          <div className="mt-8 max-w-[680px] space-y-5 text-lg leading-relaxed text-zinc-300">
            <p>Hi, I&apos;m Mert.</p>
            <p>
              I built bloblob as a small experiment to generate
              <br />
              liquid visuals instantly — without complex tools.
            </p>
            <p>
              Just something fun for designers and developers
              <br />
              who like making weird beautiful things.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="https://merttoker.com" className="button-accent" target="_blank" rel="noreferrer">
              Visit merttoker.com <span aria-hidden="true">→</span>
            </Link>
            <Link href="https://buymeacoffee.com/merttoker" className="button-muted" target="_blank" rel="noreferrer">
              Buy me a coffee ☕
            </Link>
            <Link href="mailto:hello@merttoker.com" className="button-muted">
              Contact <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="mt-4 text-sm text-zinc-500">Built for fun. Free forever.</p>
        </Reveal>
      </section>

      <footer className="border-t border-zinc-900 px-5 pb-10 pt-12 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 md:grid-cols-2">
          <div>
            <p className="text-xl font-medium tracking-[-0.03em] text-zinc-100">bloblob</p>
            <p className="mt-2 text-zinc-500">A liquid asset generator.</p>
          </div>
          <nav aria-label="Footer links" className="flex items-start justify-start gap-4 md:justify-end">
            <Link className="footer-link" href="https://github.com/tokermert" target="_blank" rel="noreferrer">
              GitHub
            </Link>
            <Link className="footer-link" href="mailto:hello@merttoker.com">
              Contact
            </Link>
            <Link className="footer-link" href="https://merttoker.com" target="_blank" rel="noreferrer">
              merttoker.com
            </Link>
          </nav>
        </div>
        <p className="mx-auto mt-12 w-full max-w-[1200px] text-xs uppercase tracking-[0.14em] text-zinc-600">
          © 2026 · made by mert toker
        </p>
      </footer>
    </main>
  );
}
