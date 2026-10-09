import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import DataTable from '@/components/DataTable';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/FadeIn';
import { images } from '@/data/images';
import { designPhilosophy, discoveryBaseline } from '@/data/platform';
import { workstreams } from '@/data/workstreams';

export const metadata: Metadata = {
  title: 'Platform',
  description:
    'Intelligent Operations Platform: design philosophy, integrated scope and discovery baseline for the Hyderabad ORR corridor.',
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Intelligent Operations Platform"
        description="A digital operations technology platform, not an equipment-only deployment. Safety, traffic, tolling, assets, civil analytics and technology O&M unified under one common data and event model."
        image={images.platform}
        imageAlt="Analytics dashboard showing data visualizations and metrics"
      />

      {/* Design Philosophy */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Design Philosophy"
            title="Six operational principles"
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

      {/* Discovery Baseline */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Discovery Baseline"
            title={discoveryBaseline.title}
            description={discoveryBaseline.subtitle}
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {discoveryBaseline.stats.map((s) => (
              <FadeIn key={s.label}>
                <div className="rounded-xl3 border border-line bg-white p-8 text-center shadow-soft">
                  <div className="text-4xl font-bold text-azure-600">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-ink-light">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-light">
                Current Design Basis
              </h3>
              <ul className="mt-4 space-y-2">
                {discoveryBaseline.designBasis.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink-light"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-ink-faint">
                {discoveryBaseline.note}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Integrated Scope */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Integrated Scope"
            title="12 connected workstreams"
            description="Complete technology scope from video surveillance to cybersecurity."
          />
          <div className="mt-10">
            <DataTable
              headers={['ID', 'Workstream', 'Core Scope', 'Operational Output']}
              rows={workstreams.map((ws) => [
                ws.id,
                ws.label,
                ws.coreScope,
                ws.operationalOutput,
              ])}
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
