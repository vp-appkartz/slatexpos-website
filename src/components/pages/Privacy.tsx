import React, { useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Database, 
  Target, 
  UserCheck, 
  Share2, 
  ShieldAlert, 
  Scale, 
  Mail, 
  ArrowRight,
  Clock,
  ChevronRight
} from 'lucide-react';
import SEO from "../Common/SEO";

interface SectionProps {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  children: React.ReactNode;
}

const PrivacySection: React.FC<SectionProps> = ({ id, icon: Icon, title, children }) => {
  return (
    <section 
      id={id} 
      className="scroll-mt-24 mb-10 group"
    >
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-indigo-50/50 shadow-[0_4px_20px_-4px_rgba(99,102,241,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(99,102,241,0.1)] transition-all duration-300">
        <div className="flex items-center gap-4 mb-5 pb-4 border-b border-indigo-50/50">
          <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary-300 flex items-center justify-center group-hover:bg-primary-300 group-hover:text-white transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-primary-300 transition-colors duration-300">
            {title}
          </h2>
        </div>
        <div className="text-gray-600 leading-relaxed text-base space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
};

const Privacy: React.FC = () => {
  const sections = [
    { id: 'collect', title: '1. Information We Collect', icon: Database },
    { id: 'purpose', title: '2. Purpose of Collection', icon: Target },
    { id: 'consent', title: '3. Consent', icon: UserCheck },
    { id: 'disclosure', title: '4. Disclosure and Processing', icon: Share2 },
    { id: 'security', title: '5. Retention and Security', icon: ShieldAlert },
    { id: 'rights', title: '6. Your Rights', icon: Scale },
    { id: 'contact', title: '7. Contact Our Privacy Team', icon: Mail },
  ];

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how SlateX POS protects, secures, and handles personal information in compliance with PIPA and PIPEDA."
        keywords="SlateX POS privacy policy, POS security, merchant privacy, Canada POS privacy"
      />

      <div className="min-h-screen py-16 sm:py-24 relative overflow-hidden font-gilroy">
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,110,77,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-2/3 right-10 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', filter: 'blur(100px)' }} />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-indigo-100/60 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 text-primary-300 text-sm font-semibold mb-4">
                <Shield className="w-4 h-4" />
                <span>Security & Trust</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none mb-3">
                Privacy Policy
              </h1>
              <p className="text-gray-500 text-lg sm:text-xl font-medium max-w-2xl">
                How SlateX POS collects, uses, and secures your personal and transactional data.
              </p>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 bg-white/50 border border-gray-100 rounded-xl px-4 py-2 text-sm font-medium backdrop-blur-sm self-center sm:self-end">
              <Clock className="w-4 h-4 text-primary-300" />
              <span>Last Updated: May 27, 2026</span>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            
            {/* Sidebar Sticky Navigation */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 bg-white/70 backdrop-blur-md rounded-2xl p-5 border border-indigo-50/50 shadow-sm">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">
                  Table of Contents
                </h3>
                <nav className="space-y-1.5">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className="group flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:text-primary-300 hover:bg-orange-50/50 transition-all duration-200"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary-300 transition-colors" />
                      <span className="truncate">{sec.title.replace(/^\d+\.\s+/, '')}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="lg:col-span-3">
              {/* Introduction Card */}
              <div className="bg-gradient-to-r from-orange-500 to-primary-300 text-white rounded-3xl p-8 sm:p-10 shadow-lg shadow-orange-500/10 mb-10 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none">
                  <Lock className="w-full h-full object-contain translate-y-10 translate-x-10" />
                </div>
                <p className="text-lg sm:text-xl font-medium leading-relaxed mb-0 relative z-10">
                  At SlateX POS (&ldquo;SlateX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), we are committed to protecting the privacy and security of the personal information of our clients (merchants) and their customers. This Privacy Policy outlines how we collect, use, and disclose personal information in compliance with the Alberta Personal Information Protection Act (PIPA) and the Canadian Personal Information Protection and Electronic Documents Act (PIPEDA).
                </p>
              </div>

              {/* Policy Sections */}
              <div className="space-y-2">
                
                {/* 1. Information We Collect */}
                <PrivacySection id="collect" icon={Database} title="1. Information We Collect">
                  <p className="mb-4 font-medium text-gray-800">
                    We collect information necessary to provide our POS and integrated payment services, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50/20 rounded-xl p-5 border border-indigo-50/40">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider text-primary-300">Merchant Information</h4>
                      <p className="text-sm text-gray-600">
                        Name, business address, email, phone number, and banking details required for merchant settlement and registration.
                      </p>
                    </div>
                    <div className="bg-indigo-50/20 rounded-xl p-5 border border-indigo-50/40">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider text-primary-300">Transaction Data</h4>
                      <p className="text-sm text-gray-600">
                        Purchase amounts, item descriptions, and payment method details (securely processed via industry-standard Elavon and PAX hardware protocols).
                      </p>
                    </div>
                    <div className="bg-indigo-50/20 rounded-xl p-5 border border-indigo-50/40">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider text-primary-300">Customer Information</h4>
                      <p className="text-sm text-gray-600">
                        If a merchant opts to use our integrated loyalty or digital receipt features, we may collect customer names, email addresses, or phone numbers.
                      </p>
                    </div>
                    <div className="bg-indigo-50/20 rounded-xl p-5 border border-indigo-50/40">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider text-primary-300">Technical Data</h4>
                      <p className="text-sm text-gray-600">
                        IP addresses, unique device identifiers (including PAX terminal serial numbers), and usage logs for proactive security auditing and performance monitoring.
                      </p>
                    </div>
                  </div>
                </PrivacySection>

                {/* 2. Purpose of Collection */}
                <PrivacySection id="purpose" icon={Target} title="2. Purpose of Collection">
                  <p className="mb-4 font-medium text-gray-800">
                    We collect and use personal information strictly for the following purposes:
                  </p>
                  <ul className="space-y-3.5">
                    {[
                      "To process secure card/mobile payments and facilitate seamless day-to-day restaurant operations.",
                      "To provide high-quality, proactive technical support and push automatic software updates.",
                      "To comply with Canadian financial regulations, auditing guidelines, and anti-money laundering (AML) laws.",
                      "To continuously improve our AI-driven marketing and operational promotion tools (strictly using de-identified or aggregated data where possible)."
                    ].map((item, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <div className="w-5 h-5 rounded-full bg-orange-50 text-primary-300 flex items-center justify-center mt-1 flex-shrink-0">
                          <ArrowRight className="w-3 h-3" />
                        </div>
                        <span className="text-gray-600 text-[15px] sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </PrivacySection>

                {/* 3. Consent */}
                <PrivacySection id="consent" icon={UserCheck} title="3. Consent">
                  <p className="mb-4">
                    By using the SlateX platform, mobile applications, or website, you consent to the collection and use of your information as described in this policy.
                  </p>
                  <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-5 sm:p-6 text-sm text-primary-400">
                    <span className="font-bold uppercase tracking-wider block mb-1">Merchant Responsibility:</span>
                    Merchants are solely responsible for ensuring they have obtained appropriate, legal consent from their own customers before inputting or processing customer data (such as emails or loyalty details) within the SlateX system.
                  </div>
                </PrivacySection>

                {/* 4. Disclosure and Third-Party Processing */}
                <PrivacySection id="disclosure" icon={Share2} title="4. Disclosure & Third-Party Processing">
                  <p className="mb-4 font-semibold text-gray-800">
                    We do not sell personal or customer information under any circumstances.
                  </p>
                  <p className="mb-4">
                    We may share specific data with trusted integration partners strictly as necessary for executing service delivery:
                  </p>
                  <div className="space-y-4 mb-4">
                    <div className="flex gap-4 items-start bg-indigo-50/10 p-4 rounded-xl border border-indigo-50/30">
                      <div className="font-bold text-gray-900 min-w-[120px] text-sm sm:text-base">Payment Processors</div>
                      <div className="text-sm text-gray-600 sm:text-base">Such as Elavon, to securely clear and settle card transactions.</div>
                    </div>
                    <div className="flex gap-4 items-start bg-indigo-50/10 p-4 rounded-xl border border-indigo-50/30">
                      <div className="font-bold text-gray-900 min-w-[120px] text-sm sm:text-base">Cloud Providers</div>
                      <div className="text-sm text-gray-600 sm:text-base">Data is stored on highly secure, enterprise-grade cloud servers located in Canada or the United States.</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-sm text-gray-500 italic">
                    <span className="font-bold text-gray-700 not-italic block mb-1">International Data Processing Note:</span>
                    When data is processed outside of Canada (such as on secure servers in the US), it becomes subject to the laws of that jurisdiction. This may allow local regulatory and governmental authorities access to the data under specific legal circumstances.
                  </div>
                </PrivacySection>

                {/* 5. Data Retention and Security */}
                <PrivacySection id="security" icon={ShieldAlert} title="5. Data Retention & Security">
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-bold text-gray-950 mb-1 text-sm sm:text-base">Retention Standards</h4>
                      <p>
                        We retain personal information only as long as necessary to fulfill the intended business purposes or as strictly required by Canadian laws (e.g., tax, audit, and anti-fraud record-keeping requirements).
                      </p>
                    </div>
                    
                    <div className="p-5 bg-gradient-to-br from-indigo-50/20 to-orange-50/20 border border-indigo-50/40 rounded-2xl">
                      <h4 className="font-bold text-gray-950 mb-2 text-sm sm:text-base flex items-center gap-2">
                        <Lock className="w-4 h-4 text-primary-300" />
                        Robust Security Measures
                      </h4>
                      <p className="text-sm sm:text-base">
                        We employ strict industry-standard encryption protocols (SSL/TLS in transit, AES-256 at rest) and enforce PAX-certified, PCI-compliant hardware security layers to protect sensitive customer and transaction details at all times.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-950 mb-1 text-sm sm:text-base">Breach Notification</h4>
                      <p>
                        In the highly unlikely event of a security incident or data breach involving a real risk of significant harm, we will immediately notify all affected individuals and report details to the Office of the Information and Privacy Commissioner of Alberta (OIPC) and federal authorities as mandated by Canadian law.
                      </p>
                    </div>
                  </div>
                </PrivacySection>

                {/* 6. Your Rights */}
                <PrivacySection id="rights" icon={Scale} title="6. Your Rights">
                  <p className="mb-4">
                    Under Alberta PIPA and Canadian federal law (PIPEDA), you hold explicit legal rights over your information:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-indigo-50/60 rounded-xl p-5 shadow-sm text-center md:text-left">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary-300 flex items-center justify-center mb-3 mx-auto md:mx-0">
                        <span className="font-bold text-sm">1</span>
                      </div>
                      <h5 className="font-bold text-gray-900 mb-1 text-[15px]">Right to Access</h5>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Access and review the exact personal information we securely store and process about you.
                      </p>
                    </div>
                    <div className="bg-white border border-indigo-50/60 rounded-xl p-5 shadow-sm text-center md:text-left">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary-300 flex items-center justify-center mb-3 mx-auto md:mx-0">
                        <span className="font-bold text-sm">2</span>
                      </div>
                      <h5 className="font-bold text-gray-900 mb-1 text-[15px]">Right to Correct</h5>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Request immediate updates or corrections of incomplete or inaccurate data.
                      </p>
                    </div>
                    <div className="bg-white border border-indigo-50/60 rounded-xl p-5 shadow-sm text-center md:text-left">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-primary-300 flex items-center justify-center mb-3 mx-auto md:mx-0">
                        <span className="font-bold text-sm">3</span>
                      </div>
                      <h5 className="font-bold text-gray-900 mb-1 text-[15px]">Withdraw Consent</h5>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Withdraw consent for specific non-essential uses of your data, subject to contract restrictions.
                      </p>
                    </div>
                  </div>
                </PrivacySection>

                {/* 7. Contact Our Privacy Team */}
                <PrivacySection id="contact" icon={Mail} title="7. Contact Our Privacy Team">
                  <p className="mb-6">
                    If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please reach out to our dedicated privacy officers:
                  </p>
                  
                  <div className="bg-gradient-to-br from-indigo-50/40 via-white to-orange-50/20 border border-indigo-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-sm">
                    <div className="w-16 h-16 rounded-2xl bg-orange-100 text-primary-300 flex items-center justify-center flex-shrink-0 animate-pulse">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div className="text-center md:text-left flex-grow">
                      <h4 className="text-lg font-black text-gray-900 mb-1">
                        Privacy Team
                      </h4>
                      <p className="text-primary-300 font-bold text-md mb-2">
                        SlateX POS
                      </p>
                      <p className="text-gray-500 text-sm max-w-md">
                        We take your data security seriously. Our compliance team will review and reply to all legal privacy queries within 30 business days.
                      </p>
                    </div>
                    <div className="w-full md:w-auto">
                      <a 
                        href="mailto:info@slatexpos.com" 
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-primary-300 text-white font-bold px-6 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-gray-900/10 hover:shadow-orange-500/20"
                      >
                        <Mail className="w-5 h-5" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </PrivacySection>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
