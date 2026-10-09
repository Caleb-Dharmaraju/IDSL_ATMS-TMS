import Image from 'next/image';
import FadeIn from './FadeIn';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 0%, rgba(59, 130, 246, 0.10), transparent 45%)',
        }}
      />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        {image ? (
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <span className="pill">{eyebrow}</span>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-display-sm">
                {title}
              </h1>
              {description && (
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-light sm:text-lg">
                  {description}
                </p>
              )}
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-line shadow-lift">
                <Image
                  src={image}
                  alt={imageAlt || title}
                  width={640}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        ) : (
          <FadeIn>
            <span className="pill">{eyebrow}</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-display-sm">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-light sm:text-lg">
                {description}
              </p>
            )}
          </FadeIn>
        )}
      </div>
    </section>
  );
}
