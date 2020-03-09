import styled from 'styled-components';
import { device } from './MediaQueries';

export const ContainerSearchBar = styled.div`
  position: relative;
  display: flex;
  /* margin: 0 auto; */
  justify-content: space-between;
`;

export const InputSearchBar = styled.input`
  width: 360px;
  height: 50px;
  font-size: 22px;
  @media (${device.mobileL}) {
    width: 100%;
    font-size: 18px;
  }
`;

export const ContainerSearchRes = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  width: 50%;
  align-content: center;
  && a {
    color: black;
    text-decoration: none;
  }
  @media (${device.mobileL}) {
    width: 50%;
  }
`;

export const imgClean = styled.img`
  width: 4%;
  height: 2%;
  padding: 3%;
  @media (${device.mobileL}) {
    width: 50%;
  }
`;
