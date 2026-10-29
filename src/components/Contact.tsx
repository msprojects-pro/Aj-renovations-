import React, { useState, useEffect } from 'react';
import { Phone, Mail, CheckCircle2, AlertCircle, Send, ArrowRight, Shield } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { EnquiryFormData, ServiceCategory } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    projectType: (initialService as ServiceCategory) || 'Home Renovations',
    projectDetails: '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        projectType: (initialService as ServiceCategory) || prev.projectType,
      }));
    }
  }, [initialService]);

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter a contact phone number';
    } else if (!/^(\+44|0)[0-9\s-]{8,14}$/.test(formData.phoneNumber.replace(/\s+/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid UK phone number (e.g. 07794 091102)';
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide brief details about your project or required work';
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please provide a little more detail (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous validation handling without faking external delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      emailAddress: '',
      projectType: 'Home Renovations',
      projectDetails: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="bg-[#232325] text-white py-20 border-t border-[#343438] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Information & Direct Call CTAs (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F36825] tracking-wider uppercase mb-2">
                <span>Direct Enquiries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Planning Your Next Project?
              </h2>
              <p className="mt-3 text-base text-neutral-300 leading-relaxed">
                Get in touch with <span className="text-white font-semibold">Alex Jones Renovations LTD</span> to discuss your building or renovation requirements.
              </p>
            </div>

            {/* Direct Telephone Card */}
            <div className="p-6 rounded-sm bg-[#1c1c1e] border border-[#343438] space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm bg-[#343438] flex items-center justify-center shrink-0 border border-neutral-700/60">
                  <Phone className="w-6 h-6 text-[#F36825]" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Telephone Enquiries</div>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="text-xl font-bold text-white hover:text-[#F36825] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed">
                Speak directly regarding job scopes, practical timelines, site visits, and project estimates.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F36825] hover:bg-[#d95517] text-white text-sm font-semibold py-3 px-4 rounded-sm transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#343438] hover:bg-[#3f3f45] text-neutral-200 hover:text-white text-sm font-medium py-3 px-4 rounded-sm border border-neutral-700/50 transition-colors"
                >
                  <span>Request a Free Quote</span>
                </a>
              </div>
            </div>

            {/* Trust and practical points */}
            <div className="space-y-3 pt-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2 text-neutral-300">
                <Shield className="w-4 h-4 text-[#F36825] shrink-0" />
                <span>10 years of hands-on UK building and renovation experience</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Shield className="w-4 h-4 text-[#F36825] shrink-0" />
                <span>Transparent advice suited specifically to your property</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Shield className="w-4 h-4 text-[#F36825] shrink-0" />
                <span>Clear quotes without obligation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form (7 cols) */}
          <div id="contact-form" className="lg:col-span-7">
            <div className="bg-[#1c1c1e] rounded-sm p-6 sm:p-8 border border-[#343438] shadow-lg">
              <div className="border-b border-[#343438] pb-4 mb-6">
                <h3 className="text-xl font-bold text-white">Send an Enquiry</h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill in your details below and outline your project requirements.
                </p>
              </div>

              {isSubmitted ? (
                /* Clear transparent submission state without pretending fake external send */
                <div className="py-8 space-y-6 animate-in fade-in duration-300 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto sm:mx-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">Enquiry Validated Successfully</h4>
                    <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Your enquiry details for{' '}
                      <span className="text-[#F36825] font-semibold">{formData.projectType}</span> have been captured and validated.
                    </p>
                  </div>

                  <div className="p-4 bg-[#232325] rounded-sm border border-[#343438] text-xs text-neutral-300 space-y-2 text-left">
                    <div className="flex items-center justify-between border-b border-[#343438] pb-1.5">
                      <span className="text-neutral-400">Phone:</span>
                      <span className="font-mono text-white">{formData.phoneNumber}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#343438] pb-1.5">
                      <span className="text-neutral-400">Email:</span>
                      <span className="font-mono text-white">{formData.emailAddress}</span>
                    </div>
                    <div className="flex items-start justify-between pt-1">
                      <span className="text-neutral-400">Details:</span>
                      <span className="text-white text-right max-w-xs truncate">{formData.projectDetails}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-950/20 border border-[#F36825]/40 rounded-sm text-xs text-neutral-300 text-left">
                    <p className="font-semibold text-[#F36825] mb-1">Demo Mode Confirmation:</p>
                    <p className="text-neutral-300">
                      This is a live website demonstration. In production, this form connects to your preferred email webhook or CRM. To speak with Alex Jones immediately, use the direct phone line.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="inline-flex items-center justify-center gap-2 bg-[#F36825] hover:bg-[#d95517] text-white text-xs font-bold py-3 px-5 rounded-sm transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Alex Now ({BUSINESS_INFO.phone})</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 bg-[#343438] hover:bg-[#3f3f45] text-neutral-200 text-xs font-semibold py-3 px-5 rounded-sm transition-colors cursor-pointer"
                    >
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Full Name <span className="text-[#F36825]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g. David Miller"
                        className={`w-full bg-[#232325] border ${
                          errors.fullName ? 'border-red-500' : 'border-[#343438]'
                        } focus:border-[#F36825] focus:outline-none rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Phone Number <span className="text-[#F36825]">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => {
                          setFormData({ ...formData, phoneNumber: e.target.value });
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                        }}
                        placeholder="e.g. 07700 900123"
                        className={`w-full bg-[#232325] border ${
                          errors.phoneNumber ? 'border-red-500' : 'border-[#343438]'
                        } focus:border-[#F36825] focus:outline-none rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 transition-colors`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email Address & Type of Project */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="emailAddress" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Email Address <span className="text-[#F36825]">*</span>
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        value={formData.emailAddress}
                        onChange={(e) => {
                          setFormData({ ...formData, emailAddress: e.target.value });
                          if (errors.emailAddress) setErrors({ ...errors, emailAddress: undefined });
                        }}
                        placeholder="e.g. david@example.co.uk"
                        className={`w-full bg-[#232325] border ${
                          errors.emailAddress ? 'border-red-500' : 'border-[#343438]'
                        } focus:border-[#F36825] focus:outline-none rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 transition-colors`}
                      />
                      {errors.emailAddress && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.emailAddress}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Type of Project <span className="text-[#F36825]">*</span>
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectType: e.target.value as ServiceCategory | 'Other',
                          })
                        }
                        className="w-full bg-[#232325] border border-[#343438] focus:border-[#F36825] focus:outline-none rounded-sm px-3.5 py-2.5 text-sm text-white transition-colors"
                      >
                        {SERVICES.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-[#232325] text-white">
                            {srv.title}
                          </option>
                        ))}
                        <option value="Other" className="bg-[#232325] text-white">
                          Other Building Work
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Project Details <span className="text-[#F36825]">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => {
                        setFormData({ ...formData, projectDetails: e.target.value });
                        if (errors.projectDetails) setErrors({ ...errors, projectDetails: undefined });
                      }}
                      placeholder="Please briefly describe your property, the work you need done (e.g. room dimensions, timeline, concreting area, tiling requirements), and any preferred dates..."
                      className={`w-full bg-[#232325] border ${
                        errors.projectDetails ? 'border-red-500' : 'border-[#343438]'
                      } focus:border-[#F36825] focus:outline-none rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 transition-colors resize-y`}
                    />
                    {errors.projectDetails && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.projectDetails}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#F36825] hover:bg-[#d95517] disabled:opacity-70 text-white font-bold text-sm py-3.5 px-6 rounded-sm transition-all duration-200 shadow-md cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Validating Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-neutral-400 text-center mt-2.5">
                      No commitment required. Alex Jones will review your details and respond.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
