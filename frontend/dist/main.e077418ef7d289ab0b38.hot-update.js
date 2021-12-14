webpackHotUpdate("main",{

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
        lineNumber: 89,
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
          lineNumber: 97,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
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
          lineNumber: 103,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
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
    lineNumber: 111,
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
    lineNumber: 125,
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
      lineNumber: 166,
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
          lineNumber: 169,
          columnNumber: 11
        }, undefined), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StateColorCircle, {
          style: {
            backgroundColor: '#E24C4B'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StateDescript, {
          children: "\uC9C4\uD589 \uC911"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, undefined), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StateColorCircle, {
          style: {
            backgroundColor: '#66FF33'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
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
              lineNumber: 196,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
              style: {
                padding: '10px 0',
                width: '20% '
              },
              children: "\uACFC\uC81C \uBA85"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
              style: {
                padding: '10px 0',
                width: '40% '
              },
              children: "\uACFC\uC81C \uAE30\uAC04"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
              style: {
                padding: '10px 0',
                width: '10% '
              },
              children: "\uBC30\uC810"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
              style: {
                padding: '10px 0',
                width: '5% '
              },
              children: "\uC9C4\uD589 \uC0C1\uD0DC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
              style: {
                padding: '10px 0',
                width: '20% '
              },
              children: "\uC218\uC815/\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
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
            lineNumber: 206,
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
                lineNumber: 228,
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
                  lineNumber: 242,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                style: {
                  padding: '15px 0',
                  borderBottom: '1px solid #D5D5D5'
                },
                children: [assignmentList.startDt, " ~ ", assignmentList.endDt]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                style: {
                  padding: '15px 0',
                  borderBottom: '1px solid #D5D5D5'
                },
                children: assignmentList.score
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
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
                lineNumber: 274,
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
                    lineNumber: 292,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledButton, {
                    cyan: true,
                    onClick: e => {
                      onDelete(e, assignmentList.assignmentId);
                    },
                    children: "\uC0AD\uC81C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 300,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 21
              }, undefined)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 19
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
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
      style: {
        marginLeft: '1rem'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledButton, {
        cyan: true,
        onClick: e => goWrite(e),
        children: "\uC791\uC131\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 165,
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

/***/ })

})
//# sourceMappingURL=main.e077418ef7d289ab0b38.hot-update.js.map