import React from 'react';
import values from '../images/values.png';

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">We are owners</h2>
            <p className="text-xl text-gray-400">
              We use ownership to create a better world for ourselves and our communities.
            </p>
          </div>

          <img  src={values} alt="our values" />

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
