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
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-stone-300 bg-white/70 px-4 py-2 backdrop-blur">
        <span className="text-sm font-semibold text-slate-800">{profile.name}</span>
        <ul className="hidden items-center gap-5 text-xs text-slate-600 md:flex">
          {navLinks.map(([href, label]) => (
            <li key={href}>
              <a href={`#${href}`} className="transition hover:text-amber-700">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto mt-16 grid w-full max-w-6xl gap-8 md:mt-24 md:grid-cols-[1.15fr_0.85fr] md:items-end">
        <div className="rounded-3xl border border-stone-300 bg-gradient-to-b from-white/85 via-stone-50/70 to-white/75 p-8 shadow-card backdrop-blur-xl sm:p-10 hero-border-glow">
          <p className="mb-4 inline-flex items-center rounded-full border border-amber-300/70 bg-amber-100/85 px-4 py-1 text-xs text-amber-900">
            Full-Stack Engineer · AI-Assisted Development · Twilio Systems
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-sky-700">{profile.title}</p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">{heroMessage}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="magnetic-btn rounded-full border border-amber-300 bg-amber-100 px-5 py-2 text-sm font-medium text-amber-900 transition hover:shadow-glow"
            >
              Email
            </a>
            <a
              href="tel:+18082084090"
              className="magnetic-btn rounded-full border border-stone-300 bg-white/85 px-5 py-2 text-sm font-medium text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
            >
              Call
            </a>
            <a
              href="#contact"
              className="magnetic-btn rounded-full border border-stone-300 bg-white/70 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-stone-400 hover:text-slate-900"
            >
              Contact
            </a>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-stone-300 bg-white/70 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Location</p>
            <p className="mt-2 text-sm text-slate-800">{profile.location}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-500">Languages</p>
            <p className="mt-2 text-sm text-slate-800">{profile.languages.join(' · ')}</p>
          </div>

          <div className="rounded-3xl border border-stone-300 bg-white/70 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Focus Areas</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-stone-300 bg-white/85 px-3 py-1 text-xs text-slate-700">
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
