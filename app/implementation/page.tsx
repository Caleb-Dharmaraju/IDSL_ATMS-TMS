import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FlowDiagram from '@/components/FlowDiagram';
import DataTable from '@/components/DataTable';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/FadeIn';
import { images } from '@/data/images';
import {
  implementationPhases,
  acceptanceEvidence,
  deliverables,
  mitigations,
  deliveryRoles,
  nextSteps,
} from '@/data/implementation';

export const metadata: Metadata = {
  title: 'Implementation',
  description:
    'Implementation & Acceptance: phased delivery, acceptance evidence ladder, deliverables and risk mitigations.',
};

export default function ImplementationPage() {
  return (
    <>
      <PageHero
        eyebrow="Implementation & Acceptance"
        title="Discovery and measured gates de-risk deployment"
        description="Six structured phases from current-state assessment through managed service and optimisation."
        image={images.implementation}
        imageAlt="Highway construction and infrastructure development"
      />

      {/* Phases */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Implementation Phases"
            title="Structured delivery pathway"
          />
          <div className="mt-10">
            <FlowDiagram steps={implementationPhases} />
          </div>
        </div>
      </section>

      {/* Acceptance Evidence Ladder */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Acceptance"
            title="Evidence ladder"
          />
          <FadeIn>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {acceptanceEvidence.map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="rounded-full border border-azure-200 bg-white px-4 py-2 text-sm font-semibold text-azure-700 shadow-soft">
                    {item}
                  </span>
                  {i < acceptanceEvidence.length - 1 && (
                    <span className="text-azure-300">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Deliverables"
            title="Documents and outputs"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {deliverables.map((d, i) => (
              <FadeIn key={d.phase} delay={(i % 2) * 0.06}>
                <div className="rounded-xl3 border border-line bg-white p-7 shadow-soft h-full">
                  <h3 className="text-lg font-semibold text-ink">{d.phase}</h3>
                  <ul className="mt-4 space-y-2">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink-light">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Mitigations */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Risk Mitigations"
            title="Operating model and mitigations"
          />
          <div className="mt-10">
            <DataTable
              headers={['Risk', 'Mitigation']}
              rows={mitigations.map((m) => [m.risk, m.mitigation])}
            />
          </div>
        </div>
      </section>

      {/* Delivery Roles */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Delivery Team"
            title="Delivery roles"
          />
          <FadeIn>
            <div className="mt-8 flex flex-wrap gap-3">
              {deliveryRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft"
                >
                  {role}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Decision Requested"
            title="Proposed next step: joint discovery and field validation"
          />
          <div className="mt-10">
            <FlowDiagram steps={nextSteps} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to begin discovery?"
        description="Concept scope; final BoQ, performance requirements, integrations and SLAs subject to Authority validation."
      />
    </>
  );
}
