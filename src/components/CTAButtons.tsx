import { Phone, MessageCircle } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

type Variant = "default" | "outline" | "ghost";
type Size = "default" | "lg" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-xs",
  default: "px-6 py-3.5",
  lg: "px-8 py-4 text-sm",
};

export function CallButton({
  variant = "default",
  size = "default",
  label = "Call Now",
}: {
  variant?: Variant;
  size?: Size;
  label?: string;
}) {
  const styles =
    variant === "outline"
      ? "border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground"
      : variant === "ghost"
      ? "text-foreground hover:text-gold"
      : "bg-gold text-primary-foreground hover:bg-gold-soft hover:shadow-[var(--shadow-gold)]";
  return (
    <a href={`tel:${PHONE_TEL}`} className={`${base} ${sizes[size]} ${styles}`} aria-label="Call KCP Music">
      <Phone className="h-4 w-4" strokeWidth={1.5} />
      {label}
    </a>
  );
}

export function WhatsAppButton({
  variant = "outline",
  size = "default",
  label = "WhatsApp",
}: {
  variant?: Variant;
  size?: Size;
  label?: string;
}) {
  const styles =
    variant === "default"
      ? "bg-whatsapp text-foreground hover:opacity-90"
      : variant === "ghost"
      ? "text-foreground hover:text-gold"
      : "border border-foreground/20 text-foreground hover:border-gold hover:text-gold";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${styles}`}
      aria-label="WhatsApp KCP Music"
    >
      <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
      {label}
    </a>
  );
}

export function CTAPair({ size = "default" }: { size?: Size }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <CallButton size={size} />
      <WhatsAppButton size={size} />
    </div>
  );
}
