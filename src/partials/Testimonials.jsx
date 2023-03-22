import React from "react";
import TestimonialImage01 from "../images/testimonial-01.jpg";
import TestimonialImage02 from "../images/testimonial-02.jpg";
import TestimonialImage03 from "../images/testimonial-03.jpg";

function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Who we are</h2>
            <p className="text-xl text-gray-400">
              Meet the team behind this initiative.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800 items-center"
              data-aos="fade-up"
            >
              <div className="relative inline-flex flex-col mb-4">
                <img
                  className="rounded-full"
                  src={TestimonialImage01}
                  width="120"
                  height="120"
                  alt="Testimonial 01"
                />
              </div>
              <p className="text-lg text-gray-400 grow">
                Team lead, innovation & structure
              </p>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 space-y-2 w-full text-center">
                <p className="text-gray-200 not-italic">Luis Aranguren</p>
                <p className="text-sky-600" href="#0">
                  Cobud
                </p>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800 items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative inline-flex flex-col mb-4">
                <img
                  className="rounded-full"
                  src={TestimonialImage02}
                  width="120"
                  height="120"
                  alt="Testimonial 02"
                />
              </div>
              <p className="text-lg text-gray-400 grow">Project Champion</p>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 space-y-2 w-full text-center">
                <p className="text-gray-200 not-italic">Matthew Pasienski</p>
                <p className="text-sky-600" href="#0">
                  Pact
                </p>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800 items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="relative inline-flex flex-col mb-4">
                <img
                  className="rounded-full"
                  src={TestimonialImage03}
                  width="120"
                  height="120"
                  alt="Testimonial 03"
                />
              </div>
              <p className="text-lg text-gray-400 grow">Management</p>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 space-y-2 w-full text-center">
                <p className="text-gray-200 not-italic">Rene Nevarez</p>
                <p className="text-sky-600" href="#0">
                  Cobud
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
