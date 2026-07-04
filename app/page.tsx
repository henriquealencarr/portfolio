import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cases } from "@/lib/cases";
import { AnimateIn, AnimateInHero, AnimateInStagger, AnimateInCard } from "@/components/animate-in";
import { Nav } from "@/components/nav";
import { CoinFlipPhoto } from "@/components/coin-flip-photo";

const stack = [
  "n8n", "Make", "GPT", "Claude", "Gemini",
  "Supabase", "PostgreSQL", "pgvector", "Redis",
  "VAPI", "Playwright", "FastAPI", "Docker",
  "AWS Lambda", "Python", "TypeScript", "React",
  "Meta API", "Airtable", "Notion", "Google Calendar",
  "HubSpot", "Clay", "LangChain", "LangGraph",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[650px] bg-blue-600/18 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/12 rounded-full blur-[110px]" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-700/10 rounded-full blur-[120px]" />
      </div>

      {/* Nav */}
      <Nav
        logo="henrique.alencar"
        links={[
          { label: "Cases", href: "#cases" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
      />

      {/* Hero */}
      <section className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 flex items-center" style={{ minHeight: "calc(100vh - 72px)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-12 lg:py-0">

          {/* Text */}
          <div className="text-center lg:text-left">
            <AnimateInHero delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-mono mb-8 sm:mb-10">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                Available for remote contracts
              </div>
            </AnimateInHero>

            <AnimateInHero delay={0.22}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8 text-center lg:text-left">
                <span className="block">I build automations that</span>
                <span className="block gradient-text lg:whitespace-nowrap">scale with your team.</span>
              </h1>
            </AnimateInHero>

            <AnimateInHero delay={0.36}>
              <p className="text-base sm:text-xl text-zinc-400 leading-relaxed mb-8 sm:mb-12">
                I&apos;m Henrique Alencar, AI &amp; Systems Automation Engineer based in São Paulo.
                I don&apos;t just build workflows. I deliver complete operational systems with
                interfaces, agents, and real clients using them daily.
              </p>
            </AnimateInHero>

            <AnimateInHero delay={0.48}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#cases"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:px-10 sm:py-5 rounded-lg font-medium text-base sm:text-lg text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)" }}
                >
                  View Cases
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=henrique.alencarr@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:px-10 sm:py-5 rounded-lg font-medium text-base sm:text-lg text-zinc-300 border border-zinc-700 hover:border-zinc-500 transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </AnimateInHero>
          </div>

          {/* Photo sphere — mobile: above text (handled by order), desktop: right column */}
          <AnimateInHero delay={0.3} className="flex items-center justify-center lg:justify-end order-first lg:order-last">
            <CoinFlipPhoto />
          </AnimateInHero>

        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-20 sm:py-40">
        <AnimateIn className="mb-10 sm:mb-16">
          <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-3 sm:mb-4">Production Cases</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Systems I&apos;ve built:</h2>
        </AnimateIn>

        <AnimateInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cases.map((c) => (
            <AnimateInCard key={c.slug}>
              <Link
                href={`/cases/${c.slug}`}
                className="glass-card gradient-border rounded-2xl p-6 sm:p-8 flex flex-col gap-5 sm:gap-6 hover:bg-white/[0.06] transition-all duration-300 group h-full"
              >
                <div className="flex items-start justify-between gap-3">
                  <Badge
                    variant="outline"
                    className="text-xs font-mono border-zinc-700 text-zinc-400"
                  >
                    {c.category}
                  </Badge>
                  <svg
                    className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-colors shrink-0 mt-0.5"
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">{c.title}</h3>
                  <p className="text-base text-zinc-400 leading-relaxed">{c.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {c.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded bg-zinc-800/80 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {c.stack.length > 4 && (
                    <span className="text-xs font-mono px-3 py-1 rounded bg-zinc-800/80 text-zinc-500">
                      +{c.stack.length - 4}
                    </span>
                  )}
                </div>
              </Link>
            </AnimateInCard>
          ))}
        </AnimateInStagger>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-20 sm:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          <AnimateIn>
            <div>
              <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-3 sm:mb-4">About</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                Production-focused.<br />Automation Background.
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-zinc-400 leading-relaxed">
                <p>
                  I started in automation in 2021, building email marketing flows at digital agencies.
                  When LLMs made AI agents viable in 2023, I made the natural transition,
                  same logic of connecting systems, but with intelligence in the middle.
                </p>
                <p>
                  My differentiator is delivering automation{" "}
                  <em className="text-zinc-300 not-italic font-medium">plus a client-facing interface</em>
                  , dashboards, controls, and real-time views, so clients can see and
                  operate what was built without touching the backend.
                </p>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15} direction="right">
            <div>
              <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4 sm:mb-5">Full Stack</p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm sm:text-base font-mono px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg glass-card text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-20 sm:py-40">
        <AnimateIn>
          <div className="glass-card rounded-2xl p-8 sm:p-16 lg:p-24 text-center glow-purple">
            <p className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-4 sm:mb-6">Contact</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Let&apos;s build something that{" "}
              <span className="gradient-text">actually works.</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-8 sm:mb-10">
              Open to international remote contracts and freelance engagements.
              Based in São Paulo, available across all timezones.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=henrique.alencarr@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:px-10 sm:py-5 rounded-lg font-medium text-base sm:text-lg text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)" }}
              >
                henrique.alencarr@gmail.com
              </a>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/50 px-4 sm:px-8 py-10 sm:py-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <span className="font-mono text-sm sm:text-base text-zinc-400">Henrique Alencar, São Paulo, Brazil</span>
          <span className="font-sans text-[0.8rem] sm:text-[0.95rem] text-zinc-400 font-bold tracking-wide">AI &amp; Systems Automation Engineer</span>
        </div>
      </footer>
    </main>
  );
}
