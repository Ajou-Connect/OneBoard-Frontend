webpackHotUpdate("main",{

/***/ "./src/ZoomSample/feature/video/video-single.tsx":
/*!*******************************************************!*\
  !*** ./src/ZoomSample/feature/video/video-single.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zoom/videosdk */ "./node_modules/@zoom/videosdk/dist/index.umd.js");
/* harmony import */ var _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_zoom_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/zoom-context */ "./src/ZoomSample/context/zoom-context.ts");
/* harmony import */ var _context_media_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/media-context */ "./src/ZoomSample/context/media-context.ts");
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/avatar */ "./src/ZoomSample/feature/video/components/avatar.tsx");
/* harmony import */ var _components_video_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/video-footer */ "./src/ZoomSample/feature/video/components/video-footer.tsx");
/* harmony import */ var _hooks_useShare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useShare */ "./src/ZoomSample/feature/video/hooks/useShare.ts");
/* harmony import */ var _hooks_useParticipantsChange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useParticipantsChange */ "./src/ZoomSample/feature/video/hooks/useParticipantsChange.ts");
/* harmony import */ var _hooks_useCanvasDimension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/useCanvasDimension */ "./src/ZoomSample/feature/video/hooks/useCanvasDimension.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks */ "./src/ZoomSample/hooks/index.ts");
/* harmony import */ var _video_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./video.scss */ "./src/ZoomSample/feature/video/video.scss");
/* harmony import */ var _video_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_video_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/e/sw_capstone/frontend/src/ZoomSample/feature/video/video-single.tsx",
    _s = __webpack_require__.$Refresh$.signature();















const VideoContainer = props => {
  _s();

  const {
    lectureId,
    lessonId
  } = props;
  const zmClient = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_zoom_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    mediaStream,
    video: {
      decode: isVideoDecodeReady
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_media_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const videoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const shareRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const selfShareRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const shareContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [participants, setParticipants] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [activeVideo, setActiveVideo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [activeSpeaker, setActiveSpeaker] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const canvasDimension = Object(_hooks_useCanvasDimension__WEBPACK_IMPORTED_MODULE_9__["useCanvasDimension"])(mediaStream, videoRef);
  const {
    isRecieveSharing,
    isStartedShare,
    sharedContentDimension
  } = Object(_hooks_useShare__WEBPACK_IMPORTED_MODULE_7__["useShare"])(zmClient, mediaStream, shareRef);
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

  const previousActiveVideo = Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["usePrevious"])(activeVideo);
  Object(_hooks_useParticipantsChange__WEBPACK_IMPORTED_MODULE_8__["useParticipantsChange"])(zmClient, payload => {
    setParticipants(payload);
  });
  const onActiveVideoChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    const {
      state,
      userId
    } = payload;

    if (state === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__["VideoActiveState"].Active) {
      setActiveVideo(userId);
    } else if (state === _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__["VideoActiveState"].Inactive) {
      setActiveVideo(0);
    }
  }, []);
  const onActiveSpeakerChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    if (Array.isArray(payload) && payload.length > 0) {
      const {
        userId
      } = payload[0];
      setActiveSpeaker(userId);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    zmClient.on('video-active-change', onActiveVideoChange);
    zmClient.on('active-speaker', onActiveSpeakerChange);
    return () => {
      zmClient.off('video-active-change', onActiveVideoChange);
      zmClient.off('active-speaker', onActiveSpeakerChange);
    };
  }, [zmClient, onActiveVideoChange, onActiveSpeakerChange]);
  const activeUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    let user = undefined;

    if (activeVideo) {
      user = participants.find(user => user.userId === activeVideo);
    } else if (activeSpeaker) {
      user = participants.find(user => user.userId === activeSpeaker);
    } else {
      user = participants.find(user => user.isHost);
    }

    if (!user) {
      user = zmClient.getCurrentUserInfo();
    }

    return user;
  }, [activeSpeaker, participants, activeVideo, zmClient]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (mediaStream && videoRef.current && isVideoDecodeReady) {
      if (activeVideo && previousActiveVideo !== activeVideo) {
        /**
         * Can not specify the width and height of the rendered video, also applied to the position of video.
         * Passing these arguments just for consistency.
         */
        mediaStream.renderVideo(videoRef.current, activeVideo, canvasDimension.width, canvasDimension.height, 0, 0, _zoom_videosdk__WEBPACK_IMPORTED_MODULE_1__["VideoQuality"].Video_360P);
      } else if (activeVideo === 0 && previousActiveVideo) {
        mediaStream.stopRenderVideo(videoRef.current, previousActiveVideo);
      }
    }
  }, [mediaStream, activeVideo, previousActiveVideo, isVideoDecodeReady, canvasDimension]);
  Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["useMount"])(() => {
    if (mediaStream) {
      setActiveVideo(mediaStream.getActiveVideoId());
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
    className: "viewport",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('share-container', {
        'in-sharing': isSharing
      }),
      ref: shareContainerRef,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "share-container-viewport",
        style: {
          width: `${contentDimension.width}px`,
          height: `${contentDimension.height}px`
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("canvas", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('share-canvas', {
            hidden: isStartedShare
          }),
          ref: shareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("canvas", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('share-canvas', {
            hidden: isRecieveSharing
          }),
          ref: selfShareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('video-container', {
        'in-sharing': isSharing
      }),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("canvas", {
        className: "video-canvas",
        id: "video-canvas",
        width: "800",
        height: "600",
        ref: videoRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined), activeUser && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        participant: activeUser,
        isActive: false,
        className: "single-view-avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_video_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "video-operations",
      sharing: true,
      shareRef: selfShareRef,
      lectureId: props.lectureId,
      lessonId: props.lessonId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 5
  }, undefined);
};

_s(VideoContainer, "9dTbVQo0PJ+rIk4nMiWuBdNhBBE=", false, function () {
  return [_hooks_useCanvasDimension__WEBPACK_IMPORTED_MODULE_9__["useCanvasDimension"], _hooks_useShare__WEBPACK_IMPORTED_MODULE_7__["useShare"], _hooks__WEBPACK_IMPORTED_MODULE_10__["usePrevious"], _hooks_useParticipantsChange__WEBPACK_IMPORTED_MODULE_8__["useParticipantsChange"], _hooks__WEBPACK_IMPORTED_MODULE_10__["useMount"]];
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
//# sourceMappingURL=main.9f4d5f75f50a5875d28d.hot-update.js.map