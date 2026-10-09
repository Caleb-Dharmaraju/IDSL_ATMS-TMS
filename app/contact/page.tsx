import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import FadeIn from '@/components/FadeIn';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with IDSL for ATMS, TMS, tolling and corridor operations enquiries.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Planning a corridor operations, ATMS or tolling project? We'd like to hear from you."
      />

      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <FadeIn>
                <h2 className="text-2xl font-bold text-ink">
                  Contact Information
                </h2>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft text-azure-600">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">Email</h3>
                      <p className="mt-1 text-sm text-ink-light">
                        {site.contact.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft text-azure-600">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">Phone</h3>
                      <p className="mt-1 text-sm text-ink-light">
                        {site.contact.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft text-azure-600">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">Office</h3>
                      <p className="mt-1 text-sm text-ink-light">
                        {site.contact.address}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
