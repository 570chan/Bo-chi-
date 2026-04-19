import React, { useState, useEffect } from 'react';
import { Play, Facebook, Github, Disc } from 'lucide-react';

const App = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Seorang siswa sekolah menengah tahun kedua yang keren dan penyendiri. Dia adalah bassis Kessoku Band dan sahabat Nijika. Hobinya di luar kebiasaan, dan dia senang jika disebut orang aneh. Dia tinggal bersama keluarga kaya tetapi tidak pernah punya uang karena dia menghabiskan semuanya untuk membeli instrumen. Dia sesekali memakan rumput liar untuk menghilangkan rasa laparnya.";

  // Hiệu ứng gõ chữ cho phần About
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden select-none font-sans">
      
      {/* Background Split: Cắt chéo chuẩn poster */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[#3b5cbd]" 
          style={{ 
            clipPath: 'polygon(0 0, 70% 0, 30% 100%, 0% 100%)' 
          }}
        />
      </div>

      {/* Character Image Layer: Nhân vật cực to, sát đầu, bám đáy */}
      <div className="absolute inset-0 z-10 flex justify-center items-end pointer-events-none">
        <img 
          src="https://i.ibb.co/Q7JJwXHH/taoanhdep-xoa-nen-anh-87383.png" 
          alt="Ryo Yamada" 
          className="h-[85vh] sm:h-[90vh] md:h-[98vh] w-auto object-contain object-bottom transform md:translate-x-[-10%] transition-transform duration-500"
        />
      </div>

      {/* Main Content Layer: Chữ nằm trên nhân vật */}
      <div className="relative z-20 h-full w-full flex flex-col md:flex-row pointer-events-none">
        
        {/* Khối bên trái: Bocchi The Rock */}
        <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center p-8 md:pl-20 pt-12 md:pt-0 pointer-events-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-[1000] leading-[0.85] tracking-tighter text-black uppercase mb-8 drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
            BOCCHI<br />THE ROCK
          </h1>
          
          <button className="flex items-center gap-3 bg-white px-8 py-3 shadow-2xl hover:bg-gray-100 transition-all active:scale-95 group w-fit">
            <Play size={18} fill="black" />
            <span className="font-black text-[12px] tracking-widest text-black uppercase">START WATCH</span>
          </button>
        </div>

        {/* Khối bên phải: Ryo Yamada & About */}
        <div className="w-full md:w-1/2 flex flex-col justify-end md:justify-center items-end p-8 md:pr-20 pb-20 md:pb-0 pointer-events-auto">
          <div className="text-right mb-6 md:mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.8rem] font-[1000] leading-[0.8] tracking-tighter text-black uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
              RYO<br />YAMADA
            </h2>
          </div>

          <div className="w-full max-w-[300px] md:w-80 text-left bg-white/20 md:bg-transparent backdrop-blur-[4px] md:backdrop-blur-none p-4 rounded-lg">
            <h3 className="font-black text-lg md:text-xl text-black mb-1 md:mb-2 tracking-tighter uppercase">ABOUT</h3>
            <div className="min-h-[100px] md:min-h-[120px]">
              <p className="text-[12px] md:text-[14px] leading-relaxed font-bold text-gray-900">
                {displayText}
                <span className="inline-block w-[2px] h-3.5 bg-black ml-1 animate-pulse" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Socials & Watermark */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-16 z-50 flex flex-col items-end gap-3">
        <div className="flex gap-5 items-center">
          <a href="#" className="text-black hover:scale-110 transition-transform drop-shadow-md">
            <Disc size={24} />
          </a>
          <a href="#" className="text-black hover:scale-110 transition-transform drop-shadow-md">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-black hover:scale-110 transition-transform drop-shadow-md">
            <Github size={24} />
          </a>
        </div>
        <div className="text-[11px] md:text-[13px] font-black tracking-[0.3em] text-gray-500 drop-shadow-sm">
          @NIJIKENN
        </div>
      </div>

    </div>
  );
};

export default App;
