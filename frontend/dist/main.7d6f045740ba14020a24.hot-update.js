webpackHotUpdate("main",{

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
    return new Promise((resolve, reject) => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/lecture/${lectureId}/lesson/${lessonId}/live/entrance`, {
        headers: {
          'X-AUTH-TOKEN': `${token}`
        },
        params: {
          session: `${sessionId}`
        }
      }).then(res => {
        const result = res;
        console.log(result);

        if (result.data.result === 'SUCCESS') {
          return window.location.href = `/class/${lectureId}/${lessonId}/${sessionId}/${userType}`;
        } else {
          alert('수업에 입장할 수 없습니다.');
        }
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
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
        lineNumber: 163,
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
        lineNumber: 164,
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
          lineNumber: 185,
          columnNumber: 13
        }, undefined) : lessonDetails.type === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            marginLeft: '15px'
          },
          children: "\uBE44\uB300\uBA74 \uC2E4\uC2DC\uAC04 \uC218\uC5C5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            marginLeft: '15px'
          },
          children: "\uB179\uD654 \uAC15\uC758"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
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
        lineNumber: 193,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 162,
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
      lineNumber: 207,
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
          lineNumber: 223,
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
            lineNumber: 232,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_iframe__WEBPACK_IMPORTED_MODULE_3__["default"], {
              url: Url,
              width: "700px",
              height: "400px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
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
          lineNumber: 253,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            cursor: 'pointer'
          },
          onClick: LessonCheck,
          children: "\uC2E4\uC2DC\uAC04 \uC218\uC5C5\uC785\uC7A5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
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
        lineNumber: 263,
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
        lineNumber: 278,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 209,
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
      lineNumber: 295,
      columnNumber: 7
    }, undefined), userType === 'S' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
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
            lineNumber: 302,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
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
                  lineNumber: 326,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                  style: {
                    padding: '10px 0',
                    width: 'auto'
                  },
                  children: "\uD559\uBC88"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                  style: {
                    padding: '10px 0',
                    width: 'auto'
                  },
                  children: "\uCD9C\uACB0"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 328,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 325,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
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
                  lineNumber: 334,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                  style: {
                    padding: '10px 0',
                    borderBottom: '1px solid #D5D5D5'
                  },
                  children: studentList.studentNumber
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 337,
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
                    lineNumber: 342,
                    columnNumber: 27
                  }, undefined) : studentList.attendanceList[0].status === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    style: {
                      color: 'yellowgreen',
                      fontWeight: 'bold'
                    },
                    children: "\uC9C0\uAC01"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 344,
                    columnNumber: 27
                  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    style: {
                      color: 'red',
                      fontWeight: 'bold'
                    },
                    children: "\uACB0\uC11D"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 346,
                    columnNumber: 27
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 340,
                  columnNumber: 23
                }, undefined)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 300,
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
        lineNumber: 355,
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
        lineNumber: 361,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 161,
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
false,

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
      lineNumber: 191,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_camera__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isStartedVideo: isStartedVideo,
      onCameraClick: onCameraClick,
      onSwitchCamera: onSwitchCamera,
      cameraList: cameraList,
      activeCamera: activeCamera
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }, undefined), sharing && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_screen_share__WEBPACK_IMPORTED_MODULE_6__["ScreenShareButton"], {
      isStartedScreenShare: isStartedScreenShare,
      onScreenShareClick: onScreenShareClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }, undefined), (zmClient.isManager() || zmClient.isHost()) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_screen_share__WEBPACK_IMPORTED_MODULE_6__["ScreenShareLockButton"], {
      isLockedScreenShare: isLockedScreenShare,
      onScreenShareLockClick: () => {
        mediaStream === null || mediaStream === void 0 ? void 0 : mediaStream.lockShare(!isLockedScreenShare);
        setIsLockedScreenShare(!isLockedScreenShare);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(LeaveBtn, {
      onClick: OutSession,
      children: "\uB098\uAC00\uAE30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 189,
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/f/SW_Capstone/frontend/src/ZoomSample/feature/video/video.tsx",
    _s = __webpack_require__.$Refresh$.signature();


















const LeaveBtn = styled_components__WEBPACK_IMPORTED_MODULE_15__["default"].button`
  position: absolute;
  right: 0;
  margin-right: 30px;
  color: red;
`;

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
          lineNumber: 99,
          columnNumber: 11
        }, undefined), Object(_utils_platform__WEBPACK_IMPORTED_MODULE_13__["isSupportWebCodecs"])() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("video", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-canvas', {
            hidden: isRecieveSharing
          }),
          ref: selfShareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 33
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("canvas", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('share-canvas', {
            hidden: isRecieveSharing
          }),
          ref: selfShareRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 14
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
        lineNumber: 117,
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
            lineNumber: 133,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_video_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "video-operations",
      sharing: true,
      shareRef: selfShareRef,
      lectureId: props.lectureId,
      lessonId: props.lessonId,
      sessionId: props.sessionId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }, undefined), totalPage > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_components_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
      page: page,
      totalPage: totalPage,
      setPage: setPage,
      inSharing: isSharing
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_chat_chat__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])("div", {
    className: "App",
    children: [loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_ZoomSample_component_loading_layer__WEBPACK_IMPORTED_MODULE_11__["default"], {
      content: loadingText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 19
    }, this), !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_ZoomSample_context_media_context__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
      value: { ...mediaState,
        mediaStream
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_ZoomSample_context_chat_context__WEBPACK_IMPORTED_MODULE_10__["default"].Provider, {
        value: chatClient,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          path: `/class/${lectureId}/${lessonId}/${sessionId}/${userType}`,
          render: props => isSupportGalleryView ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_ZoomSample_feature_video_video__WEBPACK_IMPORTED_MODULE_6__["default"], { ...props,
            lectureId: lectureId,
            lessonId: lessonId,
            sessionId: sessionId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 39
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_ZoomSample_feature_video_video_single__WEBPACK_IMPORTED_MODULE_7__["default"], { ...props,
            lectureId: lectureId,
            lessonId: lessonId,
            sessionId: sessionId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 128
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 178,
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
//# sourceMappingURL=main.7d6f045740ba14020a24.hot-update.js.map