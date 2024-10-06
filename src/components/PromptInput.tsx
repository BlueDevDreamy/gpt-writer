import React from 'react';

interface PromptInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default PromptInput;