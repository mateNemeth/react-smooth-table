import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActionHeader from './ActionHeader';

afterEach(cleanup);

const onClick = jest.fn(x => x * 2)

const onAdd = {
  component: <p>ADD_BUTTON_TEST</p>,
  callBack: () => onClick(15),
};

describe('ActionHeader tests', () => {
  test('ActionHeader renders', () => {
    const { getByTestId } = render(
      <ActionHeader onAdd={onAdd} />
    );

    expect(getByTestId('table-column-action-header')).toBeInTheDocument();
  });

  test('render ActionHeader with default component if no components is passed in', () => {
    const onAddWithoutComponent = {
      callBack: () => onClick()
    }
    const {getByTestId} = render(<ActionHeader onAdd={onAddWithoutComponent} />);

    expect(getByTestId('default-header-icon')).toBeInTheDocument();
  })

  test('ActionHeader doesn\'t render if onAdd isn\'t defined', () => {
    const {queryByTestId} = render(<ActionHeader onAdd={null} />);

    expect(queryByTestId('table-column-action-header')).not.toBeInTheDocument();
  })

  test('ActionHeader renders passed down component', () => {
    const { getByText } = render(<ActionHeader onAdd={onAdd} />);

    expect(getByText('ADD_BUTTON_TEST')).toBeInTheDocument();
  });

  test('on button click callBack should be called, and only 1 time', () => {
    const { getByText } = render(<ActionHeader onAdd={onAdd} />);
    const addButton = getByText('ADD_BUTTON_TEST');

    fireEvent.click(addButton);

    expect(onClick.mock.calls.length).toBe(1);
  });
});
