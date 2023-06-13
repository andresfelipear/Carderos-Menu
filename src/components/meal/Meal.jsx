import React from 'react'
import PropTypes from 'prop-types'

const Meal = ({ title, price, description, icons, onClick }) => {
    const oceanWise = "https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-oceanwise.svg";
    const veggie = "https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-veggie.svg";
    const glutenFree = "https://www.vancouverdine.com/wp-content/themes/sequoia/images/icons/icon-glutenfree.svg";
    


    return (
        <div className="mx-auto py-3 w-full cursor-pointer" onClick={onClick}>
            <div className="flex items-center justify-between">
                <h3 className="text-sm uppercase font-bold">{title}</h3>
                <div >
                    {price}
                </div>
            </div>
            <p className="mt-2">{description}</p>
            {icons && (
                <div className="flex mt-2">
                    {icons.map((icon) => {
                        let urlIcon = oceanWise;
                        if (icon === 'oceanwise') {
                            urlIcon = oceanWise;
                        } else if (icon === 'veggie') {
                            urlIcon = veggie;
                        } else if (icon === 'glutenfree') {
                            urlIcon = glutenFree;
                        }
                        return (
                            <img src={urlIcon} alt={icon} className="w-6 h-6" />
                        )
                    })}

                </div>
            )}
        </div>
    );
};

export default Meal

