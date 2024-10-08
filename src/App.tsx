import React, { useState } from 'react';
import ContextField from './components/ContextField.tsx';
import PromptInput from './components/PromptInput.tsx';
import ModelSelector from './components/ModelSelector.tsx';
import ToneSelector from './components/ToneSelector.tsx';
import LengthSelector from './components/LengthSelector.tsx';
import EmailResponder from './components/EmailResponder.tsx';
import Header from './components/Header.tsx';
import { IoSend } from 'react-icons/io5';
import { FiPlus } from "react-icons/fi";


const App: React.FC = () => {
  const [context, setContext] = useState('');
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('GPT 4o Mini');
  const [tone, setTone] = useState('Writing tone');
  const [length, setLength] = useState('Length');
  const [triggerGenerate, setTriggerGenerate] = useState(false); // To trigger the email generation
  const [contextshow, setcontextshow] = useState(false); // To trigger the email generation

  const handleGenerateEmail = () => {
    setTriggerGenerate((prev) => !prev); // Toggle the state to trigger useEffect in EmailResponder
  };

  const hadleContext = () => {
    setcontextshow(true)
  }


  return (
    <div className="m-[auto] flex items-center justify-center min-h-screen bg-[rgb(216_222_233_/_0%)]">
      <div className="w-[800px] bg-white shadow-lg rounded-lg overflow-hidden">
        <Header />
        {!contextshow && <div className='cursor-pointer t-[32px] m-[35px] flex items-center text-[#222] gap-2 ml-8 rounded border border-brown w-[105px] p-1 bg-yellow text-[13px]' onClick={hadleContext}>Add Context<FiPlus /></div>}
        <div className="m-4 border border-brown rounded-custom-small">

          {contextshow &&
            <ContextField
              placeholder="Add any additional information for your prompt"
              value={context}
              onChange={setContext}
            />
          }
          <PromptInput
            placeholder="Enter your prompt for the AI"
            value={prompt}
            onChange={setPrompt}
          />
          <div className="ml-4 flex space-x-2 justify-between px-3">
            <div className='flex gap-4'>
              <ModelSelector onChange={setModel} />
              <ToneSelector onChange={setTone} />
              <LengthSelector onChange={setLength} />
            </div>
            <div>
              <button
                onClick={handleGenerateEmail} // Trigger email generation
                className="bg-gradient-to-r from-blue-300 to-blue-500 rounded-xl py-2 px-4 h-[36px]"
              >
                <IoSend color="#fff" fontSize={20} height={36} />
              </button>
            </div>
          </div>
          <EmailResponder context={context} tone={tone} length={length} triggerGenerate={triggerGenerate} />
        </div>
      </div>
    </div >
  );
};

export default App;
