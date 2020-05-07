"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.55);\n  color: white;\n  width: 100%;\n  font-size: 16px;\n  padding: 8px;\n  border-radius: 8px;\n  transition: background-color 0.2s ease;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  cursor: pointer;\n  padding: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 30px;\n  background-color: 'inherit';\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ActionHeaderWrapper = _styledComponents.default.div(_templateObject());

var ActionHeaderButton = _styledComponents.default.button(_templateObject2());

var Text = _styledComponents.default.span(_templateObject3());

var ActionHeader = function ActionHeader(_ref) {
  var onAdd = _ref.onAdd;
  return (/*#__PURE__*/_react.default.createElement(ActionHeaderWrapper, null, onAdd && /*#__PURE__*/_react.default.createElement(ActionHeaderButton, {
      onClick: onAdd.callBack,
      "data-testid": "table-column-action-header"
    }, onAdd.component ? onAdd.component : /*#__PURE__*/_react.default.createElement(ActionHeaderComponent, null)))
  );
};

var ActionHeaderComponent = function ActionHeaderComponent() {
  return (/*#__PURE__*/_react.default.createElement(Text, null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faPlusSquare,
      size: "lg",
      color: "white",
      style: {
        marginRight: '4px'
      },
      "data-testid": "default-header-icon"
    }), "Add new")
  );
};

ActionHeader.propTypes = {
  onAdd: _propTypes.default.shape({
    component: _propTypes.default.shape({}),
    callBack: _propTypes.default.func.isRequired
  })
};
var _default = ActionHeader;
exports.default = _default;