import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Definición de tipos
interface Model {
  name: string;
  locked: boolean;
}

interface ModelSelectorProps {
  onChange: (model: string) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<Model>({
    name: 'GPT 4o Mini',
    locked: false
  });

  const models: Model[] = [
    { name: 'Sonnet 3.5', locked: true },
    { name: 'GPT 4o', locked: true },
    { name: 'GPT 4o Mini', locked: false },
    { name: 'Gemini 1.5F', locked: false },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const selectModel = (model: Model) => {
    if (!model.locked) {
      setSelectedModel(model);
      onChange(model.name);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        >
          <span>{selectedModel.name}</span>
          <ChevronDown className="ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {models.map((model, index) => (
              <button
                key={index}
                onClick={() => selectModel(model)}
                className={`
                  ${model.locked ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}
                  group flex items-center w-full px-4 py-2 text-sm
                `}
                role="menuitem"
                disabled={model.locked}
              >
                <span className="flex-grow">{model.name}</span>
                {model.locked && <span className="ml-3 text-gray-400">🔒</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelSelector;