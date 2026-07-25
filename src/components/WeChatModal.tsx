import { useEffect } from "react";
import { site, modal } from "../content";

export default function WeChatModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      style={{ background: "rgba(11, 27, 51, 0.5)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <div
        className="modal-card relative w-full max-w-[340px] rounded-[28px] bg-white p-8 text-center"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="关闭"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-alt)] hover:text-[var(--text)]"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <img src="/images/avatar.png" alt="六水六水" className="mx-auto h-16 w-16 rounded-full object-cover" />
        <h3 className="mt-4 text-xl font-bold tracking-tight">{modal.title}</h3>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">{site.name}</p>

        <div className="mx-auto mt-6 overflow-hidden rounded-2xl border border-[var(--hairline)]">
          <img src="/images/qr-wechat.jpg" alt="微信二维码" className="block w-full" />
        </div>

        {site.wechatId && (
          <p className="mt-4 text-sm text-[var(--text-secondary)]">
            微信号：<span className="tnum select-all font-semibold text-[var(--text)]">{site.wechatId}</span>
          </p>
        )}
        <p className="mt-4 text-xs text-[var(--text-secondary)]">{modal.hint}</p>
      </div>
    </div>
  );
}
