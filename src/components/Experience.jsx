import { experiences } from '../data';
import c21Logo from '../assets/logos/c21-logo.svg';

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Experience</h2>
      <div className="mt-3 h-px w-24 bg-slate-300" />
      <div className="mt-8 space-y-10">
        {experiences.map((experience) => {
          const isC21 = experience.company.includes('C21 iProperties');
          return (
            <article key={experience.company} className="border-l-2 border-amber-300 pl-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{experience.role}</h3>
                  <p className="text-sm text-sky-700">{experience.company}</p>
                  {isC21 && (
                    <img src={c21Logo} alt="Century 21 logo" className="mt-3 h-7 w-auto object-contain" loading="lazy" />
                  )}
                </div>
                <p className="text-xs uppercase tracking-[0.1em] text-slate-500">{experience.period}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-[0.42rem] inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
