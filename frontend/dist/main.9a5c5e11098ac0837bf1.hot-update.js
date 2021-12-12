webpackHotUpdate("main",{

/***/ "./src/Component/Login/LoginCheck.js":
/*!*******************************************!*\
  !*** ./src/Component/Login/LoginCheck.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.module.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _img_OneBoardLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/OneBoardLogo.png */ "./src/img/OneBoardLogo.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/mnt/e/sw_capstone/frontend/src/Component/Login/LoginCheck.js",
    _s = __webpack_require__.$Refresh$.signature();








const LoginCheck = () => {
  _s();

  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [isLogined, setIsLogined] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [getAlert, setGetAlert] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    flag: false,
    message: ''
  });

  const enterEvent = e => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (localStorage.getItem('email')) {
      setIsLogined(true);
    } else {
      setIsLogined(false);
    }

    setGetAlert({
      flag: false,
      message: ''
    });
  }, []);

  const onChangehandler = e => {
    let {
      name,
      value
    } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (value === '') {
      setEmail('');
      setPassword('');
    }
  };

  const onSubmit = async e => {
    let data = {
      email: email,
      password: password
    };
    await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/auth/login', data).then(res => {
      if (res.data.result === 'FAIL') {
        setIsLogined(false);
        setGetAlert({
          flag: true,
          message: '아이디 혹은 비밀번호가 틀렸거나 없는 사용자 입니다.'
        });
        setTimeout(() => {
          setGetAlert({
            flag: false,
            message: ''
          });
        }, 1500);
      }

      try {
        setIsLogined(true);
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('email', res.data.data.email);
        const token = localStorage.getItem('token');
        console.log(token);
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user', {
          headers: {
            'X-AUTH-TOKEN': `${token}`
          }
        }).then(res => {
          const info = res.data.data;
          console.log('userinfo : ' + info);
          localStorage.setItem('userInfo', JSON.stringify(info));
        }).catch(e => {
          console.log(e);
        });
        setGetAlert({
          flag: true,
          message: '로그인 되었습니다! OneBoard에 오신것을 환영합니다'
        });
        setTimeout(() => {
          history.push('/Main/Home');
        }, 1500);
      } catch (error) {
        setError(error.message);
      }
    }).catch(error => {
      setGetAlert({
        flag: true,
        message: '아이디 혹은 비밀번호가 틀렸거나 없는 사용자 입니다.'
      });
      console.log(error);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    style: {
      marginTop: '1.2rem'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("center", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          src: _img_OneBoardLogo_png__WEBPACK_IMPORTED_MODULE_4__["default"],
          style: {
            width: '40%',
            height: '200px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("center", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          className: "InputContainer",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
            style: {
              borderRadius: '7px',
              width: '40%',
              height: '80px',
              fontSize: '2rem',
              marginTop: '5rem',
              paddingLeft: '10px'
            },
            className: "signInInput",
            name: "email",
            type: "email",
            placeholder: "ID",
            required: true,
            value: localStorage.getItem('email'),
            onChange: e => onChangehandler(e),
            onKeyPress: e => enterEvent(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          className: "InputContainer",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
            style: {
              marginTop: '15px',
              borderRadius: '7px',
              width: '40%',
              height: '80px',
              fontSize: '2rem',
              paddingLeft: '10px'
            },
            className: "signInInput",
            name: "password",
            type: "password",
            placeholder: "Password",
            required: true,
            value: password,
            onKeyPress: e => enterEvent(e),
            onChange: e => onChangehandler(e)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          className: "SignInBtnContainer",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
            style: {
              marginTop: '3rem',
              borderRadius: '7px',
              width: '40%',
              height: '80px',
              fontSize: '1.5rem',
              backgroundColor: '#E6F4F1',
              color: 'black',
              fontWeight: 'bold',
              cursor: 'pointer'
            },
            className: "DoSignIn",
            onClick: e => onSubmit(e),
            children: "\uB85C\uADF8\uC778"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
      style: {
        height: '90px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          textAlign: 'center',
          marginTop: '4%',
          marginBottom: '8%',
          fontFamily: 'NanumSquare_acR',
          fontWeight: 'bold',
          fontSize: '18px',
          height: '50px'
        },
        children: getAlert.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, undefined);
};

_s(LoginCheck, "1yGSQix2RQBnhFMBMmIhMiC5FF0=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_3__["useHistory"]];
});

_c = LoginCheck;
/* harmony default export */ __webpack_exports__["default"] = (LoginCheck);

var _c;

__webpack_require__.$Refresh$.register(_c, "LoginCheck");

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
//# sourceMappingURL=main.9a5c5e11098ac0837bf1.hot-update.js.map