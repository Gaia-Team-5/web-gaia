import styled from 'styled-components';

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
`;

export const Sidebar = styled.section`
  position: relative;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Here comes the logo */
  h1 {
    position: absolute;
    top: 30px;
  }
`;
