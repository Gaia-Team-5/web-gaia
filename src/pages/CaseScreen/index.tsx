import React, { useState, useEffect } from 'react';

import { Map, TileLayer, Marker } from 'react-leaflet';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import {
  Container,
  CaseContainer,
  InfoContainer,
  MapContainer,
} from './styles';

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

const CaseScreen: React.FC = navigation => {
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
      <img src={logoImg} alt="gaia logo" />
      <CaseContainer>
        <header>
          <span className="risk">urgent</span>
          <span className="status">ongoing</span>
        </header>
        <section>
          <InfoContainer>
            <h3>Case #1</h3>
            <span className="category">ISOLATED PERSON</span>

            <strong>Protocol generated at:</strong>
            <p>14:17:05 - 31/07/20</p>

            <strong>gaia Assistant report:</strong>
            <p>
              Family isolated at house, can’t get out. Risk of water getting in.
            </p>

            <strong>Status:</strong>
            <p>Rescue team is on its way.</p>
          </InfoContainer>
          <MapContainer>
            <Map center={[-30.0446599, -51.2107973]} zoom={13}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={[-30.0446599, -51.2107973]} />
            </Map>
          </MapContainer>
        </section>
      </CaseContainer>
    </Container>
  );
};

export default CaseScreen;
