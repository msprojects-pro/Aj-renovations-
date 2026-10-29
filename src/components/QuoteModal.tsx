import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { ServiceCategory } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState<string>('Home Renovations');
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleValidateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};

    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!phone.trim()) errs.phone = 'Phone number is required';
    if (!email.trim()) errs.email = 'Email address is required';
    if (!details.trim()) errs.details = 'Please briefly describe the work needed';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setDetails('');
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-[#232325] border border-neutral-700 rounded-sm max-w-lg w-full p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white hover:bg-[#343438] rounded-full transition-colors cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 space-y-5 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">Quote Request Validated</h3>
              <p className="text-sm text-neutral-300 mt-2">
                Thank you, <strong className="text-white">{fullName}</strong>. Your project quote request for{' '}
                <span className="text-[#F36825] font-semibold">{service}</span> has been captured.
              </p>
            </div>

            <div className="p-4 bg-[#1c1c1e] rounded-sm border border-[#343438] text-xs text-neutral-300 text-left space-y-1">
              <div><strong className="text-neutral-400">Phone:</strong> {phone}</div>
              <div><strong className="text-neutral-400">Email:</strong> {email}</div>
              <div><strong className="text-neutral-400">Service:</strong> {service}</div>
            </div>

            <p className="text-xs text-neutral-400">
              Demo mode: in production this triggers immediate notification to Alex Jones.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F36825] hover:bg-[#d95517] text-white text-xs font-bold py-3 px-4 rounded-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 inline-flex items-center justify-center bg-[#343438] hover:bg-[#3e3e44] text-neutral-200 text-xs font-semibold py-3 px-4 rounded-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-[#F36825] uppercase tracking-wider">
                Alex Jones Renovations LTD
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">Request a Free Quote</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Tell us about your project requirements and we will review your enquiry.
              </p>
            </div>

            <form onSubmit={handleValidateAndSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full bg-[#1c1c1e] border border-[#343438] focus:border-[#F36825] focus:outline-none rounded-sm px-3 py-2 text-sm text-white"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07794 091102"
                    className="w-full bg-[#1c1c1e] border border-[#343438] focus:border-[#F36825] focus:outline-none rounded-sm px-3 py-2 text-sm text-white"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1 text-[11px]">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#1c1c1e] border border-[#343438] focus:border-[#F36825] focus:outline-none rounded-sm px-3 py-2 text-sm text-white"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 text-[11px]">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Project Type
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#1c1c1e] border border-[#343438] focus:border-[#F36825] focus:outline-none rounded-sm px-3 py-2 text-sm text-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Other Building Work</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Project Details *
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Describe your job, location, and preferred timeframe..."
                  className="w-full bg-[#1c1c1e] border border-[#343438] focus:border-[#F36825] focus:outline-none rounded-sm px-3 py-2 text-sm text-white"
                />
                {errors.details && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.details}</span>
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F36825] hover:bg-[#d95517] text-white font-bold text-sm py-3 px-4 rounded-sm transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quote Request</span>
                </button>
              </div>

              <div className="pt-3 text-center border-t border-[#343438]">
                <span className="text-xs text-neutral-400">Prefer to speak directly? </span>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-xs font-bold text-[#F36825] hover:underline"
                >
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
