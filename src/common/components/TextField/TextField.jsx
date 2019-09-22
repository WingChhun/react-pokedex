import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _noop from 'lodash/noop';


const Input = styled.input`
  border:2px solid red;
  width:100%;
  `;


function TextField(props) {
  const { type, onChange } = props;
  const [value, setValue] = useState(props.value);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <Input type={type} value={value} onChange={handleChange} />
  )
};


TextField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string
};

TextField.defaultProps = {
  value: '',
  type: 'text',
  onChange: _noop()
};


export default TextField;