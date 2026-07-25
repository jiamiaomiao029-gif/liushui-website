import { useEffect } from "react";
import { about } from "../content";

export default function About() {
  useEffect(() => {
    const tiles = document.querySelectorAll<HTMLElement>(".sheen");
    const move = (e: Event) => {
      const pe = e as PointerEvent;
      const t = pe.currentTarget as HTMLElement;
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", `${pe.clientX - r.left}px`);
      t.style.setProperty("--my", `${pe.clientY - r.top}px`);
    };
    tiles.forEach((t) => t.addEventListener("pointermove", move));
    return () => tiles.forEach((t) => t.removeEventListener("pointermove", move));
  }, []);

  const t = about.tiles;

  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1120px]">
        <p className="kicker text-[var(--action)]" data-reveal>{about.kicker}</p>
        <h2 className="display-lg mt-4 max-w-3xl" data-reveal data-delay="0.06">{about.title}</h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {/* bio — 2x2, navy */}
          <div className="bento bento-navy sheen p-9 md:col-span-2 md:row-span-2" data-reveal>
            <p className="tile-label text-sm font-semibold tracking-wide">关于我</p>
            <div className="mt-6 max-w-lg space-y-5 text-[clamp(1.0625rem,1.8vw,1.25rem)] font-medium leading-relaxed tracking-tight">
              <p>{about.bio[0]}</p>
              <p>{about.bio[1]}</p>
              <p className="text-[clamp(1.375rem,2.4vw,1.75rem)] font-bold text-[#7ea0e8]">{about.bio[2]}</p>
            </div>
          </div>

          {/* focus — two lines */}
          <div className="bento sheen p-8" data-reveal data-delay="0.08">
            <p className="text-sm font-semibold tracking-wide text-[var(--text-secondary)]">{t.focus.label}</p>
            <p className="title-card mt-4 text-[1.125rem] leading-relaxed">
              {t.focus.lines[0]}
              <br />
              {t.focus.lines[1]}
            </p>
          </div>

          {/* status */}
          <div className="bento sheen p-8" data-reveal data-delay="0.14">
            <p className="text-sm font-semibold tracking-wide text-[var(--text-secondary)]">{t.status.label}</p>
            <p className="title-card mt-4 flex items-center gap-2.5">
              <span className="status-dot" />
              {t.status.value}
            </p>
          </div>

          {/* location */}
          <div className="bento sheen p-8" data-reveal data-delay="0.1">
            <p className="text-sm font-semibold tracking-wide text-[var(--text-secondary)]">{t.location.label}</p>
            <p className="title-card mt-4">{t.location.value}</p>
          </div>

          {/* tools */}
          <div className="bento sheen p-8 md:col-span-2" data-reveal data-delay="0.16">
            <p className="text-sm font-semibold tracking-wide text-[var(--text-secondary)]">{t.tool.label}</p>
            <p className="title-card mt-4">{t.tool.value}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
