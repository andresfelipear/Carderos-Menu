import React from 'react'

const Modal = ({ isOpen, onClose, meal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#0A0A0ADB] opacity-100">
      <div className="fixed inset-0 bg-black opacity-0"></div>
      <div className="bg-white w-fit max-w-[70vw] md:max-w-[60vw]">
        <header className="bg-[#bd3f39] text-white px-8 py-3 flex justify-between items-center">
          <p className=" text-lg md:text-xl font-bold">{meal.name}</p>
          <p className="text-sm">{meal.price === "market" ? "" : "$"}{meal.price}</p>
        </header>
        <section className="p-4">
          <div className="flex justify-center">
            <img className='w-fit max-h-96 h-auto' src={meal.image} alt={meal.name} />
          </div>
          <div className='px-2 md:px-6 max-w-fit md:max-w-screen-md text-xs md:text-base '>
            <p className='italic mb-6'>{meal.description}</p>
            <p className='my-2 '>
              <p className='mr-6 mb-2 font-bold'>Allergies:</p>
              <div className='flex flex-wrap justify-between gap-1 md:gap-2] w-fit'>
                {meal.allergy_alert && meal.allergy_alert.map((allergy) => {
                  return (<div className='bg-[#bd3f39] text-basic px-2 py-1 rounded-md'>{allergy}</div>)
                })}
              </div>
            </p>
          </div>
        </section>
      </div>
      <button className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-800" aria-label="close" onClick={onClose}>
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg></button>
    </div>
  );
};

export default Modal