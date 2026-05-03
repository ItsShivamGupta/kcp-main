import { Phone, MessageCircle } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex flex-1 items-center justify-center gap-2 py-4 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:text-gold"
      >
        <Phone className="h-4 w-4" strokeWidth={1.5} />
        Call
      </a>
      <div className="w-px bg-border" />
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-gold py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
        WhatsApp
      </a>
    </div>
  );
}
