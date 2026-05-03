import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTAPair } from "@/components/CTAButtons";
import portfolioWedding from "@/assets/portfolio-wedding.webp";
import portfolioRecording from "@/assets/portfolio-recording.webp";
import portfolioDrone from "@/assets/portfolio-drone.webp";
import portfolioVideo from "@/assets/portfolio-video.webp";
import portfolioAlbum from "@/assets/portfolio-album.webp";
import portfolioAd from "@/assets/portfolio-ad.webp";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — KCP Music" },
      {
        name: "description",
        content:
          "Selected audio, video and drone work by KCP Music — recording sessions, mixes, wedding films and aerial cinematography.",
      },
      { property: "og:title", content: "Portfolio — KCP Music" },
      {
        property: "og:description",
        content: "Selected work — audio, video and aerial cinematography.",
      },
    ],
  }),
  component: PortfolioPage,
});

type Cat = "All" | "Photography" | "Videography" | "Audio";

const items: { img: string; title: string; tag: string; cat: Exclude<Cat, "All"> }[] = [
  { img: portfolioWedding, title: "Pre-Wedding & Portraits", tag: "Wedding Photography", cat: "Photography" },
  { img: portfolioDrone, title: "Cinematic 4K & Drone", tag: "Wedding Videography", cat: "Videography" },
  { img: portfolioRecording, title: "Professional Production", tag: "Audio Album Creation", cat: "Audio" },
  { img: portfolioVideo, title: "Regional & Devotional", tag: "Video Album Creation", cat: "Videography" },
  { img: portfolioAd, title: "Voice-overs & Jingles", tag: "Audio Ads Creation", cat: "Audio" },
  { img: portfolioAlbum, title: "Premium Custom Layouts", tag: "Karizma Albums", cat: "Photography" },
];

function PortfolioPage() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? items : items.filter((i) => i.cat === cat);

  return (
    <SiteLayout>
      <section className="relative pt-40 pb-12 md:pt-48 md:pb-16">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <p className="eyebrow animate-fade-up">Selected work</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] text-foreground animate-fade-up delay-100 md:text-7xl lg:text-8xl">
            Frames & <em className="not-italic text-gold">frequencies.</em>
          </h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-12 flex flex-wrap items-center gap-3 border-b border-border pb-6">
            {(["All", "Photography", "Videography", "Audio"] as Cat[]).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 font-sans text-xs uppercase tracking-[0.25em] transition-colors ${cat === c
                    ? "bg-gold text-primary-foreground"
                    : "text-muted-foreground hover:text-gold"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, idx) => (
              <article
                key={item.title + idx}
                className="group relative aspect-[4/5] overflow-hidden bg-card hover-lift"
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
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <p className="eyebrow">{item.tag}</p>
                  <h3 className="mt-2 font-display text-2xl text-foreground">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            Your next <em className="not-italic text-gold">project.</em>
          </h2>
          <div className="mt-10 flex justify-center">
            <CTAPair size="lg" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
