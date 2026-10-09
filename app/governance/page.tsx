import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import FlowDiagram from '@/components/FlowDiagram';
import DataTable from '@/components/DataTable';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/FadeIn';
import { images } from '@/data/images';
import {
  aiGovernanceDomains,
  aiAssuranceControls,
  managedOMTiers,
  managedOMExtras,
  mobileWorkforceSteps,
  securityDomains,
  executiveKPIs,
} from '@/data/governance';

export const metadata: Metadata = {
  title: 'Governance',
  description:
    'Unified Platform, Governance & Managed O&M: AI governance, technology operations, security and executive KPIs.',
};

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Section 07: Unified Platform"
        title="Governance & Managed O&M"
        description="Common data, governed AI, resilient integration and accountable technology operations."
        image={images.governance}
        imageAlt="Modern data center with server racks and blue lighting"
      />

      {/* AI Governance */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="AI Governance"
            title="AI value governed by use case, evidence and accountable action"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {aiGovernanceDomains.map((d) => (
              <FadeIn key={d.domain}>
                <div className="rounded-xl3 border border-line bg-white p-5 text-center shadow-soft">
                  <div className="text-sm font-bold text-azure-600">{d.domain}</div>
                  <div className="mt-2 text-xs text-ink-light">{d.scope}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-8 rounded-xl3 border border-azure-200 bg-soft p-6">
              <h4 className="text-sm font-semibold text-azure-700">Assurance Controls</h4>
              <ul className="mt-3 space-y-2">
                {aiAssuranceControls.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-ink-light">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure-400" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Managed Technology O&M */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Managed O&M"
            title="One managed service chain"
          />
          <div className="mt-10">
            <DataTable
              headers={['Tier', 'Function', 'Description', 'Mode']}
              rows={managedOMTiers.map((t) => [
                t.tier,
                t.label,
                t.description,
                t.mode,
              ])}
            />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {managedOMExtras.map((e) => (
              <FadeIn key={e.title}>
                <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <h4 className="text-sm font-semibold text-ink">{e.title}</h4>
                  <p className="mt-2 text-sm text-ink-light">{e.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Workforce */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Mobile Workforce"
            title="Role-based mobile work orders"
            description="Connect control room to field closure with offline-capable, evidence-based workflows."
          />
          <div className="mt-10">
            <FlowDiagram steps={mobileWorkforceSteps} />
          </div>
        </div>
      </section>

      {/* Security + Resilience */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-line shadow-lift">
                <Image
                  src={images.dataCenter}
                  alt="Secure data center infrastructure with network equipment"
                  width={640}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
            </FadeIn>
            <div>
              <SectionHeading
                eyebrow="Security & Resilience"
                title="Protect operational continuity by design"
              />
              <div className="mt-10 grid grid-cols-1 gap-6">
                {securityDomains.map((s, i) => (
                  <FeatureCard
                    key={s.title}
                    icon="shield"
                    title={s.title}
                    description={s.description}
                    delay={i * 0.06}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive KPI Framework */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Executive KPIs"
            title="Domain signals into intervention priorities"
          />
          <div className="mt-10">
            <DataTable
              headers={['Domain', 'Key Metrics']}
              rows={executiveKPIs.map((k) => [k.domain, k.metrics])}
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
