import { award, education, leadership } from '../data';
import uclaLogo from '../assets/logos/ucla-logo.svg';

export default function EducationLeadershipAward() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Education · Leadership · Award</h2>
      <div className="mt-3 h-px w-48 bg-slate-300" />
      <div className="mt-6 grid gap-8 lg:grid-cols-3">
        <article>
          <img src={uclaLogo} alt="UCLA logo" className="mb-4 h-10 w-auto object-contain" loading="lazy" />
          <h3 className="text-lg font-semibold text-slate-900">Education</h3>
          <p className="mt-2 text-sm text-slate-800">{education.degree}</p>
          <p className="text-sm text-sky-700">{education.school}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">Graduated {education.graduation}</p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-slate-900">Leadership</h3>
          <p className="mt-2 text-sm text-slate-800">{leadership.title}</p>
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{leadership.period}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{leadership.description}</p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-slate-900">Award</h3>
          <p className="mt-2 text-sm text-slate-800">{award.title}</p>
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{award.period}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">{award.description}</p>
        </article>
      </div>
    </div>
  );
}
