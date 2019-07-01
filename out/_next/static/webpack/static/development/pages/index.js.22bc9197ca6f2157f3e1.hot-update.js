webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/SuscribeForm.js":
/*!************************************!*\
  !*** ./components/SuscribeForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SuscribeForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Buttons */ "./components/Buttons.js");
/* harmony import */ var _DrgInputs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DrgInputs */ "./components/DrgInputs.js");
/* harmony import */ var _DrgDropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DrgDropdown */ "./components/DrgDropdown.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Typography */ "./components/Typography.js");
/* harmony import */ var _networking_endpoints__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../networking/endpoints */ "./networking/endpoints.js");
/* harmony import */ var _SocialLoginHelper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SocialLoginHelper */ "./components/SocialLoginHelper.js");








var _jsxFileName = "C:\\Users\\pablo\\OneDrive\\Documentos\\GitHub\\drg-landing-ui\\components\\SuscribeForm.js";










var SuscribeFormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "SuscribeForm__SuscribeFormWrapper",
  componentId: "sc-1x97y5r-0"
})(["&&&&&&{display:flex;align-items:center;flex-direction:column;padding:0 20px;font-family:Montserrat,Raleway;width:300px;}&&&&&& input,&&&&&& h3,&&&&&& h4{font-family:Montserrat,Raleway;}"]);
var XForm = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"]).withConfig({
  displayName: "SuscribeForm__XForm",
  componentId: "sc-1x97y5r-1"
})(["&&&&&& > div{display:flex;}"]);
var XCheckbox = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Checkbox"]).withConfig({
  displayName: "SuscribeForm__XCheckbox",
  componentId: "sc-1x97y5r-2"
})(["&&&&&&{margin:30px 0;}"]);
var ZForm = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].form.withConfig({
  displayName: "SuscribeForm__ZForm",
  componentId: "sc-1x97y5r-3"
})(["&&&&&&{height:55px;}"]);
var SocialButtons = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "SuscribeForm__SocialButtons",
  componentId: "sc-1x97y5r-4"
})(["&&&&&&{display:flex;justify-content:center;flex-wrap:wrap;text-align:center;border-bottom:1px solid #333333;}&&&&&& > form{margin:0 5px;}"]);

var SuscribeForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SuscribeForm, _React$Component);

  function SuscribeForm() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SuscribeForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SuscribeForm).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmit", function (event) {
      event.preventDefault();
      var form = event.target;
      _this.state.loading = true;

      if (!form.checkValidity()) {
        _this.state.error = true;
        _this.state.message = 'Ocurrió un error enviando el formulario';
        _this.state.loading = false;
        return;
      }

      if (!_this.state.termsAccepted) {
        _this.state.error = true;
        _this.state.message = 'Debes aceptar los términos y condiciones';
        _this.state.loading = false;
        return;
      }

      console.log('user: ', _this.state['birthday']);
      var user = {
        first_name: _this.state['firstName'],
        last_name: _this.state['lastName'],
        email: _this.state['email'],
        birthday: new Date(_this.state['birthday']['year'], _this.state['birthday']['month'] - 1, _this.state['birthday']['day']),
        subscribed_to_news: _this.state['suscribeAccepted']
      };
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(_networking_endpoints__WEBPACK_IMPORTED_MODULE_16__["CREATE_USERS"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        _this.state.success = true;
        _this.state.message = 'Gracias por registrarte';
        _this.state.loading = false;
      }).catch(function (error) {
        _this.state.error = true;
        _this.state.message = 'Ocurrió un error registrandote';
        _this.state.loading = false;
      });
    });

    _this.state = {
      firstName: '',
      lastName: '',
      email: '',
      termsAccepted: false,
      suscribeAccepted: false,
      birthday: {
        day: 1,
        month: 1,
        year: 1970
      },
      error: false,
      message: '',
      success: false,
      loading: true
    };
    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleDropdownChange = _this.handleDropdownChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleMonthChange = _this.handleMonthChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SuscribeForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event, data) {
      var target = event.target;
      var value = data && data.type === 'checkbox' ? data.checked : target.value;
      var name = data && data.type === 'checkbox' ? data.name : target.name;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, name, value));
    }
  }, {
    key: "handleDropdownChange",
    value: function handleDropdownChange(event, data) {
      var value = data.value;
      var name = data.name;

      var birthday = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.birthday);

      birthday[name] = value;
      this.setState({
        birthday: birthday
      });
    }
  }, {
    key: "handleMonthChange",
    value: function handleMonthChange(event, data) {
      console.log('Month change: ', data);
      var name = data.name;

      var birthday = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.birthday);

      data.options.find(function (option) {
        if (data.value == option.value) {
          console.log('Value option match: ', option);
          console.log('birthday: ', birthday);
          birthday[name] = option.key;
          console.log('birthday after update: ', birthday);
          return;
        }
      });
      this.setState({
        birthday: birthday
      });
    }
  }, {
    key: "render",
    value: function render() {
      var days = [];
      var months = [{
        key: 1,
        value: 'Enero',
        text: 'Enero'
      }, {
        key: 2,
        value: 'Febrero',
        text: 'Febrero'
      }, {
        key: 3,
        value: 'Marzo',
        text: 'Marzo'
      }, {
        key: 4,
        value: 'Abril',
        text: 'Abril'
      }, {
        key: 5,
        value: 'Mayo',
        text: 'Mayo'
      }, {
        key: 6,
        value: 'Junio',
        text: 'Junio'
      }, {
        key: 7,
        value: 'Julio',
        text: 'Julio'
      }, {
        key: 8,
        value: 'Agosto',
        text: 'Agosto'
      }, {
        key: 9,
        value: 'Setiembre',
        text: 'Setiembre'
      }, {
        key: 10,
        value: 'Octubre',
        text: 'Octubre'
      }, {
        key: 11,
        value: 'Noviembre',
        text: 'Noviembre'
      }, {
        key: 12,
        value: 'Diciembre',
        text: 'Diciembre'
      }];
      var years = [];
      var d = new Date();
      var currentYear = d.getFullYear();
      var oldest = d.getFullYear() - 81;

      for (var i = 1; i < 32; i++) {
        var day = {
          key: i,
          value: i,
          text: i
        };
        days.push(day);
      }

      for (var _i = currentYear; _i > oldest; _i--) {
        var year = {
          key: _i,
          value: _i,
          text: _i
        };
        years.push(year);
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SuscribeFormWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
        h: 3,
        weight: "bold",
        size: "jumbo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "\xDAnete al grupo"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
        h: 4,
        weight: "thin",
        size: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "Ingresa con tus redes sociales"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SocialButtons, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ZForm, {
        action: "https://drg-bets.jx-staging.viserion.dragoons.gg/accounts/steam/login/?process=login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_12__["default"], {
        small: "true",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Steam")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ZForm, {
        action: "https://drg-bets.jx-staging.viserion.dragoons.gg/accounts/google/login/?process=login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_12__["default"], {
        small: "true",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Google")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ZForm, {
        action: "https://drg-bets.jx-staging.viserion.dragoons.gg/accounts/facebook/login/?process=login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_12__["default"], {
        small: "true",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "Facebook"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
        h: 4,
        weight: "thin",
        size: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "\xF3 crea una cuenta"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(XForm, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DrgInputs__WEBPACK_IMPORTED_MODULE_13__["default"], {
        name: "firstName",
        label: "Nombre",
        placeholder: "tu nombre",
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DrgInputs__WEBPACK_IMPORTED_MODULE_13__["default"], {
        name: "lastName",
        label: "Apellido",
        placeholder: "tu apellido",
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DrgInputs__WEBPACK_IMPORTED_MODULE_13__["default"], {
        name: "email",
        label: "Email",
        placeholder: "tu email",
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          flexDirection: 'column',
          alignItems: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
        h: 4,
        weight: "thin",
        size: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Fecha de nacimiento"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DrgDropdown__WEBPACK_IMPORTED_MODULE_14__["default"], {
        tag: 'Día',
        name: "day",
        options: days,
        onChange: this.handleDropdownChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DrgDropdown__WEBPACK_IMPORTED_MODULE_14__["default"], {
        tag: 'Mes',
        name: "month",
        options: months,
        onChange: this.handleMonthChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_DrgDropdown__WEBPACK_IMPORTED_MODULE_14__["default"], {
        tag: 'Año',
        name: "year",
        options: years,
        onChange: this.handleDropdownChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Divider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(XCheckbox, {
        name: "termsAccepted",
        onChange: this.handleInputChange,
        label: "Acepto los t\xE9rminos y condiciones.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(XCheckbox, {
        name: "suscribeAccepted",
        onChange: this.handleInputChange,
        label: "Deseo recibir noticias y novedades.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Message"], {
        hidden: !this.state.success,
        visible: this.state.success,
        header: "Registro exitoso",
        success: this.state.success,
        content: this.state.message,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Message"], {
        visible: this.state.error,
        hidden: !this.state.error,
        header: "Ocurri\xF3 un error",
        error: this.state.error,
        content: this.state.message,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_12__["default"], {
        type: "submit",
        large: "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, "Crear")));
    }
  }]);

  return SuscribeForm;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.22bc9197ca6f2157f3e1.hot-update.js.map