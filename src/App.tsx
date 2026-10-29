/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { OurWork } from './components/OurWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { BUSINESS_INFO } from './data/content';
import { Phone } from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState<string | undefined>(undefined);
  const [contactInitialService, setContactInitialService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setModalDefaultService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleSelectServiceForContact = (serviceName: string) => {
    setContactInitialService(serviceName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#232325] text-white flex flex-col font-sans selection:bg-[#F36825] selection:text-white">
      {/* 1. Navigation Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectServiceForContact} />

        {/* 4. About Section */}
        <About onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 5. Our Work Section */}
        <OurWork onOpenQuoteModal={(cat) => handleOpenQuoteModal(cat)} />

        {/* 6. Contact & Enquiry Section */}
        <Contact initialService={contactInitialService} />
      </main>

      {/* 7. Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Interactive Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={modalDefaultService}
      />

      {/* Floating Call Now Button for Mobile Users (under 15% sticky cap) */}
      <div className="fixed bottom-4 right-4 z-30 sm:hidden">
        <a
          href={BUSINESS_INFO.phoneHref}
          className="flex items-center gap-2 bg-[#F36825] hover:bg-[#d95517] text-white font-bold text-xs py-3 px-4 rounded-full shadow-2xl border border-white/20 active:scale-95 transition-all"
          aria-label="Call Alex Jones"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
