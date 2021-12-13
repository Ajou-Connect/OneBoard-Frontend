webpackHotUpdate("main",{

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
  display: flex;
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
      lineNumber: 197,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(ListContainer, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(TitleInput, {
        onChange: getTitle,
        value: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
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
          lineNumber: 209,
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
            lineNumber: 211,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
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
          lineNumber: 222,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(ScoreInput, {
          type: "number",
          onChange: e => setScore(e.target.value),
          value: assignmentScore
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 221,
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
        lineNumber: 229,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: "\uACFC\uC81C \uD30C\uC77C \uC120\uD0DD "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
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
          lineNumber: 240,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
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
        lineNumber: 242,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(WriteAcitonButtonBlock, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(StyledButton, {
          cyan: true,
          onClick: onSubmit,
          children: "\uACFC\uC81C \uBC0F \uC2DC\uD5D8 \uC218\uC815"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(StyledButton, {
          onClick: onCancel,
          children: "\uCDE8\uC18C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 196,
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

/***/ })

})
//# sourceMappingURL=main.0255ef28bcc4ead088ea.hot-update.js.map