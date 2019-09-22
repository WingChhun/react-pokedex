import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _noop from 'lodash/noop';

const Input = styled.input`
  border: 2px solid red;
  width: 100%;
`;

function TextField(props) {
  const { value, type, onChange, ...rest } = props;

  return <Input type={type} value={value} onChange={onChange} {...rest} />;
}

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

export default TextField;
