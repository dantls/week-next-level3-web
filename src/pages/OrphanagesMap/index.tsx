import React from 'react';

import { Container, Button} from './styles';

import mapMarkerImg from '../../assets/images/map-marker.svg';
import {FiPlus} from 'react-icons/fi';

import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
          <header>
            <img src={mapMarkerImg} alt="Happy"/>

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </header>

          <footer>
            <strong>Três Lagoas</strong>
            <span>Mato Grosso do Sul</span>
          </footer>
      </aside>
      <Map
        center={[-20.7897223,-51.7151246]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer 
          url={`https://api.mapbox.com.styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        /> */}
      </Map>
      <Button to="/">
        <FiPlus size={32} color="#FFF" />
      </Button>
          
    </Container>
  )
}

export default OrphanagesMap;