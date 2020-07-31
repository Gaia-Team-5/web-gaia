import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const MapContainer = styled.section`
  width: 70%;
  background-color: #eaeaea;
  color: #333;
  overflow: hidden;

  .leaflet-container {
    width: 100%;
    height: 100vh;
  }

  img {
    opacity: 0.9;
  }
`;

export const Sidebar = styled.section`
  position: relative;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: #24423a;
`;

/* Here comes the logo */
export const ContainerTitle = styled.div`
  max-height: 10px;
`;

export const ContainerCases = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  margin-top: 10px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: #f4ede8;
    width: 240px;
    padding: 10px 0;
    border-radius: 5px;
    margin-top: 15px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#f4ede8')};
    }

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      color: #000;
    }

    strong {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 56px;
      margin-top: 10px;
      color: #c14545;
    }
  }
`;
