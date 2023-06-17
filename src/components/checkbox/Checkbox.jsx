import React, { useState } from 'react';

const Checkbox = ({ name }) => {
    const [checked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked(!checked);
    };

    return (
        <div className='flex items-center justify-center w-fit   '>
                <input
                    type="checkbox"
                    className="h-5 w-5 accent-background transition duration-150 ease-in-out cursor-pointer"
                    checked={checked}
                    onChange={handleToggle}
                />
            <p className="ml-2 text-gray-700">{name}</p>

        </div>


    );
};

export default Checkbox;