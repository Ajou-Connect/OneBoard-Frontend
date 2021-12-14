webpackHotUpdate("main",{

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
/* harmony import */ var _Component_common_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Component/common/Button */ "./src/Component/common/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
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
const WriteAcitonButtonBlock = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  button + button {
    margin-left: 0.5rem;
  }
`;
_c2 = WriteAcitonButtonBlock;
const StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Component_common_Button__WEBPACK_IMPORTED_MODULE_6__["default"])`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
_c3 = StyledButton;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 30px;
  border-bottom: 1px solid #f7f9fc;
  height: 40px;
  line-height: 40px;
  font-style: italic;
`;
_c4 = Title;
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
_c5 = ProblemContainer;
const ProblemTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  font-size: 20px;
  font-weight: 600;
`;
_c6 = ProblemTitle;
const ProblemContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  width: 100%;
  margin: 10px auto;
  padding: 0 5px;
`;
_c7 = ProblemContent;
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
_c8 = FeedbackInput;
const ScoreInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input`
  width: 50px;
  border: 1px solid #d9d9d9;
  padding: 10px;
  display: inline-block;
`;
_c9 = ScoreInput;

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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          color: '#BFBFBF',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_5___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_5___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uC608\uC815)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, undefined);
    } else if (today.isBefore(endDate)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          color: '#61C679',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_5___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_5___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uC9C4\uD589\uC911)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, undefined);
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          color: '#E24C4B',
          fontWeight: '700'
        },
        children: [moment__WEBPACK_IMPORTED_MODULE_5___default()(startDate).format('M월 D일 HH:mm'), " - ", moment__WEBPACK_IMPORTED_MODULE_5___default()(endDate).format('M월 D일 HH:mm'), ' ', "(\uB9C8\uAC10)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Title, {
      children: "Assignment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
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
      lineNumber: 208,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemTitle, {
        children: assignments.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
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
        lineNumber: 219,
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
          children: stateDisplay(moment__WEBPACK_IMPORTED_MODULE_5___default()(assignments.startDt), moment__WEBPACK_IMPORTED_MODULE_5___default()(assignments.endDt))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: ["\uBC30\uC810 ", assignments.score]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemContent, {
        children: react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(assignments.content)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
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
        lineNumber: 235,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 217,
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
      lineNumber: 239,
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
      lineNumber: 241,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ScoreInput, {
        onChange: getScore
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }, undefined), " / ", assignments.score]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 242,
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
      lineNumber: 245,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FeedbackInput, {
      onChange: getFeedback,
      placeholder: "\uC810\uC218\uC5D0 \uB300\uD55C \uD53C\uB4DC\uBC31\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(WriteAcitonButtonBlock, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledButton, {
        onClick: onSubmit
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledButton, {
        onClick: onCancel
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 206,
    columnNumber: 5
  }, undefined);
};

_s(StudentSubmitDetail, "WgLQ6/FmFYTATAMjTgUu7dywhMk=");

_c10 = StudentSubmitDetail;
/* harmony default export */ __webpack_exports__["default"] = (StudentSubmitDetail);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

__webpack_require__.$Refresh$.register(_c, "Container");
__webpack_require__.$Refresh$.register(_c2, "WriteAcitonButtonBlock");
__webpack_require__.$Refresh$.register(_c3, "StyledButton");
__webpack_require__.$Refresh$.register(_c4, "Title");
__webpack_require__.$Refresh$.register(_c5, "ProblemContainer");
__webpack_require__.$Refresh$.register(_c6, "ProblemTitle");
__webpack_require__.$Refresh$.register(_c7, "ProblemContent");
__webpack_require__.$Refresh$.register(_c8, "FeedbackInput");
__webpack_require__.$Refresh$.register(_c9, "ScoreInput");
__webpack_require__.$Refresh$.register(_c10, "StudentSubmitDetail");

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
//# sourceMappingURL=main.cecb6c010ab302eefc11.hot-update.js.map