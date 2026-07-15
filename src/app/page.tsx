"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  Calendar,
  MapPin,
  Music2,
  Play,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Clock,
  ChevronDown,
  ExternalLink,
  Send,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { useState } from "react";

import heroData from "@/data/hero.json";
import bioData from "@/data/bio.json";
import eventsData from "@/data/events.json";
import discographyData from "@/data/discography.json";
import mediaData from "@/data/media.json";
import galleryData from "@/data/gallery.json";
import contactData from "@/data/contact.json";
import footerData from "@/data/footer.json";
import headerData from "@/data/header.json";

const HALL_WIDE_IMG = "/images/hero/hall.jpg";

export default function Home() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-paper">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Events />
        <Discography />
        <MediaSection />
        <Gallery />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative grain flex min-h-screen items-center overflow-hidden bg-navy text-paper">
      <div className="absolute inset-0">
        <Image
          src={HALL_WIDE_IMG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/10 via-navy/35 to-navy-deep" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-20 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-soft">
              <span className="h-px w-10 bg-gold/70" />
              {heroData.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 font-serif text-8xl font-large leading-[1.05] sm:text-6xl lg:text-7xl">
              {heroData.title}
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 text-sm font-light uppercase tracking-[0.5em] text-paper/70">
              {heroData.subtitle}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-10 max-w-xl font-sans text-xl leading-relaxed text-paper/85 sm:text-1xl">
              {heroData.description}
            </p>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#events"
                className="group inline-flex items-center justify-center gap-3 rounded-sm bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-navy transition-all duration-300 hover:bg-gold-soft transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {heroData.ctaEvents}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-2 py-4 text-sm font-medium uppercase tracking-[0.2em] text-paper/80 transition-colors hover:text-paper"
              >
                {heroData.ctaAbout}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-paper/60 transition-colors hover:text-paper"
        aria-label="Scroll to next section"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.4em]">{heroData.scrollLabel}</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal className="order-1">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-lg">
              <Image
                src={bioData.portraitImg}
                alt="Portrait of Martim Almeida"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 hidden aspect-[3/2] w-1/2 overflow-hidden border-4 border-paper shadow-xl sm:block">
              <Image
                src={bioData.concertImg}
                alt="Concert hall interior"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -left-6 -top-6 h-20 w-px bg-gold" />
            <div className="absolute -left-6 -top-6 h-px w-20 bg-gold" />
          </div>
        </Reveal>

        <div className="order-2 flex flex-col justify-center">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              {bioData.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-6 font-serif text-4xl font-medium text-ink sm:text-5xl">
              {bioData.titleMain}
              <br />
              <span className="text-gold">{bioData.titleHighlight}</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-soft">
              <p>{bioData.paragraphs[0]}</p>
              <p>{bioData.paragraphs[1]}</p>
              {expanded && (
                <>
                  <p>{bioData.paragraphs[2]}</p>
                  <p>{bioData.paragraphs[3]}</p>
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="group mt-10 inline-flex items-center gap-3 rounded-sm border border-ink/20 px-7 py-3 text-xs font-medium uppercase tracking-[0.25em] text-ink transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy cursor-pointer"
            >
              {expanded ? "Read less" : "Read more"}
              <ArrowRight
                size={14}
                className={`transition-transform duration-300 group-hover:translate-x-1 ${
                  expanded ? "rotate-[-90deg]" : ""
                }`}
              />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Upcoming events"
            title="Where to hear Martim next"
            align="left"
          />
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {eventsData.map((event, idx) => (
            <Reveal key={event.id} delay={idx * 80}>
              <EventRow event={event} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventRow({
  event,
}: {
  event: {
    id: string;
    date: string;
    time: string;
    title: string;
    venue: string;
    city: string;
    program: string;
    ticketUrl: string;
    ticketLabel: string;
  };
}) {
  const [day, month, year] = event.date.split(" ");
  return (
    <article className="group grid grid-cols-1 gap-6 py-8 transition-colors duration-300 hover:bg-paper/60 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10 sm:px-4">
      <div className="flex items-baseline gap-4 sm:flex-col sm:items-start sm:gap-1">
        <span className="font-serif text-3xl font-medium text-ink sm:text-4xl">
          {day}
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
          {month} {year}
        </span>
      </div>

      <div>
        <Link
          href={`/events/${event.id}`}
          className="font-serif text-xl text-ink transition-colors group-hover:text-gold sm:text-2xl"
        >
          {event.title}
        </Link>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-gold" />
            {event.venue} — {event.city}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} className="text-gold" />
            {event.time}
          </span>
        </div>
        <p className="mt-2 max-w-2xl font-cormorant text-base italic text-ink-soft/80">
          {event.program}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/events/${event.id}`}
          className="hidden md:inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold"
        >
          Details
        </Link>
        <a
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-navy px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-paper transition-all duration-300 hover:bg-gold hover:text-navy shadow-xs"
        >
          {event.ticketLabel}
          <ExternalLink size={12} />
        </a>
      </div>
    </article>
  );
}

function Discography() {
  return (
    <section id="discography" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Discography"
            title="Selected recordings"
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {discographyData.map((album, idx) => (
            <Reveal key={album.title} delay={idx * 100}>
              <a
                href={album.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden bg-mist shadow-md">
                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="m-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-navy shadow-md">
                      <Play size={16} className="ml-0.5" fill="currentColor" />
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg text-ink group-hover:text-gold transition-colors">
                      {album.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{album.label}</p>
                  </div>
                  <span className="text-sm font-medium text-gold">
                    {album.year}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MediaSection() {
  return (
    <section id="media" className="relative grain overflow-hidden bg-navy py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <p className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-soft">
              <span className="h-px w-10 bg-gold/70" />
              Media
              <span className="h-px w-10 bg-gold/70" />
            </p>
            <h2 className="mt-6 font-serif text-4xl font-medium sm:text-5xl">
              Listen &amp; watch
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <a
              href={mediaData.featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-video overflow-hidden border border-paper/10 shadow-xl"
            >
              <Image
                src={mediaData.featured.image}
                alt="Featured performance"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/40">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/95 text-navy transition-all duration-300 group-hover:scale-110 group-hover:bg-gold shadow-lg">
                  <Play size={28} className="ml-1" fill="currentColor" />
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">
                  Featured Video
                </p>
                <h3 className="mt-2 font-serif text-2xl text-paper">
                  {mediaData.featured.title}
                </h3>
                <p className="mt-1 text-sm text-paper/70">
                  {mediaData.featured.context}
                </p>
              </div>
            </a>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">
                More recordings
              </p>
            </Reveal>
            <div className="mt-6 divide-y divide-paper/10 border-y border-paper/10">
              {mediaData.tracks.map((m, idx) => (
                <Reveal key={m.title} delay={idx * 80}>
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center gap-5 py-3 px-2 text-left transition-colors hover:bg-paper/5"
                  >
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-paper/30 text-gold-soft transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
                      <Play size={14} className="ml-0.5" fill="currentColor" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-serif text-base text-paper sm:text-lg group-hover:text-gold transition-colors">
                        {m.title}
                      </h4>
                      <p className="mt-0.5 truncate text-xs text-paper/60">
                        {m.context}
                      </p>
                    </div>
                    <span className="text-xs text-paper/50">{m.duration}</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="On stage & in the studio"
            align="center"
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:auto-rows-[240px]">
            {galleryData.map((img, idx) => (
              <figure
                key={idx}
                className={`group relative overflow-hidden shadow-sm ${
                  img.span ?? ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-deep/0 transition-colors duration-500 group-hover:bg-navy-deep/30" />
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const handleComposeEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const emailSubject = `Inquiry: ${subject}`;
    const emailBody = `Dear Martim Almeida Management,\n\nName: ${name}\nEmail: ${email}\n\nInquiry Details:\n${message}`;

    window.location.href = `mailto:${contactData.bookingEmail}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <section id="contact" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              {contactData.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-serif text-4xl font-medium text-ink sm:text-5xl">
              {contactData.title}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft">
              {contactData.description}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-10 space-y-4 text-sm">
              <a
                href={`mailto:${contactData.bookingEmail}`}
                className="group flex items-center gap-3 text-ink-soft transition-colors hover:text-gold"
              >
                <Mail size={16} className="text-gold" />
                {contactData.bookingEmail}
              </a>
              <p className="flex items-center gap-3 text-ink-soft">
                <MapPin size={16} className="text-gold" />
                {contactData.locations}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="flex flex-col justify-center bg-mist p-8 sm:p-12 shadow-sm border border-line">
          <form onSubmit={handleComposeEmail} className="space-y-6">
            <h3 className="font-serif text-2xl text-ink mb-2">{contactData.formTitle}</h3>
            <p className="text-xs text-ink-soft tracking-wide mb-6">
              {contactData.formSubtitle}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-[0.2em] text-ink-soft mb-2"
                >
                  {contactData.fieldNameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={contactData.fieldNamePlaceholder}
                  className="w-full border-b border-line bg-transparent py-2 font-sans text-base text-ink outline-none transition-colors placeholder:text-ink-soft/40 focus:border-gold"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-[0.2em] text-ink-soft mb-2"
                >
                  {contactData.fieldEmailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={contactData.fieldEmailPlaceholder}
                  className="w-full border-b border-line bg-transparent py-2 font-sans text-base text-ink outline-none transition-colors placeholder:text-ink-soft/40 focus:border-gold"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-medium uppercase tracking-[0.2em] text-ink-soft mb-2"
              >
                {contactData.fieldSubjectLabel}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder={contactData.fieldSubjectPlaceholder}
                className="w-full border-b border-line bg-transparent py-2 font-sans text-base text-ink outline-none transition-colors placeholder:text-ink-soft/40 focus:border-gold"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-[0.2em] text-ink-soft mb-2"
              >
                {contactData.fieldMessageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder={contactData.fieldMessagePlaceholder}
                className="w-full border-b border-line bg-transparent py-2 font-sans text-base text-ink outline-none transition-colors placeholder:text-ink-soft/40 focus:border-gold resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 rounded-sm bg-navy px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-paper transition-all duration-300 hover:bg-gold hover:text-navy shadow-md cursor-pointer"
            >
              {contactData.submitButton}
              <Send size={14} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl">{footerData.title}</p>
            <p className="mt-2 text-xs font-light uppercase tracking-[0.4em] text-gold-soft">
              {footerData.subtitle}
            </p>
            <p className="mt-6 max-w-xs text-sm text-paper/60">
              {footerData.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-soft">
              {footerData.exploreTitle}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {headerData.navItems.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-paper/70 transition-colors hover:text-paper"
                  >
                    <ArrowRight
                      size={12}
                      className="text-gold opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-soft">
              {footerData.followTitle}
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-2 text-xs text-paper/50">
              <Calendar size={12} className="text-gold-soft" />
              Booking: {footerData.bookingEmail}
            </p>
            <p className="mt-1 flex items-center gap-2 text-xs text-paper/50">
              <Music2 size={12} className="text-gold-soft" />
              Press: {footerData.pressEmail}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {footerData.copyrightTemplate}
          </p>
          <p className="flex items-center gap-2">
            <span>{footerData.credits}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="group fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink-soft shadow-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy"
    >
      <ArrowUp size={18} className="transition-transform group-hover:-translate-y-0.5" />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <p
        className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-gold ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-10 bg-gold" />
        {eyebrow}
        {align === "center" && <span className="h-px w-10 bg-gold" />}
      </p>
      <h2 className="mt-6 font-serif text-4xl font-medium text-ink sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}