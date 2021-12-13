webpackHotUpdate("main",{

/***/ "./src/zoomtest/TestZoom.tsx":
/*!***********************************!*\
  !*** ./src/zoomtest/TestZoom.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zoom/videosdk */ "./node_modules/@zoom/videosdk/dist/index.umd.js");
/* harmony import */ var _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zoom_videosdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _ZoomSample_feature_home_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ZoomSample/feature/home/home */ "./src/ZoomSample/feature/home/home.tsx");
/* harmony import */ var _ZoomSample_feature_video_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ZoomSample/feature/video/video */ "./src/ZoomSample/feature/video/video.tsx");
/* harmony import */ var _ZoomSample_feature_video_video_single__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ZoomSample/feature/video/video-single */ "./src/ZoomSample/feature/video/video-single.tsx");
/* harmony import */ var _ZoomSample_feature_preview_preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ZoomSample/feature/preview/preview */ "./src/ZoomSample/feature/preview/preview.tsx");
/* harmony import */ var _ZoomSample_context_zoom_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ZoomSample/context/zoom-context */ "./src/ZoomSample/context/zoom-context.ts");
/* harmony import */ var _ZoomSample_context_media_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ZoomSample/context/media-context */ "./src/ZoomSample/context/media-context.ts");
/* harmony import */ var _ZoomSample_context_chat_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ZoomSample/context/chat-context */ "./src/ZoomSample/context/chat-context.ts");
/* harmony import */ var _ZoomSample_component_loading_layer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ZoomSample/component/loading-layer */ "./src/ZoomSample/component/loading-layer.tsx");
/* harmony import */ var _ZoomSample_feature_chat_chat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ZoomSample/feature/chat/chat */ "./src/ZoomSample/feature/chat/chat.tsx");
/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./test.css */ "./src/zoomtest/test.css");
/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_test_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ZoomSample_utils_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ZoomSample/utils/util */ "./src/ZoomSample/utils/util.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/e/sw_capstone/frontend/src/zoomtest/TestZoom.tsx",
    _s = __webpack_require__.$Refresh$.signature();



















const mediaShape = {
  audio: {
    encode: false,
    decode: false
  },
  video: {
    encode: false,
    decode: false
  },
  share: {
    encode: false,
    decode: false
  }
};
const mediaReducer = Object(immer__WEBPACK_IMPORTED_MODULE_5__["default"])((draft, action) => {
  switch (action.type) {
    case "audio-encode":
      {
        draft.audio.encode = action.payload;
        break;
      }

    case "audio-decode":
      {
        draft.audio.decode = action.payload;
        break;
      }

    case "video-encode":
      {
        draft.video.encode = action.payload;
        break;
      }

    case "video-decode":
      {
        draft.video.decode = action.payload;
        break;
      }

    case "share-encode":
      {
        draft.share.encode = action.payload;
        break;
      }

    case "share-decode":
      {
        draft.share.decode = action.payload;
        break;
      }

    default:
      break;
  }
}, mediaShape);

function TestZoom() {
  _s();

  const [loading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [loadingText, setLoadingText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [isFailover, setIsFailover] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("closed");
  const [mediaState, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(mediaReducer, mediaShape);
  const [mediaStream, setMediaStream] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [chatClient, setChatClient] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [isSupportGalleryView, setIsSupportGalleryView] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const zmClient = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ZoomSample_context_zoom_context__WEBPACK_IMPORTED_MODULE_10__["default"]);
  const token = Object(_ZoomSample_utils_util__WEBPACK_IMPORTED_MODULE_16__["generateVideoToken"])("MoRylmD2jBq9NfbZXbSVmvZcGYOFkDCeJc3e", "NewabYwGXIFrOlPRf4dZBKeqFECESIkdlLrq", "session_19_1638703533", "", "", "");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const init = async () => {
      await zmClient.init("en-US", `${window.location.origin}/lib`, 'zoom.us');

      try {
        setLoadingText("Joining the session...");
        await zmClient.join("session_19_1638703533", token, "동현", "");
        const stream = zmClient.getMediaStream();
        setMediaStream(stream);
        setIsSupportGalleryView(stream.isSupportMultipleVideos());
        const chatClient = zmClient.getChatClient();
        setChatClient(chatClient);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    };

    init();
    return () => {
      _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2___default.a.destroyClient();
    };
  }, [zmClient]);
  const onConnectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    if (payload.state === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2__["ConnectionState"].Reconnecting) {
      setIsLoading(true);
      setIsFailover(true);
      setStatus("connecting");
      const {
        reason
      } = payload;

      if (reason === "failover") {
        setLoadingText("Session Disconnected,Try to reconnect");
      }
    } else if (payload.state === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2__["ConnectionState"].Connected) {
      setStatus("connected");

      if (isFailover) {
        setIsLoading(false);
      }
    } else if (payload.state === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_2__["ConnectionState"].Closed) {
      setStatus("closed");

      if (payload.reason === "ended by host") {
        antd__WEBPACK_IMPORTED_MODULE_3__["Modal"].warning({
          title: "Meeting ended",
          content: "This meeting has been ended by host"
        });
      }
    }
  }, [isFailover]);
  const onMediaSDKChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    const {
      action,
      type,
      result
    } = payload;
    dispatch({
      type: `${type}-${action}`,
      payload: result === "success"
    });
  }, []);
  const onLeaveOrJoinSession = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    if (status === "closed") {
      setIsLoading(true);
      await zmClient.join("session_19_1638703533", token, "동현", "");
      setIsLoading(false);
    } else if (status === "connected") {
      await zmClient.leave();
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].warn("You have left the session.");
    }
  }, [zmClient, status]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    zmClient.on("connection-change", onConnectionChange);
    zmClient.on("media-sdk-change", onMediaSDKChange);
    return () => {
      zmClient.off("connection-change", onConnectionChange);
      zmClient.off("media-sdk-change", onMediaSDKChange);
    };
  }, [zmClient, onConnectionChange, onMediaSDKChange]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])("div", {
    className: "App",
    children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_ZoomSample_component_loading_layer__WEBPACK_IMPORTED_MODULE_13__["default"], {
      content: loadingText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 19
    }, this), !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_ZoomSample_context_media_context__WEBPACK_IMPORTED_MODULE_11__["default"].Provider, {
      value: { ...mediaState,
        mediaStream
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_ZoomSample_context_chat_context__WEBPACK_IMPORTED_MODULE_12__["default"].Provider, {
        value: chatClient,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
              path: "/class/pf",
              render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_ZoomSample_feature_home_home__WEBPACK_IMPORTED_MODULE_6__["default"], { ...props,
                status: status,
                onLeaveOrJoinSession: onLeaveOrJoinSession
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 21
              }, this),
              exact: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
              path: "/index.html",
              render: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_ZoomSample_feature_home_home__WEBPACK_IMPORTED_MODULE_6__["default"], { ...props,
                status: status,
                onLeaveOrJoinSession: onLeaveOrJoinSession
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 21
              }, this),
              exact: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
              path: "/preview",
              component: _ZoomSample_feature_preview_preview__WEBPACK_IMPORTED_MODULE_9__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
              path: "/video",
              component: isSupportGalleryView ? _ZoomSample_feature_video_video__WEBPACK_IMPORTED_MODULE_7__["default"] : _ZoomSample_feature_video_video_single__WEBPACK_IMPORTED_MODULE_8__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
              path: "/chat",
              component: _ZoomSample_feature_chat_chat__WEBPACK_IMPORTED_MODULE_14__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 5
  }, this);
}

_s(TestZoom, "eD7TrCaMKf2JBtAGwo9+hkoYCjs=");

_c = TestZoom;
/* harmony default export */ __webpack_exports__["default"] = (TestZoom);

var _c;

__webpack_require__.$Refresh$.register(_c, "TestZoom");

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
//# sourceMappingURL=main.7689409c1d72e1e77fad.hot-update.js.map