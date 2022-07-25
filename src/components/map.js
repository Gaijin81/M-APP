import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

  function Map(){
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(2.35596147116408);
  const [lat] = useState(48.91813795609534);
  const [zoom] = useState(14);
  const [API_KEY] = useState('3sLdBYBljYRZg1BNPfzB');

  useEffect(() => {
      map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([2.35596147116408,48.91813795609534])
      .addTo(map.current);
  });

  return (
    <div className="map-wrap">
     <p>Bienvenue dans mon premier "vrai" projet professionnel châpeauté par Mr GIAGNORIO Raphaël.</p>
      <div ref={mapContainer} className="map" />
      
    </div>
  );
}
export default Map