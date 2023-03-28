import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={handleClick}>
        <p className="font-bold text-xl">{title}</p>
      </button>

      {isOpen && (
        <p className={`my-4`} data-aos="fade-down">
          {content}
        </p>
      )}
    </div>
  );
}

export default Collapse;
