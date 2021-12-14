webpackHotUpdate("main",{

/***/ "./src/ZoomSample/feature/video/UnderStandModal.js":
/*!*********************************************************!*\
  !*** ./src/ZoomSample/feature/video/UnderStandModal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/ZoomSample/feature/video/UnderStandModal.js";






const ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  box-sizing: border-box;
  display: ${props => props.visible ? 'block' : 'none'};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;
_c = ModalWrapper;
const ModalOverlay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  box-sizing: border-box;
  display: ${props => props.visible ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
_c2 = ModalOverlay;
const ModalInner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px+ 20px;
  height: 300px;
  text-align: center;
`;
_c3 = ModalInner;
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  height: 3rem;
  width: 100px;
  font-weight: bold;
  font-size: 1.3rem;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 150px;
`;
const OkBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  height: 3rem;
  width: 100px;
  font-weight: bold;
  font-size: 1.3rem;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 150px;
`;
_c4 = OkBtn;
UnderStandModal.propTypes = {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

function UnderStandModal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
  lessonId,
  sessionId,
  lectureId,
  understandId
}) {
  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const onSubmit = (e, response) => {
    const resp = parseInt(response);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/lecture/${lectureId}/lesson/${lessonId}/live/understanding/${understandId.understandId}/student`, {
      response: 1
    }, {
      params: {
        session: `${sessionId}`
      }
    }).then(res => {
      console.log(res);
      const result = res.data.data;
      onClose(e);
    }).catch(error => {
      console.log(error);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ModalOverlay, {
      visible: visible
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ModalWrapper, {
      className: className,
      onClick: maskClosable ? onMaskClick : null,
      tabIndex: "-1",
      visible: visible,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ModalInner, {
        tabIndex: "0",
        className: "modal-inner",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              fontSize: '1rem',
              fontWeight: 'bold'
            },
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this), "\uC218\uC5C5\uC5D0 \uB300\uD574 \uC774\uD574\uAC00 \uB418\uC5C8\uB098\uC694?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              display: 'flex'
            },
            children: [closable && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(OkBtn, {
              className: "modal-ok",
              onClick: e => onSubmit(e, 1),
              children: "o"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, this), closable && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(OkBtn, {
              className: "modal-ok",
              onClick: e => onSubmit(e, 0),
              children: "x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c5 = UnderStandModal;
/* harmony default export */ __webpack_exports__["default"] = (UnderStandModal);

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "ModalWrapper");
__webpack_require__.$Refresh$.register(_c2, "ModalOverlay");
__webpack_require__.$Refresh$.register(_c3, "ModalInner");
__webpack_require__.$Refresh$.register(_c4, "OkBtn");
__webpack_require__.$Refresh$.register(_c5, "UnderStandModal");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.ab5ecce0af1488fcc0a6.hot-update.js.map