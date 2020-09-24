(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~activity-sidebar"],{

/***/ "./node_modules/box-ui-elements/es/components/avatar/Avatar.js":
/*!*********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/avatar/Avatar.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _AvatarImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarImage */ "./node_modules/box-ui-elements/es/components/avatar/AvatarImage.js");
/* harmony import */ var _AvatarInitials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AvatarInitials */ "./node_modules/box-ui-elements/es/components/avatar/AvatarInitials.js");
/* harmony import */ var _icons_avatars_UnknownUserAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/avatars/UnknownUserAvatar */ "./node_modules/box-ui-elements/es/icons/avatars/UnknownUserAvatar.js");
/* harmony import */ var _Avatar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Avatar.scss */ "./node_modules/box-ui-elements/es/components/avatar/Avatar.scss");
/* harmony import */ var _Avatar_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Avatar_scss__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var SIZES = {
  large: true
};

function Avatar(_ref) {
  var avatarUrl = _ref.avatarUrl,
      className = _ref.className,
      name = _ref.name,
      id = _ref.id,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '' : _ref$size;

  var _React$useState = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      hasImageErrored = _React$useState2[0],
      setHasImageErrored = _React$useState2[1];

  var _React$useState3 = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      prevAvatarUrl = _React$useState4[0],
      setPrevAvatarUrl = _React$useState4[1];

  var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['avatar', className, _defineProperty({}, "avatar--".concat(size), SIZES[size])]); // Reset hasImageErrored state when avatarUrl changes

  if (avatarUrl !== prevAvatarUrl) {
    setHasImageErrored(false);
    setPrevAvatarUrl(avatarUrl);
  }

  var avatar;

  if (avatarUrl && !hasImageErrored) {
    avatar = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AvatarImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onError: function onError() {
        setHasImageErrored(true);
      },
      url: avatarUrl
    });
  } else if (name) {
    avatar = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AvatarInitials__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: id,
      name: name
    });
  } else {
    avatar = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_avatars_UnknownUserAvatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "avatar-icon"
    });
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: classes,
    role: "presentation"
  }, avatar);
}

/* harmony default export */ __webpack_exports__["default"] = (Avatar);
//# sourceMappingURL=Avatar.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/avatar/Avatar.scss":
/*!***********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/avatar/Avatar.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./Avatar.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/avatar/Avatar.scss");

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

/***/ "./node_modules/box-ui-elements/es/components/avatar/AvatarImage.js":
/*!**************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/avatar/AvatarImage.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var AvatarImage = function AvatarImage(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      url = _ref.url,
      _onError = _ref.onError;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("img", {
    alt: "",
    className: "avatar-image ".concat(className),
    onError: function onError(event) {
      if (typeof _onError === 'function') {
        _onError(event);
      }
    },
    src: url
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AvatarImage);
//# sourceMappingURL=AvatarImage.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/avatar/AvatarInitials.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/avatar/AvatarInitials.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");



var getInitials = function getInitials(name) {
  var firstInitial = name.slice(0, 1);
  var lastInitial = name.slice(name.lastIndexOf(' ') + 1, name.lastIndexOf(' ') + 2);
  return (firstInitial + lastInitial).toUpperCase();
};

var AvatarInitials = function AvatarInitials(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      id = _ref.id,
      name = _ref.name;
  var avatarColorSelector = parseInt(id, 10) || 0;
  var backgroundColorIndex = avatarColorSelector % _styles_variables__WEBPACK_IMPORTED_MODULE_1__["avatarColors"].length;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("span", {
    className: "avatar-initials ".concat(className),
    "data-bg-idx": backgroundColorIndex
  }, getInitials(name));
};

/* harmony default export */ __webpack_exports__["default"] = (AvatarInitials);
//# sourceMappingURL=AvatarInitials.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/avatar/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/avatar/index.js ***!
  \********************************************************************/
/*! exports provided: AvatarImage, AvatarInitials, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvatarImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarImage */ "./node_modules/box-ui-elements/es/components/avatar/AvatarImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvatarImage", function() { return _AvatarImage__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AvatarInitials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarInitials */ "./node_modules/box-ui-elements/es/components/avatar/AvatarInitials.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvatarInitials", function() { return _AvatarInitials__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar */ "./node_modules/box-ui-elements/es/components/avatar/Avatar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Avatar__WEBPACK_IMPORTED_MODULE_2__["default"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/contact-datalist-item/ContactDatalistItem.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/contact-datalist-item/ContactDatalistItem.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _datalist_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datalist-item */ "./node_modules/box-ui-elements/es/components/datalist-item/index.js");
/* harmony import */ var _ContactDatalistItem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactDatalistItem.scss */ "./node_modules/box-ui-elements/es/components/contact-datalist-item/ContactDatalistItem.scss");
/* harmony import */ var _ContactDatalistItem_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ContactDatalistItem_scss__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ContactDatalistItem = function ContactDatalistItem(_ref) {
  var name = _ref.name,
      subtitle = _ref.subtitle,
      rest = _objectWithoutProperties(_ref, ["name", "subtitle"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_datalist_item__WEBPACK_IMPORTED_MODULE_1__["default"], rest, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "contact-text contact-name"
  }, name), subtitle && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "contact-text contact-sub-name"
  }, subtitle));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactDatalistItem);
//# sourceMappingURL=ContactDatalistItem.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/contact-datalist-item/ContactDatalistItem.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/contact-datalist-item/ContactDatalistItem.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./ContactDatalistItem.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/contact-datalist-item/ContactDatalistItem.scss");

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

/***/ "./node_modules/box-ui-elements/es/components/draft-js-editor/DraftJSEditor.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/draft-js-editor/DraftJSEditor.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js/dist/Draft.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../label */ "./node_modules/box-ui-elements/es/components/label/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/index.js");
/* harmony import */ var _DraftJSEditor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DraftJSEditor.scss */ "./node_modules/box-ui-elements/es/components/draft-js-editor/DraftJSEditor.scss");
/* harmony import */ var _DraftJSEditor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DraftJSEditor_scss__WEBPACK_IMPORTED_MODULE_3__);
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









var DraftJSEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DraftJSEditor, _React$Component);

  function DraftJSEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DraftJSEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DraftJSEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (editorState) {
      var onChange = _this.props.onChange;
      onChange(editorState);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (editorState) {
      var onBlur = _this.props.onBlur;
      onBlur(editorState);
    });

    _defineProperty(_assertThisInitialized(_this), "handleReturn", function (event) {
      var _this$props = _this.props,
          onReturn = _this$props.onReturn,
          inputProps = _this$props.inputProps;

      if (onReturn && !inputProps['aria-activedescendant']) {
        // Return 'handled' tells DraftJS Editor to not handle return key event,
        // return 'not-handled' tells DraftJS Editor to continue handle the return key event.
        // We encapsulate this DraftJS Editor specific contract here, and use true/fase
        // to indicate whether to let DraftJS Editor handle return event or not in the upper level.
        return onReturn(event) ? 'handled' : 'not-handled';
      }

      return 'not-handled';
    });

    return _this;
  }

  _createClass(DraftJSEditor, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          editorState = _this$props2.editorState,
          error = _this$props2.error,
          hideLabel = _this$props2.hideLabel,
          inputProps = _this$props2.inputProps,
          isDisabled = _this$props2.isDisabled,
          isRequired = _this$props2.isRequired,
          label = _this$props2.label,
          onFocus = _this$props2.onFocus,
          placeholder = _this$props2.placeholder;
      var handleBlur = this.handleBlur,
          handleChange = this.handleChange;
      var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        'draft-js-editor': true,
        'is-disabled': isDisabled,
        'show-error': !!error
      });
      var a11yProps = {};

      if (inputProps.role) {
        a11yProps = {
          ariaActiveDescendantID: inputProps['aria-activedescendant'],
          ariaAutoComplete: inputProps['aria-autocomplete'],
          ariaExpanded: inputProps['aria-expanded'],
          ariaOwneeID: inputProps['aria-owns'],
          role: inputProps.role
        };
      }

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: classes
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_label__WEBPACK_IMPORTED_MODULE_1__["default"], {
        hideLabel: hideLabel,
        showOptionalText: !isRequired,
        text: label
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isShown: !!error,
        position: "bottom-left",
        text: error ? error.message : '',
        theme: "error"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, a11yProps, {
        editorState: editorState,
        handleReturn: this.handleReturn,
        onBlur: handleBlur,
        onChange: handleChange,
        onFocus: onFocus,
        placeholder: placeholder,
        readOnly: isDisabled,
        stripPastedStyles: true
      }))))));
    }
  }]);

  return DraftJSEditor;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(DraftJSEditor, "defaultProps", {
  inputProps: {},
  isRequired: false,
  isFocused: false
});

/* harmony default export */ __webpack_exports__["default"] = (DraftJSEditor);
//# sourceMappingURL=DraftJSEditor.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/draft-js-editor/DraftJSEditor.scss":
/*!***************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/draft-js-editor/DraftJSEditor.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./DraftJSEditor.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/draft-js-editor/DraftJSEditor.scss");

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

/***/ "./node_modules/box-ui-elements/es/components/draft-js-editor/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/draft-js-editor/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DraftJSEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraftJSEditor */ "./node_modules/box-ui-elements/es/components/draft-js-editor/DraftJSEditor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DraftJSEditor__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftJSMentionSelector.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftJSMentionSelector.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DraftJSMentionSelectorCore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraftJSMentionSelectorCore */ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftJSMentionSelectorCore.js");
/* harmony import */ var _DraftMentionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DraftMentionItem */ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftMentionItem.js");
/* harmony import */ var _form_FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/FormInput */ "./node_modules/box-ui-elements/es/components/form-elements/form/FormInput.js");
/* harmony import */ var _input_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input-messages */ "./node_modules/box-ui-elements/es/components/form-elements/input-messages.js");
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








/**
 * Scans a Draft ContentBlock for entity ranges, so they can be annotated
 * @see docs at {@link https://draftjs.org/docs/advanced-topics-decorators.html#compositedecorator}
 * @param {ContentBlock} contentBlock
 * @param {function} callback
 * @param {ContentState} contentState
 */

var mentionStrategy = function mentionStrategy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    var ret = entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
    return ret;
  }, callback);
};

var DraftJSMentionSelector =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DraftJSMentionSelector, _React$Component);

  function DraftJSMentionSelector(props) {
    var _this;

    _classCallCheck(this, DraftJSMentionSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DraftJSMentionSelector).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (_this.props.validateOnBlur && _this.containerEl && event.relatedTarget instanceof Node && !_this.containerEl.contains(event.relatedTarget)) {
        _this.checkValidity();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var onFocus = _this.props.onFocus;

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (nextEditorState) {
      var internalEditorState = _this.state.internalEditorState;
      var onChange = _this.props.onChange;
      onChange(nextEditorState);

      if (internalEditorState) {
        _this.setState({
          internalEditorState: nextEditorState
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleValidityStateUpdateHandler", function () {
      var isTouched = _this.state.isTouched;

      if (!isTouched) {
        return;
      }

      var error = _this.getErrorFromValidityState();

      _this.setState({
        error: error
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkValidity", function () {
      _this.handleValidityStateUpdateHandler();
    });

    var mentionDecorator = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([{
      strategy: mentionStrategy,
      component: _DraftMentionItem__WEBPACK_IMPORTED_MODULE_3__["default"]
    }]); // @NOTE (smotraghi 2017-05-30):
    // This component might be either own its EditorState (in which case it lives in `this.state.internalEditorState`)
    // or be a controlled component whose EditorState is passed in via the `editorState` prop.
    // If `props.editorState` is set, `internalEditorState` is `null`,
    // otherwise we initialize it here

    _this.state = {
      contacts: [],
      isTouched: false,
      internalEditorState: props.editorState ? null : !(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createEmpty(mentionDecorator),
      error: null
    };
    return _this;
  }

  _createClass(DraftJSMentionSelector, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var prevInternalEditorState = prevState.internalEditorState;
      var internalEditorState = this.state.internalEditorState;
      var prevEditorStateFromProps = prevProps.editorState;
      var editorState = this.props.editorState; // Determine whether we're working with the internal editor state or
      // external editor state passed in from props

      var prevEditorState = prevInternalEditorState || prevEditorStateFromProps;
      var currentEditorState = internalEditorState || editorState; // Only handle isTouched state transitions and check validity if the
      // editorState references are different. This is to avoid getting stuck
      // in an infinite loop of checking validity because checkValidity always
      // calls setState({ error })

      if (prevEditorState && currentEditorState && prevEditorState !== currentEditorState) {
        var newState = this.getDerivedStateFromEditorState(currentEditorState, prevEditorState);

        if (newState) {
          this.setState(newState, this.checkValidityIfAllowed);
        } else {
          this.checkValidityIfAllowed();
        }
      }
    }
  }, {
    key: "getDerivedStateFromEditorState",
    value: function getDerivedStateFromEditorState(currentEditorState, previousEditorState) {
      var isPreviousEditorStateEmpty = this.isEditorStateEmpty(previousEditorState);
      var isCurrentEditorStateEmpty = this.isEditorStateEmpty(currentEditorState);
      var isNewEditorState = isCurrentEditorStateEmpty && !isPreviousEditorStateEmpty;
      var isEditorStateDirty = isPreviousEditorStateEmpty && !isCurrentEditorStateEmpty;
      var newState = null; // Detect case where controlled EditorState is created anew and empty.
      // If next editorState is empty and the current editorState is not empty
      // that means it is a new empty state and this component should not be marked dirty

      if (isNewEditorState) {
        newState = {
          isTouched: false,
          error: null
        };
      } else if (isEditorStateDirty) {
        // Detect case where controlled EditorState has been made dirty
        // If the current editorState is empty and the next editorState is not
        // empty then this is the first interaction so mark this component dirty
        newState = {
          isTouched: true
        };
      }

      return newState;
    }
  }, {
    key: "checkValidityIfAllowed",
    value: function checkValidityIfAllowed() {
      var validateOnBlur = this.props.validateOnBlur;

      if (!validateOnBlur) {
        this.checkValidity();
      }
    }
  }, {
    key: "isEditorStateEmpty",
    value: function isEditorStateEmpty(editorState) {
      var text = editorState.getCurrentContent().getPlainText().trim();
      var lastChangeType = editorState.getLastChangeType();
      return text.length === 0 && lastChangeType === null;
    }
    /**
     * @returns {string}
     */

  }, {
    key: "getErrorFromValidityState",
    value: function getErrorFromValidityState() {
      var _this$props = this.props,
          externalEditorState = _this$props.editorState,
          isRequired = _this$props.isRequired,
          maxLength = _this$props.maxLength,
          minLength = _this$props.minLength;
      var internalEditorState = this.state.internalEditorState; // manually check for content length if isRequired is true

      var editorState = internalEditorState || externalEditorState;

      var _editorState$getCurre = editorState.getCurrentContent().getPlainText().trim(),
          length = _editorState$getCurre.length;

      if (isRequired && !length) {
        return _input_messages__WEBPACK_IMPORTED_MODULE_5__["valueMissing"]();
      }

      if (typeof minLength !== 'undefined' && length < minLength) {
        return _input_messages__WEBPACK_IMPORTED_MODULE_5__["tooShort"](minLength);
      }

      if (typeof maxLength !== 'undefined' && length > maxLength) {
        return _input_messages__WEBPACK_IMPORTED_MODULE_5__["tooLong"](maxLength);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam,
          externalEditorState = _this$props2.editorState,
          hideLabel = _this$props2.hideLabel,
          isDisabled = _this$props2.isDisabled,
          isRequired = _this$props2.isRequired,
          label = _this$props2.label,
          mentionTriggers = _this$props2.mentionTriggers,
          name = _this$props2.name,
          onMention = _this$props2.onMention,
          placeholder = _this$props2.placeholder,
          selectorRow = _this$props2.selectorRow,
          startMentionMessage = _this$props2.startMentionMessage,
          onReturn = _this$props2.onReturn;
      var _this$state = this.state,
          contacts = _this$state.contacts,
          internalEditorState = _this$state.internalEditorState,
          error = _this$state.error;
      var handleBlur = this.handleBlur,
          handleChange = this.handleChange,
          handleFocus = this.handleFocus;
      var editorState = internalEditorState || externalEditorState;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        ref: function ref(containerEl) {
          _this2.containerEl = containerEl;
        },
        className: className
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_form_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: name,
        onValidityStateUpdate: this.handleValidityStateUpdateHandler
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_DraftJSMentionSelectorCore__WEBPACK_IMPORTED_MODULE_2__["default"], {
        contacts: contacts,
        editorState: editorState,
        error: error,
        hideLabel: hideLabel,
        isDisabled: isDisabled,
        isRequired: isRequired,
        label: label,
        mentionTriggers: mentionTriggers,
        onBlur: handleBlur,
        onChange: handleChange,
        onFocus: handleFocus,
        onMention: onMention,
        onReturn: onReturn,
        placeholder: placeholder,
        selectorRow: selectorRow,
        startMentionMessage: startMentionMessage
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var contacts = nextProps.contacts;
      return contacts ? {
        contacts: contacts
      } : null;
    }
  }]);

  return DraftJSMentionSelector;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(DraftJSMentionSelector, "defaultProps", {
  isRequired: false,
  onChange: lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
  validateOnBlur: true
});

/* harmony default export */ __webpack_exports__["default"] = (DraftJSMentionSelector);
//# sourceMappingURL=DraftJSMentionSelector.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftJSMentionSelectorCore.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftJSMentionSelectorCore.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _datalist_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../datalist-item */ "./node_modules/box-ui-elements/es/components/datalist-item/index.js");
/* harmony import */ var _draft_js_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../draft-js-editor */ "./node_modules/box-ui-elements/es/components/draft-js-editor/index.js");
/* harmony import */ var _selector_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selector-dropdown */ "./node_modules/box-ui-elements/es/components/selector-dropdown/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/messages.js");
/* harmony import */ var _MentionSelector_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MentionSelector.scss */ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/MentionSelector.scss");
/* harmony import */ var _MentionSelector_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MentionSelector_scss__WEBPACK_IMPORTED_MODULE_5__);
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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











var DefaultSelectorRow = function DefaultSelectorRow(_ref) {
  var _ref$item = _ref.item,
      item = _ref$item === void 0 ? {} : _ref$item,
      rest = _objectWithoutProperties(_ref, ["item"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_datalist_item__WEBPACK_IMPORTED_MODULE_1__["default"], rest, item.name, " ", !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "dropdown-secondary-text"
  }, item.email));
};

var DefaultStartMentionMessage = function DefaultStartMentionMessage() {
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_4__["default"].startMention);
};

var MentionStartState = function MentionStartState(_ref2) {
  var message = _ref2.message;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "mention-start-state"
  }, message);
};

var DraftJSMentionSelector =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DraftJSMentionSelector, _React$Component);

  function DraftJSMentionSelector(props) {
    var _this;

    _classCallCheck(this, DraftJSMentionSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DraftJSMentionSelector).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleMention", function () {
      var onMention = _this.props.onMention;
      var activeMention = _this.state.activeMention;

      if (onMention) {
        onMention(activeMention ? activeMention.mentionString : '');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleContactSelected", function (index) {
      var contacts = _this.props.contacts;

      _this.addMention(contacts[index]);

      _this.setState({
        activeMention: null,
        isFocused: true
      }, function () {
        _this.handleMention();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var onBlur = _this.props.onBlur;

      _this.setState({
        isFocused: false
      });

      if (onBlur) {
        onBlur(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var onFocus = _this.props.onFocus;

      _this.setState({
        isFocused: true
      });

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (nextEditorState) {
      var onChange = _this.props.onChange;

      var activeMention = _this.getActiveMentionForEditorState(nextEditorState);

      _this.setState({
        activeMention: activeMention
      }, function () {
        if (onChange) {
          onChange(nextEditorState);
        }

        if (activeMention && activeMention.mentionString) {
          _this.handleMention();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "shouldDisplayMentionLookup", function () {
      var contacts = _this.props.contacts;
      var activeMention = _this.state.activeMention;
      return !!(activeMention && activeMention.mentionString && contacts.length);
    });

    var mentionTriggers = props.mentionTriggers.reduce(function (prev, current) {
      return "".concat(prev, "\\").concat(current);
    }, '');
    _this.state = {
      activeMention: null,
      isFocused: false,
      mentionPattern: new RegExp("([".concat(mentionTriggers, "])([^").concat(mentionTriggers, "]*)$"))
    };
    return _this;
  }
  /**
   * Lifecycle method that gets called immediately after an update
   * @param {object} lastProps Props the component is receiving
   * @returns {void}
   */


  _createClass(DraftJSMentionSelector, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevContacts = prevProps.contacts;
      var currentContacts = this.props.contacts;
      var activeMention = this.state.activeMention;

      if (activeMention !== null && !currentContacts.length && prevContacts !== currentContacts) {
        // if empty set of contacts get passed in, set active mention to null
        this.setState({
          activeMention: null
        });
      }
    }
    /**
     * Extracts the active mention from the editor state
     *
     * @param {EditorState} editorState
     * @returns {object}
     */

  }, {
    key: "getActiveMentionForEditorState",
    value: function getActiveMentionForEditorState(editorState) {
      var mentionPattern = this.state.mentionPattern;
      var contentState = editorState.getCurrentContent();
      var selectionState = editorState.getSelection();
      var startKey = selectionState.getStartKey();
      var activeBlock = contentState.getBlockForKey(startKey);
      var cursorPosition = selectionState.getStartOffset();
      var result = null; // Break the active block into entity ranges.

      activeBlock.findEntityRanges(function (character) {
        return character.getEntity() === null;
      }, function (start, end) {
        // Find the active range (is the cursor inside this range?)
        if (start <= cursorPosition && cursorPosition <= end) {
          // Determine if the active range contains a mention.
          var activeRangeText = activeBlock.getText().substr(start, cursorPosition - start);
          var mentionMatch = activeRangeText.match(mentionPattern);

          if (mentionMatch) {
            result = {
              blockID: startKey,
              mentionString: mentionMatch[2],
              mentionTrigger: mentionMatch[1],
              start: start + mentionMatch.index,
              end: cursorPosition
            };
          }
        }

        return null;
      });
      return result;
    }
    /**
     * Called on each keypress when a mention is being composed
     * @returns {void}
     */

  }, {
    key: "addMention",

    /**
     * Inserts a selected mention into the editor
     * @param {object} mention The selected mention to insert
     */
    value: function addMention(mention) {
      var _this2 = this;

      var activeMention = this.state.activeMention;
      var editorState = this.props.editorState;

      var _ref3 = activeMention || {},
          start = _ref3.start,
          end = _ref3.end;

      var id = mention.id,
          name = mention.name;
      var contentState = editorState.getCurrentContent();
      var selectionState = editorState.getSelection();
      var preInsertionSelectionState = selectionState.merge({
        anchorOffset: start,
        focusOffset: end
      });
      var textToInsert = "@".concat(name);
      var contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', {
        id: id
      });
      var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      var contentStateWithLink = !(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).replaceText(contentState, preInsertionSelectionState, textToInsert, null, entityKey);
      var spaceOffset = preInsertionSelectionState.getStartOffset() + textToInsert.length;
      var selectionStateForAddingSpace = preInsertionSelectionState.merge({
        anchorOffset: spaceOffset,
        focusOffset: spaceOffset
      });
      var contentStateWithLinkAndExtraSpace = !(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).insertText(contentStateWithLink, selectionStateForAddingSpace, ' ');
      var editorStateWithLink = !(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).push(editorState, contentStateWithLinkAndExtraSpace, 'change-block-type');
      this.setState({
        activeMention: null
      }, function () {
        _this2.handleChange(editorStateWithLink);
      });
    }
    /**
     * @returns {boolean}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          contacts = _this$props.contacts,
          editorState = _this$props.editorState,
          error = _this$props.error,
          hideLabel = _this$props.hideLabel,
          isDisabled = _this$props.isDisabled,
          isRequired = _this$props.isRequired,
          label = _this$props.label,
          onReturn = _this$props.onReturn,
          placeholder = _this$props.placeholder,
          selectorRow = _this$props.selectorRow,
          startMentionMessage = _this$props.startMentionMessage,
          onMention = _this$props.onMention;
      var _this$state = this.state,
          activeMention = _this$state.activeMention,
          isFocused = _this$state.isFocused;
      var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('mention-selector-wrapper', className);
      var showMentionStartState = !!(onMention && activeMention && !activeMention.mentionString && isFocused);
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: classes
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_selector_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onSelect: this.handleContactSelected,
        selector: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_draft_js_editor__WEBPACK_IMPORTED_MODULE_2__["default"], {
          editorState: editorState,
          error: error,
          hideLabel: hideLabel,
          isDisabled: isDisabled,
          isFocused: isFocused,
          isRequired: isRequired,
          label: label,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          onReturn: onReturn,
          placeholder: placeholder
        })
      }, this.shouldDisplayMentionLookup() ? contacts.map(function (contact) {
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(selectorRow, _objectSpread({}, selectorRow.props, {}, contact, {
          key: contact.id
        }));
      }) : []), showMentionStartState ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(MentionStartState, {
        message: startMentionMessage
      }) : null);
    }
  }]);

  return DraftJSMentionSelector;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(DraftJSMentionSelector, "defaultProps", {
  className: '',
  contacts: [],
  isDisabled: false,
  isRequired: false,
  mentionTriggers: ['@', '＠', '﹫'],
  selectorRow: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(DefaultSelectorRow, null),
  startMentionMessage: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(DefaultStartMentionMessage, null)
});

/* harmony default export */ __webpack_exports__["default"] = (DraftJSMentionSelector);
//# sourceMappingURL=DraftJSMentionSelectorCore.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftMentionDecorator.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftMentionDecorator.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _DraftMentionItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraftMentionItem */ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftMentionItem.js");



var mentionStrategy = function mentionStrategy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    var ret = entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
    return ret;
  }, callback);
};

var DraftMentionDecorator = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([{
  strategy: mentionStrategy,
  component: _DraftMentionItem__WEBPACK_IMPORTED_MODULE_1__["default"]
}]);
/* harmony default export */ __webpack_exports__["default"] = (DraftMentionDecorator);
//# sourceMappingURL=DraftMentionDecorator.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftMentionItem.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftMentionItem.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



var DraftMentionItem = function DraftMentionItem(_ref) {
  var contentState = _ref.contentState,
      entityKey = _ref.entityKey,
      children = _ref.children;
  var id = '';

  if (entityKey) {
    id = contentState.getEntity(entityKey).getData().id;
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
    href: "/profile/".concat(id)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (DraftMentionItem);
//# sourceMappingURL=DraftMentionItem.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/MentionSelector.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/MentionSelector.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!../../../../../postcss-loader/src??ref--10-2!../../../../../sass-loader/dist/cjs.js??ref--10-3!./MentionSelector.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/MentionSelector.scss");

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

/***/ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/createMentionSelectorState.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/createMentionSelectorState.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _DraftMentionDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraftMentionDecorator */ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftMentionDecorator.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // returns data for first mention in a string

var getMentionFromText = function getMentionFromText(text) {
  // RegEx.exec() is stateful, so we create a new regex instance each time
  var mentionRegex = /([@＠﹫])\[([0-9]+):([^\]]+)]/gi;
  var matchArray = mentionRegex.exec(text);

  if (!matchArray) {
    return null;
  }

  var _matchArray = _slicedToArray(matchArray, 4),
      fullMatch = _matchArray[0],
      triggerSymbol = _matchArray[1],
      id = _matchArray[2],
      name = _matchArray[3];

  var start = matchArray.index;
  var end = start + fullMatch.length;
  var data = {
    id: id,
    name: name,
    content: "".concat(triggerSymbol).concat(name)
  };
  return {
    start: start,
    end: end,
    data: data
  };
}; // creates draftjs state with mentions parsed into entities


var createMentionSelectorState = function createMentionSelectorState() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var contentState = !(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createFromText(message);
  var contentBlock = contentState.getFirstBlock();

  while (contentBlock != null) {
    var text = contentBlock.getText();
    var mention = text ? getMentionFromText(text) : null;

    if (mention == null) {
      contentBlock = contentState.getBlockAfter(contentBlock.getKey());
    } else {
      var data = mention.data,
          start = mention.start,
          end = mention.end;
      contentState.createEntity('MENTION', 'IMMUTABLE', data);
      var mentionEntityKey = contentState.getLastCreatedEntityKey();
      var mentionRange = !(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createEmpty(contentBlock.getKey()).merge({
        anchorOffset: start,
        focusOffset: end
      });
      contentState = !(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).replaceText(contentState, mentionRange, data.content, null, mentionEntityKey);
      contentBlock = contentState.getBlockForKey(contentBlock.getKey());
    }
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'draft-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createWithContent(contentState, _DraftMentionDecorator__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (createMentionSelectorState);
//# sourceMappingURL=createMentionSelectorState.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default, createMentionSelectorState, DraftMentionDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DraftJSMentionSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraftJSMentionSelector */ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftJSMentionSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DraftJSMentionSelector__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createMentionSelectorState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMentionSelectorState */ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/createMentionSelectorState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMentionSelectorState", function() { return _createMentionSelectorState__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DraftMentionDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraftMentionDecorator */ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/DraftMentionDecorator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraftMentionDecorator", function() { return _DraftMentionDecorator__WEBPACK_IMPORTED_MODULE_2__["default"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/messages.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/messages.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  startMention: {
    "id": "boxui.draftjs.mentionSelector.startMention",
    "defaultMessage": "Mention someone to notify them"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/form-elements/form/FormInput.js":
/*!************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/form-elements/form/FormInput.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var FormInput =
/*#__PURE__*/
function (_Component) {
  _inherits(FormInput, _Component);

  function FormInput() {
    _classCallCheck(this, FormInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormInput).apply(this, arguments));
  }

  _createClass(FormInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          name = _this$props.name,
          onValidityStateUpdate = _this$props.onValidityStateUpdate;

      if (this.context.form) {
        this.context.form.registerInput(name, onValidityStateUpdate);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.context.form) {
        this.context.form.unregisterInput(this.props.name);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", null, this.props.children);
    }
  }]);

  return FormInput;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(FormInput, "propTypes", {
  children: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).node.isRequired,

  /** callback called when Form pushed down a new validityState, useful for displaying server validation errors */
  onValidityStateUpdate: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).func.isRequired,

  /** Input name */
  name: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).string.isRequired
});

_defineProperty(FormInput, "contextTypes", {
  form: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).shape({
    registerInput: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).func.isRequired,
    unregisterInput: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).func.isRequired
  })
});

/* harmony default export */ __webpack_exports__["default"] = (FormInput);
//# sourceMappingURL=FormInput.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/form-elements/input-messages.js":
/*!************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/form-elements/input-messages.js ***!
  \************************************************************************************/
/*! exports provided: badInput, patternMismatch, tooShort, tooLong, typeMismatchEmail, typeMismatchUrl, valueMissing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badInput", function() { return badInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternMismatch", function() { return patternMismatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooShort", function() { return tooShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooLong", function() { return tooLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeMismatchEmail", function() { return typeMismatchEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeMismatchUrl", function() { return typeMismatchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueMissing", function() { return valueMissing; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/messages */ "./node_modules/box-ui-elements/es/common/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var badInput = function badInput() {
  return {
    code: 'badInput',
    message: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].invalidInputError)
  };
};

var patternMismatch = function patternMismatch() {
  return {
    code: 'patternMismatch',
    message: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].invalidInputError)
  };
};

var tooShort = function tooShort(minLength) {
  return {
    code: 'tooShort',
    message: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].minLengthError, {
      values: {
        min: minLength
      }
    }))
  };
};

var tooLong = function tooLong(maxLength) {
  return {
    code: 'tooLong',
    message: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].maxLengthError, {
      values: {
        max: maxLength
      }
    }))
  };
};

var typeMismatchEmail = function typeMismatchEmail() {
  return {
    code: 'typeMismatch',
    message: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].invalidEmailError)
  };
};

var typeMismatchUrl = function typeMismatchUrl() {
  return {
    code: 'typeMismatch',
    message: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].invalidURLError)
  };
};

var valueMissing = function valueMissing() {
  return {
    code: 'valueMissing',
    message: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].requiredFieldError)
  };
};


//# sourceMappingURL=input-messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/inline-error/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/inline-error/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InlineError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InlineError */ "./node_modules/box-ui-elements/es/components/inline-error/InlineError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InlineError__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/link/LinkButton.js":
/*!***********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/link/LinkButton.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _LinkBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkBase */ "./node_modules/box-ui-elements/es/components/link/LinkBase.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var LinkButton = function LinkButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_LinkBase__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: "btn ".concat(className)
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (LinkButton);
//# sourceMappingURL=LinkButton.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/link/LinkGroup.js":
/*!**********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/link/LinkGroup.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// eslint-disable-next-line react/prefer-stateless-function
var LinkGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LinkGroup, _React$Component);

  function LinkGroup() {
    _classCallCheck(this, LinkGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(LinkGroup).apply(this, arguments));
  }

  _createClass(LinkGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children,
          className = _this$props.className;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "link-group ".concat(className)
      }, title ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "link-group-title"
      }, title) : null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("ul", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).map(children, function (item, i) {
        return item ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("li", {
          key: i
        }, item, " ") : null;
      })));
    }
  }]);

  return LinkGroup;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(LinkGroup, "defaultProps", {
  title: '',
  className: ''
});

/* harmony default export */ __webpack_exports__["default"] = (LinkGroup);
//# sourceMappingURL=LinkGroup.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/link/LinkPrimaryButton.js":
/*!******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/link/LinkPrimaryButton.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _LinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkButton */ "./node_modules/box-ui-elements/es/components/link/LinkButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var LinkPrimaryButton = function LinkPrimaryButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_LinkButton__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: "btn-primary ".concat(className)
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (LinkPrimaryButton);
//# sourceMappingURL=LinkPrimaryButton.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/link/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/link/index.js ***!
  \******************************************************************/
/*! exports provided: LinkGroup, Link, LinkButton, LinkPrimaryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LinkGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkGroup */ "./node_modules/box-ui-elements/es/components/link/LinkGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkGroup", function() { return _LinkGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./node_modules/box-ui-elements/es/components/link/Link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkButton */ "./node_modules/box-ui-elements/es/components/link/LinkButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return _LinkButton__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _LinkPrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkPrimaryButton */ "./node_modules/box-ui-elements/es/components/link/LinkPrimaryButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkPrimaryButton", function() { return _LinkPrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/media/Media.js":
/*!*******************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/media/Media.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _MediaFigure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaFigure */ "./node_modules/box-ui-elements/es/components/media/MediaFigure.js");
/* harmony import */ var _MediaBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaBody */ "./node_modules/box-ui-elements/es/components/media/MediaBody.js");
/* harmony import */ var _MediaMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MediaMenu */ "./node_modules/box-ui-elements/es/components/media/MediaMenu.js");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Media.scss */ "./node_modules/box-ui-elements/es/components/media/Media.scss");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Media_scss__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Media = function Media(_ref) {
  var Wrapper = _ref.as,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["as", "children", "className"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Wrapper, _extends({
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bdl-Media', className)
  }, rest), children);
}; // Use this instead of default value because of param destructuring bug in Flow
// that affects union types
// https://github.com/facebook/flow/issues/5461


Media.defaultProps = {
  as: 'div'
};
Media.Body = _MediaBody__WEBPACK_IMPORTED_MODULE_2__["default"];
Media.Menu = _MediaMenu__WEBPACK_IMPORTED_MODULE_3__["default"];
Media.Figure = _MediaFigure__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Media);
//# sourceMappingURL=Media.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/media/Media.scss":
/*!*********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/media/Media.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./Media.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/media/Media.scss");

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

/***/ "./node_modules/box-ui-elements/es/components/media/MediaBody.js":
/*!***********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/media/MediaBody.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media.scss */ "./node_modules/box-ui-elements/es/components/media/Media.scss");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Media_scss__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var MediaBody = function MediaBody(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "children"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", _extends({
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bdl-Media-body', className)
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (MediaBody);
//# sourceMappingURL=MediaBody.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/media/MediaFigure.js":
/*!*************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/media/MediaFigure.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media.scss */ "./node_modules/box-ui-elements/es/components/media/Media.scss");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Media_scss__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var MediaFigure = function MediaFigure(_ref) {
  var Wrapper = _ref.as,
      className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["as", "className", "children"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Wrapper, _extends({
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bdl-Media-figure', className)
  }, rest), children);
}; // Use this instead of default value because of param destructuring bug in Flow
// that affects union types
// https://github.com/facebook/flow/issues/5461


MediaFigure.defaultProps = {
  as: 'figure'
};
/* harmony default export */ __webpack_exports__["default"] = (MediaFigure);
//# sourceMappingURL=MediaFigure.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/media/MediaMenu.js":
/*!***********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/media/MediaMenu.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/general/IconEllipsis */ "./node_modules/box-ui-elements/es/icons/general/IconEllipsis.js");
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dropdown-menu */ "./node_modules/box-ui-elements/es/components/dropdown-menu/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu */ "./node_modules/box-ui-elements/es/components/menu/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Media.scss */ "./node_modules/box-ui-elements/es/components/media/Media.scss");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Media_scss__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var MediaMenu = function MediaMenu(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isDisabled = _ref.isDisabled,
      dropdownProps = _ref.dropdownProps,
      menuProps = _ref.menuProps,
      rest = _objectWithoutProperties(_ref, ["className", "children", "isDisabled", "dropdownProps", "menuProps"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    constrainToScrollParent: true,
    isRightAligned: true
  }, dropdownProps), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    isDisabled: isDisabled,
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bdl-Media-menu', className),
    type: "button"
  }, rest), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_5__["bdlGray50"],
    height: 16,
    width: 16
  })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_menu__WEBPACK_IMPORTED_MODULE_4__["Menu"], menuProps, children));
};

MediaMenu.defaultProps = {
  dropdownProps: {},
  isDisabled: false,
  menuProps: {}
};
/* harmony default export */ __webpack_exports__["default"] = (MediaMenu);
//# sourceMappingURL=MediaMenu.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/media/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/media/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media */ "./node_modules/box-ui-elements/es/components/media/Media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Media__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/modal/Modal.js":
/*!*******************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/modal/Modal.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'tabbable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../focus-trap */ "./node_modules/box-ui-elements/es/components/focus-trap/index.js");
/* harmony import */ var _loading_indicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading-indicator */ "./node_modules/box-ui-elements/es/components/loading-indicator/index.js");
/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../portal */ "./node_modules/box-ui-elements/es/components/portal/index.js");
/* harmony import */ var _ModalDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalDialog */ "./node_modules/box-ui-elements/es/components/modal/ModalDialog.js");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal.scss */ "./node_modules/box-ui-elements/es/components/modal/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_6__);
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











var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          onRequestClose = _this$props.onRequestClose;

      if (isOpen && onRequestClose && event.key === 'Escape') {
        event.stopPropagation();
        onRequestClose(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBackdropClick", function (event) {
      var _this$props2 = _this.props,
          onRequestClose = _this$props2.onRequestClose,
          onBackdropClick = _this$props2.onBackdropClick;

      if (onBackdropClick) {
        onBackdropClick(event);
      } else if (onRequestClose) {
        onRequestClose(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onModalOpen", function () {
      setTimeout(function () {
        var focusElementSelector = _this.props.focusElementSelector;
        var focusElementSelectorTrimmed = focusElementSelector && focusElementSelector.trim();

        if (focusElementSelectorTrimmed) {
          _this.focusElement(focusElementSelectorTrimmed);
        } else {
          _this.focusFirstUsefulElement();
        }
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "focusFirstUsefulElement", function () {
      if (!_this.dialog) {
        return;
      }

      var tabbableEls = !(function webpackMissingModule() { var e = new Error("Cannot find module 'tabbable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this.dialog);

      if (tabbableEls.length > 1) {
        tabbableEls[1].focus();
      } else if (tabbableEls.length > 0) {
        tabbableEls[0].focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusElement", function (elementSelector) {
      if (!_this.dialog) {
        return;
      }

      var el = _this.dialog.querySelector(elementSelector);

      if (el) {
        el.focus();
      } else {
        throw new Error("Could not find element matching selector ".concat(elementSelector, " to focus on."));
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isOpen = this.props.isOpen;

      if (isOpen) {
        this.onModalOpen();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          isLoading = _this$props3.isLoading,
          isOpen = _this$props3.isOpen; // Set focus if modal is transitioning from closed -> open and/or loading -> not loading

      if ((!prevProps.isOpen || prevProps.isLoading) && isOpen && !isLoading) {
        this.onModalOpen();
      }
    }
    /**
     * Call props.onRequestClose when escape is pressed
     * @param {SyntheticKeyboardEvent} event
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          isLoading = _this$props4.isLoading,
          isOpen = _this$props4.isOpen,
          onRequestClose = _this$props4.onRequestClose,
          shouldNotUsePortal = _this$props4.shouldNotUsePortal,
          style = _this$props4.style,
          rest = _objectWithoutProperties(_this$props4, ["className", "isLoading", "isOpen", "onRequestClose", "shouldNotUsePortal", "style"]);

      if (!isOpen) {
        return null;
      }

      var bodyOverrideStyle = "\n            body {\n                overflow:hidden;\n            }\n        "; // used `omit` here to prevent certain key/value pairs from going into the spread on `ModalDialog`

      var modalProps = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(rest, ['onBackdropClick', 'focusElementSelector']);
      var WrapperComponent = shouldNotUsePortal ? 'div' : _portal__WEBPACK_IMPORTED_MODULE_4__["default"]; // Render a style tag to prevent body from scrolling as long as the Modal is open

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(WrapperComponent, {
        className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('modal', className),
        onKeyDown: this.onKeyDown,
        tabIndex: "-1"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "modal-backdrop",
        onClick: this.onBackdropClick,
        style: style.backdrop
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_focus_trap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "modal-dialog-container"
      }, isLoading ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_loading_indicator__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "large"
      }) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ModalDialog__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
        modalRef: function modalRef(modalEl) {
          // This callback gets passed through as a regular prop since
          // ModalDialog is wrapped in a HOC
          _this2.dialog = modalEl;
        },
        onRequestClose: onRequestClose,
        style: style.dialog
      }, modalProps))), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("style", {
        type: "text/css"
      }, bodyOverrideStyle));
    }
  }]);

  return Modal;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(Modal, "defaultProps", {
  style: {
    backdrop: {},
    dialog: {}
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Modal);
//# sourceMappingURL=Modal.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/modal/Modal.scss":
/*!*********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/modal/Modal.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./Modal.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/modal/Modal.scss");

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

/***/ "./node_modules/box-ui-elements/es/components/modal/ModalDialog.js":
/*!*************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/modal/ModalDialog.js ***!
  \*************************************************************************/
/*! exports provided: ModalDialogBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogBase", function() { return ModalDialog; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _icons_general_IconClose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconClose */ "./node_modules/box-ui-elements/es/icons/general/IconClose.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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







var ALERT_TYPE = 'alert';
var DIALOG_TYPE = 'dialog';
var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  closeModalText: {
    "id": "boxui.modalDialog.closeModalText",
    "defaultMessage": "Close Modal"
  }
});

var ModalDialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalDialog, _React$Component);

  function ModalDialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalDialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onCloseButtonClick", function (event) {
      var onRequestClose = _this.props.onRequestClose;

      if (onRequestClose) {
        onRequestClose(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "modalID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('modal'));

    return _this;
  }

  _createClass(ModalDialog, [{
    key: "renderCloseButton",

    /**
     * Renders a button if onRequestClose is passed in
     * @return {ReactElement|null} - Returns the button, or null if the button shouldn't be rendered
     */
    value: function renderCloseButton() {
      var _this$props = this.props,
          closeButtonProps = _this$props.closeButtonProps,
          onRequestClose = _this$props.onRequestClose,
          intl = _this$props.intl;
      var formatMessage = intl.formatMessage;

      if (!onRequestClose) {
        return null;
      }

      return (// eslint-disable-next-line react/button-has-type
        !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", _extends({}, closeButtonProps, {
          "aria-label": formatMessage(messages.closeModalText),
          className: "modal-close-button",
          onClick: this.onCloseButtonClick
        }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconClose__WEBPACK_IMPORTED_MODULE_3__["default"], {
          color: "#909090",
          height: 18,
          width: 18
        }))
      );
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          type = _this$props2.type;

      if (type !== ALERT_TYPE) {
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
          className: "modal-content"
        }, children);
      }

      var elements = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).toArray(children);

      if (elements.length !== 2) {
        throw new Error('Alert modal must have exactly two children: A message and <ModalActions>');
      }

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "modal-content"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", {
        id: "".concat(this.modalID, "-desc")
      }, elements[0]), elements[1]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          modalRef = _this$props3.modalRef,
          title = _this$props3.title,
          type = _this$props3.type,
          rest = _objectWithoutProperties(_this$props3, ["className", "modalRef", "title", "type"]);

      var isAlertType = type === ALERT_TYPE;
      var divProps = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(rest, ['children', 'closeButtonProps', 'onRequestClose', 'intl']);
      divProps.role = isAlertType ? 'alertdialog' : 'dialog';
      divProps['aria-labelledby'] = "".concat(this.modalID, "-label");

      if (isAlertType) {
        divProps['aria-describedby'] = "".concat(this.modalID, "-desc");
      }

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", _extends({
        ref: modalRef,
        className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('modal-dialog', className)
      }, divProps), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "modal-header"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h2", {
        className: "modal-title",
        id: "".concat(this.modalID, "-label")
      }, title)), this.renderCloseButton(), this.renderContent());
    }
  }]);

  return ModalDialog;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(ModalDialog, "defaultProps", {
  type: DIALOG_TYPE,
  closeButtonProps: {}
});


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(ModalDialog));
//# sourceMappingURL=ModalDialog.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelectorDropdown.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelectorDropdown.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'immutable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_parseCSV__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/parseCSV */ "./node_modules/box-ui-elements/es/utils/parseCSV.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../label */ "./node_modules/box-ui-elements/es/components/label/index.js");
/* harmony import */ var _selector_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selector-dropdown */ "./node_modules/box-ui-elements/es/components/selector-dropdown/index.js");
/* harmony import */ var _PillSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PillSelector */ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelector.js");
/* harmony import */ var _PillSelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PillSelectorDropdown.scss */ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelectorDropdown.scss");
/* harmony import */ var _PillSelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PillSelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_6__);
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











var PillSelectorDropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PillSelectorDropdown, _React$Component);

  function PillSelectorDropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PillSelectorDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PillSelectorDropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      inputValue: '',
      isInCompositionMode: false
    });

    _defineProperty(_assertThisInitialized(_this), "parsePills", function (inputValue) {
      var _this$props = _this.props,
          allowInvalidPills = _this$props.allowInvalidPills,
          parseItems = _this$props.parseItems,
          validator = _this$props.validator;
      var pills = parseItems ? parseItems(inputValue) : Object(_utils_parseCSV__WEBPACK_IMPORTED_MODULE_2__["default"])(inputValue);

      if (!pills) {
        return [];
      }

      if (!allowInvalidPills) {
        pills = pills.filter(function (pill) {
          return validator(pill);
        });
      }

      var normalizedPills = pills.map(function (pill) {
        return typeof pill === 'string' ? {
          displayText: pill,
          text: pill,
          // deprecated, left for backwards compatibility
          value: pill
        } : pill;
      });
      return normalizedPills;
    });

    _defineProperty(_assertThisInitialized(_this), "addPillsFromInput", function (inputValue) {
      var _this$props2 = _this.props,
          allowCustomPills = _this$props2.allowCustomPills,
          onPillCreate = _this$props2.onPillCreate,
          onSelect = _this$props2.onSelect,
          selectedOptions = _this$props2.selectedOptions,
          shouldClearUnmatchedInput = _this$props2.shouldClearUnmatchedInput,
          validateForError = _this$props2.validateForError; // Do nothing if custom pills are not allowed

      if (!allowCustomPills) {
        return;
      } // Parse pills from input


      var pills = _this.parsePills(inputValue); // "Select" the pills


      if (pills.length > 0) {
        onSelect(pills);
        onPillCreate(pills);

        _this.resetInputValue();
      } else {
        if (validateForError && (inputValue !== '' || selectedOptions.length === 0)) {
          /**
           * If no pills were added, but an inputValue exists or
           * there are no pills selected, check for errors
           */
          validateForError(inputValue);
        }

        if (shouldClearUnmatchedInput) {
          _this.resetInputValue();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var onBlur = _this.props.onBlur;
      var inputValue = _this.state.inputValue;

      _this.addPillsFromInput(inputValue);

      onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (event) {
      var target = event.target;
      var value = target.value;

      _this.setState({
        inputValue: value
      });

      _this.props.onInput(value, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function (event) {
      var _this$state = _this.state,
          isInCompositionMode = _this$state.isInCompositionMode,
          inputValue = _this$state.inputValue;

      if (!isInCompositionMode) {
        event.preventDefault();

        _this.addPillsFromInput(inputValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePaste", function (event) {
      event.preventDefault();
      var inputValue = event.clipboardData.getData('text');

      _this.setState({
        inputValue: inputValue
      });

      _this.props.onInput(inputValue, event);

      _this.addPillsFromInput(inputValue);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (index, event) {
      var _this$props3 = _this.props,
          onPillCreate = _this$props3.onPillCreate,
          onSelect = _this$props3.onSelect,
          selectorOptions = _this$props3.selectorOptions;
      var selectedOption = // $FlowFixMe
      typeof selectorOptions.get === 'function' ? selectorOptions.get(index) : selectorOptions[index];
      onSelect([selectedOption], event);
      onPillCreate([selectedOption]);

      _this.handleInput({
        target: {
          value: ''
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCompositionStart", function () {
      _this.setState({
        isInCompositionMode: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCompositionEnd", function () {
      _this.setState({
        isInCompositionMode: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetInputValue", function () {
      var onInput = _this.props.onInput;

      _this.setState({
        inputValue: ''
      });

      onInput('');
    });

    return _this;
  }

  _createClass(PillSelectorDropdown, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          allowInvalidPills = _this$props4.allowInvalidPills,
          children = _this$props4.children,
          className = _this$props4.className,
          disabled = _this$props4.disabled,
          dividerIndex = _this$props4.dividerIndex,
          dropdownScrollBoundarySelector = _this$props4.dropdownScrollBoundarySelector,
          error = _this$props4.error,
          inputProps = _this$props4.inputProps,
          label = _this$props4.label,
          onRemove = _this$props4.onRemove,
          onSuggestedPillAdd = _this$props4.onSuggestedPillAdd,
          overlayTitle = _this$props4.overlayTitle,
          placeholder = _this$props4.placeholder,
          selectedOptions = _this$props4.selectedOptions,
          suggestedPillsData = _this$props4.suggestedPillsData,
          suggestedPillsFilter = _this$props4.suggestedPillsFilter,
          suggestedPillsTitle = _this$props4.suggestedPillsTitle,
          shouldSetActiveItemOnOpen = _this$props4.shouldSetActiveItemOnOpen,
          validator = _this$props4.validator;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_label__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: label
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_selector_dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pill-selector-wrapper', className),
        dividerIndex: dividerIndex,
        onEnter: this.handleEnter,
        onSelect: this.handleSelect,
        overlayTitle: overlayTitle,
        scrollBoundarySelector: dropdownScrollBoundarySelector,
        shouldSetActiveItemOnOpen: shouldSetActiveItemOnOpen,
        selector: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_PillSelector__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
          onChange: lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a // fix console error
          ,
          onCompositionEnd: this.handleCompositionEnd,
          onCompositionStart: this.handleCompositionStart
        }, inputProps, {
          allowInvalidPills: allowInvalidPills,
          disabled: disabled,
          error: error,
          onBlur: this.handleBlur,
          onInput: this.handleInput,
          onPaste: this.handlePaste,
          onRemove: onRemove,
          onSuggestedPillAdd: onSuggestedPillAdd,
          placeholder: placeholder,
          selectedOptions: selectedOptions,
          suggestedPillsData: suggestedPillsData,
          suggestedPillsFilter: suggestedPillsFilter,
          suggestedPillsTitle: suggestedPillsTitle,
          validator: validator,
          value: this.state.inputValue
        }))
      }, children));
    }
  }]);

  return PillSelectorDropdown;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(PillSelectorDropdown, "defaultProps", {
  allowCustomPills: false,
  allowInvalidPills: false,
  disabled: false,
  error: '',
  inputProps: {},
  label: '',
  onBlur: lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
  onPillCreate: lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
  placeholder: '',
  selectedOptions: [],
  selectorOptions: [],
  shouldClearUnmatchedInput: false,
  shouldSetActiveItemOnOpen: false,
  validator: function validator() {
    return true;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (PillSelectorDropdown);
//# sourceMappingURL=PillSelectorDropdown.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelectorDropdown.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelectorDropdown.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./PillSelectorDropdown.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelectorDropdown.scss");

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

/***/ "./node_modules/box-ui-elements/es/components/text-area/TextArea.js":
/*!**************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/text-area/TextArea.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../label */ "./node_modules/box-ui-elements/es/components/label/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/index.js");
/* harmony import */ var _TextArea_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextArea.scss */ "./node_modules/box-ui-elements/es/components/text-area/TextArea.scss");
/* harmony import */ var _TextArea_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TextArea_scss__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var TextArea = function TextArea(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      error = _ref.error,
      hideLabel = _ref.hideLabel,
      hideOptionalLabel = _ref.hideOptionalLabel,
      isRequired = _ref.isRequired,
      isResizable = _ref.isResizable,
      label = _ref.label,
      textareaRef = _ref.textareaRef,
      rest = _objectWithoutProperties(_ref, ["className", "error", "hideLabel", "hideOptionalLabel", "isRequired", "isResizable", "label", "textareaRef"]);

  var hasError = !!error;
  var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(className, 'text-area-container', {
    'show-error': hasError
  });
  var errorMessageID = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()('errorMessage')).current;
  var ariaAttrs = {
    'aria-invalid': hasError,
    'aria-required': isRequired,
    'aria-errormessage': errorMessageID
  };
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: classes
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_label__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hideLabel: hideLabel,
    showOptionalText: !hideOptionalLabel && !isRequired,
    text: label
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isShown: hasError,
    position: "bottom-left",
    text: error || '',
    theme: "error"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("textarea", _extends({
    ref: textareaRef,
    required: isRequired,
    style: {
      resize: isResizable ? '' : 'none'
    }
  }, ariaAttrs, rest))), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    id: errorMessageID,
    className: "accessibility-hidden",
    role: "alert"
  }, error)));
};

TextArea.displayName = 'TextArea';
/* harmony default export */ __webpack_exports__["default"] = (TextArea);
//# sourceMappingURL=TextArea.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/text-area/TextArea.scss":
/*!****************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/text-area/TextArea.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./TextArea.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/text-area/TextArea.scss");

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

/***/ "./node_modules/box-ui-elements/es/components/text-area/TextAreaField.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/text-area/TextAreaField.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextArea */ "./node_modules/box-ui-elements/es/components/text-area/TextArea.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var TextAreaField = function TextAreaField(_ref) {
  var field = _ref.field,
      form = _ref.form,
      innerRef = _ref.innerRef,
      isRequired = _ref.isRequired,
      rest = _objectWithoutProperties(_ref, ["field", "form", "innerRef", "isRequired"]);

  var name = field.name;
  var errors = form.errors,
      touched = form.touched;
  var isTouched = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(touched, name);
  var error = isTouched ? lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(errors, name) : null;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_TextArea__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, field, rest, {
    textareaRef: innerRef,
    error: error,
    hideOptionalLabel: isRequired
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TextAreaField);
//# sourceMappingURL=TextAreaField.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/text-area/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/text-area/index.js ***!
  \***********************************************************************/
/*! exports provided: default, TextAreaField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextArea */ "./node_modules/box-ui-elements/es/components/text-area/TextArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextArea__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _TextAreaField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextAreaField */ "./node_modules/box-ui-elements/es/components/text-area/TextAreaField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaField", function() { return _TextAreaField__WEBPACK_IMPORTED_MODULE_1__["default"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/time/ReadableTime.js":
/*!*************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/time/ReadableTime.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/datetime */ "./node_modules/box-ui-elements/es/utils/datetime.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/components/time/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var ReadableTime = function ReadableTime(_ref) {
  var timestamp = _ref.timestamp,
      _ref$relativeThreshol = _ref.relativeThreshold,
      relativeThreshold = _ref$relativeThreshol === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_1__["ONE_HOUR_MS"] : _ref$relativeThreshol,
      _ref$allowFutureTimes = _ref.allowFutureTimestamps,
      allowFutureTimestamps = _ref$allowFutureTimes === void 0 ? true : _ref$allowFutureTimes,
      _ref$alwaysShowTime = _ref.alwaysShowTime,
      alwaysShowTime = _ref$alwaysShowTime === void 0 ? false : _ref$alwaysShowTime,
      _ref$showWeekday = _ref.showWeekday,
      showWeekday = _ref$showWeekday === void 0 ? false : _ref$showWeekday;
  var relativeIfNewerThanTs = Date.now() - relativeThreshold;
  var shouldShowYear = !Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isCurrentYear"])(timestamp);

  if (!allowFutureTimestamps && timestamp > Date.now()) {
    // TODO: what is the reasoning behind this rule?
    timestamp = relativeIfNewerThanTs; // Default to 'Today' for timestamps that would show a future date
  } // e.g. Oct 5, 2018


  var dateMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].eventTime;
  var date = null;
  var weekday = null;

  if (Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isToday"])(timestamp)) {
    // e.g. Today at 12:30 PM
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].eventTimeToday;
  } else if (Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isYesterday"])(timestamp)) {
    // e.g. Yesterday at 11:30 AM
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].eventTimeYesterday;
  } else if (showWeekday) {
    // e.g. Monday, Oct 5, 2018
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].eventTimeWeekdayLong;
    weekday = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      value: timestamp,
      weekday: "long"
    });
  } else if (shouldShowYear && alwaysShowTime) {
    // e.g. Oct 5, 2018 at 10:30 PM
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].eventTimeDate;
  } else if (!shouldShowYear && alwaysShowTime) {
    // e.g. Oct 5 at 10:30 PM
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].eventTimeDateShort;
    date = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      value: timestamp,
      month: "short",
      day: "numeric"
    });
  } else if (!shouldShowYear && !alwaysShowTime) {
    // e.g. Oct 5
    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      value: timestamp,
      month: "short",
      day: "numeric"
    });
  }

  var output = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, dateMessage, {
    values: {
      time: timestamp,
      date: date,
      weekday: weekday
    }
  })); // if the time stamp is within +/- the relative threshold for the current time,
  // print the default time format

  if (Math.abs(Date.now() - timestamp) <= relativeThreshold) {
    output = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      value: timestamp
    });
  }

  return output;
};

/* harmony default export */ __webpack_exports__["default"] = (ReadableTime);
//# sourceMappingURL=ReadableTime.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/time/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/time/index.js ***!
  \******************************************************************/
/*! exports provided: ReadableTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReadableTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReadableTime */ "./node_modules/box-ui-elements/es/components/time/ReadableTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadableTime", function() { return _ReadableTime__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// eslint-disable-next-line import/prefer-default-export

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/time/messages.js":
/*!*********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/time/messages.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  eventTime: {
    "id": "boxui.readableTime.eventTime",
    "defaultMessage": "{time, date, medium}"
  },
  eventTimeToday: {
    "id": "boxui.readableTime.eventTimeToday",
    "defaultMessage": "Today at {time, time, short}"
  },
  eventTimeYesterday: {
    "id": "boxui.readableTime.eventTimeYesterday",
    "defaultMessage": "Yesterday at {time, time, short}"
  },
  eventTimeDate: {
    "id": "boxui.readableTime.eventTimeDate",
    "defaultMessage": "{time, date, medium} at {time, time, short}"
  },
  eventTimeDateShort: {
    "id": "boxui.readableTime.eventTimeDateShort",
    "defaultMessage": "{date} at {time, time, short}"
  },
  eventTimeWeekdayLong: {
    "id": "boxui.readableTime.eventTimeWeekdayLong",
    "defaultMessage": "{weekday}, {time, date, medium}"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/common/selectors/version.js":
/*!******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/common/selectors/version.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./node_modules/box-ui-elements/es/constants.js");


var getVersionAction = function getVersionAction(_ref) {
  var restored_at = _ref.restored_at,
      trashed_at = _ref.trashed_at,
      version_promoted = _ref.version_promoted;
  var action = _constants__WEBPACK_IMPORTED_MODULE_0__["VERSION_UPLOAD_ACTION"];

  if (trashed_at) {
    action = _constants__WEBPACK_IMPORTED_MODULE_0__["VERSION_DELETE_ACTION"];
  }

  if (restored_at) {
    action = _constants__WEBPACK_IMPORTED_MODULE_0__["VERSION_RESTORE_ACTION"];
  }

  if (version_promoted) {
    action = _constants__WEBPACK_IMPORTED_MODULE_0__["VERSION_PROMOTE_ACTION"];
  }

  return action;
};

var getVersionUser = function getVersionUser(_ref2) {
  var modified_by = _ref2.modified_by,
      restored_by = _ref2.restored_by,
      trashed_by = _ref2.trashed_by;
  return restored_by || trashed_by || modified_by || _constants__WEBPACK_IMPORTED_MODULE_0__["PLACEHOLDER_USER"];
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getVersionAction: getVersionAction,
  getVersionUser: getVersionUser
});
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/ActivitySidebar.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/ActivitySidebar.js ***!
  \*************************************************************************************/
/*! exports provided: activityFeedInlineError, ActivitySidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedInlineError", function() { return activityFeedInlineError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitySidebarComponent", function() { return ActivitySidebar; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _activity_feed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity-feed */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/index.js");
/* harmony import */ var _AddTaskButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddTaskButton */ "./node_modules/box-ui-elements/es/elements/content-sidebar/AddTaskButton.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./node_modules/box-ui-elements/es/api/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SidebarContent */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _common_logger_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/logger/constants */ "./node_modules/box-ui-elements/es/elements/common/logger/constants.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/error */ "./node_modules/box-ui-elements/es/utils/error.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/performance */ "./node_modules/box-ui-elements/es/utils/performance.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/api-context */ "./node_modules/box-ui-elements/es/elements/common/api-context/index.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/error-boundary */ "./node_modules/box-ui-elements/es/elements/common/error-boundary/index.js");
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/feature-checking */ "./node_modules/box-ui-elements/es/elements/common/feature-checking/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/logger */ "./node_modules/box-ui-elements/es/elements/common/logger/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _ActivitySidebar_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ActivitySidebar.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/ActivitySidebar.scss");
/* harmony import */ var _ActivitySidebar_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ActivitySidebar_scss__WEBPACK_IMPORTED_MODULE_17__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
 * @file Activity feed sidebar component
 * @author Box
 */



















var activityFeedInlineError = {
  inlineError: {
    title: _common_messages__WEBPACK_IMPORTED_MODULE_7__["default"].errorOccured,
    content: _common_messages__WEBPACK_IMPORTED_MODULE_7__["default"].activityFeedItemApiError
  }
};
var MARK_NAME_JS_READY = "".concat(_constants__WEBPACK_IMPORTED_MODULE_16__["ORIGIN_ACTIVITY_SIDEBAR"], "_").concat(_common_logger_constants__WEBPACK_IMPORTED_MODULE_9__["EVENT_JS_READY"]);
Object(_utils_performance__WEBPACK_IMPORTED_MODULE_11__["mark"])(MARK_NAME_JS_READY);

var ActivitySidebar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ActivitySidebar, _React$PureComponent);

  function ActivitySidebar(props) {
    var _this;

    _classCallCheck(this, ActivitySidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActivitySidebar).call(this, props)); // eslint-disable-next-line react/prop-types

    _defineProperty(_assertThisInitialized(_this), "feedSuccessCallback", function () {
      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "feedErrorCallback", function (e, code, contextInfo) {
      _this.errorCallback(e, code, contextInfo);

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "createTask", function (message, assignees, taskType, dueAt, completionRule, onSuccess, onError) {
      var currentUser = _this.state.currentUser;
      var _this$props = _this.props,
          file = _this$props.file,
          api = _this$props.api;

      if (!currentUser) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_10__["getBadUserError"])();
      }

      var errorCallback = function errorCallback(e, code, contextInfo) {
        if (onError) {
          onError(e, code, contextInfo);
        }

        _this.feedErrorCallback(e, code, contextInfo);
      };

      var successCallback = function successCallback() {
        if (onSuccess) {
          onSuccess();
        }

        _this.feedSuccessCallback();
      };

      api.getFeedAPI(false).createTaskNew(file, currentUser, message, assignees, taskType, dueAt, completionRule, successCallback, errorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "deleteTask", function (task) {
      var _this$props2 = _this.props,
          file = _this$props2.file,
          api = _this$props2.api,
          onTaskDelete = _this$props2.onTaskDelete;
      api.getFeedAPI(false).deleteTaskNew(file, task, function (taskId) {
        _this.feedSuccessCallback();

        onTaskDelete(taskId);
      }, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "updateTask", function (task, onSuccess, onError) {
      var _this$props3 = _this.props,
          file = _this$props3.file,
          api = _this$props3.api,
          onTaskUpdate = _this$props3.onTaskUpdate;

      var errorCallback = function errorCallback(e, code) {
        if (onError) {
          onError(e, code);
        }

        _this.feedErrorCallback(e, code);
      };

      var successCallback = function successCallback() {
        _this.feedSuccessCallback();

        if (onSuccess) {
          onSuccess();
        }

        onTaskUpdate();
      };

      api.getFeedAPI(false).updateTaskNew(file, task, successCallback, errorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "updateTaskAssignment", function (taskId, taskAssignmentId, status) {
      var _this$props4 = _this.props,
          file = _this$props4.file,
          api = _this$props4.api;
      api.getFeedAPI(false).updateTaskCollaborator(file, taskId, taskAssignmentId, status, _this.feedSuccessCallback, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "deleteComment", function (_ref) {
      var id = _ref.id,
          permissions = _ref.permissions;
      var _this$props5 = _this.props,
          file = _this$props5.file,
          api = _this$props5.api,
          onCommentDelete = _this$props5.onCommentDelete;
      api.getFeedAPI(false).deleteComment(file, id, permissions, function (comment) {
        _this.feedSuccessCallback();

        onCommentDelete(comment);
      }, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "updateComment", function (id, text, hasMention, permissions, onSuccess, onError) {
      var _this$props6 = _this.props,
          file = _this$props6.file,
          api = _this$props6.api,
          onCommentUpdate = _this$props6.onCommentUpdate;

      var errorCallback = function errorCallback(e, code) {
        if (onError) {
          onError(e, code);
        }

        _this.feedErrorCallback(e, code);
      };

      var successCallback = function successCallback() {
        _this.feedSuccessCallback();

        if (onSuccess) {
          onSuccess();
        }

        onCommentUpdate();
      };

      api.getFeedAPI(false).updateComment(file, id, text, hasMention, permissions, successCallback, errorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "createComment", function (text, hasMention) {
      var _this$props7 = _this.props,
          file = _this$props7.file,
          api = _this$props7.api,
          onCommentCreate = _this$props7.onCommentCreate;
      var currentUser = _this.state.currentUser;

      if (!currentUser) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_10__["getBadUserError"])();
      }

      api.getFeedAPI(false).createComment(file, currentUser, text, hasMention, function (comment) {
        onCommentCreate(comment);

        _this.feedSuccessCallback();
      }, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "deleteAppActivity", function (_ref2) {
      var id = _ref2.id;
      var _this$props8 = _this.props,
          file = _this$props8.file,
          api = _this$props8.api;
      api.getFeedAPI(false).deleteAppActivity(file, id, _this.feedSuccessCallback, _this.feedErrorCallback); // need to load the pending item

      _this.fetchFeedItems();
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFeedItemsSuccessCallback", function (feedItems) {
      _this.setState({
        feedItems: feedItems,
        activityFeedError: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFeedItemsErrorCallback", function (feedItems) {
      _this.setState({
        feedItems: feedItems,
        activityFeedError: activityFeedInlineError
      });
    });

    _defineProperty(_assertThisInitialized(_this), "errorCallback", function (error, code) {
      var contextInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      /* eslint-disable no-console */
      console.error(error);
      /* eslint-enable no-console */
      // eslint-disable-next-line react/prop-types

      _this.props.onError(error, code, contextInfo);
    });

    _defineProperty(_assertThisInitialized(_this), "fetchCurrentUserSuccessCallback", function (currentUser) {
      _this.setState({
        currentUser: currentUser,
        currentUserError: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getApproverContactsSuccessCallback", function (collaborators) {
      var entries = collaborators.entries;

      _this.setState({
        approverSelectorContacts: entries
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getMentionContactsSuccessCallback", function (collaborators) {
      var entries = collaborators.entries;

      _this.setState({
        mentionSelectorContacts: entries
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getApproverWithQuery", lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(_this.getCollaborators.bind(_assertThisInitialized(_this), _this.getApproverContactsSuccessCallback, _this.errorCallback), _constants__WEBPACK_IMPORTED_MODULE_16__["DEFAULT_COLLAB_DEBOUNCE"]));

    _defineProperty(_assertThisInitialized(_this), "getMentionWithQuery", lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(_this.getCollaborators.bind(_assertThisInitialized(_this), _this.getMentionContactsSuccessCallback, _this.errorCallback), _constants__WEBPACK_IMPORTED_MODULE_16__["DEFAULT_COLLAB_DEBOUNCE"]));

    _defineProperty(_assertThisInitialized(_this), "fetchCurrentUserErrorCallback", function (e, code) {
      _this.setState({
        currentUser: undefined,
        currentUserError: {
          maskError: {
            errorHeader: _common_messages__WEBPACK_IMPORTED_MODULE_7__["default"].currentUserErrorHeaderMessage,
            errorSubHeader: _common_messages__WEBPACK_IMPORTED_MODULE_7__["default"].defaultErrorMaskSubHeaderMessage
          }
        }
      });

      _this.errorCallback(e, code, {
        error: e
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getAvatarUrl",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(userId) {
        var _this$props9, file, api;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props9 = _this.props, file = _this$props9.file, api = _this$props9.api;
                return _context.abrupt("return", api.getUsersAPI(false).getAvatarUrlWithAccessToken(userId, file.id));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "onTaskModalClose", function () {
      _this.setState({
        approverSelectorContacts: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderAddTaskButton", function () {
      var isDisabled = _this.props.isDisabled;
      var approverSelectorContacts = _this.state.approverSelectorContacts;

      var _assertThisInitialize = _assertThisInitialized(_this),
          getApproverWithQuery = _assertThisInitialize.getApproverWithQuery,
          getAvatarUrl = _assertThisInitialize.getAvatarUrl,
          createTask = _assertThisInitialize.createTask,
          onTaskModalClose = _assertThisInitialize.onTaskModalClose;

      var taskFormProps = {
        approverSelectorContacts: approverSelectorContacts,
        completionRule: _constants__WEBPACK_IMPORTED_MODULE_16__["TASK_COMPLETION_RULE_ALL"],
        createTask: createTask,
        getApproverWithQuery: getApproverWithQuery,
        getAvatarUrl: getAvatarUrl,
        id: '',
        message: '',
        approvers: []
      };
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AddTaskButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        isDisabled: isDisabled,
        onTaskModalClose: onTaskModalClose,
        taskFormProps: taskFormProps
      });
    });

    var logger = _this.props.logger;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
    _this.state = {};
    return _this;
  }

  _createClass(ActivitySidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var currentUser = this.props.currentUser;
      this.fetchFeedItems(true);
      this.fetchCurrentUser(currentUser);
    }
    /**
     * Fetches a Users info
     *
     * @private
     * @param {User} [user] - Box User. If missing, gets user that the current token was generated for.
     * @return {void}
     */

  }, {
    key: "fetchCurrentUser",
    value: function fetchCurrentUser(user) {
      var shouldDestroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props10 = this.props,
          api = _this$props10.api,
          file = _this$props10.file;

      if (!file) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_10__["getBadItemError"])();
      }

      if (typeof user === 'undefined') {
        api.getUsersAPI(shouldDestroy).getUser(file.id, this.fetchCurrentUserSuccessCallback, this.fetchCurrentUserErrorCallback);
      } else {
        this.setState({
          currentUser: user,
          currentUserError: undefined
        });
      }
    }
    /**
     * Success callback for fetching feed items
     */

  }, {
    key: "fetchFeedItems",

    /**
     * Fetches the feed items for the sidebar
     *
     * @param {boolean} shouldDestroy true if the api factory should be destroyed
     */
    value: function fetchFeedItems() {
      var shouldRefreshCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var shouldDestroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props11 = this.props,
          file = _this$props11.file,
          api = _this$props11.api,
          features = _this$props11.features;
      var shouldShowAppActivity = Object(_common_feature_checking__WEBPACK_IMPORTED_MODULE_14__["isFeatureEnabled"])(features, 'activityFeed.appActivity.enabled');
      api.getFeedAPI(shouldDestroy).feedItems(file, shouldRefreshCache, this.fetchFeedItemsSuccessCallback, this.fetchFeedItemsErrorCallback, this.errorCallback, {
        shouldShowAppActivity: shouldShowAppActivity
      });
    }
    /**
     * Handles a successful feed API fetch
     *
     * @private
     * @param {Array} feedItems - the feed items
     * @return {void}
     */

  }, {
    key: "getCollaborators",

    /**
     * Fetches file collaborators
     *
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     * @param {string} searchStr - the search string
     * @return {void}
     */
    value: function getCollaborators(successCallback, errorCallback, searchStr) {
      // Do not fetch without filter
      var _this$props12 = this.props,
          file = _this$props12.file,
          api = _this$props12.api;

      if (!searchStr || searchStr.trim() === '') {
        return;
      }

      api.getFileCollaboratorsAPI(true).getFileCollaborators(file.id, successCallback, errorCallback, {
        filter_term: searchStr
      });
    }
    /**
     * Handles a failed file user info fetch
     *
     * @private
     * @param {ElementsXhrError} e - API error
     * @return {void}
     */

  }, {
    key: "refresh",
    value: function refresh() {
      this.fetchFeedItems(true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props13 = this.props,
          elementId = _this$props13.elementId,
          file = _this$props13.file,
          _this$props13$isDisab = _this$props13.isDisabled,
          isDisabled = _this$props13$isDisab === void 0 ? false : _this$props13$isDisab,
          onVersionHistoryClick = _this$props13.onVersionHistoryClick,
          getUserProfileUrl = _this$props13.getUserProfileUrl,
          activeFeedEntryId = _this$props13.activeFeedEntryId,
          activeFeedEntryType = _this$props13.activeFeedEntryType;
      var _this$state = this.state,
          currentUser = _this$state.currentUser,
          approverSelectorContacts = _this$state.approverSelectorContacts,
          mentionSelectorContacts = _this$state.mentionSelectorContacts,
          feedItems = _this$state.feedItems,
          activityFeedError = _this$state.activityFeedError,
          currentUserError = _this$state.currentUserError;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_SidebarContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
        actions: this.renderAddTaskButton(),
        className: "bcs-activity",
        elementId: elementId,
        sidebarView: _constants__WEBPACK_IMPORTED_MODULE_16__["SIDEBAR_VIEW_ACTIVITY"],
        title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_7__["default"].sidebarActivityTitle)
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_activity_feed__WEBPACK_IMPORTED_MODULE_4__["default"], {
        file: file,
        activityFeedError: activityFeedError,
        approverSelectorContacts: approverSelectorContacts,
        mentionSelectorContacts: mentionSelectorContacts,
        currentUser: currentUser,
        isDisabled: isDisabled,
        onAppActivityDelete: this.deleteAppActivity,
        onCommentCreate: this.createComment,
        onCommentDelete: this.deleteComment,
        onCommentUpdate: this.updateComment,
        onTaskCreate: this.createTask,
        onTaskDelete: this.deleteTask,
        onTaskUpdate: this.updateTask,
        onTaskModalClose: this.onTaskModalClose,
        onTaskAssignmentUpdate: this.updateTaskAssignment,
        getApproverWithQuery: this.getApproverWithQuery,
        getMentionWithQuery: this.getMentionWithQuery,
        onVersionHistoryClick: onVersionHistoryClick,
        getAvatarUrl: this.getAvatarUrl,
        getUserProfileUrl: getUserProfileUrl,
        feedItems: feedItems,
        currentUserError: currentUserError,
        activeFeedEntryId: activeFeedEntryId,
        activeFeedEntryType: activeFeedEntryType
      }));
    }
  }]);

  return ActivitySidebar;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(ActivitySidebar, "defaultProps", {
  isDisabled: false,
  onCommentCreate: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onCommentDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onCommentUpdate: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onTaskAssignmentUpdate: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onTaskCreate: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onTaskDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onTaskUpdate: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_2___default()([Object(_common_logger__WEBPACK_IMPORTED_MODULE_15__["withLogger"])(_constants__WEBPACK_IMPORTED_MODULE_16__["ORIGIN_ACTIVITY_SIDEBAR"]), Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_13__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_16__["ORIGIN_ACTIVITY_SIDEBAR"]), _common_api_context__WEBPACK_IMPORTED_MODULE_12__["withAPIContext"], _common_feature_checking__WEBPACK_IMPORTED_MODULE_14__["withFeatureConsumer"]])(ActivitySidebar));
//# sourceMappingURL=ActivitySidebar.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/ActivitySidebar.scss":
/*!***************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/ActivitySidebar.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./ActivitySidebar.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/ActivitySidebar.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/AddTaskButton.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/AddTaskButton.js ***!
  \***********************************************************************************/
/*! exports provided: AddTaskButtonComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskButtonComponent", function() { return AddTaskButton; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _AddTaskMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTaskMenu */ "./node_modules/box-ui-elements/es/elements/content-sidebar/AddTaskMenu.js");
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskModal */ "./node_modules/box-ui-elements/es/elements/content-sidebar/TaskModal.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./node_modules/box-ui-elements/es/constants.js");
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







var AddTaskButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddTaskButton, _React$Component);

  function AddTaskButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddTaskButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddTaskButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      error: null,
      isTaskFormOpen: false,
      taskType: _constants__WEBPACK_IMPORTED_MODULE_3__["TASK_TYPE_APPROVAL"]
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickMenuItem", function (taskType) {
      _this.props.history.replace({
        state: {
          open: true
        }
      });

      _this.setState({
        isTaskFormOpen: true,
        taskType: taskType
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleModalClose", function () {
      var onTaskModalClose = _this.props.onTaskModalClose;

      _this.setState({
        isTaskFormOpen: false,
        error: null
      });

      onTaskModalClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmitError", function (e) {
      return _this.setState({
        error: e
      });
    });

    return _this;
  }

  _createClass(AddTaskButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isDisabled = _this$props.isDisabled,
          taskFormProps = _this$props.taskFormProps;
      var _this$state = this.state,
          isTaskFormOpen = _this$state.isTaskFormOpen,
          taskType = _this$state.taskType,
          error = _this$state.error;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AddTaskMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
        isDisabled: isDisabled,
        onMenuItemClick: this.handleClickMenuItem
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_TaskModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        error: error,
        onSubmitError: this.handleSubmitError,
        onSubmitSuccess: this.handleModalClose,
        onModalClose: this.handleModalClose,
        isTaskFormOpen: isTaskFormOpen,
        taskFormProps: taskFormProps,
        taskType: taskType
      }));
    }
  }]);

  return AddTaskButton;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(AddTaskButton, "defaultProps", {
  isDisabled: false
});


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(AddTaskButton));
//# sourceMappingURL=AddTaskButton.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/AddTaskMenu.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/AddTaskMenu.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button */ "./node_modules/box-ui-elements/es/components/button/index.js");
/* harmony import */ var _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dropdown-menu */ "./node_modules/box-ui-elements/es/components/dropdown-menu/index.js");
/* harmony import */ var _components_dropdown_menu_MenuToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dropdown-menu/MenuToggle */ "./node_modules/box-ui-elements/es/components/dropdown-menu/MenuToggle.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/menu */ "./node_modules/box-ui-elements/es/components/menu/index.js");
/* harmony import */ var _icons_two_toned_IconTaskApproval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/two-toned/IconTaskApproval */ "./node_modules/box-ui-elements/es/icons/two-toned/IconTaskApproval.js");
/* harmony import */ var _icons_two_toned_IconTaskGeneral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/two-toned/IconTaskGeneral */ "./node_modules/box-ui-elements/es/icons/two-toned/IconTaskGeneral.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _AddTaskMenu_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddTaskMenu.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/AddTaskMenu.scss");
/* harmony import */ var _AddTaskMenu_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_AddTaskMenu_scss__WEBPACK_IMPORTED_MODULE_9__);












var AddTaskMenu = function AddTaskMenu(props) {
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    constrainToScrollParent: true,
    isRightAligned: true
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isDisabled: props.isDisabled,
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_dropdown_menu_MenuToggle__WEBPACK_IMPORTED_MODULE_3__["default"], null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_7__["default"].tasksAddTask))), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_menu__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    className: "bcs-AddTaskMenu"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_menu__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    className: "bcs-AddTaskMenu-menuItem",
    onClick: function onClick() {
      return props.onMenuItemClick(_constants__WEBPACK_IMPORTED_MODULE_8__["TASK_TYPE_GENERAL"]);
    }
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-AddTaskMenu-icon"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_two_toned_IconTaskGeneral__WEBPACK_IMPORTED_MODULE_6__["default"], {
    width: 30,
    height: 30
  })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-AddTaskMenu-title"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_7__["default"].taskAddTaskGeneral)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-AddTaskMenu-description"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_7__["default"].taskAddTaskGeneralDescription)))), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_menu__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    className: "bcs-AddTaskMenu-menuItem",
    onClick: function onClick() {
      return props.onMenuItemClick(_constants__WEBPACK_IMPORTED_MODULE_8__["TASK_TYPE_APPROVAL"]);
    }
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-AddTaskMenu-icon"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_two_toned_IconTaskApproval__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: 30,
    height: 30
  })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-AddTaskMenu-title"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_7__["default"].taskAddTaskApproval)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-AddTaskMenu-description"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_7__["default"].taskAddTaskApprovalDescription))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddTaskMenu);
//# sourceMappingURL=AddTaskMenu.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/AddTaskMenu.scss":
/*!***********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/AddTaskMenu.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./AddTaskMenu.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/AddTaskMenu.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/TaskModal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/TaskModal.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal/Modal */ "./node_modules/box-ui-elements/es/components/modal/Modal.js");
/* harmony import */ var _activity_feed_task_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity-feed/task-form */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./node_modules/box-ui-elements/es/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function getMessageForModalTitle(taskType, mode) {
  switch (taskType) {
    case _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_TYPE_GENERAL"]:
      return mode === _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_EDIT_MODE_CREATE"] ? _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksCreateGeneralTaskFormTitle : _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksEditGeneralTaskFormTitle;

    case _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_TYPE_APPROVAL"]:
    default:
      return mode === _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_EDIT_MODE_CREATE"] ? _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksCreateApprovalTaskFormTitle : _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksEditApprovalTaskFormTitle;
  }
}

var focusTargetSelector = '.task-modal textarea, .task-modal input';

var TaskModal = function TaskModal(props) {
  var _props$editMode = props.editMode,
      editMode = _props$editMode === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_EDIT_MODE_CREATE"] : _props$editMode,
      error = props.error,
      onSubmitError = props.onSubmitError,
      onSubmitSuccess = props.onSubmitSuccess,
      onModalClose = props.onModalClose,
      taskType = props.taskType,
      isTaskFormOpen = props.isTaskFormOpen,
      taskFormProps = props.taskFormProps; // Note: Modal throws an error if this fails to find an element!

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "be-modal task-modal",
    focusElementSelector: focusTargetSelector,
    isOpen: isTaskFormOpen,
    onRequestClose: onModalClose,
    title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), getMessageForModalTitle(taskType, editMode))
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "be"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_activity_feed_task_form__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    editMode: editMode,
    error: error,
    onCancel: onModalClose,
    onSubmitError: onSubmitError,
    onSubmitSuccess: onSubmitSuccess,
    taskType: taskType
  }, taskFormProps))));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskModal);
//# sourceMappingURL=TaskModal.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/Avatar.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/Avatar.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/avatar */ "./node_modules/box-ui-elements/es/components/avatar/index.js");
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

/**
 * 
 * @file avatar component
 * @author Box
 */



var Avatar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Avatar, _React$PureComponent);

  function Avatar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Avatar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      avatarUrl: null
    });

    _defineProperty(_assertThisInitialized(_this), "getAvatarUrlHandler", function (avatarUrl) {
      _this.setState({
        avatarUrl: avatarUrl
      });
    });

    return _this;
  }

  _createClass(Avatar, [{
    key: "getAvatarUrl",

    /**
     * Gets the avatar URL for the user from the getAvatarUrl prop
     *
     * @return {Promise<?string>} Promise which resolve with the avatar url string
     */
    value: function getAvatarUrl() {
      var _this$props = this.props,
          _this$props$user = _this$props.user,
          user = _this$props$user === void 0 ? {} : _this$props$user,
          getAvatarUrl = _this$props.getAvatarUrl;
      var _user$avatar_url = user.avatar_url,
          avatar_url = _user$avatar_url === void 0 ? null : _user$avatar_url,
          id = user.id;
      var avatarPromise = id && getAvatarUrl ? getAvatarUrl("".concat(id)) : Promise.resolve(avatar_url);
      return avatarPromise.then(this.getAvatarUrlHandler);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAvatarUrl();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          user = _this$props2.user,
          className = _this$props2.className;
      var avatarUrl = this.state.avatarUrl;
      var id = user.id,
          name = user.name;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        avatarUrl: avatarUrl,
        className: className,
        id: id,
        name: name
      });
    }
  }]);

  return Avatar;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* harmony default export */ __webpack_exports__["default"] = (Avatar);
//# sourceMappingURL=Avatar.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActiveState.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActiveState.js ***!
  \*************************************************************************************************************/
/*! exports provided: ActiveStateComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveStateComponent", function() { return ActiveState; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-activity */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/index.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comment */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/index.js");
/* harmony import */ var _task_new__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-new */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../version */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/index.js");
/* harmony import */ var _withErrorHandling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../withErrorHandling */ "./node_modules/box-ui-elements/es/elements/content-sidebar/withErrorHandling.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Active state component for Activity Feed
 */









var ActiveState = function ActiveState(_ref) {
  var activeFeedEntryId = _ref.activeFeedEntryId,
      activeFeedEntryType = _ref.activeFeedEntryType,
      activeFeedItemRef = _ref.activeFeedItemRef,
      approverSelectorContacts = _ref.approverSelectorContacts,
      currentUser = _ref.currentUser,
      items = _ref.items,
      mentionSelectorContacts = _ref.mentionSelectorContacts,
      getMentionWithQuery = _ref.getMentionWithQuery,
      onAppActivityDelete = _ref.onAppActivityDelete,
      onCommentDelete = _ref.onCommentDelete,
      onCommentEdit = _ref.onCommentEdit,
      onTaskDelete = _ref.onTaskDelete,
      onTaskEdit = _ref.onTaskEdit,
      onTaskAssignmentUpdate = _ref.onTaskAssignmentUpdate,
      onTaskModalClose = _ref.onTaskModalClose,
      onVersionInfo = _ref.onVersionInfo,
      translations = _ref.translations,
      getApproverWithQuery = _ref.getApproverWithQuery,
      getAvatarUrl = _ref.getAvatarUrl,
      getUserProfileUrl = _ref.getUserProfileUrl;
  var activeEntry = items.find(function (_ref2) {
    var id = _ref2.id,
        type = _ref2.type;
    return id === activeFeedEntryId && type === activeFeedEntryType;
  });
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("ul", {
    className: "bcs-activity-feed-active-state"
  }, items.map(function (item) {
    var isFocused = item === activeEntry;
    var refValue = isFocused ? activeFeedItemRef : undefined;

    switch (item.type) {
      case 'comment':
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("li", {
          key: item.type + item.id,
          className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-activity-feed-comment', {
            'bcs-is-focused': isFocused
          }),
          ref: refValue
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_comment__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, item, {
          currentUser: currentUser,
          getAvatarUrl: getAvatarUrl,
          getMentionWithQuery: getMentionWithQuery,
          getUserProfileUrl: getUserProfileUrl,
          mentionSelectorContacts: mentionSelectorContacts,
          onDelete: onCommentDelete,
          onEdit: onCommentEdit,
          permissions: {
            can_delete: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(item.permissions, 'can_delete', false),
            can_edit: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(item.permissions, 'can_edit', false)
          },
          translations: translations
        })));

      case 'task':
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("li", {
          key: item.type + item.id,
          className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-activity-feed-task-new', {
            'bcs-is-focused': isFocused
          }),
          ref: refValue
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_task_new__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, item, {
          approverSelectorContacts: approverSelectorContacts,
          currentUser: currentUser,
          getApproverWithQuery: getApproverWithQuery,
          getAvatarUrl: getAvatarUrl,
          getUserProfileUrl: getUserProfileUrl,
          onAssignmentUpdate: onTaskAssignmentUpdate,
          onDelete: onTaskDelete,
          onEdit: onTaskEdit,
          onModalClose: onTaskModalClose,
          translations: translations
        })));

      case 'file_version':
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("li", {
          key: item.type + item.id,
          className: "bcs-version-item"
        }, item.versions ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_version__WEBPACK_IMPORTED_MODULE_5__["CollapsedVersion"], _extends({}, item, {
          onInfo: onVersionInfo
        })) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_version__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, item, {
          onInfo: onVersionInfo
        })));

      case 'app_activity':
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("li", {
          key: item.type + item.id,
          className: "bcs-activity-feed-app-activity"
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_app_activity__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
          currentUser: currentUser,
          onDelete: onAppActivityDelete
        }, item)));

      default:
        return null;
    }
  }));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_withErrorHandling__WEBPACK_IMPORTED_MODULE_6__["default"])(ActiveState));
//# sourceMappingURL=ActiveState.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/dom */ "./node_modules/box-ui-elements/es/utils/dom.js");
/* harmony import */ var _ActiveState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActiveState */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActiveState.js");
/* harmony import */ var _comment_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comment-form */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/index.js");
/* harmony import */ var _EmptyState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmptyState */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/EmptyState.js");
/* harmony import */ var _activityFeedUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activityFeedUtils */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/activityFeedUtils.js");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/inline-error/InlineError */ "./node_modules/box-ui-elements/es/components/inline-error/InlineError.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/loading-indicator/LoadingIndicator */ "./node_modules/box-ui-elements/es/components/loading-indicator/LoadingIndicator.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/messages.js");
/* harmony import */ var _ActivityFeed_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ActivityFeed.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.scss");
/* harmony import */ var _ActivityFeed_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ActivityFeed_scss__WEBPACK_IMPORTED_MODULE_11__);
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

/**
 * 
 * @file Component for Activity feed
 */















var ActivityFeed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActivityFeed, _React$Component);

  function ActivityFeed() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ActivityFeed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActivityFeed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isInputOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "activeFeedItemRef", !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());

    _defineProperty(_assertThisInitialized(_this), "isEmpty", function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props,
          feedItems = _ref.feedItems;

      if (feedItems === undefined) {
        return false;
      }

      return feedItems.length === 0 || feedItems.length === 1 && feedItems[0].type === _activityFeedUtils__WEBPACK_IMPORTED_MODULE_7__["ItemTypes"].fileVersion;
    });

    _defineProperty(_assertThisInitialized(_this), "hasLoaded", function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props,
          currentUser = _ref2.currentUser,
          feedItems = _ref2.feedItems;

      return currentUser !== undefined && feedItems !== undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "resetFeedScroll", function () {
      if (_this.feedContainer) {
        _this.feedContainer.scrollTop = _this.feedContainer.scrollHeight;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var nativeEvent = event.nativeEvent;
      nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormFocusHandler", function () {
      _this.resetFeedScroll();

      _this.setState({
        isInputOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormCancelHandler", function () {
      return _this.setState({
        isInputOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormSubmitHandler", function () {
      return _this.setState({
        isInputOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCommentCreate", function (_ref3) {
      var text = _ref3.text,
          hasMention = _ref3.hasMention;
      var _this$props$onComment = _this.props.onCommentCreate,
          onCommentCreate = _this$props$onComment === void 0 ? lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a : _this$props$onComment;
      onCommentCreate(text, hasMention);

      _this.commentFormSubmitHandler();
    });

    _defineProperty(_assertThisInitialized(_this), "onTaskCreate", function (_ref4) {
      var text = _ref4.text,
          assignees = _ref4.assignees,
          dueAt = _ref4.dueAt;
      var _this$props$onTaskCre = _this.props.onTaskCreate,
          onTaskCreate = _this$props$onTaskCre === void 0 ? lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a : _this$props$onTaskCre;
      onTaskCreate(text, assignees, dueAt);

      _this.commentFormSubmitHandler();
    });

    _defineProperty(_assertThisInitialized(_this), "openVersionHistoryPopup", function (data) {
      var versionInfoHandler = _this.props.onVersionHistoryClick || lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a;
      versionInfoHandler(data);
    });

    return _this;
  }

  _createClass(ActivityFeed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resetFeedScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var prevFeedItems = prevProps.feedItems;
      var _this$props = this.props,
          currFeedItems = _this$props.feedItems,
          activeFeedEntryId = _this$props.activeFeedEntryId;
      var prevIsInputOpen = prevState.isInputOpen;
      var currIsInputOpen = this.state.isInputOpen;
      var hasLoaded = this.hasLoaded();
      var hasMoreItems = prevFeedItems && currFeedItems && prevFeedItems.length < currFeedItems.length;
      var didLoadFeedItems = prevFeedItems === undefined && currFeedItems !== undefined;
      var hasInputOpened = currIsInputOpen !== prevIsInputOpen;

      if ((hasLoaded || hasMoreItems || didLoadFeedItems || hasInputOpened) && activeFeedEntryId === undefined) {
        this.resetFeedScroll();
      } // do the scroll only once after first fetch of feed items


      if (didLoadFeedItems) {
        this.scrollToActiveFeedItemOrErrorMessage();
      }
    }
  }, {
    key: "scrollToActiveFeedItemOrErrorMessage",
    value: function scrollToActiveFeedItemOrErrorMessage() {
      var activeFeedItemRef = this.activeFeedItemRef.current;
      var activeFeedEntryId = this.props.activeFeedEntryId; // if there is no active item, do not scroll

      if (!activeFeedEntryId) {
        return;
      } // if there was supposed to be an active feed item but the feed item does not exist
      // scroll to the bottom to show the inline error message


      if (activeFeedItemRef === null) {
        this.resetFeedScroll();
        return;
      }

      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["scrollIntoView"])(activeFeedItemRef);
    }
    /**
     * Detects whether or not the empty state should be shown.
     * @param {object} currentUser - The user that is logged into the account
     * @param {object} feedItems - Items in the activity feed
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          translations = _this$props2.translations,
          approverSelectorContacts = _this$props2.approverSelectorContacts,
          mentionSelectorContacts = _this$props2.mentionSelectorContacts,
          currentUser = _this$props2.currentUser,
          isDisabled = _this$props2.isDisabled,
          getAvatarUrl = _this$props2.getAvatarUrl,
          getUserProfileUrl = _this$props2.getUserProfileUrl,
          file = _this$props2.file,
          onAppActivityDelete = _this$props2.onAppActivityDelete,
          onCommentCreate = _this$props2.onCommentCreate,
          getApproverWithQuery = _this$props2.getApproverWithQuery,
          getMentionWithQuery = _this$props2.getMentionWithQuery,
          activityFeedError = _this$props2.activityFeedError,
          onVersionHistoryClick = _this$props2.onVersionHistoryClick,
          onCommentDelete = _this$props2.onCommentDelete,
          onCommentUpdate = _this$props2.onCommentUpdate,
          onTaskDelete = _this$props2.onTaskDelete,
          onTaskUpdate = _this$props2.onTaskUpdate,
          onTaskAssignmentUpdate = _this$props2.onTaskAssignmentUpdate,
          onTaskModalClose = _this$props2.onTaskModalClose,
          feedItems = _this$props2.feedItems,
          activeFeedEntryId = _this$props2.activeFeedEntryId,
          activeFeedEntryType = _this$props2.activeFeedEntryType;
      var isInputOpen = this.state.isInputOpen;
      var hasCommentPermission = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'permissions.can_comment', false);
      var showCommentForm = !!(currentUser && hasCommentPermission && onCommentCreate && feedItems);
      var isEmpty = this.isEmpty(this.props);
      var isLoading = !this.hasLoaded();
      var activeEntry = Array.isArray(feedItems) && feedItems.find(function (_ref5) {
        var id = _ref5.id,
            type = _ref5.type;
        return id === activeFeedEntryId && type === activeFeedEntryType;
      });
      var errorMessageByEntryType = {
        comment: _messages__WEBPACK_IMPORTED_MODULE_10__["default"].commentMissingError,
        task: _messages__WEBPACK_IMPORTED_MODULE_10__["default"].taskMissingError
      };
      var inlineFeedItemErrorMessage = activeFeedEntryType ? errorMessageByEntryType[activeFeedEntryType] : undefined;
      var isInlineFeedItemErrorVisible = !isLoading && activeFeedEntryType && !activeEntry;
      return (// eslint-disable-next-line
        !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
          className: "bcs-activity-feed",
          onKeyDown: this.onKeyDown
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
          ref: function ref(_ref6) {
            _this2.feedContainer = _ref6;
          },
          className: "bcs-activity-feed-items-container"
        }, isLoading && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
          className: "bcs-activity-feed-loading-state"
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_9__["default"], null)), isEmpty && !isLoading && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_EmptyState__WEBPACK_IMPORTED_MODULE_6__["default"], {
          showCommentMessage: showCommentForm
        }), !isEmpty && !isLoading && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ActiveState__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, activityFeedError, {
          items: Object(_activityFeedUtils__WEBPACK_IMPORTED_MODULE_7__["collapseFeedState"])(feedItems),
          isDisabled: isDisabled,
          currentUser: currentUser,
          onTaskAssignmentUpdate: onTaskAssignmentUpdate,
          onAppActivityDelete: onAppActivityDelete,
          onCommentDelete: hasCommentPermission ? onCommentDelete : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
          onCommentEdit: hasCommentPermission ? onCommentUpdate : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a // We don't know task edit/delete specific permissions,
          // but you must at least be able to comment to do these operations.
          ,
          onTaskDelete: hasCommentPermission ? onTaskDelete : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
          onTaskEdit: hasCommentPermission ? onTaskUpdate : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
          onTaskModalClose: onTaskModalClose,
          onVersionInfo: onVersionHistoryClick ? this.openVersionHistoryPopup : null,
          translations: translations,
          getAvatarUrl: getAvatarUrl,
          getUserProfileUrl: getUserProfileUrl,
          mentionSelectorContacts: mentionSelectorContacts,
          getMentionWithQuery: getMentionWithQuery,
          approverSelectorContacts: approverSelectorContacts,
          getApproverWithQuery: getApproverWithQuery,
          activeFeedEntryId: activeFeedEntryId,
          activeFeedEntryType: activeFeedEntryType,
          activeFeedItemRef: this.activeFeedItemRef
        })), isInlineFeedItemErrorVisible && inlineFeedItemErrorMessage && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_10__["default"].feedInlineErrorTitle),
          className: "bcs-feedItemInlineError"
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), inlineFeedItemErrorMessage))), showCommentForm ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_comment_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onSubmit: this.resetFeedScroll,
          isDisabled: isDisabled,
          mentionSelectorContacts: mentionSelectorContacts,
          className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-activity-feed-comment-input', {
            'bcs-is-disabled': isDisabled
          }),
          createComment: hasCommentPermission ? this.onCommentCreate : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
          getMentionWithQuery: getMentionWithQuery,
          isOpen: isInputOpen,
          user: currentUser,
          onCancel: this.commentFormCancelHandler,
          onFocus: this.commentFormFocusHandler,
          getAvatarUrl: getAvatarUrl
        }) : null)
      );
    }
  }]);

  return ActivityFeed;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* harmony default export */ __webpack_exports__["default"] = (ActivityFeed);
//# sourceMappingURL=ActivityFeed.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./ActivityFeed.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/EmptyState.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/EmptyState.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/icons/index.js");
/**
 * 
 * @file Component for Activity feed empty state
 */





var EmptyState = function EmptyState(_ref) {
  var showCommentMessage = _ref.showCommentMessage;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-activity-feed-empty-state"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons__WEBPACK_IMPORTED_MODULE_2__["default"], null), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-empty-state-cta"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].noActivity), showCommentMessage ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("aside", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].noActivityCommentPrompt)) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyState);
//# sourceMappingURL=EmptyState.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/activityFeedUtils.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/activityFeedUtils.js ***!
  \*******************************************************************************************************************/
/*! exports provided: ItemTypes, collapseFeedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypes", function() { return ItemTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseFeedState", function() { return collapseFeedState; });
/* harmony import */ var _common_selectors_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/selectors/version */ "./node_modules/box-ui-elements/es/elements/common/selectors/version.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Activity feed utility methods
 */


var ItemTypes = {
  fileVersion: 'file_version'
};
function collapseFeedState(feedState) {
  if (!feedState) {
    return [];
  }

  return feedState.reduce(function (collapsedFeedState, feedItem) {
    var previousFeedItem = collapsedFeedState.pop();

    if (!previousFeedItem) {
      return collapsedFeedState.concat([feedItem]);
    }

    if (feedItem.type === ItemTypes.fileVersion && previousFeedItem.type === ItemTypes.fileVersion && _common_selectors_version__WEBPACK_IMPORTED_MODULE_0__["default"].getVersionAction(feedItem) === _constants__WEBPACK_IMPORTED_MODULE_1__["VERSION_UPLOAD_ACTION"] && _common_selectors_version__WEBPACK_IMPORTED_MODULE_0__["default"].getVersionAction(previousFeedItem) === _constants__WEBPACK_IMPORTED_MODULE_1__["VERSION_UPLOAD_ACTION"]) {
      var tmpModifiedBy = previousFeedItem.modified_by,
          _previousFeedItem$ver = previousFeedItem.versions,
          versions = _previousFeedItem$ver === void 0 ? [previousFeedItem] : _previousFeedItem$ver,
          _previousFeedItem$ver2 = previousFeedItem.version_start,
          version_start = _previousFeedItem$ver2 === void 0 ? parseInt(previousFeedItem.version_number, 10) : _previousFeedItem$ver2,
          _previousFeedItem$ver3 = previousFeedItem.version_end,
          version_end = _previousFeedItem$ver3 === void 0 ? parseInt(previousFeedItem.version_number, 10) : _previousFeedItem$ver3;
      var prevModifiedBy = tmpModifiedBy || _constants__WEBPACK_IMPORTED_MODULE_1__["PLACEHOLDER_USER"];
      var tmpCurModifiedBy = feedItem.modified_by,
          created_at = feedItem.created_at,
          trashed_at = feedItem.trashed_at,
          id = feedItem.id,
          version_number = feedItem.version_number;
      var parsedVersionNumber = parseInt(version_number, 10);

      var collaborators = previousFeedItem.collaborators || _defineProperty({}, prevModifiedBy.id, _objectSpread({}, prevModifiedBy));

      var modifiedBy = tmpCurModifiedBy || _constants__WEBPACK_IMPORTED_MODULE_1__["PLACEHOLDER_USER"]; // add collaborators

      collaborators[modifiedBy.id] = _objectSpread({}, modifiedBy);
      return collapsedFeedState.concat([{
        collaborators: collaborators,
        created_at: created_at,
        modified_by: modifiedBy,
        trashed_at: trashed_at,
        id: id,
        type: ItemTypes.fileVersion,
        version_number: version_number,
        versions: versions.concat([feedItem]),
        version_start: Math.min(version_start, parsedVersionNumber),
        version_end: Math.max(version_end, parsedVersionNumber)
      }]);
    }

    return collapsedFeedState.concat([previousFeedItem, feedItem]);
  }, []);
}
//# sourceMappingURL=activityFeedUtils.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityFeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityFeed */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityFeed__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/messages.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/messages.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  feedInlineErrorTitle: {
    "id": "be.activitySidebar.activityFeed.feedInlineErrorTitle",
    "defaultMessage": "Error"
  },
  taskMissingError: {
    "id": "be.activitySidebar.activityFeed.taskMissingError",
    "defaultMessage": "This task no longer exists"
  },
  commentMissingError: {
    "id": "be.activitySidebar.activityFeed.commentMissingError",
    "defaultMessage": "This comment no longer exists"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/AppActivity.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/AppActivity.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-tether'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_delete_confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/delete-confirmation */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js");
/* harmony import */ var _common_activity_timestamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/activity-timestamp */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js");
/* harmony import */ var _icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../icons/general/IconTrash */ "./node_modules/box-ui-elements/es/icons/general/IconTrash.js");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/media */ "./node_modules/box-ui-elements/es/components/media/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/messages.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/link */ "./node_modules/box-ui-elements/es/components/link/index.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/menu */ "./node_modules/box-ui-elements/es/components/menu/index.js");
/* harmony import */ var _AppActivity_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AppActivity.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/AppActivity.scss");
/* harmony import */ var _AppActivity_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_AppActivity_scss__WEBPACK_IMPORTED_MODULE_11__);
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

/**
 * 
 * @file AppActivity component
 */
















function mapActivityNodes(node) {
  var _node$dataset = node.dataset,
      dataset = _node$dataset === void 0 ? {} : _node$dataset,
      _node$href = node.href,
      href = _node$href === void 0 ? '#' : _node$href,
      tagName = node.tagName,
      textContent = node.textContent;

  switch (tagName) {
    case 'A':
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        href: href,
        "data-resin-target": dataset.resinTarget,
        "data-resin-action": dataset.resinAction,
        key: "app_actvity_link_".concat(href),
        rel: "roreferrer noopener",
        className: "bcs-AppActivity-link",
        target: "_blank"
      }, textContent);

    default:
      return textContent;
  }
}

var AppActivity =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AppActivity, _React$PureComponent);

  function AppActivity() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AppActivity);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AppActivity)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "parser", new DOMParser());

    _defineProperty(_assertThisInitialized(_this), "state", {
      isConfirmingDelete: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteCancel", function () {
      _this.setState({
        isConfirmingDelete: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteClick", function () {
      _this.setState({
        isConfirmingDelete: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteConfirm", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          onDelete = _this$props.onDelete,
          permissions = _this$props.permissions;
      onDelete({
        id: id,
        permissions: permissions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "parseActivity", function () {
      var renderedText = _this.props.rendered_text;

      var doc = _this.parser.parseFromString(renderedText, 'text/html');

      if (!doc) {
        return [];
      }

      var childNodes = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(doc, 'body.childNodes', []);
      return Array.from(childNodes);
    });

    return _this;
  }

  _createClass(AppActivity, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          templateId = _this$props2.activity_template.id,
          _this$props2$app = _this$props2.app,
          name = _this$props2$app.name,
          icon_url = _this$props2$app.icon_url,
          createdAt = _this$props2.created_at,
          createdBy = _this$props2.created_by,
          currentUser = _this$props2.currentUser,
          error = _this$props2.error,
          intl = _this$props2.intl,
          isPending = _this$props2.isPending,
          permissions = _this$props2.permissions;
      var canDelete = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(permissions, 'can_delete', false) || currentUser && currentUser.id === createdBy.id;
      var createdAtTimestamp = new Date(createdAt).getTime();
      var isMenuVisible = canDelete && !isPending;
      var isConfirmingDelete = this.state.isConfirmingDelete;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-AppActivity', {
          'bcs-is-pending': isPending || error
        }),
        "data-resin-target": "loaded",
        "data-resin-feature": "appActivityCard".concat(templateId)
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_6__["default"].Figure, null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("img", {
        className: "bcs-AppActivity-icon",
        alt: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].appActivityAltIcon, {
          appActivityName: name
        }),
        src: icon_url
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_6__["default"].Body, {
        className: "bcs-AppActivity-body"
      }, isMenuVisible && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-tether'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        attachment: "top right",
        className: "bcs-AppActivity-confirm",
        constraints: [{
          to: 'scrollParent',
          attachment: 'together'
        }],
        targetAttachment: "bottom right"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_6__["default"].Menu, {
        isDisabled: isConfirmingDelete
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_menu__WEBPACK_IMPORTED_MODULE_10__["MenuItem"], {
        onClick: this.handleDeleteClick
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: _styles_variables__WEBPACK_IMPORTED_MODULE_8__["bdlGray80"]
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_7__["default"].appActivityDeleteMenuItem))), isConfirmingDelete && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_delete_confirmation__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isOpen: isConfirmingDelete,
        message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].appActivityDeletePrompt,
        onDeleteCancel: this.handleDeleteCancel,
        onDeleteConfirm: this.handleDeleteConfirm
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("figcaption", {
        className: "bcs-AppActivity-headline"
      }, name), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_activity_timestamp__WEBPACK_IMPORTED_MODULE_4__["default"], {
        date: createdAtTimestamp
      })), this.parseActivity().map(mapActivityNodes)));
    }
  }]);

  return AppActivity;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(AppActivity, "defaultProps", {
  onDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
  permissions: {}
});

/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(AppActivity));
//# sourceMappingURL=AppActivity.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/AppActivity.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/AppActivity.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./AppActivity.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/AppActivity.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/index.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppActivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppActivity */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/AppActivity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AppActivity__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/messages.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/messages.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  appActivityDeleteMenuItem: {
    "id": "be.appActivity.deleteMenuItem",
    "defaultMessage": "Delete"
  },
  appActivityDeletePrompt: {
    "id": "be.appActivity.deletePrompt",
    "defaultMessage": "Are you sure you want to permanently delete this app activity?"
  },
  appActivityAltIcon: {
    "id": "be.appActivity.altIcon",
    "defaultMessage": "{appActivityName} Icon"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/CommentForm.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/CommentForm.js ***!
  \************************************************************************************************************/
/*! exports provided: CommentFormUnwrapped, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentFormUnwrapped", function() { return CommentForm; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Avatar */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _CommentFormControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentFormControls */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/CommentFormControls.js");
/* harmony import */ var _components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/form-elements/draft-js-mention-selector */ "./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/index.js");
/* harmony import */ var _components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/form-elements/form/Form */ "./node_modules/box-ui-elements/es/components/form-elements/form/Form.js");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/media */ "./node_modules/box-ui-elements/es/components/media/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/messages.js");
/* harmony import */ var _CommentForm_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentForm.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/CommentForm.scss");
/* harmony import */ var _CommentForm_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CommentForm_scss__WEBPACK_IMPORTED_MODULE_8__);
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

/**
 * 
 * @file Component for Approval comment form
 */












var CommentForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CommentForm, _React$Component);

  function CommentForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CommentForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CommentForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      commentEditorState: Object(_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_4__["createMentionSelectorState"])(_this.props.tagged_message)
    });

    _defineProperty(_assertThisInitialized(_this), "onFormValidSubmitHandler", function () {
      var _this$props = _this.props,
          _this$props$createCom = _this$props.createComment,
          createComment = _this$props$createCom === void 0 ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : _this$props$createCom,
          _this$props$updateCom = _this$props.updateComment,
          updateComment = _this$props$updateCom === void 0 ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : _this$props$updateCom,
          onSubmit = _this$props.onSubmit,
          entityId = _this$props.entityId;

      var _this$getFormattedCom = _this.getFormattedCommentText(),
          text = _this$getFormattedCom.text,
          hasMention = _this$getFormattedCom.hasMention;

      if (!text) {
        return;
      }

      if (entityId) {
        updateComment({
          id: entityId,
          text: text,
          hasMention: hasMention
        });
      } else {
        createComment({
          text: text,
          hasMention: hasMention
        });
      }

      if (onSubmit) {
        onSubmit();
      }

      _this.setState({
        commentEditorState: Object(_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_4__["createMentionSelectorState"])()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMentionSelectorChangeHandler", function (nextEditorState) {
      return _this.setState({
        commentEditorState: nextEditorState
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getFormattedCommentText", function () {
      var commentEditorState = _this.state.commentEditorState;
      var contentState = commentEditorState.getCurrentContent();
      var blockMap = contentState.getBlockMap();
      var resultStringArr = []; // The API needs to explicitly know if a message contains a mention.

      var hasMention = false; // For all ContentBlocks in the ContentState:

      blockMap.forEach(function (block) {
        var text = block.getText();
        var blockMapStringArr = []; // Break down the ContentBlock into ranges

        block.findEntityRanges(function () {
          return true;
        }, function (start, end) {
          var entityKey = block.getEntityAt(start); // If the range is an Entity, format its text eg "@[1:Username]"
          // Otherwise append its text to the block result as-is

          if (entityKey) {
            var entity = contentState.getEntity(entityKey);
            var stringToAdd = "@[".concat(entity.getData().id, ":").concat(text.substring(start + 1, end), "]");
            blockMapStringArr.push(stringToAdd);
            hasMention = true;
          } else {
            blockMapStringArr.push(text.substring(start, end));
          }
        });
        resultStringArr.push(blockMapStringArr.join(''));
      }); // Concatenate the array of block strings with newlines
      // (Each block represents a paragraph)

      return {
        text: resultStringArr.join('\n'),
        hasMention: hasMention
      };
    });

    return _this;
  }

  _createClass(CommentForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevIsOpen = _ref.isOpen;
      var isOpen = this.props.isOpen;

      if (isOpen !== prevIsOpen && !isOpen) {
        this.setState({
          commentEditorState: Object(_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_4__["createMentionSelectorState"])()
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          getMentionWithQuery = _this$props2.getMentionWithQuery,
          formatMessage = _this$props2.intl.formatMessage,
          isDisabled = _this$props2.isDisabled,
          isOpen = _this$props2.isOpen,
          _this$props2$mentionS = _this$props2.mentionSelectorContacts,
          mentionSelectorContacts = _this$props2$mentionS === void 0 ? [] : _this$props2$mentionS,
          onCancel = _this$props2.onCancel,
          onFocus = _this$props2.onFocus,
          user = _this$props2.user,
          isEditing = _this$props2.isEditing,
          tagged_message = _this$props2.tagged_message,
          getAvatarUrl = _this$props2.getAvatarUrl;
      var commentEditorState = this.state.commentEditorState;
      var inputContainerClassNames = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-CommentForm', className, {
        'bcs-is-open': isOpen
      });
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: inputContainerClassNames
      }, !isEditing && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_6__["default"].Figure, {
        className: "bcs-CommentForm-avatar"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        getAvatarUrl: getAvatarUrl,
        user: user
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_6__["default"].Body, {
        className: "bcs-CommentForm-body"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onValidSubmit: this.onFormValidSubmitHandler
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "bcs-CommentForm-input",
        contacts: isOpen ? mentionSelectorContacts : [],
        editorState: commentEditorState,
        hideLabel: true,
        isDisabled: isDisabled,
        isRequired: isOpen,
        name: "commentText",
        label: "Comment",
        onChange: this.onMentionSelectorChangeHandler,
        onFocus: onFocus,
        onMention: getMentionWithQuery,
        placeholder: tagged_message ? undefined : formatMessage(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].commentWrite),
        validateOnBlur: false
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("aside", {
        className: "bcs-CommentForm-tip"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_7__["default"].atMentionTip)), isOpen && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_CommentFormControls__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onCancel: onCancel
      }))));
    }
  }]);

  return CommentForm;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // For testing only


_defineProperty(CommentForm, "defaultProps", {
  isOpen: false
});


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(CommentForm));
//# sourceMappingURL=CommentForm.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/CommentForm.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/CommentForm.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./CommentForm.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/CommentForm.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/CommentFormControls.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/CommentFormControls.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/button/Button */ "./node_modules/box-ui-elements/es/components/button/Button.js");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/primary-button/PrimaryButton */ "./node_modules/box-ui-elements/es/components/primary-button/PrimaryButton.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/**
 * 
 * @file Comment Input Controls components for CommentForm
 */







var CommentInputControls = function CommentInputControls(_ref) {
  var onCancel = _ref.onCancel;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-CommentFormControls"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["ACTIVITY_TARGETS"].APPROVAL_FORM_CANCEL,
    onClick: onCancel,
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_3__["default"].commentCancel)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["ACTIVITY_TARGETS"].APPROVAL_FORM_POST
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_3__["default"].commentPost)));
};

/* harmony default export */ __webpack_exports__["default"] = (CommentInputControls);
//# sourceMappingURL=CommentFormControls.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/index.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentForm */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/CommentForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CommentForm__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/messages.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/messages.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  commentCancel: {
    "id": "be.contentSidebar.activityFeed.commentForm.commentCancel",
    "defaultMessage": "Cancel"
  },
  commentPost: {
    "id": "be.contentSidebar.activityFeed.commentForm.commentPost",
    "defaultMessage": "Post"
  },
  commentWrite: {
    "id": "be.contentSidebar.activityFeed.commentForm.commentWrite",
    "defaultMessage": "Write a comment"
  },
  approvalAddAssignee: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalAddAssignee",
    "defaultMessage": "Add an assignee"
  },
  approvalAddTask: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalAddTask",
    "defaultMessage": "Add Task"
  },
  approvalAddTaskTooltip: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalAddTaskTooltip",
    "defaultMessage": "Assigning a task to someone will send them a notification with the message in the comment box and allow them to approve or deny."
  },
  approvalAssignees: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalAssignees",
    "defaultMessage": "Assignees"
  },
  approvalDueDate: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalDueDate",
    "defaultMessage": "Due Date"
  },
  approvalSelectDate: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalSelectDate",
    "defaultMessage": "Select a date"
  },
  atMentionTip: {
    "id": "be.contentSidebar.activityFeed.commentForm.atMentionTip",
    "defaultMessage": "@mention users to notify them."
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/Comment.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/Comment.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-tether'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Avatar */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/media */ "./node_modules/box-ui-elements/es/components/media/index.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/menu */ "./node_modules/box-ui-elements/es/components/menu/index.js");
/* harmony import */ var _icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../icons/general/IconTrash */ "./node_modules/box-ui-elements/es/icons/general/IconTrash.js");
/* harmony import */ var _icons_general_IconPencil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../icons/general/IconPencil */ "./node_modules/box-ui-elements/es/icons/general/IconPencil.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _common_delete_confirmation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/delete-confirmation */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js");
/* harmony import */ var _common_activity_timestamp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/activity-timestamp */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js");
/* harmony import */ var _common_user_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/user-link */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/index.js");
/* harmony import */ var _common_activity_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/activity-error */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/index.js");
/* harmony import */ var _common_activity_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/activity-message */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/index.js");
/* harmony import */ var _comment_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../comment-form */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/messages.js");
/* harmony import */ var _Comment_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Comment.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/Comment.scss");
/* harmony import */ var _Comment_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Comment_scss__WEBPACK_IMPORTED_MODULE_17__);
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























var Comment =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Comment, _React$Component);

  function Comment() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Comment);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Comment)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isConfirmingDelete: false,
      isEditing: false,
      isInputOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteConfirm", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          onDelete = _this$props.onDelete,
          permissions = _this$props.permissions;
      onDelete({
        id: id,
        permissions: permissions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteCancel", function () {
      _this.setState({
        isConfirmingDelete: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteClick", function () {
      _this.setState({
        isConfirmingDelete: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditClick", function () {
      _this.setState({
        isEditing: true,
        isInputOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormFocusHandler", function () {
      return _this.setState({
        isInputOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormCancelHandler", function () {
      return _this.setState({
        isInputOpen: false,
        isEditing: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "commentFormSubmitHandler", function () {
      return _this.setState({
        isInputOpen: false,
        isEditing: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleUpdate", function (_ref) {
      var id = _ref.id,
          text = _ref.text,
          hasMention = _ref.hasMention;
      var _this$props2 = _this.props,
          onEdit = _this$props2.onEdit,
          permissions = _this$props2.permissions;
      onEdit(id, text, hasMention, permissions);

      _this.commentFormSubmitHandler();
    });

    return _this;
  }

  _createClass(Comment, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          created_by = _this$props3.created_by,
          created_at = _this$props3.created_at,
          _this$props3$permissi = _this$props3.permissions,
          permissions = _this$props3$permissi === void 0 ? {} : _this$props3$permissi,
          id = _this$props3.id,
          isPending = _this$props3.isPending,
          error = _this$props3.error,
          _this$props3$tagged_m = _this$props3.tagged_message,
          tagged_message = _this$props3$tagged_m === void 0 ? '' : _this$props3$tagged_m,
          translatedTaggedMessage = _this$props3.translatedTaggedMessage,
          translations = _this$props3.translations,
          currentUser = _this$props3.currentUser,
          isDisabled = _this$props3.isDisabled,
          getAvatarUrl = _this$props3.getAvatarUrl,
          getUserProfileUrl = _this$props3.getUserProfileUrl,
          getMentionWithQuery = _this$props3.getMentionWithQuery,
          mentionSelectorContacts = _this$props3.mentionSelectorContacts,
          onEdit = _this$props3.onEdit;
      var _this$state = this.state,
          isConfirmingDelete = _this$state.isConfirmingDelete,
          isEditing = _this$state.isEditing,
          isInputOpen = _this$state.isInputOpen;
      var createdAtTimestamp = new Date(created_at).getTime();
      var createdByUser = created_by || _constants__WEBPACK_IMPORTED_MODULE_15__["PLACEHOLDER_USER"];
      var canEdit = onEdit !== lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a && permissions.can_edit;
      var canDelete = permissions.can_delete;
      var isMenuVisible = (canDelete || canEdit) && !isPending;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "bcs-Comment"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-Comment-media', {
          'bcs-is-pending': isPending || error
        })
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_3__["default"].Figure, null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        getAvatarUrl: getAvatarUrl,
        user: createdByUser
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_3__["default"].Body, null, isMenuVisible && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-tether'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        attachment: "top right",
        className: "bcs-Comment-deleteConfirmationModal",
        constraints: [{
          to: 'scrollParent',
          attachment: 'together'
        }],
        targetAttachment: "bottom right"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_3__["default"].Menu, {
        isDisabled: isConfirmingDelete,
        menuProps: {
          'data-resin-component': _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["ACTIVITY_TARGETS"].COMMENT_OPTIONS
        }
      }, canEdit && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_menu__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["ACTIVITY_TARGETS"].COMMENT_OPTIONS_EDIT,
        onClick: this.handleEditClick
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconPencil__WEBPACK_IMPORTED_MODULE_6__["default"], {
        color: _styles_variables__WEBPACK_IMPORTED_MODULE_14__["bdlGray80"]
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_16__["default"].commentEditMenuItem)), canDelete && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_menu__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["ACTIVITY_TARGETS"].COMMENT_OPTIONS_DELETE,
        onClick: this.handleDeleteClick
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: _styles_variables__WEBPACK_IMPORTED_MODULE_14__["bdlGray80"]
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_16__["default"].commentDeleteMenuItem))), isConfirmingDelete && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_delete_confirmation__WEBPACK_IMPORTED_MODULE_8__["default"], {
        "data-resin-component": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["ACTIVITY_TARGETS"].COMMENT_OPTIONS,
        isOpen: isConfirmingDelete,
        message: _messages__WEBPACK_IMPORTED_MODULE_16__["default"].commentDeletePrompt,
        onDeleteCancel: this.handleDeleteCancel,
        onDeleteConfirm: this.handleDeleteConfirm
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "bcs-Comment-headline"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_user_link__WEBPACK_IMPORTED_MODULE_10__["default"], {
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["ACTIVITY_TARGETS"].PROFILE,
        id: createdByUser.id,
        name: createdByUser.name,
        getUserProfileUrl: getUserProfileUrl
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_activity_timestamp__WEBPACK_IMPORTED_MODULE_9__["default"], {
        date: createdAtTimestamp
      })), isEditing ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_comment_form__WEBPACK_IMPORTED_MODULE_13__["default"], {
        isDisabled: isDisabled,
        className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-Comment-editor', {
          'bcs-is-disabled': isDisabled
        }),
        updateComment: this.handleUpdate,
        isOpen: isInputOpen,
        user: currentUser,
        onCancel: this.commentFormCancelHandler,
        onFocus: this.commentFormFocusHandler,
        isEditing: isEditing,
        entityId: id,
        tagged_message: tagged_message,
        getAvatarUrl: getAvatarUrl,
        mentionSelectorContacts: mentionSelectorContacts,
        getMentionWithQuery: getMentionWithQuery
      }) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_activity_message__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({
        id: id,
        tagged_message: tagged_message,
        translatedTaggedMessage: translatedTaggedMessage
      }, translations, {
        translationFailed: error ? true : null,
        getUserProfileUrl: getUserProfileUrl
      })))), error ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_activity_error__WEBPACK_IMPORTED_MODULE_11__["default"], error) : null);
    }
  }]);

  return Comment;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(Comment, "defaultProps", {
  onDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
  onEdit: lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a
});

/* harmony default export */ __webpack_exports__["default"] = (Comment);
//# sourceMappingURL=Comment.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/Comment.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/Comment.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./Comment.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/Comment.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/Comment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Comment__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/messages.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/messages.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  commentDeleteMenuItem: {
    "id": "be.contentSidebar.activityFeed.comment.commentDeleteMenuItem",
    "defaultMessage": "Delete"
  },
  commentDeletePrompt: {
    "id": "be.contentSidebar.activityFeed.comment.commentDeletePrompt",
    "defaultMessage": "Are you sure you want to permanently delete this comment?"
  },
  commentEditMenuItem: {
    "id": "be.contentSidebar.activityFeed.comment.commentEditMenuItem",
    "defaultMessage": "Modify"
  },
  commentPostedFullDateTime: {
    "id": "be.contentSidebar.activityFeed.comment.commentPostedFullDateTime",
    "defaultMessage": "{time, date, full} at {time, time, short}"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_inline_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/inline-error */ "./node_modules/box-ui-elements/es/components/inline-error/index.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _ActivityError_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActivityError.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.scss");
/* harmony import */ var _ActivityError_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ActivityError_scss__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var ActivityError = function ActivityError(_ref) {
  var action = _ref.action,
      message = _ref.message,
      title = _ref.title,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["action", "message", "title", "className"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_inline_error__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-ActivityError', className),
    title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, title, rest))
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), message)), action ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bcs-ActivityError-action lnk",
    onClick: action.onAction,
    type: "button"
  }, action.text) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ActivityError);
//# sourceMappingURL=ActivityError.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../css-loader!../../../../../../../postcss-loader/src??ref--10-2!../../../../../../../sass-loader/dist/cjs.js??ref--10-3!./ActivityError.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/index.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityError */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityError__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/loading-indicator */ "./node_modules/box-ui-elements/es/components/loading-indicator/index.js");
/* harmony import */ var _utils_formatTaggedMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatTaggedMessage */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/utils/formatTaggedMessage.js");
/* harmony import */ var _ShowOriginalButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShowOriginalButton */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/ShowOriginalButton.js");
/* harmony import */ var _TranslateButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TranslateButton */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/TranslateButton.js");
/* harmony import */ var _ActivityMessage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActivityMessage.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.scss");
/* harmony import */ var _ActivityMessage_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ActivityMessage_scss__WEBPACK_IMPORTED_MODULE_6__);
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









var ActivityMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActivityMessage, _React$Component);

  function ActivityMessage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ActivityMessage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActivityMessage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: false,
      isTranslation: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleTranslate", function (event) {
      var _this$props = _this.props,
          id = _this$props.id,
          tagged_message = _this$props.tagged_message,
          _this$props$onTransla = _this$props.onTranslate,
          onTranslate = _this$props$onTransla === void 0 ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : _this$props$onTransla,
          translatedTaggedMessage = _this$props.translatedTaggedMessage;

      if (!translatedTaggedMessage) {
        _this.setState({
          isLoading: true
        });

        onTranslate({
          id: id,
          tagged_message: tagged_message
        });
      }

      _this.setState({
        isTranslation: true
      });

      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowOriginal", function (event) {
      _this.setState({
        isTranslation: false
      });

      event.preventDefault();
    });

    return _this;
  }

  _createClass(ActivityMessage, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          translatedTaggedMessage = _this$props2.translatedTaggedMessage,
          translationFailed = _this$props2.translationFailed;
      var prevTaggedMessage = prevProps.translatedTaggedMessage,
          prevTranslationFailed = prevProps.translationFailed;

      if (prevTaggedMessage === translatedTaggedMessage || prevTranslationFailed === translationFailed) {
        return;
      }

      if (translatedTaggedMessage || translationFailed) {
        this.setState({
          isLoading: false
        });
      }
    }
  }, {
    key: "getButton",
    value: function getButton(isTranslation) {
      var button = null;

      if (isTranslation) {
        button = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ShowOriginalButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          handleShowOriginal: this.handleShowOriginal
        });
      } else {
        button = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_TranslateButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
          handleTranslate: this.handleTranslate
        });
      }

      return button;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          id = _this$props3.id,
          tagged_message = _this$props3.tagged_message,
          translatedTaggedMessage = _this$props3.translatedTaggedMessage,
          translationEnabled = _this$props3.translationEnabled,
          getUserProfileUrl = _this$props3.getUserProfileUrl;
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          isTranslation = _this$state.isTranslation;
      var commentToDisplay = translationEnabled && isTranslation && translatedTaggedMessage ? translatedTaggedMessage : tagged_message;
      return isLoading ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "bcs-ActivityMessageLoading"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_loading_indicator__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "small"
      })) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "bcs-ActivityMessage"
      }, Object(_utils_formatTaggedMessage__WEBPACK_IMPORTED_MODULE_3__["default"])(commentToDisplay, id, false, getUserProfileUrl), translationEnabled ? this.getButton(isTranslation) : null);
    }
  }]);

  return ActivityMessage;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(ActivityMessage, "defaultProps", {
  translationEnabled: false
});

/* harmony default export */ __webpack_exports__["default"] = (ActivityMessage);
//# sourceMappingURL=ActivityMessage.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../css-loader!../../../../../../../postcss-loader/src??ref--10-2!../../../../../../../sass-loader/dist/cjs.js??ref--10-3!./ActivityMessage.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/ShowOriginalButton.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/ShowOriginalButton.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/messages.js");
/**
 * 
 * @file Show Original button component used by Comment Text component
 */





var ShowOriginalButton = function ShowOriginalButton(_ref) {
  var handleShowOriginal = _ref.handleShowOriginal;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bcs-ActivityMessage-translate",
    onClick: handleShowOriginal
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].activityMessageShowOriginal));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowOriginalButton);
//# sourceMappingURL=ShowOriginalButton.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/TranslateButton.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/TranslateButton.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/messages.js");
/**
 * 
 * @file Translate button component used by Comment Text component
 */





var TranslateButton = function TranslateButton(_ref) {
  var handleTranslate = _ref.handleTranslate;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bcs-ActivityMessage-translate",
    onClick: handleTranslate
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].activityMessageTranslate));
};

/* harmony default export */ __webpack_exports__["default"] = (TranslateButton);
//# sourceMappingURL=TranslateButton.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/index.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityMessage */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityMessage__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/messages.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/messages.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  activityMessageShowOriginal: {
    "id": "be.contentSidebar.activityFeed.commmon.showOriginalMessage",
    "defaultMessage": "Show Original"
  },
  activityMessageTranslate: {
    "id": "be.contentSidebar.activityFeed.common.translateMessage",
    "defaultMessage": "Translate"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/index.js");
/* harmony import */ var _components_time_ReadableTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/time/ReadableTime */ "./node_modules/box-ui-elements/es/components/time/ReadableTime.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/messages.js");
/* harmony import */ var _ActivityTimestamp_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActivityTimestamp.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.scss");
/* harmony import */ var _ActivityTimestamp_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ActivityTimestamp_scss__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var ActivityTimestamp = function ActivityTimestamp(_ref) {
  var date = _ref.date;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _messages__WEBPACK_IMPORTED_MODULE_3__["default"].fullDateTime, {
      values: {
        time: date
      }
    }))
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("small", {
    className: "bcs-ActivityTimestamp"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_time_ReadableTime__WEBPACK_IMPORTED_MODULE_2__["default"], {
    relativeThreshold: 0,
    alwaysShowTime: true,
    timestamp: date
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ActivityTimestamp);
//# sourceMappingURL=ActivityTimestamp.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../css-loader!../../../../../../../postcss-loader/src??ref--10-2!../../../../../../../sass-loader/dist/cjs.js??ref--10-3!./ActivityTimestamp.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityTimestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityTimestamp */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityTimestamp__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/messages.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/messages.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  fullDateTime: {
    "id": "be.activityFeed.fullDateTime",
    "defaultMessage": "{time, date, full} at {time, time, short}"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/button */ "./node_modules/box-ui-elements/es/components/button/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/primary-button */ "./node_modules/box-ui-elements/es/components/primary-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _components_flyout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/flyout */ "./node_modules/box-ui-elements/es/components/flyout/index.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _DeleteConfirmation_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeleteConfirmation.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.scss");
/* harmony import */ var _DeleteConfirmation_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_DeleteConfirmation_scss__WEBPACK_IMPORTED_MODULE_7__);
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

/**
 * 
 * @file Comment component
 */










var DeleteConfirmation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DeleteConfirmation, _React$Component);

  function DeleteConfirmation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteConfirmation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteConfirmation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var nativeEvent = event.nativeEvent;
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          onDeleteCancel = _this$props.onDeleteCancel;
      nativeEvent.stopImmediatePropagation();

      switch (event.key) {
        case _constants__WEBPACK_IMPORTED_MODULE_4__["KEYS"].escape:
          event.stopPropagation();
          event.preventDefault();

          if (isOpen) {
            onDeleteCancel();
          }

          break;

        default:
          break;
      }
    });

    return _this;
  }

  _createClass(DeleteConfirmation, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          message = _this$props2.message,
          onDeleteCancel = _this$props2.onDeleteCancel,
          onDeleteConfirm = _this$props2.onDeleteConfirm,
          rest = _objectWithoutProperties(_this$props2, ["message", "onDeleteCancel", "onDeleteConfirm"]);

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_flyout__WEBPACK_IMPORTED_MODULE_5__["Overlay"], _extends({
        className: "be-modal bcs-DeleteConfirmation",
        onKeyDown: this.onKeyDown,
        role: "dialog",
        shouldDefaultFocus: true,
        shouldOutlineFocus: false
      }, rest), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "bcs-DeleteConfirmation-promptMessage"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), message)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "bcs-DeleteConfirmation-cancel",
        onClick: onDeleteCancel,
        type: "button",
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["ACTIVITY_TARGETS"].INLINE_DELETE_CANCEL
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].cancel)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_primary_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "bcs-DeleteConfirmation-delete",
        onClick: onDeleteConfirm,
        type: "button",
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["ACTIVITY_TARGETS"].INLINE_DELETE_CONFIRM
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].delete))));
    }
  }]);

  return DeleteConfirmation;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* harmony default export */ __webpack_exports__["default"] = (DeleteConfirmation);
//# sourceMappingURL=DeleteConfirmation.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../css-loader!../../../../../../../postcss-loader/src??ref--10-2!../../../../../../../sass-loader/dist/cjs.js??ref--10-3!./DeleteConfirmation.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteConfirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteConfirmation */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DeleteConfirmation__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/UserLink.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/UserLink.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/link */ "./node_modules/box-ui-elements/es/components/link/index.js");
/* harmony import */ var _UserLink_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserLink.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/UserLink.scss");
/* harmony import */ var _UserLink_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UserLink_scss__WEBPACK_IMPORTED_MODULE_2__);
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






var UserLink =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(UserLink, _React$PureComponent);

  function UserLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UserLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UserLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "getProfileUrlHandler", function (profileUrl) {
      _this.setState({
        profileUrl: profileUrl
      });
    });

    return _this;
  }

  _createClass(UserLink, [{
    key: "getUserProfileUrl",

    /**
     * Gets the profile URL for the user from the getUserProfileUrl prop
     *
     * @return {Promise} a promise which resolves with the profileUrl string
     */
    value: function getUserProfileUrl() {
      var _this$props = this.props,
          id = _this$props.id,
          getUserProfileUrl = _this$props.getUserProfileUrl;

      if (!getUserProfileUrl) {
        return Promise.resolve();
      }

      return getUserProfileUrl(id).then(this.getProfileUrlHandler);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUserProfileUrl();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          name = _this$props2.name,
          getUserProfileUrl = _this$props2.getUserProfileUrl,
          className = _this$props2.className,
          rest = _objectWithoutProperties(_this$props2, ["name", "getUserProfileUrl", "className"]);

      var profileUrl = this.state.profileUrl;
      return profileUrl ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_link__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({
        className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-UserLink', className)
      }, rest, {
        href: profileUrl
      }), name) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", rest, name);
    }
  }]);

  return UserLink;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* harmony default export */ __webpack_exports__["default"] = (UserLink);
//# sourceMappingURL=UserLink.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/UserLink.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/UserLink.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../css-loader!../../../../../../../postcss-loader/src??ref--10-2!../../../../../../../sass-loader/dist/cjs.js??ref--10-3!./UserLink.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/UserLink.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLink */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/UserLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _UserLink__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/icons/IconActivityFeedEmptyState.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/icons/IconActivityFeedEmptyState.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _icons_accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../icons/accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");
/**
 * 
 * @file IconActivityFeedEmptyState icon component
 */



var IconActivityFeedEmptyState = function IconActivityFeedEmptyState(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 90 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 90 : _ref$height;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bcs-activity-feed-empty-state-illustration ".concat(className),
    height: height,
    viewBox: "0 0 90 90",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M12.06 40.71v-.4a.31.31 0 0 0-.31-.31.31.31 0 0 0-.31.31v.4a.51.51 0 0 0-.23.23h-.4a.31.31 0 0 0-.31.31.31.31 0 0 0 .31.31h.4a.51.51 0 0 0 .23.23v.4a.31.31 0 0 0 .62 0v-.41a.57.57 0 0 0 .23-.23h.4a.31.31 0 0 0 .31-.31.31.31 0 0 0-.31-.31h-.4a.51.51 0 0 0-.23-.22zm74 25v-.4a.31.31 0 0 0-.31-.31.31.31 0 0 0-.31.31v.4a.51.51 0 0 0-.23.23h-.4a.31.31 0 0 0-.31.31.31.31 0 0 0 .31.31h.4a.61.61 0 0 0 .22.23v.4a.32.32 0 0 0 .32.31.31.31 0 0 0 .31-.3v-.41a.57.57 0 0 0 .23-.23h.4a.31.31 0 0 0 0-.62h-.4a.51.51 0 0 0-.23-.23zm-4-7v-.4a.31.31 0 0 0-.31-.31.31.31 0 0 0-.31.31v.4a.51.51 0 0 0-.23.23h-.4a.31.31 0 0 0-.31.31.31.31 0 0 0 .31.31h.4a.51.51 0 0 0 .23.23v.4a.31.31 0 0 0 .62 0v-.41a.63.63 0 0 0 .23-.23h.4a.31.31 0 0 0 0-.62h-.4a.51.51 0 0 0-.23-.23zM5.5 48.13v-.64A.5.5 0 0 0 5 47a.49.49 0 0 0-.5.49v.64a1.09 1.09 0 0 0-.37.37h-.64A.5.5 0 0 0 3 49a.49.49 0 0 0 .49.5h.64a1.09 1.09 0 0 0 .37.37v.64a.5.5 0 0 0 1 0v-.63a1.09 1.09 0 0 0 .37-.37h.64A.5.5 0 0 0 7 49a.49.49 0 0 0-.49-.5h-.64a1.09 1.09 0 0 0-.37-.37zm67 32v-.64A.5.5 0 0 0 72 79a.49.49 0 0 0-.5.49v.64a1.09 1.09 0 0 0-.37.37h-.64a.5.5 0 0 0-.49.5.49.49 0 0 0 .49.5h.64a1.09 1.09 0 0 0 .37.37v.64a.5.5 0 0 0 1 0v-.63a1 1 0 0 0 .37-.36h.64A.5.5 0 0 0 74 81a.49.49 0 0 0-.49-.5h-.64a1.09 1.09 0 0 0-.37-.37zm-63-56v-.64A.5.5 0 0 0 9 23a.49.49 0 0 0-.5.49v.64a1.09 1.09 0 0 0-.37.37h-.64A.5.5 0 0 0 7 25a.49.49 0 0 0 .49.5h.64a1.09 1.09 0 0 0 .37.37v.64a.5.5 0 0 0 1 0v-.63a1 1 0 0 0 .37-.36h.64A.5.5 0 0 0 11 25a.49.49 0 0 0-.49-.5h-.64a1.09 1.09 0 0 0-.37-.37zm16-20v-.64A.5.5 0 0 0 25 3a.49.49 0 0 0-.5.49v.64a1.09 1.09 0 0 0-.37.37h-.64A.5.5 0 0 0 23 5a.49.49 0 0 0 .49.5h.64a1.09 1.09 0 0 0 .37.37v.64a.5.5 0 0 0 1 0v-.65a1 1 0 0 0 .37-.36h.64A.5.5 0 0 0 27 5a.49.49 0 0 0-.49-.5h-.64a1.09 1.09 0 0 0-.37-.37zM44.46 27.21a3.12 3.12 0 1 1 3.1-3.11 3.11 3.11 0 0 1-3.1 3.11zm0-4.23a1.12 1.12 0 1 0 1.1 1.12 1.12 1.12 0 0 0-1.1-1.1zM54.28 27.2a3.11 3.11 0 1 1 3.1-3.11 3.11 3.11 0 0 1-3.1 3.11zm0-4.22a1.11 1.11 0 1 0 1.1 1.11 1.11 1.11 0 0 0-1.1-1.09zM64.09 27.2a3.11 3.11 0 1 1 3.11-3.11 3.1 3.1 0 0 1-3.11 3.11zm0-4.22a1.11 1.11 0 1 0 1.11 1.11A1.11 1.11 0 0 0 64.09 23z",
    fill: "#0061d5"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M60.75 39.24c8 0 14.57-6.92 14.57-15.46S68.8 8.33 60.75 8.33c-1.35 0 9.78 5.07 9.27 15.45-.69 14.11-14.18 15.46-9.27 15.46zM21.73 59v-.7s2.5 2.46 5.34 1.68c1.57-.42 4.23 2.16 6.83 1.91 2.13-.21 4.72-2.7 4.72-2.7v2.05a4 4 0 0 1-4 4h-8.89a4 4 0 0 1-4-4V59z",
    fill: "#1891d3",
    opacity: ".1"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M54.45 3.4c-13.89 0-24 8.69-24 20.66a21.19 21.19 0 0 0 .17 2.41h-4a8.15 8.15 0 0 0-8.13 8v14a1 1 0 0 0-.45.81v1.22h-1.53v-2.14a1 1 0 0 0-1-1 4.1 4.1 0 0 0-1 8.08v5.81a11.67 11.67 0 0 0 11.66 11.66h1.23v7.34h-4.34a1 1 0 0 0-1 1v4.44a1 1 0 0 0 1 1h14.22a1 1 0 0 0 1-1v-4.44a1 1 0 0 0-1-1H33v-7.34h1.23a11.67 11.67 0 0 0 11.61-11.66v-5.81a4.1 4.1 0 0 0-1-8.08 1 1 0 0 0-1 1v2.11h-1.56v-1.22a1 1 0 0 0-.44-.81v-6.72A24.69 24.69 0 0 0 55 43.44a4.56 4.56 0 0 1-.53 1.25 6.88 6.88 0 0 0-1 3.1 1.21 1.21 0 0 0 1 1.24h.17c2 0 7.65-4.38 9.14-6.55a18.42 18.42 0 0 0 14.64-18.42c0-11.97-10.08-20.66-23.97-20.66zM36.28 84.69H24.06v-2.44h12.22zm-6.88-4.44v-7.33H31v7.33zm-2.75-51.78h7a6.16 6.16 0 0 1 6 5h-6a1 1 0 1 0 0 2h6.11v3h-6.03a1 1 0 1 0 0 2h6.11v3h-6.11a1 1 0 1 0 0 2h6.11v2.78H20.51v-2.78h6.11a1 1 0 1 0 0-2h-6.11v-3h6.11a1 1 0 1 0 0-2h-6.11v-3h6.11a1 1 0 1 0 0-2h-6a6.16 6.16 0 0 1 6.03-5zm13.63 21.78v2.44H20.06v-2.44zm-19.77 4.44h19.33v5.64a6.15 6.15 0 0 1-6.15 6.14h-7a6.14 6.14 0 0 1-6.14-6.14zm-7.11-3.22a2.12 2.12 0 0 1 1.11-1.86v3.72a2.12 2.12 0 0 1-1.11-1.86zm33.55 0a2.12 2.12 0 0 1-1.11 1.86v-3.72A2.12 2.12 0 0 1 47 51.47zm-3.11 1v8.78a9.67 9.67 0 0 1-9.66 9.66h-8a9.67 9.67 0 0 1-9.66-9.66v-8.78h1.55v1.22a1 1 0 0 0 .45.81v5.83a8.15 8.15 0 0 0 8.14 8.14h7a8.16 8.16 0 0 0 8.15-8.14V54.5a1 1 0 0 0 .44-.81v-1.22zM63 40.6a1.05 1.05 0 0 0-.79.68c-.33.94-4.37 4.16-6.48 5.34.14-.34.31-.68.48-1 .57-1.09 1.34-2.59.11-3.95a1 1 0 0 0-.74-.32h-.15a22.65 22.65 0 0 1-13.59-1.85v-4.88-.12a8.15 8.15 0 0 0-8.14-8h-1a17.29 17.29 0 0 1-.19-2.41c0-11 9-18.66 22-18.66s22 7.67 22 18.66A16.24 16.24 0 0 1 63 40.6z",
    fill: "#0061d5"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconActivityFeedEmptyState);
//# sourceMappingURL=IconActivityFeedEmptyState.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/icons/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/icons/index.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconActivityFeedEmptyState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconActivityFeedEmptyState */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/icons/IconActivityFeedEmptyState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _IconActivityFeedEmptyState__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activity_feed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-feed */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _activity_feed__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/TaskError.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/TaskError.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/messages.js");
/* harmony import */ var _api_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/messages */ "./node_modules/box-ui-elements/es/api/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _components_inline_notice_InlineNotice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/inline-notice/InlineNotice */ "./node_modules/box-ui-elements/es/components/inline-notice/InlineNotice.js");
/**
 * 
 * @file Component for in-modal error messages for tasks
 */








var TaskError = function TaskError(_ref) {
  var editMode = _ref.editMode,
      error = _ref.error,
      taskType = _ref.taskType;
  var isEditMode = editMode === _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_EDIT_MODE_EDIT"];
  var isForbiddenErrorOnEdit = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(error, 'status') === 403 && isEditMode;
  var errorTitle = isForbiddenErrorOnEdit ? _messages__WEBPACK_IMPORTED_MODULE_2__["default"].taskEditWarningTitle : _messages__WEBPACK_IMPORTED_MODULE_2__["default"].taskCreateErrorTitle;
  var errorMessage = isEditMode ? _messages__WEBPACK_IMPORTED_MODULE_2__["default"].taskUpdateErrorMessage : _api_messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskCreateErrorMessage;

  if (!error) {
    return null;
  } // error message changes when a forbidden operation occurs while editing a task


  if (isForbiddenErrorOnEdit) {
    switch (taskType) {
      case 'GENERAL':
        errorMessage = _messages__WEBPACK_IMPORTED_MODULE_2__["default"].taskGeneralAssigneeRemovalWarningMessage;
        break;

      case 'APPROVAL':
        errorMessage = _messages__WEBPACK_IMPORTED_MODULE_2__["default"].taskApprovalAssigneeRemovalWarningMessage;
        break;

      default:
        return null;
    }
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_inline_notice_InlineNotice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "error",
    title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), errorTitle)
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), errorMessage));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskError);
//# sourceMappingURL=TaskError.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/TaskForm.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/TaskForm.js ***!
  \******************************************************************************************************/
/*! exports provided: TaskFormUnwrapped, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormUnwrapped", function() { return TaskForm; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/messages */ "./node_modules/box-ui-elements/es/common/messages.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/messages.js");
/* harmony import */ var _comment_form_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comment-form/messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/messages.js");
/* harmony import */ var _components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/form-elements/form/Form */ "./node_modules/box-ui-elements/es/components/form-elements/form/Form.js");
/* harmony import */ var _components_contact_datalist_item_ContactDatalistItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/contact-datalist-item/ContactDatalistItem */ "./node_modules/box-ui-elements/es/components/contact-datalist-item/ContactDatalistItem.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/text-area */ "./node_modules/box-ui-elements/es/components/text-area/index.js");
/* harmony import */ var _components_date_picker_DatePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/date-picker/DatePicker */ "./node_modules/box-ui-elements/es/components/date-picker/DatePicker.js");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/checkbox */ "./node_modules/box-ui-elements/es/components/checkbox/index.js");
/* harmony import */ var _components_pill_selector_dropdown_PillSelectorDropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/pill-selector-dropdown/PillSelectorDropdown */ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelectorDropdown.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/button/Button */ "./node_modules/box-ui-elements/es/components/button/Button.js");
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/feature-checking */ "./node_modules/box-ui-elements/es/elements/common/feature-checking/index.js");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/primary-button/PrimaryButton */ "./node_modules/box-ui-elements/es/components/primary-button/PrimaryButton.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _TaskError__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TaskError */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/TaskError.js");
/* harmony import */ var _TaskForm_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./TaskForm.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/TaskForm.scss");
/* harmony import */ var _TaskForm_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_TaskForm_scss__WEBPACK_IMPORTED_MODULE_18__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Component for Approval comment form
 */






















function convertAssigneesToSelectorItems(approvers) {
  return approvers.map(function (_ref) {
    var target = _ref.target;

    var newSelectorItem = _objectSpread({}, target, {
      item: {},
      value: target.id,
      text: target.name
    });

    return newSelectorItem;
  });
}

var TaskForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TaskForm, _React$Component);

  function TaskForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TaskForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TaskForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", _this.getInitialFormState());

    _defineProperty(_assertThisInitialized(_this), "validateForm", function (only) {
      _this.setState(function (state) {
        var intl = _this.props.intl;
        var approvers = state.approvers,
            message = state.message,
            approverTextInput = state.approverTextInput;
        var assigneeFieldMissingError = {
          code: 'required',
          message: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].requiredFieldError)
        };
        var assigneeFieldInvalidError = {
          code: 'invalid',
          message: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].invalidUserError)
        };
        var messageFieldError = {
          code: 'required',
          message: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].requiredFieldError)
        };
        var formValidityState = {
          taskAssignees: (approverTextInput.length ? assigneeFieldInvalidError : null) || (approvers.length ? null : assigneeFieldMissingError),
          taskName: message ? null : messageFieldError,
          taskDueDate: null
        };
        var isValid = Object.values(formValidityState).every(function (val) {
          return val == null;
        });
        return {
          isValid: isValid,
          formValidityState: only ? _objectSpread({}, state.formValidityState, _defineProperty({}, only, formValidityState[only])) : formValidityState
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getErrorByFieldname", function (fieldName) {
      var formValidityState = _this.state.formValidityState;
      return formValidityState[fieldName] ? formValidityState[fieldName].message : null;
    });

    _defineProperty(_assertThisInitialized(_this), "clearForm", function () {
      return _this.setState(_this.getInitialFormState());
    });

    _defineProperty(_assertThisInitialized(_this), "handleInvalidSubmit", function () {
      _this.validateForm();
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmitSuccess", function () {
      var onSubmitSuccess = _this.props.onSubmitSuccess;

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

      _this.clearForm();

      _this.setState({
        isLoading: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmitError", function (e) {
      var onSubmitError = _this.props.onSubmitError;
      onSubmitError(e);

      _this.setState({
        isLoading: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addResinInfo", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          taskType = _this$props.taskType,
          editMode = _this$props.editMode;
      var dueDate = _this.state.dueDate;

      var addedAssignees = _this.getAddedAssignees();

      var removedAssignees = _this.getRemovedAssignees();

      return {
        'data-resin-taskid': id,
        'data-resin-tasktype': taskType,
        'data-resin-isediting': editMode === _constants__WEBPACK_IMPORTED_MODULE_15__["TASK_EDIT_MODE_EDIT"],
        'data-resin-numassigneesadded': addedAssignees.length,
        'data-resin-numassigneesremoved': removedAssignees.length,
        'data-resin-assigneesadded': addedAssignees.map(function (assignee) {
          return assignee.target.id;
        }),
        'data-resin-assigneesremoved': removedAssignees.map(function (assignee) {
          return assignee.target.id;
        }),
        'data-resin-duedate': dueDate && dueDate.getTime()
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getAddedAssignees", function () {
      // Added assignees are the ones in state that weren't in the prop
      var approvers = _this.props.approvers;
      var currentApprovers = _this.state.approvers;
      var approverIds = approvers.map(function (approver) {
        return approver.id;
      });
      return currentApprovers.filter(function (currentApprover) {
        return approverIds.indexOf(currentApprover.id) === -1;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getRemovedAssignees", function () {
      // Assignees to remove are the ones in the prop that cannot be found in state
      var approvers = _this.props.approvers;
      var currentApprovers = _this.state.approvers;
      var currentApproverIds = currentApprovers.map(function (currentApprover) {
        return currentApprover.id;
      });
      return approvers.filter(function (approver) {
        return currentApproverIds.indexOf(approver.id) === -1;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleValidSubmit", function () {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          createTask = _this$props2.createTask,
          editTask = _this$props2.editTask,
          editMode = _this$props2.editMode,
          taskType = _this$props2.taskType;
      var _this$state = _this.state,
          message = _this$state.message,
          currentApprovers = _this$state.approvers,
          dueDate = _this$state.dueDate,
          completionRule = _this$state.completionRule,
          isValid = _this$state.isValid;
      var dueDateString = dueDate && dueDate.toISOString();
      if (!isValid) return;

      _this.setState({
        isLoading: true
      });

      if (editMode === _constants__WEBPACK_IMPORTED_MODULE_15__["TASK_EDIT_MODE_EDIT"] && editTask) {
        editTask({
          id: id,
          completion_rule: completionRule,
          description: message,
          due_at: dueDateString,
          addedAssignees: convertAssigneesToSelectorItems(_this.getAddedAssignees()),
          removedAssignees: _this.getRemovedAssignees()
        }, _this.handleSubmitSuccess, _this.handleSubmitError);
      } else {
        createTask(message, convertAssigneesToSelectorItems(currentApprovers), taskType, dueDateString, completionRule, _this.handleSubmitSuccess, _this.handleSubmitError);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDueDateChange", function (date) {
      var dateValue = null;

      if (date) {
        dateValue = new Date(date); // The date given to us is midnight of the date selected.
        // Modify date to be the end of day (minus 1 millisecond) for the given due date

        dateValue.setHours(23, 59, 59, 999);
      }

      _this.setState({
        dueDate: dateValue
      });

      _this.validateForm('taskDueDate');
    });

    _defineProperty(_assertThisInitialized(_this), "handleCompletionRuleChange", function (event) {
      _this.setState({
        completionRule: event.target.checked ? _constants__WEBPACK_IMPORTED_MODULE_15__["TASK_COMPLETION_RULE_ANY"] : _constants__WEBPACK_IMPORTED_MODULE_15__["TASK_COMPLETION_RULE_ALL"]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleApproverSelectorInput", function (value) {
      var _this$props$getApprov = _this.props.getApproverWithQuery,
          getApproverWithQuery = _this$props$getApprov === void 0 ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : _this$props$getApprov;

      _this.setState({
        approverTextInput: value
      });

      getApproverWithQuery(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleApproverSelectorSelect", function (pills) {
      _this.setState({
        approvers: _this.state.approvers.concat(pills.map(function (pill) {
          return {
            id: '',
            target: {
              id: pill.id,
              name: pill.text,
              type: 'user'
            },
            role: 'ASSIGNEE',
            type: 'task_collaborator',
            status: 'NOT_STARTED',
            permissions: {
              can_delete: false,
              can_update: false
            }
          };
        })),
        approverTextInput: ''
      });

      _this.validateForm('taskAssignees');
    });

    _defineProperty(_assertThisInitialized(_this), "handleApproverSelectorRemove", function (option, index) {
      var approvers = _toConsumableArray(_this.state.approvers);

      approvers.splice(index, 1);

      _this.setState({
        approvers: approvers
      });

      _this.validateForm('taskAssignees');
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeMessage", function (e) {
      e.persist();

      _this.setState({
        message: e.currentTarget.value
      });

      _this.validateForm('taskName');
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelClick", function () {
      _this.props.onCancel();
    });

    return _this;
  }

  _createClass(TaskForm, [{
    key: "getInitialFormState",
    value: function getInitialFormState() {
      var _this$props3 = this.props,
          dueDate = _this$props3.dueDate,
          id = _this$props3.id,
          message = _this$props3.message,
          approvers = _this$props3.approvers,
          completionRule = _this$props3.completionRule;
      return {
        id: id,
        completionRule: completionRule || _constants__WEBPACK_IMPORTED_MODULE_15__["TASK_COMPLETION_RULE_ALL"],
        approvers: approvers,
        approverTextInput: '',
        dueDate: dueDate ? new Date(dueDate) : null,
        formValidityState: {},
        message: message,
        isLoading: false,
        isValid: null
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _ref6;

      var _this$props4 = this.props,
          approverSelectorContacts = _this$props4.approverSelectorContacts,
          className = _this$props4.className,
          error = _this$props4.error,
          isDisabled = _this$props4.isDisabled,
          intl = _this$props4.intl,
          editMode = _this$props4.editMode,
          taskType = _this$props4.taskType;
      var _this$state2 = this.state,
          dueDate = _this$state2.dueDate,
          approvers = _this$state2.approvers,
          message = _this$state2.message,
          formValidityState = _this$state2.formValidityState,
          isLoading = _this$state2.isLoading,
          completionRule = _this$state2.completionRule;
      var inputContainerClassNames = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-task-input-container', 'bcs-task-input-is-open', className);
      var isCreateEditMode = editMode === _constants__WEBPACK_IMPORTED_MODULE_15__["TASK_EDIT_MODE_CREATE"];
      var renderApprovers = convertAssigneesToSelectorItems(approvers); // filter out selected approvers
      // map to datalist item format

      var approverOptions = approverSelectorContacts.filter(function (_ref2) {
        var id = _ref2.id;
        return !renderApprovers.find(function (_ref3) {
          var value = _ref3.value;
          return value === id;
        });
      }).map(function (_ref4) {
        var id = _ref4.id,
            item = _ref4.item;
        return _objectSpread({}, item, {
          text: item.name,
          value: id
        });
      });
      var pillSelectorOverlayClasses = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        scrollable: approverOptions.length > 4
      });
      var submitButtonMessage = isCreateEditMode ? _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksAddTaskFormSubmitLabel : _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksEditTaskFormSubmitLabel;
      var shouldShowCompletionRule = approvers.length > 0;
      var isCompletionRuleCheckboxDisabled = approvers.length <= 1;
      var isCompletionRuleCheckboxChecked = completionRule === _constants__WEBPACK_IMPORTED_MODULE_15__["TASK_COMPLETION_RULE_ANY"];
      var isForbiddenErrorOnEdit = isLoading || lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(error, 'status') === 403 && !isCreateEditMode;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: inputContainerClassNames,
        "data-resin-component": "taskform"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "bcs-task-input-form-container"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_TaskError__WEBPACK_IMPORTED_MODULE_17__["default"], {
        editMode: editMode,
        error: error,
        taskType: taskType
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
        formValidityState: formValidityState,
        onInvalidSubmit: this.handleInvalidSubmit,
        onValidSubmit: this.handleValidSubmit
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_pill_selector_dropdown_PillSelectorDropdown__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: pillSelectorOverlayClasses,
        error: this.getErrorByFieldname('taskAssignees'),
        disabled: isForbiddenErrorOnEdit,
        inputProps: {
          'data-testid': 'task-form-assignee-input'
        },
        isRequired: true,
        label: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksAddTaskFormSelectAssigneesLabel),
        name: "taskAssignees",
        onBlur: function onBlur() {
          return _this2.validateForm('taskAssignees');
        },
        onInput: this.handleApproverSelectorInput,
        onRemove: this.handleApproverSelectorRemove,
        onSelect: this.handleApproverSelectorSelect,
        placeholder: intl.formatMessage(_comment_form_messages__WEBPACK_IMPORTED_MODULE_5__["default"].approvalAddAssignee),
        selectedOptions: renderApprovers,
        selectorOptions: approverOptions,
        shouldSetActiveItemOnOpen: true,
        shouldClearUnmatchedInput: true,
        validateForError: function validateForError() {
          return _this2.validateForm('taskAssignees');
        }
      }, approverOptions.map(function (_ref5) {
        var id = _ref5.id,
            name = _ref5.name,
            email = _ref5.email;
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_contact_datalist_item_ContactDatalistItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: id,
          name: name,
          subtitle: email
        });
      })), shouldShowCompletionRule && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_feature_checking__WEBPACK_IMPORTED_MODULE_13__["FeatureFlag"], {
        feature: "activityFeed.tasks.anyTask"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_checkbox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isChecked: isCompletionRuleCheckboxChecked,
        isDisabled: isCompletionRuleCheckboxDisabled || isForbiddenErrorOnEdit,
        label: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_4__["default"].taskAnyCheckboxLabel),
        tooltip: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].taskAnyInfoTooltip),
        name: "completionRule",
        onChange: this.handleCompletionRuleChange
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_text_area__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "bcs-task-name-input",
        disabled: isDisabled || isForbiddenErrorOnEdit,
        error: this.getErrorByFieldname('taskName'),
        isRequired: true,
        label: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksAddTaskFormMessageLabel),
        name: "taskName",
        onBlur: function onBlur() {
          return _this2.validateForm('taskName');
        },
        onChange: this.handleChangeMessage,
        placeholder: intl.formatMessage(_comment_form_messages__WEBPACK_IMPORTED_MODULE_5__["default"].commentWrite),
        value: message
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_date_picker_DatePicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "bcs-task-add-due-date-input",
        error: this.getErrorByFieldname('taskDueDate'),
        inputProps: (_ref6 = {}, _defineProperty(_ref6, _common_interactionTargets__WEBPACK_IMPORTED_MODULE_16__["INTERACTION_TARGET"], _common_interactionTargets__WEBPACK_IMPORTED_MODULE_16__["ACTIVITY_TARGETS"].TASK_DATE_PICKER), _defineProperty(_ref6, 'data-testid', 'task-form-date-input'), _ref6),
        isDisabled: isForbiddenErrorOnEdit,
        isRequired: false,
        label: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksAddTaskFormDueDateLabel),
        minDate: new Date(),
        name: "taskDueDate",
        onChange: this.handleDueDateChange,
        placeholder: intl.formatMessage(_comment_form_messages__WEBPACK_IMPORTED_MODULE_5__["default"].approvalSelectDate),
        value: dueDate || undefined
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "bcs-task-input-controls"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button_Button__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({
        className: "bcs-task-input-cancel-btn",
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_16__["ACTIVITY_TARGETS"].APPROVAL_FORM_CANCEL,
        onClick: this.handleCancelClick,
        isDisabled: isLoading,
        type: "button"
      }, this.addResinInfo()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksAddTaskFormCancelLabel)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_14__["default"], _extends({
        className: "bcs-task-input-submit-btn",
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_16__["ACTIVITY_TARGETS"].APPROVAL_FORM_POST,
        isDisabled: isForbiddenErrorOnEdit,
        isLoading: isLoading
      }, this.addResinInfo()), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), submitButtonMessage))))));
    }
  }]);

  return TaskForm;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // For testing only


_defineProperty(TaskForm, "defaultProps", {
  approvers: [],
  approverSelectorContacts: [],
  editMode: _constants__WEBPACK_IMPORTED_MODULE_15__["TASK_EDIT_MODE_CREATE"],
  id: '',
  message: ''
});


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(TaskForm));
//# sourceMappingURL=TaskForm.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/TaskForm.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/TaskForm.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./TaskForm.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/TaskForm.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/index.js ***!
  \***************************************************************************************************/
/*! exports provided: TaskFormUnwrapped, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskForm */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/TaskForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskFormUnwrapped", function() { return _TaskForm__WEBPACK_IMPORTED_MODULE_0__["TaskFormUnwrapped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TaskForm__WEBPACK_IMPORTED_MODULE_0__["default"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/messages.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/messages.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  taskCreateErrorTitle: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskCreateErrorTitle",
    "defaultMessage": "Error"
  },
  taskEditWarningTitle: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskEditWarningTitle",
    "defaultMessage": "Task Updated with Errors"
  },
  taskUpdateErrorMessage: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskUpdateErrorMessage",
    "defaultMessage": "An error occurred while modifying this task. Please try again."
  },
  taskApprovalAssigneeRemovalWarningMessage: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskApprovalAssigneeRemovalWarningMessage",
    "defaultMessage": "Unable to remove assignee(s) because the task is now approved."
  },
  taskGeneralAssigneeRemovalWarningMessage: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskGeneralAssigneeRemovalWarningMessage",
    "defaultMessage": "Unable to remove assignee(s) because the task is now completed."
  },
  tasksAddTaskFormSelectAssigneesLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormSelectAssigneesLabel",
    "defaultMessage": "Select Assignees"
  },
  tasksAddTaskFormMessageLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormMessageLabel",
    "defaultMessage": "Message"
  },
  tasksAddTaskFormDueDateLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormDueDateLabel",
    "defaultMessage": "Due Date"
  },
  tasksAddTaskFormSubmitLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormSubmitLabel",
    "defaultMessage": "Create"
  },
  tasksEditTaskFormSubmitLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksEditTaskFormSubmitLabel",
    "defaultMessage": "Update"
  },
  tasksAddTaskFormCancelLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormCancelLabel",
    "defaultMessage": "Cancel"
  },
  taskAnyCheckboxLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskAnyCheckboxLabel",
    "defaultMessage": "Only one assignee is required to complete this task"
  },
  taskAnyInfoTooltip: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskAnyInfoTooltip",
    "defaultMessage": "By default, all assignees are required to take action before a task is complete. Selecting this option will require only one assignee to complete this task."
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_time_ReadableTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/time/ReadableTime */ "./node_modules/box-ui-elements/es/components/time/ReadableTime.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _AssigneeDetails_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AssigneeDetails.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.scss");
/* harmony import */ var _AssigneeDetails_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AssigneeDetails_scss__WEBPACK_IMPORTED_MODULE_5__);
var _statusMessages;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var statusMessages = (_statusMessages = {}, _defineProperty(_statusMessages, _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_NEW_APPROVED"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedStatusApproved), _defineProperty(_statusMessages, _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_NEW_REJECTED"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedStatusRejected), _defineProperty(_statusMessages, _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_NEW_COMPLETED"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedStatusCompleted), _defineProperty(_statusMessages, _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_NEW_NOT_STARTED"], null), _statusMessages);

var Datestamp = function Datestamp(_ref) {
  var date = _ref.date;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_time_ReadableTime__WEBPACK_IMPORTED_MODULE_1__["default"], {
    timestamp: new Date(date).getTime(),
    alwaysShowTime: true,
    relativeThreshold: 0
  });
};

var AvatarDetails = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (_ref2) {
  var user = _ref2.user,
      status = _ref2.status,
      completedAt = _ref2.completedAt,
      className = _ref2.className;
  var statusMessage = statusMessages[status] || null;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(className, 'bcs-AssigneeDetails')
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-AssigneeDetails-name"
  }, user.name ? user.name : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].priorCollaborator)), statusMessage && completedAt && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-AssigneeDetails-status"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, statusMessage, {
    values: {
      dateTime: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Datestamp, {
        date: completedAt
      })
    }
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (AvatarDetails);
//# sourceMappingURL=AssigneeDetails.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./AssigneeDetails.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeList.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeList.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _AvatarGroupAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AvatarGroupAvatar */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.js");
/* harmony import */ var _AssigneeDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AssigneeDetails */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.js");
/* harmony import */ var _AssigneeList_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AssigneeList.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeList.scss");
/* harmony import */ var _AssigneeList_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AssigneeList_scss__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var DEFAULT_ASSIGNEES_SHOWN = 3;
var TASKS_PAGE_SIZE = 20; // service does not return the page size to the client at the moment

function AssigneeList(props) {
  var _props$initialAssigne = props.initialAssigneeCount,
      initialAssigneeCount = _props$initialAssigne === void 0 ? DEFAULT_ASSIGNEES_SHOWN : _props$initialAssigne,
      _props$users = props.users,
      users = _props$users === void 0 ? {} : _props$users,
      getAvatarUrl = props.getAvatarUrl,
      isOpen = props.isOpen,
      onCollapse = props.onCollapse,
      onExpand = props.onExpand;
  var _users$entries = users.entries,
      entries = _users$entries === void 0 ? [] : _users$entries,
      next_marker = users.next_marker;
  var entryCount = entries.length;
  var numVisibleAssignees = isOpen ? entryCount : initialAssigneeCount;
  var visibleUsers = entries.slice(0, numVisibleAssignees).map(function (_ref) {
    var id = _ref.id,
        target = _ref.target,
        status = _ref.status,
        completedAt = _ref.completed_at;
    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("li", {
      key: id,
      className: "bcs-AssigneeList-listItem"
    }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AvatarGroupAvatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      status: status,
      className: "bcs-AssigneeList-listItemAvatar",
      user: target,
      getAvatarUrl: getAvatarUrl
    }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AssigneeDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: target,
      status: status,
      completedAt: completedAt
    }));
  });
  var hiddenAssigneeCount = Math.max(0, entryCount - initialAssigneeCount);
  var maxAdditionalAssignees = TASKS_PAGE_SIZE - initialAssigneeCount;
  var hasMoreAssigneesThanPageSize = hiddenAssigneeCount > maxAdditionalAssignees || next_marker;
  var additionalAssigneeMessage = hasMoreAssigneesThanPageSize ? _messages__WEBPACK_IMPORTED_MODULE_2__["default"].taskShowMoreAssigneesOverflow : _messages__WEBPACK_IMPORTED_MODULE_2__["default"].taskShowMoreAssignees;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-AssigneeList"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("ul", {
    className: "bcs-AssigneeList-list"
  }, visibleUsers), !isOpen && hiddenAssigneeCount > 0 && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-AssigneeList-toggleBtn"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-resin-target": "showmorebtn",
    onClick: onExpand,
    className: "lnk"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, additionalAssigneeMessage, {
    values: {
      additionalAssigneeCount: hasMoreAssigneesThanPageSize ? maxAdditionalAssignees : hiddenAssigneeCount
    }
  })))), isOpen && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-AssigneeList-toggleBtn"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-resin-target": "showlessbtn",
    onClick: onCollapse,
    className: "lnk"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].taskShowLessAssignees))));
}

/* harmony default export */ __webpack_exports__["default"] = (AssigneeList);
//# sourceMappingURL=AssigneeList.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeList.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeList.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./AssigneeList.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeList.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_general_IconVerified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../icons/general/IconVerified */ "./node_modules/box-ui-elements/es/icons/general/IconVerified.js");
/* harmony import */ var _icons_general_IconRejected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icons/general/IconRejected */ "./node_modules/box-ui-elements/es/icons/general/IconRejected.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Avatar */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _AvatarGroupAvatar_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AvatarGroupAvatar.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.scss");
/* harmony import */ var _AvatarGroupAvatar_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_AvatarGroupAvatar_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












var StatusIcon = function StatusIcon(_ref) {
  var status = _ref.status,
      rest = _objectWithoutProperties(_ref, ["status"]);

  switch (status) {
    case _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_NEW_APPROVED"]:
    case _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_NEW_COMPLETED"]:
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconVerified__WEBPACK_IMPORTED_MODULE_2__["default"], rest);

    case _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_NEW_REJECTED"]:
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconRejected__WEBPACK_IMPORTED_MODULE_3__["default"], rest);

    case _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_NEW_NOT_STARTED"]:
    default:
      return null;
  }
};

var AvatarGroupAvatar = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (_ref2) {
  var user = _ref2.user,
      status = _ref2.status,
      getAvatarUrl = _ref2.getAvatarUrl,
      className = _ref2.className,
      rest = _objectWithoutProperties(_ref2, ["user", "status", "getAvatarUrl", "className"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", _extends({
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-AvatarGroupAvatar', className)
  }, rest), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "bcs-AvatarGroupAvatar-avatar",
    user: user,
    getAvatarUrl: getAvatarUrl
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(StatusIcon, {
    status: status,
    className: "bcs-AvatarGroupAvatar-statusIcon ".concat(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(status)),
    height: 12,
    width: 12,
    title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_6__["default"].taskAssignmentCompleted)
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (AvatarGroupAvatar);
//# sourceMappingURL=AvatarGroupAvatar.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./AvatarGroupAvatar.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/Task.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/Task.js ***!
  \*************************************************************************************************/
/*! exports provided: TaskComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return Task; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-tether'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/feature-checking */ "./node_modules/box-ui-elements/es/elements/common/feature-checking/index.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/api-context */ "./node_modules/box-ui-elements/es/elements/common/api-context/index.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Avatar */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/media */ "./node_modules/box-ui-elements/es/components/media/index.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/menu */ "./node_modules/box-ui-elements/es/components/menu/index.js");
/* harmony import */ var _common_activity_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/activity-error */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/index.js");
/* harmony import */ var _common_activity_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/activity-message */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/index.js");
/* harmony import */ var _common_activity_timestamp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/activity-timestamp */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js");
/* harmony import */ var _common_delete_confirmation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/delete-confirmation */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js");
/* harmony import */ var _icons_two_toned_IconTaskApproval__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../icons/two-toned/IconTaskApproval */ "./node_modules/box-ui-elements/es/icons/two-toned/IconTaskApproval.js");
/* harmony import */ var _icons_two_toned_IconTaskGeneral__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../icons/two-toned/IconTaskGeneral */ "./node_modules/box-ui-elements/es/icons/two-toned/IconTaskGeneral.js");
/* harmony import */ var _icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../icons/general/IconTrash */ "./node_modules/box-ui-elements/es/icons/general/IconTrash.js");
/* harmony import */ var _icons_general_IconPencil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../icons/general/IconPencil */ "./node_modules/box-ui-elements/es/icons/general/IconPencil.js");
/* harmony import */ var _common_user_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/user-link */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/index.js");
/* harmony import */ var _api_APIFactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../api/APIFactory */ "./node_modules/box-ui-elements/es/api/APIFactory.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");
/* harmony import */ var _TaskActions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./TaskActions */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskActions.js");
/* harmony import */ var _TaskCompletionRuleIcon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./TaskCompletionRuleIcon */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.js");
/* harmony import */ var _TaskDueDate__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./TaskDueDate */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskDueDate.js");
/* harmony import */ var _TaskStatus__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./TaskStatus */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskStatus.js");
/* harmony import */ var _AssigneeList__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./AssigneeList */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeList.js");
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../TaskModal */ "./node_modules/box-ui-elements/es/elements/content-sidebar/TaskModal.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _Task_scss__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Task.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/Task.scss");
/* harmony import */ var _Task_scss__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_Task_scss__WEBPACK_IMPORTED_MODULE_30__);
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




































var getMessageForTask = function getMessageForTask(isCurrentUser, taskType) {
  if (isCurrentUser) {
    if (taskType === _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_TYPE_APPROVAL"]) {
      return _messages__WEBPACK_IMPORTED_MODULE_29__["default"].tasksFeedHeadlineApprovalCurrentUser;
    }

    return _messages__WEBPACK_IMPORTED_MODULE_29__["default"].tasksFeedHeadlineGeneralCurrentUser;
  }

  if (taskType === _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_TYPE_APPROVAL"]) {
    return _messages__WEBPACK_IMPORTED_MODULE_29__["default"].tasksFeedHeadlineApproval;
  }

  return _messages__WEBPACK_IMPORTED_MODULE_29__["default"].tasksFeedHeadlineGeneral;
};

var Task =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Task, _React$Component);

  function Task() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Task);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Task)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loadCollabError: undefined,
      assignedToFull: _this.props.assigned_to,
      modalError: undefined,
      isEditing: false,
      isLoading: false,
      isAssigneeListOpen: false,
      isConfirmingDelete: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleAssigneeListExpand", function () {
      _this.getAllTaskCollaborators(function () {
        _this.setState({
          isAssigneeListOpen: true
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleAssigneeListCollapse", function () {
      _this.setState({
        isAssigneeListOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditClick", function () {
      _this.getAllTaskCollaborators(function () {
        _this.setState({
          isEditing: true
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteClick", function () {
      _this.setState({
        isConfirmingDelete: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteConfirm", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          onDelete = _this$props.onDelete,
          permissions = _this$props.permissions;

      if (onDelete) {
        onDelete({
          id: id,
          permissions: permissions
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteCancel", function () {
      _this.setState({
        isConfirmingDelete: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditModalClose", function () {
      var onModalClose = _this.props.onModalClose;

      _this.setState({
        isEditing: false,
        modalError: undefined
      });

      if (onModalClose) {
        onModalClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditSubmitError", function (error) {
      _this.setState({
        modalError: error
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getAllTaskCollaborators", function (onSuccess) {
      var _this$props2 = _this.props,
          id = _this$props2.id,
          api = _this$props2.api,
          task_links = _this$props2.task_links,
          assigned_to = _this$props2.assigned_to;
      var errorOccured = _common_messages__WEBPACK_IMPORTED_MODULE_28__["default"].errorOccured;
      var taskCollaboratorLoadErrorMessage = _messages__WEBPACK_IMPORTED_MODULE_29__["default"].taskCollaboratorLoadErrorMessage; // skip fetch when there are no additional collaborators

      if (!assigned_to.next_marker) {
        _this.setState({
          assignedToFull: assigned_to
        });

        onSuccess();
        return;
      } // fileid is required for api calls, check for presence


      var fileId = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(task_links, 'entries[0].target.id');

      if (!fileId) {
        return;
      }

      _this.setState({
        isLoading: true
      });

      api.getTaskCollaboratorsAPI(false).getTaskCollaborators({
        task: {
          id: id
        },
        file: {
          id: fileId
        },
        errorCallback: function errorCallback() {
          _this.setState({
            isLoading: false,
            loadCollabError: {
              message: taskCollaboratorLoadErrorMessage,
              title: errorOccured
            }
          });
        },
        successCallback: function successCallback(assignedToFull) {
          _this.setState({
            assignedToFull: assignedToFull,
            isLoading: false
          });

          onSuccess();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTaskAction", function (taskId, assignmentId, taskStatus) {
      var onAssignmentUpdate = _this.props.onAssignmentUpdate;

      _this.setState({
        isAssigneeListOpen: false
      });

      onAssignmentUpdate(taskId, assignmentId, taskStatus);
    });

    return _this;
  }

  _createClass(Task, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          approverSelectorContacts = _this$props3.approverSelectorContacts,
          assigned_to = _this$props3.assigned_to,
          completion_rule = _this$props3.completion_rule,
          created_at = _this$props3.created_at,
          created_by = _this$props3.created_by,
          currentUser = _this$props3.currentUser,
          due_at = _this$props3.due_at,
          error = _this$props3.error,
          features = _this$props3.features,
          getApproverWithQuery = _this$props3.getApproverWithQuery,
          getAvatarUrl = _this$props3.getAvatarUrl,
          getUserProfileUrl = _this$props3.getUserProfileUrl,
          id = _this$props3.id,
          isPending = _this$props3.isPending,
          description = _this$props3.description,
          onEdit = _this$props3.onEdit,
          permissions = _this$props3.permissions,
          status = _this$props3.status,
          task_type = _this$props3.task_type,
          translatedTaggedMessage = _this$props3.translatedTaggedMessage,
          translations = _this$props3.translations;
      var _this$state = this.state,
          assignedToFull = _this$state.assignedToFull,
          modalError = _this$state.modalError,
          isEditing = _this$state.isEditing,
          isLoading = _this$state.isLoading,
          loadCollabError = _this$state.loadCollabError,
          isAssigneeListOpen = _this$state.isAssigneeListOpen,
          isConfirmingDelete = _this$state.isConfirmingDelete;
      var inlineError = loadCollabError || error;
      var currentUserAssignment = assigned_to && assigned_to.entries ? assigned_to.entries.find(function (_ref) {
        var target = _ref.target;
        return target.id === currentUser.id;
      }) : null;
      var createdByUser = created_by.target || _constants__WEBPACK_IMPORTED_MODULE_19__["PLACEHOLDER_USER"];
      var createdAtTimestamp = new Date(created_at).getTime();
      var shouldShowActions = currentUserAssignment && currentUserAssignment.permissions && currentUserAssignment.permissions.can_update && currentUserAssignment.status === _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_NEW_NOT_STARTED"] && (status === _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_NEW_NOT_STARTED"] || status === _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_NEW_IN_PROGRESS"]);
      var TaskTypeIcon = task_type === _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_TYPE_APPROVAL"] ? _icons_two_toned_IconTaskApproval__WEBPACK_IMPORTED_MODULE_13__["default"] : _icons_two_toned_IconTaskGeneral__WEBPACK_IMPORTED_MODULE_14__["default"];
      var isMenuVisible = (permissions.can_delete || permissions.can_update) && !isPending;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "bcs-Task"
      }, inlineError ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_activity_error__WEBPACK_IMPORTED_MODULE_9__["default"], inlineError) : null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-Task-media', {
          'bcs-is-pending': isPending || isLoading
        })
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_7__["default"].Figure, {
        className: "bcs-Task-avatar"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        getAvatarUrl: getAvatarUrl,
        user: createdByUser
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(TaskTypeIcon, {
        width: 20,
        height: 20,
        className: "bcs-Task-avatarBadge"
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_7__["default"].Body, null, isMenuVisible && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-tether'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        attachment: "top right",
        className: "bcs-Task-deleteConfirmationModal",
        constraints: [{
          to: 'scrollParent',
          attachment: 'together'
        }],
        targetAttachment: "bottom right"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_media__WEBPACK_IMPORTED_MODULE_7__["default"].Menu, {
        isDisabled: isConfirmingDelete,
        menuProps: {
          'data-resin-component': _common_interactionTargets__WEBPACK_IMPORTED_MODULE_20__["ACTIVITY_TARGETS"].TASK_OPTIONS
        }
      }, permissions.can_update && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_menu__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_20__["ACTIVITY_TARGETS"].TASK_OPTIONS_EDIT,
        onClick: this.handleEditClick
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconPencil__WEBPACK_IMPORTED_MODULE_16__["default"], {
        color: _styles_variables__WEBPACK_IMPORTED_MODULE_21__["bdlGray80"]
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_29__["default"].taskEditMenuItem)), permissions.can_delete && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_menu__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_20__["ACTIVITY_TARGETS"].TASK_OPTIONS_DELETE,
        onClick: this.handleDeleteClick
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_15__["default"], {
        color: _styles_variables__WEBPACK_IMPORTED_MODULE_21__["bdlGray80"]
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_29__["default"].taskDeleteMenuItem))), isConfirmingDelete && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_delete_confirmation__WEBPACK_IMPORTED_MODULE_12__["default"], {
        "data-resin-component": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_20__["ACTIVITY_TARGETS"].TASK_OPTIONS,
        isOpen: isConfirmingDelete,
        message: _messages__WEBPACK_IMPORTED_MODULE_29__["default"].taskDeletePrompt,
        onDeleteCancel: this.handleDeleteCancel,
        onDeleteConfirm: this.handleDeleteConfirm
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "bcs-Task-headline"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, getMessageForTask(!!currentUserAssignment, task_type), {
        values: {
          user: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_user_link__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, createdByUser, {
            "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_20__["ACTIVITY_TARGETS"].PROFILE,
            getUserProfileUrl: getUserProfileUrl
          }))
        }
      }))), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_activity_timestamp__WEBPACK_IMPORTED_MODULE_11__["default"], {
        date: createdAtTimestamp
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_activity_message__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
        id: id,
        tagged_message: description,
        translatedTaggedMessage: translatedTaggedMessage
      }, translations, {
        translationFailed: error ? true : null,
        getUserProfileUrl: getUserProfileUrl
      }))), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "bcs-Task-statusContainer"
      }, !!due_at && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_TaskDueDate__WEBPACK_IMPORTED_MODULE_24__["default"], {
        dueDate: due_at,
        status: status
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_TaskStatus__WEBPACK_IMPORTED_MODULE_25__["default"], {
        status: status
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_TaskCompletionRuleIcon__WEBPACK_IMPORTED_MODULE_23__["default"], {
        completionRule: completion_rule
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "bcs-Task-assigneeListContainer"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AssigneeList__WEBPACK_IMPORTED_MODULE_26__["default"], {
        isOpen: isAssigneeListOpen,
        onCollapse: this.handleAssigneeListCollapse,
        onExpand: this.handleAssigneeListExpand,
        getAvatarUrl: getAvatarUrl,
        initialAssigneeCount: 3,
        users: isAssigneeListOpen ? assignedToFull : assigned_to
      })), currentUserAssignment && shouldShowActions && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "bcs-Task-actionsContainer"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_TaskActions__WEBPACK_IMPORTED_MODULE_22__["default"], {
        taskType: task_type,
        onTaskApproval: isPending ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : function () {
          _this2.handleTaskAction(id, currentUserAssignment.id, _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_NEW_APPROVED"]);
        },
        onTaskReject: isPending ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : function () {
          return _this2.handleTaskAction(id, currentUserAssignment.id, _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_NEW_REJECTED"]);
        },
        onTaskComplete: isPending ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : function () {
          return _this2.handleTaskAction(id, currentUserAssignment.id, _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_NEW_COMPLETED"]);
        }
      })))), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_TaskModal__WEBPACK_IMPORTED_MODULE_27__["default"], {
        editMode: _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_EDIT_MODE_EDIT"],
        error: modalError,
        feedbackUrl: Object(_common_feature_checking__WEBPACK_IMPORTED_MODULE_4__["getFeatureConfig"])(features, 'activityFeed.tasks').feedbackUrl || '',
        onSubmitError: this.handleEditSubmitError,
        onSubmitSuccess: this.handleEditModalClose,
        onModalClose: this.handleEditModalClose,
        isTaskFormOpen: isEditing,
        taskFormProps: {
          id: id,
          approvers: assignedToFull.entries,
          approverSelectorContacts: approverSelectorContacts,
          completionRule: completion_rule,
          getApproverWithQuery: getApproverWithQuery,
          getAvatarUrl: getAvatarUrl,
          createTask: function createTask() {},
          editTask: onEdit,
          dueDate: due_at,
          message: description
        },
        taskType: task_type
      }));
    }
  }]);

  return Task;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(Task, "defaultProps", {
  completion_rule: _constants__WEBPACK_IMPORTED_MODULE_19__["TASK_COMPLETION_RULE_ALL"]
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_2___default()([_common_feature_checking__WEBPACK_IMPORTED_MODULE_4__["withFeatureConsumer"], _common_api_context__WEBPACK_IMPORTED_MODULE_5__["withAPIContext"]])(Task));
//# sourceMappingURL=Task.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/Task.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/Task.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./Task.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/Task.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskActions.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskActions.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/button */ "./node_modules/box-ui-elements/es/components/button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _TaskActions_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskActions.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskActions.scss");
/* harmony import */ var _TaskActions_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TaskActions_scss__WEBPACK_IMPORTED_MODULE_5__);








var TaskActions = function TaskActions(_ref) {
  var onTaskApproval = _ref.onTaskApproval,
      onTaskReject = _ref.onTaskReject,
      onTaskComplete = _ref.onTaskComplete,
      taskType = _ref.taskType;
  var action = null;

  if (taskType === _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_TYPE_APPROVAL"]) {
    action = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "bcs-TaskActions-button",
      onClick: onTaskApproval,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_1__["ACTIVITY_TARGETS"].TASK_APPROVE
    }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].tasksFeedApproveAction)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "bcs-TaskActions-button",
      onClick: onTaskReject,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_1__["ACTIVITY_TARGETS"].TASK_REJECT
    }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].tasksFeedRejectAction)));
  } else if (taskType === _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_TYPE_GENERAL"]) {
    action = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "bcs-TaskActions-button",
      onClick: onTaskComplete,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_1__["ACTIVITY_TARGETS"].TASK_COMPLETE
    }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].tasksFeedCompleteAction));
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-TaskActions"
  }, action);
};

/* harmony default export */ __webpack_exports__["default"] = (TaskActions);
//# sourceMappingURL=TaskActions.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskActions.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskActions.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./TaskActions.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskActions.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/index.js");
/* harmony import */ var _icons_general_IconAnyTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icons/general/IconAnyTask */ "./node_modules/box-ui-elements/es/icons/general/IconAnyTask.js");
/* harmony import */ var _TaskCompletionRuleIcon_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskCompletionRuleIcon.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.scss");
/* harmony import */ var _TaskCompletionRuleIcon_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TaskCompletionRuleIcon_scss__WEBPACK_IMPORTED_MODULE_5__);








var TaskCompletionRuleIcon = function TaskCompletionRuleIcon(_ref) {
  var completionRule = _ref.completionRule;
  return completionRule === _constants__WEBPACK_IMPORTED_MODULE_1__["TASK_COMPLETION_RULE_ANY"] && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "top-center",
    text: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].taskAnyAffordanceTooltip)
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconAnyTask__WEBPACK_IMPORTED_MODULE_4__["default"], {
    height: 11,
    width: 11,
    className: "bcs-TaskCompletionRuleIcon"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskCompletionRuleIcon);
//# sourceMappingURL=TaskCompletionRuleIcon.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./TaskCompletionRuleIcon.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskDueDate.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskDueDate.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _components_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/time */ "./node_modules/box-ui-elements/es/components/time/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _TaskDueDate_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskDueDate.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskDueDate.scss");
/* harmony import */ var _TaskDueDate_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TaskDueDate_scss__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var TaskDueDate = function TaskDueDate(_ref) {
  var dueDate = _ref.dueDate,
      status = _ref.status;
  var isOverdue = dueDate ? status === _constants__WEBPACK_IMPORTED_MODULE_3__["TASK_NEW_NOT_STARTED"] && new Date(dueDate) < Date.now() : false;
  var fullDueDate = new Date(dueDate);
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-TaskDueDate', {
      'bcs-is-taskOverdue': isOverdue
    })
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _messages__WEBPACK_IMPORTED_MODULE_1__["default"].taskDueDateLabel, {
    values: {
      date: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_time__WEBPACK_IMPORTED_MODULE_2__["ReadableTime"], {
        alwaysShowTime: true,
        timestamp: fullDueDate.getTime()
      })
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskDueDate);
//# sourceMappingURL=TaskDueDate.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskDueDate.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskDueDate.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./TaskDueDate.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskDueDate.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskStatus.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskStatus.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _TaskStatus_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TaskStatus.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskStatus.scss");
/* harmony import */ var _TaskStatus_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TaskStatus_scss__WEBPACK_IMPORTED_MODULE_4__);
var _statusMessageKeyMap;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var statusMessageKeyMap = (_statusMessageKeyMap = {}, _defineProperty(_statusMessageKeyMap, _constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_APPROVED"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedApprovedLabel), _defineProperty(_statusMessageKeyMap, _constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_COMPLETED"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedCompletedLabel), _defineProperty(_statusMessageKeyMap, _constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_REJECTED"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedRejectedLabel), _defineProperty(_statusMessageKeyMap, _constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_NOT_STARTED"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedInProgressLabel), _defineProperty(_statusMessageKeyMap, _constants__WEBPACK_IMPORTED_MODULE_2__["TASK_NEW_IN_PROGRESS"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedInProgressLabel), _statusMessageKeyMap);
var Status = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function (_ref) {
  var status = _ref.status;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedStatusLabel, {
    values: {
      taskStatus: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
        className: "bcs-TaskStatus-message ".concat(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(status))
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), statusMessageKeyMap[status]))
    }
  }), function () {
    for (var _len = arguments.length, msg = new Array(_len), _key = 0; _key < _len; _key++) {
      msg[_key] = arguments[_key];
    }

    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
      className: "bcs-TaskStatus"
    }, msg);
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Status);
//# sourceMappingURL=TaskStatus.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskStatus.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskStatus.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./TaskStatus.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskStatus.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default, TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/Task.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Task__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return _Task__WEBPACK_IMPORTED_MODULE_0__["TaskComponent"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/messages.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/messages.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  taskCollaboratorLoadErrorMessage: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskCollaboratorLoadErrorMessage",
    "defaultMessage": "An error has occurred while loading collaborators for this task. Please try again."
  },
  taskShowMoreAssignees: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskShowMoreAssignees",
    "defaultMessage": "Show {additionalAssigneeCount} More"
  },
  taskShowMoreAssigneesOverflow: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskShowMoreAssigneesOverflow",
    "defaultMessage": "{additionalAssigneeCount, plural, one {Show #+ More} other {Show #+ More}}"
  },
  taskShowLessAssignees: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskShowLessAssignees",
    "defaultMessage": "Show Less"
  },
  taskDueDateLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskDueDateLabel",
    "defaultMessage": "Due: {date}"
  },
  tasksFeedApproveAction: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedApproveAction",
    "defaultMessage": "Approve"
  },
  tasksFeedCompleteAction: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedCompleteAction",
    "defaultMessage": "Mark as Complete"
  },
  tasksFeedRejectAction: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedRejectAction",
    "defaultMessage": "Reject"
  },
  tasksFeedStatusLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedStatusLabel",
    "defaultMessage": "Status: {taskStatus}"
  },
  tasksFeedCompletedLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedCompletedLabel",
    "defaultMessage": "Completed"
  },
  tasksFeedApprovedLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedApprovedLabel",
    "defaultMessage": "Approved"
  },
  tasksFeedRejectedLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedRejectedLabel",
    "defaultMessage": "Rejected"
  },
  tasksFeedInProgressLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedInProgressLabel",
    "defaultMessage": "In Progress"
  },
  tasksFeedHeadlineApprovalCurrentUser: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedHeadlineApprovalCurrentUser",
    "defaultMessage": "{user} assigned you an Approval Task"
  },
  tasksFeedHeadlineApproval: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedHeadlineApproval",
    "defaultMessage": "{user} assigned an Approval Task"
  },
  tasksFeedHeadlineGeneralCurrentUser: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedHeadlineGeneralCurrentUser",
    "defaultMessage": "{user} assigned you a Task"
  },
  tasksFeedHeadlineGeneral: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedHeadlineGeneral",
    "defaultMessage": "{user} assigned a Task"
  },
  tasksFeedMoreAssigneesLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedMoreAssigneesLabel",
    "defaultMessage": "See all assignees"
  },
  tasksFeedAssigneeListTitle: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedAssigneeListTitle",
    "defaultMessage": "Assignees"
  },
  tasksFeedStatusRejected: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedStatusRejected",
    "defaultMessage": "Rejected {dateTime}"
  },
  tasksFeedStatusApproved: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedStatusApproved",
    "defaultMessage": "Approved {dateTime}"
  },
  tasksFeedStatusCompleted: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedStatusCompleted",
    "defaultMessage": "Completed {dateTime}"
  },
  taskAssignmentCompleted: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskAssignmentCompleted",
    "defaultMessage": "Completed"
  },
  taskDeleteMenuItem: {
    "id": "be.contentSidebar.activityFeed.task.taskDeleteMenuItem",
    "defaultMessage": "Delete task"
  },
  taskEditMenuItem: {
    "id": "be.contentSidebar.activityFeed.task.taskEditMenuItem",
    "defaultMessage": "Modify task"
  },
  taskDeletePrompt: {
    "id": "be.contentSidebar.activityFeed.task.taskDeletePrompt",
    "defaultMessage": "Are you sure you want to permanently delete this task?"
  },
  taskAnyAffordanceTooltip: {
    "id": "be.contentSidebar.activityFeed.task.taskAnyAffordanceTooltip",
    "defaultMessage": "Only one assignee is required to complete this task"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/utils/formatTaggedMessage.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/utils/formatTaggedMessage.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/link */ "./node_modules/box-ui-elements/es/components/link/index.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _common_user_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/user-link */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 
 * @file Util for formatting tagged messages
 */



 // this regex matches one of the following regular expressions:
// mentions: ([@＠﹫]\[[0-9]+:[^\]]+])
// urls: (?:\b)((?:(?:ht|f)tps?:\/\/)[\w\._\-]+(:\d+)?(\/[\w\-_\.~\+\/#\?&%=:\[\]@!$'\(\)\*;,]*)?)
// NOTE: There are useless escapes in the regex below, should probably remove them when safe
// eslint-disable-next-line

var splitRegex = /((?:[@＠﹫]\[[0-9]+:[^\]]+])|(?:\b(?:(?:ht|f)tps?:\/\/)[\w\._\-]+(?::\d+)?(?:\/[\w\-_\.~\+\/#\?&%=:\[\]@!$'\(\)\*;,]*)?))/gim;
/**
 * Formats a message a string and replaces the following:
 * - all occurrence of mention patterns with a UserLink component
 * - all occurrence of urls with a Link component
 * Ex mention format: @[123:Hello World]
 * @param {String} tagged_message The message string to format
 * @param {String} itemID The id of the tagged message
 * @param {Boolean} shouldReturnString The boolean value whether it should return string
 * @param {Function} [getUserProfileUrl] The method to generate a user profile url
 * @returns {String|React.Node}
 */

var formatTaggedMessage = function formatTaggedMessage(tagged_message, itemID, shouldReturnString, getUserProfileUrl) {
  var contentItems = tagged_message.split(splitRegex).map(function (text, contentIndex) {
    var contentKey = "".concat(contentIndex, "-").concat(itemID); // attempt mention match

    var mentionMatch = text.match(/([@＠﹫])\[([0-9]+):([^\]]+)]/i);

    if (mentionMatch) {
      var _mentionMatch = _slicedToArray(mentionMatch, 4),
          trigger = _mentionMatch[1],
          id = _mentionMatch[2],
          name = _mentionMatch[3];

      if (shouldReturnString) {
        return "".concat(trigger).concat(name);
      }

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_user_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: contentKey,
        className: "bcs-comment-mention",
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["ACTIVITY_TARGETS"].MENTION,
        getUserProfileUrl: getUserProfileUrl,
        id: id,
        name: "".concat(trigger).concat(name)
      });
    }

    if (!shouldReturnString) {
      // attempt url match
      // NOTE: There are useless escapes in the regex below, should probably remove them when safe
      var urlMatch = text.match( // eslint-disable-next-line no-useless-escape
      /((?:(?:ht|f)tps?:\/\/)[\w\._\-]+(?::\d+)?(?:\/[\w\-_\.~\+\/#\?&%=:\[\]@!$'\(\)\*;,]*)?)/i);

      if (urlMatch) {
        var _urlMatch = _slicedToArray(urlMatch, 2),
            url = _urlMatch[1];

        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_link__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          key: contentKey,
          href: url
        }, url);
      }
    }

    return text;
  });
  return shouldReturnString ? contentItems.join('') : contentItems;
};

/* harmony default export */ __webpack_exports__["default"] = (formatTaggedMessage);
//# sourceMappingURL=formatTaggedMessage.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/CollapsedVersion.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/CollapsedVersion.js ***!
  \************************************************************************************************************/
/*! exports provided: CollapsedVersionBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsedVersionBase", function() { return CollapsedVersion; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _icons_general_IconInfoInverted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../icons/general/IconInfoInverted */ "./node_modules/box-ui-elements/es/icons/general/IconInfoInverted.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _common_selectors_version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/selectors/version */ "./node_modules/box-ui-elements/es/elements/common/selectors/version.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _Version_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Version.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/Version.scss");
/* harmony import */ var _Version_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Version_scss__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Collapsed Version component
 */









function getMessageForAction(action, collaborators, version_start, version_end) {
  // We only support collapsing for multiple upload versions
  if (action !== 'upload') {
    return null;
  }

  var collaboratorIDs = Object.keys(collaborators);
  var numberOfCollaborators = collaboratorIDs.length;
  var versionRange = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "bcs-Version-range"
  }, version_start, " - ", version_end);

  if (numberOfCollaborators === 1) {
    var collaborator = collaborators[collaboratorIDs[0]];
    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionUploadCollapsed, {
      values: {
        name: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("strong", null, collaborator.name),
        versions: versionRange
      }
    }));
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionMultipleUsersUploaded, {
    values: {
      numberOfCollaborators: numberOfCollaborators,
      versions: versionRange
    }
  }));
}

var CollapsedVersion = function CollapsedVersion(props) {
  var action = _common_selectors_version__WEBPACK_IMPORTED_MODULE_4__["default"].getVersionAction(props);
  var collaborators = props.collaborators,
      intl = props.intl,
      onInfo = props.onInfo,
      versions = props.versions,
      version_start = props.version_start,
      version_end = props.version_end;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-Version"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "bcs-Version-message"
  }, getMessageForAction(action, collaborators, version_start, version_end)), onInfo ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "bcs-Version-actions"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-label": intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].getVersionInfo),
    className: "bcs-Version-info",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["ACTIVITY_TARGETS"].VERSION_CARD,
    onClick: function onClick() {
      onInfo({
        versions: versions
      });
    },
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconInfoInverted__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: 16,
    width: 16
  }))) : null);
};


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(CollapsedVersion));
//# sourceMappingURL=CollapsedVersion.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/Version.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/Version.js ***!
  \***************************************************************************************************/
/*! exports provided: VersionBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionBase", function() { return Version; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _icons_general_IconInfoInverted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../icons/general/IconInfoInverted */ "./node_modules/box-ui-elements/es/icons/general/IconInfoInverted.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _common_selectors_version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/selectors/version */ "./node_modules/box-ui-elements/es/elements/common/selectors/version.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _Version_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Version.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/Version.scss");
/* harmony import */ var _Version_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Version_scss__WEBPACK_IMPORTED_MODULE_7__);
var _ACTION_MAP;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Version component
 */









var ACTION_MAP = (_ACTION_MAP = {}, _defineProperty(_ACTION_MAP, _constants__WEBPACK_IMPORTED_MODULE_6__["VERSION_DELETE_ACTION"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionDeleted), _defineProperty(_ACTION_MAP, _constants__WEBPACK_IMPORTED_MODULE_6__["VERSION_PROMOTE_ACTION"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionPromoted), _defineProperty(_ACTION_MAP, _constants__WEBPACK_IMPORTED_MODULE_6__["VERSION_RESTORE_ACTION"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionRestored), _defineProperty(_ACTION_MAP, _constants__WEBPACK_IMPORTED_MODULE_6__["VERSION_UPLOAD_ACTION"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionUploaded), _ACTION_MAP);

var Version = function Version(props) {
  var action = _common_selectors_version__WEBPACK_IMPORTED_MODULE_4__["default"].getVersionAction(props);
  var id = props.id,
      intl = props.intl,
      onInfo = props.onInfo,
      version_number = props.version_number,
      version_promoted = props.version_promoted;

  var _selectors$getVersion = _common_selectors_version__WEBPACK_IMPORTED_MODULE_4__["default"].getVersionUser(props),
      name = _selectors$getVersion.name;

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-Version"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "bcs-Version-message"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, ACTION_MAP[action], {
    values: {
      name: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("strong", null, name),
      version_number: version_number,
      version_promoted: version_promoted
    }
  }))), onInfo ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "bcs-Version-actions"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-label": intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].getVersionInfo),
    className: "bcs-Version-info",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["ACTIVITY_TARGETS"].VERSION_CARD,
    onClick: function onClick() {
      onInfo({
        id: id,
        version_number: version_number
      });
    },
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconInfoInverted__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: 16,
    width: 16
  }))) : null);
};


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Version));
//# sourceMappingURL=Version.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/Version.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/Version.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./Version.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/Version.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/index.js ***!
  \*************************************************************************************************/
/*! exports provided: CollapsedVersion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollapsedVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollapsedVersion */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/CollapsedVersion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapsedVersion", function() { return _CollapsedVersion__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Version */ "./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/Version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Version__WEBPACK_IMPORTED_MODULE_1__["default"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/messages.js":
/*!******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/messages.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  tasksAddTask: {
    "id": "be.contentSidebar.addTask",
    "defaultMessage": "Add Task"
  },
  taskAddTaskGeneral: {
    "id": "be.contentSidebar.addTask.general",
    "defaultMessage": "General Task"
  },
  taskAddTaskGeneralDescription: {
    "id": "be.contentSidebar.addTask.general.description",
    "defaultMessage": "Assignees will be responsible for marking tasks as complete"
  },
  taskAddTaskApproval: {
    "id": "be.contentSidebar.addTask.approval",
    "defaultMessage": "Approval Task"
  },
  taskAddTaskApprovalDescription: {
    "id": "be.contentSidebar.addTask.approval.description",
    "defaultMessage": "Assignees will be responsible for approving or rejecting tasks"
  },
  tasksCreateGeneralTaskFormTitle: {
    "id": "be.contentSidebar.addTask.general.title",
    "defaultMessage": "Create General Task"
  },
  tasksCreateApprovalTaskFormTitle: {
    "id": "be.contentSidebar.addTask.approval.title",
    "defaultMessage": "Create Approval Task"
  },
  tasksEditApprovalTaskFormTitle: {
    "id": "be.contentSidebar.editTask.approval.title",
    "defaultMessage": "Modify Approval Task"
  },
  tasksEditGeneralTaskFormTitle: {
    "id": "be.contentSidebar.editTask.general.title",
    "defaultMessage": "Modify General Task"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/withErrorHandling.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/withErrorHandling.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_error_mask_ErrorMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/error-mask/ErrorMask */ "./node_modules/box-ui-elements/es/components/error-mask/ErrorMask.js");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/inline-error/InlineError */ "./node_modules/box-ui-elements/es/components/inline-error/InlineError.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarSection */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarSection.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file withErrorHandling higher order component
 * @author Box
 */






var withErrorHandling = function withErrorHandling(WrappedComponent) {
  return function (_ref) {
    var maskError = _ref.maskError,
        inlineError = _ref.inlineError,
        errorCode = _ref.errorCode,
        rest = _objectWithoutProperties(_ref, ["maskError", "inlineError", "errorCode"]);

    if (maskError) {
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_SidebarSection__WEBPACK_IMPORTED_MODULE_3__["default"], null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_error_mask_ErrorMask__WEBPACK_IMPORTED_MODULE_1__["default"], {
        errorHeader: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), maskError.errorHeader),
        errorSubHeader: maskError.errorSubHeader ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), maskError.errorSubHeader) : undefined
      }));
    }

    if (inlineError) {
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), inlineError.title)
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), inlineError.content)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(WrappedComponent, rest));
    }

    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(WrappedComponent, rest);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withErrorHandling);
//# sourceMappingURL=withErrorHandling.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/avatars/UnknownUserAvatar.js":
/*!****************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/avatars/UnknownUserAvatar.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");
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




var ICON_CLASS = 'unknown-user-avatar';

var UnknownUserAvatar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(UnknownUserAvatar, _React$PureComponent);

  function UnknownUserAvatar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UnknownUserAvatar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UnknownUserAvatar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "idPrefix", "".concat(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()(ICON_CLASS), "-"));

    return _this;
  }

  _createClass(UnknownUserAvatar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          height = _this$props.height,
          title = _this$props.title,
          width = _this$props.width;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "".concat(ICON_CLASS, " ").concat(className),
        height: height,
        title: title,
        viewBox: "0 0 28 28",
        width: width
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("defs", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("circle", {
        cx: "14",
        cy: "14",
        id: "".concat(this.idPrefix, "a"),
        r: "14"
      })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("g", {
        fill: "none",
        fillRule: "evenodd"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("use", {
        className: "background-fill-color",
        fill: "#EDEDED",
        xlinkHref: "#".concat(this.idPrefix, "a")
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
        className: "fill-color",
        d: "M5.5 25.1C6.7 21 10 18 14 18s7.3 3 8.5 7.1a14 14 0 0 1-17 0zM14 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10z",
        fill: "#C3C3C3"
      })));
    }
  }]);

  return UnknownUserAvatar;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(UnknownUserAvatar, "defaultProps", {
  className: '',
  height: 28,
  width: 28
});

/* harmony default export */ __webpack_exports__["default"] = (UnknownUserAvatar);
//# sourceMappingURL=UnknownUserAvatar.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconAnyTask.js":
/*!**********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconAnyTask.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");




var IconAnyTask = function IconAnyTask(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGray62"] : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 32 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 32 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: className,
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("g", {
    fill: color,
    fillRule: "nonzero"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M28.7484364 16.4549424c0 1.0039348.7442362 1.8177849 1.6622981 1.8177849.9180618 0 1.662298-.8138501 1.662298-1.8177849V5.54823284c0-1.47292747-1.5180216-2.33430191-2.6193324-1.48629378L26.960253 5.9818905c-.7506441.57799516-.9306825 1.71198921-.402127 2.5328466.4995837.7758637 1.4533974.99427836 2.1903104.52782657v7.41237873zM13.1639416 17.5454545c4.0166164 0 7.2727273-3.2561109 7.2727273-7.2727272C20.4366689 6.25611091 17.180558 3 13.1639416 3c-4.01661637 0-7.27272728 3.25611091-7.27272728 7.2727273 0 4.0166163 3.25611091 7.2727272 7.27272728 7.2727272zm0-3.6363636c-2.0083082 0-3.63636365-1.6280554-3.63636365-3.6363636 0-2.00830821 1.62805545-3.63636366 3.63636365-3.63636366s3.6363636 1.62805545 3.6363636 3.63636366c0 2.0083082-1.6280554 3.6363636-3.6363636 3.6363636zM26.0799741 26.82097c-2.6627973-4.6162045-7.5876175-7.459488-12.9167671-7.4573363-5.33091328-.0023936-10.25839928 2.8441776-12.9201858 7.4647912-.50123987.8701058-.20221498 1.9818011.66789077 2.4830409.87010576.5012399 1.98180104.202215 2.48304091-.6678907 2.01238031-3.4933049 5.73768893-5.6453874 9.76917202-5.6435766 4.0305283-.0016279 7.7538215 2.147969 9.766966 5.6379405.5017421.8698163 1.6136099 1.1681993 2.4834261.6664571.8698162-.5017421 1.1681992-1.6136098.6664571-2.4834261z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconAnyTask);
//# sourceMappingURL=IconAnyTask.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconInfoInverted.js":
/*!***************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconInfoInverted.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconInfoInverted = function IconInfoInverted(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 18 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 18 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-info-inverted ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 18 18",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M8.1 13.5h1.8V8.1H8.1v5.4zM9 0C4.05 0 0 4.05 0 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zm0 16.2c-3.96 0-7.2-3.24-7.2-7.2S5.04 1.8 9 1.8s7.2 3.24 7.2 7.2-3.24 7.2-7.2 7.2zm-.9-9.9h1.8V4.5H8.1v1.8z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconInfoInverted);
//# sourceMappingURL=IconInfoInverted.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconRejected.js":
/*!***********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconRejected.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconRejected = function IconRejected(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#ED3757' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 18 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 18 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-rejected ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 18 18",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("g", {
    fill: "none",
    fillRule: "evenodd"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("circle", {
    cx: 9,
    cy: 9,
    fill: color,
    r: 9
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M9 7.586l2.828-2.829 1.415 1.415L10.414 9l2.829 2.828-1.415 1.415L9 10.414l-2.828 2.829-1.415-1.415L7.586 9 4.757 6.172l1.415-1.415z",
    fill: "#FFF",
    fillRule: "nonzero"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconRejected);
//# sourceMappingURL=IconRejected.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconTrash.js":
/*!********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconTrash.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");




var IconTrash = function IconTrash(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray80"] : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "icon-trash ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M14 2l-1.8 11c-.1.6-.7 1-1.2 1H5c-.6 0-1.1-.5-1.2-1L2 2h12zm-1.2 1H3.2l1.6 9.9s.1.1.2.1h6c.06 0 .12-.036.158-.065l.042-.035L12.8 3zm-2.3 1c.3 0 .5.2.5.5s-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTrash);
//# sourceMappingURL=IconTrash.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/two-toned/IconTaskApproval.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/two-toned/IconTaskApproval.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");




var IconTaskApproval = function IconTaskApproval(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bdl-IconTaskApproval ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("g", {
    fill: "none",
    fillRule: "nonzero"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("circle", {
    className: "background-color",
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlBoxBlue"],
    cx: "16",
    cy: "16",
    r: "16"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("g", {
    transform: "translate(8 5.333)",
    className: "foreground-color",
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["white"]
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M11.267 6.51c-1.133 2.242-1.669 4.276-1.614 6.102.006.213-.177.388-.405.388H6.752c-.228 0-.41-.175-.405-.388.055-1.826-.481-3.86-1.614-6.102C2.953 2.986 4.557 0 8 0s5.047 2.986 3.267 6.51z"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("rect", {
    y: "14.337",
    width: "16",
    height: "3.353",
    rx: "1.676"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("rect", {
    x: "1.143",
    y: "18.808",
    width: "13.714",
    height: "1.192",
    rx: ".596"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTaskApproval);
//# sourceMappingURL=IconTaskApproval.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/two-toned/IconTaskGeneral.js":
/*!****************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/two-toned/IconTaskGeneral.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");




var IconTaskGeneral = function IconTaskGeneral(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bdl-IconTaskGeneral ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("g", {
    fillRule: "nonzero",
    fill: "none"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("circle", {
    className: "background-color",
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlBoxBlue"],
    cx: "16.162",
    cy: "16.162",
    r: "16"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M11.717 8.162v.889c0 1.472.995 2.666 2.222 2.666h4.445c1.227 0 2.222-1.194 2.222-2.666v-.89h1.281c.766 0 1.386.62 1.386 1.386v13.23c0 .764-.62 1.385-1.386 1.385H10.436c-.765 0-1.385-.62-1.385-1.386V9.546c0-.764.62-1.384 1.385-1.384h1.281zm6.463 6.503l-2.741 2.924-1.354-1.203a.889.889 0 1 0-1.18 1.329l2 1.778c.36.32.909.295 1.238-.057l3.334-3.555a.889.889 0 1 0-1.297-1.216zm-4.981-6.503h5.926v.889c0 .49-.332.888-.741.888h-4.445c-.409 0-.74-.398-.74-.888v-.89z",
    className: "foreground-color",
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["white"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTaskGeneral);
//# sourceMappingURL=IconTaskGeneral.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/utils/parseCSV.js":
/*!***********************************************************!*\
  !*** ./node_modules/box-ui-elements/es/utils/parseCSV.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Parse a comma separated values text and return an array of separated strings
 *
 * @param  {string} text The input string
 * @return {array} A list of separated strings
 *
 * @example
 * parse('a, b, "c, d"')
 * returns ["a", "b", "c, d"]
 */
function parseCSV(text) {
  if (text === null || typeof text === 'undefined') {
    // Input text is either null or undefined
    return [];
  } // Convert the comma separated text into array
  //
  // The logic of the regular expression is simple
  // look ahead comma or carriage return and retrieve:
  //   1. either strings that are surrounded by double quotes
  //   2. or strings that do not contain comma and carriage return


  var components = text.match(/(".*?"|[^",\r\n]+)(?=\s*[,\r\n]|\s*$)/g);

  if (!components) {
    // No match pattern is found
    return [];
  }

  return components.map(function (c) {
    // Trim the leading and trailing spaces
    c = c.trim(); // Remove double quote pairs from both ends
    // example '"""abc"""' will be altered to 'abc'

    while (c.length >= 2 && c.charAt(0) === '"' && c.charAt(c.length - 1) === '"') {
      c = c.substr(1, c.length - 2);
    }

    return c;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (parseCSV);
//# sourceMappingURL=parseCSV.js.map

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/avatar/Avatar.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/avatar/Avatar.scss ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**************************************\n * Avatars\n **************************************/\n.avatar {\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.avatar .avatar-initials, .avatar .avatar-icon,\n.avatar .avatar-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: transform 0.3s;\n}\n.avatar .avatar-initials {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: bold;\n  line-height: 1;\n}\n.avatar .avatar-initials[data-bg-idx=\"0\"] {\n  background-color: #2486fc;\n}\n.avatar .avatar-initials[data-bg-idx=\"1\"] {\n  background-color: #0061d5;\n}\n.avatar .avatar-initials[data-bg-idx=\"2\"] {\n  background-color: #003c84;\n}\n.avatar .avatar-initials[data-bg-idx=\"3\"] {\n  background-color: #767676;\n}\n.avatar .avatar-initials[data-bg-idx=\"4\"] {\n  background-color: #26c281;\n}\n.avatar .avatar-initials[data-bg-idx=\"5\"] {\n  background-color: #f5b31b;\n}\n.avatar .avatar-initials[data-bg-idx=\"6\"] {\n  background-color: #4826c2;\n}\n.avatar .avatar-initials[data-bg-idx=\"7\"] {\n  background-color: #9f3fed;\n}\n.avatar .avatar-initials[data-bg-idx=\"8\"] {\n  background-color: #ed3757;\n}\n.avatar.avatar--large {\n  width: 44px;\n  height: 44px;\n}\n.avatar.avatar--large .avatar-initials {\n  font-size: 14px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/contact-datalist-item/ContactDatalistItem.scss":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/contact-datalist-item/ContactDatalistItem.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-name {\n  font-size: 14px;\n}\n\n.contact-sub-name {\n  color: #909090;\n  font-size: 12px;\n}\n\n.contact-text {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/draft-js-editor/DraftJSEditor.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/draft-js-editor/DraftJSEditor.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".public-DraftEditorPlaceholder-root {\n  margin: 8px 10px;\n}\n\n.is-disabled .public-DraftStyleDefault-block {\n  width: 262px;\n  padding: 8px 10px;\n  border: 1px solid #d3d3d3;\n  border-radius: 3px;\n}\n\n.draft-js-editor {\n  overflow: hidden;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/MentionSelector.scss":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/form-elements/draft-js-mention-selector/MentionSelector.scss ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**************************************\n * Mention Selector\n **************************************/\n.mention-selector-wrapper {\n  position: relative;\n  margin: 0 0 20px;\n}\n.mention-selector-wrapper .content-editable-container {\n  margin: 0;\n}\n.mention-selector-wrapper .mention-start-state {\n  position: absolute;\n  z-index: 90;\n  width: 100%;\n  padding: 8px;\n  background: #fff;\n  border: 1px solid #bcbcbc;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/media/Media.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/media/Media.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bdl-Media {\n  display: flex;\n  align-items: flex-start;\n}\n\n.bdl-Media-figure {\n  flex: 0 0 auto;\n  align-self: flex-start;\n  justify-self: flex-start;\n  margin: 0 10px 0 0;\n  padding: 0;\n}\n\n.bdl-Media-body {\n  flex: 1 1 100%;\n  min-width: 0;\n  word-wrap: break-word;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n\n.bdl-Media-menu {\n  float: right;\n}\n.bdl-Media-menu, .bdl-Media-menu.btn-plain, .bdl-Media-menu.btn-plain:active, .bdl-Media-menu.btn-plain:hover, .bdl-Media-menu.btn-plain:focus {\n  margin-bottom: 5px;\n  margin-left: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/modal/Modal.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/modal/Modal.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**************************************\n * Modal\n **************************************/\n@-webkit-keyframes popup_bounce_in {\n  0% {\n    transform: scale3d(0.1, 0.1, 1);\n  }\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes popup_bounce_in {\n  0% {\n    transform: scale3d(0.1, 0.1, 1);\n  }\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 160;\n  display: flex;\n  flex: 1;\n  align-items: center;\n  padding: 30px;\n  overflow: auto;\n  outline: 0;\n}\n.modal .modal-dialog {\n  border: none;\n  box-shadow: none;\n  -webkit-animation: popup_bounce_in 0.3s;\n          animation: popup_bounce_in 0.3s;\n}\n.modal .modal-header {\n  margin-right: 20px;\n}\n.modal hr {\n  margin: 20px 0;\n  border: none;\n  border-top: 1px solid #d3d3d3;\n}\n\n.modal-dialog-container {\n  margin: auto;\n}\n\n.modal-dialog {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 460px;\n  margin: auto;\n  padding: 30px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #bcbcbc;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.modal-title {\n  display: inline-block;\n  flex: 1;\n  max-width: 100%;\n  margin: 0;\n  overflow: hidden;\n  font-size: 16px;\n  line-height: inherit;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n\n.modal-content {\n  margin-top: 20px;\n}\n\n.modal-close-button {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  padding: 2px;\n  color: #909090;\n  font-weight: bold;\n  font-size: 11px;\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.75);\n}\n\n.modal-actions {\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: flex-end;\n  margin-top: 30px;\n  text-align: right;\n}\n.modal-actions .btn:last-of-type {\n  margin-right: 0;\n}\n.modal-actions .btn {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.modal-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 89;\n  display: flex;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelectorDropdown.scss":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelectorDropdown.scss ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**************************************\n * Pill Selector\n **************************************/\n.pill-selector-hidden-input {\n  position: absolute;\n  visibility: hidden;\n}\n\n.pill-selector-wrapper {\n  position: relative;\n  margin: 0 0 20px;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper {\n  display: flex;\n  flex-flow: row wrap;\n  align-content: flex-start;\n  align-items: flex-start;\n  width: 262px;\n  margin-top: 5px;\n  padding: 5px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background-color: #fff;\n  border: 1px solid #cccccc;\n  border-radius: 2px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);\n  cursor: text;\n  transition: border-color linear 0.15s, box-shadow linear 0.15s;\n  -webkit-font-smoothing: antialiased;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper:hover {\n  border: 1px solid #004aa2;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper.is-disabled {\n  color: #bcbcbc;\n  background-color: #fbfbfb;\n  box-shadow: none;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper.is-disabled:hover {\n  border-color: #bcbcbc;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper.is-focused {\n  border-color: #0061d5;\n  outline: 0;\n  box-shadow: none;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper.show-error {\n  border-color: #ed3757;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper.pill-selector-suggestions-enabled {\n  min-height: 80px;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper:not(.show-error) .icon-alert {\n  display: none;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper .icon-alert {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  width: 16px;\n  height: 16px;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper .icon-alert path {\n  fill: #ed3757;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper .tooltip {\n  top: calc(100% - 5px) !important;\n  right: 10px !important;\n  margin-top: 0 !important;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper .pills-list {\n  margin: 0;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper .pills-list li {\n  float: left;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper .pill-selector-input {\n  flex: 1;\n  box-sizing: content-box !important;\n  min-width: 0;\n  height: 18px;\n  margin: 1px;\n  padding: 3px;\n  overflow: hidden;\n  color: #4f4f4f;\n  line-height: 18px;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n  box-shadow: none;\n  resize: none;\n}\n.pill-selector-wrapper .pill-selector-input-wrapper .pill-selector-input:focus, .pill-selector-wrapper .pill-selector-input-wrapper .pill-selector-input:hover {\n  outline: none;\n}\n\n.pill-selector-input-wrapper.show-error {\n  border-color: #ed3757;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/text-area/TextArea.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/text-area/TextArea.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**************************************\n * Text Area\n **************************************/\n.text-area-container {\n  position: relative;\n  margin: 0 0 20px;\n}\n.text-area-container label {\n  display: block;\n}\n.text-area-container textarea {\n  margin-top: 5px;\n  font-family: inherit;\n}\n.text-area-container:not(.show-error) .caution {\n  display: none;\n}\n.text-area-container.show-error textarea {\n  border-color: #ed3757;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/ActivitySidebar.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/ActivitySidebar.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-activity .bcs-scroll-content {\n  width: 100%;\n  height: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/AddTaskMenu.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/AddTaskMenu.scss ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-AddTaskMenu {\n  padding: 10px 0;\n}\n\n.bcs-AddTaskMenu-menuItem {\n  display: flex;\n  max-width: 256px;\n  min-height: 80px;\n  padding: 10px 20px;\n  white-space: normal;\n}\n\n.bcs-AddTaskMenu-title {\n  font-weight: bold;\n}\n\n.bcs-AddTaskMenu-description {\n  color: #767676;\n  font-size: 11px;\n  line-height: 14px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.scss":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be .bcs-activity-feed {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 340px;\n  height: 100%;\n}\n.be .bcs-activity-feed ol,\n.be .bcs-activity-feed ul {\n  list-style: none;\n}\n.be .bcs-activity-feed li {\n  line-height: 20px;\n}\n.be .bcs-activity-feed .bcs-activity-feed-items-container {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.be .bcs-activity-feed .bcs-activity-feed-items-container > .inline-alert-error {\n  margin: 9px 20px;\n}\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-version-item:first-child .bcs-version {\n  margin-top: 0;\n}\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-task,\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-task-new,\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-comment,\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-app-activity {\n  position: relative;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e8e8e8;\n}\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-task:first-child .bcs-comment,\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-task-new:first-child .bcs-comment,\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-comment:first-child .bcs-comment,\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-app-activity:first-child .bcs-comment {\n  margin-top: 0;\n}\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-task.bcs-is-focused,\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-task-new.bcs-is-focused,\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-comment.bcs-is-focused,\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-app-activity.bcs-is-focused {\n  margin-right: -25px;\n  margin-left: -25px;\n  padding-right: 25px;\n  padding-left: 25px;\n  background-color: #f2f7fd;\n  border-bottom: none;\n  box-shadow: 0 25px 0 -24px #e8e8e8;\n  -webkit-animation: fade-out 6s ease-out 2s 1 normal forwards;\n          animation: fade-out 6s ease-out 2s 1 normal forwards;\n}\n@-webkit-keyframes fade-out {\n  0% {\n    background-color: #f2f7fd;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@keyframes fade-out {\n  0% {\n    background-color: #f2f7fd;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n.be .bcs-activity-feed .bcs-activity-feed-items-container .bcs-activity-feed-task {\n  padding-bottom: 28px;\n}\n.be .bcs-activity-feed .bcs-activity-feed-active-state {\n  width: 100%;\n  padding: 9px 25px;\n}\n.be .bcs-activity-feed .bcs-activity-feed-active-state > li:last-child {\n  margin-bottom: 10px;\n}\n.be .bcs-activity-feed .bcs-activity-feed-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.be .bcs-activity-feed .bcs-activity-feed-empty-state .bcs-empty-state-cta {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.be .bcs-activity-feed .bcs-activity-feed-empty-state .bcs-empty-state-cta aside {\n  width: 200px;\n  margin-top: 6px;\n  text-align: center;\n}\n.be .bcs-activity-feed .bcs-activity-feed-empty-state .bcs-activity-feed-empty-state-illustration {\n  margin-top: 60px;\n  margin-bottom: 15px;\n}\n.be .bcs-activity-feed .bcs-activity-feed-loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n}\n.be .bcs-activity-feed .bcs-feedItemInlineError {\n  margin: 20px 25px;\n}\n.be .bcs-activity-feed .bcs-activity-feed-comment-input {\n  flex: 0 0 auto;\n  min-height: 93px;\n  max-height: 500px;\n  overflow: hidden;\n  background-color: #fff;\n}\n.be .bcs-activity-feed .bcs-activity-feed-comment-input.bcs-is-disabled {\n  opacity: 0.4;\n  pointer-events: none;\n}\n.be .bcs-activity-feed .bcs-activity-feed-comment-input .selector-dropdown-wrapper {\n  z-index: auto;\n  width: 100%;\n}\n.be .bcs-activity-feed .bcs-activity-feed-comment-input .overlay {\n  max-height: 95px;\n  overflow: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/AppActivity.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/app-activity/AppActivity.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-AppActivity {\n  width: 100%;\n}\n.bcs-AppActivity.bcs-is-pending {\n  opacity: 0.4;\n}\n\n.bcs-AppActivity-confirm {\n  z-index: 190;\n}\n\n.bcs-AppActivity-content {\n  color: #4e4e4e;\n}\n\n.bcs-AppActivity-icon {\n  width: 32px;\n  height: 32px;\n}\n\n.bcs-AppActivity-link.link {\n  color: #0061d5;\n}\n\n.bcs-AppActivity-headline {\n  color: #222;\n  font-weight: bold;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/CommentForm.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment-form/CommentForm.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be .bcs-CommentForm {\n  padding: 20px;\n  border-top: solid 1px #e8e8e8;\n}\n.be .bcs-CommentForm.bcs-is-open .bcs-CommentForm-input .public-DraftEditor-content {\n  min-height: 68px;\n  max-height: 140px;\n  overflow: auto;\n}\n.be .bcs-CommentForm-avatar {\n  margin-right: 20px;\n}\n.be .bcs-CommentForm-body {\n  min-width: 0;\n}\n.be .bcs-CommentForm-input .mention-selector-wrapper {\n  margin: 0;\n}\n.be .bcs-CommentForm-input .public-DraftEditor-content {\n  width: auto;\n  cursor: text;\n}\n.be .bcs-CommentForm-tip {\n  margin-top: 10px;\n  color: #909090;\n}\n.be .bcs-CommentFormControls {\n  margin-top: 20px;\n  text-align: right;\n}\n.be .bcs-CommentFormControls .btn {\n  margin: 0;\n}\n.be .bcs-CommentFormControls .btn:last-child {\n  margin-left: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/Comment.scss":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/comment/Comment.scss ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-Comment {\n  position: relative;\n  z-index: 1;\n}\n\n.bcs-Comment-media {\n  opacity: 1;\n  transition: opacity 0.33s;\n}\n.bcs-Comment-media.bcs-is-pending {\n  opacity: 0.4;\n}\n\n@supports (-ms-ime-align: auto) {\n  .bcs-Comment-headline {\n    word-break: break-all;\n  }\n}\n\n.bcs-Comment-deleteConfirmationModal {\n  z-index: 190;\n}\n\n.be .bcs-Comment-editor.bcs-CommentForm {\n  margin-top: 20px;\n  padding: 0;\n  border-top: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.scss":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-ActivityError {\n  padding: 14px 15px;\n}\n\n.bcs-ActivityError-action,\nbutton.bcs-ActivityError-action {\n  display: block;\n  margin-top: 5px;\n  color: #ed3757;\n  text-decoration: underline;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-ActivityMessage {\n  white-space: pre-wrap;\n}\n.bcs-ActivityMessage .link {\n  color: #0061d5;\n  white-space: normal;\n}\n.bcs-ActivityMessage .link:hover {\n  text-decoration: underline;\n}\n\n.bcs-ActivityMessage-mention {\n  overflow: initial;\n  white-space: normal;\n}\n\n.bcs-ActivityMessage-translate {\n  display: block;\n  color: #0061d5;\n}\n\n.bcs-ActivityMessageLoading {\n  margin-top: 3px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-ActivityTimestamp {\n  color: #767676;\n  font-size: 12px;\n  line-height: 20px;\n  cursor: default;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.scss":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-DeleteConfirmation {\n  width: 212px;\n}\n.bcs-DeleteConfirmation .overlay {\n  padding: 20px;\n  border-radius: 4px;\n}\n\n.bcs-DeleteConfirmation-promptMessage {\n  margin-bottom: 20px;\n}\n\n.bcs-DeleteConfirmation-delete,\n.bcs-DeleteConfirmation-cancel {\n  margin-left: 0;\n}\n\n.bcs-DeleteConfirmation-cancel {\n  margin-right: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/UserLink.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/common/user-link/UserLink.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-UserLink,\n.bcs-UserLink.link {\n  color: #222;\n  font-weight: bold;\n  white-space: normal;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/TaskForm.scss":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-form/TaskForm.scss ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be .bcs-task-input-container {\n  display: flex;\n}\n.be .bcs-task-input-container .bcs-task-input-controls {\n  display: block;\n  text-align: right;\n}\n.be .bcs-task-input-container .bcs-task-input-controls .btn {\n  margin-top: 0;\n  margin-right: 0;\n  margin-bottom: 10px;\n}\n.be .bcs-task-input-container .bcs-task-input-controls .btn:last-child {\n  margin-left: 10px;\n}\n.be .bcs-task-input-container .bcs-task-input-form-container {\n  flex: 1;\n  min-width: 0;\n}\n.be .bcs-task-input-container .bcs-task-input-form-container textarea,\n.be .bcs-task-input-container .bcs-task-input-form-container .date-picker-input {\n  width: 100%;\n}\n.be .bcs-task-input-container .bcs-task-input-form-container .checkbox-container {\n  margin-top: -10px;\n}\n.be .bcs-task-input-container .bcs-task-input-form-container .bcs-task-add-due-date-input {\n  margin-right: 0;\n  margin-left: 0;\n}\n.be .bcs-task-input-container .bcs-task-input-form-container .bcs-task-add-due-date-input .date-picker-wrapper {\n  width: 166px;\n}\n.be .bcs-task-input-container .bcs-task-input-form-container .bcs-task-name-input {\n  max-height: 140px;\n  margin-top: 20px;\n  margin-bottom: 15px;\n}\n.be .bcs-task-input-container .bcs-task-input-form-container input.pill-selector-hidden-input {\n  width: 1px;\n}\n.be .bcs-task-input-container .bcs-task-input-form-container .pill-selector-wrapper {\n  width: 100%;\n  margin-left: 0;\n}\n.be .bcs-task-input-container .bcs-task-input-form-container .pill-selector-wrapper .pill-selector-input-wrapper {\n  width: auto;\n}\n.be .bcs-task-input-container .bcs-task-input-form-container .pill-selector-wrapper.scrollable .overlay-wrapper {\n  position: absolute;\n  height: 215px;\n  overflow-y: scroll;\n  border: 1px solid #bcbcbc;\n}\n.be .bcs-task-input-container .bcs-task-input-form-container .pill-selector-wrapper.scrollable .overlay {\n  border: none;\n}\n.be .bcs-task-input-container .inline-alert {\n  margin: 0 0 20px 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-AssigneeDetails {\n  overflow: hidden;\n  line-height: 16px;\n}\n\n.bcs-AssigneeDetails-name {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.bcs-AssigneeDetails-status {\n  color: #767676;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeList.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AssigneeList.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-AssigneeList-list {\n  margin: 0;\n  padding: 0;\n}\n\n.bcs-AssigneeList-listItem {\n  display: flex;\n  align-items: center;\n  margin: 6px 0 0 0;\n  padding: 3px 0;\n}\n\n.bcs-AssigneeList-listItemAvatar {\n  width: 28px;\n  height: 28px;\n  margin-right: 10px;\n  font-size: 9px;\n}\n\n.bcs-AssigneeList-toggleBtn {\n  margin-top: 10px;\n  margin-left: 38px;\n  color: #0061d5;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.scss":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-AvatarGroupAvatar {\n  position: relative;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n}\n\n.bcs-AvatarGroupAvatar-avatar {\n  width: 100%;\n  height: 100%;\n}\n\n.bcs-AvatarGroupAvatar-statusIcon {\n  position: absolute;\n  right: -2px;\n  bottom: -2px;\n  background: #fff;\n  border: 1px solid #fff;\n  border-radius: 50%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/Task.scss":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/Task.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-Task-media {\n  opacity: 1;\n  transition: opacity 0.33s;\n}\n.bcs-Task-media.bcs-is-pending {\n  opacity: 0.4;\n}\n.bcs-Task-media .bdl-Media-body {\n  overflow: hidden;\n}\n\n.bcs-Task-avatar {\n  position: relative;\n  height: 100%;\n}\n\n.bcs-Task-avatarBadge {\n  position: absolute;\n  right: -2px;\n  bottom: -2px;\n  background: #fff;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  right: -4px;\n  border-width: 2px;\n}\n\n@supports (-ms-ime-align: auto) {\n  .bcs-Task-headline {\n    word-break: break-all;\n  }\n}\n\n.bcs-Task-statusContainer {\n  margin-top: 8px;\n}\n\n.bcs-Task-assigneeListContainer {\n  margin-top: 4px;\n}\n\n.bcs-Task-actionsContainer {\n  margin-top: 20px;\n}\n\n.bcs-Task-deleteConfirmationModal {\n  z-index: 190;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskActions.scss":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskActions.scss ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button:first-of-type.bcs-TaskActions-button {\n  margin-left: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-TaskCompletionRuleIcon {\n  margin-left: 4px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskDueDate.scss":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskDueDate.scss ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-TaskDueDate {\n  color: #767676;\n  font-weight: bold;\n}\n.bcs-TaskDueDate.bcs-is-taskOverdue {\n  color: #ed3757;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskStatus.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/task-new/TaskStatus.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-TaskStatus {\n  display: inline-block;\n  color: #767676;\n  font-weight: bold;\n}\n\n.bcs-TaskStatus-message.completed, .bcs-TaskStatus-message.approved {\n  color: #26c281;\n}\n.bcs-TaskStatus-message.rejected {\n  color: #ed3757;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/Version.scss":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/activity-feed/version/Version.scss ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be .bcs-Version {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 10px;\n  padding: 9px;\n  color: #26c281;\n  background-color: rgba(38, 194, 129, 0.1);\n  border-radius: 4px;\n}\n.be .bcs-Version-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n.be .bcs-Version-info {\n  flex: none;\n  width: 16px;\n  height: 16px;\n}\n.be .bcs-Version-info path {\n  fill: #26c281;\n}\n.be .bcs-Version-message {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.be .bcs-Version-range {\n  white-space: nowrap;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "./node_modules/lodash/_createCaseFirst.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "./node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "./node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "./node_modules/lodash/camelCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/camelCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var capitalize = __webpack_require__(/*! ./capitalize */ "./node_modules/lodash/capitalize.js"),
    createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;


/***/ }),

/***/ "./node_modules/lodash/capitalize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/capitalize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    upperFirst = __webpack_require__(/*! ./upperFirst */ "./node_modules/lodash/upperFirst.js");

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),

/***/ "./node_modules/lodash/upperFirst.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ "./node_modules/lodash/_createCaseFirst.js");

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ })

}]);