import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import L from "leaflet";
import "./MapPage.css";

// Fix for default markers in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});

// Custom hospital icon
const hospitalIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
  className: "hospital-marker"
});

// Component to locate user and fetch nearby hospitals
function LocationAndHospitalsFinder({ setHospitals }) {
  const map = useMap();
  const [userLocation, setUserLocation] = useState(null);
  
  useEffect(() => {
    // Locate the user
    map.locate({ setView: true, maxZoom: 13 });
    
    // Event handler when location is found
    function onLocationFound(e) {
      const { lat, lng } = e.latlng;
      setUserLocation({ lat, lng });
      fetchNearbyHospitals(lat, lng);
    }
    
    // Event handler when location error occurs
    function onLocationError() {
      console.error("Could not find location");
      alert("Could not access your location. Please enable location services.");
    }
    
    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
    
    // Cleanup event listeners
    return () => {
      map.off('locationfound', onLocationFound);
      map.off('locationerror', onLocationError);
    };
  }, [map, setHospitals]);
  
  // Function to fetch nearby hospitals using Overpass API
  async function fetchNearbyHospitals(lat, lng) {
    try {
      // The radius for search in meters (3000m = 3km)
      const radius = 3000;
      
      // Overpass API query to find hospitals
      const query = `
        [out:json];
        node["amenity"="hospital"](around:${radius},${lat},${lng});
        out body;
      `;
      
      const apiUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data && data.elements) {
        // Process hospital data
        const hospitalData = data.elements.map(hospital => ({
          id: hospital.id,
          name: hospital.tags.name || 'Unnamed Hospital',
          lat: hospital.lat,
          lng: hospital.lon,
          phone: hospital.tags.phone || 'Not available',
          website: hospital.tags.website || '',
          address: hospital.tags.address || 'Address not available',
          distance: calculateDistance(lat, lng, hospital.lat, hospital.lon)
        }));
        
        // Sort hospitals by distance
        hospitalData.sort((a, b) => a.distance - b.distance);
        
        // Update state with hospital data
        setHospitals(hospitalData);
        
        // Add markers to the map
        hospitalData.forEach(hospital => {
          const marker = L.marker([hospital.lat, hospital.lng], { icon: hospitalIcon })
            .bindPopup(`
              <strong>${hospital.name}</strong><br>
              Distance: ${hospital.distance.toFixed(2)} km<br>
              ${hospital.phone ? `Phone: ${hospital.phone}<br>` : ''}
              ${hospital.website ? `<a href="${hospital.website}" target="_blank">Website</a>` : ''}
            `);
          
          marker.addTo(map);
        });
      }
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
  }
  
  // Calculate distance between two coordinates in kilometers
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; // Distance in km
    return distance;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180);
  }
  
  return userLocation ? (
    <Marker position={[userLocation.lat, userLocation.lng]}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null;
}

// Hospital list component
const HospitalList = ({ hospitals }) => {
  if (!hospitals.length) {
    return <div className="hospitals-loading">Searching for nearby hospitals...</div>;
  }
  
  return (
    <div className="hospitals-list-container">
      <h3>Nearby Hospitals ({hospitals.length} found)</h3>
      <div className="hospitals-list">
        {hospitals.map(hospital => (
          <div key={hospital.id} className="hospital-card">
            <h4>{hospital.name}</h4>
            <p><strong>Distance:</strong> {hospital.distance.toFixed(2)} km</p>
            <p><strong>Phone:</strong> {hospital.phone}</p>
            {hospital.website && (
              <p><strong>Website:</strong> <a href={hospital.website} target="_blank" rel="noopener noreferrer">Visit website</a></p>
            )}
            <p><strong>Address:</strong> {hospital.address}</p>
            <button className="direction-btn" onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${hospital.lat},${hospital.lng}`, '_blank')}>
              Get Directions
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const MapPage = () => {
  const [hospitals, setHospitals] = useState([]);
  
  return (
    <motion.div
      className="map-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="map-title">Fitness & Hospital Finder</h2>
      <MapContainer
        center={[20.5937, 78.9629]} // Default to India's center
        zoom={5}
        scrollWheelZoom={true}
        className="leaflet-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationAndHospitalsFinder setHospitals={setHospitals} />
      </MapContainer>
      
      <HospitalList hospitals={hospitals} />
    </motion.div>
  );
};

export default MapPage;