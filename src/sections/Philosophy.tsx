import { philosophy } from "../content";

export default function Philosophy() {
  return (
    <section className="on-dark px-6 py-32 text-center md:py-44" style={{ background: "var(--bg-dark)" }}>
      <blockquote className="mx-auto max-w-4xl">
        <p className="display-hero" data-reveal>
          {philosophy.line1}
          <br />
          {philosophy.line2}
        </p>
        <cite className="dim mt-10 block text-lg not-italic leading-relaxed" data-reveal data-delay="0.12">
          {philosophy.cite1}
          <br />
          {philosophy.cite2}
        </cite>
      </blockquote>
    </section>
  );
}
