// components/DropdownMenu.js

import { useState } from 'react';

const DropdownMenu = ({ options, defaultValue, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleSelection = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="relative">
      <button className="border border-gray-300 bg-white rounded px-4 py-2 text-gray-700">
        {selectedOption.label}
      </button>
      <ul className="absolute hidden bg-white border border-gray-300 mt-1 w-full z-10">
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleSelection(option)}
            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
