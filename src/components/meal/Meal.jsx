import React from 'react'
import PropTypes from 'prop-types'

const Meal = ({ title, price, description, icon }) => {
    return (
      <div className="mx-auto py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm uppercase font-bold">{title}</h3>
          <div >
            {price}
          </div>
        </div>
        <p className="mt-2">{description}</p>
        <div className="flex mt-2">
          <img src={icon} alt="Food Icon" className="w-6 h-6" />
        </div>
      </div>
    );
  };

export default Meal

