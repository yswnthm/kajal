import React from 'react';

export const Footer: React.FC = () => {
    const [showTooltip, setShowTooltip] = React.useState(false);

    return (
        <footer className="w-full py-8 text-center bg-pastel-mist relative z-10 transition-colors duration-300">
            <div className="flex justify-center items-center gap-1 font-sans text-xs tracking-widest text-slate-blue/60 uppercase relative">
                <span>made with love by</span>
                <a href="https://solicate.in" target="_blank" rel="noopener noreferrer" className="font-medium text-warm-taupe hover:opacity-80 transition-opacity duration-300">solicate</a>
                <span>.</span>

                <div
                    className="relative ml-1 cursor-pointer group"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onClick={() => setShowTooltip(!showTooltip)}
                >
                    <span className="flex items-center justify-center w-4 h-4 text-[10px] border border-slate-blue/40 rounded-full hover:bg-slate-blue/10 transition-colors">?</span>

                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 p-4 bg-white/95 backdrop-blur-sm shadow-lg rounded-xl text-left border border-white/20 transition-all duration-300 origin-bottom z-50 ${showTooltip ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                        <p className="normal-case text-slate-blue text-[11px] leading-relaxed tracking-normal font-sans">
                            This portfolio is designed, developed and maintained by <span className="font-medium text-warm-taupe">solicate</span>, a creative brand agency.
                        </p>
                        <div className="mt-2 text-[10px] normal-case tracking-wide opacity-80 font-sans">
                            For more details contact, <a href="https://solicate.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-taupe transition-colors">solicate.in</a>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white/95"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
