import React from "react";

function TeamCard({ imageSrc, name, role, link}) {
  return (
    <div
      className="flex flex-col h-full p-6 bg-gray-800 items-center"
      data-aos="fade-up"
    >
      <div className="relative inline-flex flex-col mb-4">
        <img
          className="rounded-full"
          src={imageSrc}
          width="120"
          height="120"
          alt={name}
        />
      </div>
      <p className="text-gray-400 grow">
        {role}
      </p>
      <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 space-y-2 w-full text-center">
        <a href={link} target="_blank" className="text-gray-200 not-italic hover:text-sky-600">{name}</a>
      </div>
    </div>
  );
}

export default TeamCard;
