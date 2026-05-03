import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { PHONE, PHONE_TEL, WHATSAPP_URL, EMAIL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-5 md:px-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A premium recording studio and cinematic production house crafting sound and stories
            with intent.
          </p>
          {/* Social icons row */}
          <SocialLinks variant="compact" className="mt-6" iconSize="h-5 w-5" />
          <p className="mt-4 text-xs text-muted-foreground">
            Crafted by{" "}
            <a
              href="https://scalebold.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gold transition-colors hover:text-gold-soft"
            >
              ScaleBold.in
            </a>
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-3 text-sm">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/portfolio", "Portfolio"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground transition-colors hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${PHONE_TEL}`}
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                {PHONE}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Follow us</p>
          <ul className="space-y-3 text-sm">
            {([
              ["https://www.youtube.com/channel/UCLkZ-wbeIvQrop9MrZP45Qg", "YouTube"],
              ["https://www.facebook.com/KCPMusicDhaka/", "Facebook"],
              ["https://www.instagram.com/ashokanandkcpmusic/", "Instagram"],
              ["https://x.com/KcpDhaka", "X (Twitter)"],
            ] as const).map(([href, label]) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
          <p>© {new Date().getFullYear()} KCP Music. All rights reserved.</p>
          <p className="font-display italic text-gold/80">Karizma Album · Studio · Cinema</p>
          <p className="flex items-center gap-1.5">
            <span className="inline-block h-px w-4 bg-gold/50" />
            <span className="font-semibold uppercase tracking-[0.15em]">
              Designed & Developed by{" "}
              <a
                href="https://scalebold.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-gold transition-all duration-300 hover:text-gold-soft hover:underline hover:underline-offset-4"
              >
                ScaleBold.in
              </a>
            </span>
            <span className="inline-block h-px w-4 bg-gold/50" />
          </p>
        </div>
      </div>
    </footer>
  );
}

