"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableHeader = _interopRequireDefault(require("../TableHeader.js/TableHeader"));

var _TableCell = _interopRequireDefault(require("../TableCell/TableCell"));

var _reducer = require("../../reducer/reducer");

var _action = require("../../reducer/action.types");

var _tinycolor = require("@ctrl/tinycolor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  cursor: pointer;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  cursor: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  border-radius: 4px;\n  margin: 0 auto;\n  border-collapse: collapse;\n  tr {\n    padding: 16px;\n    border-bottom: 1px solid #d9d9d9;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  overflow-x: auto;\n  padding: 0;\n  min-height: ", ";\n  height: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: ", ";\n  margin: 0 auto;\n  padding: ", ";\n  height: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OuterContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.width || '100%';
}, function (props) {
  return props.padding || '';
}, function (props) {
  return props.height || '';
});

var InnerContainer = (0, _styledComponents.default)(OuterContainer)(_templateObject2(), function (props) {
  return props.height || '';
}, function (props) {
  return props.height || '100%';
});

var StyledTable = _styledComponents.default.table(_templateObject3());

var StyledTbody = _styledComponents.default.tbody(_templateObject4());

var StyledTr = _styledComponents.default.tr(_templateObject5(), function (props) {
  return props.striped ? props.stripeBg ? props.stripeBg : '#f5f5f5' : 'white';
}, function (props) {
  return props.striped && (props.stripeColor ? props.stripeColor : 'inherit');
}, function (props) {
  return props.onClick ? 'pointer' : 'inherit';
}, function (props) {
  return props.striped ? new _tinycolor.TinyColor(props.stripeBg ? props.stripeBg : '#f5f5f5').darken(5).toString() : new _tinycolor.TinyColor('#ffffff').darken(10).toString();
});

var StyledTrHead = _styledComponents.default.tr(_templateObject6(), function (props) {
  return props.headerBg || '#f5f5f5';
}, function (props) {
  return props.headerColor || 'black';
});

var Table = function Table(props) {
  var columns = props.columns,
      data = props.data,
      width = props.width,
      height = props.height,
      padding = props.padding,
      stickyHeader = props.stickyHeader,
      striped = props.striped,
      stripeColor = props.stripeColor,
      stripeBg = props.stripeBg,
      headerBg = props.headerBg,
      headerColor = props.headerColor,
      editable = props.editable,
      editComponents = props.editComponents,
      onRowClick = props.onRowClick,
      onOrder = props.onOrder;

  var _useReducer = (0, _react.useReducer)(_reducer.reducer, {
    columns: columns,
    rows: data,
    orderBy: 'position',
    order: 'ASC'
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    dispatch({
      type: _action.actionTypes.POPULATE_DATA,
      payload: {
        rows: data,
        columns: columns
      }
    });
  }, [columns, data]);

  if (editable && !state.editAdded) {
    dispatch({
      type: _action.actionTypes.ADD_EDIT,
      payload: _objectSpread({}, editComponents)
    });
  }
  /**
   * Creating a new array with the keys allows us to make sure to render the <td>s in the same order as the <th>s
   */


  var generateColumnOrder = function generateColumnOrder() {
    return state.columns.map(function (column) {
      return column.headerFor;
    });
  };
  /**
   * Function to reorder the rows displayed in the table. It get a 'columName' as argument, and does the ordering
   * based on that column.
   */


  var orderRowsBy = function orderRowsBy(columnName) {
    return dispatch({
      type: _action.actionTypes.ORDER_BY,
      payload: {
        orderBy: columnName,
        order: state.order === 'ASC' ? 'DESC' : 'ASC',
        onOrder: onOrder
      }
    });
  };
  /**
   * Generates the layout for the Table - creates all the <tr>, <th> and <td> elements and styles them based on props.
   */


  var generateTableLayout = function generateTableLayout() {
    var order = generateColumnOrder();
    return (/*#__PURE__*/_react.default.createElement(StyledTbody, null, /*#__PURE__*/_react.default.createElement(StyledTrHead, {
        headerBg: headerBg,
        headerColor: headerColor,
        "data-testid": "table-header-row"
      }, order && order.map(function (item, idx) {
        var orderedData = state.columns.find(function (o) {
          return o.headerFor === item;
        });
        return (/*#__PURE__*/_react.default.createElement(_TableHeader.default, {
            key: orderedData.headerFor,
            orderedData: orderedData,
            stickyHeader: stickyHeader,
            index: idx,
            length: order.length,
            orderRowsBy: orderRowsBy,
            order: state.order,
            orderBy: state.orderBy
          }, orderedData.title)
        );
      })), state.rows.map(function (row, rowIdx) {
        return (/*#__PURE__*/_react.default.createElement(StyledTr, {
            "data-testid": "table-data-row",
            key: row.id,
            id: row.id,
            striped: striped && rowIdx % 2 !== 0,
            stripeBg: stripeBg,
            stripeColor: stripeColor,
            onClick: onRowClick ? function () {
              return onRowClick(row);
            } : null
          }, order.map(function (item, itemIdx) {
            var orderedData = state.columns.find(function (o) {
              return o.headerFor === item;
            });
            return (/*#__PURE__*/_react.default.createElement(_TableCell.default, {
                orderedData: orderedData,
                key: Math.random(),
                rowIndex: rowIdx,
                rowLength: data.length,
                dataIndex: itemIdx,
                dataLength: order.length
              }, orderedData.component ? orderedData.component(row) : row[item])
            );
          }))
        );
      }))
    );
  };

  return (/*#__PURE__*/_react.default.createElement(OuterContainer, {
      width: width,
      height: height,
      padding: padding
    }, /*#__PURE__*/_react.default.createElement(InnerContainer, {
      width: width
    }, /*#__PURE__*/_react.default.createElement(StyledTable, {
      width: width,
      "data-testid": "table"
    }, generateTableLayout())))
  );
};

Table.propTypes = {
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  padding: _propTypes.default.string,
  striped: _propTypes.default.bool,
  stripeBg: _propTypes.default.string,
  stripeColor: _propTypes.default.string,
  onRowClick: _propTypes.default.func,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    headerFor: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    width: _propTypes.default.string,
    align: _propTypes.default.string,
    headerBackground: _propTypes.default.string,
    textColor: _propTypes.default.string,
    headerStyle: _propTypes.default.shape({}),
    cellStyle: _propTypes.default.shape({}),
    component: _propTypes.default.func
  })).isRequired,
  data: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  editable: _propTypes.default.bool,
  editComponents: _propTypes.default.shape({
    onEdit: _propTypes.default.shape({
      icon: _propTypes.default.func,
      callBack: _propTypes.default.func
    }),
    onAdd: _propTypes.default.shape({
      icon: _propTypes.default.func,
      callBack: _propTypes.default.func
    }),
    onDelete: _propTypes.default.shape({
      icon: _propTypes.default.func,
      callBack: _propTypes.default.func
    })
  }),
  onOrder: _propTypes.default.func
};
Table.defaultProps = {
  width: '100%',
  columns: [{
    headerFor: '',
    title: '',
    component: null,
    options: {}
  }],
  data: [],
  editable: false,
  onOrder: null
};
var _default = Table;
exports.default = _default;