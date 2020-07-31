import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Summary, CasesContainer, Cases } from './styles';

import logoImg from '../../assets/logo.svg';

interface Case {
  id: number;
  category: 'isolated' | 'injured' | 'death risk' | 'other';
  assistant_report: string;
  risk: string;
  location: {
    latitude: number;
    longitude: number;
  };
  created_at: string;
  status: 'pending' | 'ongoing';
}

const DetailsScreen: React.FC = () => {
  // const [cases, setCases] = useState<Case[]>();

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
          <Link to="/case" className="medium">
            <span>Medium</span>
            <div className="case-info">
              <span className="timestamp">08:05:35PM</span>
              <p>At home</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
          <Link to="/case" className="urgent">
            <span>Urgent</span>
            <div className="case-info">
              <span className="timestamp">08:07:12</span>
              <p>In a car roof</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        </Cases>
      </CasesContainer>
    </Container>
  );
};

export default DetailsScreen;
