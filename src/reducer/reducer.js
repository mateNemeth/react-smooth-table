// --------------------------------------------------------------------------------------
// | TODO: move all this logic into the store, so components can subscribe to the state |
// --------------------------------------------------------------------------------------

import React from 'react';
import { actionTypes } from './action.types';

import ActionComponent from '../components/ActionComponent/ActionComponent';
import ActionHeader from '../components/ActionComponent/ActionHeader';

const initialState = {
  columns: [],
  rows: [],
  editAdded: false,
  orderBy: '',
  order: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_EDIT:
      return (state = {
        ...state,
        columns: [
          {
            headerFor: 'actions',
            title: <ActionHeader onAdd={action.payload.onAdd} />,
            width: '40px'
          },
          ...state.columns
        ],
        rows: [
          ...state.rows.map(row => {
            return {
              actions: (
                <ActionComponent
                  onEdit={action.payload.onEdit}
                  onDelete={action.payload.onDelete}
                  rowData={{ ...row }}
                />
              ),
              ...row
            };
          })
        ],
        editAdded: true
      });

    case actionTypes.ORDER_BY:
      const newState = {
        ...state,
        orderBy: action.payload.orderBy,
        order: action.payload.order,
        rows: [
          ...state.rows.sort((a, b) => {
            if (action.payload.order === 'ASC') {
              return a[action.payload.orderBy] > b[action.payload.orderBy]
                ? 1
                : -1;
            }
            return a[action.payload.orderBy] < b[action.payload.orderBy]
              ? 1
              : -1;
          })
        ]
      };
      action.payload.onOrder &&
        action.payload.onOrder({
          order: action.payload.order,
          orderBy: action.payload.orderBy
        });
      return newState;
    case actionTypes.POPULATE_DATA:
      return (state = {
        ...state,
        rows: [...action.payload.rows],
        columns: [...action.payload.columns],
        editAdded: false
      });
    default:
      return state;
  }
};
