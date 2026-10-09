import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FlowDiagram from '@/components/FlowDiagram';
import DataTable from '@/components/DataTable';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/FadeIn';
import { images } from '@/data/images';
import {
  assetHierarchy,
  assetMasterData,
  roleBoundary,
  defectScopeI,
  defectScopeII,
  defectLifecycle,
  engineeringQualification,
} from '@/data/assets';

export const metadata: Metadata = {
  title: 'Assets',
  description:
    'Asset Intelligence & Civil O&M Analytics: GIS-linked system of record, defect detection and evidence-led maintenance.',
};

export default function AssetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 03: Condition, Priority, Action"
        title="Asset Intelligence & Civil O&M Analytics"
        description="Create a GIS-linked system of record and evidence-led maintenance priorities while preserving clear responsibility boundaries."
        image={images.assets}
        imageAlt="Highway road construction and infrastructure maintenance"
      />

      {/* Asset Hierarchy */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Asset Intelligence"
            title="From asset hierarchy to lifecycle-driven maintenance"
          />
          <FadeIn>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              {assetHierarchy.map((level, i) => (
                <div key={level} className="flex items-center gap-2">
                  <span className="rounded-full bg-azure-500 px-4 py-2 text-sm font-semibold text-white">
                    {level}
                  </span>
                  {i < assetHierarchy.length - 1 && (
                    <span className="text-azure-300">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {assetMasterData.map((group, i) => (
              <FadeIn key={group.title} delay={i * 0.06}>
                <div className="rounded-xl3 border border-line bg-white p-7 shadow-soft h-full">
                  <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
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

      {/* Role Boundary */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Role Boundary"
            title="Clear scope boundary"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-xl3 border border-azure-200 bg-white p-8 shadow-soft">
                <h3 className="text-lg font-semibold text-azure-700">
                  IDSL Digital Intelligence
                </h3>
                <ul className="mt-4 space-y-3">
                  {roleBoundary.idsl.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-light">
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
                  Responsible Civil O&M Agency
                </h3>
                <ul className="mt-4 space-y-3">
                  {roleBoundary.civilAgency.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-light">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-faint" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Defect Scope */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Defect Scope"
            title="Civil O&M analytics coverage"
          />
          <div className="mt-10 space-y-8">
            <DataTable
              headers={['Area', 'Possible Analytics', 'Output']}
              rows={defectScopeI.map((d) => [d.area, d.analytics, d.output])}
            />
            <DataTable
              headers={['Area', 'Possible Analytics', 'Output']}
              rows={defectScopeII.map((d) => [d.area, d.analytics, d.output])}
            />
          </div>
        </div>
      </section>

      {/* Defect Lifecycle */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Defect Lifecycle"
            title="From evidence to verified closure"
          />
          <div className="mt-10">
            <FlowDiagram steps={defectLifecycle} />
          </div>
        </div>
      </section>

      {/* Engineering Qualification */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Engineering Qualification"
            title="Computer vision supports inspection, it does not replace it"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {engineeringQualification.map((eq) => (
              <FadeIn key={eq.step}>
                <div className="flex gap-4 rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-azure-500 text-sm font-bold text-white">
                    {eq.step}
                  </span>
                  <p className="text-sm text-ink-light">{eq.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="mt-8 text-center text-sm text-ink-faint">
              Structural, pavement and safety-critical findings require professional validation before any engineering decision.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
