import React, { useEffect } from 'react';
import { Phone, CheckCircle, Share2, ExternalLink, Download } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: <Phone className="text-[#013b33]" size={24} />,
      title: "৫ মিনিট কথা বলুন",
      desc: "আপনার পরিচিত মানুষকে ফোন দিন। কেন আমরা পেশিশক্তির রাজনীতি বদলাতে চাই এবং কেন পনির স্যার তাদের জন্য যোগ্য, তা বুঝিয়ে বলুন।"
    },
    {
      icon: <CheckCircle className="text-[#013b33]" size={24} />,
      title: "‘আশ্বস্ত’ হলে ফর্মটি পূরণ",
      desc: "তারা রাজি হলে এই গুগল ফর্মটি পূরণ করুন করে। এতে আমরা বুঝতে পারব আমাদের লক্ষ্যের কত কাছে আছি।",
      action: {
        text: "ফর্মটি পূরণ করুন",
        href: "https://forms.gle/EFyAyhA5HcpM4N3XA",
        icon: <ExternalLink size={16} />
      }
    },
    {
      icon: <Share2 className="text-[#013b33]" size={24} />,
      title: "ইনফো কার্ড পাঠান", 
      desc: "নিচের লিংক থেকে ইনফো কার্ডটি Download করে তাদের হোয়াটসঅ্যাপে পাঠিয়ে দিন যাতে তারা তথ্য মনে রাখতে পারে।",
      action: {
        text: "ইনফো কার্ড ডাউনলোড করুন",
        href: "https://drive.google.com/file/d/1example/view",
        icon: <Download size={16} />
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-[#013b33] mb-4 leading-tight">
            কিভাবে কাজ করবেন?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            ব্যক্তিগত যোগাযোগের মাধ্যমে ভোট নিশ্চিত করার ৩টি ধাপ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="reveal-on-scroll bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#013b33] mb-4 leading-snug">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base flex-grow">
                {step.desc}
              </p>
              
              {step.action && (
                <div className="mt-auto pt-8 w-full">
                    <a 
                      href={step.action.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-[#013b33] text-white text-sm font-medium rounded-full hover:bg-[#005f54] transition-all shadow-lg hover:shadow-2xl w-full group/btn"
                    >
                      {step.action.text}
                      <span className="group-hover/btn:translate-x-1 transition-transform">
                        {step.action.icon}
                      </span>
                    </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};