import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _startCase from 'lodash/startCase';
import _noop from 'lodash/noop';

const Card = styled.div`
  height: 100%;
  width: 100%;
  min-height: 200px;
  border: 2px solid orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  //todo: this could be added to theme(MUI box shadow)
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 200px;

  border: 1.5px dotted red;
`;

const Name = styled.h3`
  font-size: 16px;
`;

const PokemonCard = ({ name, onClick, spriteId }) => {
  const getImage = spriteId =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteId}.png`;

  return (
    <Card onClick={onClick}>
      <Image src={getImage(spriteId)} alt={`${name} image`} />
      <Name>{_startCase(name)}</Name>
    </Card>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  spriteId: PropTypes.number
};
PokemonCard.defaultProps = {
  name: '',
  onClick: _noop(),
  spriteId: 1
};

export default memo(PokemonCard);
