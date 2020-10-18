import React from 'react';

import { Container ,Content, Main, Location, Button} from './styles';

import LogoImg from '../../assets/images/logo.svg';
import {FiArrowRight} from 'react-icons/fi';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Logo" />

        <Main>
          <h1>Leve Felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </Main>

        <Location>
          <strong>Três Lagoas</strong>
          <span>Mato Grosso do Sul</span>
        </Location>

      <Button to="">
        <FiArrowRight size={32} color="#FFF"/>
      </Button>
      </Content>
    </Container>
  )
}

export default Landing;