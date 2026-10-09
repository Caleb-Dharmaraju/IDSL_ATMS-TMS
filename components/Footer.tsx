import Link from 'next/link';
import { ArrowRight, Activity } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page section-y !py-14 sm:!py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-8">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 text-ink">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-azure-600 text-white">
                <Activity className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-bold tracking-tight">
                  IDSL
                </span>
                <span className="text-[11px] font-medium tracking-wide text-ink-light">
                  ATMS &bull; TMS
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-light">
              Integrated traffic management, tolling, safety and asset
              intelligence solutions for highway and corridor operations.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-light">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {navigation
                .filter((item) => item.href !== '/')
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-light transition-colors hover:text-azure-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-light">
              Get in touch
            </h3>
            <p className="text-sm text-ink-light">
              Planning an ATMS or corridor operations project? Let&apos;s
              discuss the approach.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-light sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.companyName}. All rights
            reserved.
          </p>
          <p>{site.divisionName}</p>
        </div>
      </div>
    </footer>
  );
}
