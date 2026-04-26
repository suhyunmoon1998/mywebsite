import { useMemo } from 'react';

export default function BackgroundLanterns({ scrollProgress = 0 }) {
  const lanterns = useMemo(
    () => [
      {
        className: 'left-[6%] top-[8%] h-56 w-56 md:h-72 md:w-72',
        color: 'from-amber-300/35 via-orange-300/12 to-transparent',
        drift: 'animate-float'
      },
      {
        className: 'right-[8%] top-[30%] h-64 w-64 md:h-80 md:w-80',
        color: 'from-cyan-300/30 via-sky-300/14 to-transparent',
        drift: 'animate-pulseSoft'
      },
      {
        className: 'left-[22%] bottom-[15%] h-72 w-72 md:h-[24rem] md:w-[24rem]',
        color: 'from-amber-200/26 via-yellow-200/12 to-transparent',
        drift: 'animate-float'
      },
      {
        className: 'right-[18%] bottom-[8%] h-52 w-52 md:h-64 md:w-64',
        color: 'from-violet-300/22 via-indigo-300/10 to-transparent',
        drift: 'animate-pulseSoft'
      }
    ],
    []
  );

  const brightness = 0.5 + scrollProgress * 0.85;
  const opacity = 0.12 + scrollProgress * 0.36;
  const blur = Math.max(22, 40 - scrollProgress * 16);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070a11] via-[#0a1019] to-[#0e1622]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,187,112,0.08),transparent_38%)]" />
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
      <div className="absolute inset-0 subtle-noise" />
    </div>
  );
}
