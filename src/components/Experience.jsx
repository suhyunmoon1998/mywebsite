import { experiences } from '../data';

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">Experience</h2>
      <div className="relative mt-7 space-y-6 before:absolute before:bottom-0 before:left-3 before:top-1 before:w-px before:bg-gradient-to-b before:from-amber-200/45 before:to-transparent md:before:left-4">
        {experiences.map((experience) => (
          <article
            key={experience.company}
            className={`relative ml-8 rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card md:ml-10 ${
              experience.current
                ? 'border-amber-200/35 bg-gradient-to-br from-amber-100/10 via-white/[0.03] to-cyan-200/10'
                : 'border-white/10 bg-white/[0.02] hover:border-cyan-100/30'
            }`}
          >
            <span className="absolute -left-[2.42rem] top-8 h-3.5 w-3.5 rounded-full border border-black/40 bg-amber-200/80 shadow-[0_0_20px_rgba(255,196,128,0.7)] md:-left-[2.72rem]" />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
                <p className="text-sm text-cyan-100/80">{experience.company}</p>
              </div>
              <p className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/75">
                {experience.period}
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/75">
              {experience.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-[0.42rem] inline-block h-1.5 w-1.5 rounded-full bg-amber-200/80" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
