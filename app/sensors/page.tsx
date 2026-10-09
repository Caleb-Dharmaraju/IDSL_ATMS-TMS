import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import DataTable from '@/components/DataTable';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/FadeIn';
import { images } from '@/data/images';
import { sensorMatrix, fusionProcessing } from '@/data/sensors';

export const metadata: Metadata = {
  title: 'Sensors',
  description:
    'Vision & Sensor Ecosystem: multimodal sensor matrix, edge and central fusion for corridor confidence.',
};

export default function SensorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 02: Multimodal Context"
        title="Vision & Sensor Ecosystem"
        description="Add confidence, environmental context and resilience beyond video-only operations."
        image={images.sensors}
        imageAlt="Road surveillance camera monitoring highway traffic"
      />

      {/* Sensor Matrix */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Sensor Matrix"
            title="Sensor ecosystem: role and analytics contribution"
          />
          <div className="mt-10">
            <DataTable
              headers={['Sensor', 'Primary Role', 'Analytics Contribution']}
              rows={sensorMatrix.map((s) => [
                s.sensor,
                s.primaryRole,
                s.analyticsContribution,
              ])}
            />
          </div>
          <FadeIn>
            <p className="mt-6 text-center text-sm text-ink-faint">
              Final modality and locations depend on use case, accuracy, range, lighting, environment, maintainability and survey findings.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Fusion & Processing */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Fusion & Processing"
            title="Edge resilience and central governance"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-xl3 border border-line bg-white p-8 shadow-soft">
                <h3 className="text-lg font-semibold text-ink">
                  Edge Processing
                </h3>
                <ul className="mt-4 space-y-3">
                  {fusionProcessing.edge.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-ink-light"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <div className="rounded-xl3 border border-line bg-white p-8 shadow-soft">
                <h3 className="text-lg font-semibold text-ink">
                  Central Processing
                </h3>
                <ul className="mt-4 space-y-3">
                  {fusionProcessing.central.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-ink-light"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="mt-8 rounded-xl3 border border-azure-200 bg-soft p-6">
              <h4 className="text-sm font-semibold text-azure-700">
                Fusion Examples
              </h4>
              <ul className="mt-3 space-y-2">
                {fusionProcessing.examples.map((ex) => (
                  <li
                    key={ex}
                    className="text-sm text-ink-light"
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
