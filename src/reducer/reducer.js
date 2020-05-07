// --------------------------------------------------------------------------------------
// | TODO: move all this logic into the store, so components can subscribe to the state |
// --------------------------------------------------------------------------------------

import React from 'react';
import { actionTypes } from './action.types';

import ActionComponent from '../components/ActionComponent/ActionComponent';
import ActionHeader from '../components/ActionComponent/ActionHeader';

const initialState = {
  columns: [],
  rawData: [],
  rows: [],
  editAdded: false,
  orderBy: '',
  order: '',
  pagination: false,
  totalCount: null,
  perPageCount: null,
  currentPage: 1,
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
            width: '40px',
          },
          ...state.columns,
        ],
        rows: [
          ...state.rows.map((row) => {
            return {
              actions: (
                <ActionComponent
                  onEdit={action.payload.onEdit}
                  onDelete={action.payload.onDelete}
                  rowData={{ ...row }}
                />
              ),
              ...row,
            };
          }),
        ],
        editAdded: true,
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
          }),
        ],
      };
      action.payload.onOrder &&
        action.payload.onOrder({
          order: action.payload.order,
          orderBy: action.payload.orderBy,
        });
      return newState;

    case actionTypes.POPULATE_DATA:
      const {
        paginator,
        totalCount,
        perPageCount,
        rawData,
        columns,
      } = action.payload;
      return (state = {
        ...state,
        paginator: paginator,
        totalCount: totalCount,
        perPageCount: perPageCount,
        rawData: [...rawData],
        columns: [...columns],
        rows: paginator ? rawData.slice(0, perPageCount) : rawData,
        currentPage: 1,
        editAdded: false,
      });

    case actionTypes.CHANGE_PAGE:
      const { targetPage } = action.payload;
      const nextPage = () => {
        const max = Math.ceil(state.totalCount / state.perPageCount);
        if (targetPage < 2) return 1;
        if (targetPage > max) return max;
        return targetPage;
      };

      return (state = {
        ...state,
        rows: state.rawData.slice(
          (nextPage() - 1) * state.perPageCount,
          nextPage() * state.perPageCount
        ),
        currentPage: nextPage(),
      });
    default:
      return state;
  }
};
