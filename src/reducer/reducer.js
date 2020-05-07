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

const generateRowsData = (rawData, paginator, perPageCount) => {
  if (!paginator) return rawData;

  return rawData.slice(0, perPageCount);
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
      console.log(action.payload);
      const { targetPage } = action.payload;
      return (state = {
        ...state,
        rows: state.rawData.slice(
          (targetPage - 1) * state.perPageCount,
          targetPage * state.perPageCount
        ),
        currentPage: targetPage,
      });
    default:
      return state;
  }
};
