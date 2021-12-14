webpackHotUpdate("main",{

/***/ "./src/Pages/LecturePages/Assignment/ProfessorAssignmentDetail.js":
/*!************************************************************************!*\
  !*** ./src/Pages/LecturePages/Assignment/ProfessorAssignmentDetail.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _StudentSubmit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StudentSubmit */ "./src/Pages/LecturePages/Assignment/StudentSubmit.js");
/* harmony import */ var _Component_common_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Component/common/Button */ "./src/Component/common/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/Pages/LecturePages/Assignment/ProfessorAssignmentDetail.js",
    _s = __webpack_require__.$Refresh$.signature();









const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  width: 100%;
  display: inline-block;
  margin: 10px auto;
  padding: 0px 20px;
`;
_c = Container;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
`;
_c2 = Title;
const ProblemContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  background-color: white;
  border-radius: 10px;
  padding: 30px 15px;
  margin: 0 auto;
  width: 100%;
  box-shadow: 0 5px 5px 0 #eeeeee;
`;
_c3 = ProblemContainer;
const ProblemTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  font-size: 20px;
  font-weight: 600;
`;
_c4 = ProblemTitle;
const ProblemContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  width: 100%;
  margin: 10px auto;
  padding: 0 5px;
`;
_c5 = ProblemContent;
const StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Component_common_Button__WEBPACK_IMPORTED_MODULE_6__["default"])`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`; //여기서의 match는 각각의 assignment에 대한 렌더링을 위해서

_c6 = StyledButton;

const ProfessorAssignmentDetail = ({
  match
}) => {
  _s();

  const [submitAssignments, setSubmitAssignments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [studentScore, setStudentScore] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [assignments, setAssignments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [onGoing, setOnGoing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const today = moment__WEBPACK_IMPORTED_MODULE_3___default()();
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;
  const lectureId = match.params.lectureId;
  const assignmentId = match.params.assignmentId;
  const fileUrl = `https://oneboard.connect.o-r.kr:8080/lecture/${lectureId}/assignment/${assignmentId}/file`;

  const stateDisplay = (startDate, endDate) => {
    const today = moment__WEBPACK_IMPORTED_MODULE_3___default()();

    if (today.isBefore(startDate)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          color: '#BFBFBF',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_3___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uC608\uC815)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined);
    } else if (today.isBefore(endDate)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          color: '#61C679',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_3___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uC9C4\uD589\uC911)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          color: '#E24C4B',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_3___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uB9C8\uAC10)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined);
    }
  };

  const getSubmitData = () => {
    return new Promise((resolve, reject) => {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/lecture/${lectureId}/assignment/${assignmentId}/submits`).then(res => {
        const result = res.data.data;
        setSubmitAssignments(result);

        if (today.isBefore(result.endDt) && today.isAfter(result.startDt)) {
          setOnGoing(true);
        }
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  };

  const getAssignmentData = () => {
    return new Promise((resolve, reject) => {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/lecture/${lectureId}/assignment/${assignmentId}`).then(res => {
        const assignmentResult = res.data.data;
        console.log(res);
        setAssignments(assignmentResult);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  };

  const onCancel = () => {
    return window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getSubmitData();
    getAssignmentData();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Title, {
      children: "Assignment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {
      style: {
        width: '100%',
        margin: '30px 0px',
        marginTop: '50px',
        display: 'block',
        borderColor: '#ffffff'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemTitle, {
        children: assignments.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {
        style: {
          width: '100%',
          margin: '10px 0px',
          display: 'block',
          borderColor: '#ffffff'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0',
          padding: '0px 5px',
          fontWeight: '700'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: stateDisplay(moment__WEBPACK_IMPORTED_MODULE_3___default()(assignments.startDt), moment__WEBPACK_IMPORTED_MODULE_3___default()(assignments.endDt))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: ["\uBC30\uC810 ", assignments.score]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemContent, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
          href: fileUrl,
          style: {
            fontWeight: 'bold',
            textDecoration: 'underline',
            fontSize: '1.2rem'
          },
          children: "\uACFC\uC81C \uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, undefined), react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(assignments.content)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {
        style: {
          width: '100%',
          margin: '10px 0px',
          display: 'block',
          borderColor: '#ffffff'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_StudentSubmit__WEBPACK_IMPORTED_MODULE_5__["default"], {
      lectureId: lectureId,
      assignmentId: assignmentId,
      assignmentsScore: assignments.score
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledButton, {
      onClick: onCancel,
      children: "\uB4A4\uB85C\uAC00\uAE30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 5
  }, undefined);
};

_s(ProfessorAssignmentDetail, "8YqsC+LvQhC3plWZNvur6aqzuCY=");

_c7 = ProfessorAssignmentDetail;
/* harmony default export */ __webpack_exports__["default"] = (ProfessorAssignmentDetail);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

__webpack_require__.$Refresh$.register(_c, "Container");
__webpack_require__.$Refresh$.register(_c2, "Title");
__webpack_require__.$Refresh$.register(_c3, "ProblemContainer");
__webpack_require__.$Refresh$.register(_c4, "ProblemTitle");
__webpack_require__.$Refresh$.register(_c5, "ProblemContent");
__webpack_require__.$Refresh$.register(_c6, "StyledButton");
__webpack_require__.$Refresh$.register(_c7, "ProfessorAssignmentDetail");

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
//# sourceMappingURL=main.0fec3d589495fed97738.hot-update.js.map