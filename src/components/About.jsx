import { about } from '../data';

export default function About() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">About</h2>
      <div className="mt-3 h-px w-20 bg-slate-300" />
      <p className="mt-5 text-sm leading-relaxed text-slate-700 sm:text-base">{about}</p>
    </div>
  );
}
