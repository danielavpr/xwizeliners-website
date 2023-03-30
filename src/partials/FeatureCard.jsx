import React from "react";
import ExternalLink from "../images/external-link.svg";

function FeatureCard({
  image,
  header,
  title,
  description,
  bulletPoints,
  imageLeft,
}) {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
      {/* Image */}
      <div
        className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 ${
          imageLeft ? "rtl" : "md:order-1"
        }`}
        data-aos="fade-up"
      >
        <img
          className="max-w-full mx-auto hidden md:block h-auto"
          src={image}
          width="380"
          alt={title}
        />
      </div>
      {/* Content */}
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        data-aos="fade-right"
      >
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <div className="font-architects-daughter md:text-xl text-sky-600 mb-2">
            {header}
          </div>
          <h3 className="h3 mb-3">{title}</h3>
          {description && (
            <a
              href={description.link ? description.link : "#"}
              target="_blank"
              className="md:text-xl text-gray-400 mb-4 flex items-center"
            >
              {description.text}
              {description.link && (
                <img
                  src={ExternalLink}
                  alt="external link"
                  className="h-5 ml-4"
                />
              )}
            </a>
          )}

          <ul className="md:text-lg text-gray-400 -mb-2">
            {bulletPoints.map((point, index) => (
              <li
                className="flex items-center mb-2"
                key={`feature-card-point-${index}`}
              >
                <svg
                  className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
