import React from 'react';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#013b33] pt-32 pb-20 px-4 overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#005f54] blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-[#005f54] blur-3xl"></div>
       </div>

      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-[#005f54] bg-opacity-50 text-emerald-100 px-4 py-1.5 rounded-full text-sm mb-6 border border-[#005f54]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          শোভাযাত্রা নয়, পরিবর্তন
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          রাস্তায় নামার দরকার নেই। রাজনীতি বদলে দিন ঘরে বসেই।
        </h1>
        
        <p className="text-lg md:text-xl text-emerald-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          ওদের আছে টাকা আর পেশিশক্তির দাপট। আমাদের আছে একে অপরের প্রতি বিশ্বাস। রাস্তার শোডাউন বা ভয়ভীতিকে উপেক্ষা করে, আজ ঘরে বসেই আপনার ৫ মিনিটের ফোন কল বদলে দিতে পারে রায়পুরার ভবিষ্যৎ।
        </p>

        <div className="mt-8 flex justify-center">
            <a 
              href="https://youtube.com/shorts/YVrk5Xhiqww?feature=share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-[#005f54] ring-4 ring-[#005f54]/20"
            >
              {/* YouTube Thumbnail Background */}
              <img 
                src={`https://img.youtube.com/vi/YVrk5Xhiqww/hqdefault.jpg`}
                alt="পনির স্যারের বার্তা"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Dark Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-600/80 transition-all duration-300 shadow-lg group-hover:scale-110">
                   <Play className="text-white fill-white ml-1" size={40} />
                </div>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md py-4 px-4 text-center">
                 <span className="text-white font-bold text-lg tracking-wide leading-relaxed">
                   পনির স্যারের বার্তা
                 </span>
              </div>
            </a>
        </div>
      </div>
    </section>
  );
};