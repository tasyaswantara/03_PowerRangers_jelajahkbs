import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';

const MapComponent = () => {
  useEffect(() => {
    const map = L.map('map').setView([57.74, 11.94], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const waypoints = [
      L.latLng(57.74, 11.94),
      L.latLng(57.6792, 11.949)
    ];

    L.Routing.control({
      waypoints: waypoints,
      routeWhileDragging: true
    }).addTo(map);
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default MapComponent;
