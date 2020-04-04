import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ActionButton from './ActionButton';
import styled from 'styled-components';

const ActionButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30px;

  & .default_icon {
    color: rgba(0, 0, 0, 0.55);
    transform: color 0.2s ease;
    width: 30px;
    height: 30px;
    padding: 6px;

    &:hover {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const ActionComponent = ({ onEdit, onDelete, rowData }) => {
  return (
    <ActionButtonWrapper>
      {onEdit && (
        <ActionButton callBack={() => onEdit.callBack(rowData)}>
          {onEdit.component ? { ...onEdit.component } : <EditIcon />}
        </ActionButton>
      )}
      {onDelete && (
        <ActionButton callBack={() => onDelete.callBack(rowData)}>
          {onDelete.component ? { ...onDelete.component } : <DeleteIcon />}
        </ActionButton>
      )}
    </ActionButtonWrapper>
  );
};

const EditIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faPencilAlt}
      size="lg"
      className="default_icon"
      data-testid="default_icon"
    />
  );
};

const DeleteIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faTrashAlt}
      size="lg"
      className="default_icon"
      data-testid="default_icon"
    />
  );
};

ActionComponent.propTypes = {
  onEdit: PropTypes.shape({
    component: PropTypes.shape({}),
    callBack: PropTypes.func.isRequired
  }),
  onDelete: PropTypes.shape({
    component: PropTypes.shape({}),
    callBack: PropTypes.func.isRequired
  })
};

export default ActionComponent;
