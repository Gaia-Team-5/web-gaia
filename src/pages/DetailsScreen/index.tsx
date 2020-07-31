import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Summary, CasesContainer, Cases } from './styles';

import logoImg from '../../assets/logo.svg';

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

const DetailsScreen: React.FC = navigation => {
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
      <Summary>
        <Link to="/">
          <FiArrowLeft color="#eaeaea" size={24} />
        </Link>
        <section>
          <div>
            <span>28</span>
            <h2>pending</h2>
          </div>
          <div>
            <span>9</span>
            <h2>ongoing</h2>
          </div>
        </section>
      </Summary>
      <CasesContainer>
        <img src={logoImg} alt="gaia logo" />
        <Cases>
          {emergencyCases?.map(emergencyCase => (
            <Link
              to="/case"
              className={emergencyCase.risk}
              key={emergencyCase.id}
            >
              <div className="case-status">
                <span className="status">{emergencyCase.status}</span>
                <span className="risk">{emergencyCase.risk}</span>
              </div>
              <div className="case-info">
                <span className="timestamp">{emergencyCase.created_at}</span>
                <p>{emergencyCase.gaia_report}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          ))}
        </Cases>
      </CasesContainer>
    </Container>
  );
};

export default DetailsScreen;
