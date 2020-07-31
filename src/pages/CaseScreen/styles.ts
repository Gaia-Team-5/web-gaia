import styled from 'styled-components';

export const Container = styled.div`
  background: #f2fcf3;

  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 40px;

  > a {
    position: absolute;

    top: 16px;
    left: 16px;
  }
`;

export const CaseContainer = styled.div`
  width: 800px;
  background: #eaeaea;
  color: #333;

  border-radius: 8px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  margin-top: 80px;

  box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.2);

  header {
    background: #24423a;
    color: #fff;

    display: flex;
    justify-content: space-between;

    &.urgent .risk {
      background: #f83f3f;
    }
    &.medium .risk {
      background: #ffa500;
      color: #333;
    }

    .risk {
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
    text-transform: uppercase;
  }

  strong {
    font-weight: bold;
  }

  > p {
    margin-bottom: 16px;
  }

  p.case-status {
    text-transform: capitalize;
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
