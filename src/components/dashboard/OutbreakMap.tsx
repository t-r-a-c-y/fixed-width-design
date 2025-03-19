
import React, { useState } from 'react';
import MapContainer from './outbreakMap/MapContainer';
import MapLegend from './outbreakMap/MapLegend';
import ApiKeyInput from './outbreakMap/ApiKeyInput';

// Temporary API key - in production this should be stored in environment variables
const MAPBOX_API_KEY = 'pk.eyJ1IjoiZGVtby1hY2NvdW50IiwiYSI6ImNrbzBuOGZ4ZDBsNnUycG55aDk3Z3A2dnQifQ.d4v5AxFcYGyCpF1SBL2NIQ';

const OutbreakMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [apiKey, setApiKey] = useState<string>(MAPBOX_API_KEY);

  return (
    <div className="bg-white rounded-lg p-5 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Outbreak Map</h3>
        {!mapLoaded && (
          <ApiKeyInput apiKey={apiKey} setApiKey={setApiKey} />
        )}
      </div>
      
      <MapContainer 
        apiKey={apiKey} 
        mapLoaded={mapLoaded} 
        setMapLoaded={setMapLoaded} 
      />
      
      <MapLegend />
    </div>
  );
};

export default OutbreakMap;
