import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Philosophy from "./sections/Philosophy";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import WeChatModal from "./components/WeChatModal";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -56, duration: 1.3 });
    };
    document.addEventListener("click", onClick);

    const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: Number(el.dataset.delay || 0),
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    });

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main>
      <Nav onContact={openModal} />
      <Hero onContact={openModal} />
      <About />
      <Philosophy />
      <Work />
      <Contact onContact={openModal} />
      <WeChatModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
