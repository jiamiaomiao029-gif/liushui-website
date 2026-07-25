import { useEffect, useRef } from "react";
import { site, nav } from "../content";

export default function Nav({ onContact }: { onContact: () => void }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const el = ref.current;
      if (!el) return;
      if (y > 480 && y > lastY) el.classList.add("nav-hidden");
      else el.classList.remove("nav-hidden");
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={ref} className="navy-nav">
      <nav className="mx-auto flex h-14 max-w-[1120px] items-center justify-between px-6">
        {/* logo: blue leaf ornament + name */}
        <a href="#top" className="flex min-h-[44px] items-center gap-2.5">
          <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 4C11 4 4.5 9.5 4.5 18.5 13.5 18.5 20 12 20 4z" fill="#7ea0e8" />
            <path d="M4.5 18.5C8 12.5 12 8.5 17 6.5" stroke="#0b1b33" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className="text-sm font-semibold tracking-tight text-white">{site.name}</span>
        </a>

        <div className="hidden items-center gap-7 sm:flex">
          {nav.map((n) =>
            n.modal ? (
              <button key={n.href} onClick={onContact} className="navy-link">
                {n.label}
              </button>
            ) : (
              <a key={n.href} href={n.href} className="navy-link">
                {n.label}
              </a>
            )
          )}
        </div>

        <button onClick={onContact} className="navy-link sm:hidden">
          联系
        </button>
      </nav>
    </header>
  );
}
