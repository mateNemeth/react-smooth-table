"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _ActionHeader = _interopRequireDefault(require("./ActionHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(_react2.cleanup);
var onClick = jest.fn(function (x) {
  return x * 2;
});
var onAdd = {
  component: /*#__PURE__*/_react.default.createElement("p", null, "ADD_BUTTON_TEST"),
  callBack: function callBack() {
    return onClick(15);
  }
};
describe('ActionHeader tests', function () {
  test('ActionHeader renders', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ActionHeader.default, {
      onAdd: onAdd
    })),
        getByTestId = _render.getByTestId;

    expect(getByTestId('table-column-action-header')).toBeInTheDocument();
  });
  test('render ActionHeader with default component if no components is passed in', function () {
    var onAddWithoutComponent = {
      callBack: function callBack() {
        return onClick();
      }
    };

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ActionHeader.default, {
      onAdd: onAddWithoutComponent
    })),
        getByTestId = _render2.getByTestId;

    expect(getByTestId('default-header-icon')).toBeInTheDocument();
  });
  test('ActionHeader doesn\'t render if onAdd isn\'t defined', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ActionHeader.default, {
      onAdd: null
    })),
        queryByTestId = _render3.queryByTestId;

    expect(queryByTestId('table-column-action-header')).not.toBeInTheDocument();
  });
  test('ActionHeader renders passed down component', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ActionHeader.default, {
      onAdd: onAdd
    })),
        getByText = _render4.getByText;

    expect(getByText('ADD_BUTTON_TEST')).toBeInTheDocument();
  });
  test('on button click callBack should be called, and only 1 time', function () {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_ActionHeader.default, {
      onAdd: onAdd
    })),
        getByText = _render5.getByText;

    var addButton = getByText('ADD_BUTTON_TEST');

    _react2.fireEvent.click(addButton);

    expect(onClick.mock.calls.length).toBe(1);
  });
});