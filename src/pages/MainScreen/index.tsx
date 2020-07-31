import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import api from '../../services/api';

import {
  Container,
  MapContainer,
  Sidebar,
  ContainerTitle,
  ContainerCases,
} from './styles';

import yellowMarkerIcon from '../../assets/marker-yellow.svg';
import redMarkerIcon from '../../assets/marker-red.svg';

import logoImg from '../../assets/logo-invert.svg';

interface Case {
  id: number;
  category: 'isolated' | 'injured' | 'death risk' | 'other';
  gaia_report: string;
  risk: string;
  location: {
    latitude: number;
    longitude: number;
  };
  created_at: string;
  status: 'pending' | 'ongoing';
}

const yellowIcon = new L.Icon({
  iconUrl: yellowMarkerIcon,
  iconRetinaUrl: yellowMarkerIcon,
  iconAnchor: [5, 55],
  iconSize: [25, 25],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
  opacity: 0.8,
});

const redIcon = new L.Icon({
  iconUrl: redMarkerIcon,
  iconRetinaUrl: redMarkerIcon,
  iconAnchor: [5, 55],
  iconSize: [25, 25],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
  opacity: 0.8,
});

const MainScreen: React.FC = navigation => {
  // const [initialPosition, setInitialPosition] = useState<[number, number]>([
  //   0,
  //   0,
  // ]);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     const { latitude, longitude } = position.coords;

  //     setInitialPosition([latitude, longitude]);
  //   });
  // }, []);

  const [emergencyCases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    api
      .get('/get-cases')
      .then(response => {
        setCases(response.data);
      })
      .catch(err => console.log(err));
  }, [navigation]);

  return (
    <Container>
      <MapContainer>
        <Map
          style={{ height: '100vh' }}
          center={[-30.0446599, -51.2107973]}
          zoom={13}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {emergencyCases?.map(emergencyCase => (
            <div className={emergencyCase.risk}>
              <Marker
                key={emergencyCase.id}
                position={[
                  emergencyCase.location.latitude,
                  emergencyCase.location.longitude,
                ]}
                icon={emergencyCase.risk === 'urgent' ? redIcon : yellowIcon}
              />
            </div>
          ))}
        </Map>
      </MapContainer>

      <Sidebar>
        <ContainerTitle>
          <img src={logoImg} alt="gaia" />
        </ContainerTitle>

        <ContainerCases>
          <Link to="/dashboard">
            <span>Risco de morte</span>
            <strong>37</strong>
          </Link>

          <Link to="/dashboard">
            <span>Feridos</span>
            <strong>40</strong>
          </Link>

          <Link to="/dashboard">
            <span>Isolados</span>
            <strong>240</strong>
          </Link>

          <Link to="/dashboard">
            <span>Outros casos</span>
            <strong>112</strong>
          </Link>
        </ContainerCases>
      </Sidebar>
    </Container>
  );
};

export default MainScreen;
