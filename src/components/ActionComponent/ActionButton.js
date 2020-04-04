import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  border: none;
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  padding: 0;
  min-height: 30px;
  min-width: 30px;
  margin: 0 8px;
`;

const ActionButton = ({ callBack, type, ...props }) => (
  <Button data-testid="table-row-action-button" onClick={callBack} type={type}>{props.children}</Button>
);

ActionButton.propTypes = {
  callBack: PropTypes.func,
  type: PropTypes.string
}

export default ActionButton;
