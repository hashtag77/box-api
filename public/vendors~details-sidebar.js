(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~details-sidebar"],{

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

/***/ "./node_modules/box-ui-elements/es/components/collapsible/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/collapsible/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collapsible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapsible */ "./node_modules/box-ui-elements/es/components/collapsible/Collapsible.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Collapsible__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/DetailsSidebar.js":
/*!************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/DetailsSidebar.js ***!
  \************************************************************************************/
/*! exports provided: DetailsSidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsSidebarComponent", function() { return DetailsSidebar; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./node_modules/box-ui-elements/es/api/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _SidebarAccessStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SidebarAccessStats */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarAccessStats.js");
/* harmony import */ var _SidebarClassification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SidebarClassification */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarClassification.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SidebarContent */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _SidebarFileProperties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarFileProperties */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarFileProperties.js");
/* harmony import */ var _SidebarNotices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SidebarNotices */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarNotices.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarSection */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarSection.js");
/* harmony import */ var _SidebarVersions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SidebarVersions */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarVersions.js");
/* harmony import */ var _common_logger_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/logger/constants */ "./node_modules/box-ui-elements/es/elements/common/logger/constants.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/error */ "./node_modules/box-ui-elements/es/utils/error.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/performance */ "./node_modules/box-ui-elements/es/utils/performance.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _utils_fields__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/fields */ "./node_modules/box-ui-elements/es/utils/fields.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/api-context */ "./node_modules/box-ui-elements/es/elements/common/api-context/index.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/error-boundary */ "./node_modules/box-ui-elements/es/elements/common/error-boundary/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/logger */ "./node_modules/box-ui-elements/es/elements/common/logger/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _DetailsSidebar_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./DetailsSidebar.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/DetailsSidebar.scss");
/* harmony import */ var _DetailsSidebar_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_DetailsSidebar_scss__WEBPACK_IMPORTED_MODULE_22__);
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
 * @file Details sidebar component
 * @author Box
 */
























var MARK_NAME_JS_READY = "".concat(_constants__WEBPACK_IMPORTED_MODULE_21__["ORIGIN_DETAILS_SIDEBAR"], "_").concat(_common_logger_constants__WEBPACK_IMPORTED_MODULE_13__["EVENT_JS_READY"]);
Object(_utils_performance__WEBPACK_IMPORTED_MODULE_15__["mark"])(MARK_NAME_JS_READY);

var DetailsSidebar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DetailsSidebar, _React$PureComponent);

  function DetailsSidebar(props) {
    var _this;

    _classCallCheck(this, DetailsSidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DetailsSidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "descriptionChangeSuccessCallback", function (file) {
      _this.setState({
        file: file,
        fileError: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFileSuccessCallback", function (file) {
      _this.setState({
        file: file,
        fileError: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFileErrorCallback", function (e, code) {
      // TODO: handle the error properly (probably with maskError) once files call split out
      _this.setState({
        file: undefined
      });

      _this.props.onError(e, code, {
        e: e
      });
    });

    _defineProperty(_assertThisInitialized(_this), "descriptionChangeErrorCallback", function (file) {
      // Reset the state back to the original description since the API call failed
      _this.setState({
        file: file,
        fileError: {
          inlineError: {
            title: _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].fileDescriptionInlineErrorTitleMessage,
            content: _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].defaultInlineErrorContentMessage
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDescriptionChange", function (newDescription) {
      var api = _this.props.api;
      var file = _this.state.file;

      if (!file) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_14__["getBadItemError"])();
      }

      var description = file.description;

      if (newDescription === description) {
        return;
      }

      api.getFileAPI().setFileDescription(file, newDescription, _this.descriptionChangeSuccessCallback, _this.descriptionChangeErrorCallback);
    });

    _defineProperty(_assertThisInitialized(_this), "fetchAccessStatsErrorCallback", function (e, code) {
      if (!_this.props.hasAccessStats) {
        return;
      }

      var isForbidden = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(e, 'status') === _constants__WEBPACK_IMPORTED_MODULE_21__["HTTP_STATUS_CODE_FORBIDDEN"];
      var accessStatsError;

      if (isForbidden) {
        accessStatsError = {
          error: _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].fileAccessStatsPermissionsError
        };
      } else {
        accessStatsError = {
          maskError: {
            errorHeader: _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].fileAccessStatsErrorHeaderMessage,
            errorSubHeader: _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].defaultErrorMaskSubHeaderMessage
          }
        };
      }

      _this.setState({
        isLoadingAccessStats: false,
        accessStats: undefined,
        accessStatsError: accessStatsError
      });

      _this.props.onError(e, code, _defineProperty({
        e: e
      }, _constants__WEBPACK_IMPORTED_MODULE_21__["IS_ERROR_DISPLAYED"], !isForbidden));
    });

    _defineProperty(_assertThisInitialized(_this), "fetchAccessStatsSuccessCallback", function (accessStats) {
      if (!_this.props.hasAccessStats) {
        return;
      }

      _this.setState({
        accessStats: accessStats,
        accessStatsError: undefined,
        isLoadingAccessStats: false
      });
    });

    _this.state = {
      isLoadingAccessStats: false
    };
    var logger = _this.props.logger;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
    return _this;
  }

  _createClass(DetailsSidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchFile();

      if (this.props.hasAccessStats) {
        this.fetchAccessStats();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevHasAccessStats = _ref.hasAccessStats;
      var hasAccessStats = this.props.hasAccessStats; // Component visibility props such as hasAccessStats can sometimes be flipped after an async call

      var hasAccessStatsChanged = prevHasAccessStats !== hasAccessStats;

      if (hasAccessStatsChanged) {
        if (hasAccessStats) {
          this.fetchAccessStats();
        } else {
          this.setState({
            isLoadingAccessStats: false,
            accessStats: undefined,
            accessStatsError: undefined
          });
        }
      }
    }
    /**
     * File description update callback
     *
     * @private
     * @param {BoxItem} file - Updated file object
     * @return {void}
     */

  }, {
    key: "fetchFile",

    /**
     * Fetches a file with the fields needed for details sidebar
     *
     * @param {Function} successCallback - the success callback
     * @param {Function} errorCallback - the error callback
     * @return {void}
     */
    value: function fetchFile() {
      var successCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.fetchFileSuccessCallback;
      var errorCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.fetchFileErrorCallback;
      var _this$props = this.props,
          api = _this$props.api,
          fileId = _this$props.fileId;
      api.getFileAPI().getFile(fileId, successCallback, errorCallback, {
        fields: _utils_fields__WEBPACK_IMPORTED_MODULE_17__["SIDEBAR_FIELDS_TO_FETCH"] // TODO: replace this with DETAILS_SIDEBAR_FIELDS_TO_FETCH as we do not need all the sidebar fields

      });
    }
    /**
     * Handles a successful file fetch
     *
     * @param {Object} file - the box file
     * @return {void}
     */

  }, {
    key: "fetchAccessStats",

    /**
     * Fetches the access stats for a file
     *
     * @private
     * @return {void}
     */
    value: function fetchAccessStats() {
      var _this$props2 = this.props,
          api = _this$props2.api,
          fileId = _this$props2.fileId;
      var isLoadingAccessStats = this.state.isLoadingAccessStats;

      if (isLoadingAccessStats) {
        return;
      }

      this.setState({
        isLoadingAccessStats: true
      });
      api.getFileAccessStatsAPI(false).getFileAccessStats(fileId, this.fetchAccessStatsSuccessCallback, this.fetchAccessStatsErrorCallback);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.fetchAccessStats();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          classification = _this$props3.classification,
          elementId = _this$props3.elementId,
          hasProperties = _this$props3.hasProperties,
          hasNotices = _this$props3.hasNotices,
          hasAccessStats = _this$props3.hasAccessStats,
          hasClassification = _this$props3.hasClassification,
          hasRetentionPolicy = _this$props3.hasRetentionPolicy,
          hasVersions = _this$props3.hasVersions,
          onAccessStatsClick = _this$props3.onAccessStatsClick,
          onVersionHistoryClick = _this$props3.onVersionHistoryClick,
          onClassificationClick = _this$props3.onClassificationClick,
          onRetentionPolicyExtendClick = _this$props3.onRetentionPolicyExtendClick,
          retentionPolicy = _this$props3.retentionPolicy;
      var _this$state = this.state,
          accessStats = _this$state.accessStats,
          accessStatsError = _this$state.accessStatsError,
          file = _this$state.file,
          fileError = _this$state.fileError,
          isLoadingAccessStats = _this$state.isLoadingAccessStats; // TODO: Add loading indicator and handle errors once file call is split out

      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_SidebarContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "bcs-details",
        elementId: elementId,
        sidebarView: _constants__WEBPACK_IMPORTED_MODULE_21__["SIDEBAR_VIEW_DETAILS"],
        title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].sidebarDetailsTitle)
      }, file && hasNotices && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
        className: "bcs-DetailsSidebar-notices"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_SidebarNotices__WEBPACK_IMPORTED_MODULE_10__["default"], {
        file: file
      })), file && hasClassification && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_SidebarClassification__WEBPACK_IMPORTED_MODULE_7__["default"], {
        classification: classification,
        file: file,
        onEdit: onClassificationClick
      }), file && hasAccessStats && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_SidebarAccessStats__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
        accessStats: accessStats,
        file: file,
        onAccessStatsClick: onAccessStatsClick
      }, accessStatsError)), file && hasProperties && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_SidebarSection__WEBPACK_IMPORTED_MODULE_11__["default"], {
        interactionTarget: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_16__["SECTION_TARGETS"].FILE_PROPERTIES,
        title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].sidebarProperties)
      }, hasVersions && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_SidebarVersions__WEBPACK_IMPORTED_MODULE_12__["default"], {
        file: file,
        onVersionHistoryClick: onVersionHistoryClick
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_SidebarFileProperties__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
        file: file,
        onDescriptionChange: this.onDescriptionChange
      }, fileError, {
        hasRetentionPolicy: hasRetentionPolicy,
        isLoading: isLoadingAccessStats,
        onRetentionPolicyExtendClick: onRetentionPolicyExtendClick,
        retentionPolicy: retentionPolicy
      }))));
    }
  }]);

  return DetailsSidebar;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).PureComponent);

_defineProperty(DetailsSidebar, "defaultProps", {
  hasNotices: false,
  hasProperties: false,
  hasAccessStats: false,
  hasClassification: false,
  hasRetentionPolicy: false,
  hasVersions: false,
  onError: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_1___default()([Object(_common_logger__WEBPACK_IMPORTED_MODULE_20__["withLogger"])(_constants__WEBPACK_IMPORTED_MODULE_21__["ORIGIN_DETAILS_SIDEBAR"]), Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_19__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_21__["ORIGIN_DETAILS_SIDEBAR"]), _common_api_context__WEBPACK_IMPORTED_MODULE_18__["withAPIContext"]])(DetailsSidebar));
//# sourceMappingURL=DetailsSidebar.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/DetailsSidebar.scss":
/*!**************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/DetailsSidebar.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./DetailsSidebar.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/DetailsSidebar.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarAccessStats.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarAccessStats.js ***!
  \****************************************************************************************/
/*! exports provided: SidebarAccessStatsComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAccessStatsComponent", function() { return SidebarAccessStats; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_isFinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFinite */ "./node_modules/lodash/isFinite.js");
/* harmony import */ var lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFinite__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _features_access_stats_AccessStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/access-stats/AccessStats */ "./node_modules/box-ui-elements/es/features/access-stats/AccessStats.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/file */ "./node_modules/box-ui-elements/es/utils/file.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SidebarSection */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarSection.js");
/* harmony import */ var _withErrorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withErrorHandling */ "./node_modules/box-ui-elements/es/elements/content-sidebar/withErrorHandling.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions sidebar component
 * @author Box
 */










var SidebarAccessStats = function SidebarAccessStats(_ref) {
  var onAccessStatsClick = _ref.onAccessStatsClick,
      _ref$accessStats = _ref.accessStats,
      accessStats = _ref$accessStats === void 0 ? {
    has_count_overflowed: false
  } : _ref$accessStats,
      file = _ref.file,
      error = _ref.error,
      intl = _ref.intl;
  var preview_count = accessStats.preview_count,
      comment_count = accessStats.comment_count,
      download_count = accessStats.download_count,
      edit_count = accessStats.edit_count;

  if (!lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(preview_count) && !lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(comment_count) && !lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(download_count) && !lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(edit_count) && !error) {
    return null;
  }

  var errorMessage = error ? intl.formatMessage(error) : undefined;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_SidebarSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
    interactionTarget: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["SECTION_TARGETS"].ACCESS_STATS,
    title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarAccessStats)
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_features_access_stats_AccessStats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errorMessage: errorMessage,
    commentCount: comment_count,
    commentStatButtonProps: _defineProperty({}, _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_TARGET"], _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["DETAILS_TARGETS"].ACCESS_STATS.COMMENTS),
    downloadCount: download_count,
    downloadStatButtonProps: _defineProperty({}, _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_TARGET"], _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["DETAILS_TARGETS"].ACCESS_STATS.DOWNLOADS),
    previewCount: preview_count,
    previewStatButtonProps: _defineProperty({}, _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_TARGET"], _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["DETAILS_TARGETS"].ACCESS_STATS.PREVIEWS),
    viewStatButtonProps: _defineProperty({}, _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_TARGET"], _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["DETAILS_TARGETS"].ACCESS_STATS.VIEWS),
    editCount: edit_count,
    editStatButtonProps: _defineProperty({}, _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_TARGET"], _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["DETAILS_TARGETS"].ACCESS_STATS.EDITS),
    openAccessStatsModal: onAccessStatsClick,
    isBoxNote: Object(_utils_file__WEBPACK_IMPORTED_MODULE_5__["isBoxNote"])(file),
    viewMoreButtonProps: _defineProperty({}, _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_TARGET"], _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["DETAILS_TARGETS"].ACCESS_STATS.VIEW_DETAILS)
  }));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_withErrorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(SidebarAccessStats)));
//# sourceMappingURL=SidebarAccessStats.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarClassification.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarClassification.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _features_classification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/classification */ "./node_modules/box-ui-elements/es/features/classification/index.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _components_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/collapsible */ "./node_modules/box-ui-elements/es/components/collapsible/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _SidebarClassification_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SidebarClassification.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarClassification.scss");
/* harmony import */ var _SidebarClassification_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SidebarClassification_scss__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Classification sidebar component
 * @author Box
 */









var SidebarClassification = function SidebarClassification(_ref) {
  var classification = _ref.classification,
      file = _ref.file,
      onEdit = _ref.onEdit;
  var isEditable = !!onEdit && lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, _constants__WEBPACK_IMPORTED_MODULE_5__["FIELD_PERMISSIONS_CAN_UPLOAD"], false);
  var hasClassification = !!lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(classification, 'name');

  if (!hasClassification && !isEditable) {
    return null;
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"], {
    buttonProps: _defineProperty({}, _common_interactionTargets__WEBPACK_IMPORTED_MODULE_3__["INTERACTION_TARGET"], _common_interactionTargets__WEBPACK_IMPORTED_MODULE_3__["SECTION_TARGETS"].CLASSIFICATION),
    className: "bcs-SidebarClassification",
    headerActionItems: isEditable ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_features_classification__WEBPACK_IMPORTED_MODULE_2__["EditClassificationButton"], {
      className: "bcs-SidebarClassification-edit",
      isEditing: hasClassification,
      onEdit: onEdit
    }) : null,
    title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _features_classification__WEBPACK_IMPORTED_MODULE_2__["classificationMessages"].classification)
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_features_classification__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, classification, {
    messageStyle: "inline"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarClassification);
//# sourceMappingURL=SidebarClassification.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarClassification.scss":
/*!*********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarClassification.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./SidebarClassification.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarClassification.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarFileProperties.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarFileProperties.js ***!
  \*******************************************************************************************/
/*! exports provided: SidebarFilePropertiesComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarFilePropertiesComponent", function() { return SidebarFileProperties; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _features_item_details_ItemProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/item-details/ItemProperties */ "./node_modules/box-ui-elements/es/features/item-details/ItemProperties.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicatorWrapper */ "./node_modules/box-ui-elements/es/components/loading-indicator/LoadingIndicatorWrapper.js");
/* harmony import */ var _utils_getFileSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/getFileSize */ "./node_modules/box-ui-elements/es/utils/getFileSize.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _withErrorHandling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withErrorHandling */ "./node_modules/box-ui-elements/es/elements/content-sidebar/withErrorHandling.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Sidebar file properties component
 * @author Box
 */









var SidebarFileProperties = function SidebarFileProperties(_ref) {
  var file = _ref.file,
      onDescriptionChange = _ref.onDescriptionChange,
      hasRetentionPolicy = _ref.hasRetentionPolicy,
      retentionPolicy = _ref.retentionPolicy,
      onRetentionPolicyExtendClick = _ref.onRetentionPolicyExtendClick,
      isLoading = _ref.isLoading,
      intl = _ref.intl;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isLoading: isLoading
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_features_item_details_ItemProperties__WEBPACK_IMPORTED_MODULE_2__["default"], {
    createdAt: file.content_created_at,
    description: file.description,
    descriptionTextareaProps: _defineProperty({}, _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"], _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].DESCRIPTION),
    modifiedAt: file.content_modified_at,
    onDescriptionChange: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'permissions.can_rename') ? onDescriptionChange : undefined,
    owner: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'owned_by.name'),
    retentionPolicyProps: hasRetentionPolicy ? _objectSpread({}, retentionPolicy, {
      openModal: onRetentionPolicyExtendClick
    }) : {},
    size: Object(_utils_getFileSize__WEBPACK_IMPORTED_MODULE_4__["default"])(file.size, intl.locale),
    uploader: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'created_by.name')
  }));
};


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(_withErrorHandling__WEBPACK_IMPORTED_MODULE_6__["default"])(SidebarFileProperties)));
//# sourceMappingURL=SidebarFileProperties.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarNotices.js":
/*!************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarNotices.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_item_details_SharedLinkExpirationNotice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/item-details/SharedLinkExpirationNotice */ "./node_modules/box-ui-elements/es/features/item-details/SharedLinkExpirationNotice.js");
/* harmony import */ var _features_item_details_ItemExpirationNotice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/item-details/ItemExpirationNotice */ "./node_modules/box-ui-elements/es/features/item-details/ItemExpirationNotice.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/datetime */ "./node_modules/box-ui-elements/es/utils/datetime.js");
/* harmony import */ var _common_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/date */ "./node_modules/box-ui-elements/es/elements/common/date/index.js");
/**
 * 
 * @file Preview details sidebar notices component
 * @author Box
 */






var ONE_MINUTE_IN_MS = 60000;
var NOTICE_DATE_FORMAT = {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
};

var SidebarNotices = function SidebarNotices(_ref) {
  var file = _ref.file;
  var itemExpiration = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'expires_at');
  var sharedLinkExpiration = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'shared_link.unshared_at');

  if (!itemExpiration && !sharedLinkExpiration) {
    return null;
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, !!itemExpiration && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_features_item_details_ItemExpirationNotice__WEBPACK_IMPORTED_MODULE_3__["default"], {
    expiration: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_date__WEBPACK_IMPORTED_MODULE_5__["default"], {
      date: Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_4__["addTime"])(new Date(itemExpiration), ONE_MINUTE_IN_MS),
      dateFormat: NOTICE_DATE_FORMAT,
      relative: false
    }),
    itemType: "file"
  }), !!sharedLinkExpiration && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_features_item_details_SharedLinkExpirationNotice__WEBPACK_IMPORTED_MODULE_2__["default"], {
    expiration: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_date__WEBPACK_IMPORTED_MODULE_5__["default"], {
      date: Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_4__["addTime"])(new Date(sharedLinkExpiration), ONE_MINUTE_IN_MS),
      dateFormat: NOTICE_DATE_FORMAT,
      relative: false
    })
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarNotices);
//# sourceMappingURL=SidebarNotices.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarVersions.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarVersions.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _features_item_details_VersionHistoryLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/item-details/VersionHistoryLink */ "./node_modules/box-ui-elements/es/features/item-details/VersionHistoryLink.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/file */ "./node_modules/box-ui-elements/es/utils/file.js");
/* harmony import */ var _SidebarVersions_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarVersions.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarVersions.scss");
/* harmony import */ var _SidebarVersions_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SidebarVersions_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * 
 * @file Versions sidebar component
 * @author Box
 */






var SidebarVersions = function SidebarVersions(_ref) {
  var onVersionHistoryClick = _ref.onVersionHistoryClick,
      file = _ref.file;
  var version_number = file.version_number;
  var versionNumber = parseInt(version_number, 10);

  if (Object(_utils_file__WEBPACK_IMPORTED_MODULE_3__["isBoxNote"])(file) || !versionNumber || versionNumber <= 1) {
    return null;
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_features_item_details_VersionHistoryLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bcs-SidebarVersions",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["DETAILS_TARGETS"].VERSION_HISTORY,
    onClick: onVersionHistoryClick,
    versionCount: versionNumber
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarVersions);
//# sourceMappingURL=SidebarVersions.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarVersions.scss":
/*!***************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarVersions.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./SidebarVersions.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarVersions.scss");

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

/***/ "./node_modules/box-ui-elements/es/features/access-stats/AccessStats.js":
/*!******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/access-stats/AccessStats.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./node_modules/box-ui-elements/es/components/plain-button/PlainButton.js");
/* harmony import */ var _AccessStatsItemsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccessStatsItemsList */ "./node_modules/box-ui-elements/es/features/access-stats/AccessStatsItemsList.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/access-stats/messages.js");
/* harmony import */ var _AccessStats_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccessStats.scss */ "./node_modules/box-ui-elements/es/features/access-stats/AccessStats.scss");
/* harmony import */ var _AccessStats_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AccessStats_scss__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var AccessStats = function AccessStats(_ref) {
  var _ref$commentCount = _ref.commentCount,
      commentCount = _ref$commentCount === void 0 ? 0 : _ref$commentCount,
      _ref$commentStatButto = _ref.commentStatButtonProps,
      commentStatButtonProps = _ref$commentStatButto === void 0 ? {} : _ref$commentStatButto,
      _ref$downloadCount = _ref.downloadCount,
      downloadCount = _ref$downloadCount === void 0 ? 0 : _ref$downloadCount,
      _ref$downloadStatButt = _ref.downloadStatButtonProps,
      downloadStatButtonProps = _ref$downloadStatButt === void 0 ? {} : _ref$downloadStatButt,
      _ref$editCount = _ref.editCount,
      editCount = _ref$editCount === void 0 ? 0 : _ref$editCount,
      _ref$editStatButtonPr = _ref.editStatButtonProps,
      editStatButtonProps = _ref$editStatButtonPr === void 0 ? {} : _ref$editStatButtonPr,
      errorMessage = _ref.errorMessage,
      _ref$hasCountOverflow = _ref.hasCountOverflowed,
      hasCountOverflowed = _ref$hasCountOverflow === void 0 ? false : _ref$hasCountOverflow,
      _ref$isBoxNote = _ref.isBoxNote,
      isBoxNote = _ref$isBoxNote === void 0 ? false : _ref$isBoxNote,
      openAccessStatsModal = _ref.openAccessStatsModal,
      _ref$previewCount = _ref.previewCount,
      previewCount = _ref$previewCount === void 0 ? 0 : _ref$previewCount,
      _ref$previewStatButto = _ref.previewStatButtonProps,
      previewStatButtonProps = _ref$previewStatButto === void 0 ? {} : _ref$previewStatButto,
      _ref$viewMoreButtonPr = _ref.viewMoreButtonProps,
      viewMoreButtonProps = _ref$viewMoreButtonPr === void 0 ? {} : _ref$viewMoreButtonPr,
      _ref$viewStatButtonPr = _ref.viewStatButtonProps,
      viewStatButtonProps = _ref$viewStatButtonPr === void 0 ? {} : _ref$viewStatButtonPr;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "access-stats"
  }, errorMessage ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", null, errorMessage) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AccessStatsItemsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    commentCount: commentCount,
    commentStatButtonProps: commentStatButtonProps,
    downloadCount: downloadCount,
    downloadStatButtonProps: downloadStatButtonProps,
    editCount: editCount,
    editStatButtonProps: editStatButtonProps,
    hasCountOverflowed: hasCountOverflowed,
    isBoxNote: isBoxNote,
    openAccessStatsModal: openAccessStatsModal,
    previewCount: previewCount,
    previewStatButtonProps: previewStatButtonProps,
    viewStatButtonProps: viewStatButtonProps
  }), openAccessStatsModal && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: "lnk access-stats-view-details",
    onClick: openAccessStatsModal
  }, viewMoreButtonProps), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_3__["default"].accessStatsViewDetails))));
};

/* harmony default export */ __webpack_exports__["default"] = (AccessStats);
//# sourceMappingURL=AccessStats.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/access-stats/AccessStats.scss":
/*!********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/access-stats/AccessStats.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./AccessStats.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/access-stats/AccessStats.scss");

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

/***/ "./node_modules/box-ui-elements/es/features/access-stats/AccessStatsItem.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/access-stats/AccessStatsItem.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./node_modules/box-ui-elements/es/components/plain-button/PlainButton.js");
/* harmony import */ var _icons_general_IconEye__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/general/IconEye */ "./node_modules/box-ui-elements/es/icons/general/IconEye.js");
/* harmony import */ var _icons_general_IconComment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconComment */ "./node_modules/box-ui-elements/es/icons/general/IconComment.js");
/* harmony import */ var _icons_general_IconDownloadSolid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/general/IconDownloadSolid */ "./node_modules/box-ui-elements/es/icons/general/IconDownloadSolid.js");
/* harmony import */ var _icons_general_IconPencilSolid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/general/IconPencilSolid */ "./node_modules/box-ui-elements/es/icons/general/IconPencilSolid.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/access-stats/messages.js");
/* harmony import */ var _AccessStatsItem_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AccessStatsItem.scss */ "./node_modules/box-ui-elements/es/features/access-stats/AccessStatsItem.scss");
/* harmony import */ var _AccessStatsItem_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_AccessStatsItem_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var statsAttributesTable = {
  preview: {
    icon: _icons_general_IconEye__WEBPACK_IMPORTED_MODULE_2__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_6__["default"].accessStatsPreviews
  },
  view: {
    icon: _icons_general_IconEye__WEBPACK_IMPORTED_MODULE_2__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_6__["default"].accessStatsViews
  },
  download: {
    icon: _icons_general_IconDownloadSolid__WEBPACK_IMPORTED_MODULE_4__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_6__["default"].accessStatsDownloads
  },
  comment: {
    icon: _icons_general_IconComment__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_6__["default"].accessStatsComments
  },
  edit: {
    icon: _icons_general_IconPencilSolid__WEBPACK_IMPORTED_MODULE_5__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_6__["default"].accessStatsEdits
  }
};
var ICON_COLOR = '#2a62b9';
var ITEM_CONTENT_CLASS_NAME = 'access-stats-item-content';

var AccessStatsItem = function AccessStatsItem(_ref) {
  var type = _ref.type,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 0 : _ref$count,
      _ref$hasCountOverflow = _ref.hasCountOverflowed,
      hasCountOverflowed = _ref$hasCountOverflow === void 0 ? false : _ref$hasCountOverflow,
      openAccessStatsModal = _ref.openAccessStatsModal,
      statButtonProps = _ref.statButtonProps;
  var statAttributes = statsAttributesTable[type];
  var IconComponent = statAttributes.icon;
  var labelMessage = statAttributes.message;
  var itemContent = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(IconComponent, {
    color: ICON_COLOR,
    height: 10,
    width: 14
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "access-stats-label"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), labelMessage)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    value: count
  }), hasCountOverflowed && '+');
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("li", {
    className: "access-stats-item"
  }, openAccessStatsModal ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: ITEM_CONTENT_CLASS_NAME,
    onClick: openAccessStatsModal
  }, statButtonProps), itemContent) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: ITEM_CONTENT_CLASS_NAME
  }, itemContent));
};

/* harmony default export */ __webpack_exports__["default"] = (AccessStatsItem);
//# sourceMappingURL=AccessStatsItem.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/access-stats/AccessStatsItem.scss":
/*!************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/access-stats/AccessStatsItem.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./AccessStatsItem.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/access-stats/AccessStatsItem.scss");

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

/***/ "./node_modules/box-ui-elements/es/features/access-stats/AccessStatsItemsList.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/access-stats/AccessStatsItemsList.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessStatsItem */ "./node_modules/box-ui-elements/es/features/access-stats/AccessStatsItem.js");



var AccessStatsItemsList = function AccessStatsItemsList(_ref) {
  var commentCount = _ref.commentCount,
      commentStatButtonProps = _ref.commentStatButtonProps,
      downloadCount = _ref.downloadCount,
      downloadStatButtonProps = _ref.downloadStatButtonProps,
      editCount = _ref.editCount,
      editStatButtonProps = _ref.editStatButtonProps,
      _ref$hasCountOverflow = _ref.hasCountOverflowed,
      hasCountOverflowed = _ref$hasCountOverflow === void 0 ? false : _ref$hasCountOverflow,
      isBoxNote = _ref.isBoxNote,
      openAccessStatsModal = _ref.openAccessStatsModal,
      previewCount = _ref.previewCount,
      previewStatButtonProps = _ref.previewStatButtonProps,
      viewStatButtonProps = _ref.viewStatButtonProps;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("ul", {
    className: "access-stats-list"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: previewCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: isBoxNote ? viewStatButtonProps : previewStatButtonProps,
    type: isBoxNote ? 'view' : 'preview'
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: editCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: editStatButtonProps,
    type: "edit"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: commentCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: commentStatButtonProps,
    type: "comment"
  }), !isBoxNote && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: downloadCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: downloadStatButtonProps,
    type: "download"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AccessStatsItemsList);
//# sourceMappingURL=AccessStatsItemsList.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/access-stats/messages.js":
/*!***************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/access-stats/messages.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  accessStatsViewDetails: {
    "id": "boxui.accessStats.accessStatsViewDetails",
    "defaultMessage": "View Details"
  },
  accessStatsViews: {
    "id": "boxui.accessStats.accessStatsViews",
    "defaultMessage": "Views"
  },
  accessStatsPreviews: {
    "id": "boxui.accessStats.accessStatsPreviews",
    "defaultMessage": "Previews"
  },
  accessStatsEdits: {
    "id": "boxui.accessStats.accessStatsEdits",
    "defaultMessage": "Edits"
  },
  accessStatsComments: {
    "id": "boxui.accessStats.accessStatsComments",
    "defaultMessage": "Comments"
  },
  accessStatsDownloads: {
    "id": "boxui.accessStats.accessStatsDownloads",
    "defaultMessage": "Downloads"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/classification/Classification.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/classification/Classification.js ***!
  \***********************************************************************************/
/*! exports provided: STYLE_INLINE, STYLE_TOOLTIP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_INLINE", function() { return STYLE_INLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_TOOLTIP", function() { return STYLE_TOOLTIP; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_label_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/label/Label */ "./node_modules/box-ui-elements/es/components/label/Label.js");
/* harmony import */ var _ClassifiedBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClassifiedBadge */ "./node_modules/box-ui-elements/es/features/classification/ClassifiedBadge.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/classification/messages.js");
/* harmony import */ var _Classification_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Classification.scss */ "./node_modules/box-ui-elements/es/features/classification/Classification.scss");
/* harmony import */ var _Classification_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Classification_scss__WEBPACK_IMPORTED_MODULE_4__);






var STYLE_INLINE = 'inline';
var STYLE_TOOLTIP = 'tooltip';

var Classification = function Classification(_ref) {
  var definition = _ref.definition,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      messageStyle = _ref.messageStyle,
      name = _ref.name,
      onClick = _ref.onClick;
  var isClassified = !!name;
  var hasDefinition = !!definition;
  var isTooltipMessageEnabled = isClassified && hasDefinition && messageStyle === STYLE_TOOLTIP;
  var isInlineMessageEnabled = isClassified && hasDefinition && messageStyle === STYLE_INLINE;
  var isNotClassifiedMessageVisible = !isClassified && messageStyle === STYLE_INLINE;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("article", {
    className: "bdl-Classification ".concat(className)
  }, isClassified && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ClassifiedBadge__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: name,
    onClick: onClick,
    tooltipText: isTooltipMessageEnabled ? definition : undefined
  }), isInlineMessageEnabled && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_label_Label__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_3__["default"].definition)
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", {
    className: "bdl-Classification-definition"
  }, definition)), isNotClassifiedMessageVisible && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "bdl-Classification-missingMessage"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_3__["default"].missing)));
};


/* harmony default export */ __webpack_exports__["default"] = (Classification);
//# sourceMappingURL=Classification.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/classification/Classification.scss":
/*!*************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/classification/Classification.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./Classification.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/classification/Classification.scss");

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

/***/ "./node_modules/box-ui-elements/es/features/classification/ClassifiedBadge.js":
/*!************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/classification/ClassifiedBadge.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/index.js");
/* harmony import */ var _icons_general_IconSecurityClassification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconSecurityClassification */ "./node_modules/box-ui-elements/es/icons/general/IconSecurityClassification.js");
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security */ "./node_modules/box-ui-elements/es/features/security/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");
/* harmony import */ var _ClassifiedBadge_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClassifiedBadge.scss */ "./node_modules/box-ui-elements/es/features/classification/ClassifiedBadge.scss");
/* harmony import */ var _ClassifiedBadge_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ClassifiedBadge_scss__WEBPACK_IMPORTED_MODULE_6__);








var ClassifiedBadge = function ClassifiedBadge(_ref) {
  var name = _ref.name,
      onClick = _ref.onClick,
      _ref$tooltipPosition = _ref.tooltipPosition,
      tooltipPosition = _ref$tooltipPosition === void 0 ? 'bottom-center' : _ref$tooltipPosition,
      tooltipText = _ref.tooltipText;
  var isClickable = typeof onClick === 'function';
  var isTooltipDisabled = !tooltipText;
  var badge = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_security__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "bdl-ClassifiedBadge",
    icon: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconSecurityClassification__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_5__["bdlYellorange"],
      height: 10,
      width: 10,
      strokeWidth: 3
    }),
    message: name
  });
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isDisabled: isTooltipDisabled,
    isTabbable: false,
    position: tooltipPosition,
    text: tooltipText
  }, isClickable ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bdl-ClassifiedBadge-editButton",
    "data-resin-target": "editclassification",
    onClick: onClick,
    type: "button"
  }, badge) : badge);
};

/* harmony default export */ __webpack_exports__["default"] = (ClassifiedBadge);
//# sourceMappingURL=ClassifiedBadge.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/classification/ClassifiedBadge.scss":
/*!**************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/classification/ClassifiedBadge.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./ClassifiedBadge.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/classification/ClassifiedBadge.scss");

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

/***/ "./node_modules/box-ui-elements/es/features/classification/EditClassificationButton.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/classification/EditClassificationButton.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/classification/messages.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./node_modules/box-ui-elements/es/components/plain-button/PlainButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Classification add/edit button
 * @author Box
 */





var EditClassificationButton = function EditClassificationButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      isEditing = _ref.isEditing,
      onEdit = _ref.onEdit,
      rest = _objectWithoutProperties(_ref, ["className", "isEditing", "onEdit"]);

  var message = isEditing ? _messages__WEBPACK_IMPORTED_MODULE_1__["default"].edit : _messages__WEBPACK_IMPORTED_MODULE_1__["default"].add;
  var interaction = isEditing ? 'editclassification' : 'addclassification';
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    className: "bdl-EditClassificationButton ".concat(className),
    "data-resin-target": interaction,
    onClick: onEdit,
    type: "button"
  }, rest), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), message));
};

/* harmony default export */ __webpack_exports__["default"] = (EditClassificationButton);
//# sourceMappingURL=EditClassificationButton.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/classification/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/classification/index.js ***!
  \**************************************************************************/
/*! exports provided: default, ClassifiedBadge, classificationMessages, EditClassificationButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classification */ "./node_modules/box-ui-elements/es/features/classification/Classification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Classification__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ClassifiedBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClassifiedBadge */ "./node_modules/box-ui-elements/es/features/classification/ClassifiedBadge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassifiedBadge", function() { return _ClassifiedBadge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/classification/messages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classificationMessages", function() { return _messages__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _EditClassificationButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditClassificationButton */ "./node_modules/box-ui-elements/es/features/classification/EditClassificationButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditClassificationButton", function() { return _EditClassificationButton__WEBPACK_IMPORTED_MODULE_3__["default"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/classification/messages.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/classification/messages.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  add: {
    "id": "boxui.classification.add",
    "defaultMessage": "Add"
  },
  classification: {
    "id": "boxui.classification.classification",
    "defaultMessage": "Classification"
  },
  definition: {
    "id": "boxui.classification.definition",
    "defaultMessage": "Definition"
  },
  edit: {
    "id": "boxui.classification.edit",
    "defaultMessage": "Edit"
  },
  missing: {
    "id": "boxui.classification.missing",
    "defaultMessage": "Not classified"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/item-details/EditableDescription.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/item-details/EditableDescription.js ***!
  \**************************************************************************************/
/*! exports provided: EditableDescriptionBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableDescriptionBase", function() { return EditableDescription; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-textarea-autosize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/item-details/messages.js");
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






var EditableDescription =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(EditableDescription, _React$PureComponent);

  function EditableDescription(props) {
    var _this;

    _classCallCheck(this, EditableDescription);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditableDescription).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      var value = _this.state.value;

      _this.props.onDescriptionChange(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var value = event.currentTarget.value;

      _this.setState({
        value: value
      });
    });

    _this.state = {
      value: props.value || ''
    };
    return _this;
  }

  _createClass(EditableDescription, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevValue = _ref.value;
      var value = this.props.value;

      if (prevValue !== value) {
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          intl = _this$props.intl,
          textAreaProps = _this$props.textAreaProps;
      var value = this.state.value;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-textarea-autosize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, textAreaProps, {
        className: "description-textarea",
        maxLength: "255",
        maxRows: 6,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_1__["default"].descriptionPlaceholder),
        value: value
      }));
    }
  }]);

  return EditableDescription;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(EditableDescription, "defaultProps", {
  textAreaProps: {},
  value: ''
});


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(EditableDescription));
//# sourceMappingURL=EditableDescription.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/item-details/EditableURL.js":
/*!******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/item-details/EditableURL.js ***!
  \******************************************************************************/
/*! exports provided: EditableURLBase, VALUE_MISSING, TYPE_MISMATCH, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableURLBase", function() { return EditableURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_MISSING", function() { return VALUE_MISSING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_MISMATCH", function() { return TYPE_MISMATCH; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/text-input/TextInput */ "./node_modules/box-ui-elements/es/components/text-input/TextInput.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/messages */ "./node_modules/box-ui-elements/es/common/messages.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/item-details/messages.js");
var _errorMap;

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






var VALUE_MISSING = 'valueMissing';
var TYPE_MISMATCH = 'typeMismatch';
var errorMap = (_errorMap = {}, _defineProperty(_errorMap, VALUE_MISSING, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].requiredFieldError)), _defineProperty(_errorMap, TYPE_MISMATCH, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].invalidURLError)), _errorMap);

var EditableURL =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditableURL, _React$Component);

  function EditableURL() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EditableURL);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditableURL)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      error: '',
      value: _this.props.value
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      if (!_this.inputEl) {
        return;
      }

      var _this$inputEl$validit = _this.inputEl.validity,
          valid = _this$inputEl$validit.valid,
          valueMissing = _this$inputEl$validit.valueMissing;

      if (!valid) {
        _this.setState({
          error: valueMissing ? VALUE_MISSING : TYPE_MISMATCH
        });

        return;
      }

      _this.props.onValidURLChange(_this.state.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        value: event.currentTarget.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        error: ''
      });
    });

    return _this;
  }

  _createClass(EditableURL, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevValue = _ref.value;
      var value = this.props.value;

      if (prevValue !== value) {
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var formatMessage = this.props.intl.formatMessage;
      var _this$state = this.state,
          error = _this$state.error,
          value = _this$state.value;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "url-input",
        error: error ? errorMap[error] : undefined,
        hideLabel: true,
        inputRef: function inputRef(ref) {
          _this2.inputEl = ref;
        },
        isRequired: true,
        label: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_3__["default"].url),
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        placeholder: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_3__["default"].urlPlaceholder),
        type: "url",
        value: value
      });
    }
  }]);

  return EditableURL;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(EditableURL));
//# sourceMappingURL=EditableURL.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/item-details/ItemExpirationNotice.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/item-details/ItemExpirationNotice.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_inline_notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/inline-notice */ "./node_modules/box-ui-elements/es/components/inline-notice/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/item-details/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var FILE = 'file';
var FOLDER = 'folder';
var WEBLINK = 'web_link';

var ItemExpirationNotice = function ItemExpirationNotice(_ref) {
  var expiration = _ref.expiration,
      itemType = _ref.itemType;
  var messageID = '';

  switch (itemType) {
    case FILE:
      messageID = 'fileExpiration';
      break;

    case FOLDER:
      messageID = 'folderExpiration';
      break;

    case WEBLINK:
      messageID = 'bookmarkExpiration';
      break;
    // no default
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_inline_notice__WEBPACK_IMPORTED_MODULE_1__["default"], null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _messages__WEBPACK_IMPORTED_MODULE_2__["default"][messageID], {
    values: {
      expiration: expiration
    }
  })));
};

ItemExpirationNotice.propTypes = {
  /** a localized, human-readable string/node representing the expiration date */
  expiration: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).node.isRequired,

  /** the type of the item */
  itemType: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).oneOf([FILE, FOLDER, WEBLINK]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ItemExpirationNotice);
//# sourceMappingURL=ItemExpirationNotice.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/item-details/ItemProperties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/item-details/ItemProperties.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _EditableDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditableDescription */ "./node_modules/box-ui-elements/es/features/item-details/EditableDescription.js");
/* harmony import */ var _EditableURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditableURL */ "./node_modules/box-ui-elements/es/features/item-details/EditableURL.js");
/* harmony import */ var _RetentionPolicy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RetentionPolicy */ "./node_modules/box-ui-elements/es/features/item-details/RetentionPolicy.js");
/* harmony import */ var _ReadonlyDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReadonlyDescription */ "./node_modules/box-ui-elements/es/features/item-details/ReadonlyDescription.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/item-details/messages.js");
/* harmony import */ var _ItemProperties_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ItemProperties.scss */ "./node_modules/box-ui-elements/es/features/item-details/ItemProperties.scss");
/* harmony import */ var _ItemProperties_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ItemProperties_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var datetimeOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
};

var ItemProperties = function ItemProperties(_ref) {
  var createdAt = _ref.createdAt,
      description = _ref.description,
      _ref$descriptionTexta = _ref.descriptionTextareaProps,
      descriptionTextareaProps = _ref$descriptionTexta === void 0 ? {} : _ref$descriptionTexta,
      enterpriseOwner = _ref.enterpriseOwner,
      modifiedAt = _ref.modifiedAt,
      onDescriptionChange = _ref.onDescriptionChange,
      onValidURLChange = _ref.onValidURLChange,
      owner = _ref.owner,
      _ref$retentionPolicyP = _ref.retentionPolicyProps,
      retentionPolicyProps = _ref$retentionPolicyP === void 0 ? {} : _ref$retentionPolicyP,
      size = _ref.size,
      trashedAt = _ref.trashedAt,
      uploader = _ref.uploader,
      url = _ref.url;
  var descriptionId = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()('description_');
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("dl", {
    className: "item-properties"
  }, description || onDescriptionChange ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Fragment, null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_6__["default"].description, function (text) {
    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("dt", {
      id: descriptionId
    }, text);
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("dd", null, onDescriptionChange ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_EditableDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDescriptionChange: onDescriptionChange,
    textAreaProps: _objectSpread({}, descriptionTextareaProps, {
      'aria-labelledby': descriptionId
    }),
    value: description
  }) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_ReadonlyDescription__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: description
  }))) : null, !!url && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Fragment, null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_6__["default"].url)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("dd", null, onValidURLChange ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_EditableURL__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onValidURLChange: onValidURLChange,
    value: url
  }) : url)), owner ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Fragment, null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_6__["default"].owner)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("dd", null, owner)) : null, enterpriseOwner ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Fragment, null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_6__["default"].enterpriseOwner)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("dd", null, enterpriseOwner)) : null, uploader ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Fragment, null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_6__["default"].uploader)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("dd", null, uploader)) : null, createdAt ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Fragment, null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_6__["default"].created)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("dd", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    value: new Date(createdAt)
  }, datetimeOptions)))) : null, modifiedAt ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Fragment, null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_6__["default"].modified)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("dd", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    value: new Date(modifiedAt)
  }, datetimeOptions)))) : null, size ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Fragment, null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_6__["default"].size)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("dd", null, size)) : null, trashedAt ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Fragment, null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_6__["default"].deleted)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("dd", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    value: new Date(trashedAt)
  }, datetimeOptions)))) : null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_RetentionPolicy__WEBPACK_IMPORTED_MODULE_4__["default"], retentionPolicyProps));
};

ItemProperties.propTypes = {
  /** the datetime this item was created, accepts any value that can be passed to the Date() constructor */
  createdAt: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).oneOfType([!(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).number, !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).string]),

  /** a description for the item */
  description: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).string,

  /** props for the editable description textarea */
  descriptionTextareaProps: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).object,

  /** the name of the item's enterprise owner if the item is owned by a different enterprise */
  enterpriseOwner: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).string,

  /** the datetime this item was last modified, accepts any value that can be passed to the Date() constructor */
  modifiedAt: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).oneOfType([!(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).number, !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).string]),

  /** function called on description textarea blur with the new value to save */
  onDescriptionChange: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).func,

  /** function called on url input blur with the new value to save */
  onValidURLChange: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).func,

  /** the name of the item's owner */
  owner: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).string,

  /** props for the retention policy of this item */
  retentionPolicyProps: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).object,

  /** use the getFileSize util to get a localized human-readable string from the number of bytes */
  size: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).string,

  /** the datetime this item was deleted or moved to trash, accepts any value that can be passed to the Date() constructor */
  trashedAt: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).oneOfType([!(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).number, !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).string]),

  /** the name of the user who uploaded this item */
  uploader: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).string,

  /** the URL for the item when the item is a weblink */
  url: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).string
};
/* harmony default export */ __webpack_exports__["default"] = (ItemProperties);
//# sourceMappingURL=ItemProperties.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/item-details/ItemProperties.scss":
/*!***********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/item-details/ItemProperties.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./ItemProperties.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/item-details/ItemProperties.scss");

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

/***/ "./node_modules/box-ui-elements/es/features/item-details/ReadonlyDescription.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/item-details/ReadonlyDescription.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-process-string'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



var NEWLINE_REGEX = /(\r\n|\n\r|\n|\r)/g; // eslint-disable-next-line no-useless-escape

var URL_REGEX = /\b(ht|f)tps?:\/\/[\w\._\-]+(:\d+)?(\/[\w\-_\.~\+\/#\?&%=:\[\]@!\$'\(\)\*;,]*)?/gim;

var ReadonlyDescription = function ReadonlyDescription(_ref) {
  var value = _ref.value;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-process-string'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([{
    regex: NEWLINE_REGEX,
    // eslint-disable-next-line react/display-name
    fn: function fn(key) {
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("br", {
        key: key
      });
    }
  }, {
    regex: URL_REGEX,
    // eslint-disable-next-line react/display-name
    fn: function fn(key, result) {
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("a", {
        key: key,
        href: result[0],
        rel: "noopener noreferrer",
        target: "_blank"
      }, result[0]);
    }
  }])(value);
};

ReadonlyDescription.propTypes = {
  value: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).string
};
/* harmony default export */ __webpack_exports__["default"] = (ReadonlyDescription);
//# sourceMappingURL=ReadonlyDescription.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/item-details/RetentionPolicy.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/item-details/RetentionPolicy.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/item-details/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var datetimeOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
};

var RetentionPolicy = function RetentionPolicy(_ref) {
  var dispositionTime = _ref.dispositionTime,
      openModal = _ref.openModal,
      policyType = _ref.policyType,
      retentionPolicyDescription = _ref.retentionPolicyDescription;

  if (!retentionPolicyDescription) {
    return null;
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_2__["default"].retentionPolicyDescription)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("dd", null, retentionPolicyDescription), policyType !== 'indefinite' ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_2__["default"].retentionPolicyExpiration)), dispositionTime ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("dd", null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({
    value: new Date(dispositionTime)
  }, datetimeOptions)), openModal ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "lnk",
    onClick: openModal
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].retentionPolicyExtend)) : null) : null) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (RetentionPolicy);
//# sourceMappingURL=RetentionPolicy.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/item-details/SharedLinkExpirationNotice.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/item-details/SharedLinkExpirationNotice.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_inline_notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/inline-notice */ "./node_modules/box-ui-elements/es/components/inline-notice/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/item-details/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var SharedLinkExpirationNotice = function SharedLinkExpirationNotice(_ref) {
  var expiration = _ref.expiration;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_inline_notice__WEBPACK_IMPORTED_MODULE_1__["default"], null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _messages__WEBPACK_IMPORTED_MODULE_2__["default"].sharedLinkExpiration, {
    values: {
      expiration: expiration
    }
  })));
};

SharedLinkExpirationNotice.propTypes = {
  /** a localized, human-readable string/node representing the expiration date */
  expiration: !(function webpackMissingModule() { var e = new Error("Cannot find module 'prop-types'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SharedLinkExpirationNotice);
//# sourceMappingURL=SharedLinkExpirationNotice.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/item-details/VersionHistoryLink.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/item-details/VersionHistoryLink.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/features/item-details/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var VersionHistoryLink = function VersionHistoryLink(_ref) {
  var className = _ref.className,
      versionCount = _ref.versionCount,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["className", "versionCount", "onClick"]);

  var formattedMessageComponent = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _messages__WEBPACK_IMPORTED_MODULE_2__["default"].savedVersions, {
    values: {
      versionCount: versionCount
    }
  })); // Only render it as a link if there is an onClick

  if (onClick) {
    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('lnk', className),
      onClick: onClick
    }, rest), formattedMessageComponent);
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: className
  }, formattedMessageComponent);
};

VersionHistoryLink.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (VersionHistoryLink);
//# sourceMappingURL=VersionHistoryLink.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/item-details/messages.js":
/*!***************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/item-details/messages.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  bookmarkExpiration: {
    "id": "boxui.itemDetails.bookmarkExpiration",
    "defaultMessage": "This bookmark will be deleted on {expiration}."
  },
  created: {
    "id": "boxui.itemDetails.created",
    "defaultMessage": "Created"
  },
  deleted: {
    "id": "boxui.itemDetails.deleted",
    "defaultMessage": "Deleted"
  },
  description: {
    "id": "boxui.itemDetails.description",
    "defaultMessage": "Description"
  },
  descriptionPlaceholder: {
    "id": "boxui.itemDetails.descriptionPlaceholder",
    "defaultMessage": "Enter a description"
  },
  enterpriseOwner: {
    "id": "boxui.itemDetails.enterpriseOwner",
    "defaultMessage": "Enterprise Owner"
  },
  fileExpiration: {
    "id": "boxui.itemDetails.fileExpiration",
    "defaultMessage": "This file will be deleted on {expiration}."
  },
  folderExpiration: {
    "id": "boxui.itemDetails.folderExpiration",
    "defaultMessage": "This folder will be deleted on {expiration}."
  },
  modified: {
    "id": "boxui.itemDetails.modified",
    "defaultMessage": "Modified"
  },
  owner: {
    "id": "boxui.itemDetails.owner",
    "defaultMessage": "Owner"
  },
  retentionPolicyDescription: {
    "id": "boxui.itemDetails.retentionPolicyDescription",
    "defaultMessage": "Policy"
  },
  retentionPolicyExpiration: {
    "id": "boxui.itemDetails.retentionPolicyExpiration",
    "defaultMessage": "Policy Expiration"
  },
  retentionPolicyExtend: {
    "id": "boxui.itemDetails.retentionPolicyExtend",
    "defaultMessage": "Extend"
  },
  savedVersions: {
    "id": "boxui.itemDetails.savedVersions",
    "defaultMessage": "{versionCount, number} Saved Versions"
  },
  sharedLinkExpiration: {
    "id": "boxui.itemDetails.sharedLinkExpiration",
    "defaultMessage": "This shared link will be disabled on {expiration}."
  },
  size: {
    "id": "boxui.itemDetails.size",
    "defaultMessage": "Size"
  },
  uploader: {
    "id": "boxui.itemDetails.uploader",
    "defaultMessage": "Uploader"
  },
  url: {
    "id": "boxui.itemDetails.url",
    "defaultMessage": "URL"
  },
  urlPlaceholder: {
    "id": "boxui.itemDetails.urlPlaceholder",
    "defaultMessage": "Enter a valid url"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/security/SecurityBadge.js":
/*!****************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/security/SecurityBadge.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _icons_general_IconAlertDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/general/IconAlertDefault */ "./node_modules/box-ui-elements/es/icons/general/IconAlertDefault.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");
/* harmony import */ var _SecurityBadge_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SecurityBadge.scss */ "./node_modules/box-ui-elements/es/features/security/SecurityBadge.scss");
/* harmony import */ var _SecurityBadge_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SecurityBadge_scss__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var SecurityBadge = function SecurityBadge(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      message = _ref.message,
      rest = _objectWithoutProperties(_ref, ["className", "icon", "message"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h1", _extends({
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bdl-SecurityBadge', className)
  }, rest), icon, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "bdl-SecurityBadge-name"
  }, message));
};

SecurityBadge.defaultProps = {
  icon: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconAlertDefault__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlYellorange"],
    height: 22,
    width: 22,
    strokeWidth: 3
  })
};
/* harmony default export */ __webpack_exports__["default"] = (SecurityBadge);
//# sourceMappingURL=SecurityBadge.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/features/security/SecurityBadge.scss":
/*!******************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/security/SecurityBadge.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./SecurityBadge.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/security/SecurityBadge.scss");

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

/***/ "./node_modules/box-ui-elements/es/features/security/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/features/security/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SecurityBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecurityBadge */ "./node_modules/box-ui-elements/es/features/security/SecurityBadge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SecurityBadge__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconComment.js":
/*!**********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconComment.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconComment = function IconComment(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 11 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 11 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-comment ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 11 11",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M9.556.932H1.492C.938.932.49 1.386.49 1.94l-.006 9.072L2.5 8.996h7.056c.554 0 1.008-.454 1.008-1.008V1.94c0-.554-.454-1.008-1.008-1.008zM2.5 4.46h6.048v1.008H2.5V4.46zm4.032 2.52H2.5V5.972h4.032V6.98zm2.016-3.024H2.5V2.948h6.048v1.008z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconComment);
//# sourceMappingURL=IconComment.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconEye.js":
/*!******************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconEye.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconEye = function IconEye(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 11 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 15 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-eye ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 15 11",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M.118 5.857C1.233 8.855 3.986 10.98 7.21 10.98c3.223 0 5.976-2.125 7.09-5.123C13.187 2.86 10.434.735 7.21.735 3.986.735 1.233 2.86.118 5.857zM7.21 9.27c-1.78 0-3.224-1.528-3.224-3.413 0-1.885 1.444-3.414 3.224-3.414 1.78 0 3.223 1.53 3.223 3.414 0 1.885-1.444 3.414-3.223 3.414zm0-5.462c-1.07 0-1.935.915-1.935 2.05 0 1.133.864 2.048 1.935 2.048 1.07 0 1.934-.915 1.934-2.05 0-1.133-.864-2.048-1.934-2.048z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconEye);
//# sourceMappingURL=IconEye.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconPencilSolid.js":
/*!**************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconPencilSolid.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconPencilSolid = function IconPencilSolid(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 10 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 10 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-pencil-solid ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 10 10",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M.5 7.625V9.5h1.875l5.53-5.53-1.876-1.874L.5 7.626zM9.354 2.52c.195-.194.195-.51 0-.704L8.184.646C7.99.45 7.674.45 7.48.646l-.916.915L8.44 3.437l.914-.915z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconPencilSolid);
//# sourceMappingURL=IconPencilSolid.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconSecurityClassification.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconSecurityClassification.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");





var IconSecurityClassification = function IconSecurityClassification(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 32 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGray"] : _ref$color,
      title = _ref.title,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 2 : _ref$strokeWidth,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 32 : _ref$width;
  var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bdl-IconSecurityClassification', className);
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes,
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M17,2 L5,8 L5,15 C5,21.4214876 10.6933333,29.5421488 17,31 C23.3066667,29.5421488 29,21.4214876 29,15 L29,8 L17,2 Z",
    stroke: color,
    strokeWidth: strokeWidth,
    fill: "none"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M23,11 L23,19",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconSecurityClassification);
//# sourceMappingURL=IconSecurityClassification.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/utils/getFileSize.js":
/*!**************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/utils/getFileSize.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'filesize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var defaultDigitalUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
var bcp47TagToDigitalUnits = {
  fi: ['t', 'kt', 'Mt', 'Gt', 'Tt', 'Pt', 'Et', 'Zt', 'Yt'],
  fr: ['o', 'Ko', 'Mo', 'Go', 'To', 'Po', 'Eo', 'Zo', 'Yo'],
  ru: ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ', 'ПБ', 'ЭБ', 'ЗБ', 'ЙБ']
};
/**
 * Formats a file size from number of bytes to a human-readable, localized string.
 * @param {number} size Number of bytes
 * @param {string} [locale] Optional locale, defaults to 'en'
 * @returns {string} The size as a localized string
 */

var getFileSize = function getFileSize(size) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
  var settings = {
    round: 1
  };
  var localizedUnits = bcp47TagToDigitalUnits[locale];

  if (localizedUnits) {
    // map default units to localized units, ex. { B: Б, KB: КБ, ... }
    settings.symbols = defaultDigitalUnits.reduce(function (symbols, unit, index) {
      symbols[unit] = localizedUnits[index];
      return symbols;
    }, {});
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'filesize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(size, settings);
};

/* harmony default export */ __webpack_exports__["default"] = (getFileSize);
//# sourceMappingURL=getFileSize.js.map

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

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/DetailsSidebar.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/DetailsSidebar.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-details .bcs-scroll-content {\n  padding-top: 15px;\n}\n.bcs-details .item-properties dd {\n  margin-left: 0;\n}\n.bcs-details .item-properties dd:last-child {\n  margin-bottom: 0;\n}\n\n.bcs-DetailsSidebar-notices {\n  margin: 0 8px 20px 25px;\n}\n.bcs-DetailsSidebar-notices:empty {\n  margin: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarClassification.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarClassification.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-SidebarClassification {\n  margin: 0 8px 20px 25px;\n}\n.bcs-SidebarClassification:empty {\n  margin: 0;\n}\n\n.bcs-SidebarClassification-edit {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  color: #0061d5;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarVersions.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarVersions.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-SidebarVersions:not(:empty) {\n  margin-bottom: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/access-stats/AccessStats.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/access-stats/AccessStats.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".access-stats .access-stats-view-details {\n  margin-top: 10px;\n}\n.access-stats .access-stats-view-details:hover {\n  text-decoration: underline;\n}\n.access-stats .access-stats-header {\n  margin: 0 0 10px;\n  color: #a7a7a7;\n}\n.access-stats .access-stats-list {\n  margin: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/access-stats/AccessStatsItem.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/access-stats/AccessStatsItem.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".access-stats-item {\n  list-style: none;\n}\n.access-stats-item .access-stats-item-content, .access-stats-item .access-stats-item-content.btn-plain, .access-stats-item .access-stats-item-content.btn-plain:focus, .access-stats-item .access-stats-item-content.btn-plain:hover {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin: 0 0 5px;\n  padding: 9px;\n  color: #003c84;\n  line-height: 10px;\n  text-align: left;\n  background: #ecf4fc;\n  border-radius: 2px;\n}\n.access-stats-item .access-stats-item-content.btn-plain:focus .access-stats-label, .access-stats-item .access-stats-item-content.btn-plain:hover .access-stats-label {\n  text-decoration: underline;\n}\n.access-stats-item .access-stats-label {\n  flex-grow: 1;\n}\n.access-stats-item svg {\n  margin-right: 8px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/classification/Classification.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/classification/Classification.scss ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bdl-Classification .label {\n  margin-top: 12px;\n  font-weight: normal;\n}\n\n.bdl-Classification-definition {\n  margin-top: 3px;\n}\n\n.bdl-Classification-missingMessage {\n  color: #909090;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/classification/ClassifiedBadge.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/classification/ClassifiedBadge.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bdl-ClassifiedBadge-editButton, .bdl-ClassifiedBadge-editButton:hover {\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/item-details/ItemProperties.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/item-details/ItemProperties.scss ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-properties {\n  margin: 0;\n}\n.item-properties dt {\n  color: #767676;\n}\n.item-properties dd {\n  margin-bottom: 20px;\n  line-height: 16px;\n}\n.item-properties textarea.description-textarea {\n  width: 100%;\n  min-height: 34px;\n  max-height: 110px;\n  margin-left: -1px;\n  padding: 0;\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  transition: background-color 0.2s, border-color 0.2s, margin-left 0.2s, padding 0.2s;\n  resize: none;\n}\n.item-properties textarea.description-textarea:hover {\n  box-shadow: none;\n}\n.item-properties textarea.description-textarea:focus {\n  max-height: none;\n  margin-left: 0;\n  padding: 7px;\n  background-color: #fbfbfb;\n  border-color: #e8e8e8;\n}\n.item-properties .url-input input {\n  width: 100%;\n  margin: 0;\n}\n.item-properties .url-input:not(.show-error) input {\n  height: 16px;\n  padding: 0;\n  border: none;\n  box-shadow: none;\n  transition: border 0.2s, height 0.2s, padding 0.2s;\n}\n.item-properties .url-input:not(.show-error) input:focus {\n  height: 32px;\n  padding: 7px;\n  border: 1px solid #0061d5;\n}\n.item-properties button {\n  display: block;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/features/security/SecurityBadge.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/features/security/SecurityBadge.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bdl-SecurityBadge,\n.bdl-SecurityBadge:hover {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  padding: 0 5px;\n  border: 1px solid;\n  border-radius: 4px;\n  background-color: #fef7e8;\n  border-color: #f5b31b;\n}\n\n.bdl-SecurityBadge .icon-alert-default {\n  width: 16px;\n  height: 16px;\n  margin: 0 -3px;\n}\n\n.bdl-SecurityBadge-name {\n  margin-left: 5px;\n  font-weight: bold;\n  font-size: 10px !important;\n  line-height: 16px;\n  color: #222 !important;\n  text-transform: uppercase;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/lodash/isFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = root.isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite(value) {
  return typeof value == 'number' && nativeIsFinite(value);
}

module.exports = isFinite;


/***/ })

}]);