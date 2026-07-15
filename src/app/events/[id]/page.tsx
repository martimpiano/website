import Link from "next/link";
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import eventsData from "@/data/events.json";
import detailData from "@/data/event-detail.json";

export function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id,
  }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const event = eventsData.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col bg-paper">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-serif text-4xl text-ink">{detailData.notFoundTitle}</h1>
            <p className="mt-4 text-ink-soft">
              {detailData.notFoundDescription}
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-paper hover:bg-gold hover:text-navy transition-colors"
            >
              <ArrowLeft size={14} />
              {detailData.notFoundButton}
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-24">
        <article className="mx-auto max-w-4xl px-6 lg:px-10">
          <Link
            href="/#events"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft hover:text-gold transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            {detailData.backButton}
          </Link>

          <div className="border-b border-line pb-8">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
              {detailData.eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-ink">
              {event.title}
            </h1>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-b border-line bg-mist px-6">
            <div className="flex items-center gap-3">
              <Calendar className="text-gold shrink-0" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-soft">{detailData.dateLabel}</p>
                <p className="font-serif text-lg text-ink">{event.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-gold shrink-0" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-soft">{detailData.timeLabel}</p>
                <p className="font-serif text-lg text-ink">{event.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-gold shrink-0" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-soft">{detailData.venueLabel}</p>
                <p className="font-serif text-lg text-ink">{event.venue}, {event.city}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-ink mb-4">{detailData.programSection}</h2>
              <p className="font-cormorant text-2xl leading-relaxed text-ink-soft italic">
                {event.program}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-ink mb-4">{detailData.aboutSection}</h2>
              <p className="text-base text-ink-soft leading-relaxed">
                {detailData.genericVenueText.replace("{event.venue}", event.venue)}
              </p>
            </div>

            <div className="pt-6">
              <a
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-sm bg-navy px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-paper transition-all duration-300 hover:bg-gold hover:text-navy shadow-md"
              >
                {event.ticketLabel}
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}