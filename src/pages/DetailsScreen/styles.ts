import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: stretch;
  justify-content: center;
`;

export const Summary = styled.div`
  background: #24423a;
  width: 20%;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fefefe;
`;

export const CasesContainer = styled.div`
  background: #fefefe;
  width: 80%;
  margin-left: 20%;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
`;

export const Cases = styled.div`
  width: 720px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  a {
    background: #eaeaea;
    border-radius: 5px;
    flex-basis: 48%;
    padding: 24px;
    text-decoration: none;
    transition: transform 0.2s;

    margin-bottom: 16px;
  }
`;
