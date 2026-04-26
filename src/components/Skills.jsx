import { skillGroups } from '../data';

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">Skills</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.group}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-100/35 hover:shadow-card"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/75">{group.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/80 transition hover:border-amber-100/35 hover:bg-amber-100/10"
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
