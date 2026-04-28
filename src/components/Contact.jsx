import { profile } from '../data';

export default function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Let&apos;s Build Something Practical</h2>
      <div className="mt-3 h-px w-36 bg-slate-300" />
      <p className="mt-4 max-w-2xl text-sm text-slate-700 sm:text-base">
        Open to full-stack engineering roles where thoughtful systems, automation, and strong execution create measurable outcomes.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="magnetic-btn rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          {profile.email}
        </a>
        <a
          href="tel:+18082084090"
          className="magnetic-btn rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
        >
          {profile.phone}
        </a>
        <a
          href="https://github.com/suhyunmoon1998"
          target="_blank"
          rel="noreferrer"
          className="magnetic-btn rounded-full bg-sky-50 px-5 py-2 text-sm font-medium text-sky-800"
          aria-label="GitHub profile"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/soohyun-mun-09b486133"
          target="_blank"
          rel="noreferrer"
          className="magnetic-btn rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-800"
          aria-label="LinkedIn profile"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
