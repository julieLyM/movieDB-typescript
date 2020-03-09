import styled from 'styled-components';
import { device } from './MediaQueries';

export const ContainerSearchBar = styled.div`
  margin: 0 auto;
  position: relative;
`;

export const InputSearchBar = styled.input`
  width: 360px;
  height: 50px;
  font-size: 16px;
  @media (${device.mobileL}) {
    width: 50%;
  }
`;

export const ContainerSearchRes = styled.div`
  display: flex;
  justifycontent: flex-start;
  font-size: 14px;
  a {
    color: black;
    text-decoration: none;
  }
  @media (${device.mobileL}) {
    width: 30%;
  }
`;
