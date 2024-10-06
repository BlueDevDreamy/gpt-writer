import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Trash2 } from 'lucide-react';

interface ContextFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const ContextField: React.FC<ContextFieldProps> = ({ placeholder, value, onChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClear = () => {
    onChange('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <div className="border border-gray-200 rounded-md">
        <div className="flex justify-between items-center px-3 py-2 bg-gray-50 border-b border-gray-200">
          <button
            onClick={handleExpand}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            {isExpanded ? <ChevronUp size={16} className="mr-2" /> : <ChevronDown size={16} className="mr-2" />}
            Context
          </button>
          <button onClick={handleClear} className="text-gray-400 hover:text-gray-600">
            <Trash2 size={16} />
          </button>
        </div>
        {isExpanded && (
          <textarea
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full p-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-none rounded-b-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        )}
      </div>
    </div>
  );
};

export default ContextField;