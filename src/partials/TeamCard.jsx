import React from "react";

function TeamCard({ imageSrc, name, role, link }) {
  return (
    <div
      className="flex md:flex-col h-full p-4 md:p-6 bg-gray-800 items-center space-y-4"
      data-aos="fade-up"
    >
      <div className="relative inline-flex flex-col">
        <img
          className="rounded-full h-20 w-20 md:h-32 md:w-32"
          src={imageSrc}
          alt={name}
        />
      </div>
      <div className="w-3/4 md:w-100 text-center pl-8 md:pl-0">
        <p className="text-gray-400 grow pb-2">{role}</p>
        <div className="text-gray-700 font-medium pt-2 border-t border-gray-700 w-full text-center">
          <a
            href={link}
            target="_blank"
            className="text-gray-200 not-italic hover:text-sky-600"
          >
            {name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
