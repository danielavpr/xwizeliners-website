import React, { useState } from "react";
import ArrowUp from '../images/arrow-up.svg';
import ArrowDown from '../images/arrow-down.svg';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-6">
      <button onClick={handleClick} className="flex items-center">
        <p className="text-xl">{title}</p>
        <img alt="open button" src={isOpen ? ArrowUp : ArrowDown} className="h-6 ml-2"/>
      </button>

      {isOpen && (
        <p className="my-4 text-gray-400" data-aos="fade-down">
          {content}
        </p>
      )}
    </div>
  );
}

export default Collapse;
