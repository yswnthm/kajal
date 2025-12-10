import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Reveal } from './Reveal';
import { Instagram, Mail, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <SectionWrapper id="hero" pageNumber="01" className="items-center text-center">
            <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">

                {/* Decorative Background Text (Name) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none mix-blend-multiply opacity-[0.04]">
                    <span className="font-serif text-[12vw] md:text-[14vw] leading-none text-slate-blue whitespace-nowrap tracking-tight">
                        KAJAL GOYAL
                    </span>
                </div>

                {/* Foreground Content */}
                <div className="relative flex flex-col items-center space-y-6">
                    <Reveal delay={200} direction="none">
                        <h2 className="font-script text-5xl md:text-7xl text-warm-taupe/90 rotate-[-5deg] mb-2">
                            UGC Portfolio
                        </h2>
                    </Reveal>

                    <Reveal delay={400}>
                        <h1 className="font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase text-slate-blue font-light">
                            Kajal Goyal
                        </h1>
                    </Reveal>

                    <Reveal delay={600}>
                        <div className="w-px h-16 bg-gradient-to-b from-slate-blue/0 via-slate-blue/30 to-slate-blue/0 my-4"></div>
                    </Reveal>

                    <Reveal delay={800}>
                        <div className="flex space-x-10 text-icon-blue/80">
                            <a href="https://instagram.com/kay.life173" target="_blank" rel="noopener noreferrer" className="hover:text-warm-taupe hover:scale-110 transition-all duration-500">
                                <Instagram className="w-5 h-5 stroke-[1.5]" />
                            </a>
                            <a href="mailto:Kay.life173@gmail.com" className="hover:text-warm-taupe hover:scale-110 transition-all duration-500">
                                <Mail className="w-5 h-5 stroke-[1.5]" />
                            </a>
                        </div>
                    </Reveal>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float cursor-pointer opacity-30 hover:opacity-100 transition-opacity duration-500" onClick={scrollToAbout}>
                    <ArrowDown className="w-5 h-5 text-warm-taupe" />
                </div>
            </div>
        </SectionWrapper>
    );
};
