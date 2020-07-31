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
    width: 240px;
    padding: 10px 0;
    border-radius: 8px;
    margin-top: 15px;
    box-shadow: 2px 4px 7px 4px rgba(0, 0, 0, 0.27);

    span {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 18px;
    }

    strong {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 65px;
      margin-top: 10px;
    }
  }

  #deathRisk {
    background-color: #f73e3e;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#F73E3E')};
    }

    span {
      color: #fff;
    }
    strong {
      color: #fff;
    }
  }

  #injured {
    background-color: #fbf564;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#FBF564')};
    }

    span {
      color: #010101;
    }
    strong {
      color: #010101;
    }
  }

  #isolated {
    background-color: #f2fcf3;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#F2FCF3')};
    }

    span {
      color: #24423a;
    }
    strong {
      color: #24423a;
    }
  }

  #others {
    background-color: #828080;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#828080')};
    }

    span {
      color: #fff;
    }
    strong {
      color: #fff;
    }
  }
`;

export const ContainerStatusSituation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    cursor: default;

    span {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 18px;
      color: #fff;
    }

    strong {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 65px;
      margin-top: 10px;
      color: #fff;
    }
  }
`;
