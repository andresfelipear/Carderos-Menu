import React, { useState } from 'react';

const CheckboxButton = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500 transition duration-150 ease-in-out"
        checked={checked}
        onChange={handleToggle}
      />
      <span className="ml-2 text-gray-700">{checked ? 'Checked' : 'Unchecked'}</span>
    </label>
  );
};

export default CheckboxButton;