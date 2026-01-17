import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Reveal } from './Reveal';
import { Check } from 'lucide-react';

interface RateCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    delay?: number;
}

const RateCard: React.FC<RateCardProps> = ({ title, price, description, features, delay = 0 }) => (
    <Reveal delay={delay} width="100%">
        <div className="group h-full flex flex-col p-8 border border-warm-taupe/20 hover:border-warm-taupe transition-colors duration-500 bg-white/50 backdrop-blur-sm hover:translate-y-[-8px] transition-transform duration-500">
            <h4 className="font-sans text-xs font-semibold tracking-widest text-warm-taupe uppercase mb-4">{title}</h4>
            <div className="mb-6">
                <span className="font-serif text-4xl md:text-5xl text-slate-blue">{price}</span>
            </div>
            <p className="font-sans text-sm text-slate-blue/70 mb-8 leading-relaxed min-h-[40px]">
                {description}
            </p>
            <ul className="space-y-4 mt-auto">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-warm-taupe mt-0.5 flex-shrink-0" />
                        <span className="font-sans text-sm text-slate-blue/80">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </Reveal>
);

export const Rates: React.FC = () => {
    return (
        <SectionWrapper id="rates" pageNumber="07" bgText="INVEST">
            <div className="flex flex-col space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 md:order-1">
                        <Reveal>
                            <p className="font-sans text-lg font-light text-slate-blue/80 leading-relaxed max-w-md">
                                Transparent pricing for authentic content. Choose the package that best suits your campaign goals.
                            </p>
                        </Reveal>
                    </div>
                    <div className="relative order-1 md:order-2 text-right">
                        <Reveal>
                            <h3 className="font-serif text-5xl md:text-7xl text-slate-blue leading-tight">
                                Investment & <br />
                                <span className="font-script text-6xl md:text-8xl text-warm-taupe mr-8 block mt-2">Rates</span>
                            </h3>
                        </Reveal>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <RateCard
                        title="Dedicated Reel"
                        price="₹20,000+"
                        description="A focused, high-quality reel dedicated to your brand's message and aesthetics."
                        features={[
                            "1 Dedicated Reel",
                            "Story Reshare",
                            "Concept & Scripting",
                            "High Quality Editing",
                            "Cover Image Design"
                        ]}
                        delay={100}
                    />
                    <RateCard
                        title="Collab Reel"
                        price="₹25,000+"
                        description="Maximize reach with a collaborator tag, leveraging both our audiences."
                        features={[
                            "1 Reel with Collab Tag",
                            "Story Reshare",
                            "Expanded Reach",
                            "Concept & Scripting",
                            "High Quality Editing"
                        ]}
                        delay={200}
                    />
                    <RateCard
                        title="Ad / Usage Rights"
                        price="₹5,000"
                        description="Secure rights to use content for paid advertisements and commercial purposes."
                        features={[
                            "Commercial Usage Rights",
                            "Ad Account Whitelisting",
                            "Raw Footage Access",
                            "High-Res Files"
                        ]}
                        delay={300}
                    />
                </div>
            </div>
        </SectionWrapper>
    );
};
