import React, { useEffect } from 'react';

export const GlobalSupport: React.FC = () => {
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

  const locations = [
    'রায়পুরা পৌরসভা', 'অলিপুরা', 'চান্দেরকান্দি', 'পলাশতলী', 
    'মহেষপুর', 'রাধানগর', 'মির্জাপুর', 'মুছাপুর', 
    'মির্জানগর', 'চরসুবুদ্ধি', 'আমীরগঞ্জ', 'চর-আড়ালিয়া', 
    'হাইরমারা', 'নিলক্ষ্যা', 'আদিয়াবাদ', 'শ্রীনগর', 
    'বাঁশগাড়ী', 'পাড়াতলী', 'চাঁনপুর', 'মির্জারচর', 
    'চরমধুয়া', 'মরজাল', 'উত্তর বাখরনগর', 'ডৌকারচর'
  ];

  return (
    <section id="global" className="bg-[#001E19] pt-20 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="reveal-on-scroll">
            <span className="text-amber-400 text-sm font-bold tracking-wider uppercase mb-2 block">
              গ্লোবাল আউটরিচ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              বিশ্বের যে কোন জায়গা থেকে <br/>
              ভলান্টিয়ার হতে পারবেন
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              ভলান্টিয়ার হতে আপনাকে রায়পুরা-তে আসতেই থাকতে হবে এমন কোনো কথা নেই। 
              যদি আপনার পরিচিত কেউ রায়পুরার এলাকাগুলোতে থাকেন, তাহলে আপনি বিশ্বের যেকোনো প্রান্ত থেকে সাহায্য করতে পারবেন।
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-emerald-400/80 font-medium">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> মক্কা-মদিনা</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> নিউইয়র্ক</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> লন্ডন</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500"></span> দুবাই</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-pink-500"></span> মেলবোর্ন</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-white"></span> ঢাকা</span>
            </div>
          </div>

          {/* Card/Map Representation */}
          <div className="relative reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
             <div className="bg-[#012e28] border border-[#005f54]/30 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full"></div>
                
                <h3 className="text-gray-400 text-sm mb-6 text-center border-b border-[#005f54]/30 pb-4 leading-relaxed">
                  নরসিংদী-৫ এর অন্তর্ভুক্ত ইউনিয়নগুলো
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {locations.map((loc, idx) => (
                    <div 
                      key={idx}
                      className="px-2 py-2 bg-[#004d44] text-emerald-100 rounded-lg text-xs sm:text-sm hover:bg-[#00695c] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:text-white hover:-translate-y-0.5 transition-all duration-300 cursor-default border border-[#005f54] text-center flex items-center justify-center min-h-[40px] leading-snug"
                    >
                      {loc}
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-500 text-center mt-8 leading-relaxed">
                   আপনার একটি ফোন কল আমাদের জন্য এই এলাকার ভোট নিশ্চিত করতে পারে।
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};