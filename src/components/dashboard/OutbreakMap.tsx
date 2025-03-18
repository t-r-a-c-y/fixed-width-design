
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { toast } from 'sonner';

// Temporary API key - in production this should be stored in environment variables
const MAPBOX_API_KEY = 'pk.eyJ1IjoiZGVtby1hY2NvdW50IiwiYSI6ImNrbzBuOGZ4ZDBsNnUycG55aDk3Z3A2dnQifQ.d4v5AxFcYGyCpF1SBL2NIQ';

interface RegionData {
  id: string;
  name: string;
  level: 'high' | 'moderate' | 'low' | 'recovered';
  coordinates: [number, number];
  cases: number;
}

const regions: RegionData[] = [
  { id: '1', name: 'United States', level: 'moderate', coordinates: [-95.7129, 37.0902], cases: 2500 },
  { id: '2', name: 'Brazil', level: 'high', coordinates: [-51.9253, -14.2350], cases: 3800 },
  { id: '3', name: 'United Kingdom', level: 'low', coordinates: [-3.4360, 55.3781], cases: 860 },
  { id: '4', name: 'China', level: 'high', coordinates: [104.1954, 35.8617], cases: 4200 },
  { id: '5', name: 'India', level: 'high', coordinates: [78.9629, 20.5937], cases: 5100 },
  { id: '6', name: 'Australia', level: 'low', coordinates: [133.7751, -25.2744], cases: 310 },
  { id: '7', name: 'South Africa', level: 'moderate', coordinates: [22.9375, -30.5595], cases: 1750 },
  { id: '8', name: 'Japan', level: 'recovered', coordinates: [138.2529, 36.2048], cases: 990 },
  { id: '9', name: 'Russia', level: 'moderate', coordinates: [105.3188, 61.5240], cases: 2100 },
  { id: '10', name: 'Canada', level: 'recovered', coordinates: [-106.3468, 56.1304], cases: 580 }
];

const getLevelColor = (level: RegionData['level']): string => {
  switch (level) {
    case 'high':
      return '#FF6B6B'; // red
    case 'moderate':
      return '#FEC6A1'; // soft orange
    case 'low':
      return '#4CD964'; // green
    case 'recovered':
      return '#20C997'; // teal
    default:
      return '#8E9196'; // neutral gray
  }
};

const OutbreakMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [apiKey, setApiKey] = useState<string>(MAPBOX_API_KEY);

  useEffect(() => {
    mapboxgl.accessToken = apiKey;

    if (!mapContainer.current) return;

    // Initialize map
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [0, 20],
      zoom: 1.5,
      projection: 'globe',
      attributionControl: false
    });

    map.current = newMap;

    // Handle map load
    newMap.on('load', () => {
      setMapLoaded(true);
      
      // Add atmosphere and fog effects
      newMap.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });

      // Add the markers for each region
      regions.forEach(region => {
        // Create custom marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'region-marker';
        markerElement.style.width = '22px';
        markerElement.style.height = '22px';
        markerElement.style.borderRadius = '50%';
        markerElement.style.backgroundColor = getLevelColor(region.level);
        markerElement.style.border = '2px solid white';
        markerElement.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
        markerElement.style.cursor = 'pointer';
        
        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div style="font-family: 'Inter', sans-serif; padding: 0.5rem;">
              <h4 style="margin: 0 0 0.5rem; font-size: 0.9rem; font-weight: 600;">${region.name}</h4>
              <p style="margin: 0 0 0.25rem; font-size: 0.8rem; color: #666;">
                Status: <span style="color: ${getLevelColor(region.level)}; font-weight: 500;">${region.level.charAt(0).toUpperCase() + region.level.slice(1)}</span>
              </p>
              <p style="margin: 0; font-size: 0.8rem; color: #666;">Cases: ${region.cases.toLocaleString()}</p>
            </div>
          `);
          
        // Add marker
        new mapboxgl.Marker(markerElement)
          .setLngLat(region.coordinates)
          .setPopup(popup)
          .addTo(newMap);
      });

      toast.success("Map loaded successfully");
    });

    // Add rotation animation
    const secondsPerRevolution = 240;
    const maxSpinZoom = 3;
    let userInteracting = false;
    
    function spinGlobe() {
      if (!map.current || userInteracting) return;
      
      const zoom = map.current.getZoom();
      if (zoom < maxSpinZoom) {
        const distancePerSecond = 360 / secondsPerRevolution;
        const center = map.current.getCenter();
        center.lng -= distancePerSecond / 30; // Adjust for frame rate
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    // Event listeners for interaction
    newMap.on('mousedown', () => {
      userInteracting = true;
    });
    
    newMap.on('mouseup', () => {
      userInteracting = false;
    });
    
    newMap.on('moveend', () => {
      spinGlobe();
    });

    // Start the globe spinning after a short delay
    const rotationTimeout = setTimeout(() => {
      spinGlobe();
    }, 1500);

    // Cleanup
    return () => {
      clearTimeout(rotationTimeout);
      if (map.current) {
        map.current.remove();
      }
    };
  }, [apiKey]);

  // Handle API key input change
  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  // If the default API key doesn't work, show an input to let the user enter their own
  const handleUseCustomApiKey = () => {
    toast.info("Please enter your Mapbox API key", {
      description: "Get your API key from mapbox.com dashboard",
      duration: 5000,
    });
  };

  return (
    <div className="bg-white rounded-lg p-5 animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Outbreak Map</h3>
        {!mapLoaded && (
          <button 
            onClick={handleUseCustomApiKey} 
            className="text-xs text-blue-500 hover:underline"
          >
            Use custom API key
          </button>
        )}
      </div>
      
      {!mapLoaded && !MAPBOX_API_KEY && (
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
      
      <div className="relative h-[280px] w-full overflow-hidden rounded-lg">
        <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
        
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="animate-pulse text-gray-500">Loading map...</div>
          </div>
        )}
      </div>
      
      <div className="flex justify-between mt-4 pt-4 border-t">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <p className="text-sm">High</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
          <p className="text-sm">Moderate</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
          <p className="text-sm">Low</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-teal-400 mr-2"></div>
          <p className="text-sm">Recovered</p>
        </div>
      </div>
    </div>
  );
};

export default OutbreakMap;
