import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import redMarker from '../../assets/case-pin.svg';

import {
  Container,
  CaseContainer,
  InfoContainer,
  MapContainer,
} from './styles';

const redPin = new L.Icon({
  iconUrl: redMarker,
  iconRetinaUrl: redMarker,
  iconAnchor: [5, 55],
  iconSize: [25, 25],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92],
});

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
  action_taken: string;
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
          <header className={`${theCase.risk} ${theCase.status}`}>
            <span className="risk">{theCase.risk}</span>
            <span className="status">{theCase.status}</span>
          </header>
          <section>
            <InfoContainer>
              <h3>Case #{theCase.id}</h3>
              <span className="category">{theCase.category.title}</span>

              <strong>Protocol generated at:</strong>
              <p>
                {new Date(theCase.created_at).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </p>

              <strong>gaia Assistant report:</strong>
              <p>{theCase.gaia_report}</p>

              <strong>Status:</strong>
              <p className="case-status">{theCase.status}</p>

              <strong>Performed actions:</strong>
              <p>{theCase.action_taken}</p>
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
                  icon={redPin}
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
