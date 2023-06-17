import React, { useState} from 'react';

const Accordion = ({ title, content, meals}) => {
    const [isOpen, setIsOpen] = useState(false);
    const iconMinus = 'https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-minus.svg';
    const iconPlus = 'https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-plus.svg';

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div>
            <button
                className="flex justify-between w-full px-2 pt-4 pb-3 md:px-4 md:pt-10 md:pb-7 focus:outline-none border-b"
                onClick={toggleAccordion}
            >
                <h2 className='text-lg md:text-2xl font-["Merriweather"]'>{title}</h2>
                <span>
                    <img className='w-4 h-4' src={(isOpen) ? iconMinus : iconPlus} />
                </span>
            </button>
            {(isOpen) && (
                <div className="px-4 py-4 border-b">
                    <div>{content}</div>
                </div>
            )}
        </div>
    );
};

export default Accordion;