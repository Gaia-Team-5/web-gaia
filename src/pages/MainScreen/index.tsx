import React, { useState, useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';

import { Container, MapContainer, Sidebar } from './styles';

const MainScreen: React.FC = () => {
  /* const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []); */

  return (
    <Container>
      <MapContainer>
        <Map center={[-30.0446599, -51.2107973]} zoom={15}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </MapContainer>

      <Sidebar>
        <h1>GaIA</h1>

        <div>
          <h2>Barra </h2>
        </div>
      </Sidebar>
    </Container>
  );
};

export default MainScreen;
