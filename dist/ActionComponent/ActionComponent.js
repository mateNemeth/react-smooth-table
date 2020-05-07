"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _ActionButton = _interopRequireDefault(require("./ActionButton"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 30px;\n\n  & .default_icon {\n    color: rgba(0, 0, 0, 0.55);\n    transform: color 0.2s ease;\n    width: 30px;\n    height: 30px;\n    padding: 6px;\n\n    &:hover {\n      color: rgba(0, 0, 0, 0.3);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ActionButtonWrapper = _styledComponents.default.div(_templateObject());

var ActionComponent = function ActionComponent(_ref) {
  var onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      rowData = _ref.rowData;
  return (/*#__PURE__*/_react.default.createElement(ActionButtonWrapper, null, onEdit && /*#__PURE__*/_react.default.createElement(_ActionButton.default, {
      callBack: function callBack() {
        return onEdit.callBack(rowData);
      }
    }, onEdit.component ? _objectSpread({}, onEdit.component) : /*#__PURE__*/_react.default.createElement(EditIcon, null)), onDelete && /*#__PURE__*/_react.default.createElement(_ActionButton.default, {
      callBack: function callBack() {
        return onDelete.callBack(rowData);
      }
    }, onDelete.component ? _objectSpread({}, onDelete.component) : /*#__PURE__*/_react.default.createElement(DeleteIcon, null)))
  );
};

var EditIcon = function EditIcon() {
  return (/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faPencilAlt,
      size: "lg",
      className: "default_icon",
      "data-testid": "default_icon"
    })
  );
};

var DeleteIcon = function DeleteIcon() {
  return (/*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faTrashAlt,
      size: "lg",
      className: "default_icon",
      "data-testid": "default_icon"
    })
  );
};

ActionComponent.propTypes = {
  onEdit: _propTypes.default.shape({
    component: _propTypes.default.shape({}),
    callBack: _propTypes.default.func.isRequired
  }),
  onDelete: _propTypes.default.shape({
    component: _propTypes.default.shape({}),
    callBack: _propTypes.default.func.isRequired
  })
};
var _default = ActionComponent;
exports.default = _default;