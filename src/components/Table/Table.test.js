import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from './Table';

const columns = [
  {
    headerFor: 'name',
    title: 'Név',
    width: '80px',
    headerStyle: { minWidth: '80px' },
  },
  { headerFor: 'age', title: 'Születési dátum', align: 'right' },
  { headerFor: 'email', title: 'E-mail cím', align: 'right' },
  { headerFor: 'phone', title: 'Telefonszám', align: 'right' },
  {
    headerFor: 'image',
    title: 'Kép',
    component: (rowData) =>
      rowData.image && (
        <img
          src={rowData.image}
          data-testid="table-custom-comp"
          alt="custom_component_image"
        />
      ),
  },
];

const data = [
  { id: '1', age: '2012-12-12', name: 'Teszt 1', phone: '123456789' },
  {
    id: '2',
    name: 'Teszt 2',
    age: '2012-12-13',
    email: 'teszt@teszt.teszt',
    phone: '123456789',
  },
  { id: '3', name: 'Teszt 3', age: null, phone: '123456789' },
  { id: '4', age: '2012-12-15', email: 'teszt@teszt.teszt' },
  { id: '5', image: 'https://source.unsplash.com/random' },
];

afterEach(cleanup);

describe('Table tests', () => {
  test('Table element renders on the page', () => {
    const { getByTestId } = render(<Table />);

    expect(getByTestId('table')).toBeInTheDocument();
  });

  test('Table renders a header row', () => {
    const { getByTestId } = render(<Table />);

    expect(getByTestId('table-header-row')).toBeInTheDocument();
  });

  test('All the columns get rendered, with {title} prop as textvalue', () => {
    const { getAllByTestId, getByText } = render(<Table columns={columns} />);

    const elements = getAllByTestId('table-header-cell');

    expect(elements.length).toBe(columns.length);

    columns.map((column) => {
      expect(getByText(column.title)).toBeInTheDocument();
    });
  });

  test('First and last headerCell should have borderRadius style prop', () => {
    const { getAllByTestId } = render(<Table columns={columns} />);

    const elements = getAllByTestId('table-header-cell');

    expect(elements[0]).toHaveStyle(`border-top-left-radius: 4px`);
    expect(elements[elements.length - 1]).toHaveStyle(
      `border-top-right-radius: 4px`
    );
  });

  test('A row gets rendered for each object in data prop', () => {
    const { getAllByTestId } = render(<Table columns={columns} data={data} />);

    const elements = getAllByTestId('table-data-row');

    expect(elements.length).toBe(data.length);
  });

  test('In the last row, the first and last cell should have borderRadius style prop', () => {
    const { getAllByTestId } = render(<Table columns={columns} data={data} />);

    const rows = getAllByTestId('table-data-row');
    const lastRow = rows[rows.length - 1];
    const elements = lastRow.children;

    expect(elements[0]).toHaveStyle(`border-bottom-left-radius: 4px`);
    expect(elements[elements.length - 1]).toHaveStyle(
      `border-bottom-right-radius: 4px`
    );
  });

  test('If striped props is true, every second row should have different background-color', () => {
    const { getAllByTestId } = render(
      <Table columns={columns} data={data} striped />
    );

    const rows = getAllByTestId('table-data-row');
    rows.map((row, idx) => {
      if (idx % 2 !== 0) {
        expect(row).toHaveStyle(`background-color: #f5f5f5`);
      }
    });
  });

  test('If stripeBg and stripeColor is provided, it should be used for the striped rows', () => {
    const { getAllByTestId } = render(
      <Table
        columns={columns}
        data={data}
        striped
        stripeBg="yellow"
        stripeColor="green"
      />
    );

    const rows = getAllByTestId('table-data-row');
    rows.map((row, idx) => {
      if (idx % 2 !== 0) {
        expect(row).toHaveStyle(`background-color: yellow`);
        expect(row).toHaveStyle(`color: green`);
      }
    });
  });

  test('If width prop is provided, table should have that width set as max-width', () => {
    const { getByTestId } = render(
      <Table columns={columns} data={data} width="200px" />
    );
    const innerContainer = getByTestId('table').parentElement;
    const outerContainer = innerContainer.parentElement;

    expect(innerContainer).toHaveStyle(`max-width: 200px`);
    expect(outerContainer).toHaveStyle(`max-width: 200px`);
  });

  test("If stickyHeader is prop true, all the th's should have sticky position", () => {
    const { getAllByTestId } = render(
      <Table columns={columns} data={data} stickyHeader />
    );

    const headerCells = getAllByTestId('table-header-cell');
    headerCells.map((cell) => expect(cell).toHaveStyle(`position: sticky`));
  });

  test('If editable prop is present, an extra column should be rendered at the first position', () => {
    const { getAllByTestId } = render(<Table columns={columns} editable />);

    const elements = getAllByTestId('table-header-cell');

    expect(elements.length).toBe(columns.length + 1);
  });

  test('Renders custom component if it is set in the column', () => {
    const { getAllByTestId } = render(<Table columns={columns} data={data} />);

    const elements = getAllByTestId('table-custom-comp');

    expect(elements.length).toBe(1);
  });
});
