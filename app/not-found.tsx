import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-24 text-center">
      <span className="text-6xl font-bold text-azure-200">404</span>
      <h1 className="mt-4 text-2xl font-bold text-ink">Page not found</h1>
      <p className="mt-2 text-sm text-ink-light">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-azure mt-8">
        Back to Home
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
