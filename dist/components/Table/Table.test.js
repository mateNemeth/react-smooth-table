"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _Table = _interopRequireDefault(require("./Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var columns = [{
  headerFor: 'name',
  title: 'Név',
  width: '80px',
  headerStyle: {
    minWidth: '80px'
  }
}, {
  headerFor: 'age',
  title: 'Születési dátum',
  align: 'right'
}, {
  headerFor: 'email',
  title: 'E-mail cím',
  align: 'right'
}, {
  headerFor: 'phone',
  title: 'Telefonszám',
  align: 'right'
}, {
  headerFor: 'image',
  title: 'Kép',
  component: function component(rowData) {
    return rowData.image && /*#__PURE__*/_react.default.createElement("img", {
      src: rowData.image,
      "data-testid": "table-custom-comp",
      alt: "custom_component_image"
    });
  }
}];
var data = [{
  id: '1',
  age: '2012-12-12',
  name: 'Teszt 1',
  phone: '123456789'
}, {
  id: '2',
  name: 'Teszt 2',
  age: '2012-12-13',
  email: 'teszt@teszt.teszt',
  phone: '123456789'
}, {
  id: '3',
  name: 'Teszt 3',
  age: null,
  phone: '123456789'
}, {
  id: '4',
  age: '2012-12-15',
  email: 'teszt@teszt.teszt'
}, {
  id: '5',
  image: 'https://source.unsplash.com/random'
}];
afterEach(_react2.cleanup);
describe('Table tests', function () {
  test('Table element renders on the page', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Table.default, null)),
        getByTestId = _render.getByTestId;

    expect(getByTestId('table')).toBeInTheDocument();
  });
  test('Table renders a header row', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Table.default, null)),
        getByTestId = _render2.getByTestId;

    expect(getByTestId('table-header-row')).toBeInTheDocument();
  });
  test('All the columns get rendered, with {title} prop as textvalue', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Table.default, {
      columns: columns
    })),
        getAllByTestId = _render3.getAllByTestId,
        getByText = _render3.getByText;

    var elements = getAllByTestId('table-header-cell');
    expect(elements.length).toBe(columns.length);
    columns.map(function (column) {
      expect(getByText(column.title)).toBeInTheDocument();
    });
  });
  test('First and last headerCell should have borderRadius style prop', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Table.default, {
      columns: columns
    })),
        getAllByTestId = _render4.getAllByTestId;

    var elements = getAllByTestId('table-header-cell');
    expect(elements[0]).toHaveStyle("border-top-left-radius: 4px");
    expect(elements[elements.length - 1]).toHaveStyle("border-top-right-radius: 4px");
  });
  test('A row gets rendered for each object in data prop', function () {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Table.default, {
      columns: columns,
      data: data
    })),
        getAllByTestId = _render5.getAllByTestId;

    var elements = getAllByTestId('table-data-row');
    expect(elements.length).toBe(data.length);
  });
  test('In the last row, the first and last cell should have borderRadius style prop', function () {
    var _render6 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Table.default, {
      columns: columns,
      data: data
    })),
        getAllByTestId = _render6.getAllByTestId;

    var rows = getAllByTestId('table-data-row');
    var lastRow = rows[rows.length - 1];
    var elements = lastRow.children;
    expect(elements[0]).toHaveStyle("border-bottom-left-radius: 4px");
    expect(elements[elements.length - 1]).toHaveStyle("border-bottom-right-radius: 4px");
  });
  test('If striped props is true, every second row should have different background-color', function () {
    var _render7 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Table.default, {
      columns: columns,
      data: data,
      striped: true
    })),
        getAllByTestId = _render7.getAllByTestId;

    var rows = getAllByTestId('table-data-row');
    rows.map(function (row, idx) {
      if (idx % 2 !== 0) {
        expect(row).toHaveStyle("background-color: #f5f5f5");
      }
    });
  });
  test('If stripeBg and stripeColor is provided, it should be used for the striped rows', function () {
    var _render8 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Table.default, {
      columns: columns,
      data: data,
      striped: true,
      stripeBg: "yellow",
      stripeColor: "green"
    })),
        getAllByTestId = _render8.getAllByTestId;

    var rows = getAllByTestId('table-data-row');
    rows.map(function (row, idx) {
      if (idx % 2 !== 0) {
        expect(row).toHaveStyle("background-color: yellow");
        expect(row).toHaveStyle("color: green");
      }
    });
  });
  test('If width prop is provided, table should have that width set as max-width', function () {
    var _render9 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Table.default, {
      columns: columns,
      data: data,
      width: "200px"
    })),
        getByTestId = _render9.getByTestId;

    var innerContainer = getByTestId('table').parentElement;
    var outerContainer = innerContainer.parentElement;
    expect(innerContainer).toHaveStyle("max-width: 200px");
    expect(outerContainer).toHaveStyle("max-width: 200px");
  });
  test("If stickyHeader is prop true, all the th's should have sticky position", function () {
    var _render10 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Table.default, {
      columns: columns,
      data: data,
      stickyHeader: true
    })),
        getAllByTestId = _render10.getAllByTestId;

    var headerCells = getAllByTestId('table-header-cell');
    headerCells.map(function (cell) {
      return expect(cell).toHaveStyle("position: sticky");
    });
  });
  test('If editable prop is present, an extra column should be rendered at the first position', function () {
    var _render11 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Table.default, {
      columns: columns,
      editable: true
    })),
        getAllByTestId = _render11.getAllByTestId;

    var elements = getAllByTestId('table-header-cell');
    expect(elements.length).toBe(columns.length + 1);
  });
  test('Renders custom component if it is set in the column', function () {
    var _render12 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Table.default, {
      columns: columns,
      data: data
    })),
        getAllByTestId = _render12.getAllByTestId;

    var elements = getAllByTestId('table-custom-comp');
    expect(elements.length).toBe(1);
  });
});