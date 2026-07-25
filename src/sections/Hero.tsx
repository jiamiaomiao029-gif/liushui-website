import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site, hero } from "../content";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onContact }: { onContact: () => void }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line",
        { yPercent: 105, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.25, ease: "power4.out", stagger: 0.12, delay: 0.15 }
      );
      gsap.fromTo(
        ".hero-fade",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.09, delay: 0.7 }
      );
      gsap.fromTo(
        ".hero-photo",
        { opacity: 0, y: 50, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power3.out", delay: 0.9 }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative overflow-hidden px-6 pb-24 pt-36 md:pt-44">
      {/* faint navy ambience */}
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[46vw] w-[46vw] max-h-[560px] max-w-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(30,58,138,0.10) 0%, transparent 62%)", filter: "blur(30px)" }}
      />

      <div className="relative mx-auto flex max-w-[1120px] flex-col items-center text-center">
        {/* name */}
        <h1 className="display-hero">
          <span className="block overflow-hidden pb-1">
            <span className="hero-line block">{site.name}</span>
          </span>
        </h1>

        {/* tagline — smaller, one line */}
        <h2 className="mt-5 overflow-hidden pb-1 text-[clamp(1.375rem,3.2vw,2.25rem)] font-bold tracking-tight text-[var(--action)]">
          <span className="hero-line block">{hero.tagline}</span>
        </h2>

        {/* personal tags */}
        <div className="hero-fade mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {hero.tags.map((t, i) => (
            <span key={t} className={`tag-pill ${i === 0 ? "tag-pill-strong" : ""}`}>
              {t}
            </span>
          ))}
        </div>

        {/* photo + 了解我, sitting under the 营销杠杆 tag row */}
        <div className="hero-photo mt-14 flex items-center gap-6 sm:gap-8">
          <div className="avatar-ring h-28 w-28 shrink-0 sm:h-36 sm:w-36">
            <img src="/images/avatar.png" alt={`${site.name} 照片`} />
          </div>
          <a href="#about" className="link-chevron text-[1.375rem] font-semibold tracking-tight">
            {hero.aboutLink}
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* live button + note */}
        <div className="hero-fade mt-10 flex flex-col items-center gap-4">
          <button onClick={onContact} className="btn btn-primary">
            {hero.liveCta}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
            </svg>
          </button>
          <span className="live-badge">
            <span className="status-dot" />
            {hero.liveNote}
          </span>
        </div>

        {/* stats */}
        <div className="hero-fade mt-14 flex flex-wrap justify-center gap-x-12 gap-y-6">
          {hero.stats.map((s) => (
            <div key={s.label}>
              <div className="tnum text-3xl font-bold tracking-tight">
                {s.value}
                <span className="text-[var(--action)]">{s.suffix}</span>
              </div>
              <p className="mt-1 text-xs font-medium tracking-wide text-[var(--text-secondary)]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
