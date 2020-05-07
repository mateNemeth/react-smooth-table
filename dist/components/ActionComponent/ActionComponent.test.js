"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _ActionComponent = _interopRequireDefault(require("./ActionComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onEditClick = jest.fn();
var onDeleteClick = jest.fn();
var editComponents = {
  onEdit: {
    component: /*#__PURE__*/_react.default.createElement("p", null, "EDIT_TEST"),
    callBack: function callBack(rowData) {
      onEditClick(rowData);
    }
  },
  onDelete: {
    component: /*#__PURE__*/_react.default.createElement("p", null, "DELETE_TEST"),
    callBack: function callBack(rowData) {
      onDeleteClick(rowData);
    }
  }
};
afterEach(_react2.cleanup);
describe('ActionComponent tests', function () {
  test('Only render action buttons declared in {editComponents} prop', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ActionComponent.default, editComponents)),
        getAllByTestId = _render.getAllByTestId;

    expect(getAllByTestId('table-row-action-button').length).toBe(Object.keys(editComponents).length);
  });
  test('If no component passed in, the default button should be rendered', function () {
    var editComponentWithoutComponents = {
      onEdit: {
        callBack: function callBack(rowData) {
          onEditClick(rowData);
        }
      },
      onDelete: {
        callBack: function callBack(rowData) {
          onDeleteClick(rowData);
        }
      }
    };

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ActionComponent.default, editComponentWithoutComponents)),
        getAllByTestId = _render2.getAllByTestId;

    expect(getAllByTestId('default_icon').length).toBe(2);
  });
  test('If a component is passed in, it should be rendered instead of the default one', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ActionComponent.default, editComponents)),
        getByText = _render3.getByText;

    expect(getByText('EDIT_TEST')).toBeInTheDocument();
  });
  test('Passed down callback gets executed on both buttons', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ActionComponent.default, editComponents)),
        getByText = _render4.getByText;

    var editButton = getByText('EDIT_TEST');
    var deleteButton = getByText('DELETE_TEST');

    _react2.fireEvent.click(editButton);

    _react2.fireEvent.click(deleteButton);

    expect(onEditClick.mock.calls.length).toBe(1);
    expect(onDeleteClick.mock.calls.length).toBe(1);
  });
});