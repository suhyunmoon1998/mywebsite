import { coreStrengths } from '../data';

export default function CoreStrengths() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Core Strengths</h2>
      <div className="mt-3 h-px w-28 bg-slate-300" />
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {coreStrengths.map((strength) => (
          <article key={strength.title} className="border-b border-stone-300 pb-4 transition duration-300 hover:translate-x-1">
            <h3 className="text-base font-semibold text-slate-900">{strength.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{strength.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
