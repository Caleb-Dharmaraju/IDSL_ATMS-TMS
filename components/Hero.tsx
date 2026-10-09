import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import { corridorStats } from '@/data/stats';
import { images } from '@/data/images';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-surface">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 0%, rgba(59, 130, 246, 0.10), transparent 45%)',
        }}
      />

      <div className="container-page relative py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <span className="pill">
                Hyderabad Outer Ring Road
                <span className="hidden h-1 w-1 rounded-full bg-azure-400 sm:block" />
                <span className="hidden sm:inline">158 km Corridor</span>
              </span>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="mt-6 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-display-md">
                Intelligent Operations{' '}
                <span className="text-azure-600">Platform</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-light sm:text-lg">
                A digital operations technology platform, not an equipment-only
                deployment. One corridor, one operational picture, one common event model.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/platform" className="btn-azure">
                  Explore Platform
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-line shadow-lift">
                <Image
                  src={images.hero}
                  alt="Aerial view of a modern highway interchange"
                  width={800}
                  height={500}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-azure-100" />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.32}>
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10">
            {corridorStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-azure-600 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-ink-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
