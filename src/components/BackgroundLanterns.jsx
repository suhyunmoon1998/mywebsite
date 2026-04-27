import { useMemo } from 'react';

export default function BackgroundLanterns({ scrollProgress = 0 }) {
  const lanterns = useMemo(
    () => [
      {
        className: 'left-[8%] top-[10%] h-56 w-56 md:h-72 md:w-72',
        color: 'from-amber-200/26 via-stone-200/20 to-transparent',
        drift: 'animate-float'
      },
      {
        className: 'right-[10%] top-[28%] h-64 w-64 md:h-80 md:w-80',
        color: 'from-zinc-300/26 via-slate-200/18 to-transparent',
        drift: 'animate-pulseSoft'
      },
      {
        className: 'left-[24%] bottom-[14%] h-72 w-72 md:h-[24rem] md:w-[24rem]',
        color: 'from-stone-300/24 via-neutral-200/18 to-transparent',
        drift: 'animate-float'
      },
      {
        className: 'right-[16%] bottom-[8%] h-52 w-52 md:h-64 md:w-64',
        color: 'from-amber-100/28 via-zinc-200/18 to-transparent',
        drift: 'animate-pulseSoft'
      }
    ],
    []
  );

  const brightness = 0.9 + scrollProgress * 0.45;
  const opacity = 0.16 + scrollProgress * 0.24;
  const blur = Math.max(18, 34 - scrollProgress * 12);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbfbf8] via-[#f1f1ed] to-[#e7e7e2]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,218,168,0.22),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_78%,rgba(180,188,196,0.24),transparent_36%)]" />
      <div
        className="absolute inset-0 transition-[filter,opacity] duration-500"
        style={{ filter: `brightness(${brightness})`, opacity }}
      >
        {lanterns.map((lantern, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-gradient-to-br ${lantern.color} ${lantern.className} ${lantern.drift}`}
            style={{ filter: `blur(${blur}px)` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 subtle-grid" />
      <div className="absolute inset-0 concrete-noise" />
    </div>
  );
}
