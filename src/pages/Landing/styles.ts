import styled from 'styled-components';
import { Link } from 'react-router-dom';

import landingImage from '../../assets/images/landing.svg';


export const Container = styled.div`

  background: linear-gradient(329.54deg, #ABDCFF 0%, #0396FF 100%);
  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;
  
  height: 100%;
  max-height: 700px;

  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landingImage}) no-repeat right center;
`;


export const Main = styled.div`
  max-width: 350px;

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }
  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
  

`;
export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  
  strong {
    font-weight: 800;
  }


`;
export const Button = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 75px;
  height: 75px;


  background: #15C3D6;
  /* background: #76C6FF; */
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background: #96FEFF;
  }
`;