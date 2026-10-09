import Image from 'next/image';
import FadeIn from './FadeIn';

interface ImageSectionProps {
  src: string;
  alt: string;
  caption?: string;
  position?: 'left' | 'right';
  children: React.ReactNode;
}

export default function ImageSection({
  src,
  alt,
  caption,
  position = 'right',
  children,
}: ImageSectionProps) {
  return (
    <section className="section-y">
      <div className="container-page">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            position === 'left' ? 'lg:[direction:rtl] lg:*:[direction:ltr]' : ''
          }`}
        >
          <div>{children}</div>
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-line shadow-lift">
                <Image
                  src={src}
                  alt={alt}
                  width={640}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
              {caption && (
                <p className="mt-3 text-center text-xs text-ink-faint">{caption}</p>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
