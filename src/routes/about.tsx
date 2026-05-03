import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTAPair } from "@/components/CTAButtons";
import { SocialLinks } from "@/components/SocialLinks";
import { Award, Heart, Sparkles, Users } from "lucide-react";
import aboutStudio from "@/assets/about-studio.webp";
import ownerImg from "@/assets/owner.webp";
import portfolioRecording from "@/assets/portfolio-recording.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KCP Music | Director Ashok Anand" },
      {
        name: "description",
        content:
          "Meet Ashok Anand, the visionary director behind KCP Music — a premium recording studio and cinematic production house obsessed with craft, detail and timeless storytelling.",
      },
      { property: "og:title", content: "About KCP Music — Ashok Anand" },
      {
        property: "og:description",
        content: "A studio built on craft, intent and timeless storytelling by director Ashok Anand.",
      },
    ],
  }),
  component: AboutPage,
});

function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function AboutPage() {
  const director = useRevealOnScroll(0.12);
  const philosophy = useRevealOnScroll(0.1);

  return (
    <SiteLayout>
      {/* ── Hero Header ── */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold/[0.04] blur-[140px]" />
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <p className="eyebrow animate-fade-up">About KCP Music</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] text-foreground animate-fade-up delay-100 md:text-7xl lg:text-8xl">
            Where passion meets <em className="not-italic text-gold">precision.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground animate-fade-up delay-200 md:text-lg">
            A studio built on craft, intent, and timeless storytelling — led by a director
            whose obsession with quality has defined over a decade of unforgettable work.
          </p>
        </div>
      </section>

      {/* ── Director Spotlight ── */}
      <section
        ref={director.ref as React.RefObject<HTMLElement>}
        className="relative overflow-hidden py-20 md:py-32"
      >
        {/* Background accents */}
        <div className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-gold/[0.04] blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/[0.03] blur-[100px]" />

        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 items-start gap-12 md:gap-20 lg:grid-cols-12">
            {/* Left: Portrait */}
            <div className={`relative lg:col-span-5 transition-all duration-1000 ${director.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              {/* Corner accents */}
              <div className="absolute -left-3 -top-3 h-28 w-px bg-gradient-to-b from-gold/60 to-transparent" />
              <div className="absolute -left-3 -top-3 h-px w-28 bg-gradient-to-r from-gold/60 to-transparent" />
              <div className="absolute -bottom-3 -right-3 h-28 w-px bg-gradient-to-t from-gold/60 to-transparent" />
              <div className="absolute -bottom-3 -right-3 h-px w-28 bg-gradient-to-l from-gold/60 to-transparent" />

              {/* Floating dots */}
              <div className="absolute -right-2 top-10 h-2 w-2 rounded-full bg-gold/50 animate-pulse" />
              <div className="absolute -left-4 bottom-20 h-1.5 w-1.5 rounded-full bg-gold/30 animate-pulse delay-500" />

              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={ownerImg}
                  alt="Ashok Anand — Director, KCP Music"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1067}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/15" />

                {/* Name badge */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="backdrop-blur-md bg-background/50 border border-gold/15 p-5 md:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-display text-2xl text-foreground md:text-3xl">Ashok Anand</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-gold">Founder &amp; Director</p>
                      </div>
                      <SocialLinks variant="compact" className="gap-3" iconSize="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bio */}
            <div className={`lg:col-span-7 transition-all duration-1000 delay-300 ${director.visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-12 bg-gold/50" />
                <span className="text-xs uppercase tracking-[0.3em] text-gold/70">The Visionary</span>
              </div>

              <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
                A director driven by
                <span className="text-gold"> excellence.</span>
              </h2>

              <div className="mt-10 space-y-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
                <p>
                  <strong className="font-medium text-foreground">Ashok Anand</strong> founded KCP Music
                  with a singular vision — to create a space where art is never rushed, and quality is never
                  negotiated. What began as a modest recording booth has, under his steadfast leadership,
                  blossomed into one of the region's most respected creative studios.
                </p>
                <p>
                  With over <strong className="font-medium text-foreground">12 years</strong> of hands-on
                  experience in audio production, cinematic videography, and album design, Ashok brings a
                  rare combination of technical mastery and artistic intuition to every project. Whether it's
                  a soulful recording session at 2 AM or a golden-hour wedding film, his commitment remains
                  the same — <em className="not-italic text-gold/90">make it timeless.</em>
                </p>
                <p>
                  His philosophy is rooted in authenticity. Every note, every frame, every page of a
                  Karizma Album passes through his exacting standards. This isn't a factory — it's a
                  workshop where craft is the only currency that matters.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-10 flex items-center gap-5">
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                <span className="font-cursive text-3xl text-gold/60">Ashok Anand</span>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-10">
                {[
                  ["12+", "Years of\nExperience"],
                  ["400+", "Projects\nDelivered"],
                  ["100%", "In-house\nProduction"],
                ].map(([n, l]) => (
                  <div key={l} className="group">
                    <p className="font-display text-3xl text-gold transition-transform duration-500 group-hover:scale-110 md:text-4xl lg:text-5xl">{n}</p>
                    <p className="mt-3 whitespace-pre-line text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-16 md:py-24 bg-card">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 md:grid-cols-5 md:px-10">
          <div className="md:col-span-2">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              From a dream to a <em className="not-italic text-gold">legacy.</em>
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-3 md:text-lg">
            <p>
              KCP Music began as a single recording booth and a stubborn refusal to compromise.
              Today, it stands as a complete creative studio — recording, mixing, mastering,
              album production, and cinematic videography under one roof.
            </p>
            <p>
              We believe craft is a discipline, not a department. Whether we're tracking a
              vocalist at 2 AM, color-grading a wedding film at golden hour, or hand-finishing
              a Karizma Album, the same standard applies — make it the kind of work people
              pass down.
            </p>
          </div>
        </div>
      </section>

      {/* ── Studio Image ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={aboutStudio}
              alt="KCP Music studio interior"
              loading="lazy"
              decoding="async"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/15" />
          </div>
        </div>
      </section>

      {/* ── Philosophy Pillars ── */}
      <section
        ref={philosophy.ref as React.RefObject<HTMLElement>}
        className="py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className={`mb-16 transition-all duration-1000 ${philosophy.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="eyebrow">Our philosophy</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-6xl">
              What <em className="not-italic text-gold">defines</em> us.
            </h2>
          </div>

          <div className={`grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 transition-all duration-1000 delay-200 ${philosophy.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              {
                Icon: Sparkles,
                title: "Craft over noise",
                text: "We'd rather deliver one masterpiece than ten ordinary projects. Every detail is intentional — every mix, every frame, every page.",
              },
              {
                Icon: Heart,
                title: "Intimacy at scale",
                text: "We work with limited clients per month so each project gets the studio's full attention and Ashok's personal oversight.",
              },
              {
                Icon: Award,
                title: "Heirloom-grade output",
                text: "From mixes mastered for vinyl to gold-foil bound Karizma Albums — we build to be kept, cherished, and passed down.",
              },
              {
                Icon: Users,
                title: "One studio, one team",
                text: "No outsourcing. Every frame, every fader is touched by the people who care most — led by Ashok himself.",
              },
            ].map((p) => (
              <div key={p.title} className="group relative flex flex-col gap-4 bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10">
                <p.Icon className="h-7 w-7 text-gold" strokeWidth={1.25} />
                <h3 className="font-display text-3xl text-foreground md:text-4xl">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{p.text}</p>
                <div className="mt-2 h-px w-8 bg-gold/40 transition-all duration-500 group-hover:w-16 group-hover:bg-gold" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0">
          <img
            src={portfolioRecording}
            alt=""
            loading="lazy"
            decoding="async"
            width={1280}
            height={1280}
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center md:px-10">
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            Ready when you <em className="not-italic text-gold">are.</em>
          </h2>
          <div className="mt-10 flex justify-center">
            <CTAPair size="lg" />
          </div>
          <SocialLinks variant="compact" className="mt-6 justify-center gap-5" iconSize="h-5 w-5" />
        </div>
      </section>
    </SiteLayout>
  );
}
