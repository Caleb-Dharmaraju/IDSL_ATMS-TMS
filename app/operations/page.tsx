import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import FlowDiagram from '@/components/FlowDiagram';
import CTASection from '@/components/CTASection';
import FadeIn from '@/components/FadeIn';
import { images } from '@/data/images';
import {
  videoSurveillance,
  videoFlow,
  aiSafetyUseCases,
  eventLifecycle,
  trafficMetrics,
  atmsScope,
  commandControl,
} from '@/data/operations';

export const metadata: Metadata = {
  title: 'Operations',
  description:
    'Safety, Traffic & ATMS: video surveillance, AI safety analytics, traffic intelligence and unified command & control.',
};

export default function OperationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Section 01: Operations Domain"
        title="Safety, Traffic & ATMS"
        description="Convert corridor observations into verified events, coordinated response and measurable operational outcomes."
        image={images.operations}
        imageAlt="Highway traffic at night with vehicle headlight trails"
      />

      {/* Video Surveillance */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Video Surveillance"
            title={videoSurveillance.subtitle}
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {videoSurveillance.items.map((item, i) => (
              <FeatureCard
                key={item.title}
                icon="video"
                title={item.title}
                description={item.description}
                delay={i * 0.06}
              />
            ))}
          </div>
          <FadeIn>
            <div className="mt-10 rounded-xl3 border border-line bg-surface p-6">
              <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-ink-light">
                Operational Output Chain
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {videoFlow.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full bg-azure-500 px-4 py-2 text-sm font-semibold text-white">
                      {step}
                    </span>
                    {i < videoFlow.length - 1 && (
                      <span className="text-azure-300">&rarr;</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* AI Safety */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="AI Safety / VIDES"
            title="AI safety use cases"
            description="Observations become governed events with confidence scoring, evidence packages and human-in-loop validation."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiSafetyUseCases.map((uc, i) => (
              <FeatureCard
                key={uc.title}
                icon="brain"
                title={uc.title}
                description={uc.description}
                delay={(i % 3) * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Lifecycle */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Event Lifecycle"
            title="AI incident workflow: confidence before action"
          />
          <div className="mt-10">
            <FlowDiagram steps={eventLifecycle} />
          </div>
          <FadeIn>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h4 className="text-sm font-semibold text-azure-700">Evidence Package</h4>
                <p className="mt-2 text-sm text-ink-light">
                  Image/clip, source, timestamp, GIS location, confidence and severity.
                </p>
              </div>
              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h4 className="text-sm font-semibold text-azure-700">Audit Trail</h4>
                <p className="mt-2 text-sm text-ink-light">
                  Owner, acknowledgement, dispatch, arrival, action, escalation and closure timestamps.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Traffic Intelligence */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Traffic Intelligence"
            title="Live conditions and planning intelligence"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[...trafficMetrics.primary, ...trafficMetrics.secondary].map((m) => (
              <FadeIn key={m.label}>
                <div className="rounded-xl3 border border-line bg-white p-5 text-center shadow-soft">
                  <div className="text-lg font-bold text-azure-600">{m.label}</div>
                  <div className="mt-1 text-xs text-ink-light">{m.detail}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ATMS Scope */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="ATMS"
            title="Unified visibility, decisions and coordinated action"
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {atmsScope.map((item, i) => (
              <FadeIn key={item.title} delay={(i % 3) * 0.06}>
                <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <h4 className="text-sm font-semibold text-ink">{item.title}</h4>
                  <p className="mt-2 text-sm text-ink-light">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="mt-8 text-center text-sm text-ink-faint">
              Role-specific operator, supervisor, toll, safety, O&M and Authority views share the same event record and audit trail.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Command & Control */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Command & Control"
                title="One event, role-specific operating views"
              />
              <div className="mt-10 grid grid-cols-1 gap-6">
                {commandControl.items.slice(0, 3).map((item, i) => (
                  <FeatureCard
                    key={item.title}
                    icon="monitor"
                    title={item.title}
                    description={item.description}
                    delay={i * 0.06}
                  />
                ))}
              </div>
            </div>
            <FadeIn delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-line shadow-lift">
                <Image
                  src={images.controlRoom}
                  alt="Traffic monitoring control room with multiple screens"
                  width={640}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
          {commandControl.items.length > 3 && (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {commandControl.items.slice(3).map((item, i) => (
                <FeatureCard
                  key={item.title}
                  icon="monitor"
                  title={item.title}
                  description={item.description}
                  delay={(i % 3) * 0.06}
                />
              ))}
            </div>
          )}
          <FadeIn>
            <div className="mt-10 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {commandControl.flow.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">
                      {step}
                    </span>
                    {i < commandControl.flow.length - 1 && (
                      <span className="text-ink-faint">&rarr;</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
