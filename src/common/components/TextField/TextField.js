import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _noop from 'lodash/noop';


const Input = styled.input`
  border:2px solid red;
  width:100%;
  `;


function TextField(props) {
  const [value, setValue] = useState(props.value);

  const handleChange = (e) => setValue(e.target.value);

  return (
    <Input value={value} onChange={handleChange} />
  )
};


TextField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};

TextField.defaultProps = {
  value: '',
  onChange: _noop()
};


export default TextField;