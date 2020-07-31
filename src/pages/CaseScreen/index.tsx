import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';

import { FiArrowLeft } from 'react-icons/fi';

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
  category: {
    title: 'isolated' | 'injured' | 'death risk' | 'other';
  };
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
  const [theCase, setTheCase] = useState<Case>();

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/get-case/${id}`)
      .then(response => {
        setTheCase(response.data);
      })
      .catch(err => console.log(err));
  }, [navigation]);

  if (theCase) {
    return (
      <Container>
        <Link to="/dashboard">
          <FiArrowLeft color="#333" size={24} />
        </Link>
        <img src={logoImg} alt="gaia logo" />
        <CaseContainer>
          <header>
            <span className="risk">{theCase.risk}</span>
            <span className="status">{theCase.status}</span>
          </header>
          <section>
            <InfoContainer>
              <h3>Case #{theCase.id}</h3>
              <span className="category">{theCase.category.title}</span>

              <strong>Protocol generated at:</strong>
              <p>{theCase.created_at}</p>

              <strong>gaia Assistant report:</strong>
              <p>{theCase.gaia_report}</p>

              <strong>Status:</strong>
              <p>{theCase.status}</p>
            </InfoContainer>
            <MapContainer>
              <Map center={[-30.0446599, -51.2107973]} zoom={13}>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  position={[
                    theCase.location.latitude,
                    theCase.location.longitude,
                  ]}
                />
              </Map>
            </MapContainer>
          </section>
        </CaseContainer>
      </Container>
    );
  }
  return <h1 style={{ display: 'none' }}>Carregando</h1>;
};

export default CaseScreen;
