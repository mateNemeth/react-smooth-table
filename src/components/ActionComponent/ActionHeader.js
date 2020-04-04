import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ActionHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 30px;
  background-color: 'inherit';
`;

const ActionHeaderButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  padding: 0;
`;

const Text = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.55);
  color: white;
  width: 100%;
  font-size: 16px;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const ActionHeader = ({ onAdd }) => {
  return (
    <ActionHeaderWrapper>
      {onAdd && (
        <ActionHeaderButton
          onClick={onAdd.callBack}
          data-testid="table-column-action-header"
        >
          {onAdd.component ? onAdd.component : <ActionHeaderComponent />}
        </ActionHeaderButton>
      )}
    </ActionHeaderWrapper>
  );
};

const ActionHeaderComponent = () => {
  return (
    <Text>
      <FontAwesomeIcon
        icon={faPlusSquare}
        size="lg"
        color="white"
        style={{ marginRight: '4px' }}
        data-testid="default-header-icon"
      />
      Add new
    </Text>
  );
};

ActionHeader.propTypes = {
  onAdd: PropTypes.shape({
    component: PropTypes.shape({}),
    callBack: PropTypes.func.isRequired,
  }),
};

export default ActionHeader;
