// App.tsx
import React, { useState } from 'react';
import ContextField from './components/ContextField.tsx';
import PromptInput from './components/PromptInput.tsx';
import ModelSelector from './components/ModelSelector.tsx';
import ToneSelector from './components/ToneSelector.tsx';
import LengthSelector from './components/LengthSelector.tsx';
import EmailResponder from './components/EmailResponder.tsx';

const App: React.FC = () => {
    const [context, setContext] = useState('');
    const [prompt, setPrompt] = useState('');
    const [model, setModel] = useState('GPT 4o Mini');
    const [tone, setTone] = useState('Writing tone');
    const [length, setLength] = useState('Length');
  
    return (
      <div className="w-[400px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-white py-2 px-4 flex justify-between items-center border-b">
          <div className="flex items-center">
            <img src="/chatgpt-icon.png" alt="ChatGPT Writer" className="w-6 h-6 mr-2" />
            <span className="font-semibold text-gray-700">ChatGPT Writer</span>
            <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">PRO</span>
          </div>
          <div className="flex items-center">
            <button className="text-gray-400 hover:text-gray-600 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4">
          <ContextField
            placeholder="Add any additional information for your prompt"
            value={context}
            onChange={setContext}
          />
          <PromptInput
            placeholder="Enter your prompt for the AI"
            value={prompt}
            onChange={setPrompt}
          />
          <div className="flex space-x-2 mb-4">
            <ModelSelector onChange={setModel} />
            <ToneSelector onChange={setTone} />
            <LengthSelector onChange={setLength} />
          </div>
          <EmailResponder context={context} tone={tone} length={length} />
        </div>
      </div>
    );
  };
  
  export default App;