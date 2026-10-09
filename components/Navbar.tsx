'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Activity, ArrowRight } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-white transition-colors duration-300',
        scrolled || open ? 'border-line' : 'border-transparent'
      )}
    >
      <nav className="container-page flex h-[76px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-ink"
          aria-label="IDSL ATMS-TMS Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-azure-600 text-white">
            <Activity className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-tight">IDSL</span>
            <span className="text-[11px] font-medium tracking-wide text-ink-light">
              ATMS &bull; TMS
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'relative whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-200 xl:px-4 xl:text-sm',
                    active
                      ? 'text-azure-700'
                      : 'text-ink-light hover:text-ink'
                  )}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-soft" />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          'fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-menu"
        inert={!open}
        aria-label="Mobile navigation"
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-dvh w-[82%] max-w-sm flex-col bg-white shadow-lift transition-transform duration-300 ease-out lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-line px-5">
          <span className="flex items-center gap-2.5 text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-azure-600 text-white">
              <Activity className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-bold tracking-tight">IDSL</span>
              <span className="text-[11px] font-medium tracking-wide text-ink-light">
                ATMS &bull; TMS
              </span>
            </span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
          {navigation.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors',
                  active
                    ? 'bg-soft text-azure-700'
                    : 'text-ink-light hover:bg-surface hover:text-ink'
                )}
              >
                {item.label}
                <ArrowRight
                  className={cn('h-4 w-4', active ? 'text-azure-500' : 'text-ink-faint')}
                />
              </Link>
            );
          })}
        </nav>

        <div className="shrink-0 border-t border-line p-5">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-azure w-full"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </aside>
    </header>
  );
}
