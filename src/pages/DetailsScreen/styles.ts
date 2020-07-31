import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: stretch;
  justify-content: center;

  position: relative;
`;

export const Summary = styled.div`
  background: #2e2e2e;
  width: 20%;
  height: 100vh;
  position: fixed;
  padding: 16px;
  left: 0;
  display: flex;
  flex-direction: column;
  color: #fefefe;

  > section {
    width: 100%;
    margin-top: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      text-align: center;
      margin-bottom: 40px;
    }
  }
`;

export const CasesContainer = styled.div`
  background: #fefefe;
  width: 80%;
  margin-left: 20%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
`;

export const Cases = styled.div`
  width: 720px;
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  a {
    background: #eaeaea;
    border-radius: 5px;
    flex-basis: 48%;
    padding: 24px 0;
    text-decoration: none;
    transition: transform 0.2s;
    color: #444;

    margin-bottom: 16px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    > span {
      padding: 8px;
    }

    &.medium > span {
      background: orange;
    }
    &.urgent > span {
      background: #c14545;
      color: #fff;
    }

    .case-info {
      margin-left: 16px;
      flex: 1;

      .timestamp {
        font-size: 0.8rem;
      }
    }

    svg {
      margin-right: 16px;
    }
  }
`;
