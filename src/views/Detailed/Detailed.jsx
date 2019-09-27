import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { API, HEADERS, SAVED_POKEMON } from '../../common/constants';
import { PokemonContext } from '../../common/context';
import { PokemonCard } from '../../common/components';
import GoogleMap from '../../common/components/GoogleMap';

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
  }, [fetchLocations, mapID]);

  return [locations, setLocations];
}

const Detailed = props => {
  const [{ selected, savedPokemon }, dispatch] = useContext(PokemonContext);
  const { pokemon, id: mapID } = selected;
  const [locations, setLocations] = useMaps(mapID);
  const [detailed, setDetailed] = useState({
    height: 0,
    weight: 0,
    abilities: [],
    types: [],
    moves: []
  });

  const isChecked =
    savedPokemon.length &&
    savedPokemon.find(saved => saved.spriteId === pokemon.spriteId);

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

  const onChangeCheckbox = e =>
    dispatch({ type: SAVED_POKEMON, payload: { ...pokemon } });

  const mapProps = {
    zoom: 10,
    style: {
      width: '100%',
      height: '400px'
    },
    initialCenter: { lat: 32.734778, lng: -117.15263 }
  };

  return (
    <div className={'detailed__container'}>
      <div className={'detailed__leftContainer'}>
        <div className={'detailed__leftContainer--img'}>
          <PokemonCard
            spriteId={pokemon.spriteId}
            name={pokemon.name}
            maxHeight={'300px'}
          />
        </div>

        <div className={'detailed__leftContainer-text'}>
          <div className={'detailed__leftContainer-text--row'}>
            <h4> Height : </h4> <p>{detailed.height} </p>
          </div>

          <div className={'detailed__leftContainer-text--row'}>
            <h4> Weight :</h4> <p> {detailed.weight}</p>
          </div>

          <div className={'detailed__leftContainer-text--row'}>
            <h4> In Bag : </h4>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={onChangeCheckbox}
            />
          </div>

          <div className={'detailed__leftContainer-text--row'}>
            <h4>Type: </h4>{' '}
            <div className={'detailed__types'}>
              {detailed.types.length &&
                detailed.types.map(({ type }, id) => (
                  <p key={`${type.name}__${id}`}>{type.name}</p>
                ))}
            </div>
          </div>

          <div className={'detailed__leftContainer-text--row-text'}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            alias quo aliquam recusandae sequi laudantium, nisi ullam libero
            dolor architecto dicta quas doloribus et eos totam tenetur,
          </div>

          <div className={'detailed__leftContainer-text--row'}>
            <h4>Moves: </h4>{' '}
            <div className={'detailed__moves'}>
              {detailed.moves.length &&
                detailed.moves.map(({ move }, id) => (
                  <p key={`${move.name}__${id}`}>{move.name}</p>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div />

      <div className={'detailed__rightContainer'}>
        <div className={'detailed__rightContainer-relative'}>
          <GoogleMap locations={locations} mapProps={mapProps} />
        </div>

        <div className={'detailed__rightContainer-abilities'}>
          <h4> Abiltiies </h4>
          <div>
            {detailed.abilities.length &&
              detailed.abilities.map(({ ability }, key) => (
                <p key={key}>{ability.name}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Detailed.propTypes = {
  location: PropTypes.object
};

Detailed.defaultProps = {
  location: {}
};

export default Detailed;
