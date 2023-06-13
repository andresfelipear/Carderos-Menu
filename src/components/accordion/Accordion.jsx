import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const iconMinus = 'https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-minus.svg';
  const iconPlus = 'https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-plus.svg';


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        className="flex justify-between w-full p-4 focus:outline-none"
        onClick={toggleAccordion}
      >
        <h2 className='text-2xl font-["Merriweather"]'>{title}</h2>
        <span>
        <img className='w-4 h-4' src={isOpen?iconMinus:iconPlus} />
        </span>
      </button>
      {isOpen && (
        <div className="px-4 grid grid-cols-2 gap-4">
          <div>{content}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;