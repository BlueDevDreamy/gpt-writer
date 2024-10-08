import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { ImBin2 } from "react-icons/im";
import { BsArrowReturnRight } from "react-icons/bs";

interface ContextFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const ContextField: React.FC<ContextFieldProps> = ({ placeholder, value, onChange }) => {

  const handleClear = () => {
    onChange('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-2 border-b border-brown p-2">
      <div className="rounded-md">
        <div className="flex justify-between items-center px-2 py-2 bg-gray-50 ">
          <button
            className="flex items-center text-[#222]-800 hover:text-gray-800"
          >
            <BsArrowReturnRight size={16} className="mr-2 text-[#222]" />
            Context
          </button>
          <button onClick={handleClear} className="text-gray-400 hover:text-gray-600">
            <ImBin2 size={16} />
          </button>
        </div>
        <input
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-4 pb-4 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
};

export default ContextField;
