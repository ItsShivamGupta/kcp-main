import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CTAPair } from "@/components/CTAButtons";
import portfolioRecording from "@/assets/portfolio-recording.webp";
import portfolioMixing from "@/assets/portfolio-mixing.webp";
import heroAlbum from "@/assets/hero-album.webp";
import portfolioAd from "@/assets/portfolio-ad.webp";
import portfolioWedding from "@/assets/portfolio-wedding.webp";
import portfolioDrone from "@/assets/portfolio-drone.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — KCP Music Studio" },
      {
        name: "description",
        content:
          "Recording, mixing, mastering, Karizma Album production, advertising audio, wedding cinematography and 4K drone production by KCP Music.",
      },
      { property: "og:title", content: "Services — KCP Music" },
      {
        property: "og:description",
        content: "Everything KCP Music offers — sound, cinema, and craft.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    img: portfolioWedding,
    eyebrow: "Wedding Photography",
    title: "Moments captured forever.",
    text: "Professional wedding photography capturing the raw emotion, rituals, and joy of your big day. We also offer curated pre-wedding shoots to tell your unique love story.",
    features: ["Traditional & candid photography", "Pre-wedding cinematic shoots", "High-resolution digital delivery", "Dedicated portrait sessions"],
  },
  {
    img: portfolioDrone,
    eyebrow: "Wedding Videography",
    title: "Cinematic wedding films.",
    text: "More than just a video — we create a cinematic film of your wedding. Captured in stunning 4K quality, complete with licensed drone footage for a breathtaking aerial perspective.",
    features: ["4K cinematic film production", "Licensed drone cinematography", "Same-day highlight reels", "Professional audio recording"],
  },
  {
    img: portfolioMixing,
    eyebrow: "Audio Album Creation",
    title: "Professional music production.",
    text: "Whether it's a devotional audio album or regional music, our studio provides end-to-end audio production. Experience industry-standard recording, mixing, and mastering.",
    features: ["Studio audio recording", "Vocal & instrument tracking", "Professional mixing and mastering", "Release-ready digital formats"],
  },
  {
    img: portfolioRecording,
    eyebrow: "Video Album Creation",
    title: "Visuals that tell your story.",
    text: "Complete video production for regional music and devotional albums. From conceptualization and shooting to editing and final color grading.",
    features: ["Music video production", "On-location and studio shoots", "Professional video editing", "Color grading & finishing"],
  },
  {
    img: portfolioAd,
    eyebrow: "Audio Ads Creation",
    title: "Sound that sells.",
    text: "Reach your local audience effectively with compelling audio advertisements. We provide professional voice-overs, regional language support, and engaging jingles.",
    features: ["Professional voice-overs", "Local & regional languages", "Original jingles & background scores", "Ready for radio and digital"],
  },
  {
    img: heroAlbum,
    eyebrow: "Flagship · Karizma Album",
    title: "Beautiful photo albums.",
    text: "Turn your memories into heirlooms with our premium Karizma Albums. Featuring custom layouts, beautiful binding, and high-quality photo paper that lasts generations.",
    features: ["Custom layout designs", "Premium glossy/matte finishes", "Durable, high-quality binding", "Multiple sizes available"],
    flagship: true,
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <p className="eyebrow animate-fade-up">Services</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] text-foreground animate-fade-up delay-100 md:text-7xl lg:text-8xl">
            Memories, sound and <em className="not-italic text-gold">cinema.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground animate-fade-up delay-200 md:text-lg">
            We bring professional quality photography, videography, and audio production to your doorstep. Choose what you need — or let us handle your entire event end-to-end.
          </p>
        </div>
      </section>

      {services.map((s, idx) => (
        <section
          key={s.title}
          className={`relative py-16 md:py-24 ${s.flagship ? "bg-card" : ""}`}
        >
          <div
            className={`mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-10 ${
              idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                decoding="async"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
              {s.flagship && (
                <div className="absolute left-0 top-8 bg-gold px-4 py-2 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-primary-foreground">
                  Flagship
                </div>
              )}
            </div>

            <div>
              <p className="eyebrow">{s.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
                {s.title.split(" ").slice(0, -1).join(" ")}{" "}
                <em className="not-italic text-gold">{s.title.split(" ").slice(-1)}</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {s.text}
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-2 h-px w-4 flex-shrink-0 bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <CTAPair />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            Not sure where to <em className="not-italic text-gold">start?</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Send us a message — we'll help shape the right production around your vision and budget.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAPair size="lg" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
