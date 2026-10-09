import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import WorkstreamCard from '@/components/WorkstreamCard';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/FadeIn';
import { getIcon } from '@/lib/icon-map';
import { workstreams } from '@/data/workstreams';
import { designPhilosophy } from '@/data/platform';
import { images } from '@/data/images';

const sectionLinks = [
  {
    icon: 'eye',
    title: 'Safety, Traffic & ATMS',
    description:
      'Convert corridor observations into verified events, coordinated response and measurable outcomes.',
    href: '/operations',
  },
  {
    icon: 'radar',
    title: 'Vision & Sensor Ecosystem',
    description:
      'Add confidence, environmental context and resilience beyond video-only operations.',
    href: '/sensors',
  },
  {
    icon: 'hard-hat',
    title: 'Asset Intelligence & Civil Analytics',
    description:
      'GIS-linked system of record and evidence-led maintenance priorities.',
    href: '/assets',
  },
  {
    icon: 'receipt',
    title: 'Closed Tolling & Revenue Assurance',
    description:
      'Entry-to-exit journey identity, independent evidence, exception control and auditable reconciliation.',
    href: '/tolling',
  },
  {
    icon: 'shield',
    title: 'Platform Governance & O&M',
    description:
      'Common data, governed AI, resilient integration and accountable technology operations.',
    href: '/governance',
  },
  {
    icon: 'layers',
    title: 'Implementation & Acceptance',
    description:
      'Discovery and measured gates de-risk deployment across six structured phases.',
    href: '/implementation',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Platform Tagline */}
      <FadeIn>
        <div className="border-b border-line bg-surface py-6">
          <div className="container-page text-center text-sm font-medium tracking-wide text-ink-light">
            One corridor &bull; One operational picture &bull; One common event model
          </div>
        </div>
      </FadeIn>

      {/* Design Philosophy */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Design Philosophy"
            title="Built on six operational principles"
            description="Every workstream follows the same event-driven, auditable and interoperable architecture."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {designPhilosophy.map((p, i) => (
              <FeatureCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                description={p.description}
                delay={(i % 3) * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Corridor Image Strip */}
      <FadeIn>
        <section className="relative h-64 overflow-hidden sm:h-80 lg:h-96">
          <Image
            src={images.dashboard}
            alt="Analytics and business intelligence dashboard"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-ink/20" />
          <div className="container-page relative flex h-full items-center">
            <div className="max-w-lg text-white">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                Data-driven corridor intelligence
              </h2>
              <p className="mt-3 text-sm text-white/80 sm:text-base">
                Real-time analytics and unified dashboards powering operational decisions across 158 km.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Workstreams */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Integrated Scope"
              title="12 connected workstreams"
              description="Complete technology scope from video surveillance and AI safety to tolling, asset intelligence and cybersecurity."
            />
            <Link
              href="/platform"
              className="link-arrow group shrink-0 whitespace-nowrap"
            >
              View full platform
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workstreams.slice(0, 8).map((ws, i) => (
              <WorkstreamCard
                key={ws.id}
                workstream={ws}
                delay={(i % 4) * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Links */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Capabilities"
            title="End-to-end corridor intelligence"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectionLinks.map((s, i) => {
              const Icon = getIcon(s.icon);
              return (
                <FadeIn key={s.href} delay={(i % 3) * 0.06} className="h-full">
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col rounded-xl3 border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-azure-300 hover:shadow-lift"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-soft text-azure-600">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-light">
                      {s.description}
                    </p>
                    <span className="link-arrow mt-4">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
