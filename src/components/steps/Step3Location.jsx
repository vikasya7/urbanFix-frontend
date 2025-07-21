import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Step3Location = ({ data, setData, next, back }) => {
  const [coords, setCoords] = useState({
    lat: data.lat || 26.85,
    lon: data.lon || 80.95,
  });
  const [address, setAddress] = useState(data.address || 'Detecting...');

  // Reverse Geocode on coordinate change
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${coords.lat}+${coords.lon}&key=64ebe739cdb14a1caca39c9b5d45aa03`
        );
        const data = await res.json();
        const formatted = data?.results[0]?.formatted;
        setAddress(formatted || 'Location not found');
        setData((prev) => ({
          ...prev,
          lat: coords.lat,
          lon: coords.lon,
          address: formatted || '',
        }));
      } catch {
        setAddress('Error fetching address');
      }
    };

    fetchAddress();
  }, [coords, setData]);

  const handleMarkerDrag = (e) => {
    const { lat, lng } = e.target.getLatLng();
    setCoords({ lat, lon: lng });
  };

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold">Select Issue Location</h2>

      {/* Map */}
      <div className="h-64 rounded overflow-hidden">
        <MapContainer center={[coords.lat, coords.lon]} zoom={15} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          <Marker
            position={[coords.lat, coords.lon]}
            icon={markerIcon}
            draggable={true}
            eventHandlers={{ dragend: handleMarkerDrag }}
          />
        </MapContainer>
      </div>

      {/* Address Preview */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Detected Address</label>
        <input
          type="text"
          value={address}
          readOnly
          className="w-full px-3 py-2 rounded border bg-gray-100 text-gray-700"
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <button onClick={back} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          Back
        </button>
        <button onClick={next} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3Location;



