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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/Pages/LecturePages/Assignment/ProfessorAssignmentDetail.js",
    _s = __webpack_require__.$Refresh$.signature();








const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  width: 100%;
  display: inline-block;
  margin: 10px auto;
  padding: 0px 20px;
  //overflow-y: auto;
  //align-items : center;
  //justify-content : center;
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
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  float: left;
  margin-top: 3px;
  margin-right: 20px;
  color: #8b8b8b;
  font-size: 13px;
  font-weight: 400;
`;
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  font-size: 2px;
  padding: 5px;
  margin-top: 50px;
  margin-right: 10px;
  background-color: rgba(215, 226, 185, 0.596);
  color: #3e3e3e;
  border-radius: 7px;
  &:hover {
    background-color: #bfbfbf;
  }
`;
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
const AnswerInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea`
  height: 60px;
  width: 100%;
  resize: none;
  border: 1px solid #d9d9d9;
  &:focus {
    border: 1px solid #40a9ff;
    box-shadow: 0 0 0 2px #1890ff 20%;
    outline: 0;
  }
`;
const WriteBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  display: flex;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 30px;
  background-color: #d3d31c;
  color: #3e3e3e;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`; //여기서의 match는 각각의 assignment에 대한 렌더링을 위해서

_c6 = WriteBtn;

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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          color: '#BFBFBF',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_3___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uC608\uC815)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, undefined);
    } else if (today.isBefore(endDate)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          color: '#61C679',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_3___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uC9C4\uD589\uC911)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, undefined);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          color: '#E24C4B',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_3___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uB9C8\uAC10)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Title, {
      children: "Assignment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("hr", {
      style: {
        width: '100%',
        margin: '30px 0px',
        marginTop: '50px',
        display: 'block',
        borderColor: '#ffffff'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ProblemContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ProblemTitle, {
        children: assignments.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("hr", {
        style: {
          width: '100%',
          margin: '10px 0px',
          display: 'block',
          borderColor: '#ffffff'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0',
          padding: '0px 5px',
          fontWeight: '700'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: stateDisplay(moment__WEBPACK_IMPORTED_MODULE_3___default()(assignments.startDt), moment__WEBPACK_IMPORTED_MODULE_3___default()(assignments.endDt))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: ["\uBC30\uC810 ", assignments.score]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ProblemContent, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
          href: fileUrl,
          style: {
            fontWeight: 'bold',
            textDecoration: 'underline',
            fontSize: '1.2rem'
          },
          children: "\uACFC\uC81C \uD30C\uC77C \uB2E4\uC6B4\uB85C\uB4DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, undefined), react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(assignments.content)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("hr", {
        style: {
          width: '100%',
          margin: '10px 0px',
          display: 'block',
          borderColor: '#ffffff'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_StudentSubmit__WEBPACK_IMPORTED_MODULE_5__["default"], {
      lectureId: lectureId,
      assignmentId: assignmentId,
      assignmentsScore: assignments.score
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(WriteBtn, {
      onClick: onCancel,
      children: "\uB4A4\uB85C\uAC00\uAE30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 175,
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
__webpack_require__.$Refresh$.register(_c6, "WriteBtn");
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

/***/ }),

/***/ "./src/Pages/LecturePages/Assignment/ProfessorAssignmentList.js":
/*!**********************************************************************!*\
  !*** ./src/Pages/LecturePages/Assignment/ProfessorAssignmentList.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Component_common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Component/common/Button */ "./src/Component/common/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/Pages/LecturePages/Assignment/ProfessorAssignmentList.js",
    _s = __webpack_require__.$Refresh$.signature();







const WriteAcitonButtonBlock = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  button + button {
    margin-left: 0.5rem;
  }
`;
_c = WriteAcitonButtonBlock;
const StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Component_common_Button__WEBPACK_IMPORTED_MODULE_4__["default"])`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
_c2 = StyledButton;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 1.5rem;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
`;
_c3 = Title;
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  float: left;
  margin-top: 3px;
  margin-right: 20px;
  color: #8b8b8b;
  font-size: 13px;
  font-weight: 400;
`;
const StateColorCircle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 20px;
  height: 20px;
  display: inline-block;
  float: right;
  border-radius: 75px;
`;
_c4 = StateColorCircle;
const StateDescript = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  height: 20px;
  display: inline-block;
  float: right;
  font-size: 14px;
  margin-left: 5px;
  margin-right: 10px;
`;
_c5 = StateDescript;

const ProfessorAssignmentList = props => {
  _s();

  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;
  const lectureId = props.lectureId;
  const [assignments, setAssignments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isEmpty, setIsEmpty] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchAssignment = async () => {
      try {
        setError(null);
        setLoading(true); //axios.get

        await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/lecture/${lectureId}/assignments`).then(res => {
          const result = res.data.data;
          console.log(result);
          setAssignments(result);
        }).catch(e => {
          console.log(e);
          setError(e);
        });
        setLoading(false);
      } catch (e) {
        setError(e);
        console.log(e);
      }
    };

    fetchAssignment();
  }, []);

  const stateDisplay = (startDate, endDate) => {
    let today = moment__WEBPACK_IMPORTED_MODULE_3___default()();

    if (today.isBefore(startDate)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          color: '#BFBFBF',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_3___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uC608\uC815)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined);
    } else if (today.isBefore(endDate)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          color: '#61C679',
          fontWeight: '700'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StateColorCircle, {
          style: {
            backgroundColor: '#66FF33'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          color: '#E24C4B',
          fontWeight: '700'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StateColorCircle, {
          style: {
            backgroundColor: '#E24C4B'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined);
    }
  };

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    style: {
      textAlign: 'center',
      fontSize: '30px',
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
    children: "\uB85C\uB529\uC911 ..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 7
  }, undefined);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    style: {
      textAlign: 'center',
      fontSize: '30px',
      fontStyle: 'italic',
      fontWeight: 'bold'
    },
    children: "\uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uACFC\uC81C\uBAA9\uB85D\uC744 \uBD88\uB7EC\uC62C\uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 7
  }, undefined);

  const goWrite = () => {
    return window.location.href = `/Main/Lecture/${lectureId}/Assignment/Write`;
  };

  const goUpdate = (e, assignmentId) => {
    return window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/Update/${assignmentId}`;
  };

  const goDetail = (e, assignmentId) => {
    //해당 assignment에 해당하는 페이지로 라우팅
    return window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/${assignmentId}/ProfessorDetail`;
  };

  const onDelete = (e, assignmentId) => {
    console.log(assignmentId);
    console.log(lectureId);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/lecture/${lectureId}/assignment/${assignmentId}`).then(res => {
      window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`;
      console.log(res);
    }).catch(e => {
      console.log(e);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Title, {
      children: "Assignment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: {
        width: '100%',
        display: 'block'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          width: '100%',
          display: 'block',
          height: '20px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StateDescript, {
          children: "\uB9C8\uAC10"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, undefined), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StateColorCircle, {
          style: {
            backgroundColor: '#E24C4B'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StateDescript, {
          children: "\uC9C4\uD589 \uC911"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, undefined), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StateColorCircle, {
          style: {
            backgroundColor: '#66FF33'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("table", {
        style: {
          width: '100%',
          margin: '10px auto',
          borderTop: '1px solid #D5D5D5',
          textAlign: 'center',
          borderSpacing: '0px 10px',
          borderCollapse: 'separate'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("thead", {
          style: {
            borderBottom: '1px solid #D5D5D5',
            fontStyle: 'bold',
            fontWeight: '500',
            backgroundColor: '#f3f3f3'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
              style: {
                padding: '10px 0',
                width: '10% '
              },
              children: "ID"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
              style: {
                padding: '10px 0',
                width: '20% '
              },
              children: "\uACFC\uC81C \uBA85"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
              style: {
                padding: '10px 0',
                width: '40% '
              },
              children: "\uACFC\uC81C \uAE30\uAC04"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
              style: {
                padding: '10px 0',
                width: '10% '
              },
              children: "\uBC30\uC810"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
              style: {
                padding: '10px 0',
                width: '5% '
              },
              children: "\uC9C4\uD589 \uC0C1\uD0DC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
              style: {
                padding: '10px 0',
                width: '20% '
              },
              children: "\uC218\uC815/\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tbody", {
          children: assignments.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            style: {
              display: 'flex',
              textAlign: 'center',
              marginLeft: '400px',
              fontSize: '30px',
              fontStyle: 'italic',
              fontWeight: 'bold'
            },
            children: "\uB4F1\uB85D\uB41C \uACFC\uC81C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 15
          }, undefined) : assignments.map((assignmentList, index) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tr", {
              style: {
                borderRadius: '5px',
                boxShadow: '0px 2px 2px 1px #eeeeee'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                style: {
                  padding: '15px 0',
                  borderBottom: '1px solid #D5D5D5'
                },
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                style: {
                  padding: '15px 0',
                  borderBottom: '1px solid #D5D5D5'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  style: {
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#3E3E3E',
                    display: 'block',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  },
                  onClick: e => goDetail(e, assignmentList.assignmentId),
                  children: assignmentList.title
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 251,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                style: {
                  padding: '15px 0',
                  borderBottom: '1px solid #D5D5D5'
                },
                children: [assignmentList.startDt, " ~ ", assignmentList.endDt]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                style: {
                  padding: '15px 0',
                  borderBottom: '1px solid #D5D5D5'
                },
                children: assignmentList.score
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                style: {
                  padding: '20px',
                  borderBottom: '1px solid #D5D5D5',
                  justifyContent: 'center'
                },
                children: stateDisplay(moment__WEBPACK_IMPORTED_MODULE_3___default()(assignmentList.startDt), moment__WEBPACK_IMPORTED_MODULE_3___default()(assignmentList.endDt))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                style: {
                  padding: '15px 0',
                  borderBottom: '1px solid #D5D5D5',
                  display: 'flex',
                  justifyContent: 'center'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(WriteAcitonButtonBlock, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledButton, {
                    cyan: true,
                    onClick: e => {
                      goUpdate(e, assignmentList.assignmentId);
                    },
                    children: "\uC218\uC815"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledButton, {
                    cyan: true,
                    onClick: e => {
                      onDelete(e, assignmentList.assignmentId);
                    },
                    children: "\uC0AD\uC81C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 309,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 292,
                columnNumber: 21
              }, undefined)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 19
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: {
        marginLeft: '1rem'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledButton, {
        cyan: true,
        onClick: e => goWrite(e),
        children: "\uC791\uC131\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 174,
    columnNumber: 5
  }, undefined);
};

_s(ProfessorAssignmentList, "sYnl+AHepsMZkKoYrnmD7V4YavE=");

_c6 = ProfessorAssignmentList;
/* harmony default export */ __webpack_exports__["default"] = (ProfessorAssignmentList);

var _c, _c2, _c3, _c4, _c5, _c6;

__webpack_require__.$Refresh$.register(_c, "WriteAcitonButtonBlock");
__webpack_require__.$Refresh$.register(_c2, "StyledButton");
__webpack_require__.$Refresh$.register(_c3, "Title");
__webpack_require__.$Refresh$.register(_c4, "StateColorCircle");
__webpack_require__.$Refresh$.register(_c5, "StateDescript");
__webpack_require__.$Refresh$.register(_c6, "ProfessorAssignmentList");

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

/***/ "./src/Pages/LecturePages/Assignment/StudentAssignmentDetail.js":
/*!**********************************************************************!*\
  !*** ./src/Pages/LecturePages/Assignment/StudentAssignmentDetail.js ***!
  \**********************************************************************/
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
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-iframe */ "./node_modules/react-iframe/dist/es/iframe.js");
/* harmony import */ var _Component_common_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Component/common/Button */ "./src/Component/common/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/Pages/LecturePages/Assignment/StudentAssignmentDetail.js",
    _s = __webpack_require__.$Refresh$.signature();









const StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Component_common_Button__WEBPACK_IMPORTED_MODULE_6__["default"])`
  height: 2.125rem;
  margin: 1rem 0;
  & + & {
    margin-left: 0.5rem;
  }
`;
_c = StyledButton;
const WriteBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 30px;
  margin-left: 20px;
  background-color: #d3d31c;
  color: #3e3e3e;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`;
const UpdateBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 30px;
  background-color: #f83636;
  color: #3e3e3e;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`;
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
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  font-size: 2px;
  padding: 5px;
  margin-top: 50px;
  margin-right: 10px;
  background-color: rgba(215, 226, 185, 0.596);
  color: #3e3e3e;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`;
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
const AnswerInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea`
  height: 60px;
  width: 100%;
  resize: none;
  border: 1px solid #d9d9d9;
  &:focus {
    border: 1px solid #40a9ff;
    box-shadow: 0 0 0 2px #1890ff 20%;
    outline: 0;
  }
`; //여기서의 match는 각각의 assignment에 대한 렌더링을 위해서

_c6 = AnswerInput;

const StudentAssignmentDetail = ({
  match
}) => {
  _s();

  const user = JSON.parse(window.localStorage.userInfo);
  const userType = user.userType;
  const token = localStorage.getItem('token');
  const [assignments, setAssignments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [studentFile, setStudentFile] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [studentAnswer, setStudentAnswer] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const today = moment__WEBPACK_IMPORTED_MODULE_3___default()();
  const assignmentId = match.params.assignmentId;
  const lectureId = match.params.lectureId;
  const [onGoing, setOnGoing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [submitData, setSubmitData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [submitFile, setSubmitFile] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [studentSubmitFile, setStudentSubmitFile] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [onSubmit, setOnSubmit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const Url = `https://docs.google.com/gview?embedded=true&url=https://oneboard.connect.o-r.kr:8080/lecture/${lectureId}/assignment/${assignmentId}/file`;

  const getData = () => {
    return new Promise((resolve, reject) => {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/lecture/${lectureId}/assignment/${assignmentId}`).then(res => {
        const result = res.data.data;
        console.log(result);
        setAssignments(result);

        if (today.isBefore(result.endDt) && today.isAfter(result.startDt)) {
          setOnGoing(true);
        }
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  };

  const getSubmitData = () => {
    console.log(token);
    console.log(lectureId);
    console.log(assignmentId);
    return new Promise((resolve, reject) => {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/lecture/${lectureId}/assignment/${assignmentId}/submit`, {
        headers: {
          'X-AUTH-TOKEN': `${token}`
        }
      }).then(res => {
        const result = res.data.data;
        console.log(result);

        if (result !== null) {
          setSubmitData(result);
          setSubmitFile(result.fileUrl);
          setOnSubmit(true);
        } else {
          console.log(result);
        }
      }).catch(e => {
        console.log(e);
        reject(e);
      });
    });
  };

  const stateDisplay = (startDate, endDate) => {
    if (today.isBefore(startDate)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          color: '#BFBFBF',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_3___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uC608\uC815)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
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
        lineNumber: 175,
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
        lineNumber: 182,
        columnNumber: 9
      }, undefined);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getData();
    getSubmitData();
  }, []);
  const headersConfig = {
    'X-AUTH-TOKEN': `${token}`,
    'Content-Type': 'multipart/form-data'
  }; //수정 필요

  const submitAssignment = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', studentAnswer);
    formData.append('file', studentSubmitFile);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/lecture/${lectureId}/assignment/${assignmentId}/submit`, formData, {
      headers: headersConfig
    }).then(res => {
      console.log(res);
      return window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`;
    }).catch(error => {
      console.log(error);
    });
  };

  const onChangeAnswer = e => {
    setStudentAnswer(e.target.value);
    console.log(e.target.value);
  };

  const onCancel = () => {
    return window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`;
  };

  const onFileChange = e => {
    e.preventDefault();
    console.log(e.target.files);
    setStudentSubmitFile(e.target.files[0]);
  };

  const onUpdate = () => {
    return window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/${assignmentId}/StudentDetail/Update`;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Title, {
      children: "Assignment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
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
      lineNumber: 241,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemTitle, {
        children: ["\uC81C\uBAA9 : ", assignments.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 251,
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
        lineNumber: 252,
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
          lineNumber: 264,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: ["\uBC30\uC810 ", assignments.score]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemContent, {
        children: react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(assignments.content)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
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
        lineNumber: 268,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemContainer, {
      style: {
        margin: '10px auto'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        children: onGoing === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemTitle, {
          children: "\uC81C\uCD9C\uBB3C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 13
        }, undefined) : onSubmit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemTitle, {
          children: "\uC81C\uCD9C\uBB3C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemTitle, {
            children: "\uACFC\uC81C \uC81C\uCD9C \uC791\uC131"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledButton, {
            cyan: true,
            onClick: submitAssignment,
            children: "\uC81C\uCD9C\uD558\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 273,
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
        lineNumber: 287,
        columnNumber: 9
      }, undefined), onGoing === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            display: 'flex'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemTitle, {
            children: assignments.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            style: {
              fontWeight: '600',
              fontSize: '20px',
              marginLeft: 'auto'
            },
            children: ["\uC810\uC218 : ", submitData.score, " / ", assignments.score]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {
          style: {
            width: '100%',
            margin: '10px 0px',
            display: 'block',
            borderColor: '#ffffff'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: submitData.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: submitFile === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              style: {
                marginTop: '10px',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              },
              children: "\uC81C\uCD9C\uB41C \uACFC\uC81C\uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 19
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              style: {
                display: 'flex'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                style: {
                  marginRight: 'auto'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_iframe__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  url: Url,
                  width: "500px",
                  height: "500px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 316,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: submitFile,
                style: {
                  marginTop: '10px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  textDecoration: 'underline'
                },
                children: "\uC81C\uCD9C\uB41C \uACFC\uC81C\uD30C\uC77C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {
          style: {
            width: '100%',
            margin: '10px 0px',
            display: 'block',
            borderColor: '#ffffff'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            fontWeight: '600',
            fontSize: '20px',
            color: 'skyblue'
          },
          children: ["\uD53C\uB4DC\uBC31 :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            style: {
              color: 'black'
            },
            children: submitData.feedback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 345,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 11
      }, undefined) : onSubmit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            display: 'flex'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemTitle, {
            children: assignments.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            style: {
              fontWeight: '600',
              fontSize: '20px',
              marginLeft: 'auto'
            },
            children: ["\uC810\uC218 : ", submitData.score, " / ", assignments.score]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {
          style: {
            width: '100%',
            margin: '10px 0px',
            display: 'block',
            borderColor: '#ffffff'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            style: {
              fontSize: '1.0rem'
            },
            children: submitData.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: submitFile === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              style: {
                marginTop: '10px',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              },
              children: "\uC81C\uCD9C\uB41C \uACFC\uC81C\uD30C\uC77C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 368,
              columnNumber: 19
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              style: {
                display: 'flex'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                style: {
                  marginRight: 'auto'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_iframe__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  url: Url,
                  width: "500px",
                  height: "500px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 374,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 373,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: submitFile,
                style: {
                  marginTop: '10px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  textDecoration: 'underline'
                },
                children: "\uC81C\uCD9C\uB41C \uACFC\uC81C\uD30C\uC77C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {
          style: {
            width: '100%',
            margin: '10px 0px',
            display: 'block',
            borderColor: '#ffffff'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            fontWeight: '600',
            fontSize: '20px',
            color: 'skyblue'
          },
          children: ["\uD53C\uB4DC\uBC31 :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 402,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            style: {
              color: 'black'
            },
            children: submitData.feedback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(AnswerInput, {
          placeholder: "\uACFC\uC81C \uB2F5\uC548 \uC791\uC131",
          onChange: onChangeAnswer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '5px 0'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            style: {
              paddingLeft: '5px',
              lineHeight: '41.6px'
            },
            children: "\uD30C\uC77C \uCCA8\uBD80"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 410,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
            name: "noteFile",
            encType: "multipart/form-data",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              type: "file",
              onChange: onFileChange,
              style: {
                height: '41.6px',
                padding: '5px',
                margin: '10px',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 412,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        display: 'flex'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledButton, {
        cyan: true,
        onClick: onCancel,
        style: {
          marginLeft: '1rem'
        },
        children: "\uB4A4\uB85C\uAC00\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 9
      }, undefined), onSubmit === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 11
      }, undefined) : onGoing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledButton, {
        onClick: onUpdate,
        children: "\uC218\uC815\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 239,
    columnNumber: 5
  }, undefined);
};

_s(StudentAssignmentDetail, "ZFVlDqgUhr92if/0pEoVJTsMgF0=");

_c7 = StudentAssignmentDetail;
/* harmony default export */ __webpack_exports__["default"] = (StudentAssignmentDetail);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

__webpack_require__.$Refresh$.register(_c, "StyledButton");
__webpack_require__.$Refresh$.register(_c2, "Title");
__webpack_require__.$Refresh$.register(_c3, "ProblemContainer");
__webpack_require__.$Refresh$.register(_c4, "ProblemTitle");
__webpack_require__.$Refresh$.register(_c5, "ProblemContent");
__webpack_require__.$Refresh$.register(_c6, "AnswerInput");
__webpack_require__.$Refresh$.register(_c7, "StudentAssignmentDetail");

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

/***/ "./src/Pages/LecturePages/Assignment/StudentSubmit.js":
/*!************************************************************!*\
  !*** ./src/Pages/LecturePages/Assignment/StudentSubmit.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/Pages/LecturePages/Assignment/StudentSubmit.js",
    _s = __webpack_require__.$Refresh$.signature();





const ProblemTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;
_c = ProblemTitle;
const ScoreInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input`
  width: 30%;
  border: 1px solid #d9d9d9;
  padding: 10px;
  display: inline-block;
`;
_c2 = ScoreInput;
const ScoreButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  width: 20%;
  display: inline-block;
  padding: 3px;
  background-color: #22e2cf;
  color: white;
  border-radius: 5px;
`;
_c3 = ScoreButton;

const StudentSubmit = ({
  lectureId,
  assignmentId,
  assignmentsScore
}) => {
  _s();

  const [studentScore, setStudentScore] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [submitAssignments, setSubmitAssignments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;

  const onChangeScore = e => {//점수만 바꿔서 저장 해주기
  };

  const getSubmitData = () => {
    return new Promise((resolve, reject) => {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/lecture/${lectureId}/assignment/${assignmentId}/submits`).then(res => {
        const result = res.data.data;
        setSubmitAssignments(result);
        console.log(result);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getSubmitData();
  }, []);

  const onSubmitAssignment = (e, submitId) => {
    return window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/${assignmentId}/ProfessorDetail/${submitId}`;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("hr", {
      style: {
        width: '100%',
        margin: '10px 0px',
        display: 'block',
        borderColor: '#ffffff'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ProblemTitle, {
      children: "\uD559\uC0DD \uC81C\uCD9C\uBB3C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("table", {
      style: {
        width: '100%',
        margin: '10px auto',
        borderTop: '1px solid #D5D5D5',
        textAlign: 'center',
        borderSpacing: '0px 10px',
        borderCollapse: 'separate'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("thead", {
        style: {
          borderBottom: '1px solid #D5D5D5',
          fontStyle: 'bold',
          fontWeight: '500',
          backgroundColor: '#f3f3f3'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("th", {
            style: {
              padding: '10px 0',
              width: '20%'
            },
            children: "\uC774\uB984"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("th", {
            style: {
              padding: '10px 0',
              width: '30%'
            },
            children: "\uB0B4\uC6A9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("th", {
            style: {
              padding: '10px 0',
              width: '20%'
            },
            children: "\uCCA8\uBD80\uD30C\uC77C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("th", {
            style: {
              padding: '10px 0',
              width: '30%'
            },
            children: "\uC810\uC218"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("tbody", {
        children: submitAssignments.map((submitAssignment, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("tr", {
          style: {
            borderRadius: '5px',
            boxShadow: '0px 2px 2px 1px #eeeeee'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("td", {
            style: {
              padding: '10px 0',
              backgroundColor: 'white',
              borderRadius: '5px 0 0 5px'
            },
            children: submitAssignment.userName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("td", {
            style: {
              padding: '10px 0',
              backgroundColor: 'white',
              cursor: 'pointer',
              fontWeight: 'bold',
              textDecoration: 'underline'
            },
            onClick: e => onSubmitAssignment(e, submitAssignment.submitId),
            children: submitAssignment.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("td", {
            style: {
              padding: '10px 0',
              backgroundColor: 'white'
            },
            children: submitAssignment.fileUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("td", {
            style: {
              padding: '10px 0',
              backgroundColor: 'white'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                margin: '0',
                padding: '0 5px'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                style: {
                  paddingLeft: '100px'
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ScoreInput, {
                  onChange: onChangeScore,
                  placeholder: submitAssignment.score
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                  style: {
                    width: '20%'
                  },
                  children: [" / ", assignmentsScore]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ScoreButton, {
                onClick: e => onChangeScore(index, studentScore),
                children: "\uC218\uC815"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined);
};

_s(StudentSubmit, "+uGIxQG0+KNhc7QvX3n8MiwdXhI=");

_c4 = StudentSubmit;
/* harmony default export */ __webpack_exports__["default"] = (StudentSubmit);

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "ProblemTitle");
__webpack_require__.$Refresh$.register(_c2, "ScoreInput");
__webpack_require__.$Refresh$.register(_c3, "ScoreButton");
__webpack_require__.$Refresh$.register(_c4, "StudentSubmit");

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

/***/ "./src/Pages/LecturePages/Assignment/StudentSubmitDetail.js":
/*!******************************************************************!*\
  !*** ./src/Pages/LecturePages/Assignment/StudentSubmitDetail.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _StudentSubmit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StudentSubmit */ "./src/Pages/LecturePages/Assignment/StudentSubmit.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/Pages/LecturePages/Assignment/StudentSubmitDetail.js",
    _s = __webpack_require__.$Refresh$.signature();








const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  width: 100%;
  display: inline-block;
  margin: 10px auto;
  padding: 0px 20px;
  //overflow-y: auto;
  //align-items : center;
  //justify-content : center;
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
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  float: left;
  margin-top: 3px;
  margin-right: 20px;
  color: #8b8b8b;
  font-size: 13px;
  font-weight: 400;
`;
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  font-size: 2px;
  padding: 5px;
  margin-top: 50px;
  margin-right: 10px;
  background-color: rgba(215, 226, 185, 0.596);
  color: #3e3e3e;
  border-radius: 7px;
  &:hover {
    background-color: #bfbfbf;
  }
`;
_c3 = Btn;
const ProblemContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  background-color: white;
  border-radius: 10px;
  padding: 30px 15px;
  margin: 0 auto;
  width: 100%;
  box-shadow: 0 5px 5px 0 #eeeeee;
`;
_c4 = ProblemContainer;
const ProblemTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  font-size: 20px;
  font-weight: 600;
`;
_c5 = ProblemTitle;
const ProblemContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  width: 100%;
  margin: 10px auto;
  padding: 0 5px;
`;
_c6 = ProblemContent;
const FeedbackInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea`
  height: 60px;
  width: 100%;
  resize: none;
  border: 1px solid #d9d9d9;
  &:focus {
    border: 1px solid #40a9ff;
    box-shadow: 0 0 0 2px #1890ff 20%;
    outline: 0;
  }
`;
_c7 = FeedbackInput;
const ScoreInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input`
  width: 50px;
  border: 1px solid #d9d9d9;
  padding: 10px;
  display: inline-block;
`;
_c8 = ScoreInput;

const StudentSubmitDetail = ({
  match
}) => {
  _s();

  const [score, setScore] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [feedback, setFeedback] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [submitAssignments, setSubmitAssignments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [assignments, setAssignments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const lectureId = match.params.lectureId;
  const submitId = match.params.submitId;
  const assignmentId = match.params.assignmentId;
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType; // const submitId = match.params.submitId;

  const stateDisplay = (startDate, endDate) => {
    const today = moment__WEBPACK_IMPORTED_MODULE_5___default()();

    if (today.isBefore(startDate)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          color: '#BFBFBF',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_5___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_5___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uC608\uC815)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined);
    } else if (today.isBefore(endDate)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          color: '#61C679',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_5___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_5___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uC9C4\uD589\uC911)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          color: '#E24C4B',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_5___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_5___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uB9C8\uAC10)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, undefined);
    }
  };

  const getSubmitAssignmentData = () => {
    return new Promise((resolve, reject) => {
      //submit ID 수정해주기
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/lecture/${lectureId}/assignment/${assignmentId}/submit/${submitId}`).then(res => {
        const result = res.data.data;
        console.log(result);
        setSubmitAssignments(result);
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
        setAssignments(assignmentResult);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getSubmitAssignmentData();
    getAssignmentData();
    console.log(submitId);
  }, []);

  const onCancel = () => {
    return window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/${assignmentId}/ProfessorDetail`;
  };

  const onSubmit = () => {
    //post 함수
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/lecture/${lectureId}/assignment/${assignmentId}/submit/${submitId}`, {
      score: score,
      feedback: feedback
    }).then(res => {
      console.log(res);
      return window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment/${assignmentId}/ProfessorDetail`;
    }).catch(error => {
      console.log(error);
    });
  };

  const getFeedback = e => {
    setFeedback(e.target.value);
    console.log(feedback);
  };

  const getScore = e => {
    if (e.target.value > assignments.score) {
      alert('배점보다 높게 점수를 입력할 수 없습니다.');
      window.location.reload();
    } else {
      setScore(e.target.value);
    }

    console.log(score);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Title, {
      children: "Assignment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("hr", {
      style: {
        width: '100%',
        margin: '30px 0px',
        marginTop: '50px',
        display: 'block',
        borderColor: '#ffffff'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ProblemContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ProblemTitle, {
        children: assignments.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("hr", {
        style: {
          width: '100%',
          margin: '10px 0px',
          display: 'block',
          borderColor: '#ffffff'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0',
          padding: '0px 5px',
          fontWeight: '700'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: stateDisplay(moment__WEBPACK_IMPORTED_MODULE_5___default()(assignments.startDt), moment__WEBPACK_IMPORTED_MODULE_5___default()(assignments.endDt))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: ["\uBC30\uC810 ", assignments.score]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ProblemContent, {
        children: react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(assignments.content)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("hr", {
        style: {
          width: '100%',
          margin: '10px 0px',
          display: 'block',
          borderColor: '#ffffff'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("hr", {
      style: {
        width: '100%',
        margin: '10px 0px',
        display: 'block',
        borderColor: '#ffffff'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("hr", {
      style: {
        width: '100%',
        margin: '10px 0px',
        display: 'block',
        borderColor: '#ffffff'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ScoreInput, {
        onChange: getScore
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 9
      }, undefined), " / ", assignments.score]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("hr", {
      style: {
        width: '100%',
        margin: '10px 0px',
        display: 'block',
        borderColor: '#ffffff'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(FeedbackInput, {
      onChange: getFeedback,
      placeholder: "\uC810\uC218\uC5D0 \uB300\uD55C \uD53C\uB4DC\uBC31\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Btn, {
      onClick: onSubmit,
      children: "\uC800\uC7A5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Btn, {
      onClick: onCancel,
      children: "\uCDE8\uC18C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 197,
    columnNumber: 5
  }, undefined);
};

_s(StudentSubmitDetail, "WgLQ6/FmFYTATAMjTgUu7dywhMk=");

_c9 = StudentSubmitDetail;
/* harmony default export */ __webpack_exports__["default"] = (StudentSubmitDetail);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

__webpack_require__.$Refresh$.register(_c, "Container");
__webpack_require__.$Refresh$.register(_c2, "Title");
__webpack_require__.$Refresh$.register(_c3, "Btn");
__webpack_require__.$Refresh$.register(_c4, "ProblemContainer");
__webpack_require__.$Refresh$.register(_c5, "ProblemTitle");
__webpack_require__.$Refresh$.register(_c6, "ProblemContent");
__webpack_require__.$Refresh$.register(_c7, "FeedbackInput");
__webpack_require__.$Refresh$.register(_c8, "ScoreInput");
__webpack_require__.$Refresh$.register(_c9, "StudentSubmitDetail");

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

/***/ "./src/Pages/LecturePages/Assignment/UpdateAssignment.js":
/*!***************************************************************!*\
  !*** ./src/Pages/LecturePages/Assignment/UpdateAssignment.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/styles/palette */ "./src/lib/styles/palette.js");
/* harmony import */ var _Component_common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Component/common/Button */ "./src/Component/common/Button.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/Pages/LecturePages/Assignment/UpdateAssignment.js",
    _s = __webpack_require__.$Refresh$.signature();













const {
  RangePicker
} = antd__WEBPACK_IMPORTED_MODULE_10__["DatePicker"];
const TitleInput = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].input`
  font-size: 2rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${_lib_styles_palette__WEBPACK_IMPORTED_MODULE_3__["default"].gray[4]};
  margin-bottom: 2rem;
  margin-top: 10px;
  width: 100%;
`;
_c = TitleInput;
const WriteAcitonButtonBlock = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;
_c2 = WriteAcitonButtonBlock;
const StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_Component_common_Button__WEBPACK_IMPORTED_MODULE_4__["default"])`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
_c3 = StyledButton;
const ScoreInput = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].input`
  margin: 5px 0px;
  border-radius: 3px;
  height: 31.6px;
  border: 1px solid #d9d9d9;
  padding: 0px 10px;
  &:focus {
    border: 1px solid #40a9ff;
    box-shadow: 0 0 0 2px #1890ff 20%;
    outline: 0;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
_c4 = ScoreInput;
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  margin: 0 auto;
  width: 80%;
  box-shadow: 0 5px 5px 0 #eeeeee;
`;
_c5 = ListContainer;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
  width: 97%;
  display: block;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding: 0 20px;
  margin-bottom: 50px;
`;
_c6 = Container;

const UpdateAssignment = ({
  history,
  match
}) => {
  _s();

  const [title, setTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [content, setContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [period, setPeriod] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [files, setFiles] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [exposeDt, setExposeDt] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [score, setScore] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const lectureId = match.params.lectureId;
  const assignmentId = match.params.assignmentId;
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;
  const [assignmentScore, setAssignmentScore] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchUpdateAssignment = async () => {
      try {
        await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/lecture/${lectureId}/assignment/` + assignmentId).then(res => {
          const result = res.data.data;
          setTitle(result.title);
          setContent(result.content);
          setAssignmentScore(result.score);
          console.log(result);
        }).catch(e => {
          console.log(e);
        });
      } catch (e) {
        console.log(e);
      }
    };

    fetchUpdateAssignment();
  }, []);

  const getTitle = e => {
    setTitle(e.target.value);
    console.log(title);
  };

  const onChangePeriod = (e, dateString) => {
    setPeriod({ ...period,
      start: dateString[0],
      end: dateString[1]
    });
  };

  const onSubmit = () => {
    console.log('title : ' + title);
    console.log('content : ' + content);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', files);
    formData.append('startDt', period.start);
    formData.append('endDt', period.end);
    formData.append('score', score);
    formData.append('exposeDt', exposeDt);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(`/lecture/${lectureId}/assignment/` + assignmentId, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res);
      console.log(score);
      return window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`;
    }).catch(e => {
      console.log(e);
    });
  };

  const onCancel = () => {
    history.goback();
  };

  const handleText = editor => {
    console.log(editor);
    setContent(editor);
  };

  const onFileChange = e => {
    e.preventDefault();
    console.log(e.target.files);
    setFiles(e.target.files[0]);
  };

  const modules = {
    toolbar: [//[{ 'font': [] }],
    [{
      header: [1, 2, false]
    }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
      list: 'ordered'
    }, {
      list: 'bullet'
    }, {
      indent: '-1'
    }, {
      indent: '+1'
    }], ['link', 'image'], [{
      align: []
    }, {
      color: []
    }, {
      background: []
    }], // dropdown with defaults from theme
    ['clean']]
  };
  const format = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'align', 'color', 'background'];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("hr", {
      style: {
        width: '100%',
        margin: '30px 0px',
        marginTop: '50px',
        display: 'block',
        borderColor: '#ffffff'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(ListContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TitleInput, {
        onChange: getTitle,
        value: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            paddingLeft: '5px',
            lineHeight: '31.6px'
          },
          children: "\uACFC\uC81C \uAE30\uD55C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(RangePicker, {
            showTime: {
              hideDisabledOptions: true,
              defaultValue: [moment__WEBPACK_IMPORTED_MODULE_1___default()('00:00:00', 'HH:mm:ss'), moment__WEBPACK_IMPORTED_MODULE_1___default()('23:59:59', 'HH:mm:ss')]
            },
            format: "YYYY-MM-DD HH:mm:ss",
            onChange: onChangePeriod
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          margin: '5px 0'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            paddingLeft: '5px',
            lineHeight: '41.6px'
          },
          children: "\uBC30\uC810"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(ScoreInput, {
          type: "number",
          onChange: e => setScore(e.target.value),
          value: assignmentScore
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("hr", {
        style: {
          width: '100%',
          margin: '30px 0px',
          marginTop: '50px',
          display: 'block',
          borderColor: '#ffffff'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: "\uACFC\uC81C \uD30C\uC77C \uC120\uD0DD "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("form", {
        name: "planfile",
        encType: "multipart/form-data",
        onSubmit: onSubmit,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
          style: {
            margin: '5px'
          },
          type: "file",
          onChange: onFileChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_quill__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          height: '650px'
        },
        theme: "snow",
        modules: modules,
        formats: format,
        value: content,
        onChange: (content, delta, source, editor) => handleText(editor.getHTML())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(WriteAcitonButtonBlock, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(StyledButton, {
          cyan: true,
          onClick: onSubmit,
          children: "\uACFC\uC81C \uBC0F \uC2DC\uD5D8 \uC218\uC815"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(StyledButton, {
          onClick: onCancel,
          children: "\uCDE8\uC18C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 195,
    columnNumber: 5
  }, undefined);
};

_s(UpdateAssignment, "Ki6wVCgzWFHs+xXoqUDQPn/Ig0c=");

_c7 = UpdateAssignment;
/* harmony default export */ __webpack_exports__["default"] = (_c8 = Object(react_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(UpdateAssignment));

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

__webpack_require__.$Refresh$.register(_c, "TitleInput");
__webpack_require__.$Refresh$.register(_c2, "WriteAcitonButtonBlock");
__webpack_require__.$Refresh$.register(_c3, "StyledButton");
__webpack_require__.$Refresh$.register(_c4, "ScoreInput");
__webpack_require__.$Refresh$.register(_c5, "ListContainer");
__webpack_require__.$Refresh$.register(_c6, "Container");
__webpack_require__.$Refresh$.register(_c7, "UpdateAssignment");
__webpack_require__.$Refresh$.register(_c8, "%default%");

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

/***/ "./src/Pages/LecturePages/Assignment/UpdateStudentAssignment.js":
/*!**********************************************************************!*\
  !*** ./src/Pages/LecturePages/Assignment/UpdateStudentAssignment.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/Pages/LecturePages/Assignment/UpdateStudentAssignment.js",
    _s = __webpack_require__.$Refresh$.signature();







const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  display: inline-block;
  margin: 10px auto;
  padding: 0px 20px;
  //overflow-y: auto;
  //align-items : center;
  //justify-content : center;
`;
const Line = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].hr`
  width: 100%;
  margin: 10px 0px;
  display: block;
  border-color: #ffffff;
`;
_c = Line;
const WriteBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 30px;
  margin-left: 20px;
  background-color: #d3d31c;
  color: #3e3e3e;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`;
_c2 = WriteBtn;
const UpdateBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 30px;
  background-color: #f83636;
  color: #3e3e3e;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
`;
_c3 = Title;
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  float: left;
  margin-top: 3px;
  margin-right: 20px;
  color: #8b8b8b;
  font-size: 13px;
  font-weight: 400;
`;
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  font-size: 2px;
  padding: 5px;
  margin-top: 50px;
  margin-right: 10px;
  background-color: rgba(215, 226, 185, 0.596);
  color: #3e3e3e;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: #bfbfbf;
  }
`;
_c4 = Btn;
const ProblemContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  background-color: white;
  border-radius: 10px;
  padding: 30px 15px;
  margin: 0 auto;
  width: 100%;
  box-shadow: 0 5px 5px 0 #eeeeee;
`;
_c5 = ProblemContainer;
const ProblemTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 20px;
  font-weight: 600;
`;
_c6 = ProblemTitle;
const ProblemContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  margin: 10px auto;
  padding: 0 5px;
`;
_c7 = ProblemContent;
const AnswerInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea`
  height: 60px;
  width: 100%;
  resize: none;
  border: 1px solid #d9d9d9;
  &:focus {
    border: 1px solid #40a9ff;
    box-shadow: 0 0 0 2px #1890ff 20%;
    outline: 0;
  }
`;
_c8 = AnswerInput;

const UpdateStudentAssignment = ({
  match
}) => {
  _s();

  const user = JSON.parse(window.localStorage.userInfo);
  const userType = user.userType;
  const token = localStorage.getItem('token');
  const today = moment__WEBPACK_IMPORTED_MODULE_2___default()();
  const lectureId = match.params.lectureId;
  const assignmentId = match.params.assignmentId;
  const [assignments, setAssignments] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [studentAnswer, setStudentAnswer] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [submitData, setSubmitData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [studentSubmitFile, setStudentSubmitFile] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const getData = () => {
    return new Promise((resolve, reject) => {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/lecture/${lectureId}/assignment/${assignmentId}`).then(res => {
        const result = res.data.data;
        console.log(result);
        setAssignments(result);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  };

  const getSubmitData = () => {
    return new Promise((resolve, reject) => {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/lecture/${lectureId}/assignment/${assignmentId}/submit`, {
        headers: {
          'X-AUTH-TOKEN': `${token}`
        }
      }).then(res => {
        const result = res.data.data;
        console.log(result);
        setSubmitData(result);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  };

  const stateDisplay = (startDate, endDate) => {
    if (today.isBefore(startDate)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          color: '#BFBFBF',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_2___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uC608\uC815)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, undefined);
    } else if (today.isBefore(endDate)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          color: '#61C679',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_2___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uC9C4\uD589\uC911)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, undefined);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          color: '#E24C4B',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_2___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uB9C8\uAC10)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, undefined);
    }
  };

  const headersConfig = {
    'X-AUTH-TOKEN': `${token}`,
    'Content-Type': 'multipart/form-data'
  };

  const submitAssignment = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', studentAnswer);
    formData.append('file', studentSubmitFile);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(`/lecture/${lectureId}/assignment/${assignmentId}/submit`, formData, {
      headers: headersConfig
    }).then(res => {
      console.log(res);
      return window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`;
    }).catch(error => {
      console.log(error);
    });
  };

  const onChangeAnswer = e => {
    setStudentAnswer(e.target.value);
    console.log(e.target.value);
  };

  const onCancel = () => {
    return window.location.href = `/Main/Lecture/${userType}/${lectureId}/Assignment`;
  };

  const onFileChange = e => {
    e.preventDefault();
    console.log(e.target.files);
    setStudentSubmitFile(e.target.files[0]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getData();
    getSubmitData();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Title, {
      children: "Assignment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Line, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ProblemContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ProblemTitle, {
        children: ["\uC81C\uBAA9 : ", assignments.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0',
          padding: '0px 5px',
          fontWeight: '700'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: stateDisplay(moment__WEBPACK_IMPORTED_MODULE_2___default()(assignments.startDt), moment__WEBPACK_IMPORTED_MODULE_2___default()(assignments.endDt))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: ["\uBC30\uC810 ", assignments.score]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ProblemContent, {
        children: react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(assignments.content)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ProblemContainer, {
      style: {
        margin: '10px auto'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ProblemTitle, {
        children: "\uACFC\uC81C \uC81C\uCD9C \uC791\uC131"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(AnswerInput, {
          onChange: onChangeAnswer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '5px 0'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            style: {
              paddingLeft: '5px',
              lineHeight: '41.6px'
            },
            children: "\uD30C\uC77C \uCCA8\uBD80"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("form", {
            name: "noteFile",
            encType: "multipart/form-data",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
              type: "file",
              onChange: onFileChange,
              style: {
                height: '41.6px',
                padding: '5px',
                margin: '10px',
                cursor: 'pointer'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(WriteBtn, {
        onClick: onCancel,
        children: "\uB4A4\uB85C\uAC00\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Btn, {
        onClick: submitAssignment,
        children: "\uC218\uC815\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 229,
    columnNumber: 5
  }, undefined);
};

_s(UpdateStudentAssignment, "T/YAJA9i6+foJvqNZE9jbKSY0nI=");

_c9 = UpdateStudentAssignment;
/* harmony default export */ __webpack_exports__["default"] = (UpdateStudentAssignment);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

__webpack_require__.$Refresh$.register(_c, "Line");
__webpack_require__.$Refresh$.register(_c2, "WriteBtn");
__webpack_require__.$Refresh$.register(_c3, "Title");
__webpack_require__.$Refresh$.register(_c4, "Btn");
__webpack_require__.$Refresh$.register(_c5, "ProblemContainer");
__webpack_require__.$Refresh$.register(_c6, "ProblemTitle");
__webpack_require__.$Refresh$.register(_c7, "ProblemContent");
__webpack_require__.$Refresh$.register(_c8, "AnswerInput");
__webpack_require__.$Refresh$.register(_c9, "UpdateStudentAssignment");

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

/***/ "./src/Pages/LecturePages/Lesson/LessonDetail.js":
/*!*******************************************************!*\
  !*** ./src/Pages/LecturePages/Lesson/LessonDetail.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_iframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-iframe */ "./node_modules/react-iframe/dist/es/iframe.js");
/* harmony import */ var _Component_common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Component/common/Button */ "./src/Component/common/Button.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.esm.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/Pages/LecturePages/Lesson/LessonDetail.js",
    _s = __webpack_require__.$Refresh$.signature();










const TTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 30px;
  margin-left: 15px;
  margin-top: 15px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
  text-align: left;
`;
_c = TTitle;
const StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Component_common_Button__WEBPACK_IMPORTED_MODULE_4__["default"])`
  height: 2.3rem;
  margin-left: 1rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
_c2 = StyledButton;
const TabletrColor = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].tr`
  &:nth-child(even) {
    background: #f7f9fc;
  }
`;
_c3 = TabletrColor;
chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].register(chart_js__WEBPACK_IMPORTED_MODULE_5__["CategoryScale"], chart_js__WEBPACK_IMPORTED_MODULE_5__["LinearScale"], chart_js__WEBPACK_IMPORTED_MODULE_5__["BarElement"], chart_js__WEBPACK_IMPORTED_MODULE_5__["Title"], chart_js__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], chart_js__WEBPACK_IMPORTED_MODULE_5__["Legend"]);

const LessonDetail = ({
  match
}) => {
  _s();

  const lessonId = match.params.lessonId;
  const lectureId = match.params.lectureId;
  const [isProfessor, setIsProfessor] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [lessonDetails, setLessonDetails] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [studentInfo, setStudentInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [sessionId, setSessionId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;
  const Url = `https://docs.google.com/gview?embedded=true&url=https://115.85.182.194:8080/lecture/${lectureId}/lesson/${lessonId}/note`;
  const FileURL = `https://115.85.182.194:8080/lecture/${lectureId}/lesson/${lessonId}/note`;
  const labels = ['출석', '결석', '지각'];
  const LessonLink = `/class/${lectureId}/${lessonId}/${sessionId}/${userType}`;
  const token = localStorage.getItem('token');

  const getLessonData = () => {
    return new Promise((resolve, reject) => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`lecture/${lectureId}/lesson/${lessonId}`).then(res => {
        const result = res.data.data;
        setLessonDetails(result);
        setSessionId(result.session);
        console.log(result);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  };

  const LessonCheck = () => {
    return window.location.href = `/class/${lectureId}/${lessonId}/${sessionId}/${userType}`; // return new Promise((resolve, reject) => {
    //   axios
    //     .get(`/lecture/${lectureId}/lesson/${lessonId}/live/entrance`, {
    //       headers: { 'X-AUTH-TOKEN': `${token}` },
    //       params: { session: `${sessionId}` },
    //     })
    //     .then((res) => {
    //       const result = res;
    //       console.log(result);
    //       if (result.data.result === 'SUCCESS') {
    //         return (window.location.href = `/class/${lectureId}/${lessonId}/${sessionId}/${userType}`);
    //       } else {
    //         alert('수업에 입장할 수 없습니다.');
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       reject(error);
    //     });
    // });
  };

  const getLessonAttendanceData = () => {
    return new Promise((resolve, reject) => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`lecture/${lectureId}/lesson/${lessonId}/attendances`).then(res => {
        const result = res.data.data;
        console.log(result);
        setStudentInfo(result);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  };

  const checkIsProfessor = () => {
    if (userType === 'T') {
      setIsProfessor(true);
    } else setIsProfessor(false);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: '수업 출석 현황'
      }
    }
  };
  const data = {
    labels,
    datasets: [{
      label: '학생 수',
      data: [studentInfo.filter(ex => ex.attendanceList[0].status === 2).length, studentInfo.filter(ex => ex.attendanceList[0].status === 0).length, studentInfo.filter(ex => ex.attendanceList[0].status === 1).length],
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }]
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getLessonData();
    getLessonAttendanceData();
    checkIsProfessor();
    console.log(studentInfo.map((ex, index) => ex.attendanceList.map((ex2, index) => ex2.status)));
  }, []);

  const onCancel = () => {
    return window.location.href = `/Main/Lecture/${lectureId}/Lesson`;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        display: 'flex'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(TTitle, {
        children: lessonDetails.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          fontSize: '1.3rem',
          marginTop: '1.5rem',
          marginRight: '15px',
          marginLeft: '2rem'
        },
        children: ["\uAC15\uC758 \uB0A0\uC9DC : ", lessonDetails.date]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          fontSize: '1.3rem',
          marginTop: '1.5rem',
          marginRight: '15px',
          marginLeft: '2rem',
          display: 'flex'
        },
        children: ["\uC218\uC5C5 \uD0C0\uC785 :", lessonDetails.type === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            marginLeft: '15px'
          },
          children: "\uB300\uBA74 \uC218\uC5C5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }, undefined) : lessonDetails.type === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            marginLeft: '15px'
          },
          children: "\uBE44\uB300\uBA74 \uC2E4\uC2DC\uAC04 \uC218\uC5C5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            marginLeft: '15px'
          },
          children: "\uB179\uD654 \uAC15\uC758"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, undefined), userType === 'S' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          fontSize: '1.3rem',
          marginTop: '1.5rem',
          marginRight: '50px',
          marginLeft: 'auto'
        },
        children: "\uCD9C\uC11D \uC815\uBCF4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {
      style: {
        width: '100%',
        margin: '10px 0px',
        display: 'block',
        borderColor: '#ffffff'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        marginLeft: '1rem'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          fontSize: '1rem',
          paddingBottom: '0.5rem',
          marginBottom: '2rem',
          marginTop: '15px',
          marginRight: '15px',
          fontWeight: 'bold',
          display: 'flex'
        },
        children: ["\uAC15\uC758 \uB178\uD2B8 :", ' ', lessonDetails.noteUrl === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            color: 'red',
            marginLeft: '1rem'
          },
          children: "\uB4F1\uB85D\uB41C \uAC15\uC758\uB178\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            textDecoration: 'underline',
            color: 'skyblue',
            marginLeft: '1rem'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            href: FileURL,
            children: [lessonDetails.title, " \uAC15\uC758\uB178\uD2B8 \uB2E4\uC6B4\uB85C\uB4DC"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_iframe__WEBPACK_IMPORTED_MODULE_3__["default"], {
              url: Url,
              width: "700px",
              height: "400px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, undefined), lessonDetails.type === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          fontSize: '1rem',
          paddingBottom: '0.5rem',
          marginBottom: '2rem',
          marginTop: '15px',
          marginRight: '15px',
          fontWeight: 'bold',
          marginLeft: '15px',
          display: 'flex'
        },
        children: isProfessor ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            cursor: 'pointer'
          },
          onClick: LessonCheck,
          children: "\uC2E4\uC2DC\uAC04 \uC218\uC5C5\uC785\uC7A5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            cursor: 'pointer'
          },
          onClick: LessonCheck,
          children: "\uC2E4\uC2DC\uAC04 \uC218\uC5C5\uC785\uC7A5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 11
      }, undefined) : lessonDetails.type === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          fontSize: '1rem',
          paddingBottom: '0.5rem',
          marginBottom: '2rem',
          marginTop: '15px',
          marginRight: '15px',
          fontWeight: 'bold',
          marginLeft: '15px',
          display: 'flex'
        },
        children: ["\uAC15\uC758\uC2E4 \uC815\uBCF4 : ", lessonDetails.room]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          fontSize: '1rem',
          paddingBottom: '0.5rem',
          marginBottom: '2rem',
          marginTop: '15px',
          marginRight: '15px',
          fontWeight: 'bold',
          marginLeft: '15px',
          display: 'flex'
        },
        children: ["\uB179\uD654 \uAC15\uC758 : ", lessonDetails.videoUrl]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {
      style: {
        width: '100%',
        margin: '10px 0px',
        display: 'block',
        borderColor: '#ffffff'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }, undefined), userType === 'S' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          display: 'flex'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            width: '50%'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_6__["Bar"], {
            options: options,
            data: data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            width: '50%',
            marginLeft: '1rem'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("table", {
            style: {
              width: '100%',
              textAlign: 'center',
              marginRight: '5px',
              borderRight: '1px solid #D5D5D5'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("thead", {
              style: {
                borderBottom: '1px solid #D5D5D5',
                fontWeight: 'bold',
                fontWeight: '500',
                backgroundColor: '#f3f3f3'
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                  style: {
                    padding: '10px 0',
                    width: 'auto'
                  },
                  children: "\uC774\uB984"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                  style: {
                    padding: '10px 0',
                    width: 'auto'
                  },
                  children: "\uD559\uBC88"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 328,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                  style: {
                    padding: '10px 0',
                    width: 'auto'
                  },
                  children: "\uCD9C\uACB0"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 329,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tbody", {
              children: studentInfo.map((studentList, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(TabletrColor, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                  style: {
                    padding: '10px 0',
                    borderBottom: '1px solid #D5D5D5'
                  },
                  children: studentList.studentName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 335,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                  style: {
                    padding: '10px 0',
                    borderBottom: '1px solid #D5D5D5'
                  },
                  children: studentList.studentNumber
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 338,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                  style: {
                    padding: '10px 0',
                    borderBottom: '1px solid #D5D5D5'
                  },
                  children: studentList.attendanceList[0].status === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    style: {
                      color: 'green',
                      fontWeight: 'bold'
                    },
                    children: "\uCD9C\uC11D"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 343,
                    columnNumber: 27
                  }, undefined) : studentList.attendanceList[0].status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    style: {
                      color: 'yellowgreen',
                      fontWeight: 'bold'
                    },
                    children: "\uC9C0\uAC01"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 345,
                    columnNumber: 27
                  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    style: {
                      color: 'red',
                      fontWeight: 'bold'
                    },
                    children: "\uACB0\uC11D"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 347,
                    columnNumber: 27
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 341,
                  columnNumber: 23
                }, undefined)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("hr", {
        style: {
          width: '100%',
          margin: '10px 0px',
          display: 'block',
          borderColor: '#ffffff'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        height: '5rem'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledButton, {
        cyan: true,
        onClick: onCancel,
        children: "\uB4A4\uB85C\uAC00\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 5
  }, undefined);
};

_s(LessonDetail, "9oERlukKLkLFQuO479xSi32Fgrs=");

_c4 = LessonDetail;
/* harmony default export */ __webpack_exports__["default"] = (LessonDetail);

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "TTitle");
__webpack_require__.$Refresh$.register(_c2, "StyledButton");
__webpack_require__.$Refresh$.register(_c3, "TabletrColor");
__webpack_require__.$Refresh$.register(_c4, "LessonDetail");

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
  height:500px;
  text-align: center;
`;
_c3 = ModalInner;
const CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  height: 3rem;
  width:100px;
  color: red;
  margin-left: auto;
  margin-right: 2rem;
  margin-top: 150px;
`;
_c4 = CloseBtn;
const OkBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  height: 3rem;
  width:100px;
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
      "question": "김동현",
      "answer1": "test1",
      "answer2": "test1",
      "answer3": "test1",
      "answer4": "test1",
      "answer5": "test1",
      "answer": 1
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
      lineNumber: 113,
      columnNumber: 13
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
            lineNumber: 122,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              marginTop: "1rem"
            },
            children: "1."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              marginTop: "1rem"
            },
            children: "2."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              marginTop: "1rem"
            },
            children: "3."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              marginTop: "1rem"
            },
            children: "4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              marginTop: "1rem"
            },
            children: "5."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              marginTop: "1rem"
            },
            children: "\uC815\uB2F5 \uBC88\uD638 \uCCB4\uD06C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              display: "flex"
            },
            children: [closable && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(OkBtn, {
              className: "modal-ok",
              onClick: onSubmit,
              children: "\uD655\uC778"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 30
            }, this), closable && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(CloseBtn, {
              className: "modal-close",
              onClick: close,
              children: "\uCDE8\uC18C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
          return window.location.href = `/Main/Lecture/${lectureId}/Lesson`;
        }
      });
    } else {
      zmClient.leave();
      alert("수업을 나갑니다");
      return window.location.href = `/Main/Lecture/${lectureId}/Lesson`;
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
      lineNumber: 195,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_camera__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isStartedVideo: isStartedVideo,
      onCameraClick: onCameraClick,
      onSwitchCamera: onSwitchCamera,
      cameraList: cameraList,
      activeCamera: activeCamera
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, undefined), sharing && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_screen_share__WEBPACK_IMPORTED_MODULE_6__["ScreenShareButton"], {
      isStartedScreenShare: isStartedScreenShare,
      onScreenShareClick: onScreenShareClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }, undefined), (zmClient.isManager() || zmClient.isHost()) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_screen_share__WEBPACK_IMPORTED_MODULE_6__["ScreenShareLockButton"], {
      isLockedScreenShare: isLockedScreenShare,
      onScreenShareLockClick: () => {
        mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.lockShare(!isLockedScreenShare);
        setIsLockedScreenShare(!isLockedScreenShare);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(LeaveBtn, {
      onClick: OutSession,
      children: "\uB098\uAC00\uAE30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 193,
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/ZoomSample/feature/video/video.tsx",
    _s = __webpack_require__.$Refresh$.signature();





















const AttendanceBtn = styled_components__WEBPACK_IMPORTED_MODULE_16__["default"].button`
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
  const [understandId, setUnderstandId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
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
    });
  }, []);
  socket.on("understanding request", data => {
    //모달 
    //axios post
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(`/lecture/${lectureId}/lesson/${lessonId}/live/understanding/${understandId}/student`);
  });

  const checkAttendance = e => {
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

  const checkUnderstand = () => {
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.get(`/lecture/${lectureId}/lesson/${lessonId}/live/understanding/professor`, {
      params: {
        session: `${sessionId}`
      }
    }).then(res => {
      alert("학생들에게 이해도 평가요청을 보냈습니다.");
      console.log(res);
      const result = res.data.data;
      setUnderstandId(result);
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
    className: "viewport",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-container', {
        'in-sharing': isSharing
      }),
      ref: shareContainerRef,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
        className: "share-container-viewport",
        style: {
          width: `${contentDimension.width}px`,
          height: `${contentDimension.height}px`
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("canvas", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-canvas', {
            hidden: isStartedShare
          }),
          ref: shareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, undefined), Object(_utils_platform__WEBPACK_IMPORTED_MODULE_13__["isSupportWebCodecs"])() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("video", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-canvas', {
            hidden: isRecieveSharing
          }),
          ref: selfShareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 33
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("canvas", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-canvas', {
            hidden: isRecieveSharing
          }),
          ref: selfShareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 14
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('video-container', {
        'in-sharing': isSharing
      }),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("canvas", {
        className: "video-canvas",
        id: "video-canvas",
        width: "800",
        height: "600",
        ref: videoRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("ul", {
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
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(_components_avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
            lineNumber: 211,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(_components_video_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "video-operations",
      sharing: true,
      shareRef: selfShareRef,
      lectureId: props.lectureId,
      lessonId: props.lessonId,
      sessionId: props.sessionId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }, undefined), totalPage > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(_components_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
      page: page,
      totalPage: totalPage,
      setPage: setPage,
      inSharing: isSharing
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }, undefined), userType === "T" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(AttendanceBtn, {
        onClick: checkUnderstand,
        children: "\uC774\uD574\uB3C4 \uD655\uC778 \uC694\uCCAD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(AttendanceBtn, {
        onClick: checkAttendance,
        children: "\uCD9C\uC11D\uC694\uCCAD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(AttendanceBtn, {
        onClick: openModal,
        children: "\uD034\uC988\uCD9C\uC81C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 9
      }, undefined), modalVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(_QuizModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
        lineNumber: 240,
        columnNumber: 27
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 28
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 18
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__["jsxDEV"])(_chat_chat__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 163,
    columnNumber: 5
  }, undefined);
};

_s(VideoContainer, "OdhxSBFaQYbhDAJXaZH6/mwQXok=", false, function () {
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

/***/ }),

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
/* harmony import */ var _ZoomSample_feature_video_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ZoomSample/feature/video/video */ "./src/ZoomSample/feature/video/video.tsx");
/* harmony import */ var _ZoomSample_feature_video_video_single__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ZoomSample/feature/video/video-single */ "./src/ZoomSample/feature/video/video-single.tsx");
/* harmony import */ var _ZoomSample_context_zoom_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ZoomSample/context/zoom-context */ "./src/ZoomSample/context/zoom-context.ts");
/* harmony import */ var _ZoomSample_context_media_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ZoomSample/context/media-context */ "./src/ZoomSample/context/media-context.ts");
/* harmony import */ var _ZoomSample_context_chat_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ZoomSample/context/chat-context */ "./src/ZoomSample/context/chat-context.ts");
/* harmony import */ var _ZoomSample_component_loading_layer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ZoomSample/component/loading-layer */ "./src/ZoomSample/component/loading-layer.tsx");
/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./test.css */ "./src/zoomtest/test.css");
/* harmony import */ var _test_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_test_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ZoomSample_utils_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ZoomSample/utils/util */ "./src/ZoomSample/utils/util.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/zoomtest/TestZoom.tsx",
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

function TestZoom(props) {
  _s();

  const [loading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [loadingText, setLoadingText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [isFailover, setIsFailover] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("closed");
  const [mediaState, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(mediaReducer, mediaShape);
  const [mediaStream, setMediaStream] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [chatClient, setChatClient] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [isSupportGalleryView, setIsSupportGalleryView] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const init = "init";
  const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_14___default.a.connect("https://oneboard.connect.o-r.kr:8070");
  const zmClient = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ZoomSample_context_zoom_context__WEBPACK_IMPORTED_MODULE_8__["default"]);
  const user = JSON.parse(localStorage.userInfo);
  const userType = user.userType;
  const userName = user.name;
  const sessionId = props.match.params.sessionId;
  const lectureId = props.match.params.lectureId;
  const lessonId = props.match.params.lessonId;
  const token = Object(_ZoomSample_utils_util__WEBPACK_IMPORTED_MODULE_13__["generateVideoToken"])("MoRylmD2jBq9NfbZXbSVmvZcGYOFkDCeJc3e", "NewabYwGXIFrOlPRf4dZBKeqFECESIkdlLrq", sessionId, "", "", "");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const init = async () => {
      await zmClient.init("en-US", `${window.location.origin}/lib`, 'zoom.us');

      try {
        setLoadingText("Joining the session...");
        await zmClient.join(sessionId, token, userName, "");
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
      await zmClient.join(sessionId, token, userName, "");
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])("div", {
    className: "App",
    children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_ZoomSample_component_loading_layer__WEBPACK_IMPORTED_MODULE_11__["default"], {
      content: loadingText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 19
    }, this), !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_ZoomSample_context_media_context__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
      value: { ...mediaState,
        mediaStream
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_ZoomSample_context_chat_context__WEBPACK_IMPORTED_MODULE_10__["default"].Provider, {
        value: chatClient,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: `/class/${lectureId}/${lessonId}/${sessionId}/${userType}`,
          render: props => isSupportGalleryView ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_ZoomSample_feature_video_video__WEBPACK_IMPORTED_MODULE_6__["default"], { ...props,
            lectureId: lectureId,
            lessonId: lessonId,
            sessionId: sessionId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 39
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxDEV"])(_ZoomSample_feature_video_video_single__WEBPACK_IMPORTED_MODULE_7__["default"], { ...props,
            lectureId: lectureId,
            lessonId: lessonId,
            sessionId: sessionId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 128
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 188,
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
//# sourceMappingURL=main.6667c92da38e50c71b94.hot-update.js.map