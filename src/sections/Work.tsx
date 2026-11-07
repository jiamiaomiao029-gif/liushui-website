import { works } from "../content";

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="kicker text-[var(--action)]" data-reveal>{works.kicker}</p>
            <h2 className="display-lg mt-4" data-reveal data-delay="0.06">{works.title}</h2>
          </div>
          {/* her photo beside the section */}
          <figure className="hero-photo-frame hidden lg:block" data-reveal data-delay="0.1">
            <img src={works.photo} alt="六水个人形象照" />
            <figcaption className="mt-3 text-xs tracking-wide text-[var(--text-secondary)]">{works.photoCaption}</figcaption>
          </figure>
        </div>
      </div>

      <div className="work-rail mt-12" data-reveal data-delay="0.1">
        {works.items.map((w) => (
          <article key={w.title} className="work-card">
            <div className="overflow-hidden">
              <img src={w.img} alt={w.title} loading="lazy" />
            </div>
            <div className="flex items-start justify-between gap-4 p-7">
              <div>
                <p className="text-xs font-semibold tracking-[0.12em] text-[var(--text-secondary)]">{w.category}</p>
                <h3 className="title-card mt-2">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">{w.desc}</p>
              </div>
              <svg className="mt-1 h-5 w-5 shrink-0 text-[var(--text-secondary)]" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M8 7h9v9" />
              </svg>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
