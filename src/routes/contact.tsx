import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { SocialLinks } from "@/components/SocialLinks";
import { PHONE, PHONE_TEL, WHATSAPP_URL, EMAIL, SOCIAL } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KCP Music" },
      {
        name: "description",
        content:
          "Call, WhatsApp or write to KCP Music to discuss recording, mixing, album production, wedding cinematography or drone work.",
      },
      { property: "og:title", content: "Contact KCP Music" },
      {
        property: "og:description",
        content: "Reach out to discuss your next project.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <p className="eyebrow animate-fade-up">Get in touch</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] text-foreground animate-fade-up delay-100 md:text-7xl lg:text-8xl">
            Let's start the <em className="not-italic text-gold">conversation.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground animate-fade-up delay-200 md:text-lg">
            The fastest way to reach us is by phone or WhatsApp. We respond within hours, every day.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border border-border bg-border md:grid-cols-3 md:mx-10 lg:mx-auto lg:px-10">
          <a
            href={`tel:${PHONE_TEL}`}
            className="group flex flex-col gap-4 bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10"
          >
            <Phone className="h-7 w-7 text-gold" strokeWidth={1.25} />
            <p className="eyebrow">Call</p>
            <p className="font-display text-2xl text-foreground transition-colors group-hover:text-gold md:text-3xl">
              {PHONE}
            </p>
            <p className="text-sm text-muted-foreground">Tap to dial directly</p>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10"
          >
            <MessageCircle className="h-7 w-7 text-gold" strokeWidth={1.25} />
            <p className="eyebrow">WhatsApp</p>
            <p className="font-display text-2xl text-foreground transition-colors group-hover:text-gold md:text-3xl">
              Message us
            </p>
            <p className="text-sm text-muted-foreground">Quickest response, every day</p>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group flex flex-col gap-4 bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10"
          >
            <Mail className="h-7 w-7 text-gold" strokeWidth={1.25} />
            <p className="eyebrow">Email</p>
            <p className="break-all font-display text-2xl text-foreground transition-colors group-hover:text-gold md:text-3xl">
              {EMAIL}
            </p>
            <p className="text-sm text-muted-foreground">For detailed briefs</p>
          </a>
        </div>
      </section>

      {/* Social media section */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="eyebrow mb-8 text-center">Follow us</p>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
            {([
              { href: SOCIAL.youtube, label: "YouTube", sub: "Watch our work", color: "hover:text-red-500" },
              { href: SOCIAL.facebook, label: "Facebook", sub: "Join the community", color: "hover:text-blue-500" },
              { href: SOCIAL.instagram, label: "Instagram", sub: "Behind the scenes", color: "hover:text-pink-500" },
              { href: SOCIAL.x, label: "X (Twitter)", sub: "Latest updates", color: "hover:text-foreground" },
            ] as const).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-3 bg-background p-8 text-center transition-colors duration-500 hover:bg-card md:p-10 ${s.color}`}
              >
                <p className="font-display text-xl text-foreground transition-colors duration-300 group-hover:text-gold md:text-2xl">
                  {s.label}
                </p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
                <div className="mt-1 h-px w-6 bg-gold/30 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 md:grid-cols-2 md:px-10">
          <div>
            <p className="eyebrow">Drop a line</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Tell us about your <em className="not-italic text-gold">project.</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Share a few details and we'll get back to you within 24 hours. Or skip the form and
              tap WhatsApp — we're listening.
            </p>
            <div className="mt-10 flex items-start gap-4 border-t border-border pt-8">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <p className="font-display text-lg text-foreground">Studio Location</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Available across India · Studio sessions by appointment
                </p>
              </div>
            </div>

            {/* Social follow */}
            <div className="mt-8 border-t border-border pt-8">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">Follow us on social media</p>
              <SocialLinks variant="default" iconSize="h-5 w-5" />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
              (e.target as HTMLFormElement).reset();
            }}
            className="space-y-6"
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "email", label: "Email", type: "email" },
            ].map((f) => (
              <div key={f.name}>
                <label
                  htmlFor={f.name}
                  className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground"
                >
                  {f.label}
                </label>
                <input
                  required
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-gold"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground"
              >
                Project details
              </label>
              <textarea
                required
                id="message"
                name="message"
                rows={4}
                className="w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-gold"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:bg-gold-soft hover:shadow-[var(--shadow-gold)]"
            >
              <Send className="h-4 w-4" strokeWidth={1.5} />
              Send message
            </button>
            {sent && (
              <p className="text-sm text-gold animate-fade-in">
                Thank you — we'll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
