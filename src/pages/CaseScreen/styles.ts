import styled from 'styled-components';

export const Container = styled.div`
  background: #fefefe;

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 40px;
`;

export const CaseContainer = styled.div`
  width: 800px;
  background: #eaeaea;
  color: #333;

  display: flex;
  flex-direction: column;

  margin-top: 80px;

  header {
    background: #24423a;
    color: #fff;

    display: flex;
    justify-content: space-between;

    .risk {
      background: #c14545;

      padding: 16px;

      margin-left: 32px;
    }

    .status {
      font-weight: bold;
      padding: 16px;

      margin-right: 16px;
    }
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 32px;

  width: 48%;

  h3 {
    font-weight: bold;
  }

  .category {
    margin-bottom: 32px;
    color: #888;
  }

  strong {
    font-weight: bold;
  }

  > p {
    margin-bottom: 16px;
  }
`;

export const MapContainer = styled.div`
  display: flex;

  width: 52%;

  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;
