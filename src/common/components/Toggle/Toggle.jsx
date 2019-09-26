import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _noop from 'lodash/noop';

//todo: move to new folder for elements
const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #44ebff;
  display: flex;
  align-items: center;
  height: 32px;
`;

//todo: add transition
const Option = styled.div`
  background-color: ${props =>
    props.selected ? 'rgba(68, 235, 255, 0.7)' : null};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Toggle({ checked, onClick }) {
  return (
    <Container onClick={onClick}>
      <Option selected={!checked}>All</Option>
      <Option selected={checked}>Bag</Option>
    </Container>
  );
}

Toggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
Toggle.defaultProps = {
  onClick: _noop(),
  checked: false
};

export default memo(Toggle);
