import Link from "next/link";
import { ArrowLeft, Music } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import notFoundData from "@/data/not-found.json";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-lg">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-mist text-gold mb-6 shadow-inner">
            <Music size={36} />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">
            {notFoundData.eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-5xl text-ink">
            {notFoundData.title}
          </h1>
          <p className="mt-6 text-base text-ink-soft leading-relaxed">
            {notFoundData.description}
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-sm bg-navy px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-paper hover:bg-gold hover:text-navy transition-all duration-300 shadow-md"
            >
              <ArrowLeft size={14} />
              {notFoundData.buttonText}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}