webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Typography */ "./components/Typography.js");
/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Buttons */ "./components/Buttons.js");
/* harmony import */ var _components_MailForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MailForm */ "./components/MailForm.js");
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Player */ "./components/Player.js");
/* harmony import */ var _components_AccordionFAQ__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/AccordionFAQ */ "./components/AccordionFAQ.js");
/* harmony import */ var _components_RoadLine__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/RoadLine */ "./components/RoadLine.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_UpArrowNavigation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/UpArrowNavigation */ "./components/UpArrowNavigation.js");







var _jsxFileName = "C:\\Users\\pablo\\OneDrive\\Documentos\\GitHub\\drg-landing-ui\\pages\\index.js";













var LandingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__LandingWrapper",
  componentId: "sc-1wbo52z-0"
})(["&&{display:flex;flex-direction:column;align-items:center;scroll-behavior:smooth;height:auto;min-height:100%;position:relative;overflow-y:scroll;overflow-x:hidden;}&&::-webkit-scrollbar{width:0;}@media (min-width:1050px){&&{height:100vh;scroll-snap-type:y mandatory;scroll-snap-points-y:repeat(100vh)}}"]);
var Hero = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__Hero",
  componentId: "sc-1wbo52z-1"
})(["&&{display:flex;flex-direction:column;justify-content:center;padding:0 5vw;min-height:100vh !important;position:static;background-image:url('../static/hero.jpg');scroll-snap-align:start;}@media (min-width:900px){&&{width:100%;background-size:cover}}@media (min-width:1025px){&&{align-items:center;flex-direction:row;color:#171b27}}@media (min-width:1050px){&&{height:100vh;min-height:789px}}&& > div{text-align:center;}@media (min-width:1025px){&& > div{flex:0 0 40%}}"]);
var HeroLogo = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__HeroLogo",
  componentId: "sc-1wbo52z-2"
})(["&&{text-align:center;}"]);
var HeroButton = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__HeroButton",
  componentId: "sc-1wbo52z-3"
})(["&&{display:flex;justify-content:center;margin:30px 0 0 0;}"]);
var Video = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__Video",
  componentId: "sc-1wbo52z-4"
})(["&&{display:flex;align-items:flex-end;width:100vw;min-height:100vh;background-color:black;scroll-snap-align:start;}@media (min-width:1050px){&&{height:100vh;min-height:100vh;justify-content:center}}"]);
var VideoLoading = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__VideoLoading",
  componentId: "sc-1wbo52z-5"
})(["&&{height:100vh;min-height:789px;}"]);
var Features = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__Features",
  componentId: "sc-1wbo52z-6"
})(["&&{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px 0;scroll-snap-align:start;width:100%;position:relative;background-image:url('../static/features-background.jpg');background-size:cover;min-height:100%;}&&:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom right,#000000,#000000);opacity:0.7;}@media (min-width:1050px){&&{min-height:100vh}}&& > div{z-index:999;}"]);
var FeaturesTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__FeaturesTitle",
  componentId: "sc-1wbo52z-7"
})(["&&{text-align:center;padding:0 10vw;}@media (min-width:1050px){&&{margin:50px 0 0 0}&& > div{padding:0 22vw;margin:15px 0 0 0;}}"]);
var FeaturesItems = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__FeaturesItems",
  componentId: "sc-1wbo52z-8"
})(["&&{text-align:center;width:300px;margin:30px 0 0 0;}@media (min-width:1050px){&&{display:flex;width:1000px}}&& > div{flex:1;margin:40px 0 50px 0;padding:40px 20px;background-color:white;border-radius:4px;color:#131929;}&& > div > h4{color:#0e3080;}@media (min-width:1050px){&& > div{margin:40px 20px 0 0;transform:", ";opacity:", ";transition:1s}}&& > div:last-child{margin:40px 0 0 0;}@media (min-width:1050px){&& > div:last-child{margin:40px 20px 0 0}}"], function (props) {
  return props.appear ? 'translateY(0px)' : 'translateY(150px)';
}, function (props) {
  return props.appear ? '1' : '0.2';
});
var FeaturesItemsImg = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__FeaturesItemsImg",
  componentId: "sc-1wbo52z-9"
})(["&&{display:flex;align-items:center;justify-content:center;height:100px;}"]);
var Timeline = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__Timeline",
  componentId: "sc-1wbo52z-10"
})(["&&{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;padding:64px 20px;scroll-snap-align:start;min-height:100vh !important;position:relative;background-image:url('../static/timeline-background-ow.jpg');background-size:cover;}@media (min-width:1050px){&&{height:100vh;min-height:789px}}&& > div:nth-child(1){text-align:center;z-index:999;}&&:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom right,#000000,#000000);opacity:0.75;}"]);
var FAQ = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__FAQ",
  componentId: "sc-1wbo52z-11"
})(["&&{display:flex;align-items:center;justify-content:flex-start;flex-direction:column;width:100%;padding:120px 0;scroll-snap-align:start;position:relative;background-image:url('../static/faq-background.jpg');background-size:cover;}&& > div:nth-child(1){text-align:center;z-index:999;}&&:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom right,#000000,#000000);opacity:0.6;}@media (min-width:770px){&&{justify-content:flex-start;min-height:789px}}@media (min-width:1050px){&&{height:100%}}@media (min-width:1600px){&&{min-height:100vh;padding:300px 500px 0 500px}}"]);
var Contact = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "pages__Contact",
  componentId: "sc-1wbo52z-12"
})(["&&{display:flex;align-items:center;flex-direction:column;justify-content:center;width:100%;padding:64px 20px 260px 20px;scroll-snap-align:start;position:relative;background-image:url('../static/contact-background.jpg');background-size:cover;min-height:100vh;}&& > div:nth-child(1){text-align:center;z-index:999;}&&:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom right,#000000,#000000);opacity:0.6;}@media (min-width:1050px){&&{padding:64px 10px 200px 10px;height:100vh;padding:64px 0}}"]);

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "autoplayToggle", function () {
      _this.child.current.playVideo();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "clickMethod", function () {
      document.getElementById('wrapper').addEventListener('scroll', function () {
        return _this.setState(function (prevState) {
          return {
            scroll: document.getElementById('wrapper').scrollTop,
            currentSection: _this.state.scroll < window.innerHeight - 300 ? 0 : window.innerHeight - 300 <= _this.state.scroll && _this.state.scroll < window.innerHeight * 2 - 300 ? 1 : window.innerHeight * 2 - 300 <= _this.state.scroll && _this.state.scroll < window.innerHeight * 3 - 300 ? 2 : window.innerHeight * 3 - 300 <= _this.state.scroll && _this.state.scroll < window.innerHeight * 4 - 300 ? 3 : window.innerHeight * 4 - 300 <= _this.state.scroll && _this.state.scroll < window.innerHeight * 5 - 300 ? 4 : window.innerHeight * 5 - 300 <= _this.state.scroll && _this.state.scroll < window.innerHeight * 6 - 300 ? 5 : null,
            featuresSeen: _this.state.scroll > 1200 ? true : prevState.featuresSeen ? true : false
          };
        });
      });
    });

    _this.child = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.state = {
      scroll: 0,
      featuresSeen: false,
      currentSection: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.getElementById('wrapper').addEventListener('scroll', function () {
        return _this2.setState(function (prevState) {
          return {
            scroll: document.getElementById('wrapper').scrollTop,
            currentSection: _this2.state.scroll < window.innerHeight - 300 ? 0 : window.innerHeight - 300 <= _this2.state.scroll && _this2.state.scroll < window.innerHeight * 2 - 300 ? 1 : window.innerHeight * 2 - 300 <= _this2.state.scroll && _this2.state.scroll < window.innerHeight * 3 - 300 ? 2 : window.innerHeight * 3 - 300 <= _this2.state.scroll && _this2.state.scroll < window.innerHeight * 4 - 300 ? 3 : window.innerHeight * 4 - 300 <= _this2.state.scroll && _this2.state.scroll < window.innerHeight * 5 - 300 ? 4 : window.innerHeight * 5 - 300 <= _this2.state.scroll && _this2.state.scroll < window.innerHeight * 6 - 300 ? 5 : null,
            featuresSeen: _this2.state.scroll > 1200 ? true : prevState.featuresSeen ? true : false
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var heroSection = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Hero, {
        id: "top",
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeroLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "../static/v02-color.svg",
        alt: "logo",
        width: 300,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        h: 3,
        weight: "thin",
        size: "headline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, "\xA1Apost\xE1, vot\xE1 resultados y gan\xE1! Somos un club de apuestas de eSports para LATAM que te permite ganar dinero mientras apoyas a tu comunidad."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(HeroButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#video",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_13__["default"], {
        large: "true",
        arrow: "true",
        onClick: this.autoplayToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "Ver m\xE1s")))));
      var videoSection = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Video, {
        id: "video",
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Player__WEBPACK_IMPORTED_MODULE_15__["default"], {
        sources: [{
          src: 'https://youtu.be/E3ttiFtSyko',
          type: 'video/youtube'
        }],
        techOrder: ['youtube'],
        controls: true //poster="../static/v01-color.svg"
        ,
        ref: this.child,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(VideoLoading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "../static/v01-white.svg",
        alt: "loading",
        width: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      })));
      var featuresSection = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Features, {
        id: "features",
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FeaturesTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        h: 2,
        weight: "bold",
        size: "jumbo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, "\xA1Gana dinero mirando eSports!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        h: 3,
        weight: "thin",
        size: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }, "Podr\xE1s ganar dinero haciendo lo que m\xE1s te gusta, mientras apoyas el desarrollo de la comunidad de eSports en LATAM.", ' ', this.state.scrollAcumulated))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FeaturesItems, {
        appear: this.state.featuresSeen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FeaturesItemsImg, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "../static/features-aposta.svg",
        alt: "desaf\xEDa a otros gamers",
        width: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        h: 4,
        weight: "bold",
        size: "headline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, "Desaf\xEDa a otros"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, "Apuesta contra otros y demustra cu\xE1nto sabes de eSports en el sistema de apuestas en bolsa m\xE1s transparente y confiable de la industria.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FeaturesItemsImg, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "../static/features-votar.svg",
        alt: "vota resultados",
        width: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        h: 4,
        weight: "bold",
        size: "headline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, "Vota resultados"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, "Te pagaremos por hacer lo que m\xE1s te gusta, \xA1mirar eSports!. Lo \xFAnico que debes hacer es enviar estad\xEDsticas. \xBFQui\xE9n gan\xF3 la partida?, \xBFen que minuto cay\xF3 la torre?, etc.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FeaturesItemsImg, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "../static/features-community.svg",
        alt: "apoya tu comunidad",
        width: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        h: 4,
        weight: "bold",
        size: "headline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, "Apoya a tu comunidad"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, "Parte del dinero recaudado en las apuestas ser\xE1 utilizado para apoyar econ\xF3micamente a equipos, jugadores, streamers, ligas u organizaciones de eSports elegidas por el voto de la comunidad. \xA1Tu decides!"))));
      var timelineSection = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Timeline, {
        id: "timeline",
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        h: 3,
        weight: "bold",
        size: "jumbo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, "Pr\xF3ximos pasos")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_RoadLine__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }));
      var faqSection = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FAQ, {
        id: "faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_AccordionFAQ__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }));
      var sendMailSection = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Contact, {
        id: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MailForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }));
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Landing title",
        description: "A description about the landing page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(LandingWrapper, {
        id: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        },
        __self: this
      }, heroSection, videoSection, featuresSection, timelineSection, faqSection, sendMailSection, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_18__["default"], {
        section: this.state.currentSection,
        parentMethod: this.clickMethod,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_UpArrowNavigation__WEBPACK_IMPORTED_MODULE_19__["default"], {
        scroll: this.state.scroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.c5c9b042e55aa3035ccf.hot-update.js.map