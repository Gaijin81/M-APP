import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';





  const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 2.35596147116408;
  const lat = 48.91813795609534;
  const zoom = 14;
  const { MAP_API_KEY } = process.env;

  useEffect(() => {
      map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${MAP_API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    },[]);
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