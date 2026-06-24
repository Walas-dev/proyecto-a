"use client";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapaProps {
  lat: number;
  lng: number;
  zoom?: number;
}

export default function Mapa({ lat, lng, zoom = 15 }: MapaProps) {
  const posicion: [number, number] = [lat, lng];

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={posicion}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
        
        <CircleMarker 
          center={posicion} 
          pathOptions={{ 
            color: '#10b981',      
            fillColor: '#10b981',  
            fillOpacity: 0.7,      
            weight: 2              
          }} 
          radius={12}
        >
          <Popup>
             Urb. Jorge Coll <br /> Pampatar, Nueva Esparta
          </Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}