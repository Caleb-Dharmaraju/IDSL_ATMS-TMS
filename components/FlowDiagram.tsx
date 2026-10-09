import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

interface FlowStep {
  step: string;
  label: string;
  detail?: string;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  className?: string;
}

export default function FlowDiagram({ steps, className }: FlowDiagramProps) {
  return (
    <FadeIn className={className}>
      <div className="flex flex-wrap items-start justify-center gap-2">
        {steps.map((s, i) => (
          <div key={s.step} className="flex items-start gap-2">
            <div className="flex flex-col items-center text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-azure-500 text-sm font-bold text-white">
                {s.step}
              </span>
              <span className="mt-2 text-sm font-semibold text-ink">
                {s.label}
              </span>
              {s.detail && (
                <span className="mt-1 max-w-[120px] text-xs text-ink-light">
                  {s.detail}
                </span>
              )}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="mt-2.5 h-5 w-5 shrink-0 text-azure-300" />
            )}
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
