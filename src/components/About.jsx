import { about } from '../data';

export default function About() {
  return (
    <div className="rounded-3xl border border-stone-300/80 bg-white/70 p-7 shadow-card backdrop-blur-xl sm:p-9">
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">About</h2>
      <p className="mt-5 max-w-4xl text-sm leading-relaxed text-slate-700 sm:text-base">{about}</p>
    </div>
  );
}
