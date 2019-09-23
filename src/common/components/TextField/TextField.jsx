import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _noop from 'lodash/noop';
import { PokemonContext } from '../../context';

const Input = styled.input`
  border: 2px solid red;
  width: 100%;
  padding: 8px 12px;
`;

export const TextField = props => {
  const { value, type, onChange, ...rest } = props;

  return <Input type={type} value={value} onChange={onChange} {...rest} />;
};

TextField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  context: PropTypes.string
};

TextField.defaultProps = {
  value: '',
  type: 'text',
  onChange: _noop()
};

export const PokemonTextField = props => {
  const { filterStr: value, onChangeFilter: onChange } = useContext(
    PokemonContext
  );

  return <TextField value={value} onChange={onChange} />;
};
