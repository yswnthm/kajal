import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 text-center bg-pastel-mist relative z-10">
      <p className="font-sans text-xs tracking-widest text-slate-blue/60 uppercase">
        Made with love by <a href="https://solicate.in" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-warm-taupe transition-colors duration-300">@solicate</a>
      </p>
    </footer>
  );
};
