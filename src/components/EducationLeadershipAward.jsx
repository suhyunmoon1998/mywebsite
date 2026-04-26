import { award, education, leadership } from '../data';

export default function EducationLeadershipAward() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:shadow-card">
        <h2 className="text-xl font-semibold text-white">Education</h2>
        <p className="mt-3 text-sm text-white/90">{education.degree}</p>
        <p className="text-sm text-cyan-100/75">{education.school}</p>
        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/55">Graduated {education.graduation}</p>
      </article>

      <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-amber-100/30 hover:shadow-card">
        <h2 className="text-xl font-semibold text-white">Leadership</h2>
        <p className="mt-3 text-sm text-white/90">{leadership.title}</p>
        <p className="text-xs uppercase tracking-[0.12em] text-white/55">{leadership.period}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/75">{leadership.description}</p>
      </article>

      <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-100/30 hover:shadow-card">
        <h2 className="text-xl font-semibold text-white">Award</h2>
        <p className="mt-3 text-sm text-white/90">{award.title}</p>
        <p className="text-xs uppercase tracking-[0.12em] text-white/55">{award.period}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/75">{award.description}</p>
      </article>
    </div>
  );
}
