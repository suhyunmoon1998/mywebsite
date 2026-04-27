import { coreStrengths } from '../data';

export default function CoreStrengths() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Core Strengths</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {coreStrengths.map((strength) => (
          <article
            key={strength.title}
            className="group rounded-2xl border border-stone-300 bg-white/68 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300/70 hover:shadow-card"
          >
            <h3 className="text-base font-semibold text-slate-900">{strength.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{strength.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
