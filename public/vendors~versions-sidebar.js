(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~versions-sidebar"],{

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsGroup.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsGroup.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _VersionsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VersionsList */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsList.js");
/* harmony import */ var _VersionsGroup_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VersionsGroup.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsGroup.scss");
/* harmony import */ var _VersionsGroup_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_VersionsGroup_scss__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Group component
 * @author Box
 */




var VersionsGroup = function VersionsGroup(_ref) {
  var heading = _ref.heading,
      rest = _objectWithoutProperties(_ref, ["heading"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("section", {
    className: "bcs-VersionsGroup"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("h1", {
    className: "bcs-VersionsGroup-heading"
  }, heading), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_VersionsList__WEBPACK_IMPORTED_MODULE_1__["default"], rest));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsGroup);
//# sourceMappingURL=VersionsGroup.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsGroup.scss":
/*!**********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsGroup.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!../../../../../postcss-loader/src??ref--10-2!../../../../../sass-loader/dist/cjs.js??ref--10-3!./VersionsGroup.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsGroup.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItem.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItem.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _common_selectors_version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/selectors/version */ "./node_modules/box-ui-elements/es/elements/common/selectors/version.js");
/* harmony import */ var _utils_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/size */ "./node_modules/box-ui-elements/es/utils/size.js");
/* harmony import */ var _VersionsItemActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VersionsItemActions */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemActions.js");
/* harmony import */ var _VersionsItemButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VersionsItemButton */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemButton.js");
/* harmony import */ var _VersionsItemBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VersionsItemBadge */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemBadge.js");
/* harmony import */ var _VersionsItemRetention__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VersionsItemRetention */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemRetention.js");
/* harmony import */ var _components_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/time */ "./node_modules/box-ui-elements/es/components/time/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _VersionsItem_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VersionsItem.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItem.scss");
/* harmony import */ var _VersionsItem_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_VersionsItem_scss__WEBPACK_IMPORTED_MODULE_10__);
var _ACTION_MAP;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Item component
 * @author Box
 */












var ACTION_MAP = (_ACTION_MAP = {}, _defineProperty(_ACTION_MAP, _constants__WEBPACK_IMPORTED_MODULE_9__["VERSION_DELETE_ACTION"], _messages__WEBPACK_IMPORTED_MODULE_1__["default"].versionDeletedBy), _defineProperty(_ACTION_MAP, _constants__WEBPACK_IMPORTED_MODULE_9__["VERSION_RESTORE_ACTION"], _messages__WEBPACK_IMPORTED_MODULE_1__["default"].versionRestoredBy), _defineProperty(_ACTION_MAP, _constants__WEBPACK_IMPORTED_MODULE_9__["VERSION_PROMOTE_ACTION"], _messages__WEBPACK_IMPORTED_MODULE_1__["default"].versionPromotedBy), _defineProperty(_ACTION_MAP, _constants__WEBPACK_IMPORTED_MODULE_9__["VERSION_UPLOAD_ACTION"], _messages__WEBPACK_IMPORTED_MODULE_1__["default"].versionUploadedBy), _ACTION_MAP);
var FIVE_MINUTES_MS = 5 * 60 * 1000;

var VersionsItem = function VersionsItem(_ref) {
  var fileId = _ref.fileId,
      _ref$isCurrent = _ref.isCurrent,
      isCurrent = _ref$isCurrent === void 0 ? false : _ref$isCurrent,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      _ref$isWatermarked = _ref.isWatermarked,
      isWatermarked = _ref$isWatermarked === void 0 ? false : _ref$isWatermarked,
      onDelete = _ref.onDelete,
      onDownload = _ref.onDownload,
      onPreview = _ref.onPreview,
      onPromote = _ref.onPromote,
      onRestore = _ref.onRestore,
      version = _ref.version,
      versionCount = _ref.versionCount,
      versionLimit = _ref.versionLimit;
  var createdAt = version.created_at,
      versionId = version.id,
      is_download_available = version.is_download_available,
      _version$permissions = version.permissions,
      permissions = _version$permissions === void 0 ? {} : _version$permissions,
      restoredAt = version.restored_at,
      retention = version.retention,
      size = version.size,
      trashedAt = version.trashed_at,
      versionNumber = version.version_number,
      versionPromoted = version.version_promoted;
  var can_delete = permissions.can_delete,
      can_download = permissions.can_download,
      can_preview = permissions.can_preview,
      can_upload = permissions.can_upload;

  var _ref2 = retention || {},
      retentionAppliedAt = _ref2.applied_at,
      retentionDispositionAt = _ref2.disposition_at;

  var retentionDispositionAtDate = retentionDispositionAt && new Date(retentionDispositionAt); // Version info helpers

  var versionAction = _common_selectors_version__WEBPACK_IMPORTED_MODULE_2__["default"].getVersionAction(version);
  var versionInteger = versionNumber ? parseInt(versionNumber, 10) : 1;
  var versionTime = restoredAt || trashedAt || createdAt;
  var versionTimestamp = versionTime && new Date(versionTime).getTime();
  var versionUserName = _common_selectors_version__WEBPACK_IMPORTED_MODULE_2__["default"].getVersionUser(version).name || !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_1__["default"].versionUserUnknown); // Version state helpers

  var isDeleted = versionAction === _constants__WEBPACK_IMPORTED_MODULE_9__["VERSION_DELETE_ACTION"];
  var isDownloadable = !!is_download_available;
  var isLimited = versionCount - versionInteger >= versionLimit;
  var isRestricted = isWatermarked && !isCurrent; // Watermarked files do not support prior version preview

  var isRetained = !!retentionAppliedAt && (!retentionDispositionAtDate || retentionDispositionAtDate > new Date()); // Version action helpers

  var canPreview = can_preview && !isDeleted && !isLimited && !isRestricted;
  var showDelete = can_delete && !isDeleted && !isCurrent;
  var showDownload = can_download && !isDeleted && isDownloadable;
  var showPromote = can_upload && !isDeleted && !isCurrent;
  var showRestore = can_delete && isDeleted;
  var showPreview = canPreview && !isSelected;
  var hasActions = showDelete || showDownload || showPreview || showPromote || showRestore; // Version action callback helper

  var handleAction = function handleAction(handler) {
    return function () {
      if (handler) {
        handler(versionId);
      }
    };
  };

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-VersionsItem"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_VersionsItemButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fileId: fileId,
    isCurrent: isCurrent,
    isDisabled: !canPreview,
    isSelected: isSelected,
    onClick: handleAction(onPreview)
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-VersionsItem-badge"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_VersionsItemBadge__WEBPACK_IMPORTED_MODULE_6__["default"], {
    versionNumber: versionNumber
  })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-VersionsItem-details"
  }, isCurrent && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-VersionsItem-current"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_1__["default"].versionCurrent)), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-VersionsItem-log",
    title: versionUserName
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, ACTION_MAP[versionAction], {
    values: {
      name: versionUserName,
      versionPromoted: versionPromoted
    }
  }))), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-VersionsItem-info"
  }, versionTimestamp && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("time", {
    className: "bcs-VersionsItem-date",
    dateTime: versionTime
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_time__WEBPACK_IMPORTED_MODULE_8__["ReadableTime"], {
    alwaysShowTime: true,
    relativeThreshold: FIVE_MINUTES_MS,
    timestamp: versionTimestamp
  })), !!size && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
    className: "bcs-VersionsItem-size"
  }, Object(_utils_size__WEBPACK_IMPORTED_MODULE_3__["default"])(size))), isRetained && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-VersionsItem-retention"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_VersionsItemRetention__WEBPACK_IMPORTED_MODULE_7__["default"], {
    retention: retention
  })), isLimited && hasActions && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-VersionsItem-footer"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _messages__WEBPACK_IMPORTED_MODULE_1__["default"].versionLimitExceeded, {
    values: {
      versionLimit: versionLimit
    }
  }))))), !isLimited && hasActions && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_VersionsItemActions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fileId: fileId,
    isCurrent: isCurrent,
    isRetained: isRetained,
    onDelete: handleAction(onDelete),
    onDownload: handleAction(onDownload),
    onPreview: handleAction(onPreview),
    onPromote: handleAction(onPromote),
    onRestore: handleAction(onRestore),
    showDelete: showDelete,
    showDownload: showDownload,
    showPreview: showPreview,
    showPromote: showPromote,
    showRestore: showRestore
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsItem);
//# sourceMappingURL=VersionsItem.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItem.scss":
/*!*********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItem.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!../../../../../postcss-loader/src??ref--10-2!../../../../../sass-loader/dist/cjs.js??ref--10-3!./VersionsItem.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItem.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemAction.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemAction.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/menu */ "./node_modules/box-ui-elements/es/components/menu/index.js");
/* harmony import */ var _VersionsItemAction_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VersionsItemAction.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemAction.scss");
/* harmony import */ var _VersionsItemAction_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_VersionsItemAction_scss__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Item Action component
 * @author Box
 */




var VersionsItemAction = function VersionsItemAction(_ref) {
  var action = _ref.action,
      children = _ref.children,
      fileId = _ref.fileId,
      isCurrent = _ref.isCurrent,
      rest = _objectWithoutProperties(_ref, ["action", "children", "fileId", "isCurrent"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_menu__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], _extends({
    className: "bcs-VersionsItemAction",
    "data-resin-iscurrent": isCurrent,
    "data-resin-itemid": fileId,
    "data-resin-target": action
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsItemAction);
//# sourceMappingURL=VersionsItemAction.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemAction.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemAction.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!../../../../../postcss-loader/src??ref--10-2!../../../../../sass-loader/dist/cjs.js??ref--10-3!./VersionsItemAction.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemAction.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemActions.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemActions.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/dropdown-menu */ "./node_modules/box-ui-elements/es/components/dropdown-menu/index.js");
/* harmony import */ var _icons_general_IconClockPast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icons/general/IconClockPast */ "./node_modules/box-ui-elements/es/icons/general/IconClockPast.js");
/* harmony import */ var _icons_general_IconDownload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons/general/IconDownload */ "./node_modules/box-ui-elements/es/icons/general/IconDownload.js");
/* harmony import */ var _icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/general/IconEllipsis */ "./node_modules/box-ui-elements/es/icons/general/IconEllipsis.js");
/* harmony import */ var _icons_general_IconOpenWith__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../icons/general/IconOpenWith */ "./node_modules/box-ui-elements/es/icons/general/IconOpenWith.js");
/* harmony import */ var _icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../icons/general/IconTrash */ "./node_modules/box-ui-elements/es/icons/general/IconTrash.js");
/* harmony import */ var _icons_general_IconUpload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../icons/general/IconUpload */ "./node_modules/box-ui-elements/es/icons/general/IconUpload.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/tooltip/Tooltip */ "./node_modules/box-ui-elements/es/components/tooltip/Tooltip.js");
/* harmony import */ var _VersionsItemAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VersionsItemAction */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemAction.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/menu */ "./node_modules/box-ui-elements/es/components/menu/index.js");
/* harmony import */ var _VersionsItemActions_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./VersionsItemActions.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemActions.scss");
/* harmony import */ var _VersionsItemActions_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_VersionsItemActions_scss__WEBPACK_IMPORTED_MODULE_13__);
/**
 * 
 * @file Versions Item Actions component
 * @author Box
 */
















var handleMenuClose = function handleMenuClose(event) {
  event.stopPropagation();
};

var handleToggleClick = function handleToggleClick(event) {
  event.stopPropagation();
};

var VersionsItemActions = function VersionsItemActions(_ref) {
  var fileId = _ref.fileId,
      _ref$isCurrent = _ref.isCurrent,
      isCurrent = _ref$isCurrent === void 0 ? false : _ref$isCurrent,
      _ref$isRetained = _ref.isRetained,
      isRetained = _ref$isRetained === void 0 ? false : _ref$isRetained,
      onDelete = _ref.onDelete,
      onDownload = _ref.onDownload,
      onPreview = _ref.onPreview,
      onPromote = _ref.onPromote,
      onRestore = _ref.onRestore,
      _ref$showDelete = _ref.showDelete,
      showDelete = _ref$showDelete === void 0 ? false : _ref$showDelete,
      _ref$showDownload = _ref.showDownload,
      showDownload = _ref$showDownload === void 0 ? false : _ref$showDownload,
      _ref$showPreview = _ref.showPreview,
      showPreview = _ref$showPreview === void 0 ? false : _ref$showPreview,
      _ref$showPromote = _ref.showPromote,
      showPromote = _ref$showPromote === void 0 ? false : _ref$showPromote,
      _ref$showRestore = _ref.showRestore,
      showRestore = _ref$showRestore === void 0 ? false : _ref$showRestore;

  if (!showDelete && !showDownload && !showPreview && !showPromote && !showRestore) {
    return null;
  }

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bcs-VersionsItemActions",
    constrainToScrollParent: true,
    constrainToWindow: true,
    isRightAligned: true,
    onMenuClose: handleMenuClose
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "bcs-VersionsItemActions-toggle",
    "data-resin-iscurrent": isCurrent,
    "data-resin-itemid": fileId,
    "data-resin-target": "overflow",
    onClick: handleToggleClick,
    type: "button"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_4__["default"], {
    height: 4,
    width: 14
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_8__["default"].versionActionToggle, function (text) {
    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
      className: "accessibility-hidden"
    }, text);
  })), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_menu__WEBPACK_IMPORTED_MODULE_12__["Menu"], {
    className: "bcs-VersionsItemActions-menu",
    "data-resin-component": "preview" // Needed for resin events due to tether moving menu to body
    ,
    "data-resin-feature": "versions" // Needed for resin events due to tether moving menu to body

  }, showPreview && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_VersionsItemAction__WEBPACK_IMPORTED_MODULE_11__["default"], {
    action: "preview",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onPreview
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconOpenWith__WEBPACK_IMPORTED_MODULE_5__["default"], null), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_8__["default"].versionActionPreview)), showDownload && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_VersionsItemAction__WEBPACK_IMPORTED_MODULE_11__["default"], {
    action: "download",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onDownload
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconDownload__WEBPACK_IMPORTED_MODULE_3__["default"], null), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_8__["default"].versionActionDownload)), showPromote && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_VersionsItemAction__WEBPACK_IMPORTED_MODULE_11__["default"], {
    action: "promote",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onPromote
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconUpload__WEBPACK_IMPORTED_MODULE_7__["default"], null), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_8__["default"].versionActionPromote)), showRestore && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_VersionsItemAction__WEBPACK_IMPORTED_MODULE_11__["default"], {
    action: "restore",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onRestore
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconClockPast__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 14,
    width: 14
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_8__["default"].versionActionRestore)), showDelete && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"], {
    position: "middle-left",
    text: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_8__["default"].versionActionDisabledRetention),
    isTabbable: false,
    isDisabled: !isRetained
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_VersionsItemAction__WEBPACK_IMPORTED_MODULE_11__["default"], {
    action: "remove",
    fileId: fileId,
    isCurrent: isCurrent,
    isDisabled: isRetained,
    onClick: onDelete
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_6__["default"], null), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_8__["default"].versionActionDelete)))));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsItemActions);
//# sourceMappingURL=VersionsItemActions.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemActions.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemActions.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!../../../../../postcss-loader/src??ref--10-2!../../../../../sass-loader/dist/cjs.js??ref--10-3!./VersionsItemActions.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemActions.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemBadge.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemBadge.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _VersionsItemBadge_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VersionsItemBadge.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemBadge.scss");
/* harmony import */ var _VersionsItemBadge_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_VersionsItemBadge_scss__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Versions Item Badge component
 * @author Box
 */





var VersionsItemBadge = function VersionsItemBadge(_ref) {
  var intl = _ref.intl,
      versionNumber = _ref.versionNumber;
  var intlValues = {
    versionNumber: versionNumber
  };
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    "aria-label": intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_1__["default"].versionNumberLabel, intlValues),
    className: "bcs-VersionsItemBadge"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _messages__WEBPACK_IMPORTED_MODULE_1__["default"].versionNumberBadge, {
    values: intlValues
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(VersionsItemBadge));
//# sourceMappingURL=VersionsItemBadge.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemBadge.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemBadge.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!../../../../../postcss-loader/src??ref--10-2!../../../../../sass-loader/dist/cjs.js??ref--10-3!./VersionsItemBadge.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemBadge.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemButton.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemButton.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/plain-button */ "./node_modules/box-ui-elements/es/components/plain-button/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/box-ui-elements/es/utils/dom.js");
/* harmony import */ var _VersionsItemButton_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VersionsItemButton.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemButton.scss");
/* harmony import */ var _VersionsItemButton_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_VersionsItemButton_scss__WEBPACK_IMPORTED_MODULE_3__);
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
 * @file Versions Item Button component
 * @author Box
 */






var VersionsItemButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VersionsItemButton, _React$Component);

  function VersionsItemButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VersionsItemButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VersionsItemButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "setButtonRef", function (buttonRef) {
      _this.buttonRef = buttonRef;
    });

    _defineProperty(_assertThisInitialized(_this), "setScroll", function () {
      var isSelected = _this.props.isSelected;

      if (_this.buttonRef && isSelected) {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["scrollIntoView"])(_this.buttonRef);
      }
    });

    return _this;
  }

  _createClass(VersionsItemButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevIsSelected = _ref.isSelected;
      var isSelected = this.props.isSelected;

      if (isSelected !== prevIsSelected) {
        this.setScroll();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          fileId = _this$props.fileId,
          isCurrent = _this$props.isCurrent,
          isDisabled = _this$props.isDisabled,
          isSelected = _this$props.isSelected,
          onClick = _this$props.onClick;
      var buttonClassName = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('bcs-VersionsItemButton', {
        'bcs-is-disabled': isDisabled,
        'bcs-is-selected': isSelected && !isDisabled
      });
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        "aria-disabled": isDisabled,
        className: buttonClassName,
        "data-resin-iscurrent": isCurrent,
        "data-resin-itemid": fileId,
        "data-resin-target": "select",
        getDOMRef: this.setButtonRef,
        isDisabled: isDisabled,
        onClick: onClick,
        type: "button"
      }, children);
    }
  }]);

  return VersionsItemButton;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

_defineProperty(VersionsItemButton, "defaultProps", {
  isCurrent: false,
  isDisabled: false,
  isSelected: false
});

/* harmony default export */ __webpack_exports__["default"] = (VersionsItemButton);
//# sourceMappingURL=VersionsItemButton.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemButton.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemButton.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!../../../../../postcss-loader/src??ref--10-2!../../../../../sass-loader/dist/cjs.js??ref--10-3!./VersionsItemButton.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemButton.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemRetention.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemRetention.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/time */ "./node_modules/box-ui-elements/es/components/time/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/messages.js");
var _RETENTION_MAP;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Item Retention component
 * @author Box
 */





var RETENTION_MAP = (_RETENTION_MAP = {}, _defineProperty(_RETENTION_MAP, _constants__WEBPACK_IMPORTED_MODULE_2__["VERSION_RETENTION_DELETE_ACTION"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionRetentionDelete), _defineProperty(_RETENTION_MAP, _constants__WEBPACK_IMPORTED_MODULE_2__["VERSION_RETENTION_REMOVE_ACTION"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionRetentionRemove), _RETENTION_MAP);

var VersionsItemRetention = function VersionsItemRetention(_ref) {
  var retention = _ref.retention;

  var _ref2 = retention || {},
      dispositionAt = _ref2.disposition_at,
      retentionPolicy = _ref2.winning_retention_policy;

  var _ref3 = retentionPolicy || {},
      dispositionAction = _ref3.disposition_action,
      retentionLength = _ref3.retention_length;

  var dispositionAtTime = dispositionAt && new Date(dispositionAt).getTime();

  if (!dispositionAction) {
    return null;
  }

  return retentionLength === _constants__WEBPACK_IMPORTED_MODULE_2__["VERSION_RETENTION_INDEFINITE"] || !dispositionAtTime ? !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionRetentionIndefinite) : !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, RETENTION_MAP[dispositionAction], {
    values: {
      time: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_time__WEBPACK_IMPORTED_MODULE_1__["ReadableTime"], {
        timestamp: dispositionAtTime,
        showWeekday: true
      })
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsItemRetention);
//# sourceMappingURL=VersionsItemRetention.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsList.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsList.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _VersionsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VersionsItem */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItem.js");
/* harmony import */ var _VersionsList_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VersionsList.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsList.scss");
/* harmony import */ var _VersionsList_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_VersionsList_scss__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions List component
 * @author Box
 */





var VersionsList = function VersionsList(_ref) {
  var currentId = _ref.currentId,
      versions = _ref.versions,
      rest = _objectWithoutProperties(_ref, ["currentId", "versions"]);

  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("ul", {
    className: "bcs-VersionsList"
  }, versions.map(function (version) {
    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("li", {
      className: "bcs-VersionsList-item",
      key: version.id
    }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      render: function render(_ref2) {
        var match = _ref2.match;
        return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_VersionsItem__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
          isCurrent: currentId === version.id,
          isSelected: match.params.versionId === version.id,
          version: version
        }, rest));
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsList);
//# sourceMappingURL=VersionsList.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsList.scss":
/*!*********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsList.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!../../../../../postcss-loader/src??ref--10-2!../../../../../sass-loader/dist/cjs.js??ref--10-3!./VersionsList.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsList.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsMenu.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsMenu.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/last */ "./node_modules/lodash/last.js");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/datetime */ "./node_modules/box-ui-elements/es/utils/datetime.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _VersionsGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VersionsGroup */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsGroup.js");
/* harmony import */ var _VersionsMenu_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VersionsMenu.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsMenu.scss");
/* harmony import */ var _VersionsMenu_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_VersionsMenu_scss__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Menu component
 * @author Box
 */








var getHeading = function getHeading(_ref) {
  var intl = _ref.intl,
      version = _ref.version;
  var createdAt = version.created_at;
  var currentDate = new Date();
  var currentDay = currentDate.getDay();
  var currentSunday = currentDate.getDate() - currentDay;
  var createdAtDate = _utils_datetime__WEBPACK_IMPORTED_MODULE_2__["convertToDate"](createdAt);
  var heading;

  if (_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isToday"](createdAtDate)) {
    heading = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionsToday); // Today
  } else if (_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isYesterday"](createdAtDate)) {
    heading = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionsYesterday); // Yesterday
  } else if (!_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isCurrentYear"](createdAtDate)) {
    heading = intl.formatDate(createdAt, {
      year: 'numeric'
    }); // 2018
  } else if (!_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isCurrentMonth"](createdAtDate)) {
    heading = intl.formatDate(createdAt, {
      month: 'long'
    }); // January
  } else if (createdAtDate.getDate() <= currentSunday - 7) {
    heading = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionsThisMonth); // This Month
  } else if (createdAtDate.getDate() <= currentSunday) {
    heading = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionsPriorWeek); // Last Week
  } else {
    heading = intl.formatDate(createdAt, {
      weekday: 'long'
    }); // Monday
  }

  return heading;
};

var VersionsMenu = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).memo(function (_ref2) {
  var intl = _ref2.intl,
      versions = _ref2.versions,
      rest = _objectWithoutProperties(_ref2, ["intl", "versions"]);

  var _ref3 = versions[0] || {},
      currentId = _ref3.id; // Build an ordered set of groups with headings based on the original order of the versions array


  var versionGroups = versions.reduce(function (groups, version) {
    var currentGroup = lodash_last__WEBPACK_IMPORTED_MODULE_1___default()(groups);
    var groupHeading = getHeading({
      intl: intl,
      version: version
    }); // Push a new group if there are no groups or if the heading has changed

    if (!currentGroup || currentGroup.groupHeading !== groupHeading) {
      groups.push({
        groupHeading: groupHeading,
        groupVersions: []
      });
    } // Push the sorted version to the newest group's versions collection


    lodash_last__WEBPACK_IMPORTED_MODULE_1___default()(groups).groupVersions.push(version);
    return groups;
  }, []);
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("ul", {
    className: "bcs-VersionsMenu"
  }, versionGroups.map(function (_ref4) {
    var groupHeading = _ref4.groupHeading,
        groupVersions = _ref4.groupVersions;
    return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement("li", {
      className: "bcs-VersionsMenu-item",
      key: groupHeading
    }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_VersionsGroup__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      currentId: currentId,
      heading: groupHeading,
      versions: groupVersions
    }, rest)));
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(VersionsMenu));
//# sourceMappingURL=VersionsMenu.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsMenu.scss":
/*!*********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsMenu.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!../../../../../postcss-loader/src??ref--10-2!../../../../../sass-loader/dist/cjs.js??ref--10-3!./VersionsMenu.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsMenu.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebar.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebar.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_inline_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/inline-error */ "./node_modules/box-ui-elements/es/components/inline-error/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SidebarContent */ "./node_modules/box-ui-elements/es/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _VersionsMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VersionsMenu */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsMenu.js");
/* harmony import */ var _common_nav_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/nav-button */ "./node_modules/box-ui-elements/es/elements/common/nav-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./node_modules/box-ui-elements/es/constants.js");
/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/loading-indicator */ "./node_modules/box-ui-elements/es/components/loading-indicator/index.js");
/* harmony import */ var _VersionsSidebar_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VersionsSidebar.scss */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebar.scss");
/* harmony import */ var _VersionsSidebar_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_VersionsSidebar_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Sidebar component
 * @author Box
 */










var MAX_VERSIONS = _constants__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_FETCH_END"];

var VersionsSidebar = function VersionsSidebar(_ref) {
  var error = _ref.error,
      isLoading = _ref.isLoading,
      parentName = _ref.parentName,
      versions = _ref.versions,
      rest = _objectWithoutProperties(_ref, ["error", "isLoading", "parentName", "versions"]);

  var showLimit = versions.length >= MAX_VERSIONS;
  var showVersions = !!versions.length;
  var showEmpty = !isLoading && !showVersions;
  var showError = !!error;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_SidebarContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "bcs-Versions",
    "data-resin-component": "preview",
    "data-resin-feature": "versions",
    title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_common_nav_button__WEBPACK_IMPORTED_MODULE_5__["BackButton"], {
      "data-resin-target": "back",
      to: "/".concat(parentName)
    }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionsTitle))
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_loading_indicator__WEBPACK_IMPORTED_MODULE_7__["LoadingIndicatorWrapper"], {
    className: "bcs-Versions-content",
    crawlerPosition: "top",
    isLoading: isLoading
  }, showError && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_inline_error__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionServerError)
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), error)), showEmpty && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-Versions-empty"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionsEmpty)), showVersions && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-Versions-menu"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_VersionsMenu__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    versions: versions
  }, rest))), showLimit && !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
    className: "bcs-Versions-maxEntries"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _extends({}, _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionMaxEntries, {
    values: {
      maxVersions: MAX_VERSIONS
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsSidebar);
//# sourceMappingURL=VersionsSidebar.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebar.scss":
/*!************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebar.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../css-loader!../../../../../postcss-loader/src??ref--10-2!../../../../../sass-loader/dist/cjs.js??ref--10-3!./VersionsSidebar.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebar.scss");

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

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebarAPI.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebarAPI.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VersionsSidebarAPI; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./node_modules/box-ui-elements/es/api/index.js");
/* harmony import */ var _utils_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/fields */ "./node_modules/box-ui-elements/es/utils/fields.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Sidebar API Helper
 * @author Box
 */



var VersionsSidebarAPI = function VersionsSidebarAPI(_ref) {
  var _this = this;

  var api = _ref.api,
      fileId = _ref.fileId;

  _classCallCheck(this, VersionsSidebarAPI);

  _defineProperty(this, "fetchData", function () {
    return Promise.all([_this.fetchFile(), _this.fetchVersions()]).then(_this.fetchVersionCurrent);
  });

  _defineProperty(this, "fetchDownloadUrl", function (version) {
    return new Promise(function (resolve, reject) {
      if (!version) {
        return reject(new Error('Could not find requested version'));
      }

      return _this.api.getFileAPI().getDownloadUrl(_this.fileId, version, resolve, reject);
    });
  });

  _defineProperty(this, "fetchFile", function () {
    return new Promise(function (resolve, reject) {
      return _this.api.getFileAPI().getFile(_this.fileId, resolve, reject, {
        fields: _utils_fields__WEBPACK_IMPORTED_MODULE_1__["FILE_VERSION_FIELDS_TO_FETCH"],
        forceFetch: true
      });
    });
  });

  _defineProperty(this, "fetchVersions", function () {
    return new Promise(function (resolve, reject) {
      return _this.api.getVersionsAPI(false).getVersions(_this.fileId, resolve, reject);
    });
  });

  _defineProperty(this, "fetchVersionCurrent", function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        fileResponse = _ref3[0],
        versionsResponse = _ref3[1];

    var _fileResponse$file_ve = fileResponse.file_version,
        file_version = _fileResponse$file_ve === void 0 ? {} : _fileResponse$file_ve;
    return new Promise(function (resolve, reject) {
      return _this.api.getVersionsAPI(false).getVersion(_this.fileId, file_version.id, function (currentVersionResponse) {
        resolve([fileResponse, _this.api.getVersionsAPI(false).addCurrentVersion(currentVersionResponse, versionsResponse, fileResponse)]);
      }, reject);
    });
  });

  _defineProperty(this, "fetchVersion", function (versionId) {
    return new Promise(function (resolve, reject) {
      return _this.api.getVersionsAPI(false).getVersion(_this.fileId, versionId, resolve, reject);
    });
  });

  _defineProperty(this, "deleteVersion", function (version) {
    var _ref4 = version || {},
        versionId = _ref4.id,
        _ref4$permissions = _ref4.permissions,
        permissions = _ref4$permissions === void 0 ? {} : _ref4$permissions;

    return new Promise(function (resolve, reject) {
      return _this.api.getVersionsAPI(false).deleteVersion({
        fileId: _this.fileId,
        permissions: permissions,
        successCallback: resolve,
        errorCallback: reject,
        versionId: versionId
      });
    });
  });

  _defineProperty(this, "promoteVersion", function (version) {
    var _ref5 = version || {},
        versionId = _ref5.id,
        _ref5$permissions = _ref5.permissions,
        permissions = _ref5$permissions === void 0 ? {} : _ref5$permissions;

    return new Promise(function (resolve, reject) {
      return _this.api.getVersionsAPI(false).promoteVersion({
        fileId: _this.fileId,
        permissions: permissions,
        successCallback: resolve,
        errorCallback: reject,
        versionId: versionId
      });
    });
  });

  _defineProperty(this, "restoreVersion", function (version) {
    var _ref6 = version || {},
        versionId = _ref6.id,
        _ref6$permissions = _ref6.permissions,
        permissions = _ref6$permissions === void 0 ? {} : _ref6$permissions;

    return new Promise(function (resolve, reject) {
      return _this.api.getVersionsAPI(false).restoreVersion({
        fileId: _this.fileId,
        permissions: permissions,
        successCallback: resolve,
        errorCallback: reject,
        versionId: versionId
      });
    });
  });

  this.api = api;
  this.fileId = fileId;
};


//# sourceMappingURL=VersionsSidebarAPI.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebarContainer.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebarContainer.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_4__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api */ "./node_modules/box-ui-elements/es/api/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _utils_iframe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/iframe */ "./node_modules/box-ui-elements/es/utils/iframe.js");
/* harmony import */ var _VersionsSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VersionsSidebar */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebar.js");
/* harmony import */ var _VersionsSidebarAPI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VersionsSidebarAPI */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebarAPI.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/api-context */ "./node_modules/box-ui-elements/es/elements/common/api-context/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
 * @file Versions Sidebar container
 * @author Box
 */













var VersionsSidebarContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VersionsSidebarContainer, _React$Component);

  function VersionsSidebarContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VersionsSidebarContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VersionsSidebarContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: true,
      isWatermarked: false,
      versionCount: Infinity,
      versionLimit: Infinity,
      versions: []
    });

    _defineProperty(_assertThisInitialized(_this), "window", window);

    _defineProperty(_assertThisInitialized(_this), "handleActionDelete", function (versionId) {
      _this.setState({
        isLoading: true
      });

      return _this.api.deleteVersion(_this.findVersion(versionId)).then(function () {
        return _this.api.fetchVersion(versionId);
      }).then(_this.handleDeleteSuccess).then(function () {
        return _this.props.onVersionDelete(versionId);
      }).catch(function () {
        return _this.handleActionError(_messages__WEBPACK_IMPORTED_MODULE_6__["default"].versionActionDeleteError);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionDownload", function (versionId) {
      return _this.api.fetchDownloadUrl(_this.findVersion(versionId)).then(_utils_iframe__WEBPACK_IMPORTED_MODULE_7__["default"]).then(function () {
        return _this.props.onVersionDownload(versionId);
      }).catch(function () {
        return _this.handleActionError(_messages__WEBPACK_IMPORTED_MODULE_6__["default"].versionActionDownloadError);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionPreview", function (versionId) {
      _this.updateVersion(versionId);

      _this.props.onVersionPreview(versionId);
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionPromote", function (versionId) {
      _this.setState({
        isLoading: true
      });

      return _this.api.promoteVersion(_this.findVersion(versionId)).then(_this.api.fetchData).then(_this.handleFetchSuccess).then(_this.handlePromoteSuccess).then(function () {
        return _this.props.onVersionPromote(versionId);
      }).catch(function () {
        return _this.handleActionError(_messages__WEBPACK_IMPORTED_MODULE_6__["default"].versionActionPromoteError);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionRestore", function (versionId) {
      _this.setState({
        isLoading: true
      });

      return _this.api.restoreVersion(_this.findVersion(versionId)).then(function () {
        return _this.api.fetchVersion(versionId);
      }).then(_this.handleRestoreSuccess).then(function () {
        return _this.props.onVersionRestore(versionId);
      }).catch(function () {
        return _this.handleActionError(_messages__WEBPACK_IMPORTED_MODULE_6__["default"].versionActionRestoreError);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleActionError", function (message) {
      _this.setState({
        error: message,
        isLoading: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteSuccess", function (data) {
      var selectedVersionId = _this.props.versionId;
      var versionId = data.id;

      _this.mergeResponse(data); // Bump the user to the current version if they deleted their selected version


      if (versionId === selectedVersionId) {
        _this.updateVersionToCurrent();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRestoreSuccess", function (data) {
      _this.mergeResponse(data);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFetchError", function () {
      _this.setState({
        error: _messages__WEBPACK_IMPORTED_MODULE_6__["default"].versionFetchError,
        isLoading: false,
        isWatermarked: false,
        versionCount: 0,
        versions: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFetchSuccess", function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          fileResponse = _ref2[0],
          versionsResponse = _ref2[1];

      var api = _this.props.api;
      var version_limit = fileResponse.version_limit;
      var isWatermarked = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(fileResponse, 'watermark_info.is_watermarked', false);
      var versionLimit = version_limit !== null && version_limit !== undefined ? version_limit : Infinity;
      var versionsWithPermissions = api.getVersionsAPI(false).addPermissions(versionsResponse, fileResponse) || {};
      var versions = versionsWithPermissions.entries,
          versionCount = versionsWithPermissions.total_count;

      _this.setState({
        error: undefined,
        isLoading: false,
        isWatermarked: isWatermarked,
        versionCount: versionCount,
        versionLimit: versionLimit,
        versions: _this.sortVersions(versions)
      }, _this.verifyVersion);

      return [fileResponse, versionsResponse];
    });

    _defineProperty(_assertThisInitialized(_this), "handlePromoteSuccess", function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1),
          file = _ref4[0];

      var fileVersion = file.file_version;

      if (fileVersion) {
        _this.updateVersion(fileVersion.id);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "initialize", function () {
      _this.api = new _VersionsSidebarAPI__WEBPACK_IMPORTED_MODULE_9__["default"](_this.props);
    });

    _defineProperty(_assertThisInitialized(_this), "fetchData", function () {
      _this.api.fetchData().then(_this.handleFetchSuccess).catch(_this.handleFetchError);
    });

    _defineProperty(_assertThisInitialized(_this), "findVersion", function (versionId) {
      var versions = _this.state.versions;
      return versions.find(function (version) {
        return version.id === versionId;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentVersionId", function () {
      var versions = _this.state.versions;
      return versions[0] ? versions[0].id : null;
    });

    _defineProperty(_assertThisInitialized(_this), "mergeVersions", function (newVersion) {
      var versions = _this.state.versions;
      var newVersionId = newVersion ? newVersion.id : '';
      return versions.map(function (version) {
        return version.id === newVersionId ? lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()(_objectSpread({}, version), newVersion) : version;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "mergeResponse", function (data) {
      var newVersions = _this.mergeVersions(data);

      _this.setState({
        error: undefined,
        isLoading: false,
        versions: newVersions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateVersion", function (versionId) {
      var _this$props = _this.props,
          history = _this$props.history,
          match = _this$props.match;
      return history.push(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(match.path, _objectSpread({}, match.params, {
        versionId: versionId
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "updateVersionToCurrent", function () {
      _this.updateVersion(_this.getCurrentVersionId());
    });

    _defineProperty(_assertThisInitialized(_this), "verifyVersion", function () {
      var _this$props2 = _this.props,
          onVersionChange = _this$props2.onVersionChange,
          versionId = _this$props2.versionId;

      var selectedVersion = _this.findVersion(versionId);

      if (selectedVersion) {
        onVersionChange(selectedVersion, {
          currentVersionId: _this.getCurrentVersionId(),
          updateVersionToCurrent: _this.updateVersionToCurrent
        });
      } else {
        _this.updateVersionToCurrent();
      }
    });

    return _this;
  }

  _createClass(VersionsSidebarContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialize();
      this.fetchData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref5) {
      var prevFileId = _ref5.fileId,
          prevVersionId = _ref5.versionId;
      var _this$props3 = this.props,
          fileId = _this$props3.fileId,
          versionId = _this$props3.versionId;

      if (fileId !== prevFileId) {
        this.refresh();
      }

      if (versionId !== prevVersionId) {
        this.verifyVersion();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Reset the current version id since the wrapping route is no longer active
      this.props.onVersionChange(null);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.initialize();
      this.setState({
        isLoading: true
      }, this.fetchData);
    }
  }, {
    key: "sortVersions",
    value: function sortVersions() {
      var versions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return _toConsumableArray(versions).sort(function (a, b) {
        return Date.parse(b.created_at) - Date.parse(a.created_at);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          fileId = _this$props4.fileId,
          parentName = _this$props4.parentName;
      return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).createElement(_VersionsSidebar__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
        fileId: fileId,
        onDelete: this.handleActionDelete,
        onDownload: this.handleActionDownload,
        onPreview: this.handleActionPreview,
        onPromote: this.handleActionPromote,
        onRestore: this.handleActionRestore,
        parentName: parentName
      }, this.state));
    }
  }]);

  return VersionsSidebarContainer;
}(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Component);

_defineProperty(VersionsSidebarContainer, "defaultProps", {
  onVersionChange: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionDownload: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionPreview: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionPromote: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionRestore: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  parentName: ''
});

/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_1___default()([!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _common_api_context__WEBPACK_IMPORTED_MODULE_10__["withAPIContext"]])(VersionsSidebarContainer));
//# sourceMappingURL=VersionsSidebarContainer.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/index.js ***!
  \************************************************************************************/
/*! exports provided: default, VersionsSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VersionsSidebarContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VersionsSidebarContainer */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebarContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _VersionsSidebarContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _VersionsSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VersionsSidebar */ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VersionsSidebarComponent", function() { return _VersionsSidebar__WEBPACK_IMPORTED_MODULE_1__["default"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/elements/content-sidebar/versions/messages.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/elements/content-sidebar/versions/messages.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var messages = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-intl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  versionsEmpty: {
    "id": "be.sidebarVersions.empty",
    "defaultMessage": "No prior versions are available for this file."
  },
  versionsPriorWeek: {
    "id": "be.sidebarVersions.priorWeek",
    "defaultMessage": "Last Week"
  },
  versionsThisMonth: {
    "id": "be.sidebarVersions.thisMonth",
    "defaultMessage": "This Month"
  },
  versionsToday: {
    "id": "be.sidebarVersions.today",
    "defaultMessage": "Today"
  },
  versionsYesterday: {
    "id": "be.sidebarVersions.yesterday",
    "defaultMessage": "Yesterday"
  },
  versionsTitle: {
    "id": "be.sidebarVersions.title",
    "defaultMessage": "Version History"
  },
  versionCurrent: {
    "id": "be.sidebarVersions.current",
    "defaultMessage": "Current Version"
  },
  versionActionDelete: {
    "id": "be.sidebarVersions.delete",
    "defaultMessage": "Delete"
  },
  versionActionDeleteError: {
    "id": "be.sidebarVersions.deleteError",
    "defaultMessage": "File version could not be deleted."
  },
  versionActionDisabledRetention: {
    "id": "be.sidebarVersions.disabledByRetention",
    "defaultMessage": "Disabled by retention policy"
  },
  versionActionDownload: {
    "id": "be.sidebarVersions.download",
    "defaultMessage": "Download"
  },
  versionActionDownloadError: {
    "id": "be.sidebarVersions.downloadError",
    "defaultMessage": "File version could not be downloaded."
  },
  versionActionPreview: {
    "id": "be.sidebarVersions.preview",
    "defaultMessage": "Preview"
  },
  versionActionPromote: {
    "id": "be.sidebarVersions.promote",
    "defaultMessage": "Make Current"
  },
  versionActionPromoteError: {
    "id": "be.sidebarVersions.promoteError",
    "defaultMessage": "File version could not be made current."
  },
  versionActionRestore: {
    "id": "be.sidebarVersions.restore",
    "defaultMessage": "Restore"
  },
  versionActionRestoreError: {
    "id": "be.sidebarVersions.restoreError",
    "defaultMessage": "File version could not be restored."
  },
  versionActionToggle: {
    "id": "be.sidebarVersions.toggle",
    "defaultMessage": "Toggle Actions Menu"
  },
  versionDeletedBy: {
    "id": "be.sidebarVersions.deletedBy",
    "defaultMessage": "Deleted by {name}"
  },
  versionFetchError: {
    "id": "be.sidebarVersions.fetchError",
    "defaultMessage": "File versions could not be retrieved."
  },
  versionLimitExceeded: {
    "id": "be.sidebarVersions.versionLimitExceeded",
    "defaultMessage": "You are limited to the last {versionLimit, number} {versionLimit, plural, one {version} other {versions}}."
  },
  versionNumberBadge: {
    "id": "be.sidebarVersions.versionNumberBadge",
    "defaultMessage": "V{versionNumber}"
  },
  versionNumberLabel: {
    "id": "be.sidebarVersions.versionNumberLabel",
    "defaultMessage": "Version number {versionNumber}"
  },
  versionPromotedBy: {
    "id": "be.sidebarVersions.promotedBy",
    "defaultMessage": "Promoted from v{versionPromoted} by {name}"
  },
  versionRestoredBy: {
    "id": "be.sidebarVersions.restoredBy",
    "defaultMessage": "Restored by {name}"
  },
  versionServerError: {
    "id": "be.sidebarVersions.serverError",
    "defaultMessage": "Server Error"
  },
  versionUploadedBy: {
    "id": "be.sidebarVersions.uploadedBy",
    "defaultMessage": "Uploaded by {name}"
  },
  versionUserUnknown: {
    "id": "be.sidebarVersions.versionUserUnknown",
    "defaultMessage": "Unknown"
  },
  versionMaxEntries: {
    "id": "be.sidebarVersions.versionMaxEntries",
    "defaultMessage": "Version history is limited to the last {maxVersions} entries."
  },
  versionRetentionDelete: {
    "id": "be.sidebarVersions.versionRetentionDelete",
    "defaultMessage": "Will be deleted {time} by retention policy."
  },
  versionRetentionIndefinite: {
    "id": "be.sidebarVersions.versionRetentionIndefinite",
    "defaultMessage": "Retained indefinitely by retention policy."
  },
  versionRetentionRemove: {
    "id": "be.sidebarVersions.versionRetentionRemove",
    "defaultMessage": "Retention policy expires on {time}."
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconClockPast.js":
/*!************************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconClockPast.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");



var IconClockPast = function IconClockPast(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#444' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 14 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-clock-past ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 14",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 1)"
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("rect", {
    className: "fill-color",
    fill: color,
    height: "5",
    rx: ".5",
    width: "1",
    x: "9.66",
    y: "3"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("rect", {
    className: "fill-color",
    fill: color,
    height: "1",
    rx: ".5",
    width: "3",
    x: "9.66",
    y: "7"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "stroke-color",
    d: "M5.66 10.62C6.697 11.48 8.032 12 9.487 12c3.314 0 6-2.686 6-6s-2.686-6-6-6c-3.313 0-6 2.686-6 6",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    d: "M6.317 5l-2.83 2.828L.66 5",
    fill: color
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconClockPast);
//# sourceMappingURL=IconClockPast.js.map

/***/ }),

/***/ "./node_modules/box-ui-elements/es/icons/general/IconDownload.js":
/*!***********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconDownload.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");




var IconDownload = function IconDownload(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGray80"] : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width;
  return !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-download ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M14 14v1H2v-1h12zM10.996 2v4.997H14L8 13 2 6.997h3.004V2h5.992zm-.998 1H6.002v4.996h-1.59L8 11.586l3.589-3.59H9.998V3z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconDownload);
//# sourceMappingURL=IconDownload.js.map

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

/***/ "./node_modules/box-ui-elements/es/icons/general/IconUpload.js":
/*!*********************************************************************!*\
  !*** ./node_modules/box-ui-elements/es/icons/general/IconUpload.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./node_modules/box-ui-elements/es/styles/variables.js");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./node_modules/box-ui-elements/es/icons/accessible-svg/index.js");




var IconUpload = function IconUpload(_ref) {
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
    className: "icon-upload ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, !(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M14 14v1H2v-1h12zM8 1l6 6.003h-3.004V12H5.004V7.003H2L8 1zm0 1.413l-3.589 3.59h1.591v4.998h3.996V6.004h1.59L8 2.414z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconUpload);
//# sourceMappingURL=IconUpload.js.map

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsGroup.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsGroup.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-VersionsGroup-heading {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  color: #909090;\n  font-size: 14px;\n  line-height: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItem.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItem.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.bcs-VersionsItem {\n  position: relative;\n}\n.bcs-VersionsItem .bcs-VersionsItemButton {\n  padding: 15px 10px;\n}\n.bcs-VersionsItem .bcs-VersionsItemActions .aria-menu {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.bcs-VersionsItem .bcs-VersionsItemActions-toggle {\n  position: absolute;\n  top: 15px;\n  right: 10px;\n}\n\n.bcs-VersionsItem-badge {\n  flex: 1 0 auto;\n  margin-right: 10px;\n}\n\n.bcs-VersionsItem-current {\n  color: #0061d5;\n  font-weight: bold;\n}\n\n.bcs-VersionsItem-details {\n  flex: 1 1 100%;\n  overflow: hidden;\n}\n.bcs-VersionsItem-details > :not(.bcs-VersionsItem-info) {\n  margin-right: 35px;\n}\n\n.bcs-VersionsItem-log {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.bcs-VersionsItem-info {\n  display: flex;\n  align-items: center;\n  color: #767676;\n  white-space: nowrap;\n}\n\n.bcs-VersionsItem-retention {\n  display: flex;\n  align-items: center;\n  margin-top: 8px;\n  color: #767676;\n}\n\n.bcs-VersionsItem-footer {\n  color: #767676;\n  font-size: 12px;\n}\n\n.bcs-VersionsItem-size {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.bcs-VersionsItem-size::before {\n  padding-right: 5px;\n  padding-left: 5px;\n  font-size: 8px;\n  vertical-align: top;\n  content: \"\\2022\";\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemAction.scss":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemAction.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-VersionsItemAction .fill-color {\n  fill: #222;\n}\n.bcs-VersionsItemAction .stroke-color {\n  stroke: #222;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemActions.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemActions.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-VersionsItemActions-toggle {\n  display: flex;\n  align-items: center;\n  align-self: flex-start;\n  justify-content: center;\n  width: 32px;\n  height: 24px;\n  border-radius: 2px;\n  outline: none;\n  pointer-events: auto;\n}\n.bcs-VersionsItemActions-toggle:focus, .bcs-VersionsItemActions-toggle:hover {\n  background-color: #e8e8e8;\n  fill: #222;\n}\n.bcs-VersionsItemActions-toggle .fill-color {\n  fill: #909090;\n}\n.bcs-VersionsItemActions-toggle .icon-clock-past {\n  margin-left: -2px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemBadge.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemBadge.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-VersionsItemBadge {\n  padding: 10px 8px;\n  color: #0061d5;\n  font-size: 18px;\n  text-align: center;\n  background-color: #ecf4fc;\n  border-radius: 4px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemButton.scss":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsItemButton.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-VersionsItemButton {\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  color: #222;\n  font-size: 100%;\n  line-height: 20px;\n  text-align: left;\n  background-color: transparent;\n  border-radius: 4px;\n  outline: none;\n  transition: background-color 50ms ease-in, border 50ms ease-in;\n}\n.bcs-VersionsItemButton, .bcs-VersionsItemButton:hover, .bcs-VersionsItemButton:focus {\n  border: 1px solid transparent;\n}\n.bcs-VersionsItemButton:hover, .bcs-VersionsItemButton:focus {\n  border-color: #909090;\n}\n.bcs-VersionsItemButton.bcs-is-disabled {\n  border-color: transparent;\n  cursor: default;\n  pointer-events: none;\n}\n.bcs-VersionsItemButton.bcs-is-disabled .bcs-VersionsItemBadge {\n  background-color: #f4f4f4;\n}\n.bcs-VersionsItemButton.bcs-is-disabled .bcs-VersionsItemBadge,\n.bcs-VersionsItemButton.bcs-is-disabled .bcs-VersionsItem-current {\n  color: inherit;\n}\n.bcs-VersionsItemButton.bcs-is-selected {\n  background-color: #f6fafd;\n  border-color: #0061d5;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsList.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsList.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".be .bcs-VersionsList {\n  margin: 0;\n}\n\n.bcs-VersionsList-item .bcs-VersionsItem {\n  width: calc(100% + 20px);\n  margin-right: -10px;\n  margin-bottom: -1px;\n  margin-left: -10px;\n}\n.bcs-VersionsList-item .bcs-VersionsItem:focus, .bcs-VersionsList-item .bcs-VersionsItem:hover {\n  z-index: 2;\n}\n.bcs-VersionsList-item .bcs-VersionsItem.bcs-is-selected {\n  z-index: 1;\n}\n.bcs-VersionsList-item + .bcs-VersionsList-item {\n  border-top: 1px solid #e8e8e8;\n}\n.bcs-VersionsList-item + .bcs-VersionsList-item .bcs-VersionsItem {\n  margin-top: -1px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsMenu.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsMenu.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-VersionsMenu-item + .bcs-VersionsMenu-item {\n  border-top: 1px solid #e8e8e8;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebar.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./node_modules/box-ui-elements/es/elements/content-sidebar/versions/VersionsSidebar.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bcs-Versions .bcs-scroll-content {\n  width: 100%;\n}\n.bcs-Versions .bcs-section-content:first-child {\n  padding-top: 0;\n}\n.bcs-Versions .bdl-BackButton {\n  margin-right: 5px;\n}\n.bcs-Versions .crawler {\n  display: flex;\n  align-items: center;\n  height: 50px;\n}\n\n.bcs-Versions-content {\n  height: 100%;\n  padding-right: 25px;\n  padding-left: 25px;\n}\n\n.bcs-Versions-empty,\n.bcs-Versions-maxEntries {\n  padding-top: 10px;\n  text-align: center;\n}\n\n.be .bcs-Versions-menu {\n  padding-bottom: 20px;\n}", ""]);

// exports


/***/ })

}]);