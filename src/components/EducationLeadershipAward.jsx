import { award, education, leadership } from '../data';

export default function EducationLeadershipAward() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <article className="rounded-2xl border border-stone-300 bg-white/70 p-6 transition hover:border-stone-400 hover:shadow-card">
        <h2 className="text-xl font-semibold text-slate-900">Education</h2>
        <p className="mt-3 text-sm text-slate-800">{education.degree}</p>
        <p className="text-sm text-sky-700">{education.school}</p>
        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">Graduated {education.graduation}</p>
      </article>

      <article className="rounded-2xl border border-stone-300 bg-white/70 p-6 transition hover:border-amber-300 hover:shadow-card">
        <h2 className="text-xl font-semibold text-slate-900">Leadership</h2>
        <p className="mt-3 text-sm text-slate-800">{leadership.title}</p>
        <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{leadership.period}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">{leadership.description}</p>
      </article>

      <article className="rounded-2xl border border-stone-300 bg-white/70 p-6 transition hover:border-sky-300 hover:shadow-card">
        <h2 className="text-xl font-semibold text-slate-900">Award</h2>
        <p className="mt-3 text-sm text-slate-800">{award.title}</p>
        <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{award.period}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-700">{award.description}</p>
      </article>
    </div>
  );
}
