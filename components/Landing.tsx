import React from 'react';

interface LandingProps {
  onStart: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const [openPage, setOpenPage] = React.useState<'about' | 'edition' | null>(null);
  return (
    <div className="flex-grow flex items-center justify-center relative overflow-hidden bg-[#F3F0EB]">
      {/* Enhanced Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
      
      {/* Animated Gradient Orbs - Adjusted colors for premium feel */}
      <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-b from-[#FF3E24] to-transparent opacity-[0.06] rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-t from-[#1A0C2F] via-[#4A3B69] to-transparent opacity-[0.06] rounded-full blur-[120px] animate-blob" style={{ animationDelay: '5s' }} />
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-[#FF3E24] opacity-[0.04] rounded-full blur-[80px] animate-pulse-glow" />

      <div className="max-w-[1400px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10 py-16">
        
        {/* LEFT COLUMN: Editorial Content */}
        <div className="flex flex-col items-start space-y-12 order-2 lg:order-1 relative">
          <div className="space-y-8 opacity-0 animate-fade-in-up">
            <div className="flex items-center gap-4">
               <div className="h-[2px] w-12 bg-[#FF3E24]"></div>
               <p className="text-[#FF3E24] font-bold tracking-[0.2em] uppercase text-xs">Official Companion Quiz</p>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-[#1A0C2F] tracking-tighter leading-[0.95]">
              Master <br/>
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3E24] to-[#1A0C2F]">AdTech</span> <br/>
              Ecosystem.
            </h1>
            
            <p className="text-xl text-[#1A0C2F]/70 leading-relaxed max-w-lg font-medium">
              Based on the 2026 Edition of The AdTech Book. <br/>
              Challenge yourself on DSPs, SSPs, Attribution, and Identity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <button 
              onClick={onStart}
              className="px-10 py-5 bg-[#FF3E24] text-white font-bold text-lg hover:bg-[#D92D16] transition-all duration-300 shadow-2xl hover:shadow-[#FF3E24]/40 hover:-translate-y-1 flex items-center justify-center gap-3 tracking-widest uppercase rounded-sm group/btn"
            >
              Start Quiz
              <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <a 
              href="https://www.avenga.com/whitepapers/adtech-book/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-transparent border border-[#1A0C2F] text-[#1A0C2F] font-bold text-lg hover:bg-[#1A0C2F] hover:text-white transition-all duration-300 flex items-center justify-center tracking-widest uppercase rounded-sm"
            >
              Read The Book
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-bold text-[#1A0C2F]/30 uppercase tracking-widest pt-8">
             <span>Powered by Avenga</span>
             <div className="w-1 h-1 bg-[#1A0C2F]/30 rounded-full"></div>
             <span>Updated for 2026</span>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D FLIPBOOK */}
        <div className="perspective-container h-[550px] group order-1 lg:order-2"

 style={{
          pointerEvents: openPage ? 'none' : 'auto'
        }}>
          
          <div className="book-wrapper animate-float flex items-stretch justify-center h-full">


             {/* Shadow */}
             <div className="book-shadow" />

             {/* === MOVING PART: COVER LEAF === */}
             <div
  className="cover-leaf"
  style={{
    transformOrigin: 'left bottom',
    transformStyle: 'preserve-3d'
  }}
>
                
                {/* FRONT COVER */}
                <div className="cover-front bg-[#FF3E24] flex flex-col relative border border-white/5">
                   
                   {/* Top Line & Logo */}
                   <div className="absolute top-8 left-8 right-8 border-t border-white/80 pt-4 flex justify-end">
                      <span className="text-white font-bold text-xl tracking-tight font-serif italic">avenga</span>
                   </div>

                   {/* Main Cover Art: The Big Alpha 'a' */}
                   <div className="flex-grow flex items-center justify-center relative overflow-hidden">
                      <div className="relative w-[280px] h-[280px] flex items-center justify-center">
                          {/* The Alpha Shape - Circle Part */}
                          <div className="absolute inset-0 rounded-full border-[60px] border-[#1A0C2F] opacity-90 mix-blend-multiply transform -rotate-12"></div>
                          {/* The Alpha Shape - Stem Part */}
                          <div className="absolute right-[15px] top-[-10px] bottom-[-10px] w-[60px] bg-[#1A0C2F] mix-blend-multiply opacity-90 transform rotate-6 rounded-sm"></div>
                          
                          {/* Centered Title Text */}
                          <div className="relative z-20 text-center leading-none flex flex-col items-center">
                             <span className="block text-5xl text-white font-normal drop-shadow-sm">The</span>
                             <span className="block text-6xl text-white font-bold tracking-tight mt-1 drop-shadow-sm">AdTech</span>
                             <span className="block text-6xl text-white font-normal mt-1 drop-shadow-sm">Book</span>
                          </div>
                      </div>
                   </div>

                   {/* Bottom Text */}
                   <div className="px-10 pb-12 text-white">
                      <p className="text-lg font-medium leading-snug">Field-Tested Knowledge <br/>and Practices from <br/>the AdTech Frontlines</p>
                      <div className="mt-6 inline-block bg-[#1A0C2F] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide">New 2026 Edition</div>
                   </div>

                   {/* Subtle sheen overlay */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 pointer-events-none"></div>
                </div>

                {/* BACK OF COVER (Inside Left - PDF Page 2) */}
<div className="cover-back bg-gradient-to-br from-[#FF3E24] via-[#cc2e1a] to-[#991b0b] relative overflow-hidden h-full flex">
                   <div className="relative z-10 h-full flex flex-col p-10 text-white justify-between">
                      <div>
                        <div className="text-white/60 text-[10px] uppercase tracking-[0.2em] mb-12">The AdTech Book</div>
                        
                        <h2 className="text-4xl font-normal mb-8">About Avenga</h2>
                        
                        <div className="space-y-6 text-sm font-light leading-relaxed text-white/90">
                          <p>Avenga is a global engineering and consulting partner, trusted by leading AdTech, MarTech, and media companies to design, build, and scale high-performance platforms.</p>
                          <p>From custom demand and supply-side solutions to data management, consent, and attribution systems, we bring deep domain expertise and cross-functional teams to address complex technical challenges.</p>
                          
                          <div className="mt-8 pt-8 border-t border-white/20">
                             <p className="font-medium text-white">Contact us at <span className="font-bold underline">avenga.com</span></p>
                          </div>
                        </div>
                      </div>
                   </div>

                   <div className="absolute bottom-6 right-8 text-xs text-white/50 font-mono z-20">2</div>
                </div>
             </div>

             {/* === STATIC PART: INSIDE RIGHT (PDF Page 3) === */}
             <div className="back-static bg-[#F9F7F5] relative flex flex-col p-10 text-[#1A0C2F] overflow-hidden h-full">

                {/* Spine Shadow Overlay */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/10 to-transparent z-10 pointer-events-none"></div>
                
                <div className="text-[#1A0C2F]/40 text-[10px] uppercase tracking-[0.2em] mb-8 text-right">The AdTech Book</div>
                
                <div className="flex-1 space-y-8 pl-2 flex flex-col">
                   {/* Table of Contents Item 1 */}
                   <div className="cursor-pointer group/toc" onClick={() => setOpenPage('about')}>
                     <div className="flex justify-between items-baseline border-b border-[#1A0C2F]/10 pb-2 mb-2 group-hover/toc:border-[#FF3E24]/40 transition-colors">
                        <span className="font-bold text-[#FF3E24] text-lg group-hover/toc:text-[#FF3E24]/70 transition-colors">1. Basics</span>
                        <span className="font-mono text-xs opacity-40">4</span>
                     </div>
                     <div className="pl-4 space-y-1 text-xs font-medium text-gray-500 group-hover/toc:text-gray-700 transition-colors">
                        <div className="flex justify-between"><span>AdTech</span></div>
                        <div className="flex justify-between"><span>Ad Slot & Space</span></div>
                        <div className="flex justify-between"><span>Inventory</span></div>
                     </div>
                   </div>

                   {/* Table of Contents Item 2 */}
                   <div className="cursor-pointer group/toc" onClick={() => setOpenPage('edition')}>
                     <div className="flex justify-between items-baseline border-b border-[#1A0C2F]/10 pb-2 mb-2 group-hover/toc:border-[#FF3E24]/40 transition-colors">
                        <span className="font-bold text-[#FF3E24] text-lg group-hover/toc:text-[#FF3E24]/70 transition-colors">2. Technology</span>
                        <span className="font-mono text-xs opacity-40">8</span>
                     </div>
                     <div className="pl-4 space-y-1 text-xs font-medium text-gray-500 group-hover/toc:text-gray-700 transition-colors">
                        <div className="flex justify-between"><span>DSP & SSP</span></div>
                        <div className="flex justify-between"><span>Ad Server</span></div>
                     </div>
                   </div>

                   {/* Quote Area */}
                   <div className="mt-auto p-5 bg-white border border-[#1A0C2F]/5 shadow-sm rounded-sm">
                      <p className="text-xs text-gray-500 leading-relaxed italic font-serif">
                        "Before diving into the complexities of the AdTech ecosystem, it’s essential to understand its core components."
                      </p>
                   </div>
                </div>

                <div className="absolute bottom-6 right-8 text-xs text-gray-400 font-mono">3</div>

             </div>
             
             {/* Spine */}
             <div className="spine"></div>
          </div>
          
          {/* Hint Text */}
          <div className="absolute bottom-[-60px] text-[#1A0C2F]/40 text-xs font-bold tracking-[0.2em] uppercase animate-pulse">
            Hover to Open
          </div>
        </div>

      </div>

      {/* Modal Overlays for Opened Pages */}
      {openPage === 'about' && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setOpenPage(null)}
        >
          <div 
            className="bg-gradient-to-br from-[#FF3E24] via-[#cc2e1a] to-[#991b0b] text-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-10 space-y-6">
              <div>
                <div className="text-white/60 text-[10px] uppercase tracking-[0.2em] mb-4">The AdTech Book</div>
                <h2 className="text-4xl font-bold mb-2">1. Basics</h2>
                <p className="text-white/70">Foundation Concepts</p>
              </div>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">AdTech Fundamentals</h3>
                  <p>AdTech (Advertising Technology) encompasses all the software, platforms, and tools used in digital advertising. It includes demand-side platforms (DSPs), supply-side platforms (SSPs), ad exchanges, and data management platforms.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">Ad Slot & Space</h3>
                  <p>An ad slot is a designated space on a web page, app, or digital property where an advertisement can be displayed. Understanding inventory and spaces is crucial for effective ad placement and pricing strategies.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">Inventory Management</h3>
                  <p>Inventory refers to the available ad spaces that publishers can sell. Effective inventory management ensures optimal revenue while maintaining user experience and site quality.</p>
                </div>

                <div className="bg-white/20 p-4 rounded mt-6">
                  <p className="italic font-serif text-sm">Master these basics to understand the entire AdTech ecosystem and its interconnected components.</p>
                </div>
              </div>

              <button 
                onClick={() => setOpenPage(null)}
                className="mt-6 w-full bg-[#1A0C2F] hover:bg-[#2A1C4F] text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {openPage === 'edition' && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setOpenPage(null)}
        >
          <div 
            className="bg-gradient-to-br from-[#1A0C2F] to-[#4A3B69] text-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#FF3E24]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-10 space-y-6">
              <div>
                <div className="text-[#FF3E24] text-[10px] uppercase tracking-[0.2em] mb-4 font-bold">2026 Edition</div>
                <h2 className="text-4xl font-bold mb-2">2. Technology</h2>
                <p className="text-white/70">Advanced Platforms & Infrastructure</p>
              </div>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#FF3E24]">Demand-Side Platforms (DSPs)</h3>
                  <p>DSPs allow advertisers to purchase ad inventory programmatically across multiple ad exchanges and supply sources. They enable precise targeting and real-time bidding capabilities.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#FF3E24]">Supply-Side Platforms (SSPs)</h3>
                  <p>SSPs empower publishers to manage their ad inventory and maximize revenue by connecting to multiple demand sources, DSPs, and ad networks simultaneously.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2 text-[#FF3E24]">Ad Server Architecture</h3>
                  <p>Ad servers are the backbone of digital advertising, managing ad delivery, tracking, and reporting. Modern ad servers handle complex decision-making in milliseconds to serve optimal ads.</p>
                </div>

                <div className="bg-white/10 p-4 rounded mt-6 border border-[#FF3E24]/30">
                  <p className="italic font-serif text-sm">The 2026 Edition reflects the latest evolution in AdTech technology, including AI-driven optimization and privacy-first solutions.</p>
                </div>
              </div>

              <button 
                onClick={() => setOpenPage(null)}
                className="mt-6 w-full bg-[#FF3E24] hover:bg-[#D92D16] text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};