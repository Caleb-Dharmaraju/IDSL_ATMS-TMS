import { getIcon } from '@/lib/icon-map';
import type { Workstream } from '@/data/workstreams';
import FadeIn from './FadeIn';

interface WorkstreamCardProps {
  workstream: Workstream;
  delay?: number;
}

export default function WorkstreamCard({
  workstream,
  delay = 0,
}: WorkstreamCardProps) {
  const Icon = getIcon(workstream.icon);

  return (
    <FadeIn delay={delay} className="h-full">
      <div className="group flex h-full flex-col rounded-xl3 border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-azure-300 hover:shadow-lift">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-azure-500">
            {workstream.id}
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-soft text-azure-600 transition-colors duration-300 group-hover:bg-azure-500 group-hover:text-white">
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </span>
        </div>
        <h3 className="mt-6 text-lg font-semibold text-ink">
          {workstream.label}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-light">
          {workstream.coreScope}
        </p>
        <div className="mt-auto pt-4">
          <span className="text-xs font-medium text-azure-600">
            {workstream.operationalOutput}
          </span>
        </div>
      </div>
    </FadeIn>
  );
}
