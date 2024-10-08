import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import chat4mini from "../assets/openai.svg"
import gpt4 from "../assets/gpt4.svg"
import gemini from "../assets/gemini.svg"
import claud from "../assets/claud.svg"
import { RxCross1 } from "react-icons/rx";


// Definición de tipos
interface Model {
  name: string;
  locked: boolean;
  icon: string;
}

interface ModelSelectorProps {
  onChange: (model: string) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<Model>({
    name: 'GPT 4o Mini',
    locked: false,
    icon: chat4mini
  });

  const models: Model[] = [
    { name: 'Sonnet 3.5', locked: true, icon: claud },
    { name: 'GPT 4o', locked: true, icon: gpt4 },
    { name: 'GPT 4o Mini', locked: false, icon: chat4mini },
    { name: 'Gemini 1.5F', locked: false, icon: gemini },
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
    <div className="relative inline-block text-left h-[30px]">
      {isOpen && (
        <div className="origin-top-right absolute mt-2 w-[150px] bottom-[35px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {models.map((model, index) => (
              <button
                key={index}
                onClick={() => selectModel(model)}
                className={`
                ${model.locked ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-yellow hover:text-gray-900'}
                group flex items-center w-full px-2 py-1 text-sm
              `}
                role="menuitem"
                disabled={model.locked}
              >
                <img src={model.icon} alt={`${model.name} icon`} className="w-6 h-6 mr-2" />
                <span className="flex-grow">{model.name}</span>
                {model.locked && <span className="ml-3 text-gray-400">🔒</span>}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className='h-[30px]'>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex justify-between items-center w-full h-[30px] rounded-md border border-yellow shadow-sm px-2 py-1 bg-yellow text-sm font-medium text-gray-700 hover:bg-yellow focus:outline-none focus:ring-0"
        >
          <img src={selectedModel.icon} alt={`${selectedModel.name} icon`} className="w-6 h-6 mr-2" />
          {/* <img src={selectedModel.icon} className="w-6 h-6 mr-2" /> */}
          <span>{selectedModel.name}</span>
          {isOpen ? <ChevronUp className="ml-2 h-5 w-5" aria-hidden="true" /> : <RxCross1 className="ml-2 h-4 w-4" aria-hidden="true" />}
        </button>
      </div>

    </div>
  );
};

export default ModelSelector;