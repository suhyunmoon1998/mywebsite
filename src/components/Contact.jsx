import { profile } from '../data';

export default function Contact() {
  return (
    <div className="rounded-3xl border border-amber-100/25 bg-gradient-to-b from-amber-100/10 via-white/[0.03] to-transparent p-7 backdrop-blur-xl sm:p-10">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">Let&apos;s Build Something Practical</h2>
      <p className="mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
        Open to full-stack engineering roles where thoughtful systems, automation, and strong execution create measurable outcomes.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="magnetic-btn rounded-full border border-amber-100/35 bg-amber-200/20 px-5 py-2 text-sm font-medium text-amber-50 transition hover:shadow-glow"
        >
          {profile.email}
        </a>
        <a
          href="tel:+18082084090"
          className="magnetic-btn rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/90 transition hover:border-white/30"
        >
          {profile.phone}
        </a>
        <a
          href="#"
          className="magnetic-btn rounded-full border border-cyan-100/25 bg-cyan-100/10 px-5 py-2 text-sm font-medium text-cyan-100"
          aria-label="GitHub placeholder"
        >
          GitHub (Add Link)
        </a>
        <a
          href="#"
          className="magnetic-btn rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 text-sm font-medium text-white/85"
          aria-label="LinkedIn placeholder"
        >
          LinkedIn (Add Link)
        </a>
      </div>
    </div>
  );
}
