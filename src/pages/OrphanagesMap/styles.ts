import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;
  
  display: flex;
  
  aside {
    width: 440px;
    background: linear-gradient(329.54deg, #ABDCFF 0%, #0396FF 100%);
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }
  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    margin-top: 24px;
    line-height: 28px;
  }

  footer { 
    display: flex;
    flex-direction: column;
    line-height: 24px;

    strong {
      font-weight: 800;
    }
  }
`;

export const Button = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  width: 65px;
  height: 65px;


  background: #15C3D6;

  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background: #96FEFF;
  }
`;