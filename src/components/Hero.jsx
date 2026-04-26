import { heroMessage, profile } from '../data';

const navLinks = [
  ['about', 'About'],
  ['strengths', 'Core Strengths'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['contact', 'Contact']
];

const tags = ['Web Systems', 'Automation', 'AI Tooling', 'Twilio Integrations'];

export default function Hero() {
  return (
    <header className="relative min-h-screen px-5 pb-14 pt-8 sm:px-8 md:px-12">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur">
        <span className="text-sm font-medium text-white/80">{profile.name}</span>
        <ul className="hidden items-center gap-5 text-xs text-white/65 md:flex">
          {navLinks.map(([href, label]) => (
            <li key={href}>
              <a href={`#${href}`} className="transition hover:text-amber-200">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto mt-16 grid w-full max-w-6xl gap-8 md:mt-24 md:grid-cols-[1.15fr_0.85fr] md:items-end">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.03] p-8 shadow-card backdrop-blur-xl sm:p-10 hero-border-glow">
          <p className="mb-4 inline-flex items-center rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-1 text-xs text-amber-100">
            Full-Stack Engineer · AI-Assisted Development · Twilio Systems
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-cyan-100/80">{profile.title}</p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">{heroMessage}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="magnetic-btn rounded-full border border-amber-200/30 bg-amber-200/15 px-5 py-2 text-sm font-medium text-amber-100 transition hover:shadow-glow"
            >
              Email
            </a>
            <a
              href="tel:+18082084090"
              className="magnetic-btn rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white/90 transition hover:border-cyan-200/40 hover:bg-cyan-200/10"
            >
              Call
            </a>
            <a
              href="#contact"
              className="magnetic-btn rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-white/75 transition hover:border-white/25 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">Location</p>
            <p className="mt-2 text-sm text-white/90">{profile.location}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/50">Languages</p>
            <p className="mt-2 text-sm text-white/90">{profile.languages.join(' · ')}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">Focus Areas</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
