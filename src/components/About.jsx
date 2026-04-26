import { about } from '../data';

export default function About() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-card backdrop-blur-xl sm:p-9">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">About</h2>
      <p className="mt-5 max-w-4xl text-sm leading-relaxed text-white/80 sm:text-base">{about}</p>
    </div>
  );
}
