import { useEffect, useState } from 'react';
import About from './components/About';
import BackgroundLanterns from './components/BackgroundLanterns';
import Contact from './components/Contact';
import CoreStrengths from './components/CoreStrengths';
import EducationLeadershipAward from './components/EducationLeadershipAward';
import Experience from './components/Experience';
import Hero from './components/Hero';
import MouseGlow from './components/MouseGlow';
import SectionReveal from './components/SectionReveal';
import Skills from './components/Skills';

function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const next = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      setScrollProgress(next);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return scrollProgress;
}

export default function App() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="relative min-h-screen bg-base-900 text-slate-100">
      <BackgroundLanterns scrollProgress={scrollProgress} />
      <MouseGlow />

      <div className="relative z-10">
        <Hero />

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 pb-20 sm:px-8 md:px-12">
          <SectionReveal id="about">
            <About />
          </SectionReveal>

          <SectionReveal id="strengths">
            <CoreStrengths />
          </SectionReveal>

          <SectionReveal id="experience">
            <Experience />
          </SectionReveal>

          <SectionReveal id="skills">
            <Skills />
          </SectionReveal>

          <SectionReveal id="education">
            <EducationLeadershipAward />
          </SectionReveal>

          <SectionReveal id="contact" className="pb-8">
            <Contact />
          </SectionReveal>
        </main>
      </div>
    </div>
  );
}
