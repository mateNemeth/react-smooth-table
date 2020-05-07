"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StateProvider = exports.store = void 0;

var _react = _interopRequireWildcard(require("react"));

var _action = require("./action.types");

var _ActionComponent = _interopRequireDefault(require("../components/ActionComponent/ActionComponent"));

var _ActionHeader = _interopRequireDefault(require("../components/ActionComponent/ActionHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initialState = {
  columns: [],
  rows: [],
  editAdded: false,
  orderBy: '',
  order: ''
};
var store = (0, _react.createContext)(initialState);
exports.store = store;
var Provider = store.Provider;

var StateProvider = function StateProvider(_ref) {
  var children = _ref.children;

  var _useReducer = (0, _react.useReducer)(function (state, action) {
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
        return state = _objectSpread({}, state, {
          orderBy: action.payload.orderBy,
          order: action.payload.order,
          rows: _toConsumableArray(state.rows.sort(function (a, b) {
            if (action.payload.order === 'ASC') {
              return a[action.payload.orderBy] > b[action.payload.orderBy] ? 1 : -1;
            }

            return a[action.payload.orderBy] < b[action.payload.orderBy] ? 1 : -1;
          }))
        });

      case _action.actionTypes.POPULATE_DATA:
        return state = _objectSpread({}, state, {
          rows: _toConsumableArray(action.payload.rows),
          columns: _toConsumableArray(action.payload.columns),
          editAdded: false
        });

      default:
        return state;
    }
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return (/*#__PURE__*/_react.default.createElement(Provider, {
      value: {
        state: state,
        dispatch: dispatch
      }
    }, children)
  );
};

exports.StateProvider = StateProvider;