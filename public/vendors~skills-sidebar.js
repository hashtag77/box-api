(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~skills-sidebar"],{

/***/ "./node_modules/box-ui-elements/es/components/pill-cloud/PillCloud.js":
/*!****************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/components/pill-cloud/PillCloud.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./node_modules/box-ui-elements/es/components/button/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var PillCloud = function PillCloud(_ref) {
  var options = _ref.options,
      onSelect = _ref.onSelect,
      _ref$selectedOptions = _ref.selectedOptions,
      selectedOptions = _ref$selectedOptions === void 0 ? [] : _ref$selectedOptions,
      _ref$buttonProps = _ref.buttonProps,
      buttonProps = _ref$buttonProps === void 0 ? {} : _ref$buttonProps;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "pill-cloud-container"
  }, options && options.map(function (option) {
    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_button__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      key: option.value,
      className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('pill', 'pill-cloud-button', {
        'is-selected': selectedOptions.find(function (op) {
          return lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(op, option);
        })
      }),
      onClick: onSelect ? function () {
        return onSelect(option);
      } : undefined
    }, buttonProps), option.displayText);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PillCloud);
//# sourceMappingURL=PillCloud.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/SkillsSidebar.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/SkillsSidebar.js ***!
  \***********************************************************************************/
/*! exports provided: SkillsSidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsSidebarComponent", function() { return SkillsSidebar; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./node_modules/box-ui-elements/es/api/index.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicator */ "./node_modules/box-ui-elements/es/components/loading-indicator/LoadingIndicator.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SidebarContent */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _skills_SidebarSkills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills/SidebarSkills */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/SidebarSkills.js");
/* harmony import */ var _common_logger_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/logger/constants */ "./node_modules/box-ui-elements/es/elements/common/logger/constants.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/performance */ "./node_modules/box-ui-elements/es/utils/performance.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/api-context */ "./node_modules/box-ui-elements/es/elements/common/api-context/index.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/error-boundary */ "./node_modules/box-ui-elements/es/elements/common/error-boundary/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/logger */ "./node_modules/box-ui-elements/es/elements/common/logger/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _SkillsSidebar_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SkillsSidebar.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SkillsSidebar.scss");
/* harmony import */ var _SkillsSidebar_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_SkillsSidebar_scss__WEBPACK_IMPORTED_MODULE_15__);
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
 * @file Skills sidebar component
 * @author Box
 */

















var MARK_NAME_JS_READY = "".concat(_constants__WEBPACK_IMPORTED_MODULE_14__["ORIGIN_SKILLS_SIDEBAR"], "_").concat(_common_logger_constants__WEBPACK_IMPORTED_MODULE_9__["EVENT_JS_READY"]);
Object(_utils_performance__WEBPACK_IMPORTED_MODULE_10__["mark"])(MARK_NAME_JS_READY);

var SkillsSidebar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SkillsSidebar, _React$PureComponent);

  function SkillsSidebar(props) {
    var _this;

    _classCallCheck(this, SkillsSidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SkillsSidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      errors: {}
    });

    _defineProperty(_assertThisInitialized(_this), "fetchSkillsSuccessCallback", function (cards) {
      _this.updatePreviewTranscript(cards);

      _this.setState({
        cards: cards
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updatePreviewTranscript", function (cards) {
      var _this$props = _this.props,
          getPreview = _this$props.getPreview,
          getViewer = _this$props.getViewer;
      var preview = getPreview ? getPreview() : null;
      var viewer = getViewer ? getViewer() : null;
      var transcriptCard = cards.find(function (card) {
        return card.skill_card_type === _constants__WEBPACK_IMPORTED_MODULE_14__["SKILLS_TRANSCRIPT"];
      });

      if (!transcriptCard || !preview) {
        return;
      }

      if (!viewer) {
        preview.addListener('load', function (_ref) {
          var loadedViewer = _ref.viewer;

          if (typeof loadedViewer.loadAutoGeneratedCaptions === 'function') {
            loadedViewer.loadAutoGeneratedCaptions(transcriptCard);
          }
        });
      } else if (typeof viewer.loadAutoGeneratedCaptions === 'function') {
        viewer.loadAutoGeneratedCaptions(transcriptCard);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSaveSuccessHandler", function (index, updatedCards) {
      var errors = _this.state.errors;

      var clone = _objectSpread({}, errors);

      delete clone[index];

      _this.updatePreviewTranscript(updatedCards);

      _this.setState({
        cards: updatedCards,
        errors: clone
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSaveErrorHandler", function (index) {
      var errors = _this.state.errors;

      var clone = _objectSpread({}, errors);

      clone[index] = true;

      _this.setState({
        errors: clone
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function (index) {
      var removes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var adds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var replaces = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var _this$props2 = _this.props,
          api = _this$props2.api,
          file = _this$props2.file;
      var _this$state$cards = _this.state.cards,
          cards = _this$state$cards === void 0 ? [] : _this$state$cards;
      var card = cards[index];
      var path = "/cards/".concat(index);
      var ops = [];
      var canEdit = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(file, _constants__WEBPACK_IMPORTED_MODULE_14__["FIELD_PERMISSIONS_CAN_UPLOAD"], false);

      if (!canEdit || !card) {
        return;
      }

      if (Array.isArray(replaces)) {
        replaces.forEach(function (_ref2) {
          var replaced = _ref2.replaced,
              replacement = _ref2.replacement;
          var idx = card.entries.findIndex(function (entry) {
            return entry === replaced;
          });

          if (idx > -1) {
            ops.push({
              op: 'replace',
              path: "".concat(path, "/entries/").concat(idx),
              value: replacement
            });
          }
        });
      }

      if (Array.isArray(removes)) {
        var deletes = [];
        removes.forEach(function (removed) {
          var idx = card.entries.findIndex(function (entry) {
            return entry === removed;
          });

          if (idx > -1) {
            deletes.push(idx);
          }
        }); // To maintain metadata index positions, removes should be
        // done is reverse order with largest index being removed first.
        // Remove operations are atomic and don't happen in batch.

        deletes.sort(function (a, b) {
          return b - a;
        }) // number sort in descending order
        .forEach(function (idx) {
          ops.push({
            op: 'remove',
            path: "".concat(path, "/entries/").concat(idx)
          });
        });
      }

      if (Array.isArray(adds)) {
        adds.forEach(function (added) {
          ops.push({
            op: 'add',
            path: "".concat(path, "/entries/-"),
            value: added
          });
        });
      } // If no ops, don't proceed


      if (ops.length === 0) {
        return;
      } // Add test ops before any other ops


      ops.splice(0, 0, {
        op: 'test',
        path: path,
        value: card
      });
      api.getMetadataAPI(false).updateSkills(file, ops, function (updatedCards) {
        _this.onSaveSuccessHandler(index, updatedCards);
      }, function () {
        _this.onSaveErrorHandler(index);
      });
    });

    var logger = _this.props.logger;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
    return _this;
  }

  _createClass(SkillsSidebar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          api = _this$props3.api,
          file = _this$props3.file;
      api.getMetadataAPI(false).getSkills(file, this.fetchSkillsSuccessCallback, lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref3) {
      var prevRefreshIdentity = _ref3.refreshIdentity;
      var _this$props4 = this.props,
          api = _this$props4.api,
          file = _this$props4.file,
          refreshIdentity = _this$props4.refreshIdentity;

      if (refreshIdentity !== prevRefreshIdentity) {
        api.getMetadataAPI(false).getSkills(file, this.fetchSkillsSuccessCallback, lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a);
      }
    }
    /**
     * Handles skills fetch success
     *
     * @private
     * @param {Array<SkillCard>} cards - Skills cards
     * @return {void}
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          file = _this$props5.file,
          getViewer = _this$props5.getViewer,
          elementId = _this$props5.elementId;
      var _this$state = this.state,
          cards = _this$state.cards,
          errors = _this$state.errors;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_SidebarContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "bcs-skills",
        elementId: elementId,
        sidebarView: _constants__WEBPACK_IMPORTED_MODULE_14__["SIDEBAR_VIEW_SKILLS"],
        title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarSkillsTitle)
      }, cards ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_skills_SidebarSkills__WEBPACK_IMPORTED_MODULE_8__["default"], {
        cards: cards,
        errors: errors,
        file: file,
        getViewer: getViewer,
        onSkillChange: this.onSave
      }) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    }
  }]);

  return SkillsSidebar;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_1___default()([Object(_common_logger__WEBPACK_IMPORTED_MODULE_13__["withLogger"])(_constants__WEBPACK_IMPORTED_MODULE_14__["ORIGIN_SKILLS_SIDEBAR"]), Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_12__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_14__["ORIGIN_SKILLS_SIDEBAR"]), _common_api_context__WEBPACK_IMPORTED_MODULE_11__["withAPIContext"]])(SkillsSidebar));
//# sourceMappingURL=SkillsSidebar.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/SkillsSidebar.scss":
/*!*************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/SkillsSidebar.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--10-2!../../../../sass-loader/dist/cjs.js??ref--10-3!./SkillsSidebar.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/SkillsSidebar.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/SidebarSkills.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/SidebarSkills.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SidebarSection */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarSection.js");
/* harmony import */ var _skillUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skillUtils */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/skillUtils.js");
/* harmony import */ var _SidebarSkillsCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SidebarSkillsCard */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/SidebarSkillsCard.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/**
 * 
 * @file Details sidebar component
 * @author Box
 */










/**
 * Get ths skill interaction target based on card type
 *
 * @param {Object} card - skill card
 * @return {string} - interaction target
 */
var getCardInteractionTarget = function getCardInteractionTarget(_ref) {
  var skill_card_type = _ref.skill_card_type;

  switch (skill_card_type) {
    case _constants__WEBPACK_IMPORTED_MODULE_7__["SKILLS_KEYWORD"]:
      return _common_interactionTargets__WEBPACK_IMPORTED_MODULE_3__["SKILLS_TARGETS"].KEYWORDS.CARD;

    case _constants__WEBPACK_IMPORTED_MODULE_7__["SKILLS_FACE"]:
    case _constants__WEBPACK_IMPORTED_MODULE_7__["SKILLS_TIMELINE"]:
      return _common_interactionTargets__WEBPACK_IMPORTED_MODULE_3__["SKILLS_TARGETS"].FACES.CARD;

    case _constants__WEBPACK_IMPORTED_MODULE_7__["SKILLS_TRANSCRIPT"]:
      return _common_interactionTargets__WEBPACK_IMPORTED_MODULE_3__["SKILLS_TARGETS"].TRANSCRIPTS.CARD;

    default:
      return '';
  }
};
/**
 * Get ths string skill title based on card title
 *
 * @param {Object} card - skill card
 * @return {string} - skill title
 */


var getCardTitle = function getCardTitle(_ref2) {
  var skill_card_type = _ref2.skill_card_type,
      _ref2$skill_card_titl = _ref2.skill_card_title,
      skill_card_title = _ref2$skill_card_titl === void 0 ? {} : _ref2$skill_card_titl;
  var code = skill_card_title.code,
      message = skill_card_title.message;
  var defaultKey = "".concat(skill_card_type, "Skill");
  var defaultMessage = _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"][defaultKey] || _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].defaultSkill;

  switch (code) {
    case 'skills_faces':
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].faceSkill);

    case 'skills_transcript':
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].transcriptSkill);

    case 'skills_topics':
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].topicsSkill);

    case 'skills_status':
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].statusSkill);

    case 'skills_error':
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].error);

    default:
      return message || !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), defaultMessage);
  }
};

var SidebarSkills = function SidebarSkills(_ref3) {
  var file = _ref3.file,
      cards = _ref3.cards,
      errors = _ref3.errors,
      getViewer = _ref3.getViewer,
      _onSkillChange = _ref3.onSkillChange;
  var _file$permissions = file.permissions,
      permissions = _file$permissions === void 0 ? {} : _file$permissions;
  var isSkillEditable = !!permissions.can_upload;
  return cards.map(function (card, index) {
    if (card.error && !card.status) {
      card.skill_card_type = _constants__WEBPACK_IMPORTED_MODULE_7__["SKILLS_STATUS"];
      card.status = {
        code: _constants__WEBPACK_IMPORTED_MODULE_7__["SKILLS_ERROR_UNKNOWN"]
      };
      delete card.error;
    }

    var id = card.id;
    var cardId = id || lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()('card_');
    var isValid = Object(_skillUtils__WEBPACK_IMPORTED_MODULE_5__["isValidSkillsCard"])(file, card);
    var interactionTarget = getCardInteractionTarget(card);
    var title = getCardTitle(card);
    var hasEntries = Array.isArray(card.entries) ? card.entries.length > 0 : isValid;
    return isValid ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_SidebarSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: cardId,
      interactionTarget: interactionTarget,
      isOpen: hasEntries,
      title: title
    }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_SidebarSkillsCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      card: card,
      cards: cards,
      getViewer: getViewer,
      hasError: !!errors[index],
      isEditable: isSkillEditable,
      onSkillChange: function onSkillChange() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _onSkillChange.apply(void 0, [index].concat(args));
      }
    })) : null;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarSkills);
//# sourceMappingURL=SidebarSkills.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/SidebarSkillsCard.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/SidebarSkillsCard.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/status/index.js");
/* harmony import */ var _transcript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transcript */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/index.js");
/* harmony import */ var _keywords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keywords */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/index.js");
/* harmony import */ var _faces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faces */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/**
 * 
 * @file Skills card component
 * @author Box
 */







var SidebarSkillsCard = function SidebarSkillsCard(_ref) {
  var card = _ref.card,
      cards = _ref.cards,
      hasError = _ref.hasError,
      isEditable = _ref.isEditable,
      onSkillChange = _ref.onSkillChange,
      getViewer = _ref.getViewer;

  switch (card.skill_card_type) {
    case _constants__WEBPACK_IMPORTED_MODULE_5__["SKILLS_KEYWORD"]:
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_keywords__WEBPACK_IMPORTED_MODULE_3__["default"], {
        card: card,
        getViewer: getViewer,
        hasError: hasError,
        isEditable: isEditable,
        onSkillChange: onSkillChange,
        transcript: isEditable ? cards.find(function (_ref2) {
          var skill_card_type = _ref2.skill_card_type;
          return skill_card_type === _constants__WEBPACK_IMPORTED_MODULE_5__["SKILLS_TRANSCRIPT"];
        }) : undefined
      });

    case _constants__WEBPACK_IMPORTED_MODULE_5__["SKILLS_TIMELINE"]:
    case _constants__WEBPACK_IMPORTED_MODULE_5__["SKILLS_FACE"]:
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_faces__WEBPACK_IMPORTED_MODULE_4__["default"], {
        card: card,
        getViewer: getViewer,
        hasError: hasError,
        isEditable: isEditable,
        onSkillChange: onSkillChange
      });

    case _constants__WEBPACK_IMPORTED_MODULE_5__["SKILLS_TRANSCRIPT"]:
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_transcript__WEBPACK_IMPORTED_MODULE_2__["default"], {
        card: card,
        getViewer: getViewer,
        hasError: hasError,
        isEditable: isEditable,
        onSkillChange: onSkillChange
      });

    case _constants__WEBPACK_IMPORTED_MODULE_5__["SKILLS_STATUS"]:
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_status__WEBPACK_IMPORTED_MODULE_1__["default"], {
        card: card
      });

    default:
      return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarSkillsCard);
//# sourceMappingURL=SidebarSkillsCard.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Face.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Face.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./node_modules/box-ui-elements/es/components/plain-button/PlainButton.js");
/* harmony import */ var _icons_general_IconClose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../icons/general/IconClose */ "./node_modules/box-ui-elements/es/icons/general/IconClose.js");
/* harmony import */ var _icons_general_IconMinus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icons/general/IconMinus */ "./node_modules/box-ui-elements/es/icons/general/IconMinus.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _Face_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Face.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Face.scss");
/* harmony import */ var _Face_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Face_scss__WEBPACK_IMPORTED_MODULE_6__);
/**
 * 
 * @file File Keywords SkillCard component
 * @author Box
 */









var Face = function Face(_ref) {
  var face = _ref.face,
      selected = _ref.selected,
      isEditing = _ref.isEditing,
      onDelete = _ref.onDelete,
      onSelect = _ref.onSelect;
  var isAnyFaceSelected = !!selected;
  var isCurrentFaceSelected = face === selected;
  var isFaceSelected = isAnyFaceSelected && isCurrentFaceSelected && !isEditing;
  var faceClassName = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('be-face-wrapper', {
    'be-face-unselected': !isEditing && isAnyFaceSelected && !isCurrentFaceSelected
  });
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: faceClassName
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "be-face",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["SKILLS_TARGETS"].FACES.FACE,
    onClick: function onClick() {
      return !isEditing && onSelect(face);
    },
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("img", {
    alt: face.text,
    src: face.image_url,
    title: face.text
  }), isFaceSelected && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconMinus__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: _constants__WEBPACK_IMPORTED_MODULE_5__["COLOR_WHITE"]
  })), isEditing && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "be-face-delete",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["SKILLS_TARGETS"].FACES.DELETE,
    onClick: function onClick() {
      return onDelete(face);
    },
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconClose__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: _constants__WEBPACK_IMPORTED_MODULE_5__["COLOR_999"],
    height: 16,
    width: 16
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Face);
//# sourceMappingURL=Face.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Face.scss":
/*!*****************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Face.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./Face.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Face.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Faces.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Faces.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./node_modules/box-ui-elements/es/components/plain-button/PlainButton.js");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/primary-button/PrimaryButton */ "./node_modules/box-ui-elements/es/components/primary-button/PrimaryButton.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/loading-indicator/LoadingIndicatorWrapper */ "./node_modules/box-ui-elements/es/components/loading-indicator/LoadingIndicatorWrapper.js");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/inline-error/InlineError */ "./node_modules/box-ui-elements/es/components/inline-error/InlineError.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/tooltip/Tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/Tooltip.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/button/Button */ "./node_modules/box-ui-elements/es/components/button/Button.js");
/* harmony import */ var _icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../icons/general/IconEdit */ "./node_modules/box-ui-elements/es/icons/general/IconEdit.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _Face__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Face */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Face.js");
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../timeline */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/index.js");
/* harmony import */ var _Faces_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Faces.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Faces.scss");
/* harmony import */ var _Faces_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Faces_scss__WEBPACK_IMPORTED_MODULE_12__);
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
 * @file Faces Skill Card component
 * @author Box
 */
















var Faces =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Faces, _React$PureComponent);

  /**
   * [constructor]
   *
   * @public
   * @return {Faces}
   */
  function Faces(props) {
    var _this;

    _classCallCheck(this, Faces);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Faces).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleIsEditing", function () {
      _this.setState(function (prevState) {
        return {
          isEditing: !prevState.isEditing
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (face) {
      var selected = _this.state.selected;

      _this.setState({
        selected: selected === face ? undefined : face
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function (face) {
      var removes = _this.state.removes;
      removes.push(face);

      _this.setState({
        removes: removes.slice(0)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function () {
      var onSkillChange = _this.props.onSkillChange;
      var removes = _this.state.removes;

      _this.toggleIsEditing();

      if (removes.length > 0) {
        _this.setState({
          isLoading: true
        });

        onSkillChange(removes);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      _this.resetState(_this.props);
    });

    _this.state = {
      faces: props.card.entries,
      removes: [],
      isEditing: props.hasError,
      hasError: props.hasError,
      isLoading: false
    };
    return _this;
  }
  /**
   * Helper to reset the state
   *
   * @private
   * @param {Object} props - component props
   * @return {void}
   */


  _createClass(Faces, [{
    key: "resetState",
    value: function resetState(props) {
      this.setState({
        faces: props.card.entries,
        removes: [],
        isEditing: false,
        selected: undefined,
        hasError: false,
        isLoading: false
      });
    }
    /**
     * Toggles the edit mode
     *
     * @private
     * @return {void}
     */

  }, {
    key: "render",

    /**
     * Renders the faces
     *
     * @private
     * @return {void}
     */
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          card = _this$props.card,
          isEditable = _this$props.isEditable,
          getViewer = _this$props.getViewer;
      var _this$state = this.state,
          selected = _this$state.selected,
          faces = _this$state.faces,
          removes = _this$state.removes,
          isEditing = _this$state.isEditing,
          hasError = _this$state.hasError,
          isLoading = _this$state.isLoading;
      var duration = card.duration;
      var hasFaces = faces.length > 0;
      var entries = faces.filter(function (face) {
        return !removes.includes(face);
      });
      var editClassName = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('be-face-edit', {
        'be-faces-is-editing': isEditing
      });
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "be-faces",
        isLoading: isLoading
      }, hasFaces && isEditable && !isLoading && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].editLabel)
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: editClassName,
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_9__["SKILLS_TARGETS"].FACES.EDIT,
        onClick: this.toggleIsEditing,
        type: "button"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_7__["default"], null))), hasError && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].sidebarSkillsErrorTitle)
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].sidebarSkillsErrorContent)), hasFaces ? entries.map(function (face, index) {
        return (
          /* eslint-disable react/no-array-index-key */
          !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_Face__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: index,
            face: face,
            isEditing: isEditing,
            onDelete: _this2.onDelete,
            onSelect: _this2.onSelect,
            selected: selected
          })
          /* eslint-enable react/no-array-index-key */

        );
      }) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].skillNoInfoFoundError), !!selected && !isEditing && Array.isArray(selected.appears) && selected.appears.length > 0 && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_timeline__WEBPACK_IMPORTED_MODULE_11__["default"], {
        duration: duration,
        getViewer: getViewer,
        interactionTarget: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_9__["SKILLS_TARGETS"].FACES.TIMELINE,
        timeslices: selected.appears
      }), isEditing && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "be-faces-buttons"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_9__["SKILLS_TARGETS"].FACES.EDIT_CANCEL,
        onClick: this.onCancel,
        type: "button"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].cancel)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_9__["SKILLS_TARGETS"].FACES.EDIT_SAVE,
        onClick: this.onSave,
        type: "button"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].save))));
    }
  }]);

  return Faces;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* harmony default export */ __webpack_exports__["default"] = (Faces);
//# sourceMappingURL=Faces.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Faces.scss":
/*!******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Faces.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./Faces.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Faces.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faces */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Faces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Faces__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/EditableKeywords.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/EditableKeywords.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_pill_selector_dropdown_PillSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/pill-selector-dropdown/PillSelector */ "./node_modules/box-ui-elements/es/components/pill-selector-dropdown/PillSelector.js");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/primary-button/PrimaryButton */ "./node_modules/box-ui-elements/es/components/primary-button/PrimaryButton.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/button/Button */ "./node_modules/box-ui-elements/es/components/button/Button.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _keywordUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keywordUtils */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/keywordUtils.js");
/* harmony import */ var _EditableKeywords_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditableKeywords.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/EditableKeywords.scss");
/* harmony import */ var _EditableKeywords_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_EditableKeywords_scss__WEBPACK_IMPORTED_MODULE_7__);
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
 * @file Editable Skill Keywords card component
 * @author Box
 */










var EditableKeywords =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(EditableKeywords, _React$PureComponent);

  /**
   * [constructor]
   *
   * @public
   * @return {EditableKeywords}
   */
  function EditableKeywords(props) {
    var _this;

    _classCallCheck(this, EditableKeywords);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditableKeywords).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onRemove", function (option, index) {
      // eslint-disable-line
      var _this$props = _this.props,
          onDelete = _this$props.onDelete,
          keywords = _this$props.keywords;
      onDelete(keywords[index]);
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (_ref) {
      var key = _ref.key;

      if (key === 'Enter' && !_this.state.isInCompositionMode) {
        _this.onBlur();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      var onAdd = _this.props.onAdd;
      var keyword = _this.state.keyword;

      if (keyword) {
        onAdd({
          type: 'text',
          text: keyword
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCompositionStart", function () {
      _this.setState({
        isInCompositionMode: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCompositionEnd", function () {
      _this.setState({
        isInCompositionMode: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInput", function (event) {
      var currentTarget = event.currentTarget;

      _this.setState({
        keyword: currentTarget.value
      });
    });

    _this.state = {
      pills: Object(_keywordUtils__WEBPACK_IMPORTED_MODULE_6__["default"])(props.keywords),
      keyword: '',
      isInCompositionMode: false
    };
    return _this;
  }
  /**
   * Called when keywords gets new properties.
   * Should reset to original state.
   *
   * @private
   * @param {Object} nextProps - component props
   * @return {void}
   */


  _createClass(EditableKeywords, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevKeywords = _ref2.keywords;
      var keywords = this.props.keywords;

      if (prevKeywords !== keywords) {
        this.setState({
          pills: Object(_keywordUtils__WEBPACK_IMPORTED_MODULE_6__["default"])(keywords),
          keyword: ''
        });
      }
    }
    /**
     * Called when keywords gets new properties.
     * Should reset to original state.
     *
     * @private
     * @param {Object} option - pill
     * @param {number} index - pill index
     * @return {void}
     */

  }, {
    key: "render",

    /**
     * Renders the keywords
     *
     * @private
     * @return {void}
     */
    value: function render() {
      var _this$props2 = this.props,
          onSave = _this$props2.onSave,
          onCancel = _this$props2.onCancel;
      var _this$state = this.state,
          pills = _this$state.pills,
          keyword = _this$state.keyword;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
        className: "pill-selector-wrapper"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_pill_selector_dropdown_PillSelector__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onBlur: this.onBlur,
        onCompositionEnd: this.onCompositionEnd,
        onCompositionStart: this.onCompositionStart,
        onInput: this.onInput,
        onKeyDown: this.onKeyDown,
        onPaste: this.onInput,
        onRemove: this.onRemove,
        selectedOptions: pills,
        value: keyword
      }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "be-keywords-buttons"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["SKILLS_TARGETS"].KEYWORDS.EDIT_CANCEL,
        onClick: onCancel,
        type: "button"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].cancel)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["SKILLS_TARGETS"].KEYWORDS.EDIT_SAVE,
        onClick: onSave,
        type: "button"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].save))));
    }
  }]);

  return EditableKeywords;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* harmony default export */ __webpack_exports__["default"] = (EditableKeywords);
//# sourceMappingURL=EditableKeywords.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/EditableKeywords.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/EditableKeywords.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./EditableKeywords.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/EditableKeywords.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/Keywords.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/Keywords.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./node_modules/box-ui-elements/es/components/plain-button/PlainButton.js");
/* harmony import */ var _icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../icons/general/IconEdit */ "./node_modules/box-ui-elements/es/icons/general/IconEdit.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/loading-indicator/LoadingIndicatorWrapper */ "./node_modules/box-ui-elements/es/components/loading-indicator/LoadingIndicatorWrapper.js");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/inline-error/InlineError */ "./node_modules/box-ui-elements/es/components/inline-error/InlineError.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/tooltip/Tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/Tooltip.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _EditableKeywords__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditableKeywords */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/EditableKeywords.js");
/* harmony import */ var _ReadOnlyKeywords__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReadOnlyKeywords */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.js");
/* harmony import */ var _Keywords_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Keywords.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/Keywords.scss");
/* harmony import */ var _Keywords_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Keywords_scss__WEBPACK_IMPORTED_MODULE_10__);
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
 * @file File Keywords SkillCard component
 * @author Box
 */














var Keywords =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Keywords, _PureComponent);

  /**
   * [constructor]
   *
   * @public
   * @return {Keywords}
   */
  function Keywords(props) {
    var _this;

    _classCallCheck(this, Keywords);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Keywords).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleIsEditing", function () {
      _this.setState(function (prevState) {
        return {
          isEditing: !prevState.isEditing
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAdd", function (keyword) {
      var transcript = _this.props.transcript;
      var adds = _this.state.adds;
      var locations = [];
      var regex = new RegExp("\\b".concat(keyword.text, "\\b"), 'i');

      if (transcript && Array.isArray(transcript.entries)) {
        transcript.entries.forEach(function (_ref) {
          var text = _ref.text,
              appears = _ref.appears;

          if (text && regex.test(text) && Array.isArray(appears) && appears.length > 0) {
            locations.push(appears[0]);
          }
        });
      }

      keyword.appears = locations;
      adds.push(keyword);

      _this.setState({
        adds: adds.slice(0)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDelete", function (keyword) {
      var _this$state = _this.state,
          adds = _this$state.adds,
          removes = _this$state.removes;
      var addedIndex = adds.findIndex(function (added) {
        return added === keyword;
      });

      if (addedIndex > -1) {
        adds.splice(addedIndex, 1);

        _this.setState({
          adds: adds.slice(0)
        });
      } else {
        removes.push(keyword);

        _this.setState({
          removes: removes.slice(0)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function () {
      var onSkillChange = _this.props.onSkillChange;
      var _this$state2 = _this.state,
          removes = _this$state2.removes,
          adds = _this$state2.adds;

      _this.toggleIsEditing();

      if (removes.length > 0 || adds.length > 0) {
        _this.setState({
          isLoading: true
        });

        onSkillChange(removes, adds);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      _this.resetState(_this.props);
    });

    _this.state = {
      keywords: props.card.entries,
      adds: [],
      removes: [],
      isEditing: props.hasError,
      hasError: props.hasError,
      isLoading: false
    };
    return _this;
  }
  /**
   * Helper to reset the state
   *
   * @private
   * @param {Object} props - component props
   * @return {void}
   */


  _createClass(Keywords, [{
    key: "resetState",
    value: function resetState(props) {
      this.setState({
        keywords: props.card.entries,
        adds: [],
        removes: [],
        isEditing: false,
        hasError: false,
        isLoading: false
      });
    }
    /**
     * Toggles the edit mode
     *
     * @private
     * @return {void}
     */

  }, {
    key: "render",

    /**
     * Renders the keywords
     *
     * @private
     * @return {void}
     */
    value: function render() {
      var _this$props = this.props,
          card = _this$props.card,
          getViewer = _this$props.getViewer,
          isEditable = _this$props.isEditable;
      var duration = card.duration;
      var _this$state3 = this.state,
          isEditing = _this$state3.isEditing,
          isLoading = _this$state3.isLoading,
          hasError = _this$state3.hasError,
          keywords = _this$state3.keywords,
          removes = _this$state3.removes,
          adds = _this$state3.adds;
      var hasKeywords = keywords.length > 0;
      var entries = keywords.filter(function (face) {
        return !removes.includes(face);
      }).concat(adds);
      var editClassName = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('be-keyword-edit', {
        'be-keyword-is-editing': isEditing
      });
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "be-keywords",
        isLoading: isLoading
      }, hasKeywords && isEditable && !isLoading && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].editLabel)
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: editClassName,
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["SKILLS_TARGETS"].KEYWORDS.EDIT,
        onClick: this.toggleIsEditing,
        type: "button"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_2__["default"], null))), hasError && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarSkillsErrorTitle)
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarSkillsErrorContent)), isEditing && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_EditableKeywords__WEBPACK_IMPORTED_MODULE_8__["default"], {
        keywords: entries,
        onAdd: this.onAdd,
        onCancel: this.onCancel,
        onDelete: this.onDelete,
        onSave: this.onSave
      }), !isEditing && hasKeywords && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_ReadOnlyKeywords__WEBPACK_IMPORTED_MODULE_9__["default"], {
        duration: duration,
        getViewer: getViewer,
        keywords: entries
      }), !isEditing && !hasKeywords && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].skillNoInfoFoundError));
    }
  }]);

  return Keywords;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* harmony default export */ __webpack_exports__["default"] = (Keywords);
//# sourceMappingURL=Keywords.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/Keywords.scss":
/*!************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/Keywords.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./Keywords.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/Keywords.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_pill_cloud_PillCloud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/pill-cloud/PillCloud */ "./node_modules/box-ui-elements/es/components/pill-cloud/PillCloud.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timeline */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/index.js");
/* harmony import */ var _keywordUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keywordUtils */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/keywordUtils.js");
/* harmony import */ var _ReadOnlyKeywords_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReadOnlyKeywords.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.scss");
/* harmony import */ var _ReadOnlyKeywords_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ReadOnlyKeywords_scss__WEBPACK_IMPORTED_MODULE_5__);
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
 * @file Read Only Keywords Card component
 * @author Box
 */







var ReadOnlyselecteds =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ReadOnlyselecteds, _React$PureComponent);

  function ReadOnlyselecteds() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReadOnlyselecteds);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReadOnlyselecteds)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedIndex: -1
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (pill) {
      var selectedIndex = _this.state.selectedIndex;
      var newIndex = pill.value;

      _this.setState({
        selectedIndex: selectedIndex === newIndex ? -1 : newIndex
      });
    });

    return _this;
  }

  _createClass(ReadOnlyselecteds, [{
    key: "render",

    /**
     * Renders the keywords
     *
     * @private
     * @return {void}
     */
    value: function render() {
      var _this$props = this.props,
          keywords = _this$props.keywords,
          getViewer = _this$props.getViewer,
          duration = _this$props.duration;
      var selectedIndex = this.state.selectedIndex;
      var options = Object(_keywordUtils__WEBPACK_IMPORTED_MODULE_4__["default"])(keywords);
      var selected = keywords[selectedIndex];
      var pillCloudProps = selected ? {
        selectedOptions: [options[selectedIndex]]
      } : {};
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_pill_cloud_PillCloud__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        onSelect: this.onSelect,
        options: options
      }, pillCloudProps, {
        buttonProps: _defineProperty({}, _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["INTERACTION_TARGET"], _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["SKILLS_TARGETS"].KEYWORDS.SELECT)
      })), !!selected && Array.isArray(selected.appears) && selected.appears.length > 0 && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_timeline__WEBPACK_IMPORTED_MODULE_3__["default"], {
        duration: duration,
        getViewer: getViewer,
        interactionTarget: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["SKILLS_TARGETS"].KEYWORDS.TIMELINE,
        text: selected.text,
        timeslices: selected.appears
      }));
    }
  }]);

  return ReadOnlyselecteds;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* harmony default export */ __webpack_exports__["default"] = (ReadOnlyselecteds);
//# sourceMappingURL=ReadOnlyKeywords.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./ReadOnlyKeywords.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Keywords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keywords */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/Keywords.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Keywords__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/keywordUtils.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/keywordUtils.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 
 * @file Utilities for keywords skill
 * @author Box
 */

/**
 * Converts skill card entries into pills
 *
 * @private
 * @param {Array<Object>} props - keyword entries
 * @return {Array<Object>} pills
 */
var getPills = function getPills() {
  var keywords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keywords.map(function (keyword, index) {
    return {
      displayText: keyword.text,
      value: index
    };
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getPills);
//# sourceMappingURL=keywordUtils.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/status/Status.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/status/Status.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/**
 * 
 * @file Status Skill Card component
 * @author Box
 */





var Status = function Status(_ref) {
  var card = _ref.card;
  var _card$status = card.status,
      status = _card$status === void 0 ? {} : _card$status;
  var code = status.code,
      message = status.message;
  var localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].skillUnknownError;

  switch (code) {
    case _constants__WEBPACK_IMPORTED_MODULE_2__["SKILLS_ERROR_INVALID_FILE_SIZE"]:
      localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].skillInvalidFileSizeError;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["SKILLS_ERROR_INVALID_FILE_FORMAT"]:
      localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].skillInvalidFileExtensionError;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["SKILLS_ERROR_EXTERNAL_AUTH"]:
    case _constants__WEBPACK_IMPORTED_MODULE_2__["SKILLS_ERROR_BILLING"]:
    case _constants__WEBPACK_IMPORTED_MODULE_2__["SKILLS_ERROR_INVOCATIONS"]:
    case _constants__WEBPACK_IMPORTED_MODULE_2__["SKILLS_ERROR_UNKNOWN"]:
      localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].skillUnknownError;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["SKILLS_ERROR_FILE_PROCESSING"]:
      localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].skillFileProcessingError;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["SKILLS_STATUS_PENDING"]:
      localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].skillPendingStatus;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_2__["SKILLS_STATUS_INVOKED"]:
      localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].skillInvokedStatus;
      break;

    default:
      if (message) {
        return message;
      }

  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), localizedMessage);
};

/* harmony default export */ __webpack_exports__["default"] = (Status);
//# sourceMappingURL=Status.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/status/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/status/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Status */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/status/Status.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Status__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeline.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeline.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./node_modules/box-ui-elements/es/components/plain-button/PlainButton.js");
/* harmony import */ var _icons_general_IconTrackNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../icons/general/IconTrackNext */ "./node_modules/box-ui-elements/es/icons/general/IconTrackNext.js");
/* harmony import */ var _icons_general_IconTrackPrevious__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icons/general/IconTrackPrevious */ "./node_modules/box-ui-elements/es/icons/general/IconTrackPrevious.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _Timeslice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Timeslice */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeslice.js");
/* harmony import */ var _transcript_timeSliceUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transcript/timeSliceUtils */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/timeSliceUtils.js");
/* harmony import */ var _Timeline_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Timeline.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeline.scss");
/* harmony import */ var _Timeline_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Timeline_scss__WEBPACK_IMPORTED_MODULE_8__);
/**
 * 
 * @file Timeline component
 * @author Box
 */











var Timeline = function Timeline(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 0 : _ref$duration,
      _ref$timeslices = _ref.timeslices,
      timeslices = _ref$timeslices === void 0 ? [] : _ref$timeslices,
      getViewer = _ref.getViewer,
      interactionTarget = _ref.interactionTarget;
  var timeSliceIndex = -1;

  var playSegment = function playSegment(index) {
    var incr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var newIndex = incr > 0 ? Math.min(timeslices.length - 1, index + incr) : Math.max(0, index + incr);
    var viewer = getViewer ? getViewer() : null;
    var timeslice = timeslices[newIndex];
    var validTime = Object(_transcript_timeSliceUtils__WEBPACK_IMPORTED_MODULE_7__["isValidStartTime"])(timeslice);

    if (validTime && viewer && typeof viewer.play === 'function') {
      viewer.play(timeslice.start);
      timeSliceIndex = newIndex;
    }
  };

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "be-timeline"
  }, text && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "be-timeline-label"
  }, text), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "be-timeline-line-wrapper"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "be-timeline-line"
  }), timeslices.map(function (_ref2, index) {
    var start = _ref2.start,
        end = _ref2.end;
    return (
      /* eslint-disable react/no-array-index-key */
      !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_Timeslice__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: index,
        duration: duration,
        end: end,
        index: index,
        interactionTarget: interactionTarget,
        onClick: playSegment,
        start: start
      })
    );
  }
  /* eslint-enable react/no-array-index-key */
  )), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("div", {
    className: "be-timeline-btns"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["SKILLS_TARGETS"].TIMELINE.PREVIOUS,
    onClick: function onClick() {
      return playSegment(timeSliceIndex, -1);
    },
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_icons_general_IconTrackPrevious__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].previousSegment)
  })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["SKILLS_TARGETS"].TIMELINE.NEXT,
    onClick: function onClick() {
      return playSegment(timeSliceIndex, 1);
    },
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_icons_general_IconTrackNext__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].nextSegment)
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);
//# sourceMappingURL=Timeline.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeline.scss":
/*!************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeline.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./Timeline.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeline.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeslice.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeslice.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./node_modules/box-ui-elements/es/components/plain-button/PlainButton.js");
/* harmony import */ var _Timeslice_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timeslice.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeslice.scss");
/* harmony import */ var _Timeslice_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Timeslice_scss__WEBPACK_IMPORTED_MODULE_2__);
/**
 * 
 * @file Timeline line component
 * @author Box
 */



var LENGTH_TEXT_ITEMLINE = 290; // match with css

var MIN_WIDTH = 6; // Need at least some width to be clickable

var Timeslice = function Timeslice(_ref) {
  var start = _ref.start,
      end = _ref.end,
      duration = _ref.duration,
      _onClick = _ref.onClick,
      index = _ref.index,
      interactionTarget = _ref.interactionTarget;

  if (typeof start !== 'number' || !duration || start >= duration) {
    return null;
  }

  var barLength = LENGTH_TEXT_ITEMLINE;
  var startLeft = Math.round(start * barLength / duration);
  var minEnding = startLeft + MIN_WIDTH; // Need at least some width to be clickable

  var ending = typeof end === 'number' ? Math.max(minEnding, end * barLength / duration) : minEnding;
  var endLeft = Math.round(Math.min(barLength, ending));
  var width = endLeft - startLeft; // If width is too small re-adjust the left position
  // to get to at least 6px wide for clickability

  if (width < MIN_WIDTH) {
    startLeft -= MIN_WIDTH - width;
    width = MIN_WIDTH;
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "be-timeline-time",
    "data-resin-target": interactionTarget,
    onClick: function onClick() {
      return _onClick(index);
    },
    style: {
      left: "".concat(startLeft, "px"),
      width: "".concat(width, "px")
    },
    type: "button"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Timeslice);
//# sourceMappingURL=Timeslice.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeslice.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeslice.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./Timeslice.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeslice.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Timeline__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/EditingTranscriptRow.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/EditingTranscriptRow.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-textarea-autosize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/primary-button/PrimaryButton */ "./node_modules/box-ui-elements/es/components/primary-button/PrimaryButton.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/button/Button */ "./node_modules/box-ui-elements/es/components/button/Button.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _EditingTranscriptRow_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditingTranscriptRow.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/EditingTranscriptRow.scss");
/* harmony import */ var _EditingTranscriptRow_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_EditingTranscriptRow_scss__WEBPACK_IMPORTED_MODULE_5__);
/**
 * 
 * @file Editable transcript row component
 * @author Box
 */









var EditingTranscriptRow = function EditingTranscriptRow(_ref) {
  var time = _ref.time,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      onSave = _ref.onSave,
      onCancel = _ref.onCancel,
      onChange = _ref.onChange;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "be-transcript-row be-transcript-editing-row"
  }, time && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "be-transcript-time"
  }, time), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "be-transcript-text"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-textarea-autosize'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    maxRows: 10,
    onChange: onChange,
    value: text
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "be-transcript-buttons"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["SKILLS_TARGETS"].TRANSCRIPTS.EDIT_CANCEL,
    onClick: onCancel,
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].cancel)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["SKILLS_TARGETS"].TRANSCRIPTS.EDIT_SAVE,
    onClick: onSave,
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].save)))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditingTranscriptRow);
//# sourceMappingURL=EditingTranscriptRow.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/EditingTranscriptRow.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/EditingTranscriptRow.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./EditingTranscriptRow.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/EditingTranscriptRow.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/ReadOnlyTranscriptRow.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/ReadOnlyTranscriptRow.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./node_modules/box-ui-elements/es/components/plain-button/PlainButton.js");
/**
 * 
 * @file Read only transcript row component
 * @author Box
 */



var ReadOnlyTranscriptRow = function ReadOnlyTranscriptRow(_ref) {
  var time = _ref.time,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      onClick = _ref.onClick,
      interactionTarget = _ref.interactionTarget;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "be-transcript-row",
    "data-resin-target": interactionTarget,
    onClick: onClick,
    type: "button"
  }, time && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "be-transcript-time"
  }, time), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "be-transcript-text"
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (ReadOnlyTranscriptRow);
//# sourceMappingURL=ReadOnlyTranscriptRow.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/Transcript.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/Transcript.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./node_modules/box-ui-elements/es/components/plain-button/PlainButton.js");
/* harmony import */ var _icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icons/general/IconEdit */ "./node_modules/box-ui-elements/es/icons/general/IconEdit.js");
/* harmony import */ var _icons_general_IconCopy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icons/general/IconCopy */ "./node_modules/box-ui-elements/es/icons/general/IconCopy.js");
/* harmony import */ var _icons_general_IconExpand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../icons/general/IconExpand */ "./node_modules/box-ui-elements/es/icons/general/IconExpand.js");
/* harmony import */ var _icons_general_IconCollapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../icons/general/IconCollapse */ "./node_modules/box-ui-elements/es/icons/general/IconCollapse.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/datetime */ "./node_modules/box-ui-elements/es/utils/datetime.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/loading-indicator/LoadingIndicatorWrapper */ "./node_modules/box-ui-elements/es/components/loading-indicator/LoadingIndicatorWrapper.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/tooltip/Tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/Tooltip.js");
/* harmony import */ var _utils_download__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils/download */ "./node_modules/box-ui-elements/es/utils/download.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./node_modules/box-ui-elements/es/elements/common/interactionTargets.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/messages */ "./node_modules/box-ui-elements/es/elements/common/messages.js");
/* harmony import */ var _timeSliceUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timeSliceUtils */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/timeSliceUtils.js");
/* harmony import */ var _TranscriptRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TranscriptRow */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/TranscriptRow.js");
/* harmony import */ var _Transcript_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Transcript.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/Transcript.scss");
/* harmony import */ var _Transcript_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Transcript_scss__WEBPACK_IMPORTED_MODULE_15__);
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
 * @file Transcript component
 * @author Box
 */



















var Transcript =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Transcript, _React$PureComponent);

  function Transcript() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Transcript);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Transcript)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isEditingIndex: undefined,
      newTranscriptText: '',
      isCollapsed: true,
      isLoading: false
    });

    _defineProperty(_assertThisInitialized(_this), "transcriptReducer", function (accumulator, _ref) {
      var appears = _ref.appears,
          text = _ref.text;
      var start = Object(_timeSliceUtils__WEBPACK_IMPORTED_MODULE_13__["isValidTimeSlice"])(appears) && Array.isArray(appears) ? "".concat(Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_7__["formatTime"])(appears[0].start), ":") : '';
      return "".concat(accumulator).concat(start, " ").concat(text || '', "\r\n");
    });

    _defineProperty(_assertThisInitialized(_this), "transcriptMapper", function (_ref2, index) {
      var appears = _ref2.appears,
          text = _ref2.text;
      var _this$state = _this.state,
          isEditingIndex = _this$state.isEditingIndex,
          newTranscriptText = _this$state.newTranscriptText;
      var isEditingRow = isEditingIndex === index;
      var transcriptText = isEditingRow ? newTranscriptText : text;
      var interactionTarget = isEditingRow ? _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["SKILLS_TARGETS"].TRANSCRIPTS.EDIT_TEXT : _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["SKILLS_TARGETS"].TRANSCRIPTS.TRANSCRIPT;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_TranscriptRow__WEBPACK_IMPORTED_MODULE_14__["default"], {
        key: index,
        appears: appears,
        interactionTarget: interactionTarget,
        isEditing: isEditingRow,
        onCancel: _this.onCancel,
        onChange: _this.onChange,
        onClick: function onClick() {
          return _this.onClick(index);
        },
        onSave: _this.onSave,
        text: transcriptText
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleIsEditing", function () {
      _this.setState(function (prevState) {
        return {
          isEditingIndex: typeof prevState.isEditingIndex === 'number' ? undefined : -1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSave", function () {
      var _this$props = _this.props,
          entries = _this$props.card.entries,
          onSkillChange = _this$props.onSkillChange;
      var _this$state2 = _this.state,
          isEditingIndex = _this$state2.isEditingIndex,
          newTranscriptText = _this$state2.newTranscriptText;

      if (typeof isEditingIndex !== 'number') {
        return;
      }

      var entry = entries[isEditingIndex];

      if (entry.text === newTranscriptText) {
        _this.onCancel();
      } else {
        _this.setState({
          isLoading: true,
          isEditingIndex: -1
        });

        onSkillChange(null, null, [{
          replacement: _objectSpread({}, entry, {
            text: newTranscriptText
          }),
          replaced: entry
        }]);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      _this.setState({
        isEditingIndex: -1,
        newTranscriptText: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      var currentTarget = event.currentTarget;

      _this.setState({
        newTranscriptText: currentTarget.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (index) {
      var entries = _this.props.card.entries;
      var isEditingIndex = _this.state.isEditingIndex;

      if (typeof isEditingIndex === 'number') {
        _this.setState({
          isEditingIndex: index,
          newTranscriptText: entries[index].text
        });
      } else {
        _this.previewSegment(index);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "copyTranscript", function () {
      var entries = _this.props.card.entries;
      var copiedClass = 'be-transcript-copied';
      Object(_utils_download__WEBPACK_IMPORTED_MODULE_10__["copy"])(entries.reduce(_this.transcriptReducer, '')); // Animate the button by adding a class

      if (_this.copyBtn) {
        _this.copyBtn.classList.add(copiedClass);
      } // Remove the animation class


      setTimeout(function () {
        if (_this.copyBtn) {
          _this.copyBtn.classList.remove(copiedClass);
        }
      }, 1000);
    });

    _defineProperty(_assertThisInitialized(_this), "copyBtnRef", function (btn) {
      _this.copyBtn = btn;
    });

    _defineProperty(_assertThisInitialized(_this), "toggleExpandCollapse", function () {
      _this.setState(function (prevState) {
        return {
          isCollapsed: !prevState.isCollapsed
        };
      });
    });

    return _this;
  }

  _createClass(Transcript, [{
    key: "componentDidUpdate",

    /**
     * Called when transcripts gets new properties
     *
     * @private
     * @return {void}
     */
    value: function componentDidUpdate(prevProps) {
      if (prevProps === this.props) {
        return;
      }

      var wasEditing = typeof this.state.isEditingIndex === 'number';
      this.setState({
        isEditingIndex: wasEditing ? -1 : undefined,
        newTranscriptText: '',
        isLoading: false
      });
    }
    /**
     * Reducer to accumulate all transcript entries for copying
     *
     * @param {Object} accumulator - reducer accumulator
     * @return {string} accumulated transcript entries
     */

  }, {
    key: "previewSegment",

    /**
     * Previews a transcript segment
     *
     * @private
     * @param {number|void} [index] - row index to edit
     * @return {void}
     */
    value: function previewSegment(index) {
      var _this$props2 = this.props,
          entries = _this$props2.card.entries,
          getViewer = _this$props2.getViewer;
      var appears = entries[index].appears;
      var viewer = getViewer ? getViewer() : null;
      var isValid = Object(_timeSliceUtils__WEBPACK_IMPORTED_MODULE_13__["isValidTimeSlice"])(appears) && Array.isArray(appears) && appears.length === 1;
      var timeSlice = appears;
      var start = isValid ? timeSlice[0].start : 0;

      if (isValid && viewer && typeof viewer.play === 'function') {
        viewer.play(start);
      }
    }
    /**
     * Saves the new card data
     *
     * @private
     * @return {void}
     */

  }, {
    key: "render",

    /**
     * Renders the transcript
     *
     * @private
     * @return {Object}
     */
    value: function render() {
      var _this$props3 = this.props,
          entries = _this$props3.card.entries,
          isEditable = _this$props3.isEditable;
      var _this$state3 = this.state,
          isEditingIndex = _this$state3.isEditingIndex,
          isCollapsed = _this$state3.isCollapsed,
          isLoading = _this$state3.isLoading;
      var hasEntries = entries.length > 0;
      var hasManyEntries = entries.length > 5;
      var isEditing = typeof isEditingIndex === 'number';
      var editBtnClassName = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('be-transcript-edit', {
        'be-transcript-is-editing': isEditing
      });
      var contentClassName = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        'be-transcript-content-collapsed': isCollapsed
      });
      var expandCollapseMessage = isCollapsed ? _common_messages__WEBPACK_IMPORTED_MODULE_12__["default"].expand : _common_messages__WEBPACK_IMPORTED_MODULE_12__["default"].collapse;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "be-transcript",
        isLoading: isLoading
      }, hasEntries && !isLoading && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "be-transcript-actions"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_12__["default"].copy)
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "be-transcript-copy",
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["SKILLS_TARGETS"].TRANSCRIPTS.COPY,
        getDOMRef: this.copyBtnRef,
        onClick: this.copyTranscript,
        type: "button"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconCopy__WEBPACK_IMPORTED_MODULE_4__["default"], {
        color: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"]
      }))), hasManyEntries && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), expandCollapseMessage)
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "be-transcript-expand",
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["SKILLS_TARGETS"].TRANSCRIPTS.EXPAND,
        onClick: this.toggleExpandCollapse,
        type: "button"
      }, isCollapsed ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconExpand__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"]
      }) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconCollapse__WEBPACK_IMPORTED_MODULE_6__["default"], {
        color: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"]
      }))), isEditable && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
        text: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_12__["default"].editLabel)
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: editBtnClassName,
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["SKILLS_TARGETS"].TRANSCRIPTS.EDIT,
        onClick: this.toggleIsEditing,
        type: "button"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_3__["default"], null)))), isEditing ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "be-transcript-edit-message"
      }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_12__["default"].transcriptEdit)) : null, hasEntries ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: contentClassName
      }, entries.map(this.transcriptMapper)) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_messages__WEBPACK_IMPORTED_MODULE_12__["default"].skillNoInfoFoundError));
    }
  }]);

  return Transcript;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* harmony default export */ __webpack_exports__["default"] = (Transcript);
//# sourceMappingURL=Transcript.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/Transcript.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/Transcript.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./Transcript.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/Transcript.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/TranscriptRow.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/TranscriptRow.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/datetime */ "./node_modules/box-ui-elements/es/utils/datetime.js");
/* harmony import */ var _ReadOnlyTranscriptRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadOnlyTranscriptRow */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/ReadOnlyTranscriptRow.js");
/* harmony import */ var _EditingTranscriptRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditingTranscriptRow */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/EditingTranscriptRow.js");
/* harmony import */ var _timeSliceUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeSliceUtils */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/timeSliceUtils.js");
/* harmony import */ var _TranscriptRow_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TranscriptRow.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/TranscriptRow.scss");
/* harmony import */ var _TranscriptRow_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TranscriptRow_scss__WEBPACK_IMPORTED_MODULE_5__);
/**
 * 
 * @file Transcript row component
 * @author Box
 */







var TranscriptRow = function TranscriptRow(_ref) {
  var appears = _ref.appears,
      text = _ref.text,
      isEditing = _ref.isEditing,
      onClick = _ref.onClick,
      onSave = _ref.onSave,
      onCancel = _ref.onCancel,
      onChange = _ref.onChange,
      interactionTarget = _ref.interactionTarget;
  var isValid = Object(_timeSliceUtils__WEBPACK_IMPORTED_MODULE_4__["isValidTimeSlice"])(appears) && Array.isArray(appears) && appears.length === 1;
  var timeSlice = appears;
  var start = isValid ? Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(timeSlice[0].start) : undefined;
  return isEditing ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_EditingTranscriptRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onCancel: onCancel,
    onChange: onChange,
    onSave: onSave,
    text: text,
    time: start
  }) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_ReadOnlyTranscriptRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    interactionTarget: interactionTarget,
    onClick: onClick,
    text: text,
    time: start
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TranscriptRow);
//# sourceMappingURL=TranscriptRow.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/TranscriptRow.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/TranscriptRow.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../css-loader!../../../../../../postcss-loader/src??ref--10-2!../../../../../../sass-loader/dist/cjs.js??ref--10-3!./TranscriptRow.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/TranscriptRow.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Transcript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transcript */ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/Transcript.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Transcript__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/timeSliceUtils.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/timeSliceUtils.js ***!
  \******************************************************************************************************/
/*! exports provided: isValidTimeSlice, isValidStartTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidTimeSlice", function() { return isValidTimeSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStartTime", function() { return isValidStartTime; });
/**
 * 
 * @file Transcript utils
 * @author Box
 */

/**
 * Returns true if there is a valid start time
 *
 * @param {SkillCardEntryTimeSlice} timeslices - skill entry time slice
 * @return {boolean} if there is a valid start time
 */
var isValidStartTime = function isValidStartTime(timeslice) {
  return !!timeslice && typeof timeslice.start === 'number';
};
/**
 * Returns true if there is a valid time slice with valid start time
 *
 * @param {SkillCardEntryTimeSlice[]} timeslices - skill entry time slice
 * @return {boolean} if it is a valid time slice
 */


var isValidTimeSlice = function isValidTimeSlice(timeslices) {
  return Array.isArray(timeslices) && isValidStartTime(timeslices[0]);
};


//# sourceMappingURL=timeSliceUtils.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconCollapse.js":
/*!***********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconCollapse.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconCollapse = function IconCollapse(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 13 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 13 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-collapse ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 13 13",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M8 6h4a1 1 0 0 0 0-2H9V1a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1zM1 9h3v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconCollapse);
//# sourceMappingURL=IconCollapse.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconCopy.js":
/*!*******************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconCopy.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconCopy = function IconCopy(_ref) {
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
    className: "icon-copy ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M1 11a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h9a1 1 0 0 1 0 2H2v8a1 1 0 0 1-1 1z",
    fill: color
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M13 3H3v10a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-3 8H7a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zm0-3H7a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconCopy);
//# sourceMappingURL=IconCopy.js.map

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

/***/ "./node_modules/box-ui-elements/es/icons/general/IconExpand.js":
/*!*********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconExpand.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconExpand = function IconExpand(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#979797' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 13 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 13 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-expand ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 13 13",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M12 0H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1zM7 11H2V6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconExpand);
//# sourceMappingURL=IconExpand.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconMinus.js":
/*!********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconMinus.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconMinus = function IconMinus(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-minus ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    d: "M2 5h8v2H2z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconMinus);
//# sourceMappingURL=IconMinus.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconTrackNext.js":
/*!************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconTrackNext.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconTrackNext = function IconTrackNext(_ref) {
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
    className: "icon-track-next ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M7.72 7.85a1 1 0 0 0 0-1.41l-5-4.81A1 1 0 0 0 2 1.35a1 1 0 0 0-1 1V12a1 1 0 0 0 .28.69 1 1 0 0 0 1.41 0l5-4.81zM13 2v10a1 1 0 0 1-1 1 1 1 0 0 1-1-1V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTrackNext);
//# sourceMappingURL=IconTrackNext.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconTrackPrevious.js":
/*!****************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconTrackPrevious.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconTrackPrevious = function IconTrackPrevious(_ref) {
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
    className: "icon-track-previous ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M6.31 7.88l5 4.81a1 1 0 0 0 1.41 0A1 1 0 0 0 13 12V2.35a1 1 0 0 0-1-1 1 1 0 0 0-.69.28l-5 4.81a1 1 0 0 0 0 1.41zM2 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1 1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTrackPrevious);
//# sourceMappingURL=IconTrackPrevious.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/utils/download.js":
/*!***********************************************************!*\
  !*** ./node_modules/box-ui-elements/es/utils/download.js ***!
  \***********************************************************/
/*! exports provided: download, copy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/**
 * 
 * @file Utility for copying and downloading
 * @author Box
 */

/**
 * Function to download string as txt file
 *
 * @private
 * @param {String} string - string to download
 * @param {String} name - file name to use
 * @return {void}
 */
function download(string, name) {
  var blob = new Blob([string], {
    type: 'text/plain;charset=utf-8'
  }); // IE11

  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, name);
    return;
  }

  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = name;

  if (document.body) {
    document.body.appendChild(a);
  }

  a.click();
  setTimeout(function () {
    if (document.body) {
      document.body.removeChild(a);
    }

    URL.revokeObjectURL(url);
  }, 100);
}
/**
 * Function to copy string to the clipboard
 *
 * @private
 * @param {String} string - string to copy
 * @return {void}
 */


function copy(string) {
  var textarea = document.createElement('textarea');
  var _document = document,
      body = _document.body;
  textarea.value = string;
  textarea.style.display = 'hidden';

  if (body) {
    body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    body.removeChild(textarea);
  }
}


//# sourceMappingURL=download.js.map

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/SkillsSidebar.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/SkillsSidebar.scss ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-skills .bcs-scroll-content {\n  padding-top: 15px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Face.scss":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Face.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be-faces .be-face-wrapper {\n  position: relative;\n  display: inline-block;\n  margin: 0 10px 10px 0;\n}\n.be-faces .btn-plain.be-face {\n  overflow: hidden;\n  border-radius: 100%;\n}\n.be-faces .btn-plain.be-face img {\n  width: 45px;\n  height: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  vertical-align: middle;\n  -webkit-filter: brightness(1.5);\n          filter: brightness(1.5);\n  transition: transform 0.3s;\n}\n.be-faces .btn-plain.be-face .icon-minus {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  display: none;\n}\n.be-faces .btn-plain.be-face:hover img {\n  transform: scale(1.3);\n}\n.be-faces .btn-plain.be-face:hover .icon-minus {\n  display: initial;\n}\n.be-faces .be-face-unselected .btn-plain.be-face img {\n  opacity: 0.4;\n  -webkit-filter: none;\n          filter: none;\n}\n.be-faces .btn-plain.be-face-delete {\n  position: absolute;\n  top: -3px;\n  right: -5px;\n  height: 18px;\n  padding: 0;\n  background-color: white;\n  border: 1px solid #909090;\n  border-radius: 100%;\n  box-shadow: 0 0 2px 0 rgba(51, 51, 51, 0.4);\n}\n.be-faces.be-faces-is-editing .btn-plain.be-face:hover img {\n  transform: none;\n  cursor: default;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Faces.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/faces/Faces.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be-faces {\n  position: relative;\n}\n.be-faces .inline-alert {\n  margin: 0 0 20px;\n}\n.be-faces .btn-plain.be-face-edit {\n  position: absolute;\n  top: -46px;\n  right: 15px;\n  width: 24px;\n  height: 24px;\n  padding-top: 1px;\n  border-radius: 3px;\n}\n.be-faces .btn-plain.be-face-edit:hover svg path {\n  fill: #222;\n}\n.be-faces .btn-plain.be-face-edit.be-faces-is-editing {\n  background-color: #e8e8e8;\n}\n.be-faces .btn-plain.be-face-edit.be-faces-is-editing .icon-edit > .fill-color {\n  fill: #f4f4f4;\n}\n.be-faces .be-faces-buttons {\n  margin-right: -5px;\n  padding-top: 7px;\n  text-align: right;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/EditableKeywords.scss":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/EditableKeywords.scss ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be-keywords .be-keywords-buttons {\n  margin: 7px -5px 0 0;\n  text-align: right;\n}\n.be-keywords .be-keywords-buttons .btn {\n  margin: 0 0 0 5px;\n}\n.be-keywords .pill-selector-wrapper {\n  margin: 0;\n}\n.be-keywords .pill-selector-wrapper .pill-selector-input-wrapper {\n  width: 100%;\n  margin: 0;\n}\n.be-keywords .pill-selector-wrapper .pill-selector-input-wrapper input[type=text].pill-selector-input {\n  min-width: 97%;\n  height: 24px;\n  margin: 2px 0 0 2px;\n  padding: 0;\n  border: 1px solid #fcfcfc;\n  box-shadow: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/Keywords.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/Keywords.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be-keywords {\n  position: relative;\n}\n.be-keywords .btn-plain.be-keyword-edit {\n  position: absolute;\n  top: -46px;\n  right: 15px;\n  width: 24px;\n  height: 24px;\n  padding-top: 1px;\n  border-radius: 3px;\n}\n.be-keywords .btn-plain.be-keyword-edit:hover svg path {\n  fill: #222;\n}\n.be-keywords .btn-plain.be-keyword-edit.be-keyword-is-editing {\n  background-color: #e8e8e8;\n}\n.be-keywords .btn-plain.be-keyword-edit.be-keyword-is-editing .icon-edit > .fill-color {\n  fill: #f4f4f4;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.scss":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.scss ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be-keywords .pill-cloud-container {\n  padding: 0;\n  overflow: hidden;\n  border: 0 none;\n}\n.be-keywords .pill-cloud-container .btn.pill.pill-cloud-button {\n  margin: 0 5px 5px 0;\n  color: inherit;\n  border: 1px solid #d3d3d3;\n}\n.be-keywords .pill-cloud-container .btn.pill.pill-cloud-button:hover, .be-keywords .pill-cloud-container .btn.pill.pill-cloud-button.is-selected {\n  color: #fff;\n  background-color: #0061d5;\n  border-color: #0061d5;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeline.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeline.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be-timeline {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0 0;\n  color: #767676;\n  font-size: 12px;\n}\n.be-timeline:last-child {\n  padding-bottom: 5px;\n}\n.be-timeline .be-timeline-label {\n  padding-bottom: 6px;\n}\n.be-timeline .be-timeline-line-wrapper {\n  position: relative;\n  flex: 1;\n  height: 6px;\n}\n.be-timeline .be-timeline-line {\n  position: absolute;\n  width: 290px;\n  height: 6px;\n  background-color: #0061d5;\n  border-radius: 6px;\n  opacity: 0.25;\n}\n.be-timeline .be-timeline-btns {\n  margin-top: 10px;\n}\n.be-timeline .be-timeline-btns button:last-child {\n  margin-left: 10px;\n}\n.be-timeline .be-timeline-btns .btn-plain:hover svg path {\n  fill: #222;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeslice.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/timeline/Timeslice.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be .btn-plain.be-timeline-time {\n  position: absolute;\n  height: 6px;\n  background-color: #0061d5;\n  border-radius: 6px;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.be .btn-plain.be-timeline-time:focus, .be .btn-plain.be-timeline-time:active, .be .btn-plain.be-timeline-time:hover {\n  opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/EditingTranscriptRow.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/EditingTranscriptRow.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be-transcript .be-transcript-buttons {\n  margin-top: 5px;\n  text-align: right;\n}\n.be-transcript .be-transcript-buttons .btn {\n  margin: 0 0 0 5px;\n}\n.be-transcript .be-transcript-text textarea {\n  width: 100%;\n  resize: none;\n}\n.be-transcript .be-transcript-editing-row {\n  background: #ecf4fc;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/Transcript.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/Transcript.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be-transcript {\n  position: relative;\n}\n.be-transcript .be-transcript-actions {\n  position: absolute;\n  top: -46px;\n  right: 15px;\n}\n.be-transcript .btn-plain.be-transcript-edit,\n.be-transcript .btn-plain.be-transcript-copy,\n.be-transcript .btn-plain.be-transcript-expand {\n  width: 24px;\n  height: 24px;\n  margin-left: 7px;\n  padding-top: 1px;\n  border-radius: 3px;\n}\n.be-transcript .btn-plain.be-transcript-edit:hover svg path,\n.be-transcript .btn-plain.be-transcript-copy:hover svg path,\n.be-transcript .btn-plain.be-transcript-expand:hover svg path {\n  fill: #222;\n}\n.be-transcript .btn-plain.be-transcript-edit.be-transcript-is-editing,\n.be-transcript .btn-plain.be-transcript-copy.be-transcript-is-editing,\n.be-transcript .btn-plain.be-transcript-expand.be-transcript-is-editing {\n  background-color: #e8e8e8;\n}\n.be-transcript .btn-plain.be-transcript-edit.be-transcript-is-editing .icon-edit > .fill-color,\n.be-transcript .btn-plain.be-transcript-copy.be-transcript-is-editing .icon-edit > .fill-color,\n.be-transcript .btn-plain.be-transcript-expand.be-transcript-is-editing .icon-edit > .fill-color {\n  fill: #f4f4f4;\n}\n.be-transcript .btn-plain.be-transcript-copy.be-transcript-copied {\n  background-color: #e8e8e8;\n  transition: background-color 1s;\n}\n.be-transcript .btn-plain.be-transcript-copy.be-transcript-copied svg path {\n  fill: #26c281;\n}\n.be-transcript .be-transcript-edit-message {\n  margin-bottom: 15px;\n  color: #767676;\n}\n.be-transcript .be-transcript-content-collapsed {\n  max-height: 400px;\n  overflow: auto;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/TranscriptRow.scss":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/skills/transcript/TranscriptRow.scss ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be-transcript .be-transcript-row,\n.be-transcript .btn-plain.be-transcript-row {\n  display: flex;\n  width: 100%;\n  margin-bottom: 10px;\n  overflow: visible;\n  line-height: 20px;\n  white-space: normal;\n  text-align: left;\n}\n.be-transcript .be-transcript-row:hover, .be-transcript .be-transcript-row:focus, .be-transcript .be-transcript-row:active,\n.be-transcript .btn-plain.be-transcript-row:hover,\n.be-transcript .btn-plain.be-transcript-row:focus,\n.be-transcript .btn-plain.be-transcript-row:active {\n  text-decoration: none;\n  background: #ecf4fc;\n}\n.be-transcript .be-transcript-time {\n  padding: 5px 20px 5px 5px;\n}\n.be-transcript .be-transcript-text {\n  flex: 1;\n  padding: 5px 5px 5px 0;\n}\n.be-transcript .be-transcript-content-collapsed .be-transcript-text {\n  padding-right: 10px;\n}", ""]);

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