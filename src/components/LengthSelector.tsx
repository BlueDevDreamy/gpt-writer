import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface LengthSelectorProps {
  onChange: (length: string) => void;
}

const LengthSelector: React.FC<LengthSelectorProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLength, setSelectedLength] = useState('Length');

  const lengths = ['Short', 'Medium', 'Long'];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const selectLength = (length: string) => {
    setSelectedLength(length);
    onChange(length);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-between w-full p-2 border rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
      >
        <span>{selectedLength}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg">
          {lengths.map((length, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100 text-gray-700"
              onClick={() => selectLength(length)}
            >
              {length}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LengthSelector;