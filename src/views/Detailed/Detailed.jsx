import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { API, HEADERS, SAVED_POKEMON } from '../../common/constants';
import { PokemonContext } from '../../common/context';
import { PokemonCard } from '../../common/components';
import GoogleMap from '../../common/components/GoogleMap';

const DetailedContainer = styled.div`
  border: 2px solid red;
  width: 85vw;
  height: 95vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 0.25fr 2fr;
  grid-gap: 16px;
`;

const LeftContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:1fr 2fr;
  align-items: center;
  padding: 16px 8px;
  border:2px solid orange;
`;

const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 3fr 1fr;

  align-items: center;
  padding: 16px 8px;
`;

const AbilitiesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-self: flex-start;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const TextContent = styled.div`
border:1px solid red;
display:flex;
flex-direction:column;
align-items:flex-start;
height:100%;
width:100%;

`;

const Row = styled.div`
border:1px solid red;
display:flex;
width:100%;

margin-bottom:8px;

&:last-child{
  margin-bottom:0;
}

`;

const ImgContainer = styled.div`
border:1px solid pink;
width:100%;
height:100%;

`;



//Note: disable prettier before saving
function useMaps(mapID) {
  const [locations, setLocations] = useState([]);

  async function fetchLocations() {
    try {
      const res = await fetch(`${API.LOCATION}/${mapID}`, {
        headers: HEADERS
      });
      const { locations } = await res.json();

      setLocations(locations);
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    fetchLocations();
  }, [mapID]);

  return [locations, setLocations];
}

const Detailed = props => {
  const [{selected, savePokemon}, dispatch] = useContext(PokemonContext);
  const { pokemon, id:mapID } = selected;
  const [locations, setLocations] = useMaps(mapID);
  const [detailed, setDetailed] = useState({});

  useEffect(() => {
    async function fetchDetailed() {
      try {
        const res = await fetch(pokemon.url);
        const { height, weight, abilities, types, moves } = await res.json();

        setDetailed({
          height,
          weight,
          abilities,
          types,
          moves
        });
      } catch (err) {
        console.warn('Error fetching detailed Pokemon request');
      }
    }

    fetchDetailed();
  }, [pokemon.url]);

  const onClickCheckbox = (e) => 
dispatch({type:SAVED_POKEMON, payload:pokemon});
  

  const mapProps = {
    zoom: 10,
    style: {
      width: '100%',
      height: '100%',
      maxHeight: 400
    },
    initialCenter: { lat: 32.734778, lng: -117.15263 }
  };

  return (
    <DetailedContainer>
      <LeftContainer>
        
        <ImgContainer>
<PokemonCard spriteId={pokemon.spriteId} name = {pokemon.name} maxHeight={'400px'}/>
</ImgContainer>

<TextContent>
<Row>Height : {detailed.height}</Row>
<Row>Weight : {detailed.weight}</Row>
 <Row>In Bag : <input type='checkbox' onClick = {onClickCheckbox}/></Row>
<Row>Type: TODO: array of types</Row>

<Row>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita alias quo aliquam recusandae sequi laudantium, nisi ullam libero dolor architecto dicta quas doloribus et eos totam tenetur, quibusdam harum provident? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint porro, incidunt molestias cum quasi vitae ut error aspernatur explicabo natus eum consequatur deleniti mollitia eius rem laborum? Impedit, harum odio.</Row>

</TextContent>
      </LeftContainer>
      
      <div/>
      <RightContainer>
        <MapContainer>
          <GoogleMap locations={locations} mapProps={mapProps} />
        </MapContainer>

        <AbilitiesContainer>Abilities Container here</AbilitiesContainer>
      </RightContainer>
    </DetailedContainer>
  );
};

Detailed.propTypes = {
  location: PropTypes.object
};

Detailed.defaultProps = {
  location: {}
};

export default Detailed;
