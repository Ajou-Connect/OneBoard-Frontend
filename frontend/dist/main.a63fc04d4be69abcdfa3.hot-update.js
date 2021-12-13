webpackHotUpdate("main",{

/***/ "./src/ZoomSample/feature/video/components/video-footer.tsx":
/*!******************************************************************!*\
  !*** ./src/ZoomSample/feature/video/components/video-footer.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _context_zoom_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../context/zoom-context */ "./src/ZoomSample/context/zoom-context.ts");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camera */ "./src/ZoomSample/feature/video/components/camera.tsx");
/* harmony import */ var _microphone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./microphone */ "./src/ZoomSample/feature/video/components/microphone.tsx");
/* harmony import */ var _screen_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screen-share */ "./src/ZoomSample/feature/video/components/screen-share.tsx");
/* harmony import */ var _context_media_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../context/media-context */ "./src/ZoomSample/context/media-context.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks */ "./src/ZoomSample/hooks/index.ts");
/* harmony import */ var _video_footer_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./video-footer.scss */ "./src/ZoomSample/feature/video/components/video-footer.scss");
/* harmony import */ var _video_footer_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_video_footer_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/ZoomSample/feature/video/components/video-footer.tsx",
    _s = __webpack_require__.$Refresh$.signature();














const LeaveBtn = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].button`
  position: absolute;
  margin-top:3rem;
  right: 0;
  margin-right: 30px;
  color: red;
`;
_c = LeaveBtn;
const isAudioEnable = typeof AudioWorklet === 'function';

const VideoFooter = props => {
  _s();

  const {
    className,
    shareRef,
    sharing,
    lectureId,
    lessonId,
    sessionId
  } = props;
  const [isStartedAudio, setIsStartedAudio] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isStartedVideo, setIsStartedVideo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isStartedScreenShare, setIsStartedScreenShare] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isLockedScreenShare, setIsLockedScreenShare] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isMuted, setIsMuted] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [activeMicrophone, setActiveMicrophone] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [activeSpeaker, setActiveSpeaker] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [activeCamera, setActiveCamera] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [micList, setMicList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [speakerList, setSpeakerList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [cameraList, setCameraList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    mediaStream
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_media_context__WEBPACK_IMPORTED_MODULE_7__["default"]);
  const zmClient = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_zoom_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;
  const token = localStorage.getItem("token");
  const onCameraClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    if (isStartedVideo) {
      await (mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.stopVideo());
      setIsStartedVideo(false);
    } else {
      await (mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.startVideo());
      setIsStartedVideo(true);
    }
  }, [mediaStream, isStartedVideo]);
  const onMicrophoneClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    if (isStartedAudio) {
      if (isMuted) {
        await (mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.unmuteAudio());
        setIsMuted(false);
      } else {
        await (mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.muteAudio());
        setIsMuted(true);
      }
    } else {
      await (mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.startAudio());
      setIsStartedAudio(true);
    }
  }, [mediaStream, isStartedAudio, isMuted]);

  const onMicrophoneMenuClick = async key => {
    if (mediaStream) {
      const [type, deviceId] = key.split('|');

      if (type === 'microphone') {
        if (deviceId !== activeMicrophone) {
          await mediaStream.switchMicrophone(deviceId);
          setActiveMicrophone(mediaStream.getActiveMicrophone());
        }
      } else if (type === 'speaker') {
        if (deviceId !== activeSpeaker) {
          await mediaStream.switchSpeaker(deviceId);
          setActiveSpeaker(mediaStream.getActiveSpeaker());
        }
      } else if (type === 'leave audio') {
        await mediaStream.stopAudio();
        setIsStartedAudio(false);
      }
    }
  };

  const onSwitchCamera = async key => {
    if (mediaStream) {
      if (activeCamera !== key) {
        await mediaStream.switchCamera(key);
        setActiveCamera(mediaStream.getActiveCamera());
      }
    }
  };

  const onHostAudioMuted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(payload => {
    const {
      action,
      source,
      type
    } = payload;

    if (action === 'join' && type === 'computer') {
      setIsStartedAudio(true);
    } else if (action === 'leave') {
      setIsStartedAudio(false);
    } else if (action === 'muted') {
      setIsMuted(true);

      if (source === 'passive(mute one)') {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].info('Host muted you');
      }
    } else if (action === 'unmuted') {
      setIsMuted(false);

      if (source === 'passive') {
        antd__WEBPACK_IMPORTED_MODULE_2__["message"].info('Host unmuted you');
      }
    }
  }, []);
  const onScreenShareClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    if (!isStartedScreenShare && shareRef && shareRef.current) {
      await (mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.startShareScreen(shareRef.current));
      setIsStartedScreenShare(true);
    } else if (isStartedScreenShare) {
      await (mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.stopShareScreen());
      setIsStartedScreenShare(false);
    }
  }, [mediaStream, isStartedScreenShare, shareRef]);
  const onPassivelyStopShare = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(({
    reason
  }) => {
    console.log('passively stop reason:', reason);
    setIsStartedScreenShare(false);
  }, []);
  const onDeviceChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (mediaStream) {
      setMicList(mediaStream.getMicList());
      setSpeakerList(mediaStream.getSpeakerList());
      setCameraList(mediaStream.getCameraList());
      setActiveMicrophone(mediaStream.getActiveMicrophone());
      setActiveSpeaker(mediaStream.getActiveSpeaker());
      setActiveCamera(mediaStream.getActiveCamera());
    }
  }, [mediaStream]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    zmClient.on('current-audio-change', onHostAudioMuted);
    zmClient.on('passively-stop-share', onPassivelyStopShare);
    zmClient.on('device-change', onDeviceChange);
    return () => {
      zmClient.off('current-audio-change', onHostAudioMuted);
      zmClient.off('passively-stop-share', onPassivelyStopShare);
      zmClient.off('device-change', onDeviceChange);
    };
  }, [zmClient, onHostAudioMuted, onPassivelyStopShare, onDeviceChange]);
  Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useUnmount"])(() => {
    if (isStartedAudio) {
      mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.stopAudio();
    }

    if (isStartedVideo) {
      mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.stopVideo();
    }

    if (isStartedScreenShare) {
      mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.stopShareScreen();
    }
  });

  const OutSession = () => {
    if (userType === "T") {
      zmClient.leave();
      alert("세션을 종료합니다. 퇴장후 다시 입장하실 수 없습니다.");
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(`/lecture/${lectureId}/lesson/${lessonId}/live/exit`, {
        headers: {
          "X-AUTH-TOKEN": `${token}`
        },
        params: {
          session: `${sessionId}`
        }
      }).then(res => {
        const result = res.data.result;

        if (result === "SUCCESS") {
          return window.location.href = `/Main/Lecture`;
        }
      });
    } else {
      zmClient.leave();
      alert("수업을 나갑니다");
      return window.location.href = `/Main/Lecture`;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('video-footer', className),
    children: [isAudioEnable && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_microphone__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isStartedAudio: isStartedAudio,
      isMuted: isMuted,
      onMicrophoneClick: onMicrophoneClick,
      onMicrophoneMenuClick: onMicrophoneMenuClick,
      microphoneList: micList,
      speakerList: speakerList,
      activeMicrophone: activeMicrophone,
      activeSpeaker: activeSpeaker
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_camera__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isStartedVideo: isStartedVideo,
      onCameraClick: onCameraClick,
      onSwitchCamera: onSwitchCamera,
      cameraList: cameraList,
      activeCamera: activeCamera
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }, undefined), sharing && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_screen_share__WEBPACK_IMPORTED_MODULE_6__["ScreenShareButton"], {
      isStartedScreenShare: isStartedScreenShare,
      onScreenShareClick: onScreenShareClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }, undefined), (zmClient.isManager() || zmClient.isHost()) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_screen_share__WEBPACK_IMPORTED_MODULE_6__["ScreenShareLockButton"], {
      isLockedScreenShare: isLockedScreenShare,
      onScreenShareLockClick: () => {
        mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.lockShare(!isLockedScreenShare);
        setIsLockedScreenShare(!isLockedScreenShare);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(LeaveBtn, {
      onClick: OutSession,
      children: "\uB098\uAC00\uAE30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 187,
    columnNumber: 5
  }, undefined);
};

_s(VideoFooter, "/+su91cgdsJMYwLjzpBjr53hr+c=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_8__["useUnmount"]];
});

_c2 = VideoFooter;
/* harmony default export */ __webpack_exports__["default"] = (VideoFooter);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "LeaveBtn");
__webpack_require__.$Refresh$.register(_c2, "VideoFooter");

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
//# sourceMappingURL=main.a63fc04d4be69abcdfa3.hot-update.js.map