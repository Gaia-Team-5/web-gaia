import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export const MapContainer = styled.section`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
  color: #333;
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
