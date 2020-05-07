"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  text-align: ", ";\n  font-size: 14px;\n  border-collapse: collapse;\n  background-color: inherit;\n  padding: 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTd = _styledComponents.default.td(_templateObject(), function (props) {
  return props.width || 'auto';
}, function (props) {
  return props.align || 'left';
});

var TableCell = function TableCell(_ref) {
  var orderedData = _ref.orderedData,
      rowIndex = _ref.rowIndex,
      dataIndex = _ref.dataIndex,
      rowLength = _ref.rowLength,
      dataLength = _ref.dataLength,
      props = _objectWithoutProperties(_ref, ["orderedData", "rowIndex", "dataIndex", "rowLength", "dataLength"]);

  /**
   * A function that adds 4px border radius on the bottom left/right corner if the <td> element
   * is the first or last item in the row, and the parent <tr> is the last row in the table,
   * along with any other passed down styles to all the <td> elements
   */
  var createTdStyles = function createTdStyles() {
    if (rowIndex === rowLength - 1 && dataIndex === 0) {
      return _objectSpread({}, orderedData.cellStyle, {
        borderBottomLeftRadius: '4px'
      });
    }

    if (rowIndex === dataLength - 1 && dataIndex === dataLength - 1) {
      return _objectSpread({}, orderedData.cellStyle, {
        borderBottomRightRadius: '4px'
      });
    }

    return _objectSpread({}, orderedData.cellStyle);
  };

  return (/*#__PURE__*/_react.default.createElement(StyledTd, {
      "data-testid": "table-data-cell",
      width: orderedData.width,
      align: orderedData.align,
      style: createTdStyles()
    }, props.children)
  );
};

TableCell.propTypes = {
  orderedData: _propTypes.default.shape({
    width: _propTypes.default.string,
    align: _propTypes.default.string,
    cellStyle: _propTypes.default.shape({})
  }),
  rowIndex: _propTypes.default.number,
  dataIndex: _propTypes.default.number,
  rowLength: _propTypes.default.number,
  dataLength: _propTypes.default.number
};
var _default = TableCell;
exports.default = _default;