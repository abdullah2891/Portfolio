(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Index2 = _interopRequireDefault(require("./lib/Index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Contact =
/*#__PURE__*/
function (_Index) {
  _inherits(Contact, _Index);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return "\n\t\t\t<div class=\"contact\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Name<label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-lg custom-input\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>watever<label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-lg custom-input\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>watever<label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-lg custom-input\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t";
    }
  }]);

  return Contact;
}(_Index2.default);

exports.default = Contact;

},{"./lib/Index":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./lib/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MainPage =
/*#__PURE__*/
function (_Index) {
  _inherits(MainPage, _Index);

  function MainPage() {
    _classCallCheck(this, MainPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainPage).apply(this, arguments));
  }

  _createClass(MainPage, [{
    key: "render",
    value: function render() {
      return "\n\t\t\t<div class=\"introduction\">\n\t\t\t\t<p class=\"title\">Hi</p>\n\t\t\t\t<p>Welcome to this corner of the internet</p>\n\n\t\t\t\t<p> How can I help you today</p>\n\t\t\t\t<p> How can I help you today</p>\n\t\t\t\t<p> How can I help you today</p>\n\t\t\t</div>\n\n\t\t";
    }
  }]);

  return MainPage;
}(_index.default);

exports.default = MainPage;

},{"./lib/index":10}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./lib/index"));

var _util = require("./util");

var _state = require("./state");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Navigation =
/*#__PURE__*/
function (_Index) {
  _inherits(Navigation, _Index);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navigation).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.secondPageElementId = document.getElementById('secondPage');
      this.thirdPageElementId = document.getElementById('thirdPage');

      this._addEventListener();
    }
  }, {
    key: "_addEventListener",
    value: function _addEventListener() {
      var _this = this;

      _toConsumableArray(document.getElementsByClassName('navigation-button')).forEach(function (button) {
        button.addEventListener('click', function (event) {
          var pageName = event.srcElement.getAttribute('data-navigation');
          var position = event.srcElement.offsetTop; //section position

          var second_page_position = 3 / 10 * (0, _util.scrollHeight)();
          var third_page_position = 8 / 10 * (0, _util.scrollHeight)();
          _state.state.didScroll[pageName] = true;

          switch (pageName) {
            case 'secondPage':
              (0, _util.scroll)(second_page_position);
              (0, _util.fadeIn)(this.secondPageElementId);
              document.getElementById('projectText').className += ' vertical-line-project ';
              break;

            case 'thirdPage':
              (0, _util.fadeIn)(this.secondPageElementId);
              (0, _util.scroll)(third_page_position);
              (0, _util.fadeIn)(this.thirdPageElementId);
              document.getElementById('contactFooter').className += ' contact-footer ';
              break;
          }
        }.bind(_this));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return "\n\t\t\t<ul class=\"navigation\">\n\t\t\t\t<li data-navigation=\"about\"  class=\"navigation-button\" >About Me</li>\n\t\t\t\t<li data-navigation=\"secondPage\" class=\"navigation-button\">Project</li>\n\t\t\t\t<li data-navigation=\"thirdPage\" class=\"navigation-button\">Contact me</li>\n\n\t\t\t</ul>\n\t\t";
    }
  }]);

  return Navigation;
}(_index.default);

exports.default = Navigation;

},{"./lib/index":10,"./state":11,"./util":12}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./lib/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProjectDescription =
/*#__PURE__*/
function (_Index) {
  _inherits(ProjectDescription, _Index);

  function ProjectDescription() {
    _classCallCheck(this, ProjectDescription);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectDescription).apply(this, arguments));
  }

  _createClass(ProjectDescription, [{
    key: "render",
    value: function render() {
      return "\n\t\t\t<div class=\"project-description\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<h3>Project 1</h3>\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<h3>Project 2</h3>\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<h3>Project 3</h3>\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<h3>Project 4</h3>\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\t\t<p>description</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
    }
  }]);

  return ProjectDescription;
}(_index.default);

exports.default = ProjectDescription;

},{"./lib/index":10}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./lib/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SideFooter =
/*#__PURE__*/
function (_Index) {
  _inherits(SideFooter, _Index);

  function SideFooter() {
    _classCallCheck(this, SideFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideFooter).apply(this, arguments));
  }

  _createClass(SideFooter, [{
    key: "render",
    value: function render() {
      return "\n\t\t\t<div id=\"projectText\" class=\"project-text  side-footer\">Project</div>\n\t\t";
    }
  }]);

  return SideFooter;
}(_index.default);

exports.default = SideFooter;

},{"./lib/index":10}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./lib/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SideFooter2 =
/*#__PURE__*/
function (_Index) {
  _inherits(SideFooter2, _Index);

  function SideFooter2() {
    _classCallCheck(this, SideFooter2);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideFooter2).apply(this, arguments));
  }

  _createClass(SideFooter2, [{
    key: "render",
    value: function render() {
      return "<div id=\"contactFooter\"  class=\"side-footer\">Contact</div>";
    }
  }]);

  return SideFooter2;
}(_index.default);

exports.default = SideFooter2;

},{"./lib/index":10}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./lib/index"));

var _util = require("./util");

var _state = require("./state");

var _MainPage = _interopRequireDefault(require("./MainPage"));

var _Navigation = _interopRequireDefault(require("./Navigation"));

var _SideFooter = _interopRequireDefault(require("./SideFooter"));

var _SideFooter2 = _interopRequireDefault(require("./SideFooter2"));

var _ProjectDescription = _interopRequireDefault(require("./ProjectDescription"));

var _Contact = _interopRequireDefault(require("./Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_Index) {
  _inherits(App, _Index);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.secondPageElementId = document.getElementById('secondPage');
      this.thirdPageElementId = document.getElementById('thirdPage');

      this._handleScrolling();
    }
  }, {
    key: "childViews",
    value: function childViews() {
      return [_MainPage.default, _Navigation.default, _Contact.default, _ProjectDescription.default, _SideFooter2.default, _SideFooter.default];
    }
  }, {
    key: "_handleScrolling",
    value: function _handleScrolling() {
      //section position
      var second_page_position = 7 / 10 * (0, _util.scrollHeight)() + 50;
      var third_page_position = 9 / 10 * (0, _util.scrollHeight)(); //saving this positionn for change

      var previous_position = 0;
      window.addEventListener('scroll', function () {
        //get the scrolling position 
        var scroll_position = window.scrollY;
        var change = scroll_position - previous_position;
        previous_position = scroll_position;

        if (!_state.state.didScroll.secondPage && change > 0) {
          _state.state.didScroll.secondPage = true;
          document.getElementById('projectText').className += ' vertical-line-project ';
          (0, _util.scroll)(second_page_position);
          (0, _util.fadeIn)(this.secondPageElementId);
        }

        if (!_state.state.didScroll.thirdPage && scroll_position >= third_page_position) {
          _state.state.didScroll.thirdPage = true;
          document.getElementById('contactFooter').className += ' contact-footer ';
          (0, _util.scroll)((0, _util.scrollHeight)(), third_page_position);
          (0, _util.fadeIn)(this.thirdPageElementId);
        }
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      return "\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div id=\"firstPage\"  class=\"row first-page\">\n\t\t\t\t\t<div class=\"col-md-8 main-page\">\n\t\t\t\t\t\t<div data-component=\"MainPage\"></div>\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 navigation\">\n\t\t\t\t\t\t<div data-component=\"Navigation\"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div id=\"secondPage\" class=\"row second-page\">\n\t\t\t\t\t<div class=\"col-md-3\" data-component=\"SideFooter\" data-parameter-title=\"Project\">\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class='col-md-9' data-component=\"ProjectDescription\">\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div id=\"thirdPage\"  class=\"row third-page\">\n\t\t\t\t\t<div class='col-md-9' data-component=\"Contact\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-3\" data-component=\"SideFooter2\" data-parameter-title=\"Project\">\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t";
    }
  }]);

  return App;
}(_index.default);

exports.default = App;

},{"./Contact":1,"./MainPage":2,"./Navigation":3,"./ProjectDescription":4,"./SideFooter":5,"./SideFooter2":6,"./lib/index":10,"./state":11,"./util":12}],8:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function (event) {
  new _app.default('app');
});

},{"./app":7}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Index =
/*#__PURE__*/
function () {
  /**
   * constructor
   *
   * @param component component name
   */
  function Index(component) {
    var _this = this;

    _classCallCheck(this, Index);

    this.component = component;
    var promises = this.componentSelector().map(function (querySelector) {
      return new Promise(function (resolve, reject) {
        resolve();
      });
    });
    Promise.all(promises).then(function () {
      var template = _this.render();

      _this.loadChildViews();

      _this.insertElement(template);

      _this.componentDidMount();
    });
  }
  /**
   * hook for things are loaded
   *
   * @returns {Promise}
   */


  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
    /**
     * populating the innerhtml
     *
     * @param template
     */

  }, {
    key: "insertElement",
    value: function insertElement(template) {
      this.componentSelector().forEach(function (componentInstance) {
        componentInstance.innerHTML = template;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return '';
    }
  }, {
    key: "childViews",
    value: function childViews() {
      return [];
    }
  }, {
    key: "componentSelector",
    value: function componentSelector() {
      return _toConsumableArray(document.querySelectorAll("[data-component=\"".concat(this.component, "\"]")));
    }
    /**
     * loading listed child views
     */

  }, {
    key: "loadChildViews",
    value: function loadChildViews() {
      if (!Array.isArray(this.childViews())) {
        return false;
      }

      this.childViews().forEach(function (view) {
        var className = view.prototype.constructor.name;
        new view("".concat(className));
      });
    }
  }]);

  return Index;
}();

exports.default = Index;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Index =
/*#__PURE__*/
function () {
  /**
   * constructor
   *
   * @param component component name
   */
  function Index(component) {
    var _this = this;

    _classCallCheck(this, Index);

    this.component = component;
    var promises = this.componentSelector().map(function (querySelector) {
      return new Promise(function (resolve, reject) {
        resolve();
      });
    });
    Promise.all(promises).then(function () {
      var template = _this.render();

      _this.loadChildViews();

      _this.insertElement(template);

      _this.componentDidMount();
    });
  }
  /**
   * hook for things are loaded
   *
   * @returns {Promise}
   */


  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
    /**
     * populating the innerhtml
     *
     * @param template
     */

  }, {
    key: "insertElement",
    value: function insertElement(template) {
      this.componentSelector().forEach(function (componentInstance) {
        componentInstance.innerHTML = template;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return '';
    }
  }, {
    key: "childViews",
    value: function childViews() {
      return [];
    }
  }, {
    key: "componentSelector",
    value: function componentSelector() {
      return _toConsumableArray(document.querySelectorAll("[data-component=\"".concat(this.component, "\"]")));
    }
    /**
     * loading listed child views
     */

  }, {
    key: "loadChildViews",
    value: function loadChildViews() {
      if (!Array.isArray(this.childViews())) {
        return false;
      }

      this.childViews().forEach(function (view) {
        var className = view.prototype.constructor.name;
        new view("".concat(className));
      });
    }
  }]);

  return Index;
}();

exports.default = Index;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = void 0;
var state = {
  didScroll: {
    about: false,
    secondPage: false,
    thirdPage: false
  }
};
exports.state = state;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeIn = exports.scroll = exports.scrollHeight = void 0;

var scrollHeight = function scrollHeight() {
  return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
};

exports.scrollHeight = scrollHeight;

var scroll = function scroll(last_postion) {
  var initial_position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var rate = 15;
  var position = initial_position;

  var repeatOften = function repeatOften() {
    position = position + rate;
    window.scroll(0, position);
    var globalID = requestAnimationFrame(repeatOften);

    if (position >= last_postion) {
      cancelAnimationFrame(globalID);
    }
  };

  repeatOften();
};

exports.scroll = scroll;

var fadeIn = function fadeIn(element) {
  var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var rate = 0.05; //final opacity can't be bigger than 1

  var finalOpacity = 1;
  var opacity = initial;

  var _task = function _task() {
    element.style.opacity = opacity;
    opacity = opacity + rate;
    var globalID = requestAnimationFrame(_task);

    if (opacity >= finalOpacity) {
      cancelAnimationFrame(globalID);
    }
  };

  _task();
};

exports.fadeIn = fadeIn;

},{}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29udGFjdC5qcyIsInNyYy9NYWluUGFnZS5qcyIsInNyYy9OYXZpZ2F0aW9uLmpzIiwic3JjL1Byb2plY3REZXNjcmlwdGlvbi5qcyIsInNyYy9TaWRlRm9vdGVyLmpzIiwic3JjL1NpZGVGb290ZXIyLmpzIiwic3JjL2FwcC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9saWIvSW5kZXguanMiLCJzcmMvbGliL2luZGV4LmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFWjtBQUNQO0FBeUJBOzs7O0VBNUJtQyxlOzs7Ozs7Ozs7Ozs7QUNGckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUIsUTs7Ozs7Ozs7Ozs7Ozs2QkFDWjtBQUNQO0FBV0E7Ozs7RUFib0MsYzs7Ozs7Ozs7Ozs7O0FDSHRDOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsVTs7Ozs7Ozs7Ozs7Ozt3Q0FDRDtBQUNsQixXQUFLLG1CQUFMLEdBQTJCLFFBQVEsQ0FBQyxjQUFULENBQXdCLFlBQXhCLENBQTNCO0FBQ0EsV0FBSyxrQkFBTCxHQUEwQixRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUExQjs7QUFDQSxXQUFLLGlCQUFMO0FBQ0E7Ozt3Q0FHa0I7QUFBQTs7QUFDbEIseUJBQUksUUFBUSxDQUFDLHNCQUFULENBQWdDLG1CQUFoQyxDQUFKLEVBQTBELE9BQTFELENBQWtFLFVBQUEsTUFBTSxFQUFFO0FBRXRFLFFBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWdDLFVBQVMsS0FBVCxFQUFlO0FBQ2pELGNBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFOLENBQWlCLFlBQWpCLENB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IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvSW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgSW5kZXh7XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWN0XCI+XG5cdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTxsYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LWxnIGN1c3RvbS1pbnB1dFwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsPndhdGV2ZXI8bGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1sZyBjdXN0b20taW5wdXRcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdDxsYWJlbD53YXRldmVyPGxhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgY3VzdG9tLWlucHV0XCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIEluZGV4e1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImludHJvZHVjdGlvblwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInRpdGxlXCI+SGk8L3A+XG5cdFx0XHRcdDxwPldlbGNvbWUgdG8gdGhpcyBjb3JuZXIgb2YgdGhlIGludGVybmV0PC9wPlxuXG5cdFx0XHRcdDxwPiBIb3cgY2FuIEkgaGVscCB5b3UgdG9kYXk8L3A+XG5cdFx0XHRcdDxwPiBIb3cgY2FuIEkgaGVscCB5b3UgdG9kYXk8L3A+XG5cdFx0XHRcdDxwPiBIb3cgY2FuIEkgaGVscCB5b3UgdG9kYXk8L3A+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdGA7XG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7ZmFkZUluLHNjcm9sbCxzY3JvbGxIZWlnaHR9IGZyb20gICcuL3V0aWwnO1xuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kUGFnZScpO1xuXHRcdHRoaXMudGhpcmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXJkUGFnZScpO1xuXHRcdHRoaXMuX2FkZEV2ZW50TGlzdGVuZXIoKTtcblx0fVxuXG5cblx0X2FkZEV2ZW50TGlzdGVuZXIoKXtcblx0XHRbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2aWdhdGlvbi1idXR0b24nKV0uZm9yRWFjaChidXR0b249PntcblxuXHRcdCAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdFx0Y29uc3QgcGFnZU5hbWUgPSBldmVudC5zcmNFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uYXZpZ2F0aW9uJyk7XG5cdFx0XHQgICAgXHRjb25zdCBwb3NpdGlvbiA9IGV2ZW50LnNyY0VsZW1lbnQub2Zmc2V0VG9wO1xuXG5cdFx0XHRcdC8vc2VjdGlvbiBwb3NpdGlvblxuXHRcdFx0XHRjb25zdCBzZWNvbmRfcGFnZV9wb3NpdGlvbiAgPSggKDMvMTApICogc2Nyb2xsSGVpZ2h0KCkpIDtcblx0XHRcdFx0Y29uc3QgdGhpcmRfcGFnZV9wb3NpdGlvbiA9ICg4LzEwKSAqIHNjcm9sbEhlaWdodCgpO1xuXHRcdFx0XHRcblx0XHRcdFx0c3RhdGUuZGlkU2Nyb2xsW3BhZ2VOYW1lXSA9IHRydWU7XG5cblx0XHRcdCAgICBcdHN3aXRjaChwYWdlTmFtZSl7XG5cdFx0XHRcdFx0Y2FzZSAnc2Vjb25kUGFnZSc6XG5cdFx0XHRcdFx0XHRzY3JvbGwoc2Vjb25kX3BhZ2VfcG9zaXRpb24pO1xuXHRcdFx0XHRcdFx0ZmFkZUluKHRoaXMuc2Vjb25kUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRleHQnKS5jbGFzc05hbWUrPScgdmVydGljYWwtbGluZS1wcm9qZWN0ICc7XG5cdFx0XHRcdFx0XHQgYnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAndGhpcmRQYWdlJzpcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0c2Nyb2xsKHRoaXJkX3BhZ2VfcG9zaXRpb24pO1xuXHRcdFx0XHRcdFx0ZmFkZUluKHRoaXMudGhpcmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Rm9vdGVyJykuY2xhc3NOYW1lICs9JyBjb250YWN0LWZvb3RlciAnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdCAgICB9LmJpbmQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuIGBcblx0XHRcdDx1bCBjbGFzcz1cIm5hdmlnYXRpb25cIj5cblx0XHRcdFx0PGxpIGRhdGEtbmF2aWdhdGlvbj1cImFib3V0XCIgIGNsYXNzPVwibmF2aWdhdGlvbi1idXR0b25cIiA+QWJvdXQgTWU8L2xpPlxuXHRcdFx0XHQ8bGkgZGF0YS1uYXZpZ2F0aW9uPVwic2Vjb25kUGFnZVwiIGNsYXNzPVwibmF2aWdhdGlvbi1idXR0b25cIj5Qcm9qZWN0PC9saT5cblx0XHRcdFx0PGxpIGRhdGEtbmF2aWdhdGlvbj1cInRoaXJkUGFnZVwiIGNsYXNzPVwibmF2aWdhdGlvbi1idXR0b25cIj5Db250YWN0IG1lPC9saT5cblxuXHRcdFx0PC91bD5cblx0XHRgO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0RGVzY3JpcHRpb24gZXh0ZW5kcyBJbmRleHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0PGgzPlByb2plY3QgMTwvaDM+XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdDxoMz5Qcm9qZWN0IDI8L2gzPlxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0PGgzPlByb2plY3QgMzwvaDM+XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0PGgzPlByb2plY3QgNDwvaDM+XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblxuXHR9XG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVGb290ZXIgZXh0ZW5kcyBJbmRleHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBpZD1cInByb2plY3RUZXh0XCIgY2xhc3M9XCJwcm9qZWN0LXRleHQgIHNpZGUtZm9vdGVyXCI+UHJvamVjdDwvZGl2PlxuXHRcdGA7XG5cblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggIGZyb20gJy4vbGliL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRm9vdGVyMiBleHRlbmRzIEluZGV4e1xuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgPGRpdiBpZD1cImNvbnRhY3RGb290ZXJcIiAgY2xhc3M9XCJzaWRlLWZvb3RlclwiPkNvbnRhY3Q8L2Rpdj5gO1xuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtzY3JvbGwsZmFkZUluLHNjcm9sbEhlaWdodH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9NYWluUGFnZSc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nO1xuaW1wb3J0IFNpZGVGb290ZXIgZnJvbSAnLi9TaWRlRm9vdGVyJztcbmltcG9ydCBTaWRlRm9vdGVyMiBmcm9tICcuL1NpZGVGb290ZXIyJztcbmltcG9ydCBQcm9qZWN0RGVzY3JpcHRpb24gZnJvbSAnLi9Qcm9qZWN0RGVzY3JpcHRpb24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JzsgXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kUGFnZScpO1xuXHRcdHRoaXMudGhpcmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXJkUGFnZScpO1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXHR9XG5cblxuXG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW01haW5QYWdlLE5hdmlnYXRpb24sQ29udGFjdCwgUHJvamVjdERlc2NyaXB0aW9uLFNpZGVGb290ZXIyLFNpZGVGb290ZXJdO1xuXHR9XG5cblx0XG5cblx0XG5cblx0X2hhbmRsZVNjcm9sbGluZygpe1xuXHRcdC8vc2VjdGlvbiBwb3NpdGlvblxuXHRcdGNvbnN0IHNlY29uZF9wYWdlX3Bvc2l0aW9uICA9KCAoNy8xMCkgKiBzY3JvbGxIZWlnaHQoKSkgKyA1MDtcblx0XHRjb25zdCB0aGlyZF9wYWdlX3Bvc2l0aW9uID0gKDkvMTApICogc2Nyb2xsSGVpZ2h0KCk7XG5cdFx0XG5cblx0XHQvL3NhdmluZyB0aGlzIHBvc2l0aW9ubiBmb3IgY2hhbmdlXG5cdFx0bGV0IHByZXZpb3VzX3Bvc2l0aW9uID0gMDtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XG5cdFx0XHRcdC8vZ2V0IHRoZSBzY3JvbGxpbmcgcG9zaXRpb24gXG5cdFx0XHRcdGxldCBzY3JvbGxfcG9zaXRpb24gPSAgd2luZG93LnNjcm9sbFk7XG5cdFx0XHRcblx0XHRcdFx0bGV0IGNoYW5nZSA9IHNjcm9sbF9wb3NpdGlvbiAtIHByZXZpb3VzX3Bvc2l0aW9uO1x0XG4gXHRcdFx0XHRcblx0XHRcdFx0cHJldmlvdXNfcG9zaXRpb24gPSBzY3JvbGxfcG9zaXRpb247XG5cblx0XHRcdFx0XG5cdFx0XHRcdGlmKCFzdGF0ZS5kaWRTY3JvbGwuc2Vjb25kUGFnZSAgJiYgY2hhbmdlID4gMCl7XG5cdFx0XHRcdFx0c3RhdGUuZGlkU2Nyb2xsLnNlY29uZFBhZ2UgID0gdHJ1ZTtcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRleHQnKS5jbGFzc05hbWUrPScgdmVydGljYWwtbGluZS1wcm9qZWN0ICc7XG5cblx0XHRcdFx0XHRzY3JvbGwoc2Vjb25kX3BhZ2VfcG9zaXRpb24gKTtcblx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYoIXN0YXRlLmRpZFNjcm9sbC50aGlyZFBhZ2UgJiYgc2Nyb2xsX3Bvc2l0aW9uID49ICB0aGlyZF9wYWdlX3Bvc2l0aW9uICl7XG5cdFx0XHRcdFx0c3RhdGUuZGlkU2Nyb2xsLnRoaXJkUGFnZSA9IHRydWU7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RGb290ZXInKS5jbGFzc05hbWUgKz0nIGNvbnRhY3QtZm9vdGVyICc7XG5cdFx0XHRcdFx0c2Nyb2xsKHNjcm9sbEhlaWdodCgpLHRoaXJkX3BhZ2VfcG9zaXRpb24pO1xuXHRcdFx0XHRcdGZhZGVJbih0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdH1cblxuXHRcblx0XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdDxkaXYgaWQ9XCJmaXJzdFBhZ2VcIiAgY2xhc3M9XCJyb3cgZmlyc3QtcGFnZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBtYWluLXBhZ2VcIj5cblx0XHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJNYWluUGFnZVwiPjwvZGl2Plx0XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0zIG5hdmlnYXRpb25cIj5cblx0XHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJOYXZpZ2F0aW9uXCI+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBpZD1cInNlY29uZFBhZ2VcIiBjbGFzcz1cInJvdyBzZWNvbmQtcGFnZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiIGRhdGEtY29tcG9uZW50PVwiU2lkZUZvb3RlclwiIGRhdGEtcGFyYW1ldGVyLXRpdGxlPVwiUHJvamVjdFwiPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9J2NvbC1tZC05JyBkYXRhLWNvbXBvbmVudD1cIlByb2plY3REZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGlkPVwidGhpcmRQYWdlXCIgIGNsYXNzPVwicm93IHRoaXJkLXBhZ2VcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPSdjb2wtbWQtOScgZGF0YS1jb21wb25lbnQ9XCJDb250YWN0XCI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIiBkYXRhLWNvbXBvbmVudD1cIlNpZGVGb290ZXIyXCIgZGF0YS1wYXJhbWV0ZXItdGl0bGU9XCJQcm9qZWN0XCI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0YFxuXG5cdH1cblx0XG5cblxufVxuIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuXHRuZXcgQXBwKCdhcHAnKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXh7XG5cdC8qKlxuXHQgKiBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiBAcGFyYW0gY29tcG9uZW50IGNvbXBvbmVudCBuYW1lXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnQpe1xuXHRcdHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG5cdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkubWFwKHF1ZXJ5U2VsZWN0b3I9Pntcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXG5cdFx0fSlcblxuXHRcdFByb21pc2UuYWxsKHByb21pc2VzKVxuXHRcdFx0LnRoZW4oKCk9Pntcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgID0gdGhpcy5yZW5kZXIoKTtcblx0XHRcdFx0dGhpcy5sb2FkQ2hpbGRWaWV3cygpO1xuXHRcdFx0XHR0aGlzLmluc2VydEVsZW1lbnQodGVtcGxhdGUpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcblx0XHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogaG9vayBmb3IgdGhpbmdzIGFyZSBsb2FkZWRcblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0LyoqXG5cdCAqIHBvcHVsYXRpbmcgdGhlIGlubmVyaHRtbFxuXHQgKlxuXHQgKiBAcGFyYW0gdGVtcGxhdGVcblx0ICovXG5cdGluc2VydEVsZW1lbnQodGVtcGxhdGUpe1xuXHRcdHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5mb3JFYWNoKGNvbXBvbmVudEluc3RhbmNlPT57XG5cdFx0XHRjb21wb25lbnRJbnN0YW5jZS5pbm5lckhUTUwgPSAgdGVtcGxhdGU7XG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gJyc7XG5cblx0fVxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtdO1xuXHRcdFxuXHR9XG5cdGNvbXBvbmVudFNlbGVjdG9yKCl7XG5cdFx0cmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jb21wb25lbnQ9XCIke3RoaXMuY29tcG9uZW50fVwiXWApXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBsb2FkaW5nIGxpc3RlZCBjaGlsZCB2aWV3c1xuXHQgKi9cblx0bG9hZENoaWxkVmlld3MoKXtcblx0XHRpZighQXJyYXkuaXNBcnJheSh0aGlzLmNoaWxkVmlld3MoKSApKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmNoaWxkVmlld3MoKS5mb3JFYWNoKHZpZXc9Pntcblx0XHRcdGxldCBjbGFzc05hbWUgPSB2aWV3LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0bmV3IHZpZXcoYCR7Y2xhc3NOYW1lfWApO1xuXHRcdH0pXG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4e1xuXHQvKipcblx0ICogY29uc3RydWN0b3Jcblx0ICpcblx0ICogQHBhcmFtIGNvbXBvbmVudCBjb21wb25lbnQgbmFtZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29tcG9uZW50KXtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5jb21wb25lbnRTZWxlY3RvcigpLm1hcChxdWVyeVNlbGVjdG9yPT57XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblxuXHRcdH0pXG5cblx0XHRQcm9taXNlLmFsbChwcm9taXNlcylcblx0XHRcdC50aGVuKCgpPT57XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlICA9IHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdHRoaXMubG9hZENoaWxkVmlld3MoKTtcblx0XHRcdFx0dGhpcy5pbnNlcnRFbGVtZW50KHRlbXBsYXRlKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIGhvb2sgZm9yIHRoaW5ncyBhcmUgbG9hZGVkXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdC8qKlxuXHQgKiBwb3B1bGF0aW5nIHRoZSBpbm5lcmh0bWxcblx0ICpcblx0ICogQHBhcmFtIHRlbXBsYXRlXG5cdCAqL1xuXHRpbnNlcnRFbGVtZW50KHRlbXBsYXRlKXtcblx0XHR0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkuZm9yRWFjaChjb21wb25lbnRJbnN0YW5jZT0+e1xuXHRcdFx0Y29tcG9uZW50SW5zdGFuY2UuaW5uZXJIVE1MID0gIHRlbXBsYXRlO1xuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuICcnO1xuXG5cdH1cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbXTtcblx0XHRcblx0fVxuXHRjb21wb25lbnRTZWxlY3Rvcigpe1xuXHRcdHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY29tcG9uZW50PVwiJHt0aGlzLmNvbXBvbmVudH1cIl1gKV07XG5cdH1cblxuXHQvKipcblx0ICogbG9hZGluZyBsaXN0ZWQgY2hpbGQgdmlld3Ncblx0ICovXG5cdGxvYWRDaGlsZFZpZXdzKCl7XG5cdFx0aWYoIUFycmF5LmlzQXJyYXkodGhpcy5jaGlsZFZpZXdzKCkgKSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGlsZFZpZXdzKCkuZm9yRWFjaCh2aWV3PT57XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gdmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTtcblx0XHRcdG5ldyB2aWV3KGAke2NsYXNzTmFtZX1gKTtcblx0XHR9KVxuXHR9XG59XG4iLCJleHBvcnQgIGNvbnN0IHN0YXRlICA9ICB7XG5cdGRpZFNjcm9sbCA6IHthYm91dCA6IGZhbHNlLCBzZWNvbmRQYWdlIDogZmFsc2UgLCB0aGlyZFBhZ2UgOiBmYWxzZX1cblxufVxuIiwiZXhwb3J0IGNvbnN0IHNjcm9sbEhlaWdodCA9ICgpPT57XG5cdHJldHVybiBNYXRoLm1heCggZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG59XG5cbmV4cG9ydCBjb25zdCBzY3JvbGwgPSAobGFzdF9wb3N0aW9uLGluaXRpYWxfcG9zaXRpb249MCk9Pntcblx0Y29uc3QgcmF0ZSA9IDE1O1xuXHRsZXQgcG9zaXRpb24gPSBpbml0aWFsX3Bvc2l0aW9uIDtcblx0Y29uc3QgcmVwZWF0T2Z0ZW4gPSAoKT0+e1xuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24rcmF0ZTtcblx0XHR3aW5kb3cuc2Nyb2xsKDAscG9zaXRpb24pO1xuXHRcdGNvbnN0IGdsb2JhbElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcGVhdE9mdGVuKTtcblx0XHRpZihwb3NpdGlvbiA+PSBsYXN0X3Bvc3Rpb24pe1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2xvYmFsSUQpO1xuXHRcdH1cblx0fVxuXG5cdHJlcGVhdE9mdGVuKCk7XG59XG5cbmV4cG9ydCBjb25zdCBmYWRlSW4gPSAoZWxlbWVudCxpbml0aWFsPTApPT57XG5cdGNvbnN0IHJhdGUgPSAwLjA1O1xuXHQvL2ZpbmFsIG9wYWNpdHkgY2FuJ3QgYmUgYmlnZ2VyIHRoYW4gMVxuXHRjb25zdCBmaW5hbE9wYWNpdHkgPSAxO1xuXG5cdGxldCBvcGFjaXR5ID0gaW5pdGlhbDtcblxuXHRjb25zdCBfdGFzayA9ICgpPT57XG5cdFx0ZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcblx0XHRvcGFjaXR5ID0gb3BhY2l0eSArIHJhdGU7IFxuXHRcdGNvbnN0IGdsb2JhbElEID0gIHJlcXVlc3RBbmltYXRpb25GcmFtZShfdGFzayk7XG5cdFx0aWYob3BhY2l0eSA+PSBmaW5hbE9wYWNpdHkpe1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2xvYmFsSUQpXG5cdFx0fVxuXHR9XG5cblx0X3Rhc2soKTtcblxufVxuXG5cbiJdfQ==
