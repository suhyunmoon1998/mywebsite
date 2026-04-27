import { skillGroups } from '../data';

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Skills</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.group}
            className="rounded-2xl border border-stone-300 bg-white/68 p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/70 hover:shadow-card"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-600">{group.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-stone-300 bg-white/85 px-3 py-1 text-xs text-slate-700 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
