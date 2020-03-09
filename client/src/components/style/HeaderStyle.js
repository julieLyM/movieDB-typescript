import styled from 'styled-components';
import { device } from './MediaQueries';

export const ContainerHeader = styled.div`
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: space-between;
  padding: 0 8%;
  @media (${device.tablet}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-size: 34px;
  color: yellow;
  a {
    color: yellow;
    text-decoration: none;
    font-weight: 900;
  }
  @media (${device.mobileL}) {
    font-size: 24px;
    text-align: center;
  }
`;

export const ContainerTitle = styled.div``;

export const ContainerSearch = styled.div``;
