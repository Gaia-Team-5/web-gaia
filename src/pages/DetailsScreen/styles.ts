import styled from 'styled-components';

import { shade } from 'polished';

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

  > a {
    background: #eaeaea;
    border-radius: 5px;
    flex-basis: 48%;
    text-decoration: none;
    transition: transform 0.2s;
    color: #444;

    margin-bottom: 16px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    &:hover {
      background-color: ${shade(0.05, '#eaeaea')};
    }

    .case-status {
      display: flex;
      flex-direction: column;

      .status {
        width: 60px;
        font-size: 0.75rem;
        color: #999;
        padding: 4px 8px;
        background: #333;
      }

      .risk {
        padding: 8px;
        width: 68px;
        font-weight: bold;
        font-size: 0.9rem;
      }
    }

    &.medium .risk {
      background: orange;
    }
    &.urgent .risk {
      background: #c14545;
      color: #fff;
    }

    .case-info {
      margin-left: 16px;
      padding: 24px 0;
      flex: 1;

      .timestamp {
        font-size: 0.8rem;
        display: block;
        font-style: italic;
        margin-bottom: 8px;
      }
    }

    svg {
      margin: 0 16px;

      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
    }
  }
`;
