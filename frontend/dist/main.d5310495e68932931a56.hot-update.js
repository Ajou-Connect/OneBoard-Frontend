webpackHotUpdate("main",{

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
  margin-left: auto;
  & + & {
    margin-left: 0.5rem;
  }
`;
_c = StyledButton;
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
        lineNumber: 122,
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
        lineNumber: 129,
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
        lineNumber: 136,
        columnNumber: 9
      }, undefined);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getData();
    getSubmitData();
    console.log(submitData.fileUrl);
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
      lineNumber: 195,
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
      lineNumber: 196,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemTitle, {
        children: ["\uC81C\uBAA9 : ", assignments.title]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
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
        lineNumber: 207,
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
          lineNumber: 219,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: ["\uBC30\uC810 ", assignments.score]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemContent, {
        children: react_html_parser__WEBPACK_IMPORTED_MODULE_4___default()(assignments.content)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
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
        lineNumber: 223,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemContainer, {
      style: {
        margin: '10px auto'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          display: 'flex'
        },
        children: onGoing === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemTitle, {
          children: "\uC81C\uCD9C\uBB3C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 13
        }, undefined) : onSubmit ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemTitle, {
          children: "\uC81C\uCD9C\uBB3C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProblemTitle, {
              children: "\uACFC\uC81C \uC81C\uCD9C \uC791\uC131"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            style: {
              display: 'flex'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledButton, {
              cyan: true,
              onClick: submitAssignment,
              children: "\uC81C\uCD9C\uD558\uAE30"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
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
        lineNumber: 246,
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
            lineNumber: 252,
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
            lineNumber: 253,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 251,
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
          lineNumber: 257,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: submitData.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
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
              lineNumber: 269,
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
                  url: `https://docs.google.com/gview?embedded=true&url=https://oneboard.connect.o-r.kr:8080${submitData.fileUrl}`,
                  width: "500px",
                  height: "500px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
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
                lineNumber: 281,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
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
          lineNumber: 296,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            fontWeight: '600',
            fontSize: '20px',
            color: 'skyblue'
          },
          children: ["\uD53C\uB4DC\uBC31 :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            style: {
              color: 'black'
            },
            children: submitData.feedback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
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
            lineNumber: 314,
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
            lineNumber: 315,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 313,
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
          lineNumber: 319,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            style: {
              fontSize: '1.0rem'
            },
            children: submitData.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 328,
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
              lineNumber: 331,
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
                  url: `https://docs.google.com/gview?embedded=true&url=https://oneboard.connect.o-r.kr:8080${submitData.fileUrl}`,
                  width: "500px",
                  height: "500px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 337,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 336,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: `https://115.85.182.194:8080${submitData.fileUrl}`,
                style: {
                  marginTop: '10px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  textDecoration: 'underline'
                },
                children: "\uC81C\uCD9C\uB41C \uACFC\uC81C\uD30C\uC77C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 327,
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
          lineNumber: 358,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            fontWeight: '600',
            fontSize: '20px',
            color: 'skyblue'
          },
          children: ["\uD53C\uB4DC\uBC31 :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 369,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            style: {
              color: 'black'
            },
            children: submitData.feedback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(AnswerInput, {
          placeholder: "\uACFC\uC81C \uB2F5\uC548 \uC791\uC131",
          onChange: onChangeAnswer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 375,
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
            lineNumber: 377,
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
              lineNumber: 379,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
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
        lineNumber: 390,
        columnNumber: 9
      }, undefined), onSubmit === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 11
      }, undefined) : onGoing ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledButton, {
        onClick: onUpdate,
        children: "\uC218\uC815\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 194,
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

/***/ })

})
//# sourceMappingURL=main.d5310495e68932931a56.hot-update.js.map