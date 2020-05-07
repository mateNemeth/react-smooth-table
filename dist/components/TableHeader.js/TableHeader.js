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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 2px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 2px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-collapse: collapse;\n  padding: 16px;\n  text-align: left;\n  font-weight: 700;\n  font-size: 14px;\n  color: ", ";\n  width: ", ";\n  min-width: ", ";\n  text-align: ", ";\n  background-color: ", ";\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  position: ", ";\n  top: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTh = _styledComponents.default.th(_templateObject(), function (props) {
  return props.textColor || 'inherit';
}, function (props) {
  return props.width || 'auto';
}, function (props) {
  return props.width || '';
}, function (props) {
  return props.align || 'left';
}, function (props) {
  return props.headerBackground || 'inherit';
}, function (props) {
  return props.stickyHeader ? 'sticky' : 'inherit';
});

var OrderDown = _styledComponents.default.span(_templateObject2());

var OrderUp = _styledComponents.default.span(_templateObject3());

var TableHeader = function TableHeader(_ref) {
  var orderedData = _ref.orderedData,
      stickyHeader = _ref.stickyHeader,
      index = _ref.index,
      length = _ref.length,
      orderRowsBy = _ref.orderRowsBy,
      order = _ref.order,
      orderBy = _ref.orderBy,
      props = _objectWithoutProperties(_ref, ["orderedData", "stickyHeader", "index", "length", "orderRowsBy", "order", "orderBy"]);

  /**
   * A function that adds 4px border radius on the top left/right corner if the <th> element
   * is the first or last item in the row, along with any other passed down styles to all the <th> elements
   */
  var createThStyles = function createThStyles() {
    if (index === 0) {
      return _objectSpread({}, orderedData.headerStyle, {
        borderTopLeftRadius: '4px'
      });
    }

    if (index === length - 1) {
      return _objectSpread({}, orderedData.headerStyle, {
        borderTopRightRadius: '4px'
      });
    }

    return _objectSpread({}, orderedData.headerStyle);
  };

  return (/*#__PURE__*/_react.default.createElement(StyledTh, {
      "data-testid": "table-header-cell",
      width: orderedData === null || orderedData === void 0 ? void 0 : orderedData.width,
      align: orderedData === null || orderedData === void 0 ? void 0 : orderedData.align,
      headerBackground: orderedData === null || orderedData === void 0 ? void 0 : orderedData.headerBackground,
      textColor: orderedData === null || orderedData === void 0 ? void 0 : orderedData.textColor,
      stickyHeader: stickyHeader,
      style: createThStyles(),
      onClick: function onClick() {
        return orderRowsBy(orderedData.headerFor);
      }
    }, props.children, typeof props.children === 'string' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orderBy === orderedData.headerFor && order === 'ASC' && /*#__PURE__*/_react.default.createElement(OrderDown, null, "\u25B2"), orderBy === orderedData.headerFor && order === 'DESC' && /*#__PURE__*/_react.default.createElement(OrderUp, null, "\u25BC")))
  );
};

TableHeader.propTypes = {
  orderedData: _propTypes.default.shape({
    width: _propTypes.default.string,
    align: _propTypes.default.string,
    headerBackground: _propTypes.default.string,
    textColor: _propTypes.default.string,
    style: _propTypes.default.shape(),
    headerFor: _propTypes.default.string
  }),
  stickyHeader: _propTypes.default.bool,
  index: _propTypes.default.number,
  length: _propTypes.default.number,
  orderRowsBy: _propTypes.default.func
};
var _default = TableHeader;
exports.default = _default;