(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~metadata-sidebar"],{

/***/ "./node_modules/box-ui-elements/es/components/collapsible/Collapsible.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/collapsible/Collapsible.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-animate-height'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/variables */ "./node_modules/box-ui-elements/es/common/variables.js");
/* harmony import */ var _icons_general_IconCaretDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconCaretDown */ "./node_modules/box-ui-elements/es/icons/general/IconCaretDown.js");
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");
/* harmony import */ var _Collapsible_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Collapsible.scss */ "./node_modules/box-ui-elements/es/components/collapsible/Collapsible.scss");
/* harmony import */ var _Collapsible_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Collapsible_scss__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Collapsible =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Collapsible, _React$PureComponent);

  function Collapsible(props) {
    var _this;

    _classCallCheck(this, Collapsible);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapsible).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleVisibility", function () {
      var _this$props = _this.props,
          onOpen = _this$props.onOpen,
          onClose = _this$props.onClose;

      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      }, function () {
        var isOpen = _this.state.isOpen;

        if (isOpen && onOpen) {
          onOpen(_assertThisInitialized(_this));
        } else if (!isOpen && onClose) {
          onClose(_assertThisInitialized(_this));
        }
      });
    });

    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  _createClass(Collapsible, [{
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      var _this$props2 = this.props,
          animationDuration = _this$props2.animationDuration,
          _this$props2$buttonPr = _this$props2.buttonProps,
          buttonProps = _this$props2$buttonPr === void 0 ? {} : _this$props2$buttonPr,
          children = _this$props2.children,
          className = _this$props2.className,
          isBordered = _this$props2.isBordered,
          hasStickyHeader = _this$props2.hasStickyHeader,
          headerActionItems = _this$props2.headerActionItems,
          title = _this$props2.title;
      var sectionClassName = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('collapsible-card', {
        'is-open': isOpen
      }, {
        'is-bordered': isBordered
      }, className);
      var interactionTarget = buttonProps[_common_variables__WEBPACK_IMPORTED_MODULE_2__["RESIN_TAG_TARGET"]];
      var modifiedButtonProps = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(buttonProps, [_common_variables__WEBPACK_IMPORTED_MODULE_2__["RESIN_TAG_TARGET"]]);
      var buttonClassName = hasStickyHeader ? 'collapsible-card-header has-sticky-header' : 'collapsible-card-header';

      if (interactionTarget) {
        modifiedButtonProps[_common_variables__WEBPACK_IMPORTED_MODULE_2__["RESIN_TAG_TARGET"]] = "".concat(interactionTarget).concat(isOpen ? 'collapse' : 'expand');
      }

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: sectionClassName
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: buttonClassName
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_plain_button__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, modifiedButtonProps, {
        className: "collapsible-card-title",
        onClick: this.toggleVisibility,
        type: "button"
      }), title, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconCaretDown__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "collapsible-card-header-caret",
        color: _styles_variables__WEBPACK_IMPORTED_MODULE_5__["bdlGray50"],
        width: 8
      })), isOpen && headerActionItems), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-animate-height'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        duration: animationDuration,
        height: isOpen ? 'auto' : 0
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "collapsible-card-content"
      }, children)));
    }
  }]);

  return Collapsible;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(Collapsible, "defaultProps", {
  buttonProps: {},
  className: '',
  isOpen: true,
  animationDuration: 100
});

/* harmony default export */ __webpack_exports__["default"] = (Collapsible);
//# sourceMappingURL=Collapsible.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/collapsible/Collapsible.scss":
/*!*********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/collapsible/Collapsible.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./Collapsible.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/collapsible/Collapsible.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/radio/RadioButtonField.js":
/*!******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/radio/RadioButtonField.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioButton */ "./node_modules/box-ui-elements/es/components/radio/RadioButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var RadioButtonField = function RadioButtonField(_ref) {
  var field = _ref.field,
      form = _ref.form,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ["field", "form", "value"]);

  var fieldValue = field.value,
      fieldRest = _objectWithoutProperties(field, ["value"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_RadioButton__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, fieldRest, rest, {
    value: value,
    isSelected: value === fieldValue
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioButtonField);
//# sourceMappingURL=RadioButtonField.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/radio/RadioGroup.js":
/*!************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/radio/RadioGroup.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioButton */ "./node_modules/box-ui-elements/es/components/radio/RadioButton.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var RadioGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup(props) {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioGroup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChangeHandler", function (event) {
      var target = event.target;
      var onChange = _this.props.onChange;

      if (target instanceof HTMLInputElement) {
        _this.setState({
          value: target.value
        });
      }

      if (onChange) {
        onChange(event);
      }
    });

    _this.state = {
      value: props.value
    };
    return _this;
  } // @TODO: think about adding componentDidUpdate or gDSFP
  // to update the internal state value based on new props value


  _createClass(RadioGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          name = _this$props.name;
      var stateValue = this.state.value;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "radio-group ".concat(className),
        onChange: this.onChangeHandler
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).map(children, function (radio) {
        var _radio$props = radio.props,
            value = _radio$props.value,
            rest = _objectWithoutProperties(_radio$props, ["value"]);

        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_RadioButton__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
          isSelected: value === stateValue,
          name: name,
          value: value
        }, rest));
      }));
    }
  }]);

  return RadioGroup;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(RadioGroup, "defaultProps", {
  className: ''
});

/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);
//# sourceMappingURL=RadioGroup.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/radio/RadioGroupField.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/radio/RadioGroupField.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioGroup */ "./node_modules/box-ui-elements/es/components/radio/RadioGroup.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var RadioGroupField = function RadioGroupField(_ref) {
  var field = _ref.field,
      form = _ref.form,
      rest = _objectWithoutProperties(_ref, ["field", "form"]);

  var value = field.value;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_RadioGroup__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    key: value
  }, field, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioGroupField);
//# sourceMappingURL=RadioGroupField.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/radio/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/radio/index.js ***!
  \*******************************************************************/
/*! exports provided: RadioButton, RadioButtonField, RadioGroup, RadioGroupField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioButton */ "./node_modules/box-ui-elements/es/components/radio/RadioButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return _RadioButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _RadioButtonField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioButtonField */ "./node_modules/box-ui-elements/es/components/radio/RadioButtonField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonField", function() { return _RadioButtonField__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RadioGroup */ "./node_modules/box-ui-elements/es/components/radio/RadioGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _RadioGroup__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _RadioGroupField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RadioGroupField */ "./node_modules/box-ui-elements/es/components/radio/RadioGroupField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroupField", function() { return _RadioGroupField__WEBPACK_IMPORTED_MODULE_3__["default"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/search-form/SearchForm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/search-form/SearchForm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_general_IconClear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/general/IconClear */ "./node_modules/box-ui-elements/es/icons/general/IconClear.js");
/* harmony import */ var _icons_general_IconSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconSearch */ "./node_modules/box-ui-elements/es/icons/general/IconSearch.js");
/* harmony import */ var _loading_indicator_makeLoadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading-indicator/makeLoadable */ "./node_modules/box-ui-elements/es/components/loading-indicator/makeLoadable.js");
/* harmony import */ var _SearchForm_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchForm.scss */ "./node_modules/box-ui-elements/es/components/search-form/SearchForm.scss");
/* harmony import */ var _SearchForm_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SearchForm_scss__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  clearButtonTitle: {
    "id": "boxui.searchForm.clearButtonTitle",
    "defaultMessage": "Clear"
  },
  searchButtonTitle: {
    "id": "boxui.searchForm.searchButtonTitle",
    "defaultMessage": "Search"
  },
  searchLabel: {
    "id": "boxui.searchForm.searchLabel",
    "defaultMessage": "Search query"
  }
});

var SearchForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchForm, _React$Component);

  function SearchForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isEmpty: true
    });

    _defineProperty(_assertThisInitialized(_this), "onClearHandler", function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          shouldPreventClearEventPropagation = _this$props.shouldPreventClearEventPropagation;

      if (shouldPreventClearEventPropagation) {
        event.stopPropagation();
      }

      if (_this.searchInput) {
        _this.searchInput.value = '';
      }

      _this.setState({
        isEmpty: true
      });

      if (onChange) {
        onChange('');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeHandler", function (_ref) {
      var target = _ref.target;
      var value = target.value;
      var onChange = _this.props.onChange;

      _this.setState({
        isEmpty: !value || !value.trim().length
      });

      if (onChange) {
        onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmitHandler", function (event) {
      var value = event.target.elements[0].value;
      var onSubmit = _this.props.onSubmit;

      if (onSubmit) {
        onSubmit(value, event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setInputRef", function (element) {
      _this.searchInput = element;

      if (_this.props.getSearchInput) {
        _this.props.getSearchInput(_this.searchInput);
      }
    });

    return _this;
  }

  _createClass(SearchForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          action = _this$props2.action,
          className = _this$props2.className,
          intl = _this$props2.intl,
          isLoading = _this$props2.isLoading,
          method = _this$props2.method,
          name = _this$props2.name,
          queryParams = _this$props2.queryParams,
          useClearButton = _this$props2.useClearButton,
          rest = _objectWithoutProperties(_this$props2, ["action", "className", "intl", "isLoading", "method", "name", "queryParams", "useClearButton"]);

      var isEmpty = this.state.isEmpty;
      var inputProps = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(rest, ['getSearchInput', 'onChange', 'onSubmit', 'required', 'shouldPreventClearEventPropagation']);
      var formatMessage = intl.formatMessage;
      var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(className, 'search-input-container');
      var formClassNames = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('search-form', {
        'is-empty': isEmpty,
        'use-clear-button': useClearButton
      });
      var hiddenInputs = Object.keys(queryParams).map(function (param, index) {
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("input", {
          key: index,
          name: param,
          type: "hidden",
          value: queryParams[param]
        });
      });

      var SearchActions = function SearchActions() {
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
          className: "action-buttons"
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", {
          type: "button",
          className: "action-button search-button",
          title: formatMessage(messages.searchButtonTitle)
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconSearch__WEBPACK_IMPORTED_MODULE_3__["default"], null)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", {
          className: "action-button clear-button",
          onClick: _this2.onClearHandler,
          title: formatMessage(messages.clearButtonTitle),
          type: "button"
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconClear__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
      };

      var LoadableSearchActions = Object(_loading_indicator_makeLoadable__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchActions); // @NOTE Prevent errors from React about controlled inputs

      var onChangeStub = function onChangeStub() {};

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: classes
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("form", {
        action: action,
        className: formClassNames,
        method: method,
        onChange: this.onChangeHandler,
        onSubmit: this.onSubmitHandler,
        role: "search"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("input", _extends({
        ref: this.setInputRef,
        "aria-label": formatMessage(messages.searchLabel),
        autoComplete: "off",
        className: "search-input",
        name: name,
        onChange: onChangeStub,
        type: "search"
      }, inputProps)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(LoadableSearchActions, {
        isLoading: isLoading,
        loadingIndicatorProps: {
          className: 'search-form-loading-indicator'
        }
      }), hiddenInputs));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      var value = props.value;

      if (value && !!value.trim()) {
        return {
          isEmpty: true
        };
      }

      return null;
    }
  }]);

  return SearchForm;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(SearchForm, "defaultProps", {
  action: undefined,
  method: 'get',
  name: 'search',
  queryParams: {},
  useClearButton: false
});

/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(SearchForm));
//# sourceMappingURL=SearchForm.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/search-form/SearchForm.scss":
/*!********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/search-form/SearchForm.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./SearchForm.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/search-form/SearchForm.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/toggle/Toggle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/toggle/Toggle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Toggle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toggle.scss */ "./node_modules/box-ui-elements/es/components/toggle/Toggle.scss");
/* harmony import */ var _Toggle_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Toggle_scss__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Toggle = function Toggle(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      description = _ref.description,
      isDisabled = _ref.isDisabled,
      isOn = _ref.isOn,
      _ref$isToggleRightAli = _ref.isToggleRightAligned,
      isToggleRightAligned = _ref$isToggleRightAli === void 0 ? false : _ref$isToggleRightAli,
      label = _ref.label,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["className", "description", "isDisabled", "isOn", "isToggleRightAligned", "label", "name", "onBlur", "onChange"]);

  var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('toggle-container', className, {
    'is-toggle-right-aligned': isToggleRightAligned
  });
  var toggleElements = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    key: "toggle-simple-switch",
    className: "toggle-simple-switch"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    key: "toggle-simple-label",
    className: "toggle-simple-label"
  }, label)];

  if (isToggleRightAligned) {
    toggleElements = toggleElements.reverse();
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: classes
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("label", {
    className: "toggle-simple"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("input", _extends({
    checked: isOn,
    className: "toggle-simple-input",
    disabled: isDisabled,
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    type: "checkbox"
  }, rest)), toggleElements), description ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "toggle-simple-description"
  }, description) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Toggle);
//# sourceMappingURL=Toggle.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/toggle/Toggle.scss":
/*!***********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/toggle/Toggle.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./Toggle.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/toggle/Toggle.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/toggle/ToggleField.js":
/*!**************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/toggle/ToggleField.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toggle */ "./node_modules/box-ui-elements/es/components/toggle/Toggle.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var ToggleField = function ToggleField(_ref) {
  var field = _ref.field,
      form = _ref.form,
      rest = _objectWithoutProperties(_ref, ["field", "form"]);

  var value = field.value;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Toggle__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, field, rest, {
    isOn: !!value
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleField);
//# sourceMappingURL=ToggleField.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/toggle/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/toggle/index.js ***!
  \********************************************************************/
/*! exports provided: default, ToggleField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toggle */ "./node_modules/box-ui-elements/es/components/toggle/Toggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Toggle__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ToggleField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleField */ "./node_modules/box-ui-elements/es/components/toggle/ToggleField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleField", function() { return _ToggleField__WEBPACK_IMPORTED_MODULE_1__["default"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/MetadataSidebar.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/MetadataSidebar.js ***!
  \*************************************************************************************/
/*! exports provided: MetadataSidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataSidebarComponent", function() { return MetadataSidebar; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./node_modules/box-ui-elements/es/api/index.js");
/* harmony import */ var _features_metadata_instance_editor_EmptyContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/metadata-instance-editor/EmptyContent */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/EmptyContent.js");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/inline-error/InlineError */ "./node_modules/box-ui-elements/es/components/inline-error/InlineError.js");
/* harmony import */ var _features_metadata_instance_editor_Instances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/metadata-instance-editor/Instances */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/Instances.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicator */ "./node_modules/box-ui-elements/es/components/loading-indicator/LoadingIndicator.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicatorWrapper */ "./node_modules/box-ui-elements/es/components/loading-indicator/LoadingIndicatorWrapper.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarContent */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _features_metadata_instance_editor_TemplateDropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../features/metadata-instance-editor/TemplateDropdown */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplateDropdown.js");
/* harmony import */ var _features_metadata_instance_editor_metadataUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../features/metadata-instance-editor/metadataUtil */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/metadataUtil.js");
/* harmony import */ var _common_logger_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/logger/constants */ "./node_modules/box-ui-elements/es/elements/common/logger/constants.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/error */ "./node_modules/box-ui-elements/es/utils/error.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/performance */ "./node_modules/box-ui-elements/es/utils/performance.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/api-context */ "./node_modules/box-ui-elements/es/elements/common/api-context/index.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/error-boundary */ "./node_modules/box-ui-elements/es/elements/common/error-boundary/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/logger */ "./node_modules/box-ui-elements/es/elements/common/logger/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _MetadataSidebar_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./MetadataSidebar.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/MetadataSidebar.scss");
/* harmony import */ var _MetadataSidebar_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_MetadataSidebar_scss__WEBPACK_IMPORTED_MODULE_21__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Metadata sidebar component
 * @author Box
 */























var MARK_NAME_JS_READY = "".concat(_constants__WEBPACK_IMPORTED_MODULE_20__["ORIGIN_METADATA_SIDEBAR"], "_").concat(_common_logger_constants__WEBPACK_IMPORTED_MODULE_14__["EVENT_JS_READY"]);
Object(_utils_performance__WEBPACK_IMPORTED_MODULE_16__["mark"])(MARK_NAME_JS_READY);

var MetadataSidebar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MetadataSidebar, _React$PureComponent);

  function MetadataSidebar(props) {
    var _this;

    _classCallCheck(this, MetadataSidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MetadataSidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: false
    });

    _defineProperty(_assertThisInitialized(_this), "onApiError", function (error, code) {
      var newState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var onError = _this.props.onError;
      var status = error.status;
      var isValidError = Object(_utils_error__WEBPACK_IMPORTED_MODULE_15__["isUserCorrectableError"])(status);

      _this.setState(_objectSpread({
        error: _common_messages__WEBPACK_IMPORTED_MODULE_10__["default"].sidebarMetadataEditingErrorContent,
        isLoading: false
      }, newState));

      onError(error, code, _defineProperty({
        error: error
      }, _constants__WEBPACK_IMPORTED_MODULE_20__["IS_ERROR_DISPLAYED"], isValidError));
    });

    _defineProperty(_assertThisInitialized(_this), "onRemove", function (id) {
      var api = _this.props.api;
      var file = _this.state.file;

      var editor = _this.getEditor(id);

      if (!editor || !file) {
        return;
      }

      api.getMetadataAPI(false).deleteMetadata(file, editor.template, function () {
        return _this.onRemoveSuccessHandler(editor);
      }, _this.onApiError);
    });

    _defineProperty(_assertThisInitialized(_this), "onAddSuccessHandler", function (editor) {
      var _this$state$editors = _this.state.editors,
          editors = _this$state$editors === void 0 ? [] : _this$state$editors;
      var clone = editors.slice(0);
      clone.push(editor);

      _this.setState({
        editors: clone,
        isLoading: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAdd", function (template) {
      var api = _this.props.api;
      var file = _this.state.file;

      if (!file) {
        return;
      }

      _this.setState({
        isLoading: true
      });

      api.getMetadataAPI(false).createMetadata(file, template, _this.onAddSuccessHandler, _this.onApiError);
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function (id, ops) {
      var api = _this.props.api;
      var file = _this.state.file;

      var oldEditor = _this.getEditor(id);

      if (!oldEditor || !file) {
        return;
      }

      api.getMetadataAPI(false).updateMetadata(file, oldEditor.template, ops, function (newEditor) {
        _this.replaceEditor(oldEditor, newEditor);
      }, function (error, code) {
        _this.onSaveErrorHandler(oldEditor, error, code);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onModification", function (id, isDirty) {
      var oldEditor = _this.getEditor(id);

      if (!oldEditor) {
        return;
      }

      var newEditor = _objectSpread({}, oldEditor, {
        isDirty: isDirty
      }); // shallow clone suffices for isDirty setting


      _this.replaceEditor(oldEditor, newEditor);
    });

    _defineProperty(_assertThisInitialized(_this), "fetchMetadataErrorCallback", function (e, code) {
      _this.onApiError(e, code, {
        editors: undefined,
        error: _common_messages__WEBPACK_IMPORTED_MODULE_10__["default"].sidebarMetadataFetchingErrorContent,
        templates: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchMetadataSuccessCallback", function (_ref) {
      var editors = _ref.editors,
          templates = _ref.templates;
      var _this$props = _this.props,
          selectedTemplateKey = _this$props.selectedTemplateKey,
          templateFilters = _this$props.templateFilters;

      _this.setState({
        editors: editors.slice(0),
        // cloned for potential editing
        error: undefined,
        isLoading: false,
        templates: Object(_features_metadata_instance_editor_metadataUtil__WEBPACK_IMPORTED_MODULE_13__["normalizeTemplates"])(templates, selectedTemplateKey, templateFilters)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFileErrorCallback", function (e, code) {
      _this.onApiError(e, code, {
        error: _common_messages__WEBPACK_IMPORTED_MODULE_10__["default"].sidebarFileFetchingErrorContent,
        file: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFileSuccessCallback", function (file) {
      var currentFile = _this.state.file;
      var currentCanUpload = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(currentFile, _constants__WEBPACK_IMPORTED_MODULE_20__["FIELD_PERMISSIONS_CAN_UPLOAD"], false);
      var newCanUpload = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(file, _constants__WEBPACK_IMPORTED_MODULE_20__["FIELD_PERMISSIONS_CAN_UPLOAD"], false);
      var shouldFetchMetadata = !currentFile || currentCanUpload !== newCanUpload;
      var callback = shouldFetchMetadata ? _this.fetchMetadata : lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a;

      _this.setState({
        file: file
      }, callback);
    });

    var logger = _this.props.logger;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
    return _this;
  }

  _createClass(MetadataSidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchFile();
    }
    /**
     * Common error callback
     *
     * @param {Error} error - API error
     * @param {string} code - error code
     * @param {Object} [newState] - optional state to set
     * @return {void}
     */

  }, {
    key: "canEdit",

    /**
     * Checks upload permission
     *
     * @return {boolean} - true if metadata can be edited
     */
    value: function canEdit() {
      var file = this.state.file;
      return lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(file, _constants__WEBPACK_IMPORTED_MODULE_20__["FIELD_PERMISSIONS_CAN_UPLOAD"], false);
    }
    /**
     * Finds the editor we are editing
     *
     * @param {number} id - instance id
     * @return {Object} editor instance
     */

  }, {
    key: "getEditor",
    value: function getEditor(id) {
      var _this$state$editors2 = this.state.editors,
          editors = _this$state$editors2 === void 0 ? [] : _this$state$editors2;
      return editors.find(function (_ref2) {
        var instance = _ref2.instance;
        return instance.id === id;
      });
    }
    /**
     * Instance remove success handler
     *
     * @param {Object} editor - the editor to remove
     * @return {void}
     */

  }, {
    key: "onRemoveSuccessHandler",
    value: function onRemoveSuccessHandler(editor) {
      var _this$state$editors3 = this.state.editors,
          editors = _this$state$editors3 === void 0 ? [] : _this$state$editors3;
      var clone = editors.slice(0);
      clone.splice(editors.indexOf(editor), 1);
      this.setState({
        editors: clone
      });
    }
    /**
     * Instance remove handler
     *
     * @param {string} id - instance id
     * @return {void}
     */

  }, {
    key: "replaceEditor",

    /**
     * Instance save success handler
     *
     * @param {Object} oldEditor - prior editor
     * @param {Object} newEditor - updated editor
     * @return {void}
     */
    value: function replaceEditor(oldEditor, newEditor) {
      var _this$state$editors4 = this.state.editors,
          editors = _this$state$editors4 === void 0 ? [] : _this$state$editors4;
      var clone = editors.slice(0);
      clone.splice(editors.indexOf(oldEditor), 1, newEditor);
      this.setState({
        editors: clone
      });
    }
    /**
     * Instance save error handler
     *
     * @param {Object} oldEditor - prior editor
     * @param {Object} error - api error
     * @param {string} code - error code
     * @return {void}
     */

  }, {
    key: "onSaveErrorHandler",
    value: function onSaveErrorHandler(oldEditor, error, code) {
      var clone = _objectSpread({}, oldEditor, {
        hasError: true
      }); // shallow clone suffices for hasError setting


      this.replaceEditor(oldEditor, clone);
      this.onApiError(error, code);
    }
    /**
     * Instance save handler
     *
     * @param {string} id - instance id
     * @param {Array} ops - json patch ops
     * @return {void}
     */

  }, {
    key: "fetchMetadata",

    /**
     * Fetches the metadata editors
     *
     * @return {void}
     */
    value: function fetchMetadata() {
      var _this$props2 = this.props,
          api = _this$props2.api,
          isFeatureEnabled = _this$props2.isFeatureEnabled;
      var file = this.state.file;

      if (!file) {
        return;
      }

      api.getMetadataAPI(false).getMetadata(file, this.fetchMetadataSuccessCallback, this.fetchMetadataErrorCallback, isFeatureEnabled, {
        refreshCache: true
      });
    }
    /**
     * Handles a failed file fetch
     *
     * @private
     * @param {Error} e - API error
     * @param {string} code - error code
     * @return {void}
     */

  }, {
    key: "fetchFile",

    /**
     * Fetches a file with the fields needed for metadata sidebar
     *
     * @return {void}
     */
    value: function fetchFile() {
      var _this$props3 = this.props,
          api = _this$props3.api,
          fileId = _this$props3.fileId;
      api.getFileAPI().getFile(fileId, this.fetchFileSuccessCallback, this.fetchFileErrorCallback, {
        fields: [_constants__WEBPACK_IMPORTED_MODULE_20__["FIELD_IS_EXTERNALLY_OWNED"], _constants__WEBPACK_IMPORTED_MODULE_20__["FIELD_PERMISSIONS"]],
        refreshCache: true // see implications in file success callback

      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.fetchMetadata();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          editors = _this$state.editors,
          file = _this$state.file,
          error = _this$state.error,
          isLoading = _this$state.isLoading,
          templates = _this$state.templates;
      var _this$props4 = this.props,
          elementId = _this$props4.elementId,
          selectedTemplateKey = _this$props4.selectedTemplateKey;
      var showEditor = !!file && !!templates && !!editors;
      var showLoadingIndicator = !error && !showEditor;
      var canEdit = this.canEdit();
      var showTemplateDropdown = showEditor && canEdit;
      var showEmptyContent = showEditor && editors.length === 0;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_SidebarContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
        actions: showTemplateDropdown ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_features_metadata_instance_editor_TemplateDropdown__WEBPACK_IMPORTED_MODULE_12__["default"], {
          hasTemplates: templates && templates.length !== 0,
          isDropdownBusy: false,
          onAdd: this.onAdd // $FlowFixMe checked via showTemplateDropdown & showEditor
          ,
          templates: templates // $FlowFixMe checked via showTemplateDropdown & showEditor
          ,
          usedTemplates: editors.map(function (editor) {
            return editor.template;
          })
        }) : null,
        className: "bcs-metadata",
        elementId: elementId,
        sidebarView: _constants__WEBPACK_IMPORTED_MODULE_20__["SIDEBAR_VIEW_METADATA"],
        title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_10__["default"].sidebarMetadataTitle)
      }, error && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_10__["default"].error)
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), error)), showLoadingIndicator && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__["default"], null), showEditor && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "metadata-instance-editor",
        isLoading: isLoading
      }, showEmptyContent ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_features_metadata_instance_editor_EmptyContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        canAdd: canEdit
      }) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_features_metadata_instance_editor_Instances__WEBPACK_IMPORTED_MODULE_7__["default"], {
        editors: editors,
        onModification: this.onModification,
        onRemove: this.onRemove,
        onSave: this.onSave,
        selectedTemplateKey: selectedTemplateKey
      })));
    }
  }]);

  return MetadataSidebar;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(MetadataSidebar, "defaultProps", {
  isFeatureEnabled: true
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_1___default()([Object(_common_logger__WEBPACK_IMPORTED_MODULE_19__["withLogger"])(_constants__WEBPACK_IMPORTED_MODULE_20__["ORIGIN_METADATA_SIDEBAR"]), Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_18__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_20__["ORIGIN_METADATA_SIDEBAR"]), _common_api_context__WEBPACK_IMPORTED_MODULE_17__["withAPIContext"]])(MetadataSidebar));
//# sourceMappingURL=MetadataSidebar.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/MetadataSidebar.scss":
/*!***************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/MetadataSidebar.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./MetadataSidebar.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/MetadataSidebar.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/CascadePolicy.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/CascadePolicy.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/toggle */ "./node_modules/box-ui-elements/es/components/toggle/index.js");
/* harmony import */ var _components_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/radio */ "./node_modules/box-ui-elements/es/components/radio/index.js");
/* harmony import */ var _components_link_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/link/Link */ "./node_modules/box-ui-elements/es/components/link/Link.js");
/* harmony import */ var _icons_general_IconAlertDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/general/IconAlertDefault */ "./node_modules/box-ui-elements/es/icons/general/IconAlertDefault.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/messages.js");
/* harmony import */ var _CascadePolicy_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CascadePolicy.scss */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/CascadePolicy.scss");
/* harmony import */ var _CascadePolicy_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CascadePolicy_scss__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var COMMUNITY_LINK = 'https://community.box.com/t5/Organizing-and-Tracking-Content/Metadata/ta-p/30765';

var CascadePolicy = function CascadePolicy(_ref) {
  var canEdit = _ref.canEdit,
      isCascadingEnabled = _ref.isCascadingEnabled,
      isCascadingOverwritten = _ref.isCascadingOverwritten,
      isCustomMetadata = _ref.isCustomMetadata,
      onCascadeToggle = _ref.onCascadeToggle,
      onCascadeModeChange = _ref.onCascadeModeChange,
      shouldShowCascadeOptions = _ref.shouldShowCascadeOptions;
  var readOnlyState = isCascadingEnabled ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-cascade-notice"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_5__["default"].metadataCascadePolicyEnabledInfo)) : null;
  return canEdit ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-cascade-editor"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-cascade-enable"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    tagName: "strong"
  }, _messages__WEBPACK_IMPORTED_MODULE_5__["default"].enableCascadePolicy)), !isCustomMetadata && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_toggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "metadata-cascade-toggle ".concat(isCascadingEnabled ? 'cascade-on' : 'cascade-off'),
    isOn: isCascadingEnabled,
    label: "",
    onChange: function onChange(e) {
      return onCascadeToggle(e.target.checked);
    }
  })), !isCustomMetadata ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "cascade-policy-text"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_5__["default"].applyCascadePolicyText), "\xA0", !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_link_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "cascade-policy-learnmore-link",
    href: COMMUNITY_LINK,
    target: "_blank"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_5__["default"].cascadePolicyLearnMore))) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_5__["default"].cannotApplyCascadePolicyText)))), shouldShowCascadeOptions && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-cascade-editor"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-cascading-mode"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_5__["default"].cascadePolicyModeQuestion), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-operation-not-immediate"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconAlertDefault__WEBPACK_IMPORTED_MODULE_4__["default"], null), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_5__["default"].operationNotImmediate))), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_radio__WEBPACK_IMPORTED_MODULE_2__["RadioGroup"], {
    className: "metadata-cascading-options",
    onChange: function onChange(e) {
      return onCascadeModeChange(e.target.value === 'overwrite');
    },
    value: isCascadingOverwritten ? 'overwrite' : 'skip'
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_radio__WEBPACK_IMPORTED_MODULE_2__["RadioButton"], {
    label: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_5__["default"].cascadePolicySkipMode),
    value: "skip"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_radio__WEBPACK_IMPORTED_MODULE_2__["RadioButton"], {
    label: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_5__["default"].cascadePolicyOverwriteMode),
    value: "overwrite"
  }))))) : readOnlyState;
};

/* harmony default export */ __webpack_exports__["default"] = (CascadePolicy);
//# sourceMappingURL=CascadePolicy.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/CascadePolicy.scss":
/*!**********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/CascadePolicy.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./CascadePolicy.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/CascadePolicy.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/CustomInstance.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/CustomInstance.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomInstanceNewField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomInstanceNewField */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/CustomInstanceNewField.js");
/* harmony import */ var _fields_CustomField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields/CustomField */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/fields/CustomField.js");
/* harmony import */ var _EmptyContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmptyContent */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/EmptyContent.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/constants.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var CustomInstance =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CustomInstance, _React$PureComponent);

  _createClass(CustomInstance, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, _ref2) {
      var data = _ref.data;
      var properties = _ref2.properties;

      if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(data, properties)) {
        return {
          properties: _objectSpread({}, data)
        };
      }

      return null;
    }
  }]);

  function CustomInstance(props) {
    var _this;

    _classCallCheck(this, CustomInstance);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomInstance).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onFieldChange", function (key, value) {
      var _this$props = _this.props,
          canEdit = _this$props.canEdit,
          onFieldChange = _this$props.onFieldChange;

      if (canEdit && onFieldChange) {
        onFieldChange(key, value, _constants__WEBPACK_IMPORTED_MODULE_5__["FIELD_TYPE_STRING"]);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFieldRemove", function (key) {
      var _this$props2 = _this.props,
          canEdit = _this$props2.canEdit,
          onFieldRemove = _this$props2.onFieldRemove;

      if (canEdit && onFieldRemove) {
        onFieldRemove(key);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAddFieldToggle", function () {
      _this.setState(function (prevState) {
        return {
          isAddFieldVisible: !prevState.isAddFieldVisible
        };
      });
    });

    _this.state = {
      isAddFieldVisible: false,
      properties: _objectSpread({}, props.data)
    };
    return _this;
  }
  /**
   * Adds/updates a new metadata key value pair
   *
   * @param {string} key - metadata key
   * @param {string} value - metadata value
   * @return {void}
   */


  _createClass(CustomInstance, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var canEdit = this.props.canEdit;
      var _this$state = this.state,
          isAddFieldVisible = _this$state.isAddFieldVisible,
          properties = _this$state.properties;
      var fields = Object.keys(properties);
      var canAddFields = canEdit && (isAddFieldVisible || fields.length === 0);
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, fields.map(function (key, index) {
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_fields_CustomField__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: key,
          canEdit: canEdit,
          dataKey: key,
          dataValue: properties[key],
          isLast: !isAddFieldVisible && index === fields.length - 1,
          onAdd: _this2.onAddFieldToggle,
          onChange: _this2.onFieldChange,
          onRemove: _this2.onFieldRemove
        });
      }), !canAddFields && fields.length === 0 && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_EmptyContent__WEBPACK_IMPORTED_MODULE_4__["default"], null), canAddFields && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_CustomInstanceNewField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isCancellable: fields.length !== 0,
        onAdd: this.onFieldChange,
        onCancel: this.onAddFieldToggle,
        properties: this.props.data
      }));
    }
  }]);

  return CustomInstance;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(CustomInstance, "defaultProps", {
  canEdit: true,
  data: {}
});

/* harmony default export */ __webpack_exports__["default"] = (CustomInstance);
//# sourceMappingURL=CustomInstance.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/CustomInstanceNewField.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/CustomInstanceNewField.js ***!
  \*****************************************************************************************************/
/*! exports provided: CustomInstanceNewFieldBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInstanceNewFieldBase", function() { return CustomInstanceNewField; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button/Button */ "./node_modules/box-ui-elements/es/components/button/Button.js");
/* harmony import */ var _components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/text-input/TextInput */ "./node_modules/box-ui-elements/es/components/text-input/TextInput.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tooltip/Tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/Tooltip.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/messages */ "./node_modules/box-ui-elements/es/common/messages.js");
/* harmony import */ var _icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/general/IconInfo */ "./node_modules/box-ui-elements/es/icons/general/IconInfo.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/messages.js");
/* harmony import */ var _CustomInstanceNewField_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomInstanceNewField.scss */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/CustomInstanceNewField.scss");
/* harmony import */ var _CustomInstanceNewField_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CustomInstanceNewField_scss__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var CustomInstanceNewField =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CustomInstanceNewField, _React$PureComponent);

  function CustomInstanceNewField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CustomInstanceNewField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomInstanceNewField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      key: '',
      value: '',
      error: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyChange", function (event) {
      _this.onChange(event, 'key');
    });

    _defineProperty(_assertThisInitialized(_this), "onValueChange", function (event) {
      _this.onChange(event, 'value');
    });

    _defineProperty(_assertThisInitialized(_this), "onAdd", function () {
      var _this$state = _this.state,
          key = _this$state.key,
          value = _this$state.value;
      var _this$props = _this.props,
          onAdd = _this$props.onAdd,
          properties = _this$props.properties;

      if (Object.prototype.hasOwnProperty.call(properties, key)) {
        _this.setState({
          error: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_6__["default"].customErrorDuplicateKey)
        });
      } else if (key.startsWith('$')) {
        _this.setState({
          error: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_6__["default"].customErrorInternalKey)
        });
      } else if (key) {
        onAdd(key, value);
      } else {
        _this.setState({
          error: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_6__["default"].customErrorRequired)
        });
      }
    });

    return _this;
  }

  _createClass(CustomInstanceNewField, [{
    key: "onChange",

    /**
     * Common change handler
     *
     * @param {Event} event - keyboard event
     * @param {string} attr - key or value
     * @return {void}
     */
    value: function onChange(event, attr) {
      var currentTarget = event.currentTarget;
      this.setState(_defineProperty({
        error: ''
      }, attr, currentTarget.value));
    }
    /**
     * Change handler for the key
     *
     * @param {Event} event - keyboard event
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          isCancellable = _this$props2.isCancellable,
          onCancel = _this$props2.onCancel;
      var _this$state2 = this.state,
          key = _this$state2.key,
          value = _this$state2.value,
          error = _this$state2.error;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "custom-new-field"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "custom-new-field-header"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
        tagName: "h5"
      }, _messages__WEBPACK_IMPORTED_MODULE_6__["default"].customNewField)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_6__["default"].customNewFieldMessage)
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        tabIndex: "-1"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#777",
        height: 18,
        width: 18
      })))), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
        error: error,
        isRequired: true,
        label: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_6__["default"].customKey),
        onChange: this.onKeyChange,
        placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_6__["default"].customKeyPlaceholder),
        type: "text",
        value: key
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
        hideOptionalLabel: true,
        label: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_6__["default"].customValue),
        onChange: this.onValueChange,
        placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_6__["default"].customValuePlaceholder),
        type: "text",
        value: value
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "custom-new-field-actions"
      }, isCancellable && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        "data-resin-target": "metadata-customfieldcancel",
        onClick: onCancel,
        type: "button"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].cancel)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        "data-resin-target": "metadata-customfieldadd",
        onClick: this.onAdd,
        type: "button"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_6__["default"].customAdd))));
    }
  }]);

  return CustomInstanceNewField;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(CustomInstanceNewField));
//# sourceMappingURL=CustomInstanceNewField.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/CustomInstanceNewField.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/CustomInstanceNewField.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./CustomInstanceNewField.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/CustomInstanceNewField.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/EmptyContent.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/EmptyContent.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _icons_general_IconAddMetadataEmptyState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/general/IconAddMetadataEmptyState */ "./node_modules/box-ui-elements/es/icons/general/IconAddMetadataEmptyState.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/messages.js");
/* harmony import */ var _EmptyContent_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmptyContent.scss */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/EmptyContent.scss");
/* harmony import */ var _EmptyContent_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_EmptyContent_scss__WEBPACK_IMPORTED_MODULE_3__);






var EmptyContent = function EmptyContent(_ref) {
  var canAdd = _ref.canAdd;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-instance-editor-no-instances"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconAddMetadataEmptyState__WEBPACK_IMPORTED_MODULE_1__["default"], null), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", {
    className: "metadata-instance-editor-no-instances--call-out"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].noMetadata)), canAdd && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", {
    className: "metadata-instance-editor-no-instances--how-add-template"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].noMetadataAddTemplate)));
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyContent);
//# sourceMappingURL=EmptyContent.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/EmptyContent.scss":
/*!*********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/EmptyContent.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./EmptyContent.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/EmptyContent.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/Footer.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/Footer.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button/Button */ "./node_modules/box-ui-elements/es/components/button/Button.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./node_modules/box-ui-elements/es/components/plain-button/PlainButton.js");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/primary-button/PrimaryButton */ "./node_modules/box-ui-elements/es/components/primary-button/PrimaryButton.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/messages.js");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer.scss */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/Footer.scss");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_5__);








var Footer = function Footer(_ref) {
  var onCancel = _ref.onCancel,
      onRemove = _ref.onRemove,
      showSave = _ref.showSave;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-instance-editor-footer"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-instance-editor-footer-delete"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": "metadata-instanceremove",
    onClick: onRemove,
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_4__["default"].metadataRemoveTemplate))), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-instance-editor-footer-save-cancel"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-resin-target": "metadata-instancecancel",
    onClick: onCancel,
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_4__["default"].metadataCancel)), showSave && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "data-resin-target": "metadata-instancesave"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_4__["default"].metadataSave))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);
//# sourceMappingURL=Footer.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/Footer.scss":
/*!***************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/Footer.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./Footer.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/Footer.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/Instance.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/Instance.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_collapsible_Collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/collapsible/Collapsible */ "./node_modules/box-ui-elements/es/components/collapsible/Collapsible.js");
/* harmony import */ var _components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form-elements/form/Form */ "./node_modules/box-ui-elements/es/components/form-elements/form/Form.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicatorWrapper */ "./node_modules/box-ui-elements/es/components/loading-indicator/LoadingIndicatorWrapper.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./node_modules/box-ui-elements/es/components/plain-button/PlainButton.js");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/index.js");
/* harmony import */ var _icons_general_IconMetadataColored__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../icons/general/IconMetadataColored */ "./node_modules/box-ui-elements/es/icons/general/IconMetadataColored.js");
/* harmony import */ var _icons_general_IconAlertCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../icons/general/IconAlertCircle */ "./node_modules/box-ui-elements/es/icons/general/IconAlertCircle.js");
/* harmony import */ var _icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../icons/general/IconEdit */ "./node_modules/box-ui-elements/es/icons/general/IconEdit.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/box-ui-elements/es/utils/dom.js");
/* harmony import */ var _CascadePolicy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CascadePolicy */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/CascadePolicy.js");
/* harmony import */ var _TemplatedInstance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TemplatedInstance */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplatedInstance.js");
/* harmony import */ var _CustomInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CustomInstance */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/CustomInstance.js");
/* harmony import */ var _MetadataInstanceConfirmDialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./MetadataInstanceConfirmDialog */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/MetadataInstanceConfirmDialog.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Footer */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/Footer.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./constants */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/constants.js");
/* harmony import */ var _fields_validateField__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fields/validateField */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/fields/validateField.js");
/* harmony import */ var _metadataUtil__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./metadataUtil */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/metadataUtil.js");
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/variables */ "./node_modules/box-ui-elements/es/common/variables.js");
/* harmony import */ var _Instance_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Instance.scss */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/Instance.scss");
/* harmony import */ var _Instance_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_Instance_scss__WEBPACK_IMPORTED_MODULE_24__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





























var createFieldKeyToTypeMap = function createFieldKeyToTypeMap() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return fields.reduce(function (prev, _ref) {
    var key = _ref.key,
        type = _ref.type;
    prev[key] = type;
    return prev;
  }, {});
};

var getValue = function getValue(data, key, type) {
  var value = data[key];

  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_20__["FIELD_TYPE_FLOAT"]:
      return parseFloat(value);

    case _constants__WEBPACK_IMPORTED_MODULE_20__["FIELD_TYPE_INTEGER"]:
      return parseInt(value, 10);

    default:
      return value;
  }
};

var Instance =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Instance, _React$PureComponent);

  function Instance(props) {
    var _this;

    _classCallCheck(this, Instance);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Instance).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          onModification = _this$props.onModification;

      _this.setState(_this.getState(_this.props)); // Callback to parent to tell that something is dirty


      if (onModification) {
        onModification(id, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onConfirmRemove", function () {
      _this.setState({
        shouldConfirmRemove: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onConfirmCancel", function () {
      _this.setState({
        shouldConfirmRemove: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onRemove", function () {
      if (!_this.isEditing()) {
        return;
      }

      var _this$props2 = _this.props,
          id = _this$props2.id,
          onRemove = _this$props2.onRemove;

      if (onRemove) {
        onRemove(id);

        _this.setState({
          isBusy: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function () {
      var _this$props3 = _this.props,
          cascadePolicy = _this$props3.cascadePolicy,
          originalData = _this$props3.data,
          id = _this$props3.id,
          isDirty = _this$props3.isDirty,
          isCascadingPolicyApplicable = _this$props3.isCascadingPolicyApplicable,
          onSave = _this$props3.onSave;
      var _this$state = _this.state,
          currentData = _this$state.data,
          errors = _this$state.errors,
          isCascadingEnabled = _this$state.isCascadingEnabled,
          isCascadingOverwritten = _this$state.isCascadingOverwritten;

      if (!_this.isEditing() || !isDirty || !onSave || Object.keys(errors).length) {
        return;
      }

      _this.setState({
        isBusy: true,
        isEditing: false,
        shouldShowCascadeOptions: false
      });

      onSave(id, _this.createJSONPatch(currentData, originalData), isCascadingPolicyApplicable ? {
        canEdit: cascadePolicy ? cascadePolicy.canEdit : false,
        id: cascadePolicy ? cascadePolicy.id : undefined,
        isEnabled: isCascadingEnabled,
        overwrite: isCascadingOverwritten
      } : undefined, lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(currentData));
    });

    _defineProperty(_assertThisInitialized(_this), "onFieldChange", function (key, value, type) {
      var _this$state2 = _this.state,
          data = _this$state2.data,
          errors = _this$state2.errors; // Don't do anything if data is the same or not in edit mode

      if (!_this.isEditing() || lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(data[key], value)) {
        return;
      }

      var isValid = Object(_fields_validateField__WEBPACK_IMPORTED_MODULE_21__["isValidValue"])(type, value);

      var finalErrors = _objectSpread({}, errors);

      var finalData = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(data);
      finalData[key] = value;

      if (isValid) {
        delete finalErrors[key];
      } else {
        finalErrors[key] = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_19__["default"].invalidInput);
      }

      _this.setState({
        data: finalData,
        errors: finalErrors
      }, function () {
        _this.setDirty(type);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFieldRemove", function (key) {
      if (!_this.isEditing()) {
        return;
      }

      var _this$state3 = _this.state,
          data = _this$state3.data,
          errors = _this$state3.errors;
      var finalData = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(data);

      var finalErrors = _objectSpread({}, errors);

      delete finalData[key];
      delete finalErrors[key];

      _this.setState({
        data: finalData,
        errors: finalErrors
      }, _this.setDirty);
    });

    _defineProperty(_assertThisInitialized(_this), "onCascadeToggle", function (value) {
      var isCascadingPolicyApplicable = _this.props.isCascadingPolicyApplicable;

      if (!isCascadingPolicyApplicable) {
        return;
      }

      _this.setState({
        isCascadingEnabled: value,
        shouldShowCascadeOptions: value
      }, _this.setDirty);
    });

    _defineProperty(_assertThisInitialized(_this), "onCascadeModeChange", function (value) {
      var isCascadingPolicyApplicable = _this.props.isCascadingPolicyApplicable;

      if (!isCascadingPolicyApplicable) {
        return;
      }

      _this.setState({
        isCascadingOverwritten: value
      }, _this.setDirty);
    });

    _defineProperty(_assertThisInitialized(_this), "renderDeleteMessage", function (isFile, template) {
      var message;
      var isProperties = template.templateKey === _constants__WEBPACK_IMPORTED_MODULE_20__["TEMPLATE_CUSTOM_PROPERTIES"];

      if (isProperties) {
        message = isFile ? 'fileMetadataRemoveCustomTemplateConfirm' : 'folderMetadataRemoveCustomTemplateConfirm';
      } else {
        message = isFile ? 'fileMetadataRemoveTemplateConfirm' : 'folderMetadataRemoveTemplateConfirm';
      }

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _messages__WEBPACK_IMPORTED_MODULE_19__["default"][message], {
        values: {
          metadataName: template.displayName
        }
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "setDirty", function (type) {
      var _this$props4 = _this.props,
          id = _this$props4.id,
          isCascadingPolicyApplicable = _this$props4.isCascadingPolicyApplicable,
          onModification = _this$props4.onModification;
      var _this$state4 = _this.state,
          data = _this$state4.data,
          isCascadingEnabled = _this$state4.isCascadingEnabled,
          isCascadingOverwritten = _this$state4.isCascadingOverwritten;
      var hasDataChanged = !lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(data, _this.props.data);
      var hasCascadingChanged = false;

      if (isCascadingPolicyApplicable) {
        // isCascadingOverwritten always starts out as false, so true signifies a change
        hasCascadingChanged = isCascadingOverwritten || isCascadingEnabled !== _this.isCascadingEnabled(_this.props);
      } // Callback to parent to tell that something is dirty


      if (onModification) {
        onModification(id, hasDataChanged || hasCascadingChanged, type);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "collapsibleRef", !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());

    _defineProperty(_assertThisInitialized(_this), "toggleIsEditing", function () {
      _this.setState(function (prevState) {
        return {
          isEditing: !prevState.isEditing
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderEditButton", function () {
      var isDirty = _this.props.isDirty;
      var isBusy = _this.state.isBusy;

      var canEdit = _this.canEdit();

      var isEditing = _this.isEditing();

      var editClassName = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('metadata-instance-editor-instance-edit', {
        'metadata-instance-editor-instance-is-editing': isEditing
      });

      if (canEdit && !isDirty && !isBusy) {
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_tooltip__WEBPACK_IMPORTED_MODULE_8__["default"], {
          position: "top-left",
          text: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_19__["default"].metadataEditTooltip)
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: editClassName,
          "data-resin-target": "metadata-instanceedit",
          onClick: _this.toggleIsEditing,
          type: "button"
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_11__["default"], null)));
      }

      return null;
    });

    _this.state = _this.getState(props);
    _this.fieldKeyToTypeMap = createFieldKeyToTypeMap(props.template.fields);
    return _this;
  }

  _createClass(Instance, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2, prevState) {
      var prevHasError = _ref2.hasError,
          prevIsDirty = _ref2.isDirty;
      var currentElement = this.collapsibleRef.current;
      var _this$props5 = this.props,
          hasError = _this$props5.hasError,
          isDirty = _this$props5.isDirty;
      var isEditing = prevState.isEditing;

      if (currentElement && this.state.shouldConfirmRemove) {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_13__["scrollIntoView"])(currentElement, {
          block: 'start',
          behavior: 'smooth'
        });
      }

      if (hasError && hasError !== prevHasError) {
        // If hasError is true, which means an error occurred while
        // doing a network operation and hence hide the busy indicator
        // Saving also disables isEditing, so need to enable that back.
        // isDirty remains as it was before.
        this.setState({
          isBusy: false,
          isEditing: true
        });
      } else if (prevIsDirty && !isDirty) {
        // If the form was dirty and now its not dirty
        // we know a successful save may have happened.
        // We don't modify isEditing here because we maintain the
        // prior state for that. If we came here from a save
        // success then save already disabled isEditing.
        if (isEditing) {
          // We are still editing so don't reset it
          this.setState({
            isBusy: false
          });
        } else {
          // For a successfull save we reset cascading overwrite radio
          this.setState({
            isBusy: false,
            isCascadingOverwritten: false
          });
        }
      }
    }
    /**
     * Undo any changes made
     *
     * @return {void}
     */

  }, {
    key: "getState",

    /**
     * Returns the state from props
     *
     * @return {Object} - react state
     */
    value: function getState(props) {
      return {
        data: lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(props.data),
        errors: {},
        isBusy: false,
        isCascadingEnabled: this.isCascadingEnabled(props),
        isCascadingOverwritten: false,
        isEditing: false,
        shouldConfirmRemove: false,
        shouldShowCascadeOptions: false
      };
    }
    /**
     * Returns the card title with possible error mark
     *
     * @return {Object} - react title element
     */

  }, {
    key: "getTitle",
    value: function getTitle() {
      var _this$props6 = this.props,
          _this$props6$cascadeP = _this$props6.cascadePolicy,
          cascadePolicy = _this$props6$cascadeP === void 0 ? {} : _this$props6$cascadeP,
          hasError = _this$props6.hasError,
          isCascadingPolicyApplicable = _this$props6.isCascadingPolicyApplicable,
          template = _this$props6.template;
      var isProperties = template.templateKey === _constants__WEBPACK_IMPORTED_MODULE_20__["TEMPLATE_CUSTOM_PROPERTIES"];
      var type = isCascadingPolicyApplicable && cascadePolicy.id ? 'cascade' : 'default';
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
        className: "metadata-instance-editor-instance-title"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconMetadataColored__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: type
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
        className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('metadata-instance-editor-instance-title-text', {
          'metadata-instance-editor-instance-has-error': hasError
        })
      }, isProperties ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_19__["default"].customTitle) : template.displayName), hasError && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconAlertCircle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: _styles_variables__WEBPACK_IMPORTED_MODULE_12__["bdlWatermelonRed"]
      }));
    }
    /**
     * Render the correct delete message to show based on custom metadata and file/folder metadata
     */

  }, {
    key: "getConfirmationMessage",

    /**
     * Get the delete confirmation message base on the template key
     */
    value: function getConfirmationMessage() {
      var _this$props7 = this.props,
          template = _this$props7.template,
          isCascadingPolicyApplicable = _this$props7.isCascadingPolicyApplicable;
      var isFile = !isCascadingPolicyApplicable;
      return this.renderDeleteMessage(isFile, template);
    }
    /**
     * Evaluates if the metadata was changed or cascading policy
     * altered or enabled.
     *
     * @return {void}
     */

  }, {
    key: "isCascadingEnabled",

    /**
     * Determines if cascading policy is enabled based on
     * whether it has an id or not.
     *
     * @param {Object} props - component props
     * @return {boolean} true if cascading policy is enabled
     */
    value: function isCascadingEnabled(props) {
      if (props.cascadePolicy) {
        return !!props.cascadePolicy.id;
      }

      return false;
    }
    /**
     * Toggles the edit mode
     *
     * @private
     * @return {void}
     */

  }, {
    key: "createJSONPatch",

    /**
     * Creates JSON Patch operations from the passed in
     * data while comparing it to the original data from props.
     *
     * Only diffs at the root level and primitives.
     *
     * @param {*} currentData - the latest changes by the user
     * @param {*} originalData - the original values
     * @return {Array} - JSON patch operations
     */
    value: function createJSONPatch(currentData, originalData) {
      var _this2 = this;

      var ops = [];
      var data = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(currentData); // clone the data for mutation
      // Iterate over the original data and find keys that have changed.
      // Also remove them from the data object to only leave new keys.

      Object.keys(originalData).forEach(function (key) {
        var type = _this2.fieldKeyToTypeMap[key];
        var originalValue = getValue(originalData, key, type);
        var path = "/".concat(key);

        if (Object.prototype.hasOwnProperty.call(data, key)) {
          var value = getValue(data, key, type); // Only register changed data

          if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(value, originalValue)) {
            // Add a test OP for each replaces
            ops.push({
              op: _constants__WEBPACK_IMPORTED_MODULE_20__["JSON_PATCH_OP_TEST"],
              path: path,
              value: originalValue
            });
            ops.push({
              op: _constants__WEBPACK_IMPORTED_MODULE_20__["JSON_PATCH_OP_REPLACE"],
              path: path,
              value: value
            });
          }
        } else {
          // Key was removed
          // Add a test OP for removes
          ops.push({
            op: _constants__WEBPACK_IMPORTED_MODULE_20__["JSON_PATCH_OP_TEST"],
            path: path,
            value: originalValue
          });
          ops.push({
            op: _constants__WEBPACK_IMPORTED_MODULE_20__["JSON_PATCH_OP_REMOVE"],
            path: path
          });
        }

        delete data[key];
      }); // Iterate over the remaining keys that are new.

      Object.keys(data).forEach(function (key) {
        var type = _this2.fieldKeyToTypeMap[key];
        var value = getValue(data, key, type);
        ops.push({
          op: _constants__WEBPACK_IMPORTED_MODULE_20__["JSON_PATCH_OP_ADD"],
          path: "/".concat(key),
          value: value
        });
      });
      return ops;
    }
    /**
     * Utility function to determine if instance is editable
     *
     * @return {boolean} true if editable
     */

  }, {
    key: "canEdit",
    value: function canEdit() {
      var _this$props8 = this.props,
          canEdit = _this$props8.canEdit,
          onModification = _this$props8.onModification,
          onRemove = _this$props8.onRemove,
          onSave = _this$props8.onSave;
      return canEdit && typeof onRemove === 'function' && typeof onSave === 'function' && typeof onModification === 'function';
    }
    /**
     * Utility function to determine if instance is in edit mode
     *
     * @return {boolean} true if editing
     */

  }, {
    key: "isEditing",
    value: function isEditing() {
      var isEditing = this.state.isEditing;
      return this.canEdit() && isEditing;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
          _this$props9$cascadeP = _this$props9.cascadePolicy,
          cascadePolicy = _this$props9$cascadeP === void 0 ? {} : _this$props9$cascadeP,
          isDirty = _this$props9.isDirty,
          isCascadingPolicyApplicable = _this$props9.isCascadingPolicyApplicable,
          isOpen = _this$props9.isOpen,
          template = _this$props9.template;
      var _template$fields = template.fields,
          fields = _template$fields === void 0 ? [] : _template$fields;
      var _this$state5 = this.state,
          data = _this$state5.data,
          errors = _this$state5.errors,
          isBusy = _this$state5.isBusy,
          isCascadingEnabled = _this$state5.isCascadingEnabled,
          shouldConfirmRemove = _this$state5.shouldConfirmRemove,
          shouldShowCascadeOptions = _this$state5.shouldShowCascadeOptions,
          isCascadingOverwritten = _this$state5.isCascadingOverwritten;
      var isProperties = template.templateKey === _constants__WEBPACK_IMPORTED_MODULE_20__["TEMPLATE_CUSTOM_PROPERTIES"];
      var isEditing = this.isEditing();

      if (!template || Object(_metadataUtil__WEBPACK_IMPORTED_MODULE_22__["isHidden"])(template)) {
        return null;
      } // Animate short and tall cards at consistent speeds.


      var animationDuration = (fields.length + 1) * 50;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        ref: this.collapsibleRef
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_collapsible_Collapsible__WEBPACK_IMPORTED_MODULE_4__["default"], {
        animationDuration: animationDuration,
        buttonProps: _defineProperty({}, _common_variables__WEBPACK_IMPORTED_MODULE_23__["RESIN_TAG_TARGET"], 'metadata-card'),
        hasStickyHeader: true,
        headerActionItems: this.renderEditButton(),
        isBordered: true,
        isOpen: isOpen,
        title: this.getTitle()
      }, shouldConfirmRemove && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isLoading: isBusy
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_MetadataInstanceConfirmDialog__WEBPACK_IMPORTED_MODULE_17__["default"], {
        confirmationMessage: this.getConfirmationMessage(),
        onCancel: this.onConfirmCancel,
        onConfirm: this.onRemove
      })), !shouldConfirmRemove && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isLoading: isBusy
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onValidSubmit: isDirty ? this.onSave : lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "metadata-instance-editor-instance"
      }, isCascadingPolicyApplicable && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_CascadePolicy__WEBPACK_IMPORTED_MODULE_14__["default"], {
        canEdit: isEditing && !!cascadePolicy.canEdit,
        isCascadingEnabled: isCascadingEnabled,
        isCascadingOverwritten: isCascadingOverwritten,
        isCustomMetadata: isProperties,
        onCascadeModeChange: this.onCascadeModeChange,
        onCascadeToggle: this.onCascadeToggle,
        shouldShowCascadeOptions: shouldShowCascadeOptions
      }), isProperties ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_CustomInstance__WEBPACK_IMPORTED_MODULE_16__["default"], {
        canEdit: isEditing,
        data: data,
        onFieldChange: this.onFieldChange,
        onFieldRemove: this.onFieldRemove
      }) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_TemplatedInstance__WEBPACK_IMPORTED_MODULE_15__["default"], {
        canEdit: isEditing,
        data: data,
        errors: errors,
        onFieldChange: this.onFieldChange,
        onFieldRemove: this.onFieldRemove,
        template: template
      })), isEditing && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Footer__WEBPACK_IMPORTED_MODULE_18__["default"], {
        onCancel: this.onCancel,
        onRemove: this.onConfirmRemove,
        showSave: isDirty
      })))));
    }
  }]);

  return Instance;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(Instance, "defaultProps", {
  data: {},
  isDirty: false
});

/* harmony default export */ __webpack_exports__["default"] = (Instance);
//# sourceMappingURL=Instance.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/Instance.scss":
/*!*****************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/Instance.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./Instance.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/Instance.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/Instances.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/Instances.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Instance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instance */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/Instance.js");



var Instances = function Instances(_ref) {
  var _ref$isCascadingPolic = _ref.isCascadingPolicyApplicable,
      isCascadingPolicyApplicable = _ref$isCascadingPolic === void 0 ? false : _ref$isCascadingPolic,
      _ref$editors = _ref.editors,
      editors = _ref$editors === void 0 ? [] : _ref$editors,
      onModification = _ref.onModification,
      onRemove = _ref.onRemove,
      onSave = _ref.onSave,
      selectedTemplateKey = _ref.selectedTemplateKey;
  return editors.map(function (_ref2) {
    var _ref2$isDirty = _ref2.isDirty,
        isDirty = _ref2$isDirty === void 0 ? false : _ref2$isDirty,
        instance = _ref2.instance,
        _ref2$hasError = _ref2.hasError,
        hasError = _ref2$hasError === void 0 ? false : _ref2$hasError,
        template = _ref2.template;
    var templateKey = template.templateKey;
    var isOpen = editors.length === 1 || templateKey === selectedTemplateKey;
    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Instance__WEBPACK_IMPORTED_MODULE_1__["default"], {
      canEdit: instance.canEdit,
      cascadePolicy: instance.cascadePolicy,
      data: instance.data,
      hasError: hasError,
      id: instance.id,
      isCascadingPolicyApplicable: isCascadingPolicyApplicable,
      isDirty: isDirty,
      isOpen: isOpen,
      key: "".concat(instance.id, "-").concat(templateKey),
      onModification: onModification,
      onSave: onSave,
      onRemove: onRemove,
      template: template
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Instances);
//# sourceMappingURL=Instances.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/MetadataInstanceConfirmDialog.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/MetadataInstanceConfirmDialog.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button/Button */ "./node_modules/box-ui-elements/es/components/button/Button.js");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/primary-button/PrimaryButton */ "./node_modules/box-ui-elements/es/components/primary-button/PrimaryButton.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/messages.js");
/* harmony import */ var _MetadataInstanceConfirmDialog_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MetadataInstanceConfirmDialog.scss */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/MetadataInstanceConfirmDialog.scss");
/* harmony import */ var _MetadataInstanceConfirmDialog_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MetadataInstanceConfirmDialog_scss__WEBPACK_IMPORTED_MODULE_4__);







var MetadataInstanceConfirmDialog = function MetadataInstanceConfirmDialog(_ref) {
  var onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      confirmationMessage = _ref.confirmationMessage;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-instance-confirm-cover"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-instance-confim-container"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", {
    className: "metadata-instance-confirm-text"
  }, confirmationMessage), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-instance-confirm-buttons"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-resin-target": "metadata-confirmcancel",
    onClick: onCancel,
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_3__["default"].metadataCancel)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": "metadata-confirmremove",
    onClick: onConfirm,
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_3__["default"].customRemove)))));
};

/* harmony default export */ __webpack_exports__["default"] = (MetadataInstanceConfirmDialog);
//# sourceMappingURL=MetadataInstanceConfirmDialog.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/MetadataInstanceConfirmDialog.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/MetadataInstanceConfirmDialog.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./MetadataInstanceConfirmDialog.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/MetadataInstanceConfirmDialog.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplateDropdown.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplateDropdown.js ***!
  \***********************************************************************************************/
/*! exports provided: TemplateDropdownBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDropdownBase", function() { return TemplateDropdown; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_datalist_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/datalist-item */ "./node_modules/box-ui-elements/es/components/datalist-item/index.js");
/* harmony import */ var _components_selector_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/selector-dropdown */ "./node_modules/box-ui-elements/es/components/selector-dropdown/index.js");
/* harmony import */ var _components_search_form_SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/search-form/SearchForm */ "./node_modules/box-ui-elements/es/components/search-form/SearchForm.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/loading-indicator */ "./node_modules/box-ui-elements/es/components/loading-indicator/index.js");
/* harmony import */ var _components_flyout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/flyout */ "./node_modules/box-ui-elements/es/components/flyout/index.js");
/* harmony import */ var _components_dropdown_menu_MenuToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dropdown-menu/MenuToggle */ "./node_modules/box-ui-elements/es/components/dropdown-menu/MenuToggle.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/constants.js");
/* harmony import */ var _TemplateDropdown_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TemplateDropdown.scss */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplateDropdown.scss");
/* harmony import */ var _TemplateDropdown_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_TemplateDropdown_scss__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















var InputContainer = function InputContainer(_ref) {
  var _ref$inputProps = _ref.inputProps,
      inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps,
      rest = _objectWithoutProperties(_ref, ["inputProps"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_search_form_SearchForm__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, inputProps, rest, {
    shouldPreventClearEventPropagation: true,
    "data-resin-target": "metadata-templatesearch"
  }));
};

var getAvailableTemplates = function getAvailableTemplates(allTemplates, usedTemplates) {
  return allTemplates.filter(function (template) {
    return usedTemplates.findIndex(function (usedTemplate) {
      return usedTemplate.templateKey === template.templateKey && usedTemplate.scope === template.scope;
    }) === -1;
  });
};

var TemplateDropdown =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TemplateDropdown, _React$PureComponent);

  function TemplateDropdown(props) {
    var _this;

    _classCallCheck(this, TemplateDropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateDropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getDropdown", function () {
      var _this$props = _this.props,
          isDropdownBusy = _this$props.isDropdownBusy,
          onAdd = _this$props.onAdd,
          activeTemplate = _this$props.activeTemplate,
          defaultTemplateIcon = _this$props.defaultTemplateIcon,
          activeTemplateIcon = _this$props.activeTemplateIcon,
          allTemplates = _this$props.templates,
          title = _this$props.title,
          usedTemplates = _this$props.usedTemplates;
      var templates = _this.state.templates;
      var hasUnusedTemplates = getAvailableTemplates(allTemplates, usedTemplates).length > 0;
      var hasTemplates = allTemplates.length > 0;
      var hasResults = templates.length > 0;
      var indicatorOrMessage = null;

      if (isDropdownBusy) {
        indicatorOrMessage = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_loading_indicator__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "metadata-instance-editor-template-message template-dropdown-loading-indicator"
        });
      } else if (!hasTemplates || !hasUnusedTemplates || !hasResults) {
        var message = {
          id: ''
        };

        if (!hasTemplates) {
          message = _messages__WEBPACK_IMPORTED_MODULE_9__["default"].metadataTemplatesServerHasNoTemplates;
        } else if (!hasUnusedTemplates) {
          message = _messages__WEBPACK_IMPORTED_MODULE_9__["default"].metadataTemplatesNoRemainingTemplates;
        } else if (!hasResults) {
          message = _messages__WEBPACK_IMPORTED_MODULE_9__["default"].metadataTemplatesNoResults;
        }

        indicatorOrMessage = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
          className: "metadata-instance-editor-template-message"
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), message));
      }

      var renderedTemplates = templates.map(function (template) {
        var isTemplateSelected = activeTemplate && activeTemplate.id === template.id;
        var buttonClassName = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('metadata-template-dropdown-select-template', {
          'metadata-template-dropdown-is-selected': isTemplateSelected
        });
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_datalist_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: template.id
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: buttonClassName,
          tabIndex: "-1",
          type: "button"
        }, isTemplateSelected ? activeTemplateIcon : defaultTemplateIcon, _this.getTemplateName(template)));
      });
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_selector_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "metadata-instance-editor-template-dropdown-menu",
        title: title,
        isAlwaysOpen: true,
        onSelect: function onSelect(index) {
          onAdd(templates[index]);
        },
        selector: _this.getSelector(),
        shouldScroll: true
      }, indicatorOrMessage ? null : renderedTemplates), indicatorOrMessage);
    });

    _defineProperty(_assertThisInitialized(_this), "getSelector", function () {
      var intl = _this.props.intl;
      var filterText = _this.state.filterText;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(InputContainer, {
        label: "",
        onChange: _this.handleUserInput,
        placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_9__["default"].metadataTemplateSearchPlaceholder),
        type: "text",
        useClearButton: true,
        value: filterText
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleUserInput", function (userInput) {
      var _this$props2 = _this.props,
          allTemplates = _this$props2.templates,
          usedTemplates = _this$props2.usedTemplates;
      var filterText = userInput;
      var templates = getAvailableTemplates(allTemplates, usedTemplates);

      _this.setState({
        filterText: filterText,
        templates: templates.filter(function (template) {
          var label = template.templateKey === _constants__WEBPACK_IMPORTED_MODULE_10__["TEMPLATE_CUSTOM_PROPERTIES"] ? _messages__WEBPACK_IMPORTED_MODULE_9__["default"].customTitle.defaultMessage : template.displayName;
          return label.toLowerCase().includes(filterText.toLowerCase());
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onOpen", function () {
      var _this$props3 = _this.props,
          onDropdownToggle = _this$props3.onDropdownToggle,
          templates = _this$props3.templates,
          usedTemplates = _this$props3.usedTemplates;

      if (onDropdownToggle) {
        onDropdownToggle(true);
      }

      _this.setState({
        isDropdownOpen: true,
        filterText: '',
        templates: getAvailableTemplates(templates, usedTemplates)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClose", function () {
      var onDropdownToggle = _this.props.onDropdownToggle;

      if (onDropdownToggle) {
        onDropdownToggle(false);
      }

      _this.setState({
        isDropdownOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderEntryButton", function () {
      var entryButton = _this.props.entryButton;
      var isDropdownOpen = _this.state.isDropdownOpen;
      var buttonToggleClassName = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('lnk', {
        'is-toggled': isDropdownOpen
      });

      if (entryButton) {
        return entryButton;
      }

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        "data-resin-target": "metadata-templateaddmenu",
        className: buttonToggleClassName,
        type: "button"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_dropdown_menu_MenuToggle__WEBPACK_IMPORTED_MODULE_8__["default"], null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_9__["default"].metadataTemplateAdd)));
    });

    _this.state = {
      isDropdownOpen: false,
      filterText: '',
      templates: getAvailableTemplates(props.templates, props.usedTemplates)
    };
    return _this;
  }
  /**
   * Updates the state
   *
   * @param {Object} prevProps - next props
   * @return {void}
   */


  _createClass(TemplateDropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevTemplates = _ref2.templates,
          prevUsedTemplates = _ref2.usedTemplates;
      var _this$props4 = this.props,
          templates = _this$props4.templates,
          usedTemplates = _this$props4.usedTemplates;

      if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(prevTemplates, templates) || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(prevUsedTemplates, usedTemplates)) {
        this.setState({
          templates: getAvailableTemplates(templates, usedTemplates)
        });
      }
    }
  }, {
    key: "getTemplateName",

    /**
     * Returns template display name.
     * For custom metadata we have it on the client.
     *
     * @return {React.Node} - string or formatted name
     */
    value: function getTemplateName(template) {
      return template.templateKey === _constants__WEBPACK_IMPORTED_MODULE_10__["TEMPLATE_CUSTOM_PROPERTIES"] ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
        className: "template-display-name"
      }, _messages__WEBPACK_IMPORTED_MODULE_9__["default"].customTitle)) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "template-display-name"
      }, template.displayName);
    }
    /**
     * Updates the filter text and filters the results
     *
     * @param {UserInput} userInput - input value returned from onChangeHandler from SearchForm.js
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var flyoutClassName = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('metadata-instance-editor-template-dropdown-flyout', className);
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_flyout__WEBPACK_IMPORTED_MODULE_7__["Flyout"], {
        className: flyoutClassName,
        closeOnClick: true,
        closeOnClickOutside: true,
        onClose: this.onClose,
        onOpen: this.onOpen,
        position: "bottom-left",
        shouldDefaultFocus: true
      }, this.renderEntryButton(), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_flyout__WEBPACK_IMPORTED_MODULE_7__["Overlay"], null, this.getDropdown()));
    }
  }]);

  return TemplateDropdown;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(TemplateDropdown));
//# sourceMappingURL=TemplateDropdown.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplateDropdown.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplateDropdown.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./TemplateDropdown.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplateDropdown.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplatedInstance.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplatedInstance.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _fields_Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields/Field */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/fields/Field.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/messages.js");
/* harmony import */ var _metadataUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadataUtil */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/metadataUtil.js");
/* harmony import */ var _TemplatedInstance_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TemplatedInstance.scss */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplatedInstance.scss");
/* harmony import */ var _TemplatedInstance_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TemplatedInstance_scss__WEBPACK_IMPORTED_MODULE_4__);







var TemplatedInstance = function TemplatedInstance(_ref) {
  var canEdit = _ref.canEdit,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      errors = _ref.errors,
      onFieldChange = _ref.onFieldChange,
      onFieldRemove = _ref.onFieldRemove,
      template = _ref.template;
  var _template$fields = template.fields,
      fields = _template$fields === void 0 ? [] : _template$fields;
  var hasFields = fields.length > 0;
  var hasVisibleFields = hasFields && fields.some(function (field) {
    return !Object(_metadataUtil__WEBPACK_IMPORTED_MODULE_3__["isHidden"])(field);
  });
  var showNoFieldsMessage = !hasFields;
  var showHiddenFieldsMessage = hasFields && !hasVisibleFields;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, hasVisibleFields && fields.map(function (field) {
    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_fields_Field__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: field.id,
      canEdit: canEdit,
      dataKey: field.key,
      dataValue: data[field.key],
      description: field.description,
      displayName: field.displayName,
      error: errors[field.key],
      isHidden: Object(_metadataUtil__WEBPACK_IMPORTED_MODULE_3__["isHidden"])(field) // Checking both isHidden and hidden attributes due to differences in V2 and V3 APIs
      ,
      onChange: function onChange(key, value) {
        if (canEdit && onFieldChange) {
          onFieldChange(key, value, field.type);
        }
      },
      onRemove: function onRemove(key) {
        if (canEdit && onFieldRemove) {
          onFieldRemove(key);
        }
      },
      options: field.options,
      type: field.type
    });
  }), showHiddenFieldsMessage && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "attributes-hidden-message"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].allAttributesAreHidden)), showNoFieldsMessage && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "no-attributes-message"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].noAttributesForTemplate)));
};

/* harmony default export */ __webpack_exports__["default"] = (TemplatedInstance);
//# sourceMappingURL=TemplatedInstance.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplatedInstance.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplatedInstance.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./TemplatedInstance.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplatedInstance.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/fields/CustomField.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/fields/CustomField.js ***!
  \*************************************************************************************************/
/*! exports provided: CustomFieldBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFieldBase", function() { return CustomField; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/button/Button */ "./node_modules/box-ui-elements/es/components/button/Button.js");
/* harmony import */ var _components_button_group_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/button-group/ButtonGroup */ "./node_modules/box-ui-elements/es/components/button-group/ButtonGroup.js");
/* harmony import */ var _icons_general_IconMinusThin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons/general/IconMinusThin */ "./node_modules/box-ui-elements/es/icons/general/IconMinusThin.js");
/* harmony import */ var _icons_general_IconPlusThin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/general/IconPlusThin */ "./node_modules/box-ui-elements/es/icons/general/IconPlusThin.js");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Field */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/fields/Field.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../messages */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/messages.js");
/* harmony import */ var _CustomField_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomField.scss */ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/fields/CustomField.scss");
/* harmony import */ var _CustomField_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CustomField_scss__WEBPACK_IMPORTED_MODULE_7__);









var COLOR_999 = '#999';

var CustomField = function CustomField(_ref) {
  var intl = _ref.intl,
      canEdit = _ref.canEdit,
      isLast = _ref.isLast,
      dataKey = _ref.dataKey,
      dataValue = _ref.dataValue,
      onAdd = _ref.onAdd,
      onChange = _ref.onChange,
      onRemove = _ref.onRemove;
  var addBtn = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "aria-label": intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_6__["default"].customAdd),
    "data-resin-target": "metadata-customfieldnew",
    onClick: onAdd,
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconPlusThin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: COLOR_999
  }));
  var removeBtn = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "aria-label": intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_6__["default"].customRemove),
    "data-resin-target": "metadata-customfieldremove",
    onClick: function onClick() {
      if (onRemove) {
        onRemove(dataKey);
      }
    },
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconMinusThin__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: COLOR_999
  }));
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-instance-editor-field-custom"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Field__WEBPACK_IMPORTED_MODULE_5__["default"], {
    canEdit: canEdit,
    dataKey: dataKey,
    dataValue: dataValue,
    displayName: dataKey,
    onChange: onChange // Custom metadata doesn't allow removing of props if the value is emptied out, leave it as empty string
    ,
    onRemove: function onRemove(key) {
      return onChange(key, '');
    },
    type: "string"
  }), canEdit && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "metadata-instance-editor-field-custom-actions"
  }, isLast ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button_group_ButtonGroup__WEBPACK_IMPORTED_MODULE_2__["default"], null, removeBtn, addBtn) : removeBtn));
};


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(CustomField));
//# sourceMappingURL=CustomField.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/fields/CustomField.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/fields/CustomField.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!../../../../../postcss-loader/src??ref--10-2!../../../../../sass-loader/dist/cjs.js??ref--10-3!./CustomField.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/fields/CustomField.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/metadata-instance-editor/metadataUtil.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/metadata-instance-editor/metadataUtil.js ***!
  \*******************************************************************************************/
/*! exports provided: isHidden, normalizeTemplates, normalizeTemplateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHidden", function() { return isHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeTemplates", function() { return normalizeTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeTemplateFilters", function() { return normalizeTemplateFilters; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var isHidden = function isHidden(obj) {
  return !!obj.isHidden || !!obj.hidden;
};
/**
 * Utility function for converting a string or array of strings into a Set object
 * @param templateFilters - Array<string> | string
 * @returns {Set<T>}
 */


var normalizeTemplateFilters = function normalizeTemplateFilters(templateFilters) {
  return typeof templateFilters === 'string' ? new Set([templateFilters]) : new Set(templateFilters);
};
/**
 * Utility function for cloning an array of metadata templates and filtering the templates and fields if necessary
 * @param templates Array<MetadataTemplate>
 * @param selectedTemplateKey - string
 * @param templateFilters - Array<string> | string
 * @returns {Array<T>}
 */


var normalizeTemplates = function normalizeTemplates(templates, selectedTemplateKey, templateFilters) {
  if (!selectedTemplateKey) {
    return _toConsumableArray(templates);
  }

  var clonedTemplates = templates.filter(function (template) {
    return template.templateKey === selectedTemplateKey;
  });
  var fields = clonedTemplates[0] ? clonedTemplates[0].fields : null;

  if (templateFilters && fields) {
    var normalizedFilters = normalizeTemplateFilters(templateFilters);
    clonedTemplates[0].fields = fields.filter(function (field) {
      return normalizedFilters.has(field.id);
    });
  }

  return clonedTemplates;
};


//# sourceMappingURL=metadataUtil.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconAddMetadataEmptyState.js":
/*!************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconAddMetadataEmptyState.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconAddMetadataEmptyState = function IconAddMetadataEmptyState(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#0061D5' : _ref$color,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 140 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-add-metadata-empty-state ".concat(className),
    title: title,
    viewBox: "0 0 140 105",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("g", {
    fill: "none",
    fillRule: "evenodd"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M92 1.134V.492a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-90.5 83.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629A1.005 1.005 0 0 1 1.134 86H.49a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm136 5.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-29-78v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-80 3.5v-.642a.501.501 0 0 1 1-.002v.644c.152.088.278.214.366.366h.644a.5.5 0 0 1 .49.5c0 .276-.215.5-.49.5h-.644a1.005 1.005 0 0 1-.366.366v.644a.5.5 0 0 1-.5.49.506.506 0 0 1-.5-.505v-.629a1.005 1.005 0 0 1-.366-.366h-.644a.5.5 0 0 1-.49-.5c0-.276.215-.5.49-.5h.644c.088-.152.214-.278.366-.366zm-5.563 8.075v-.402a.313.313 0 0 1 .625 0v.402a.628.628 0 0 1 .23.229h.401c.17 0 .307.144.307.312a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.229.228v.402a.313.313 0 0 1-.625.004v-.406a.628.628 0 0 1-.228-.229h-.402A.313.313 0 0 1 22 24.25c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .229-.228zm-11.5 79v-.402a.313.313 0 0 1 .626 0v.402a.628.628 0 0 1 .228.228h.402c.17 0 .307.145.307.313a.308.308 0 0 1-.307.313h-.402a.628.628 0 0 1-.229.228v.402a.313.313 0 0 1-.624.004v-.406a.628.628 0 0 1-.23-.228h-.401a.313.313 0 0 1-.307-.313c0-.173.134-.313.307-.313h.402a.628.628 0 0 1 .229-.228z",
    fill: color
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M17 54c0-3.866 3.133-7 6.992-7h106.016c3.861 0 6.992 3.142 6.992 7 0 3.866-3.133 7-6.992 7H23.992C20.131 61 17 57.858 17 54zm-6 20c0-3.866 3.133-7 6.992-7h106.016c3.861 0 6.992 3.142 6.992 7 0 3.866-3.133 7-6.992 7H17.992C14.131 81 11 77.858 11 74zM5 94c0-3.866 3.133-7 6.992-7h106.016c3.861 0 6.992 3.142 6.992 7 0 3.866-3.133 7-6.992 7H11.992C8.131 101 5 97.858 5 94z",
    fill: color,
    fillOpacity: ".1"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M130 61a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm-6 20a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-6 22a7 7 0 1 1 0-14 7 7 0 0 1 0 14z",
    fill: color
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M117.944 95.189l3.215-3.832a.996.996 0 0 1 1.407-.121c.423.355.475.99.126 1.406l-3.861 4.6a.993.993 0 0 1-1.4.128l-3.078-2.583a.993.993 0 0 1-.116-1.403 1 1 0 0 1 1.401-.13l2.306 1.935zm12-40l3.215-3.832a.996.996 0 0 1 1.407-.121c.423.355.475.99.126 1.406l-3.861 4.6a.993.993 0 0 1-1.4.128l-3.078-2.583a.993.993 0 0 1-.116-1.403 1 1 0 0 1 1.401-.13l2.306 1.935z",
    fill: "#FFF"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M25 38.49c0-.823.668-1.49 1.509-1.49H54.77c.833 0 1.788.605 2.139 1.365l3.207 6.942c.348.754-.036 1.365-.86 1.365H26.491c-.824 0-1.491-.665-1.491-1.49V38.49z",
    fill: "#FFF",
    stroke: color,
    strokeWidth: "2"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M27 40.49c0-.823.668-1.49 1.494-1.49h25.164c.825 0 1.751.62 2.07 1.386l2.869 6.9c.318.766-.096 1.386-.933 1.386H28.51A1.498 1.498 0 0 1 27 47.182V40.49z",
    fill: "#22A7F0",
    fillOpacity: ".1"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("rect", {
    fill: "#FFF",
    height: "53.197",
    rx: "1.5",
    stroke: color,
    strokeWidth: "2",
    width: "80",
    x: "25",
    y: "43"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M27 82.214c0-.827.657-1.34 1.475-1.185 0 0 3.614 1.268 23.858 1.268 12.585 0 18.165 3.312 25.334 3.312 14.499 0 23.954-4.331 23.954-4.331.762-.31 1.379.115 1.379.936v10.284c0 .827-.68 1.497-1.501 1.497H28.501A1.503 1.503 0 0 1 27 92.498V82.214z",
    fill: color,
    fillOpacity: ".1"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconAddMetadataEmptyState);
//# sourceMappingURL=IconAddMetadataEmptyState.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconEdit.js":
/*!*******************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconEdit.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconEdit = function IconEdit(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#999' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-edit ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M3.21 7.89l6.47-6.48a2 2 0 0 1 2.88 2.78h-.05L6 10.72 3.21 7.89zM2.24 9l2.83 2.83L1.67 13c-.52.18-.79-.1-.62-.61z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconEdit);
//# sourceMappingURL=IconEdit.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconMetadataColored.js":
/*!******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconMetadataColored.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");




var IconMetadataColored = function IconMetadataColored(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      color = _ref.color,
      title = _ref.title,
      type = _ref.type,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  var fill;

  if (color) {
    fill = color;
  } else if (type === 'cascade') {
    fill = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlPurpleRain"];
  } else if (type === 'default') {
    fill = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue"];
  } else {
    fill = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlBoxBlue"];
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "icon-metadata ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-2.515-5.879L6.2 7.263l1.376 2.202a.5.5 0 0 0 .848 0L9.8 7.263l.715 2.858a.5.5 0 0 0 .97-.242l-1-4a.5.5 0 0 0-.909-.144L8 8.257 6.424 5.735a.5.5 0 0 0-.91.144l-1 4a.5.5 0 0 0 .971.242z",
    fill: fill,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconMetadataColored);
//# sourceMappingURL=IconMetadataColored.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconSearch.js":
/*!*********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconSearch.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");




var IconSearch = function IconSearch(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'icon-search' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGray40"] : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 14 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-search ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M13.7,12.1L11.6,10l-1.1-0.2c0.9-1,1.4-2.4,1.4-3.9c0-3.3-2.7-6-6-6C2.7,0,0,2.7,0,6s2.7,6,6,6 c1.5,0,2.9-0.6,4-1.5l0.2,1l2.1,2.1c0.4,0.4,1,0.4,1.4,0l0,0C14.1,13.1,14.1,12.5,13.7,12.1z M6,10.4c-2.5,0-4.5-2-4.5-4.5 s2-4.5,4.5-4.5s4.5,2,4.5,4.5S8.4,10.4,6,10.4z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconSearch);
//# sourceMappingURL=IconSearch.js.map

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/collapsible/Collapsible.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/collapsible/Collapsible.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".collapsible-card {\n  border-radius: 4px;\n}\n.collapsible-card .collapsible-card-header {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  border-radius: 4px;\n}\n.collapsible-card .collapsible-card-header.has-sticky-header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.collapsible-card .collapsible-card-action-items {\n  position: absolute;\n  right: 34px;\n  bottom: 0;\n}\n.collapsible-card .collapsible-card-header-caret {\n  position: absolute;\n  right: 0;\n  transition: transform 0.2s;\n}\n.collapsible-card .btn-plain.collapsible-card-title {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 10px 0;\n  text-align: left;\n}\n.collapsible-card .collapsible-card-content {\n  padding: 10px 0;\n}\n.collapsible-card.is-open .collapsible-card-header-caret {\n  transform: rotateZ(180deg);\n}\n.collapsible-card.is-bordered {\n  border: 1px solid #e8e8e8;\n}\n.collapsible-card.is-bordered .collapsible-card-header {\n  background-color: #fff;\n}\n.collapsible-card.is-bordered .btn-plain.collapsible-card-title,\n.collapsible-card.is-bordered .collapsible-card-content {\n  padding: 10px;\n}\n.collapsible-card.is-bordered.is-open .btn-plain.collapsible-card-title {\n  border-bottom: 1px solid #e8e8e8;\n}\n.collapsible-card.is-bordered .collapsible-card-header-caret {\n  right: 10px;\n}\n.collapsible-card:not(.is-bordered) .btn-plain.collapsible-card-title {\n  border-bottom: 1px solid #e8e8e8;\n}\n.collapsible-card:not(.is-bordered) .btn-plain.collapsible-card-title:hover, .collapsible-card:not(.is-bordered) .btn-plain.collapsible-card-title:active, .collapsible-card:not(.is-bordered) .btn-plain.collapsible-card-title:focus {\n  text-decoration: none;\n  border-bottom-color: #0061d5;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/search-form/SearchForm.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/search-form/SearchForm.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**************************************\n * Search Form\n **************************************/\n.search-input-container {\n  display: inline-block;\n  min-height: 32px;\n}\n.search-input-container .action-button {\n  display: flex;\n  align-items: center;\n  width: 30px;\n  padding: 0;\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n.search-input-container .action-button:hover, .search-input-container .action-button:focus {\n  outline: none;\n}\n.search-input-container .action-button path {\n  transition: fill linear 0.1s;\n}\n.search-input-container .action-button svg {\n  flex: 1;\n}\n.search-input-container .action-buttons,\n.search-input-container .search-form-loading-indicator {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n}\n.search-input-container .action-buttons {\n  right: 0;\n  align-items: stretch;\n}\n.search-input-container .search-form-loading-indicator {\n  right: 10px;\n  align-items: center;\n}\n.search-input-container .clear-button {\n  display: none;\n}\n.search-input-container .clear-button path:first-of-type {\n  fill: #a7a7a7;\n}\n.search-input-container .search-form.use-clear-button .clear-button {\n  display: flex;\n}\n.search-input-container .search-form.use-clear-button .search-button {\n  display: none;\n}\n.search-input-container .search-form.use-clear-button.is-empty .clear-button {\n  display: none;\n}\n.search-input-container .search-form.use-clear-button.is-empty .search-button {\n  display: flex;\n}\n.search-input-container .search-input {\n  padding-right: 30px;\n}\n.search-input-container .search-input:focus ~ .clear-button path:first-of-type {\n  fill: #4e4e4e;\n}\n.search-input-container .search-input:focus + .search-button path {\n  fill: #4e4e4e;\n}\n.search-input-container .search-form {\n  position: relative;\n  display: flex;\n  align-items: stretch;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/toggle/Toggle.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/toggle/Toggle.scss ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**************************************\n * Toggle\n **************************************/\n.toggle-container {\n  margin: 0 0 20px;\n}\n.toggle-container .toggle-label {\n  display: inline-block;\n  margin: 5px 10px;\n  line-height: 15px;\n  vertical-align: top;\n}\n\n.toggle {\n  display: none;\n}\n.toggle, .toggle::after, .toggle::before,\n.toggle *,\n.toggle *::after,\n.toggle *::before, .toggle + .toggle-btn {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.toggle::-moz-selection, .toggle::after::-moz-selection, .toggle::before::-moz-selection, .toggle *::-moz-selection, .toggle *::after::-moz-selection, .toggle *::before::-moz-selection, .toggle + .toggle-btn::-moz-selection {\n  background: none;\n}\n.toggle::selection, .toggle::after::selection, .toggle::before::selection,\n.toggle *::selection,\n.toggle *::after::selection,\n.toggle *::before::selection, .toggle + .toggle-btn::selection {\n  background: none;\n}\n.toggle + .toggle-btn {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n  margin: 1px 0;\n  padding: 2px;\n  background: #bcbcbc;\n  border-radius: 40px;\n  outline: 0;\n  cursor: pointer;\n  transition: left 0.4s ease, background 0.4s ease;\n}\n.toggle + .toggle-btn::after, .toggle + .toggle-btn::before {\n  position: relative;\n  display: block;\n  width: 26px;\n  content: \"\";\n}\n.toggle + .toggle-btn::after {\n  top: -3px;\n  left: -3px;\n  height: 26px;\n  background: #fff;\n  border: 1px solid #767676;\n  border-radius: 50%;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  transition: left 0.2s ease, background 0.2s ease;\n}\n.toggle + .toggle-btn::before {\n  display: none;\n}\n.toggle:checked + .toggle-btn {\n  background: #0061d5;\n}\n.toggle:checked + .toggle-btn::after {\n  left: 50%;\n}\n\n/**********************************************************\n * A simpler version of toggle that does not use ids\n * Eventually we should remove the webapp specific version\n **********************************************************/\n.toggle-simple {\n  position: relative;\n  display: flex;\n  width: 40px;\n  height: 20px;\n  border-radius: 20px;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.is-toggle-right-aligned .toggle-simple {\n  width: 100%;\n}\n\n.toggle-simple-input {\n  position: absolute;\n  left: -9999px;\n  opacity: 0;\n}\n\n.toggle-simple-label {\n  display: inline-block;\n  min-width: 0;\n  margin-left: 46px;\n  white-space: nowrap;\n}\n.is-toggle-right-aligned .toggle-simple-label {\n  flex: 1;\n  margin-left: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.toggle-simple-description {\n  margin-top: 2px;\n  margin-left: 46px;\n  color: #909090;\n}\n.is-toggle-right-aligned .toggle-simple-description {\n  margin-right: 46px;\n  margin-left: auto;\n}\n\n.toggle-simple-switch {\n  display: inline-block;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .toggle-simple-switch {\n    cursor: pointer;\n  }\n}\n.is-toggle-right-aligned .toggle-simple-switch {\n  position: relative;\n  width: 40px;\n}\n.toggle-simple-switch::before, .toggle-simple-switch::after {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  display: block;\n  cursor: pointer;\n  content: \"\";\n}\n.toggle-simple-switch::before {\n  right: 0;\n  background-color: #bcbcbc;\n  border-radius: 20px;\n  transition: background 0.4s;\n}\n.toggle-simple-switch::after {\n  width: 20px;\n  height: 20px;\n  background-color: #fff;\n  border: 1px solid #767676;\n  border-radius: 100%;\n  transition: margin 0.4s;\n}\n.toggle-simple-input:checked ~ .toggle-simple-switch::before {\n  background-color: #0061d5;\n}\n.toggle-simple-input:checked ~ .toggle-simple-switch::after {\n  margin-left: 20px;\n}\n.toggle-simple-input:disabled ~ .toggle-simple-switch::before, .toggle-simple-input:disabled ~ .toggle-simple-switch::after {\n  cursor: default;\n}\n.toggle-simple-input:disabled ~ .toggle-simple-switch::before {\n  opacity: 0.5;\n}\n.toggle-simple-input:disabled ~ .toggle-simple-switch::after {\n  background-color: #fafafa;\n  border-color: #c8c8c8;\n}\n.toggle-simple-input:focus ~ .toggle-simple-switch::after {\n  border-color: #0061d5;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/MetadataSidebar.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/MetadataSidebar.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-metadata .bcs-scroll-content > .inline-alert {\n  margin: 0 10px 10px 25px;\n}\n.bcs-metadata .bcs-scroll-content > .crawler {\n  padding-top: 20px;\n}\n.bcs-metadata .metadata-instance-editor {\n  padding: 0 10px 20px 25px;\n}\n.bcs-metadata .metadata-instance-editor .collapsible-card {\n  margin-top: 10px;\n}\n.bcs-metadata .metadata-instance-editor-template-dropdown {\n  z-index: 1;\n}\n.bcs-metadata .metadata-instance-editor-header {\n  display: none;\n}\n.bcs-metadata .metadata-instance-editor-field-read-only dd {\n  margin: 0;\n}\n.bcs-metadata .metadata-instance-editor-instance-title-text {\n  max-width: 210px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.bcs-metadata .collapsible-card.is-open .metadata-instance-editor-instance-title-text {\n  max-width: 190px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/CascadePolicy.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/metadata-instance-editor/CascadePolicy.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".metadata-cascade-notice {\n  margin: 10px 0;\n  padding: 14px 15px;\n  color: #222;\n  background-color: #f1e2fd;\n  border: none;\n  border-radius: 4px;\n}\n\n.metadata-cascade-editor {\n  color: #222;\n  background-color: #f4f4f4;\n  border: none;\n  border-radius: 4px;\n}\n.metadata-cascade-editor hr {\n  display: block;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  border-top: 1px solid #e8e8e8;\n}\n.metadata-cascade-editor .metadata-operation-not-immediate {\n  color: #767676;\n  font-weight: bold;\n}\n.metadata-cascade-editor .metadata-operation-not-immediate svg {\n  position: relative;\n  top: 8px;\n  margin-left: -5px;\n}\n\n.metadata-cascade-enable {\n  margin: 10px 0;\n  padding: 14px 15px;\n}\n\n.metadata-cascade-toggle {\n  float: left;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.cascade-policy-text {\n  clear: left;\n}\n\n.cascade-policy-learnmore-link {\n  color: #0061d5;\n}\n\n.metadata-cascading-mode {\n  margin: 10px 0;\n  padding: 10px 15px 15px 15px;\n}\n.metadata-cascading-mode .metadata-cascading-options {\n  padding: 10px;\n}\n.metadata-cascading-mode .metadata-cascading-options .radio-container {\n  margin: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/CustomInstanceNewField.scss":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/metadata-instance-editor/CustomInstanceNewField.scss ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-new-field {\n  padding: 10px 25px 20px;\n  background-color: #e8e8e8;\n  border-radius: 3px;\n}\n.custom-new-field .text-input-container {\n  flex: 1;\n  margin: 10px 0;\n}\n.custom-new-field .text-input-container input[type=text] {\n  width: 100%;\n}\n.custom-new-field .custom-new-field-header {\n  display: flex;\n  align-items: center;\n}\n.custom-new-field .custom-new-field-header h5 {\n  margin: 8px 5px 8px 0;\n  font-size: 14px;\n}\n.custom-new-field .custom-new-field-header > div {\n  display: flex;\n}\n\n.custom-new-field-actions {\n  margin: 20px 0 0;\n  text-align: right;\n}\n.custom-new-field-actions .btn {\n  margin: 0 0 0 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/EmptyContent.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/metadata-instance-editor/EmptyContent.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".metadata-instance-editor-no-instances {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.metadata-instance-editor-no-instances svg {\n  margin-left: -5px;\n}\n.metadata-instance-editor-no-instances .icon-add-metadata-empty-state {\n  height: 105px;\n}\n\n.metadata-instance-editor-no-instances--call-out {\n  margin: 20px 0 10px;\n  font-weight: bold;\n}\n\n.metadata-instance-editor-no-instances--how-add-template {\n  width: 200px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/Footer.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/metadata-instance-editor/Footer.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".metadata-instance-editor-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n.metadata-instance-editor-footer .metadata-instance-editor-footer-delete .btn-plain {\n  color: #ed3757;\n}\n.metadata-instance-editor-footer .metadata-instance-editor-footer-save-cancel .btn:last-child {\n  margin-right: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/Instance.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/metadata-instance-editor/Instance.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".metadata-instance-editor .collapsible-card-content {\n  position: relative;\n}\n\n.metadata-instance-editor-instance-title {\n  display: flex;\n  align-items: center;\n}\n\n.metadata-instance-editor-instance-title-text {\n  margin: 0 10px;\n  color: #000;\n}\n.metadata-instance-editor-instance-title-text.metadata-instance-editor-instance-has-error {\n  color: #ed3757;\n}\n\n.btn-plain.metadata-instance-editor-instance-edit {\n  position: absolute;\n  top: 8px;\n  right: 25px;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 3px;\n}\n.btn-plain.metadata-instance-editor-instance-edit:hover svg path {\n  fill: #222;\n}\n.btn-plain.metadata-instance-editor-instance-edit.metadata-instance-editor-instance-is-editing {\n  background-color: #e8e8e8;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/MetadataInstanceConfirmDialog.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/metadata-instance-editor/MetadataInstanceConfirmDialog.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".metadata-instance-confirm-cover {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: inherit;\n}\n\n.metadata-instance-confim-container {\n  max-width: 350px;\n  text-align: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplateDropdown.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplateDropdown.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".metadata-instance-editor-template-dropdown-flyout {\n  box-sizing: border-box !important;\n}\n.metadata-instance-editor-template-dropdown-flyout *,\n.metadata-instance-editor-template-dropdown-flyout *::before,\n.metadata-instance-editor-template-dropdown-flyout *::after {\n  box-sizing: border-box !important;\n}\n.metadata-instance-editor-template-dropdown-flyout::before {\n  border: none;\n}\n.metadata-instance-editor-template-dropdown-flyout div.overlay {\n  width: 288px;\n  padding: 0;\n  overflow: hidden;\n  border: 1px solid #bcbcbc;\n  border-radius: 4px;\n}\n.metadata-instance-editor-template-dropdown-flyout ul.overlay {\n  border: none;\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu {\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: #fff;\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .overlay-wrapper {\n  overflow: hidden;\n  border-top: none;\n  border-radius: 0 0 4px 4px;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .overlay-wrapper {\n    max-height: 300px;\n  }\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .overlay-wrapper ul.overlay {\n  transform: none;\n  -webkit-animation: none;\n          animation: none;\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .overlay {\n  position: static;\n  padding: 0;\n  border-radius: 0%;\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .overlay .datalist-item {\n  padding: 0;\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .scroll-container {\n  max-height: 300px;\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .scroll-wrap-container {\n  flex-grow: 1;\n  overflow-x: hidden;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .scroll-wrap-container {\n    height: 300px;\n  }\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .scroll-wrap-container::before {\n  width: 110%;\n  margin: 0 -5%;\n  border-radius: inherit;\n  box-shadow: 0 -2px 25px 0 rgba(0, 0, 0, 0.25);\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .scroll-wrap-container::after {\n  width: 110%;\n  border-radius: inherit;\n  box-shadow: 0 -2px 25px 0 rgba(0, 0, 0, 0.15);\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .search-input-container {\n  margin: 0;\n  padding: 10px 12px 12px;\n  border-bottom: 1px solid #bcbcbc;\n  border-radius: 4px 4px 0 0;\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .search-input-container input[type=text] {\n  padding: 7px;\n  color: #222;\n  border: 1px solid #d3d3d3;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  transition: border-color linear 0.15s, box-shadow linear 0.1s;\n  -webkit-font-smoothing: antialiased;\n  width: 100%;\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .search-input-container input[type=text]:focus {\n  border: 1px solid #0061d5;\n  outline: 0;\n  box-shadow: none;\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .search-input-container input[type=text]:hover {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.15);\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-dropdown-menu .search-button {\n  pointer-events: none;\n}\n.metadata-instance-editor-template-dropdown-flyout .btn-plain.metadata-template-dropdown-select-template {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 5px 35px 5px 15px;\n  overflow: hidden;\n  color: inherit;\n  font-size: 13px;\n  line-height: 20px;\n  white-space: nowrap;\n  text-align: inherit;\n  text-overflow: ellipsis;\n}\n.metadata-instance-editor-template-dropdown-flyout .btn-plain.metadata-template-dropdown-select-template.metadata-template-dropdown-is-selected {\n  color: #0061d5;\n}\n.metadata-instance-editor-template-dropdown-flyout .btn-plain.metadata-template-dropdown-select-template .template-display-name {\n  flex: 10;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-message {\n  position: absolute;\n  right: 0;\n  width: 288px;\n  padding: 16px 15px;\n  color: #909090;\n  background-color: #fff;\n  border: 1px solid #bcbcbc;\n  border-top-color: transparent;\n  border-radius: 0 0 4px 4px;\n}\n.metadata-instance-editor-template-dropdown-flyout .metadata-instance-editor-template-message.template-dropdown-loading-indicator {\n  display: flex;\n  justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplatedInstance.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/metadata-instance-editor/TemplatedInstance.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".metadata-instance-editor-instance .attributes-hidden-message {\n  font-style: italic;\n  text-align: center;\n}\n.metadata-instance-editor-instance .no-attributes-message {\n  font-style: italic;\n  text-align: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/metadata-instance-editor/fields/CustomField.scss":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/metadata-instance-editor/fields/CustomField.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".metadata-instance-editor-field-custom {\n  display: flex;\n  align-items: center;\n}\n.metadata-instance-editor-field-custom .text-input-container {\n  flex: 1;\n  overflow-x: hidden;\n}\n.metadata-instance-editor-field-custom .text-input-container .label {\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.metadata-instance-editor-field-custom:last-child .metadata-instance-editor-field-read-only {\n  margin-bottom: 0;\n}\n\n.metadata-instance-editor-field-custom-actions {\n  margin: 5px 0 0 10px;\n}\n.metadata-instance-editor-field-custom-actions .btn {\n  width: 32px;\n  height: 32px;\n  margin: 0 0 0 -1px;\n  padding: 10px;\n}\n.metadata-instance-editor-field-custom-actions .btn span {\n  display: flex;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ })

}]);