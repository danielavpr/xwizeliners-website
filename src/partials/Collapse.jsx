import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowUp from "../images/arrow-up.svg";
import ArrowDown from "../images/arrow-down.svg";
import ExternalLink from "../images/external-link.svg";

function Collapse({ title, content, link }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {};

  return (
    <div className="my-6">
      <button onClick={handleCollapse} className="flex items-center">
        <p className="text-xl">{title}</p>
        <img
          alt="open button"
          src={isOpen ? ArrowUp : ArrowDown}
          className="h-6 ml-2"
        />
      </button>

      {isOpen && (
        <p
          className="my-4 text-gray-400 flex items-center"
          data-aos="fade-down"
        >
          {content}
          {link && (
            <Link to={link} target="_blank">
              <img
                src={ExternalLink}
                alt="external link"
                className="h-4 ml-4"
              />
            </Link>
          )}
        </p>
      )}
    </div>
  );
}

export default Collapse;
