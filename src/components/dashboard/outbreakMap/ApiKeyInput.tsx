
import React from 'react';
import { toast } from 'sonner';

interface ApiKeyInputProps {
  apiKey: string;
  setApiKey: (key: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ apiKey, setApiKey }) => {
  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const handleUseCustomApiKey = () => {
    toast.info("Please enter your Mapbox API key", {
      description: "Get your API key from mapbox.com dashboard",
      duration: 5000,
    });
  };

  return (
    <>
      {!apiKey && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your Mapbox API key"
            value={apiKey}
            onChange={handleApiKeyChange}
            className="w-full p-2 text-sm border border-gray-300 rounded-md"
          />
          <p className="text-xs text-gray-500 mt-1">
            Get your API key from mapbox.com dashboard
          </p>
        </div>
      )}
      <button 
        onClick={handleUseCustomApiKey} 
        className="text-xs text-blue-500 hover:underline"
      >
        Use custom API key
      </button>
    </>
  );
};

export default ApiKeyInput;
