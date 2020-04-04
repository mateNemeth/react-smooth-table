import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActionComponent from './ActionComponent';

const onEditClick = jest.fn()
const onDeleteClick = jest.fn()

const editComponents = {
  onEdit: {
    component: <p>EDIT_TEST</p>,
    callBack: rowData => {
      onEditClick(rowData);
    }
  },
  onDelete: {
    component: <p>DELETE_TEST</p>,
    callBack: rowData => {
      onDeleteClick(rowData);
    }
  }
};

afterEach(cleanup);

describe('ActionComponent tests', () => {
  test('Only render action buttons declared in {editComponents} prop', () => {
    const { getAllByTestId } = render(<ActionComponent {...editComponents} />);

    expect(getAllByTestId('table-row-action-button').length).toBe(Object.keys(editComponents).length);
  });

  test('If no component passed in, the default button should be rendered', () => {
    const editComponentWithoutComponents = {
      onEdit: {
        callBack: rowData => {
          onEditClick(rowData);
        }
      },
      onDelete: {
        callBack: rowData => {
          onDeleteClick(rowData);
        }
      }
    }
    
    const {getAllByTestId} = render(<ActionComponent {...editComponentWithoutComponents} />);

    expect(getAllByTestId('default_icon').length).toBe(2);
  })

  test('If a component is passed in, it should be rendered instead of the default one', () => {
    const { getByText } = render(<ActionComponent {...editComponents} />);

    expect(getByText('EDIT_TEST')).toBeInTheDocument();
  });

  test('Passed down callback gets executed on both buttons', () => {
    const {getByText} = render(<ActionComponent {...editComponents} />);
    const editButton = getByText('EDIT_TEST');
    const deleteButton = getByText('DELETE_TEST');

    fireEvent.click(editButton);
    fireEvent.click(deleteButton);

    expect(onEditClick.mock.calls.length).toBe(1);
    expect(onDeleteClick.mock.calls.length).toBe(1)
  })
});
