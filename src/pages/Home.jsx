import React from 'react';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Team from '../partials/Team';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import FAQ from '../partials/FAQ';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesZigZag />
        <Team />
        <FAQ />
        <Newsletter />
      </main>
      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;