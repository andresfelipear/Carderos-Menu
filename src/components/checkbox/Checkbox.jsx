import React, { useState } from 'react';

const Checkbox = ({ name, checkedBox }) => {
    const [checked, setChecked] = useState(false);

    const handleToggle = (value) => {
        setChecked(!checked);
        checkedBox(value);
    };

    return (
        <div className='flex items-center justify-center w-fit   '>
                <input
                    type="checkbox"
                    className="h-5 w-5 accent-background transition duration-150 ease-in-out cursor-pointer"
                    checked={checked}
                    onChange={(e) => handleToggle(e.target.value)}
                    value={name}
                />
            <p className="ml-2 text-gray-700 min-w-[52px]">{name}</p>

        </div>


    );
};

export default Checkbox;