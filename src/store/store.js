// -----------------------------------------------------------
// | TODO: Work-in-progress store to move reducer logic here |
// -----------------------------------------------------------

import React, { useReducer, createContext } from 'react';
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
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
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
        return (state = {
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
        });

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
  });

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
