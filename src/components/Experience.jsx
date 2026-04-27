import { experiences } from '../data';
import c21Logo from '../assets/logos/c21-logo.svg';

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Experience</h2>
      <div className="relative mt-7 space-y-6 before:absolute before:bottom-0 before:left-3 before:top-1 before:w-px before:bg-gradient-to-b before:from-amber-400/45 before:to-transparent md:before:left-4">
        {experiences.map((experience) => {
          const isC21 = experience.company.includes('C21 iProperties');
          return (
            <article
              key={experience.company}
              className={`relative ml-8 rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card md:ml-10 ${
                experience.current
                  ? 'border-amber-300/70 bg-gradient-to-br from-amber-100/55 via-white/70 to-sky-100/45'
                  : 'border-stone-300 bg-white/68 hover:border-sky-300/70'
              }`}
            >
              <span className="absolute -left-[2.42rem] top-8 h-3.5 w-3.5 rounded-full border border-white/70 bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.35)] md:-left-[2.72rem]" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{experience.role}</h3>
                  <p className="text-sm text-sky-700">{experience.company}</p>
                  {isC21 && (
                    <img
                      src={c21Logo}
                      alt="Century 21 logo"
                      className="mt-3 h-7 w-auto object-contain"
                      loading="lazy"
                    />
                  )}
                </div>
                <p className="rounded-full border border-stone-300 bg-white/80 px-3 py-1 text-xs text-slate-700">{experience.period}</p>
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
