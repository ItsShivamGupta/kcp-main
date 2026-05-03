import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Video, Music, Megaphone, BookImage, Film, Star, Quote, BadgeCheck } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CallButton, WhatsAppButton, CTAPair } from "@/components/CTAButtons";
import { SocialLinks } from "@/components/SocialLinks";

import heroStudio from "@/assets/hero-studio.webp";
import heroAlbum from "@/assets/hero-album.webp";
import heroDrone from "@/assets/hero-drone.webp";
import ownerImg from "@/assets/owner.webp";
import portfolioWedding from "@/assets/portfolio-wedding.webp";
import portfolioRecording from "@/assets/portfolio-recording.webp";
import portfolioDrone from "@/assets/portfolio-drone.webp";
import portfolioAlbum from "@/assets/portfolio-album.webp";
import portfolioAd from "@/assets/portfolio-ad.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KCP Music — Recording Studio & Cinematic Videography" },
      {
        name: "description",
        content:
          "Premium recording studio, mixing, mastering, Karizma Album production, advertising audio and 4K cinematic wedding videography by KCP Music.",
      },
      { property: "og:title", content: "KCP Music — Studio & Cinema" },
      {
        property: "og:description",
        content:
          "Sound and stories crafted with intent. Recording, mixing, mastering, Karizma Albums, and 4K cinematic videography.",
      },
    ],
  }),
  component: HomePage,
});

const slides = [
  {
    img: portfolioWedding,
    eyebrow: "Cinematic · Wedding",
    title: "Wedding\nVideography",
    sub: "Timeless 4K cinematic wedding films that capture every emotion.",
    // Adjust 'position' ("center", "left", "right", "top", "bottom", or percentage "75% 50%") 
    // to control which part of the image stays visible on narrow mobile screens.
    position: "center",
  },
  {
    img: heroAlbum,
    eyebrow: "Flagship · Karizma Album",
    title: "Karizma\nAlbums",
    sub: "Hand-crafted Karizma Albums that turn weddings into heirlooms.",
    position: "center",
  },
  {
    img: heroStudio,
    eyebrow: "Recording Studio",
    title: "Recording\nStudio",
    sub: "An acoustically tuned room. Vintage warmth. Modern precision.",
    position: "center",
  },
  {
    img: heroDrone,
    eyebrow: "Cinema · Drone",
    title: "Drone\nCamera.",
    sub: "4K cinematic videography, DSLR, and aerial drone production.",
    position: "center",
  },
];

function Hero() {
  const [i, setI] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [i]);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setTouchEnd(null);
    if ('targetTouches' in e) {
      setTouchStart(e.targetTouches[0].clientX);
    } else {
      setTouchStart((e as React.MouseEvent).clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if ('targetTouches' in e) {
      setTouchEnd(e.targetTouches[0].clientX);
    } else {
      if (touchStart !== null) {
        setTouchEnd((e as React.MouseEvent).clientX);
      }
    }
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setI((p) => (p + 1) % slides.length);
    }
    if (isRightSwipe) {
      setI((p) => (p === 0 ? slides.length - 1 : p - 1));
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden cursor-grab active:cursor-grabbing"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onTouchStart}
      onMouseMove={onTouchMove}
      onMouseUp={onTouchEnd}
      onMouseLeave={onTouchEnd}
    >
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out pointer-events-none ${i === idx ? "opacity-100" : "opacity-0"
            }`}
          aria-hidden={i !== idx}
        >
          <img
            src={s.img}
            alt=""
            draggable={false}
            style={{ objectPosition: s.position || "center" }}
            className={`h-full w-full object-cover select-none ${i === idx ? "animate-slow-zoom" : ""}`}
            loading={idx === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={idx === 0 ? "high" : "auto"}
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-5 pb-24 sm:items-center sm:pb-0 md:px-10">
        <div className="max-w-2xl pointer-events-auto cursor-auto">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`${i === idx ? "block" : "hidden"}`}
            >
              <p className="eyebrow animate-fade-up">{s.eyebrow}</p>
              <h1 className="mt-4 sm:mt-6 whitespace-pre-line font-display text-4xl leading-[1.05] sm:leading-[0.95] text-foreground animate-fade-up delay-100 sm:text-5xl md:text-7xl lg:text-8xl">
                {s.title.split("\n").map((line, li) => (
                  <span key={li} className="block">
                    {li === 1 ? <em className="not-italic text-gold">{line}</em> : line}
                  </span>
                ))}
              </h1>
              <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-base leading-relaxed text-muted-foreground animate-fade-up delay-200 md:text-lg">
                {s.sub}
              </p>
              <div className="mt-8 sm:mt-10 animate-fade-up delay-300">
                <CTAPair size="lg" />
              </div>
              <SocialLinks variant="compact" className="mt-6 animate-fade-up delay-500 gap-5" iconSize="h-4 w-4" />
            </div>
          ))}
        </div>
      </div>

      {/* slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3 md:left-10 md:translate-x-0 pointer-events-auto">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setI(idx);
            }}
            aria-label={`Slide ${idx + 1}`}
            className={`h-px transition-all duration-500 ${i === idx ? "w-12 bg-gold" : "w-6 bg-foreground/30 hover:bg-foreground/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}

const services = [
  { Icon: Camera, title: "Wedding Photography", text: "Professional wedding photography with pre-wedding shoots." },
  { Icon: Video, title: "Wedding Videography", text: "Cinematic wedding films with 4K quality and drone footage." },
  { Icon: Music, title: "Audio Album Creation", text: "Professional music production, recording, and mixing." },
  { Icon: Film, title: "Video Album Creation", text: "High-quality regional music videos and devotional albums." },
  { Icon: Megaphone, title: "Audio Ads Creation", text: "Compelling audio advertisements with professional voice-over." },
  { Icon: BookImage, title: "Karizma Albums", text: "Beautiful photo albums with custom layouts and premium materials." },
];

function Services() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-16 grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow">Our Services</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-6xl">
              Capturing your most <em className="not-italic text-gold">precious moments.</em>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            From beautiful wedding memories to professional audio and video production, we bring your stories to life with cinematic quality and heartfelt dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group relative flex flex-col gap-4 bg-background p-8 transition-colors duration-500 hover:bg-card md:p-10"
            >
              <Icon className="h-7 w-7 text-gold" strokeWidth={1.25} />
              <h3 className="font-display text-2xl text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              <div className="mt-2 h-px w-8 bg-gold/40 transition-all duration-500 group-hover:w-16 group-hover:bg-gold" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:text-gold"
          >
            All services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const featured = [
  { img: portfolioWedding, tag: "Wedding Photography", title: "Pre-Wedding & Portraits" },
  { img: portfolioDrone, tag: "Wedding Videography", title: "Cinematic 4K & Drone" },
  { img: portfolioRecording, tag: "Audio & Video Albums", title: "Regional & Devotional" },
  { img: portfolioAd, tag: "Audio Ads Creation", title: "Voice-overs & Jingles" },
  { img: portfolioAlbum, tag: "Karizma Albums", title: "Premium Custom Layouts" },
];

function FeaturedPortfolio() {
  return (
    <section className="relative bg-card py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-6xl">
              Frames & <em className="not-italic text-gold">frequencies.</em>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden items-center gap-3 font-sans text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:text-gold md:inline-flex"
          >
            View all
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {featured.map((item, idx) => (
            <Link
              to="/portfolio"
              key={item.title}
              className={`group relative block overflow-hidden bg-background ${idx === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : "aspect-[4/5]"
                }`}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                decoding="async"
                width={1280}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <p className="eyebrow">{item.tag}</p>
                <p className="mt-2 font-display text-xl text-foreground md:text-2xl">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28 md:py-40">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-gold/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gold/[0.03] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Section header */}
        <div className={`mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="eyebrow">Meet the visionary</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-foreground md:text-6xl lg:text-7xl">
            The man behind the <em className="not-italic text-gold">magic.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:gap-20 lg:grid-cols-12">
          {/* Left: Director image */}
          <div className={`relative lg:col-span-5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Decorative frame elements */}
            <div className="absolute -left-3 -top-3 h-24 w-px bg-gradient-to-b from-gold/60 to-transparent" />
            <div className="absolute -left-3 -top-3 h-px w-24 bg-gradient-to-r from-gold/60 to-transparent" />
            <div className="absolute -bottom-3 -right-3 h-24 w-px bg-gradient-to-t from-gold/60 to-transparent" />
            <div className="absolute -bottom-3 -right-3 h-px w-24 bg-gradient-to-l from-gold/60 to-transparent" />

            {/* Floating gold accent dots */}
            <div className="absolute -right-2 top-8 h-2 w-2 rounded-full bg-gold/50 animate-pulse" />
            <div className="absolute -left-4 bottom-16 h-1.5 w-1.5 rounded-full bg-gold/30 animate-pulse delay-500" />

            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={ownerImg}
                alt="Ashok Anand — Director, KCP Music"
                loading="lazy"
                decoding="async"
                width={800}
                height={1067}
                className="h-full w-full object-cover object-top transition-transform duration-[2000ms] ease-out hover:scale-[1.03]"
              />
              {/* Subtle vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
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

          {/* Right: Content */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Gold decorative line */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-gold/50" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold/70">A Legacy of Excellence</span>
            </div>

            <h3 className="font-display text-3xl leading-snug text-foreground md:text-4xl lg:text-5xl">
              12+ years of crafting
              <span className="text-gold"> unforgettable</span> experiences
            </h3>

            <div className="mt-8 space-y-5 text-base leading-[1.8] text-muted-foreground md:text-lg">
              <p>
                Under the visionary leadership of <strong className="font-medium text-foreground">Ashok Anand</strong>,
                KCP Music has evolved from a passionate dream into a premier creative powerhouse.
                With an unwavering commitment to excellence and an eye for detail that borders on
                obsession, he has built a studio where every note resonates and every frame tells a story.
              </p>
              <p>
                From capturing the raw emotion of a wedding ceremony in cinematic 4K to producing
                chart-worthy audio that moves souls — Ashok's philosophy is simple: <em className="not-italic text-gold/90">never settle
                  for anything less than extraordinary.</em>
              </p>
            </div>

            {/* Signature line */}
            <div className="mt-10 flex items-center gap-5">
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              <span className="font-cursive text-2xl text-gold/60">Ashok Anand</span>
            </div>

            {/* Stats bar */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-10">
              {[
                ["12+", "Years of\nExperience"],
                ["2500+", "Projects\nDelivered"],
                ["100%", "In-house\nProduction"],
              ].map(([n, l]) => (
                <div key={l} className="group">
                  <p className="font-display text-3xl text-gold transition-transform duration-500 group-hover:scale-110 md:text-4xl lg:text-5xl">{n}</p>
                  <p className="mt-3 whitespace-pre-line text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Link
                to="/about"
                className="group inline-flex items-center gap-4 border border-gold/30 px-8 py-4 font-sans text-xs uppercase tracking-[0.3em] text-foreground transition-all duration-500 hover:border-gold hover:bg-gold/10 hover:text-gold hover:shadow-gold"
              >
                Discover our full story
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "They didn't just record our song — they understood it. The mix sounds like it belongs on a film soundtrack.",
    name: "Aarav Mehta",
    role: "Independent Artist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
    verified: true,
  },
  {
    quote:
      "Our wedding film made my parents cry. Our Karizma Album made them speechless. Worth every penny.",
    name: "Aanya & Rohan",
    role: "Wedding Clients",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
    verified: true,
  },
  {
    quote:
      "The drone work and the audio bed they produced gave our brand campaign a cinematic edge.",
    name: "Vikram Shah",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
    verified: true,
  },
];

function Testimonials() {
  return (
    <section className="relative bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Trusted voices</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-foreground md:text-5xl">
            Words from the people we've worked <em className="not-italic text-gold">with.</em>
          </h2>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {testimonials.map((t, i) => (
                <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-card">
                  <img src={t.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 ring-2 ring-card">
                <span className="text-xs font-bold text-gold">500+</span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Trusted by clients</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="group relative flex flex-col justify-between bg-card p-8 transition-all duration-500 hover:z-20 hover:-translate-y-1 hover:bg-background hover:shadow-2xl hover:shadow-gold/5 md:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <Quote className="h-8 w-8 text-border transition-colors duration-500 group-hover:text-gold/40" strokeWidth={1.5} />
                  <div className="flex gap-1 opacity-0 transition-all duration-500 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold/50 text-gold/50" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
                  "{t.quote}"
                </blockquote>
              </div>
              <figcaption className="relative z-10 mt-10 flex items-center gap-5 border-t border-border pt-8 transition-colors duration-500 group-hover:border-gold/20">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-border transition-all duration-500 group-hover:scale-110 group-hover:ring-gold/50">
                  <img src={t.image} alt={t.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-display text-xl text-foreground">{t.name}</p>
                    {t.verified && (
                      <BadgeCheck className="h-4 w-4 text-gold/80" strokeWidth={2} />
                    )}
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0">
        <img
          src={heroStudio}
          alt=""
          loading="lazy"
          decoding="async"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-10">
        <p className="eyebrow">Let's begin</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[1] text-foreground md:text-7xl lg:text-8xl">
          Let's create something <em className="not-italic text-gold">powerful.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Every great project begins with a conversation. Tell us your vision — we'll bring the
          studio, the cameras, and the craft.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <CallButton size="lg" />
          <WhatsAppButton size="lg" />
        </div>
        <SocialLinks variant="compact" className="mt-8 justify-center gap-5" iconSize="h-5 w-5" />
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <AboutPreview />
      <Services />
      <FeaturedPortfolio />
      <Testimonials />
      <FinalCTA />
    </SiteLayout>
  );
}
