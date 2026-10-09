import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FlowDiagram from '@/components/FlowDiagram';
import DataTable from '@/components/DataTable';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/FadeIn';
import { images } from '@/data/images';
import {
  tollingConcept,
  identificationStack,
  journeyStateMachine,
  exceptionControl,
  revenueAssuranceMetrics,
} from '@/data/tolling';

export const metadata: Metadata = {
  title: 'Tolling',
  description:
    'Closed FASTag Tolling & Revenue Assurance: journey identity, exception control and auditable reconciliation.',
};

export default function TollingPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 06: Closed Tolling"
        title="Closed FASTag Tolling & Revenue Assurance"
        description="Entry-to-exit journey identity, independent evidence, exception control and auditable reconciliation."
        image={images.tolling}
        imageAlt="Modern highway toll plaza with electronic toll collection"
      />

      {/* Operating Concept */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Operating Concept"
            title="Closed FASTag tolling flow"
          />
          <div className="mt-10">
            <FlowDiagram steps={tollingConcept} />
          </div>
          <FadeIn>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h4 className="text-sm font-semibold text-azure-700">Core Transaction Logic</h4>
                <p className="mt-2 text-sm text-ink-light">
                  Identify at entry, retain journey identity, correlate at exit, determine applicable distance/tariff and preserve transaction evidence.
                </p>
              </div>
              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h4 className="text-sm font-semibold text-azure-700">Field Validation Required</h4>
                <p className="mt-2 text-sm text-ink-light">
                  Confirm existing toll architecture, primary/secondary identity rules, tariff logic, settlement interfaces, retention and regulatory constraints.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Identification Stack */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Identification Stack"
            title="Multiple identities protect journey integrity"
          />
          <div className="mt-10 space-y-4">
            {identificationStack.map((layer, i) => (
              <FadeIn key={layer.layer} delay={i * 0.04}>
                <div className="flex flex-col gap-3 rounded-xl3 border border-line bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:gap-6">
                  <span className="shrink-0 rounded-full bg-azure-500 px-4 py-2 text-sm font-semibold text-white">
                    {layer.layer}
                  </span>
                  <p className="text-sm text-ink-light">{layer.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Journey State Machine */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Journey State Machine"
            title="Traceable journey states"
          />
          <div className="mt-10">
            <FlowDiagram steps={journeyStateMachine} />
          </div>
        </div>
      </section>

      {/* Exception Control */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Exception Control"
            title="Evidence-led, attributable workflows"
          />
          <div className="mt-10">
            <DataTable
              headers={['Exception', 'Detection', 'Proposed Handling']}
              rows={exceptionControl.map((e) => [
                e.exception,
                e.detection,
                e.handling,
              ])}
            />
          </div>
        </div>
      </section>

      {/* Revenue Assurance */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Revenue Assurance"
                title="Where journey and settlement integrity degrades"
              />
              <div className="mt-10 grid grid-cols-1 gap-4">
                {revenueAssuranceMetrics.slice(0, 5).map((m, i) => (
                  <FadeIn key={m.label} delay={i * 0.04}>
                    <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                      <h4 className="text-sm font-semibold text-azure-700">{m.label}</h4>
                      <p className="mt-2 text-sm text-ink-light">{m.detail}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            <div>
              <FadeIn delay={0.1}>
                <div className="sticky top-24 overflow-hidden rounded-2xl border border-line shadow-lift">
                  <Image
                    src={images.highway}
                    alt="Highway corridor with modern infrastructure"
                    width={640}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </FadeIn>
              <div className="mt-6 grid grid-cols-1 gap-4">
                {revenueAssuranceMetrics.slice(5).map((m, i) => (
                  <FadeIn key={m.label} delay={(i + 5) * 0.04}>
                    <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                      <h4 className="text-sm font-semibold text-azure-700">{m.label}</h4>
                      <p className="mt-2 text-sm text-ink-light">{m.detail}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
