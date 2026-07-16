import { useEffect, useRef, useState } from "react";

interface PromptCopyButtonProps {
  prompt: string;
  className?: string;
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) {
    throw new Error("Copy command failed");
  }
}

export default function PromptCopyButton({ prompt, className = "" }: PromptCopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const handleCopy = async () => {
    window.clearTimeout(resetTimer.current);
    try {
      await copyText(prompt);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    resetTimer.current = window.setTimeout(() => setStatus("idle"), 2000);
  };

  const label =
    status === "copied" ? "Phrase copiée" : status === "error" ? "Copie impossible" : "Copier la phrase";

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm font-bold text-amber-800 transition hover:border-amber-400 ${className}`}
      aria-live="polite"
    >
      {label}
    </button>
  );
}
