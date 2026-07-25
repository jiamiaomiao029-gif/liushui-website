import { useState } from "react";
import { site, contact, footer, nav } from "../content";

export default function Contact({ onContact }: { onContact: () => void }) {
  const [copied, setCopied] = useState(false);

  const copyId = async () => {
    try {
      await navigator.clipboard.writeText(site.xhsId);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = site.xhsId;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section
        id="contact"
        className="on-dark relative overflow-hidden px-6 py-32 text-center md:py-44"
        style={{ background: "var(--bg-dark)" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-[18%] h-[52vw] w-[52vw] max-h-[620px] max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,91,180,0.26) 0%, transparent 62%)", filter: "blur(40px)" }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="kicker" style={{ color: "#7ea0e8" }} data-reveal>{contact.kicker}</p>
          <h2 className="display-hero mt-6" data-reveal data-delay="0.06">{contact.title}</h2>
          <p className="dim body-copy mx-auto mt-8 max-w-xl" data-reveal data-delay="0.14">{contact.sub}</p>

          <div className="mt-10 flex flex-col items-center gap-4" data-reveal data-delay="0.2">
            <button onClick={copyId} className="btn btn-on-dark">
              {copied ? "已复制 ✓" : contact.cta}
              {!copied && (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
            <p className="dim text-sm">
              {contact.idLabel}：<span className="tnum select-all font-semibold text-[var(--text-on-dark)]">{site.xhsId}</span>
            </p>
          </div>

          {/* three QR codes */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6" data-reveal data-delay="0.26">
            {contact.channels.map((c) => (
              <div key={c.label} className="qr-card">
                <div className="overflow-hidden rounded-2xl bg-white p-2.5">
                  <img src={c.img} alt={`${c.label}二维码`} className="block w-full rounded-xl" loading="lazy" />
                </div>
                <p className="mt-4 text-sm font-semibold">{c.label}</p>
                <p className="dim mt-1 text-xs">{c.hint}</p>
              </div>
            ))}
          </div>

          {site.wechatId && (
            <p className="dim mt-10 text-sm" data-reveal data-delay="0.3">
              微信号：<span className="tnum select-all font-semibold text-[var(--text-on-dark)]">{site.wechatId}</span>
            </p>
          )}
        </div>
      </section>

      <footer className="border-t border-[var(--hairline)] px-6 py-10">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-5 text-xs text-[var(--text-secondary)] sm:flex-row">
          <p>{footer.copy}</p>
          <div className="flex items-center gap-6">
            {nav.map((n) =>
              n.modal ? (
                <button key={n.href} onClick={onContact} className="flex min-h-[44px] items-center transition-colors hover:text-[var(--text)] sm:min-h-0">
                  {n.label}
                </button>
              ) : (
                <a key={n.href} href={n.href} className="flex min-h-[44px] items-center transition-colors hover:text-[var(--text)] sm:min-h-0">
                  {n.label}
                </a>
              )
            )}
          </div>
        </div>
      </footer>
    </>
  );
}
