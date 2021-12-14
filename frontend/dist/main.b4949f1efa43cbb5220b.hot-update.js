webpackHotUpdate("main",{

/***/ "./src/ZoomSample/feature/video/QuizModal.js":
/*!***************************************************!*\
  !*** ./src/ZoomSample/feature/video/QuizModal.js ***!
  \***************************************************/
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

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/ZoomSample/feature/video/QuizModal.js";






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
  height: 500px;
  text-align: center;
`;
_c3 = ModalInner;
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  height: 3rem;
  width: 100px;
  color: red;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 150px;
`;
_c4 = CloseBtn;
const OkBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  height: 3rem;
  width: 100px;
  color: red;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 150px;
`;
_c5 = OkBtn;
QuizModal.propTypes = {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

function QuizModal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
  lessonId,
  sessionId,
  lectureId
}) {
  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = e => {
    if (onClose) {
      onClose(e);
    }
  };

  const onSubmit = () => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/lecture/${lectureId}/lesson/${lessonId}/live/quiz/professor`, {
      question: '김동현',
      answer1: 'test1',
      answer2: 'test1',
      answer3: 'test1',
      answer4: 'test1',
      answer5: 'test1',
      answer: 1
    }, {
      params: {
        session: `${sessionId}`
      }
    }).then(res => {
      console.log(res.data.data);
      const result = res.data.data;
    }).catch(error => {
      console.log(error);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ModalOverlay, {
      visible: visible
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
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
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              marginTop: '1rem'
            },
            children: ["1.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: "text",
              style: {
                width: '90%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              marginTop: '1rem'
            },
            children: ["2.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: "text",
              style: {
                width: '90%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              marginTop: '1rem'
            },
            children: ["3.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: "text",
              style: {
                width: '90%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              marginTop: '1rem'
            },
            children: ["4.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: "text",
              style: {
                width: '90%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              marginTop: '1rem'
            },
            children: ["5.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: "text",
              style: {
                width: '90%'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              marginTop: '1rem'
            },
            children: "\uC815\uB2F5 \uBC88\uD638 \uCCB4\uD06C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              display: 'flex'
            },
            children: [closable && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(OkBtn, {
              className: "modal-ok",
              onClick: onSubmit,
              children: "\uD655\uC778"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, this), closable && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CloseBtn, {
              className: "modal-close",
              onClick: close,
              children: "\uCDE8\uC18C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c6 = QuizModal;
/* harmony default export */ __webpack_exports__["default"] = (QuizModal);

var _c, _c2, _c3, _c4, _c5, _c6;

__webpack_require__.$Refresh$.register(_c, "ModalWrapper");
__webpack_require__.$Refresh$.register(_c2, "ModalOverlay");
__webpack_require__.$Refresh$.register(_c3, "ModalInner");
__webpack_require__.$Refresh$.register(_c4, "CloseBtn");
__webpack_require__.$Refresh$.register(_c5, "OkBtn");
__webpack_require__.$Refresh$.register(_c6, "QuizModal");

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

/***/ }),

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _QuizModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./QuizModal */ "./src/ZoomSample/feature/video/QuizModal.js");
/* harmony import */ var _UnderStandModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./UnderStandModal */ "./src/ZoomSample/feature/video/UnderStandModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/ZoomSample/feature/video/video.tsx",
    _s = __webpack_require__.$Refresh$.signature();






















const AttendanceBtn = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].button`
  width: 100%;
  margin-top:1rem;
  color: red;
`;
_c = AttendanceBtn;

const VideoContainer = props => {
  _s();

  const {
    history,
    lectureId,
    lessonId,
    sessionId
  } = props;
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
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;
  const token = localStorage.getItem("token");
  const [modalVisible, setModalVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [underStandId, setUnderStandId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [pfUnderStandId, setPfUnderStandId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [isUnderstand, setIsUnderstand] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isCheckUnderstand, setIsCheckUnderstand] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
  const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_17___default.a.connect("https://oneboard.connect.o-r.kr:8070");

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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    socket.emit("init", {
      "userType": userType,
      "room": sessionId
    });
    socket.on("attendance request", data => {
      alert("출석 확인");
      axios__WEBPACK_IMPORTED_MODULE_15___default.a.get(`/lecture/${lectureId}/lesson/${lessonId}/live/attendance/student`, {
        params: {
          "session": `${sessionId}`
        },
        headers: {
          "X-AUTH-TOKEN": `${token}`
        }
      }).then(res => {
        console.log(res);
        const result = res.data.result;

        if (result === "SUCCESS") {
          console.log("hi");
        } else {
          console.log("error");
        }
      }).catch(error => {
        console.log(error);
      });
    }); // understan

    socket.on("understanding request", data => {
      setIsUnderstand(true);
      setModalVisible(true);
      setUnderStandId(data.understandId);
      console.log(data);
    });
  }, []);

  const openAttendance = e => {
    // e.preventDefault(); 
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.get(`/lecture/${lectureId}/lesson/${lessonId}/live/attendance/professor`, {
      params: {
        session: `${sessionId}`
      }
    }).then(res => {
      alert("학생들에게 출석요청을 보냈습니다.");
      console.log(res);
    }).catch(e => {
      console.log(e);
    });
  };

  const openUnderstand = () => {
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.get(`/lecture/${lectureId}/lesson/${lessonId}/live/understanding/professor`, {
      params: {
        session: `${sessionId}`
      }
    }).then(res => {
      alert("학생들에게 이해도 평가요청을 보냈습니다.");
      setPfUnderStandId(res.data.data.understandId);
      console.log(underStandId);
    }).catch(error => {
      console.log(error);
    });
  };

  const checkUnderstand = () => {
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.get(`/lecture/${lectureId}/lesson/${lessonId}/live/understanding/${pfUnderStandId}/professor`, {
      headers: {
        "X-AUTH-TOKEN": `${token}`
      }
    }).then(res => {
      const yes = res.data.data.yes;
      const no = res.data.data.no;
      console.log(res);
      alert("이해한 사람 수 : " + yes + " " + "이해 못한 사람 수 : " + no);
    }).catch(error => {
      console.log(error);
    });
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("div", {
    className: "viewport",
    children: [userType === "T" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(AttendanceBtn, {
        onClick: openAttendance,
        children: "\uCD9C\uC11D \uC694\uCCAD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(AttendanceBtn, {
        onClick: openUnderstand,
        children: "\uC774\uD574\uB3C4 \uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(AttendanceBtn, {
        onClick: openModal,
        children: "\uD034\uC988 \uCD9C\uC81C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(AttendanceBtn, {
        onClick: checkUnderstand,
        children: "\uCD5C\uADFC \uC774\uD574\uB3C4 \uACB0\uACFC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(AttendanceBtn, {
        onClick: openModal,
        children: "\uCD5C\uADFC \uD034\uC988 \uACB0\uACFC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, undefined), modalVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_QuizModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
        visible: modalVisible,
        closable: true,
        maskClosable: true,
        onClose: closeModal,
        lessonId: props.lessonId,
        lectureId: props.lectureId,
        sessionId: props.sessionId,
        className: "modal-root",
        children: "\uD034\uC988 \uCD9C\uC81C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 27
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 28
    }, undefined) : isUnderstand ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("div", {
      children: modalVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_UnderStandModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
        visible: modalVisible,
        closable: true,
        maskClosable: true,
        onClose: closeModal,
        lessonId: props.lessonId,
        lectureId: props.lectureId,
        sessionId: props.sessionId,
        underStandId: underStandId,
        className: "modal-under",
        children: "\uC774\uD574\uB3C4 \uCCB4\uD06C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 27
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 20
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-container', {
        'in-sharing': isSharing
      }),
      ref: shareContainerRef,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("div", {
        className: "share-container-viewport",
        style: {
          width: `${contentDimension.width}px`,
          height: `${contentDimension.height}px`
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("canvas", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-canvas', {
            hidden: isStartedShare
          }),
          ref: shareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, undefined), Object(_utils_platform__WEBPACK_IMPORTED_MODULE_13__["isSupportWebCodecs"])() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("video", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-canvas', {
            hidden: isRecieveSharing
          }),
          ref: selfShareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 35
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("canvas", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-canvas', {
            hidden: isRecieveSharing
          }),
          ref: selfShareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 16
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('video-container', {
        'in-sharing': isSharing
      }),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("canvas", {
        className: "video-canvas",
        id: "video-canvas",
        width: "800",
        height: "600",
        ref: videoRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("ul", {
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
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
            lineNumber: 259,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_video_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "video-operations",
      sharing: true,
      shareRef: selfShareRef,
      lectureId: props.lectureId,
      lessonId: props.lessonId,
      sessionId: props.sessionId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }, undefined), totalPage > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_components_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
      page: page,
      totalPage: totalPage,
      setPage: setPage,
      inSharing: isSharing
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_chat_chat__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 5
  }, undefined);
};

_s(VideoContainer, "II58lTpD1UmaAnQrH8S/0MBjufQ=", false, function () {
  return [_hooks_useCanvasDimension__WEBPACK_IMPORTED_MODULE_7__["useCanvasDimension"], _hooks_useAvtiveVideo__WEBPACK_IMPORTED_MODULE_10__["useActiveVideo"], _hooks_usePagination__WEBPACK_IMPORTED_MODULE_9__["usePagination"], _hooks_useGalleryLayout__WEBPACK_IMPORTED_MODULE_8__["useGalleryLayout"], _hooks_useShare__WEBPACK_IMPORTED_MODULE_11__["useShare"]];
});

_c2 = VideoContainer;
/* harmony default export */ __webpack_exports__["default"] = (VideoContainer);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "AttendanceBtn");
__webpack_require__.$Refresh$.register(_c2, "VideoContainer");

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
//# sourceMappingURL=main.b4949f1efa43cbb5220b.hot-update.js.map