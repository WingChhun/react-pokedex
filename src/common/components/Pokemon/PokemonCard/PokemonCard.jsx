import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _startCase from 'lodash/startCase';
import _noop from 'lodash/noop';

const Card = styled.div`
  height: 100%;
  width: 100%;
  max-height: ${props => (props.minHeight ? props.minHeight : '225px')};
max-height: ${props => props.maxHeight ? props.maxHeight:'250px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  //MUI Box shadow
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
max-height: ${props => props.maxHeight ? `${props.maxHeight - 50}px`: '200px'};
`;

const Name = styled.h3`
  font-size: 16px;
`;

const PokemonCard = ({ name, onClick, spriteId, maxHeight, ...rest }) => {
  const getImage = spriteId =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${spriteId}.png`;

  return (
    <Card onClick={onClick} maxHeight={maxHeight}>
      <Image src={getImage(spriteId)} alt={`${name} image`} maxHeight={maxHeight}/>
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

export default PokemonCard;
