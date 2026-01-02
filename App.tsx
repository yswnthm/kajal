import React from 'react';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { WorkPictures } from './components/WorkPictures';
import { WorkVideos } from './components/WorkVideos';
import { GreatFit } from './components/GreatFit';
import { Approach } from './components/Approach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-pastel-mist text-slate-blue overflow-x-hidden">
      <Hero />
      <AboutMe />
      <WorkPictures />
      <WorkVideos />
      <GreatFit />
      <Approach />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;