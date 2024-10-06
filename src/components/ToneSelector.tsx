import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ToneSelectorProps {
  onChange: (tone: string) => void;
}

const ToneSelector: React.FC<ToneSelectorProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTone, setSelectedTone] = useState('Writing tone');

  const tones = [
    'Auto',
    'Professional',
    'Casual',
    'Straightforward',
    'Confident',
    'Friendly',
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const selectTone = (tone: string) => {
    setSelectedTone(tone);
    onChange(tone);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-between w-full p-2 border rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
      >
        <span>{selectedTone}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg">
          {tones.map((tone, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100 text-gray-700"
              onClick={() => selectTone(tone)}
            >
              {tone}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToneSelector;