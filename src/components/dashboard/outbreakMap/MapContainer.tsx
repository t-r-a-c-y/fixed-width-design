
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { RegionData, getLevelColor, regions } from './types';
import { toast } from 'sonner';

interface MapContainerProps {
  apiKey: string;
  mapLoaded: boolean;
  setMapLoaded: (loaded: boolean) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({ apiKey, mapLoaded, setMapLoaded }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

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
  }, [apiKey, setMapLoaded]);

  return (
    <div className="relative h-[280px] w-full overflow-hidden rounded-lg">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
      
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="animate-pulse text-gray-500">Loading map...</div>
        </div>
      )}
    </div>
  );
};

export default MapContainer;
