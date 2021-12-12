webpackHotUpdate("main",{

/***/ "./src/ZoomSample/feature/video/video.tsx":
/*!************************************************!*\
  !*** ./src/ZoomSample/feature/video/video.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_zoom_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/zoom-context */ "./src/ZoomSample/context/zoom-context.ts");
/* harmony import */ var _context_media_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/media-context */ "./src/ZoomSample/context/media-context.ts");
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/avatar */ "./src/ZoomSample/feature/video/components/avatar.tsx");
/* harmony import */ var _components_video_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/video-footer */ "./src/ZoomSample/feature/video/components/video-footer.tsx");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pagination */ "./src/ZoomSample/feature/video/components/pagination.tsx");
/* harmony import */ var _hooks_useCanvasDimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useCanvasDimension */ "./src/ZoomSample/feature/video/hooks/useCanvasDimension.ts");
/* harmony import */ var _hooks_useGalleryLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useGalleryLayout */ "./src/ZoomSample/feature/video/hooks/useGalleryLayout.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/usePagination */ "./src/ZoomSample/feature/video/hooks/usePagination.ts");
/* harmony import */ var _hooks_useAvtiveVideo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useAvtiveVideo */ "./src/ZoomSample/feature/video/hooks/useAvtiveVideo.ts");
/* harmony import */ var _hooks_useShare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/useShare */ "./src/ZoomSample/feature/video/hooks/useShare.ts");
/* harmony import */ var _video_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video.scss */ "./src/ZoomSample/feature/video/video.scss");
/* harmony import */ var _video_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_video_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/platform */ "./src/ZoomSample/utils/platform.ts");
/* harmony import */ var _chat_chat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../chat/chat */ "./src/ZoomSample/feature/chat/chat.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/e/sw_capstone/frontend/src/ZoomSample/feature/video/video.tsx",
    _s = __webpack_require__.$Refresh$.signature();


















const LeaveBtn = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].button`
  position: absolute;
  right: 0;
  margin-right: 30px;
  color: red;
`;

const VideoContainer = props => {
  _s();

  const zmClient = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_zoom_context__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const {
    mediaStream,
    video: {
      decode: isVideoDecodeReady
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_media_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const videoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const shareRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const selfShareRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const shareContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const canvasDimension = Object(_hooks_useCanvasDimension__WEBPACK_IMPORTED_MODULE_7__["useCanvasDimension"])(mediaStream, videoRef);
  const activeVideo = Object(_hooks_useAvtiveVideo__WEBPACK_IMPORTED_MODULE_10__["useActiveVideo"])(zmClient);
  const {
    page,
    pageSize,
    totalPage,
    totalSize,
    setPage
  } = Object(_hooks_usePagination__WEBPACK_IMPORTED_MODULE_9__["usePagination"])(zmClient, canvasDimension);
  const {
    visibleParticipants,
    layout: videoLayout
  } = Object(_hooks_useGalleryLayout__WEBPACK_IMPORTED_MODULE_8__["useGalleryLayout"])(zmClient, mediaStream, isVideoDecodeReady, videoRef, canvasDimension, {
    page,
    pageSize,
    totalPage,
    totalSize
  });
  const {
    isRecieveSharing,
    isStartedShare,
    sharedContentDimension
  } = Object(_hooks_useShare__WEBPACK_IMPORTED_MODULE_11__["useShare"])(zmClient, mediaStream, shareRef);
  const isSharing = isRecieveSharing || isStartedShare;
  const contentDimension = sharedContentDimension;

  if (isSharing && shareContainerRef.current) {
    const {
      width,
      height
    } = sharedContentDimension;
    const {
      width: containerWidth,
      height: containerHeight
    } = shareContainerRef.current.getBoundingClientRect();
    const ratio = Math.min(containerWidth / width, containerHeight / height, 1);
    contentDimension.width = Math.floor(width * ratio);
    contentDimension.height = Math.floor(height * ratio);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("div", {
    className: "viewport",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-container', {
        'in-sharing': isSharing
      }),
      ref: shareContainerRef,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("div", {
        className: "share-container-viewport",
        style: {
          width: `${contentDimension.width}px`,
          height: `${contentDimension.height}px`
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("canvas", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-canvas', {
            hidden: isStartedShare
          }),
          ref: shareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, undefined), Object(_utils_platform__WEBPACK_IMPORTED_MODULE_13__["isSupportWebCodecs"])() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("video", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-canvas', {
            hidden: isRecieveSharing
          }),
          ref: selfShareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 33
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("canvas", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-canvas', {
            hidden: isRecieveSharing
          }),
          ref: selfShareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 14
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('video-container', {
        'in-sharing': isSharing
      }),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("canvas", {
        className: "video-canvas",
        id: "video-canvas",
        width: "800",
        height: "600",
        ref: videoRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("ul", {
        className: "avatar-list",
        children: visibleParticipants.map((user, index) => {
          if (index > videoLayout.length - 1) {
            return null;
          }

          const dimension = videoLayout[index];
          const {
            width,
            height,
            x,
            y
          } = dimension;
          const {
            height: canvasHeight
          } = canvasDimension;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
            participant: user,
            isActive: activeVideo === user.userId,
            style: {
              width: `${width}px`,
              height: `${height}px`,
              top: `${canvasHeight - y - height}px`,
              left: `${x}px`
            }
          }, user.userId, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_video_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "video-operations",
      sharing: true,
      shareRef: selfShareRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }, undefined), totalPage > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
      page: page,
      totalPage: totalPage,
      setPage: setPage,
      inSharing: isSharing
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chat_chat__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, undefined);
};

_s(VideoContainer, "VJZOCyD9ncIV/tezr9aGfP50uZs=", false, function () {
  return [_hooks_useCanvasDimension__WEBPACK_IMPORTED_MODULE_7__["useCanvasDimension"], _hooks_useAvtiveVideo__WEBPACK_IMPORTED_MODULE_10__["useActiveVideo"], _hooks_usePagination__WEBPACK_IMPORTED_MODULE_9__["usePagination"], _hooks_useGalleryLayout__WEBPACK_IMPORTED_MODULE_8__["useGalleryLayout"], _hooks_useShare__WEBPACK_IMPORTED_MODULE_11__["useShare"]];
});

_c = VideoContainer;
/* harmony default export */ __webpack_exports__["default"] = (VideoContainer);

var _c;

__webpack_require__.$Refresh$.register(_c, "VideoContainer");

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
//# sourceMappingURL=main.49b0744ab9d79f47546c.hot-update.js.map