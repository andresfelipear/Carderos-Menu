import React from 'react'

function Modal({ meal, handleClose }) {
  return (
    <div className="modal" id="modal-container">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head" style={{ backgroundColor: '#bd3f39', color: 'white' }}>
          <p className="modal-card-title" style={{ color: 'white' }}>{meal.name}</p>
          <p className="modal-card-price">{meal.price==="market"?"":"$"}{meal.price}</p>
        </header>
        <section className="modal-card-body">
          <div className='w-80 h-auto m-auto'>
            <img className='w-fit' src={meal.image} alt={meal.name} />
          </div>
          <div className='px-6'>
            <p className='italic'>{meal.description}</p>
            <p className='mt-2'><strong className='mr-6'>Allergies:</strong> {meal.allergies && meal.allergies.map((allergy)=>{
              return(<span className='mr-4 bg-[#bd3f39] text-basic px-2 py-1 rounded-md'>{allergy}</span>)
            })}</p>
          </div>
        </section>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button>
    </div>
  )
}

export default Modal