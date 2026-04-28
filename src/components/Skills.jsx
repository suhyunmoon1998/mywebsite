import { skillGroups } from '../data';

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Skills</h2>
      <div className="mt-3 h-px w-16 bg-slate-300" />
      <div className="mt-6 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.group}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-600">{group.group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-white/80 px-3 py-1 text-xs text-slate-700">
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
