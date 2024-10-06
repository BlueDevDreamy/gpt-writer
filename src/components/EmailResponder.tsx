import React, { useState } from 'react';
import OpenAI from 'openai';

interface EmailResponderProps {
  context: string;
  tone: string;
  length: string;
}

const EmailResponder: React.FC<EmailResponderProps> = ({ context, tone, length }) => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const generateProfessionalEmail = async () => {
    setLoading(true);
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true // Usa esto solo para desarrollo o extensiones de navegador
    });

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4", // Asegúrate de que tienes acceso a este modelo
        messages: [
          { role: "system", content: "Eres un asistente que genera respuestas de email profesionales." },
          { role: "user", content: `Contexto: ${context}\n\nTono: ${tone}\n\nLongitud: ${length}\n\nPor favor, genera una respuesta de email basada en este contexto.` }
        ],
        max_tokens: 150,
        temperature: 0.5
      });
      
      setResponse(completion.choices[0].message.content || '');
    } catch (error) {
      console.error("Error generating response:", error);
      setResponse("Error al generar la respuesta. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <button 
        onClick={generateProfessionalEmail} 
        disabled={loading}
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400"
      >
        {loading ? "Generando..." : "Generar Respuesta"}
      </button>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="font-bold mb-2">Respuesta Generada:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default EmailResponder;