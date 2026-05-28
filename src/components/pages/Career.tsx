import React from 'react';
import { 
  Briefcase, 
  Users, 
  Rocket, 
  Zap, 
  Globe, 
  Award,
  ChevronRight,
  Mail,
  ArrowRight
} from 'lucide-react';
import SEO from "../Common/SEO";

const Career: React.FC = () => {
  return (
    <>
      <SEO
        title="Careers | Join SlateX POS"
        description="Join the team at SlateX POS and help us revolutionize the restaurant technology industry. Explore our open positions and company culture."
        keywords="careers, jobs, SlateX POS jobs, tech jobs, restaurant technology"
      />

      <div className="min-h-screen pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden font-gilroy">
        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,110,77,0.06) 0%, transparent 60%)', filter: 'blur(100px)' }} />
        <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }} />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 text-primary-300 text-sm font-semibold mb-6">
            <Briefcase className="w-4 h-4" />
            <span>Careers at SlateX</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            Build the Future of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-orange-500">Restaurant Technology</span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl font-medium max-w-2xl mx-auto mb-10">
            We're on a mission to empower restaurants with seamless, robust, and innovative point-of-sale solutions. Come build with us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a 
                href="#open-positions" 
                className="inline-flex items-center justify-center gap-2 bg-primary-300 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </a>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We believe in fostering an environment where innovation thrives, people grow, and great work is rewarded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Rocket, title: "Impactful Work", desc: "Build tools that directly help local restaurants succeed and scale." },
              { icon: Users, title: "Amazing Team", desc: "Collaborate with passionate, brilliant, and supportive colleagues." },
              { icon: Zap, title: "Fast-Paced Growth", desc: "A dynamic environment where your ideas can quickly become reality." },
              { icon: Globe, title: "Remote-Friendly", desc: "Work from anywhere in Canada with flexible hours and trust-based culture." },
              { icon: Award, title: "Competitive Perks", desc: "Comprehensive health benefits, stock options, and continuous learning stipends." },
              { icon: Briefcase, title: "Career Progression", desc: "Clear paths for advancement as our startup scales nationally." }
            ].map((perk, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-indigo-50/50 shadow-[0_4px_20px_-4px_rgba(99,102,241,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(99,102,241,0.1)] transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-primary-300 flex items-center justify-center mb-6 group-hover:bg-primary-300 group-hover:text-white transition-all duration-300">
                  <perk.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{perk.title}</h3>
                <p className="text-gray-600 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions Section */}
        <div id="open-positions" className="max-w-4xl mx-auto px-6 relative z-10 scroll-mt-32">
           <div className="bg-gradient-to-br from-indigo-900 via-gray-900 to-black text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
             {/* Decorative background elements inside the card */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
             
             <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                  <Mail className="w-10 h-10 text-primary-300" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Oops!! no vacancy available at the moment</h2>
                <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                  Join the waitlist! We are always on the lookout for talented individuals. Even if there are no open roles right now, we'd love to hear from you.
                </p>
                <a 
                  href="mailto:info@slatexpos.com" 
                  className="inline-flex items-center justify-center gap-2 bg-primary-300 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Your Resume</span>
                </a>
             </div>
           </div>
        </div>

      </div>
    </>
  );
};

export default Career;
