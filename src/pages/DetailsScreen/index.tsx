import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Summary, CasesContainer, Cases } from './styles';

const DetailsScreen: React.FC = () => {
  return (
    <Container>
      <Summary>
        <h1>Summary</h1>
      </Summary>
      <CasesContainer>
        <Cases>
          <Link to="/case">
            <span>Urgent</span>
            <div className="case-info">
              <span className="timestamp">08:05:35PM</span>
              <p>At home</p>
            </div>
          </Link>

          <Link to="/case">
            <span>Urgent</span>
            <div className="case-info">
              <span className="timestamp">08:05:35PM</span>
              <p>At home</p>
            </div>
          </Link>

          <Link to="/case">
            <span>Urgent</span>
            <div className="case-info">
              <span className="timestamp">08:05:35PM</span>
              <p>At home</p>
            </div>
          </Link>

          <Link to="/case">
            <span>Urgent</span>
            <div className="case-info">
              <span className="timestamp">08:05:35PM</span>
              <p>At home</p>
            </div>
          </Link>

          <Link to="/case">
            <span>Urgent</span>
            <div className="case-info">
              <span className="timestamp">08:05:35PM</span>
              <p>At home</p>
            </div>
          </Link>

          <Link to="/case">
            <span>Urgent</span>
            <div className="case-info">
              <span className="timestamp">08:05:35PM</span>
              <p>At home</p>
            </div>
          </Link>

          <Link to="/case">
            <span>Urgent</span>
            <div className="case-info">
              <span className="timestamp">08:05:35PM</span>
              <p>At home</p>
            </div>
          </Link>

          <Link to="/case">
            <span>Urgent</span>
            <div className="case-info">
              <span className="timestamp">08:05:35PM</span>
              <p>At home</p>
            </div>
          </Link>

          <Link to="/case">
            <span>Urgent</span>
            <div className="case-info">
              <span className="timestamp">08:05:35PM</span>
              <p>At home</p>
            </div>
          </Link>

          <Link to="/case">
            <span>Urgent</span>
            <div className="case-info">
              <span className="timestamp">08:05:35PM</span>
              <p>At home</p>
            </div>
          </Link>
        </Cases>
      </CasesContainer>
    </Container>
  );
};

export default DetailsScreen;
