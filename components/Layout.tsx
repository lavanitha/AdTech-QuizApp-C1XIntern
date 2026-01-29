import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onAboutClick?: () => void;
  onLogoClick?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onAboutClick, onLogoClick }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F3F0EB] text-[#1F1F1F]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F3F0EB]/90 backdrop-blur-md border-b border-[#1A0C2F]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Area */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={onLogoClick}>
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF3E24] to-[#1A0C2F] flex items-center justify-center text-white font-serif font-black italic text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
               a
             </div>
             <div className="flex flex-col leading-none">
                <span className="font-bold text-[#1A0C2F] text-lg tracking-tight">avenga</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF3E24] font-bold">AdTech</span>
             </div>
          </div>

          {/* Navigation / Badge */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#1A0C2F]/70">
                <span className="hover:text-[#FF3E24] transition-colors cursor-pointer">The Book</span>
                <span className="hover:text-[#FF3E24] transition-colors cursor-pointer" onClick={onAboutClick}>About Avenga</span>
            </nav>
            <div className="text-xs font-bold text-white bg-[#1A0C2F] px-4 py-2 rounded-full shadow-md">
              2026 Edition
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A0C2F] text-white py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 opacity-80">
          <div className="text-sm">
             <span className="font-bold text-[#FF3E24]">Avenga</span> &copy; 2026. All rights reserved.
          </div>
          <p className="text-sm text-gray-400">Field-Tested Knowledge and Practices from the AdTech Frontlines.</p>
        </div>
      </footer>
    </div>
  );
};