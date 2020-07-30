import React from 'react';

import { Container, MapContainer, Sidebar } from './styles';

const MainScreen: React.FC = () => {
  return (
    <Container>
      <MapContainer>
        <h2>Mapa</h2>
      </MapContainer>

      <Sidebar>
        <h1>GaIA</h1>

        <div>
          <h2>Barra lateral</h2>
        </div>
      </Sidebar>
    </Container>
  );
};

export default MainScreen;
