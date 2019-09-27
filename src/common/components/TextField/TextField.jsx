import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _noop from 'lodash/noop';

const Input = styled.input`
  width: ${props => (props.width ? props.width : '100%')};
  padding: 4px 8px;
  height: ${props => (props.height ? props.height : '24px')};
  margin: 0 auto;
  outline: none;
  border: 1px solid gray;
  border-radius: 15px;
  margin-top: ${props => (props.marginTop ? '16px' : null)};
`;

const TextField = props => {
  const { value, type, onChange, placeholder, ...rest } = props;

  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

TextField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  context: PropTypes.string,
  placeholder: PropTypes.string
};

TextField.defaultProps = {
  value: '',
  type: 'text',
  onChange: _noop(),
  placeholder: ''
};

export default memo(TextField);
