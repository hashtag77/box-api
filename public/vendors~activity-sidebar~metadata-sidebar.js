(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~activity-sidebar~metadata-sidebar"],{

/***/ "./node_modules/box-ui-elements/es/components/flyout/Flyout.js":
/*!*********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/flyout/Flyout.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-tether'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Flyout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flyout.scss */ "./node_modules/box-ui-elements/es/components/flyout/Flyout.scss");
/* harmony import */ var _Flyout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Flyout_scss__WEBPACK_IMPORTED_MODULE_2__);
var _positions;

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





var BOTTOM_CENTER = 'bottom-center';
var BOTTOM_LEFT = 'bottom-left';
var BOTTOM_RIGHT = 'bottom-right';
var MIDDLE_LEFT = 'middle-left';
var MIDDLE_RIGHT = 'middle-right';
var TOP_CENTER = 'top-center';
var TOP_LEFT = 'top-left';
var TOP_RIGHT = 'top-right';
var positions = (_positions = {}, _defineProperty(_positions, BOTTOM_CENTER, {
  attachment: 'top center',
  targetAttachment: 'bottom center'
}), _defineProperty(_positions, BOTTOM_LEFT, {
  attachment: 'top right',
  targetAttachment: 'bottom right'
}), _defineProperty(_positions, BOTTOM_RIGHT, {
  attachment: 'top left',
  targetAttachment: 'bottom left'
}), _defineProperty(_positions, MIDDLE_LEFT, {
  attachment: 'middle right',
  targetAttachment: 'middle left'
}), _defineProperty(_positions, MIDDLE_RIGHT, {
  attachment: 'middle left',
  targetAttachment: 'middle right'
}), _defineProperty(_positions, TOP_CENTER, {
  attachment: 'bottom center',
  targetAttachment: 'top center'
}), _defineProperty(_positions, TOP_LEFT, {
  attachment: 'bottom right',
  targetAttachment: 'top right'
}), _defineProperty(_positions, TOP_RIGHT, {
  attachment: 'bottom left',
  targetAttachment: 'top left'
}), _positions);
/**
 * Checks if there is a clickable ancestor or self
 * @param {Node} rootNode The base node we should stop at
 * @param {Node} targetNode The target node of the event
 * @returns {boolean}
 */

var hasClickableAncestor = function hasClickableAncestor(rootNode, targetNode) {
  // Check if the element or any of the ancestors are click-able (stopping at the component boundary)
  var currentNode = targetNode;

  while (currentNode && currentNode instanceof Node && currentNode.parentNode && currentNode !== rootNode) {
    var nodeName = currentNode.nodeName.toUpperCase();

    if (nodeName === 'A' || nodeName === 'BUTTON') {
      return true;
    }

    currentNode = currentNode.parentNode;
  }

  return false;
};
/**
 * Checks if the target element is inside an element with the given CSS class.
 * @param {HTMLElement} targetEl The target element
 * @param {string} className A CSS class on the element to check for
 */


var hasClassAncestor = function hasClassAncestor(targetEl, className) {
  var el = targetEl;

  while (el && el instanceof HTMLElement) {
    if (el.classList.contains(className)) {
      return true;
    }

    el = el.parentNode;
  }

  return false;
};

var Flyout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Flyout, _React$Component);

  function Flyout(props) {
    var _this;

    _classCallCheck(this, Flyout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Flyout).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleOverlayClick", function (event) {
      var overlayNode = document.getElementById(_this.overlayID);
      var _this$props = _this.props,
          closeOnClick = _this$props.closeOnClick,
          closeOnClickPredicate = _this$props.closeOnClickPredicate;

      if (!closeOnClick || !hasClickableAncestor(overlayNode, event.target)) {
        return;
      }

      if (closeOnClickPredicate && !closeOnClickPredicate(event)) {
        return;
      }

      _this.handleOverlayClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function (event) {
      var isVisible = _this.state.isVisible;

      if (isVisible) {
        _this.closeOverlay();
      } else {
        _this.openOverlay();
      } // If button was clicked, the detail field should hold number of clicks.
      // If number is zero, the event was synthesized.
      // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail


      var isButtonClicked = event.detail > 0;

      _this.setState({
        isButtonClicked: isButtonClicked
      });

      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonHover", function () {
      var _this$props2 = _this.props,
          openOnHover = _this$props2.openOnHover,
          openOnHoverDelayTimeout = _this$props2.openOnHoverDelayTimeout;

      if (openOnHover) {
        clearTimeout(_this.hoverDelay);
        _this.hoverDelay = setTimeout(function () {
          _this.openOverlay();
        }, openOnHoverDelayTimeout);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonHoverLeave", function () {
      var _this$props3 = _this.props,
          openOnHover = _this$props3.openOnHover,
          openOnHoverDelayTimeout = _this$props3.openOnHoverDelayTimeout;

      if (openOnHover) {
        clearTimeout(_this.hoverDelay);
        _this.hoverDelay = setTimeout(function () {
          _this.closeOverlay();
        }, openOnHoverDelayTimeout);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openOverlay", function () {
      _this.setState({
        isVisible: true
      });

      var onOpen = _this.props.onOpen;

      if (onOpen) {
        onOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeOverlay", function () {
      _this.setState({
        isVisible: false
      });

      var onClose = _this.props.onClose;

      if (onClose) {
        onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusButton", function () {
      var buttonEl = document.getElementById(_this.overlayButtonID);

      if (buttonEl) {
        buttonEl.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverlayClose", function () {
      _this.focusButton();

      _this.closeOverlay();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClickOrWindowBlur", function (event) {
      var _this$props4 = _this.props,
          portaledClasses = _this$props4.portaledClasses,
          closeOnClickOutside = _this$props4.closeOnClickOutside,
          closeOnWindowBlur = _this$props4.closeOnWindowBlur;
      var isVisible = _this.state.isVisible;

      if (!isVisible || !(closeOnClickOutside || closeOnWindowBlur)) {
        return;
      }

      var overlayNode = document.getElementById(_this.overlayID);
      var buttonNode = document.getElementById(_this.overlayButtonID);
      var isInsideToggleButton = buttonNode && event.target instanceof Node && buttonNode.contains(event.target) || buttonNode === event.target;
      var isInsideOverlay = overlayNode && event.target instanceof Node && overlayNode.contains(event.target) || overlayNode === event.target;
      var isInside = isInsideToggleButton || isInsideOverlay;

      if (isInside || portaledClasses.some(function (className) {
        return hasClassAncestor(event.target, className);
      })) {
        return;
      } // Only close overlay when the click is outside of the flyout or window loses focus


      _this.closeOverlay();
    });

    _this.overlayID = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()('overlay');
    _this.overlayButtonID = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()('flyoutbutton');
    _this.state = {
      isVisible: props.isVisibleByDefault,
      isButtonClicked: false
    };
    return _this;
  }

  _createClass(Flyout, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.isVisible && this.state.isVisible) {
        var _this$props5 = this.props,
            closeOnClickOutside = _this$props5.closeOnClickOutside,
            closeOnWindowBlur = _this$props5.closeOnWindowBlur; // When overlay is being opened

        if (closeOnClickOutside) {
          document.addEventListener('click', this.handleDocumentClickOrWindowBlur, true);
          document.addEventListener('contextmenu', this.handleDocumentClickOrWindowBlur, true);
        }

        if (closeOnWindowBlur) {
          window.addEventListener('blur', this.handleDocumentClickOrWindowBlur, true);
        }
      } else if (prevState.isVisible && !this.state.isVisible) {
        // When overlay is being closed
        document.removeEventListener('contextmenu', this.handleDocumentClickOrWindowBlur, true);
        document.removeEventListener('click', this.handleDocumentClickOrWindowBlur, true);
        window.removeEventListener('blur', this.handleDocumentClickOrWindowBlur, true);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isVisible) {
        // Clean-up global click handlers
        document.removeEventListener('contextmenu', this.handleDocumentClickOrWindowBlur, true);
        document.removeEventListener('click', this.handleDocumentClickOrWindowBlur, true);
        window.removeEventListener('blur', this.handleDocumentClickOrWindowBlur, true);
      }

      if (this.props.openOnHover && this.hoverDelay) {
        clearTimeout(this.hoverDelay);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          children = _this$props6.children,
          _this$props6$classNam = _this$props6.className,
          className = _this$props6$classNam === void 0 ? '' : _this$props6$classNam,
          constrainToScrollParent = _this$props6.constrainToScrollParent,
          constrainToWindow = _this$props6.constrainToWindow,
          offset = _this$props6.offset,
          openOnHover = _this$props6.openOnHover,
          position = _this$props6.position,
          shouldDefaultFocus = _this$props6.shouldDefaultFocus;
      var _this$state = this.state,
          isButtonClicked = _this$state.isButtonClicked,
          isVisible = _this$state.isVisible;
      var elements = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).toArray(children);
      var tetherPosition = positions[position];

      if (elements.length !== 2) {
        throw new Error('Flyout must have exactly two children: A button component and a <Overlay>');
      }

      var overlayButton = elements[0];
      var overlayContent = elements[1];
      var overlayButtonProps = {
        id: this.overlayButtonID,
        key: this.overlayButtonID,
        role: 'button',
        onClick: this.handleButtonClick,
        onMouseEnter: this.handleButtonHover,
        onMouseLeave: this.handleButtonHoverLeave,
        'aria-haspopup': 'true',
        'aria-expanded': isVisible ? 'true' : 'false'
      };

      if (isVisible) {
        overlayButtonProps['aria-controls'] = this.overlayID;
      }

      var overlayProps = {
        id: this.overlayID,
        key: this.overlayID,
        role: 'dialog',
        onClick: this.handleOverlayClick,
        onClose: this.handleOverlayClose,
        onMouseEnter: this.handleButtonHover,
        onMouseLeave: this.handleButtonHoverLeave,
        shouldDefaultFocus: shouldDefaultFocus || !isButtonClicked && !openOnHover,
        'aria-labelledby': this.overlayButtonID
      };
      var constraints = [];

      if (constrainToScrollParent) {
        constraints.push({
          to: 'scrollParent',
          attachment: 'together'
        });
      }

      if (constrainToWindow) {
        constraints.push({
          to: 'window',
          attachment: 'together'
        });
      }

      var tetherProps = {
        classPrefix: 'flyout-overlay',
        attachment: tetherPosition.attachment,
        targetAttachment: tetherPosition.targetAttachment,
        enabled: isVisible,
        classes: {
          element: "flyout-overlay ".concat(className)
        },
        constraints: constraints
      };

      if (offset) {
        tetherProps.offset = offset;
      } else {
        switch (position) {
          case BOTTOM_CENTER:
          case BOTTOM_LEFT:
          case BOTTOM_RIGHT:
            tetherProps.offset = '-10px 0';
            break;

          case TOP_CENTER:
          case TOP_LEFT:
          case TOP_RIGHT:
            tetherProps.offset = '10px 0';
            break;

          case MIDDLE_LEFT:
            tetherProps.offset = '0 10px';
            break;

          case MIDDLE_RIGHT:
            tetherProps.offset = '0 -10px';
            break;

          default: // no default

        }
      }

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-tether'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), tetherProps, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(overlayButton, overlayButtonProps), isVisible ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(overlayContent, overlayProps) : null);
    }
  }]);

  return Flyout;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(Flyout, "defaultProps", {
  className: '',
  closeOnClick: true,
  closeOnClickOutside: true,
  closeOnWindowBlur: false,
  constrainToScrollParent: true,
  constrainToWindow: false,
  isVisibleByDefault: false,
  openOnHover: false,
  openOnHoverDelayTimeout: 300,
  portaledClasses: [],
  position: BOTTOM_RIGHT
});

/* harmony default export */ __webpack_exports__["default"] = (Flyout);
//# sourceMappingURL=Flyout.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/flyout/Flyout.scss":
/*!***********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/flyout/Flyout.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./Flyout.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/flyout/Flyout.scss");

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

/***/ "./node_modules/box-ui-elements/es/components/flyout/Overlay.js":
/*!**********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/flyout/Overlay.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../focus-trap */ "./node_modules/box-ui-elements/es/components/focus-trap/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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





var Overlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Overlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Overlay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "closeOverlay", function () {
      var onClose = _this.props.onClose;

      if (!onClose) {
        return;
      }

      setTimeout(function () {
        return onClose();
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverlayKeyDown", function (event) {
      if (event.key !== 'Escape') {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.closeOverlay();
    });

    return _this;
  }

  _createClass(Overlay, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          rest = _objectWithoutProperties(_this$props, ["children", "className"]);

      var overlayProps = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(rest, ['onClose']);
      overlayProps.className = className;
      overlayProps.handleOverlayKeyDown = this.handleOverlayKeyDown;
      overlayProps.tabIndex = 0;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_focus_trap__WEBPACK_IMPORTED_MODULE_2__["default"], overlayProps, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "overlay"
      }, children));
    }
  }]);

  return Overlay;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* harmony default export */ __webpack_exports__["default"] = (Overlay);
//# sourceMappingURL=Overlay.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/flyout/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/flyout/index.js ***!
  \********************************************************************/
/*! exports provided: Flyout, Overlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flyout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flyout */ "./node_modules/box-ui-elements/es/components/flyout/Flyout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flyout", function() { return _Flyout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overlay */ "./node_modules/box-ui-elements/es/components/flyout/Overlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return _Overlay__WEBPACK_IMPORTED_MODULE_1__["default"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/form-elements/form/Form.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/form-elements/form/Form.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'form-serialize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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





function getFormValidityState(form) {
  // Turn the form.elements HTMLCollection into Array before reducing
  return [].slice.call(form.elements).reduce(function (validityObj, inputEl) {
    // Only serialize inputs that have a name defined
    if (inputEl.name && !inputEl.validity.valid) {
      var validityState = inputEl.validity;

      if (inputEl.validity.customError) {
        // If the input is displaying a custom error,
        // we expose the errorCode stored in the validationMessage
        validityState.customErrorCode = inputEl.validationMessage;
      }

      validityObj[inputEl.name] = {
        validityState: validityState
      };
      return validityObj;
    }

    return validityObj;
  }, {});
}

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
      var currentTarget = _ref.currentTarget;

      if (_this.props.onChange) {
        var formData = !(function webpackMissingModule() { var e = new Error("Cannot find module 'form-serialize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(currentTarget, {
          hash: true,
          empty: true
        });

        _this.props.onChange(formData);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (event) {
      var form = event.target;
      event.preventDefault();
      var isValid = form.checkValidity();
      var _this$props = _this.props,
          onInvalidSubmit = _this$props.onInvalidSubmit,
          onValidSubmit = _this$props.onValidSubmit;
      var registeredInputs = _this.state.registeredInputs;

      if (isValid) {
        var formData = !(function webpackMissingModule() { var e = new Error("Cannot find module 'form-serialize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(form, {
          hash: true,
          empty: true
        });
        onValidSubmit(formData);
      } else {
        var formValidityState = getFormValidityState(form); // Push form validity state to inputs so errors are shown on submit

        Object.keys(formValidityState).forEach(function (key) {
          return registeredInputs[key] && registeredInputs[key](formValidityState[key].validityState);
        });

        if (onInvalidSubmit) {
          onInvalidSubmit(formValidityState);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "registerInput", function (name, setValidityStateHandler) {
      var registeredInputs = _this.state.registeredInputs;

      if (registeredInputs[name]) {
        throw new Error("Input '".concat(name, "' is already registered."));
      }

      var nextState = _this.state;
      nextState.registeredInputs[name] = setValidityStateHandler;

      _this.setState(nextState);
    });

    _defineProperty(_assertThisInitialized(_this), "unregisterInput", function (name) {
      var nextState = _this.state;
      delete nextState.registeredInputs[name];

      _this.setState(nextState);
    });

    _this.state = {
      registeredInputs: {}
    };
    return _this;
  }

  _createClass(Form, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        form: {
          registerInput: this.registerInput.bind(this),
          unregisterInput: this.unregisterInput.bind(this)
        }
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevFormValidityState = _ref2.formValidityState;
      var formValidityState = this.props.formValidityState;
      var registeredInputs = this.state.registeredInputs;

      if (formValidityState !== prevFormValidityState) {
        Object.keys(formValidityState).forEach(function (key) {
          if (registeredInputs[key]) {
            registeredInputs[key](formValidityState[key]);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("form", {
        noValidate: true,
        onChange: this.onChange,
        onSubmit: this.onSubmit
      }, children);
    }
  }]);

  return Form;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(Form, "propTypes", {
  children: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).node,

  /** Called when an input in the form changes */
  onChange: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).func,

  /** Called when a valid submit is made */
  onValidSubmit: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).func.isRequired,

  /** Called when an invalid submit is made */
  onInvalidSubmit: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).func,

  /** An object mapping input names to error messages */
  formValidityState: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).object // eslint-disable-line react/no-unused-prop-types

});

_defineProperty(Form, "childContextTypes", {
  form: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).shape({
    registerInput: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).func.isRequired,
    unregisterInput: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).func.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Form);
//# sourceMappingURL=Form.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/link/Link.js":
/*!*****************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/link/Link.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _LinkBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkBase */ "./node_modules/box-ui-elements/es/components/link/LinkBase.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
var Link =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, _getPrototypeOf(Link).apply(this, arguments));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          rest = _objectWithoutProperties(_this$props, ["className"]);

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_LinkBase__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        className: "link ".concat(className)
      }, rest));
    }
  }]);

  return Link;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(Link, "defaultProps", {
  className: ''
});

/* harmony default export */ __webpack_exports__["default"] = (Link);
//# sourceMappingURL=Link.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/link/LinkBase.js":
/*!*********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/link/LinkBase.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var LinkBase = function LinkBase(_ref) {
  var children = _ref.children,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '#' : _ref$href,
      linkRef = _ref.linkRef,
      target = _ref.target,
      rel = _ref.rel,
      component = _ref.component,
      refProp = _ref.refProp,
      rest = _objectWithoutProperties(_ref, ["children", "href", "linkRef", "target", "rel", "component", "refProp"]);

  // Automatically append rel="noopener" for external links
  // (security fix) if no `rel` was passed
  var linkRel = target === '_blank' && !rel ? 'noopener' : rel;
  var LinkComponent = component || 'a';

  var ref = _defineProperty({}, refProp || 'ref', linkRef);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(LinkComponent, _extends({
    href: href,
    rel: linkRel,
    target: target
  }, ref, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (LinkBase);
//# sourceMappingURL=LinkBase.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/scroll-wrapper/ScrollWrapper.js":
/*!************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/scroll-wrapper/ScrollWrapper.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ScrollWrapper_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScrollWrapper.scss */ "./node_modules/box-ui-elements/es/components/scroll-wrapper/ScrollWrapper.scss");
/* harmony import */ var _ScrollWrapper_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ScrollWrapper_scss__WEBPACK_IMPORTED_MODULE_3__);
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







var ScrollWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollWrapper, _React$Component);

  function ScrollWrapper(props) {
    var _this;

    _classCallCheck(this, ScrollWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollWrapper).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      shouldShowTopScrollShadow: false,
      shouldShowBottomScrollShadow: false
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var newState = _this.getScrollShadowState();

      _this.setState(newState);

      if (_this.scrollRef) {
        _this.scrollRef.addEventListener('transitionend', _this.throttledOnContentScroll); // Apparently, flow only allows for one truthy check per command, so I have to either:
        // 1) duplicate this check per call, or
        // 2) nest if checks (_slightly more performant_)


        if (_this.scrollRef) {
          _this.observer.observe(_this.scrollRef, {
            attributes: true,
            childlist: true,
            subtree: true
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onContentScroll", function () {
      var newState = _this.getScrollShadowState();

      _this.setState(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "getScrollShadowState", function () {
      var _ref = _this.scrollRef || {},
          scrollTop = _ref.scrollTop,
          scrollHeight = _ref.scrollHeight,
          clientHeight = _ref.clientHeight;

      var newState = {};

      if (scrollTop > 0 && scrollTop < scrollHeight - clientHeight) {
        newState.shouldShowTopScrollShadow = true;
        newState.shouldShowBottomScrollShadow = true;
      }

      if (scrollTop === 0) {
        newState.shouldShowTopScrollShadow = false;
      }

      if (scrollTop < scrollHeight - clientHeight) {
        newState.shouldShowBottomScrollShadow = true;
      }

      if (scrollTop === scrollHeight - clientHeight) {
        newState.shouldShowBottomScrollShadow = false;
      }

      return newState;
    });

    _defineProperty(_assertThisInitialized(_this), "scrollRef", null);

    _defineProperty(_assertThisInitialized(_this), "throttledOnContentScroll", lodash_throttle__WEBPACK_IMPORTED_MODULE_2___default()(_this.onContentScroll, 100));

    _this.observer = new MutationObserver(_this.throttledOnContentScroll);
    return _this;
  }

  _createClass(ScrollWrapper, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.observer.disconnect();

      if (this.scrollRef) {
        this.scrollRef.removeEventListener('transitionend', this.throttledOnContentScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          scrollRefFn = _this$props.scrollRefFn,
          shadowSize = _this$props.shadowSize,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "scrollRefFn", "shadowSize"]);

      var _this$state = this.state,
          shouldShowTopScrollShadow = _this$state.shouldShowTopScrollShadow,
          shouldShowBottomScrollShadow = _this$state.shouldShowBottomScrollShadow;
      var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("scroll-container", className, {
        'is-showing-top-shadow': shouldShowTopScrollShadow,
        'is-showing-bottom-shadow': shouldShowBottomScrollShadow
      });
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", _extends({
        className: classes
      }, rest), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('scroll-wrap-container', "style--".concat(shadowSize)),
        onScroll: this.throttledOnContentScroll,
        ref: function ref(el) {
          _this2.scrollRef = el;
          scrollRefFn(el);
        }
      }, children));
    }
  }]);

  return ScrollWrapper;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(ScrollWrapper, "defaultProps", {
  scrollRefFn: lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
  shadowSize: 'cover'
});

/* harmony default export */ __webpack_exports__["default"] = (ScrollWrapper);
//# sourceMappingURL=ScrollWrapper.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/scroll-wrapper/ScrollWrapper.scss":
/*!**************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/scroll-wrapper/ScrollWrapper.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./ScrollWrapper.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/scroll-wrapper/ScrollWrapper.scss");

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

/***/ "./node_modules/box-ui-elements/es/components/scroll-wrapper/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/scroll-wrapper/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollWrapper */ "./node_modules/box-ui-elements/es/components/scroll-wrapper/ScrollWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ScrollWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/selector-dropdown/SelectorDropdown.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/selector-dropdown/SelectorDropdown.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/box-ui-elements/es/utils/dom.js");
/* harmony import */ var _scroll_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scroll-wrapper */ "./node_modules/box-ui-elements/es/components/scroll-wrapper/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _SelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectorDropdown.scss */ "./node_modules/box-ui-elements/es/components/selector-dropdown/SelectorDropdown.scss");
/* harmony import */ var _SelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_5__);
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









function stopDefaultEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

var SelectorDropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectorDropdown, _React$Component);

  function SelectorDropdown(props) {
    var _this;

    _classCallCheck(this, SelectorDropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectorDropdown).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setActiveItem", function (index) {
      _this.setState({
        activeItemIndex: index
      });

      if (index === -1) {
        _this.setActiveItemID(null);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setActiveItemID", function (id) {
      var scrollBoundarySelector = _this.props.scrollBoundarySelector;
      var itemEl = id ? document.getElementById(id) : null;
      var scrollOptions = {
        block: 'nearest'
      }; // Allow null in case we want to clear the default
      // boundary from scrollIntoView

      if (typeof scrollBoundarySelector !== 'undefined') {
        scrollOptions.boundary = document.querySelector(scrollBoundarySelector);
      }

      _this.setState({
        activeItemID: id
      }, function () {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["scrollIntoView"])(itemEl, scrollOptions);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "haveChildrenChanged", function (prevChildren) {
      var children = _this.props.children;
      var childrenCount = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).count(children);
      var prevChildrenCount = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).count(prevChildren);

      if (childrenCount !== prevChildrenCount) {
        return true;
      }

      if (childrenCount === 0) {
        return false;
      }

      var childrenKeys = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).map(children, function (child) {
        return child.key;
      });
      var prevChildrenKeys = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).map(prevChildren, function (child) {
        return child.key;
      });
      return childrenKeys.some(function (childKey, index) {
        return childKey !== prevChildrenKeys[index];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetActiveItem", function () {
      _this.setState({
        activeItemID: null,
        activeItemIndex: -1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.openDropdown();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (event) {
      var container = _this.selectorDropdownRef.current;
      var isInside = container && event.target instanceof Node && container.contains(event.target) || container === event.target;

      if (!isInside) {
        _this.closeDropdown();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function () {
      _this.openDropdown();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var _this$props = _this.props,
          children = _this$props.children,
          isAlwaysOpen = _this$props.isAlwaysOpen,
          onEnter = _this$props.onEnter;
      var activeItemIndex = _this.state.activeItemIndex;
      var childrenCount = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).count(children);

      switch (event.key) {
        case 'ArrowDown':
          if (_this.isDropdownOpen()) {
            if (childrenCount) {
              stopDefaultEvent(event);
            }

            var nextIndex = activeItemIndex === childrenCount - 1 ? -1 : activeItemIndex + 1;

            _this.setActiveItem(nextIndex);
          } else {
            _this.openDropdown();
          }

          break;

        case 'ArrowUp':
          if (_this.isDropdownOpen()) {
            if (childrenCount) {
              stopDefaultEvent(event);
            }

            var prevIndex = activeItemIndex === -1 ? childrenCount - 1 : activeItemIndex - 1;

            _this.setActiveItem(prevIndex);
          } else {
            _this.openDropdown();
          }

          break;

        case 'Enter':
          if (activeItemIndex !== -1 && _this.isDropdownOpen()) {
            stopDefaultEvent(event);

            _this.selectItem(activeItemIndex, event);
          } else if (onEnter) {
            onEnter(event);
          }

          break;

        case 'Tab':
          if (_this.isDropdownOpen()) {
            _this.closeDropdown();

            _this.resetActiveItem();
          }

          break;

        case 'Escape':
          if (!isAlwaysOpen && _this.isDropdownOpen()) {
            stopDefaultEvent(event);

            _this.closeDropdown();

            _this.resetActiveItem();
          }

          break;
        // no default
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isDropdownOpen", function () {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          isAlwaysOpen = _this$props2.isAlwaysOpen;
      var shouldOpen = _this.state.shouldOpen;
      var childrenCount = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).count(children);
      return childrenCount > 0 && (!!isAlwaysOpen || shouldOpen);
    });

    _defineProperty(_assertThisInitialized(_this), "openDropdown", function () {
      if (!_this.state.shouldOpen) {
        var shouldSetActiveItemOnOpen = _this.props.shouldSetActiveItemOnOpen;

        if (shouldSetActiveItemOnOpen) {
          _this.setActiveItem(0);
        }

        _this.setState({
          shouldOpen: true
        });

        document.addEventListener('click', _this.handleDocumentClick, true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeDropdown", function () {
      _this.setState({
        shouldOpen: false
      });

      document.removeEventListener('click', _this.handleDocumentClick, true);
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (index, event) {
      var onSelect = _this.props.onSelect;

      if (onSelect) {
        onSelect(index, event);
      }

      _this.closeDropdown();
    });

    _this.listboxID = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()('listbox');
    _this.state = {
      activeItemID: null,
      activeItemIndex: -1,
      shouldOpen: false
    };
    _this.selectorDropdownRef = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    return _this;
  }

  _createClass(SelectorDropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var shouldSetActiveItemOnOpen = _ref.shouldSetActiveItemOnOpen,
          children = _ref.children;

      if (this.haveChildrenChanged(children)) {
        // For UX purposes filtering the items is equivalent
        // to re-opening the dropdown. In such cases we highlight
        // the first item when configured to do so
        if (shouldSetActiveItemOnOpen) {
          this.setActiveItem(0);
        } else {
          this.resetActiveItem();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // just in case event listener was added during openDropdown() but the component
      // gets unmounted without closeDropdown()
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }, {
    key: "render",
    value: function render() {
      var listboxID = this.listboxID,
          selectItem = this.selectItem,
          setActiveItem = this.setActiveItem,
          setActiveItemID = this.setActiveItemID,
          _closeDropdown = this.closeDropdown;
      var _this$props3 = this.props,
          dividerIndex = _this$props3.dividerIndex,
          overlayTitle = _this$props3.overlayTitle,
          children = _this$props3.children,
          className = _this$props3.className,
          title = _this$props3.title,
          selector = _this$props3.selector,
          shouldScroll = _this$props3.shouldScroll;
      var _this$state = this.state,
          activeItemID = _this$state.activeItemID,
          activeItemIndex = _this$state.activeItemIndex;
      var isOpen = this.isDropdownOpen();
      var inputProps = {
        'aria-activedescendant': activeItemID,
        'aria-autocomplete': 'list',
        'aria-expanded': isOpen,
        role: 'combobox'
      };

      if (isOpen) {
        inputProps['aria-owns'] = listboxID;
      }

      var list = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("ul", {
        className: "overlay",
        id: listboxID,
        role: "listbox"
      }, overlayTitle && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h5", {
        className: "SelectorDropdown-title"
      }, overlayTitle), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).map(children, function (item, index) {
        var itemProps = {
          onClick: function onClick(event) {
            selectItem(index, event);
          },

          /* preventDefault on mousedown so blur doesn't happen before click */
          onMouseDown: function onMouseDown(event) {
            event.preventDefault();
          },
          onMouseEnter: function onMouseEnter() {
            setActiveItem(index);
          },
          closeDropdown: function closeDropdown() {
            _closeDropdown();
          },
          setActiveItemID: setActiveItemID
        };

        if (index === activeItemIndex) {
          itemProps.isActive = true;
        }

        var hasDivider = index === dividerIndex;
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, hasDivider && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("hr", {
          className: "SelectorDropdown-divider"
        }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(item, itemProps));
      })); // change onKeyPress/onPaste back to onInput when React fixes this IE11 bug: https://github.com/facebook/react/issues/7280
      // We're simulating the blur event with the tab key listener and the
      // click listener as a proxy because IE will trigger a blur when
      // using the scrollbar in the dropdown which indavertently closes the dropdown.

      return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
        !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
          className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('SelectorDropdown', className),
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown,
          onKeyPress: this.handleInput,
          onPaste: this.handleInput,
          ref: this.selectorDropdownRef
        }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(selector, {
          inputProps: inputProps
        }), isOpen && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
          className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_4__["OVERLAY_WRAPPER_CLASS"], " is-visible")
        }, title, shouldScroll ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_scroll_wrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null, list) : list))
      );
    }
  }]);

  return SelectorDropdown;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* harmony default export */ __webpack_exports__["default"] = (SelectorDropdown);
//# sourceMappingURL=SelectorDropdown.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/components/selector-dropdown/SelectorDropdown.scss":
/*!********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/selector-dropdown/SelectorDropdown.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./SelectorDropdown.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/selector-dropdown/SelectorDropdown.scss");

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

/***/ "./node_modules/box-ui-elements/es/components/selector-dropdown/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/selector-dropdown/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectorDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectorDropdown */ "./node_modules/box-ui-elements/es/components/selector-dropdown/SelectorDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SelectorDropdown__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/flyout/Flyout.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/flyout/Flyout.scss ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes flyout_overlay {\n  0% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 1;\n  }\n  100% {\n    transform: rotateY(0) rotateX(0);\n  }\n}\n@keyframes flyout_overlay {\n  0% {\n    opacity: 0;\n  }\n  60% {\n    opacity: 1;\n  }\n  100% {\n    transform: rotateY(0) rotateX(0);\n  }\n}\n@-webkit-keyframes flyout_overlay_top_right_aligned {\n  0% {\n    transform: rotateY(-10deg) rotateX(-10deg);\n  }\n}\n@keyframes flyout_overlay_top_right_aligned {\n  0% {\n    transform: rotateY(-10deg) rotateX(-10deg);\n  }\n}\n@-webkit-keyframes flyout_overlay_top_left_aligned {\n  0% {\n    transform: rotateY(10deg) rotateX(-10deg);\n  }\n}\n@keyframes flyout_overlay_top_left_aligned {\n  0% {\n    transform: rotateY(10deg) rotateX(-10deg);\n  }\n}\n@-webkit-keyframes flyout_overlay_top_center_aligned {\n  0% {\n    transform: rotateY(0) rotateX(-10deg);\n  }\n}\n@keyframes flyout_overlay_top_center_aligned {\n  0% {\n    transform: rotateY(0) rotateX(-10deg);\n  }\n}\n@-webkit-keyframes flyout_overlay_bottom_right_aligned {\n  0% {\n    transform: rotateY(10deg) rotateX(10deg);\n  }\n}\n@keyframes flyout_overlay_bottom_right_aligned {\n  0% {\n    transform: rotateY(10deg) rotateX(10deg);\n  }\n}\n@-webkit-keyframes flyout_overlay_bottom_left_aligned {\n  0% {\n    transform: rotateY(-10deg) rotateX(10deg);\n  }\n}\n@keyframes flyout_overlay_bottom_left_aligned {\n  0% {\n    transform: rotateY(-10deg) rotateX(10deg);\n  }\n}\n@-webkit-keyframes flyout_overlay_bottom_center_aligned {\n  0% {\n    transform: rotateY(0) rotateX(10deg);\n  }\n}\n@keyframes flyout_overlay_bottom_center_aligned {\n  0% {\n    transform: rotateY(0) rotateX(10deg);\n  }\n}\n@-webkit-keyframes flyout_overlay_middle_right_aligned {\n  0% {\n    transform: rotateY(10deg) rotateX(0);\n  }\n}\n@keyframes flyout_overlay_middle_right_aligned {\n  0% {\n    transform: rotateY(10deg) rotateX(0);\n  }\n}\n@-webkit-keyframes flyout_overlay_middle_left_aligned {\n  0% {\n    transform: rotateY(-10deg) rotateX(0);\n  }\n}\n@keyframes flyout_overlay_middle_left_aligned {\n  0% {\n    transform: rotateY(-10deg) rotateX(0);\n  }\n}\n@-webkit-keyframes flyout_overlay_middle_center_aligned {\n  0% {\n    transform: rotateY(0) rotateX(10deg);\n  }\n}\n@keyframes flyout_overlay_middle_center_aligned {\n  0% {\n    transform: rotateY(0) rotateX(10deg);\n  }\n}\n.flyout-overlay {\n  font-family: Lato, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  font-weight: normal;\n  font-size: 13px;\n  color: #222;\n  line-height: 20px;\n  letter-spacing: 0.3px;\n  z-index: 190;\n  box-sizing: border-box;\n}\n.flyout-overlay > div:not(.should-outline-focus):focus {\n  outline: none;\n}\n.flyout-overlay .overlay {\n  padding: 15px;\n  border-radius: 4px;\n}\n.flyout-overlay::before {\n  position: absolute;\n  z-index: 191;\n  border: 5px solid #fff;\n  box-shadow: 1px 1px 0 0 #bcbcbc;\n  content: \"\";\n}\n.flyout-overlay.flyout-overlay-target-attached-bottom.flyout-overlay-target-attached-left::before {\n  top: -3px;\n  left: 10px;\n  transform: rotate(225deg);\n}\n.flyout-overlay.flyout-overlay-target-attached-bottom.flyout-overlay-target-attached-left .overlay {\n  transform-origin: left top;\n  -webkit-animation: flyout_overlay 0.125s, flyout_overlay_top_left_aligned 0.125s;\n          animation: flyout_overlay 0.125s, flyout_overlay_top_left_aligned 0.125s;\n}\n.flyout-overlay.flyout-overlay-target-attached-bottom.flyout-overlay-target-attached-right::before {\n  top: -3px;\n  right: 10px;\n  transform: rotate(225deg);\n}\n.flyout-overlay.flyout-overlay-target-attached-bottom.flyout-overlay-target-attached-right .overlay {\n  transform-origin: right top;\n  -webkit-animation: flyout_overlay 0.125s, flyout_overlay_top_right_aligned 0.125s;\n          animation: flyout_overlay 0.125s, flyout_overlay_top_right_aligned 0.125s;\n}\n.flyout-overlay.flyout-overlay-target-attached-bottom.flyout-overlay-target-attached-center::before {\n  top: -3px;\n  left: 50%;\n  transform: rotate(225deg);\n}\n.flyout-overlay.flyout-overlay-target-attached-bottom.flyout-overlay-target-attached-center .overlay {\n  transform-origin: center top;\n  -webkit-animation: flyout_overlay 0.125s, flyout_overlay_top_center_aligned 0.125s;\n          animation: flyout_overlay 0.125s, flyout_overlay_top_center_aligned 0.125s;\n}\n.flyout-overlay.flyout-overlay-target-attached-top.flyout-overlay-target-attached-left::before {\n  bottom: -3px;\n  left: 10px;\n  transform: rotate(45deg);\n}\n.flyout-overlay.flyout-overlay-target-attached-top.flyout-overlay-target-attached-left .overlay {\n  transform-origin: left bottom;\n  -webkit-animation: flyout_overlay 0.125s, flyout_overlay_bottom_left_aligned 0.125s;\n          animation: flyout_overlay 0.125s, flyout_overlay_bottom_left_aligned 0.125s;\n}\n.flyout-overlay.flyout-overlay-target-attached-top.flyout-overlay-target-attached-right::before {\n  right: 10px;\n  bottom: -3px;\n  transform: rotate(45deg);\n}\n.flyout-overlay.flyout-overlay-target-attached-top.flyout-overlay-target-attached-right .overlay {\n  transform-origin: right bottom;\n  -webkit-animation: flyout_overlay 0.125s, flyout_overlay_bottom_right_aligned 0.125s;\n          animation: flyout_overlay 0.125s, flyout_overlay_bottom_right_aligned 0.125s;\n}\n.flyout-overlay.flyout-overlay-target-attached-top.flyout-overlay-target-attached-center::before {\n  bottom: -3px;\n  left: 50%;\n  transform: rotate(45deg);\n}\n.flyout-overlay.flyout-overlay-target-attached-top.flyout-overlay-target-attached-center .overlay {\n  transform-origin: center bottom;\n  -webkit-animation: flyout_overlay 0.125s, flyout_overlay_bottom_center_aligned 0.125s;\n          animation: flyout_overlay 0.125s, flyout_overlay_bottom_center_aligned 0.125s;\n}\n.flyout-overlay.flyout-overlay-target-attached-middle.flyout-overlay-target-attached-left::before {\n  top: 50%;\n  right: -3px;\n  margin-top: -5px;\n  transform: rotate(315deg);\n}\n.flyout-overlay.flyout-overlay-target-attached-middle.flyout-overlay-target-attached-left .overlay {\n  transform-origin: right center;\n  -webkit-animation: flyout_overlay 0.125s, flyout_overlay_middle_right_aligned 0.125s;\n          animation: flyout_overlay 0.125s, flyout_overlay_middle_right_aligned 0.125s;\n}\n.flyout-overlay.flyout-overlay-target-attached-middle.flyout-overlay-target-attached-right::before {\n  top: 50%;\n  left: -3px;\n  margin-top: -5px;\n  transform: rotate(135deg);\n}\n.flyout-overlay.flyout-overlay-target-attached-middle.flyout-overlay-target-attached-right .overlay {\n  transform-origin: left center;\n  -webkit-animation: flyout_overlay 0.125s, flyout_overlay_middle_left_aligned 0.125s;\n          animation: flyout_overlay 0.125s, flyout_overlay_middle_left_aligned 0.125s;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/scroll-wrapper/ScrollWrapper.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/scroll-wrapper/ScrollWrapper.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scroll-container {\n  position: relative;\n  display: flex;\n  flex-grow: 1;\n  height: 100%;\n  overflow: hidden;\n}\n.scroll-container .scroll-wrap-container {\n  flex-grow: 1;\n  overflow-y: auto;\n}\n.scroll-container .scroll-wrap-container::before, .scroll-container .scroll-wrap-container::after {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 30px;\n  border-radius: inherit;\n  opacity: 0;\n  transition: opacity 0.1s ease-in-out;\n  content: \"\";\n}\n.scroll-container .scroll-wrap-container::before {\n  top: -30px;\n  z-index: 20;\n  box-shadow: 0 15px 30px -12px rgba(0, 0, 0, 0.25);\n}\n.scroll-container .scroll-wrap-container::after {\n  bottom: -30px;\n  z-index: 30;\n  box-shadow: 0 -15px 30px -12px rgba(0, 0, 0, 0.25);\n}\n.scroll-container .scroll-wrap-container.style--cover::before, .scroll-container .scroll-wrap-container.style--cover::after {\n  width: 110%;\n  margin: 0 -5%;\n}\n.scroll-container .scroll-wrap-container.style--contain::before {\n  top: -40px;\n}\n.scroll-container .scroll-wrap-container.style--contain::after {\n  bottom: -40px;\n}\n.scroll-container.is-showing-top-shadow .scroll-wrap-container::before {\n  opacity: 1;\n}\n.scroll-container.is-showing-bottom-shadow .scroll-wrap-container::after {\n  opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/components/selector-dropdown/SelectorDropdown.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/components/selector-dropdown/SelectorDropdown.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**************************************\n * Selector Dropdown\n **************************************/\n.SelectorDropdown {\n  position: relative;\n  z-index: 3;\n  /* increase z-index based on max-height of dropdown wrapper */\n}\n.SelectorDropdown .overlay-wrapper,\n.SelectorDropdown .overlay {\n  display: block;\n  width: 100%;\n}\n.SelectorDropdown .overlay-wrapper .SelectorDropdown-divider,\n.SelectorDropdown .overlay .SelectorDropdown-divider {\n  display: block;\n  width: calc(100% - 30px);\n  height: 1px;\n  margin: 5px 15px;\n  border: 0;\n  border-bottom: 1px solid #bcbcbc;\n  pointer-events: none;\n}\n.SelectorDropdown .overlay-wrapper .SelectorDropdown-title,\n.SelectorDropdown .overlay .SelectorDropdown-title {\n  margin: 5px 15px;\n  color: #bcbcbc;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 1;\n  text-transform: uppercase;\n  pointer-events: none;\n}\n.SelectorDropdown .text-input-container {\n  margin-bottom: 5px;\n}\n.SelectorDropdown .link-group ul {\n  list-style: none;\n}\n.SelectorDropdown .link {\n  color: #4e4e4e !important;\n}\n.SelectorDropdown .link.is-selected {\n  background-color: rgba(34, 34, 34, 0.05);\n}", ""]);

// exports


/***/ })

}]);