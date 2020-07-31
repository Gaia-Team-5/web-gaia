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
  background: #24423a;
  width: 20%;
  height: 100vh;
  position: fixed;
  padding: 16px;
  left: 0;
  display: flex;
  flex-direction: column;
  color: #fff;

  > section {
    width: 100%;
    margin-top: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div {
      text-align: center;
      font-weight: bold;

      span {
        font-size: 56px;
      }

      strong {
        display: block;
        font-weight: bold;
        font-size: 24px;
      }
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
    border: 1px solid #dadada;
    border-radius: 8px;
    flex-basis: 48%;
    text-decoration: none;
    transition: transform 0.2s;
    color: #444;
    padding-bottom: 16px;

    margin-bottom: 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &:hover {
      background-color: ${shade(0.05, '#eaeaea')};
    }

    .case-status {
      display: flex;
      flex-direction: row;

      .case-tags {
        display: flex;
        flex-direction: column;

        .status {
          width: 60px;
          font-size: 0.75rem;
          color: #fff;
          padding: 8px;
          background: #363636;
          font-weight: bold;
          border-top-right-radius: 16px;
        }

        .risk {
          padding: 8px;
          width: 68px;
          font-weight: bold;
          font-size: 0.9rem;
          border-top-right-radius: 8px;
          border-bottom-left-radius: 8px;
        }
      }

      .timestamp {
        font-size: 0.8rem;
        display: block;
        font-style: italic;
        font-weight: bold;
        flex: 1;
        padding-top: 24px;
        margin-right: 20px;
        display: block;
        text-align: right;
      }
    }

    &.medium .risk {
      background: orange;
    }
    &.urgent .risk {
      background: #f83f3f;
      color: #fff;
    }
    &.ongoing .case-status .status {
      background: #6bbd5f;
    }

    .case-info {
      margin-left: 16px;
      padding: 24px 0;
      flex: 1;

      display: flex;
      justify-content: space-around;
    }

    svg {
      margin: 0 16px;
      margin-top: -40px;

      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
    }
  }
`;
