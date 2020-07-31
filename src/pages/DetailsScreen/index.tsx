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
            <strong>pending</strong>
          </div>
          <div>
            <span>9</span>
            <strong>ongoing</strong>
          </div>
        </section>
      </Summary>
      <CasesContainer>
        <img src={logoImg} alt="gaia logo" />
        <Cases>
          {emergencyCases?.map(emergencyCase => (
            <Link
              to={`/case/${emergencyCase.id}`}
              className={`${emergencyCase.risk} ${emergencyCase.status}`}
              key={emergencyCase.id}
            >
              <div className="case-status">
                <div className="case-tags">
                  <span className="status">{emergencyCase.status}</span>
                  <span className="risk">{emergencyCase.risk}</span>
                </div>
                <span className="timestamp">
                  {new Date(emergencyCase.created_at).toLocaleDateString(
                    'en-US',
                    {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    },
                  )}
                </span>
              </div>
              <div className="case-info">
                <p>{emergencyCase.gaia_report}</p>
                <FiChevronRight size={20} />
              </div>
            </Link>
          ))}
        </Cases>
      </CasesContainer>
    </Container>
  );
};

export default DetailsScreen;
