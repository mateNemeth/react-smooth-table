"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = void 0;

var _react = _interopRequireDefault(require("react"));

var _action = require("./action.types");

var _ActionComponent = _interopRequireDefault(require("../components/ActionComponent/ActionComponent"));

var _ActionHeader = _interopRequireDefault(require("../components/ActionComponent/ActionHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  columns: [],
  rows: [],
  editAdded: false,
  orderBy: '',
  order: ''
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action.actionTypes.ADD_EDIT:
      return state = _objectSpread({}, state, {
        columns: [{
          headerFor: 'actions',
          title: /*#__PURE__*/_react.default.createElement(_ActionHeader.default, {
            onAdd: action.payload.onAdd
          }),
          width: '40px'
        }].concat(_toConsumableArray(state.columns)),
        rows: _toConsumableArray(state.rows.map(function (row) {
          return _objectSpread({
            actions: /*#__PURE__*/_react.default.createElement(_ActionComponent.default, {
              onEdit: action.payload.onEdit,
              onDelete: action.payload.onDelete,
              rowData: _objectSpread({}, row)
            })
          }, row);
        })),
        editAdded: true
      });

    case _action.actionTypes.ORDER_BY:
      var newState = _objectSpread({}, state, {
        orderBy: action.payload.orderBy,
        order: action.payload.order,
        rows: _toConsumableArray(state.rows.sort(function (a, b) {
          if (action.payload.order === 'ASC') {
            return a[action.payload.orderBy] > b[action.payload.orderBy] ? 1 : -1;
          }

          return a[action.payload.orderBy] < b[action.payload.orderBy] ? 1 : -1;
        }))
      });

      action.payload.onOrder && action.payload.onOrder({
        order: action.payload.order,
        orderBy: action.payload.orderBy
      });
      return newState;

    case _action.actionTypes.POPULATE_DATA:
      return state = _objectSpread({}, state, {
        rows: _toConsumableArray(action.payload.rows),
        columns: _toConsumableArray(action.payload.columns),
        editAdded: false
      });

    default:
      return state;
  }
};

exports.reducer = reducer;