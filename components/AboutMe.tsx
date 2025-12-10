import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Reveal } from './Reveal';

export const AboutMe: React.FC = () => {
    return (
        <SectionWrapper id="about" pageNumber="02">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center min-h-[50vh]">
                {/* Left Column: Heading */}
                <div className="md:col-span-5 relative flex flex-col justify-center">
                    <Reveal>
                        <div className="relative">
                            <h2 className="font-serif text-6xl md:text-8xl text-pastel-cloud text-stroke-slate-blue leading-[0.85] select-none opacity-80">
                                ABOUT<br />ME
                            </h2>
                            <span className="absolute -top-4 -right-4 md:-right-8 font-script text-4xl text-warm-taupe/80 rotate-12">
                                Hello
                            </span>
                        </div>
                    </Reveal>
                </div>

                {/* Right Column: Paragraph */}
                <div className="md:col-span-7 md:pl-12 border-l border-slate-blue/10">
                    <Reveal delay={200}>
                        <div className="pl-6 md:pl-10 space-y-6">
                            <h3 className="font-sans text-xs tracking-[0.3em] text-warm-taupe uppercase font-semibold">The Creator</h3>
                            <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-slate-blue/80 text-justify md:text-left max-w-xl">
                                I create visual stories that breathe. My work is rooted in the belief that content should feel like a gentle conversation—authentic, soft, and beautifully composed. I specialize in <span className="text-warm-taupe/90 font-normal">User Generated Content</span> that blends warm minimalism with quiet confidence.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </SectionWrapper>
    );
};
