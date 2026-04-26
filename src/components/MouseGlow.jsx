import { useEffect, useRef, useState } from 'react';

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function MouseGlow() {
  const [enabled, setEnabled] = useState(false);
  const frameRef = useRef(0);
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    if (prefersReducedMotion()) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const root = document.documentElement;

    const onMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
    };

    const loop = () => {
      const tx = targetRef.current.x;
      const ty = targetRef.current.y;
      currentRef.current.x += (tx - currentRef.current.x) * 0.16;
      currentRef.current.y += (ty - currentRef.current.y) * 0.16;
      root.style.setProperty('--glow-x', `${currentRef.current.x}px`);
      root.style.setProperty('--glow-y', `${currentRef.current.y}px`);
      frameRef.current = window.requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    frameRef.current = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <div className="pointer-events-none fixed inset-0 z-0 mouse-glow" aria-hidden="true" />;
}
