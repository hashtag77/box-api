(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~activity-sidebar~skills-sidebar"],{

/***/ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/Pill.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/pill-selector-dropdown/Pill.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




var Pill = function Pill(_ref) {
  var _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? true : _ref$isValid,
      onRemove = _ref.onRemove,
      text = _ref.text;
  var styles = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pill', {
    'is-selected': isSelected && !isDisabled,
    'is-invalid': !isValid,
    'is-disabled': isDisabled
  });
  var onClick = isDisabled ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : onRemove;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("span", {
    className: styles
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("span", {
    className: "pill-text"
  }, text), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("span", {
    "aria-hidden": "true",
    className: "close-btn",
    onClick: onClick
  }, "\u2715"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pill);
//# sourceMappingURL=Pill.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelector.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelector.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _Pill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pill */ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/Pill.js");
/* harmony import */ var _SuggestedPillsRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SuggestedPillsRow */ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPillsRow.js");
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









function stopDefaultEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

var PillSelector =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PillSelector, _React$Component);

  function PillSelector() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PillSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PillSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocused: false,
      selectedIndex: -1
    });

    _defineProperty(_assertThisInitialized(_this), "getNumSelected", function () {
      var selectedOptions = _this.props.selectedOptions;
      return typeof selectedOptions.size === 'number' ? selectedOptions.size : selectedOptions.length;
    });

    _defineProperty(_assertThisInitialized(_this), "getPillsByKey", function (key) {
      var selectedOptions = _this.props.selectedOptions;
      return selectedOptions.map(function (option) {
        return option[key];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.inputEl.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        isFocused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.setState({
        isFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var inputValue = _this.inputEl.value;

      var numPills = _this.getNumSelected();

      var selectedIndex = _this.state.selectedIndex;

      switch (event.key) {
        case _constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].backspace:
          {
            var index = -1;

            if (selectedIndex >= 0) {
              // remove selected pill
              index = selectedIndex;

              _this.resetSelectedIndex();

              _this.inputEl.focus();
            } else if (inputValue === '') {
              // remove last pill
              index = numPills - 1;
            }

            if (index >= 0) {
              var _this$props = _this.props,
                  onRemove = _this$props.onRemove,
                  selectedOptions = _this$props.selectedOptions;
              var selectedOption = // $FlowFixMe
              typeof selectedOptions.get === 'function' ? selectedOptions.get(index) : selectedOptions[index];
              onRemove(selectedOption, index);
              stopDefaultEvent(event);
            }

            break;
          }

        case _constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].arrowLeft:
          if (selectedIndex >= 0) {
            // select previous pill
            _this.setState({
              selectedIndex: Math.max(selectedIndex - 1, 0)
            });

            stopDefaultEvent(event);
          } else if (inputValue === '' && numPills > 0) {
            // select last pill
            _this.hiddenEl.focus();

            _this.setState({
              selectedIndex: numPills - 1
            });

            stopDefaultEvent(event);
          }

          break;

        case _constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].arrowRight:
          {
            if (selectedIndex >= 0) {
              var _index = selectedIndex + 1;

              if (_index >= numPills) {
                // deselect last pill
                _this.resetSelectedIndex();

                _this.inputEl.focus();
              } else {
                // select next pill
                _this.setState({
                  selectedIndex: _index
                });
              }

              stopDefaultEvent(event);
            }

            break;
          }
        // no default
      }
    });

    _defineProperty(_assertThisInitialized(_this), "errorMessageID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()('errorMessage'));

    _defineProperty(_assertThisInitialized(_this), "hiddenRef", function (hiddenEl) {
      if (hiddenEl) {
        _this.hiddenEl = hiddenEl;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetSelectedIndex", function () {
      if (_this.state.selectedIndex !== -1) {
        _this.setState({
          selectedIndex: -1
        });
      }
    });

    return _this;
  }

  _createClass(PillSelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isFocused = _this$state.isFocused,
          selectedIndex = _this$state.selectedIndex;

      var _this$props2 = this.props,
          allowInvalidPills = _this$props2.allowInvalidPills,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          error = _this$props2.error,
          inputProps = _this$props2.inputProps,
          onInput = _this$props2.onInput,
          onRemove = _this$props2.onRemove,
          onSuggestedPillAdd = _this$props2.onSuggestedPillAdd,
          placeholder = _this$props2.placeholder,
          selectedOptions = _this$props2.selectedOptions,
          suggestedPillsData = _this$props2.suggestedPillsData,
          suggestedPillsFilter = _this$props2.suggestedPillsFilter,
          suggestedPillsTitle = _this$props2.suggestedPillsTitle,
          validator = _this$props2.validator,
          rest = _objectWithoutProperties(_this$props2, ["allowInvalidPills", "className", "disabled", "error", "inputProps", "onInput", "onRemove", "onSuggestedPillAdd", "placeholder", "selectedOptions", "suggestedPillsData", "suggestedPillsFilter", "suggestedPillsTitle", "validator"]);

      var suggestedPillsEnabled = suggestedPillsData && suggestedPillsData.length > 0;
      var hasError = !!error;
      var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pill-selector-input-wrapper', {
        'is-disabled': disabled,
        'is-focused': isFocused,
        'show-error': hasError,
        'pill-selector-suggestions-enabled': suggestedPillsEnabled
      });
      var ariaAttrs = {
        'aria-invalid': hasError,
        'aria-errormessage': this.errorMessageID
      };
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isShown: hasError,
        text: error || '',
        position: "middle-right",
        theme: "error"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
        className: classes,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown
      }, selectedOptions.map(function (option, index) {
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Pill__WEBPACK_IMPORTED_MODULE_4__["default"], {
          isValid: allowInvalidPills ? validator(option) : true,
          isDisabled: disabled,
          isSelected: index === selectedIndex,
          key: option.value,
          onRemove: onRemove.bind(_this2, option, index) // $FlowFixMe option.text is for backwards compatibility
          ,
          text: option.displayText || option.text
        });
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
        "aria-hidden": "true",
        className: "accessibility-hidden",
        onBlur: this.resetSelectedIndex,
        ref: this.hiddenRef,
        tabIndex: -1
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("textarea", _extends({}, ariaAttrs, rest, inputProps, {
        autoComplete: "off",
        className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pill-selector-input', className),
        disabled: disabled,
        onInput: onInput,
        placeholder: this.getNumSelected() === 0 ? placeholder : '',
        ref: function ref(input) {
          _this2.inputEl = input;
        }
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_SuggestedPillsRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onSuggestedPillAdd: onSuggestedPillAdd,
        selectedPillsValues: this.getPillsByKey('value'),
        suggestedPillsFilter: suggestedPillsFilter,
        suggestedPillsData: suggestedPillsData,
        title: suggestedPillsTitle
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
        id: this.errorMessageID,
        className: "accessibility-hidden",
        role: "alert"
      }, error)));
    }
  }]);

  return PillSelector;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(PillSelector, "defaultProps", {
  allowInvalidPills: false,
  disabled: false,
  error: '',
  inputProps: {},
  placeholder: '',
  selectedOptions: [],
  validator: function validator() {
    return true;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (PillSelector);
//# sourceMappingURL=PillSelector.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPill.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPill.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SuggestedPillsRow.scss */ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPillsRow.scss");
/* harmony import */ var _SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_4__);






var SuggestedPill = function SuggestedPill(_ref) {
  var email = _ref.email,
      id = _ref.id,
      name = _ref.name,
      onAdd = _ref.onAdd;

  var addSuggestedPill = function addSuggestedPill(event) {
    event.preventDefault();
    onAdd({
      email: email,
      id: id,
      name: name,
      text: name,
      type: 'user',
      value: email
    });
  };

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === _constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].enter) {
      addSuggestedPill(event);
    }
  };

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "bottom-center",
    text: email
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "suggested-pill-invisible-button",
    onClick: addSuggestedPill,
    onKeyDown: handleKeyPress,
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("span", {
    className: "pill-text suggested-pill"
  }, name)));
};

/* harmony default export */ __webpack_exports__["default"] = (SuggestedPill);
//# sourceMappingURL=SuggestedPill.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPillsRow.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPillsRow.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SuggestedPill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuggestedPill */ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPill.js");
/* harmony import */ var _SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuggestedPillsRow.scss */ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPillsRow.scss");
/* harmony import */ var _SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_3__);





var SuggestedPillsRow = function SuggestedPillsRow(_ref) {
  var _ref$onSuggestedPillA = _ref.onSuggestedPillAdd,
      onSuggestedPillAdd = _ref$onSuggestedPillA === void 0 ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : _ref$onSuggestedPillA,
      _ref$selectedPillsVal = _ref.selectedPillsValues,
      selectedPillsValues = _ref$selectedPillsVal === void 0 ? [] : _ref$selectedPillsVal,
      _ref$suggestedPillsDa = _ref.suggestedPillsData,
      suggestedPillsData = _ref$suggestedPillsDa === void 0 ? [] : _ref$suggestedPillsDa,
      _ref$suggestedPillsFi = _ref.suggestedPillsFilter,
      suggestedPillsFilter = _ref$suggestedPillsFi === void 0 ? 'id' : _ref$suggestedPillsFi,
      title = _ref.title;
  // Prevents pills from being rendered that are in the form by checking for value (id or custom value)
  var filteredSuggestedPillData = suggestedPillsData.filter(function (item) {
    return !selectedPillsValues.includes(item[suggestedPillsFilter]);
  });

  if (filteredSuggestedPillData.length === 0) {
    return null;
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "pill-selector-suggested"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("span", null, title), filteredSuggestedPillData.map(function (item) {
    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_SuggestedPill__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      email: item.email,
      id: item.id,
      name: item.name,
      onAdd: onSuggestedPillAdd
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SuggestedPillsRow);
//# sourceMappingURL=SuggestedPillsRow.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPillsRow.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPillsRow.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./SuggestedPillsRow.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPillsRow.scss");

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

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPillsRow.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/pill-selector-dropdown/SuggestedPillsRow.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pill-selector-suggested {\n  display: flex;\n  flex-flow: wrap;\n  align-items: center;\n  width: 100%;\n  margin-top: 1rem;\n  color: #909090;\n}\n.pill-selector-suggested > span {\n  margin-left: 3px;\n}\n.pill-selector-suggested .suggested-pill-invisible-button {\n  padding: 0;\n}\n.pill-selector-suggested .suggested-pill {\n  margin: 0 3px;\n  padding: 0;\n  color: #909090;\n  text-decoration: underline;\n  transition: 100ms ease;\n}\n.pill-selector-suggested .suggested-pill:hover {\n  cursor: pointer;\n}\n.pill-selector-suggested .suggested-pill span {\n  padding: 0 3px;\n}\n.pill-selector-suggested .invisible-button:hover .suggested-pill {\n  color: #4e4e4e;\n}", ""]);

// exports


/***/ })

}]);