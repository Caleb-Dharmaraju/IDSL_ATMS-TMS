import { getIcon } from '@/lib/icon-map';
import FadeIn from './FadeIn';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  const Icon = getIcon(icon);

  return (
    <FadeIn delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-xl3 border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-azure-300 hover:shadow-lift">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-soft text-azure-600">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-light">
          {description}
        </p>
      </div>
    </FadeIn>
  );
}
