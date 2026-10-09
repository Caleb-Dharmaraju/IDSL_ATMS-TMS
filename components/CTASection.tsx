import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = 'Ready to transform corridor operations?',
  description = "Let’s discuss discovery, validation and the path to a unified operations platform.",
  buttonLabel = 'Get in Touch',
  buttonHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="section-y">
      <div className="container-page">
        <FadeIn>
          <div className="relative overflow-hidden rounded-xl3 border border-line bg-gradient-to-br from-soft via-white to-azure-100 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.18), transparent 45%), radial-gradient(circle at 80% 80%, rgba(37,99,235,0.14), transparent 45%)',
              }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-light sm:text-lg">
                {description}
              </p>
              <div className="mt-8 flex justify-center">
                <Link href={buttonHref} className="btn-azure">
                  {buttonLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
