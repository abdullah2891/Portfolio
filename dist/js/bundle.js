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
          _state.state.didScroll = {
            secondPage: true,
            thirdPage: true
          };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29udGFjdC5qcyIsInNyYy9NYWluUGFnZS5qcyIsInNyYy9OYXZpZ2F0aW9uLmpzIiwic3JjL1Byb2plY3REZXNjcmlwdGlvbi5qcyIsInNyYy9TaWRlRm9vdGVyLmpzIiwic3JjL1NpZGVGb290ZXIyLmpzIiwic3JjL2FwcC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9saWIvSW5kZXguanMiLCJzcmMvbGliL2luZGV4LmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFWjtBQUNQO0FBeUJBOzs7O0VBNUJtQyxlOzs7Ozs7Ozs7Ozs7QUNGckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUIsUTs7Ozs7Ozs7Ozs7Ozs2QkFDWjtBQUNQO0FBV0E7Ozs7RUFib0MsYzs7Ozs7Ozs7Ozs7O0FDSHRDOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsVTs7Ozs7Ozs7Ozs7Ozt3Q0FDRDtBQUNsQixXQUFLLG1CQUFMLEdBQTJCLFFBQVEsQ0FBQyxjQUFULENBQXdCLFlBQXhCLENBQTNCO0FBQ0EsV0FBSyxrQkFBTCxHQUEwQixRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUExQjs7QUFDQSxXQUFLLGlCQUFMO0FBQ0E7Ozt3Q0FHa0I7QUFBQTs7QUFDbEIseUJBQUksUUFBUSxDQUFDLHNCQUFULENBQWdDLG1CQUFoQyxDQUFKLEVBQTBELE9BQTFELENBQWtFLFVBQUEsTUFBTSxFQUFFO0FBRXRFLFFBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWdDLFVBQVMsS0FBVCxFQUFlO0FBQ2pELGNBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFOLENBQWlCLFlBQWpCLENB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bEJNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL0luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCBleHRlbmRzIEluZGV4e1xuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFjdFwiPlxuXHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsPk5hbWU8bGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1sZyBjdXN0b20taW5wdXRcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdDxsYWJlbD53YXRldmVyPGxhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgY3VzdG9tLWlucHV0XCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+d2F0ZXZlcjxsYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LWxnIGN1c3RvbS1pbnB1dFwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0YFxuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBJbmRleHtcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJpbnRyb2R1Y3Rpb25cIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ0aXRsZVwiPkhpPC9wPlxuXHRcdFx0XHQ8cD5XZWxjb21lIHRvIHRoaXMgY29ybmVyIG9mIHRoZSBpbnRlcm5ldDwvcD5cblxuXHRcdFx0XHQ8cD4gSG93IGNhbiBJIGhlbHAgeW91IHRvZGF5PC9wPlxuXHRcdFx0XHQ8cD4gSG93IGNhbiBJIGhlbHAgeW91IHRvZGF5PC9wPlxuXHRcdFx0XHQ8cD4gSG93IGNhbiBJIGhlbHAgeW91IHRvZGF5PC9wPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRgO1xuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge2ZhZGVJbixzY3JvbGwsc2Nyb2xsSGVpZ2h0fSBmcm9tICAnLi91dGlsJztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgSW5kZXh7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5zZWNvbmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZFBhZ2UnKTtcblx0XHR0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlyZFBhZ2UnKTtcblx0XHR0aGlzLl9hZGRFdmVudExpc3RlbmVyKCk7XG5cdH1cblxuXG5cdF9hZGRFdmVudExpc3RlbmVyKCl7XG5cdFx0Wy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb24tYnV0dG9uJyldLmZvckVhY2goYnV0dG9uPT57XG5cblx0XHQgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihldmVudCl7XG5cdFx0XHRcdGNvbnN0IHBhZ2VOYW1lID0gZXZlbnQuc3JjRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2aWdhdGlvbicpO1xuXHRcdFx0ICAgIFx0Y29uc3QgcG9zaXRpb24gPSBldmVudC5zcmNFbGVtZW50Lm9mZnNldFRvcDtcblxuXHRcdFx0XHQvL3NlY3Rpb24gcG9zaXRpb25cblx0XHRcdFx0Y29uc3Qgc2Vjb25kX3BhZ2VfcG9zaXRpb24gID0oICgzLzEwKSAqIHNjcm9sbEhlaWdodCgpKSA7XG5cdFx0XHRcdGNvbnN0IHRoaXJkX3BhZ2VfcG9zaXRpb24gPSAoOC8xMCkgKiBzY3JvbGxIZWlnaHQoKTtcblx0XHRcdFx0XG5cblx0XHRcdCAgICBcdHN0YXRlLmRpZFNjcm9sbCA9IHtcblx0XHRcdFx0XHRzZWNvbmRQYWdlIDogdHJ1ZSxcblx0XHRcdFx0XHR0aGlyZFBhZ2UgOiB0cnVlXG5cdFx0XHRcdH1cblxuXG5cdFx0XHQgICAgXHRzd2l0Y2gocGFnZU5hbWUpe1xuXHRcdFx0XHRcdGNhc2UgJ3NlY29uZFBhZ2UnOlxuXHRcdFx0XHRcdFx0c2Nyb2xsKHNlY29uZF9wYWdlX3Bvc2l0aW9uKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUZXh0JykuY2xhc3NOYW1lKz0nIHZlcnRpY2FsLWxpbmUtcHJvamVjdCAnO1xuXHRcdFx0XHRcdFx0IGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3RoaXJkUGFnZSc6XG5cdFx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0XHRcdHNjcm9sbCh0aGlyZF9wYWdlX3Bvc2l0aW9uKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvb3RlcicpLmNsYXNzTmFtZSArPScgY29udGFjdC1mb290ZXIgJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHQgICAgfS5iaW5kKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybiBgXG5cdFx0XHQ8dWwgY2xhc3M9XCJuYXZpZ2F0aW9uXCI+XG5cdFx0XHRcdDxsaSBkYXRhLW5hdmlnYXRpb249XCJhYm91dFwiICBjbGFzcz1cIm5hdmlnYXRpb24tYnV0dG9uXCIgPkFib3V0IE1lPC9saT5cblx0XHRcdFx0PGxpIGRhdGEtbmF2aWdhdGlvbj1cInNlY29uZFBhZ2VcIiBjbGFzcz1cIm5hdmlnYXRpb24tYnV0dG9uXCI+UHJvamVjdDwvbGk+XG5cdFx0XHRcdDxsaSBkYXRhLW5hdmlnYXRpb249XCJ0aGlyZFBhZ2VcIiBjbGFzcz1cIm5hdmlnYXRpb24tYnV0dG9uXCI+Q29udGFjdCBtZTwvbGk+XG5cblx0XHRcdDwvdWw+XG5cdFx0YDtcblxuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdERlc2NyaXB0aW9uIGV4dGVuZHMgSW5kZXh7XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdDxoMz5Qcm9qZWN0IDE8L2gzPlxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHQ8aDM+UHJvamVjdCAyPC9oMz5cblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdDxoMz5Qcm9qZWN0IDM8L2gzPlxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdDxoMz5Qcm9qZWN0IDQ8L2gzPlxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGA7XG5cblx0fVxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRm9vdGVyIGV4dGVuZHMgSW5kZXh7XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgaWQ9XCJwcm9qZWN0VGV4dFwiIGNsYXNzPVwicHJvamVjdC10ZXh0ICBzaWRlLWZvb3RlclwiPlByb2plY3Q8L2Rpdj5cblx0XHRgO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4ICBmcm9tICcuL2xpYi9pbmRleCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZUZvb3RlcjIgZXh0ZW5kcyBJbmRleHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYDxkaXYgaWQ9XCJjb250YWN0Rm9vdGVyXCIgIGNsYXNzPVwic2lkZS1mb290ZXJcIj5Db250YWN0PC9kaXY+YDtcblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAgJy4vbGliL2luZGV4JztcbmltcG9ydCB7c2Nyb2xsLGZhZGVJbixzY3JvbGxIZWlnaHR9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vTWFpblBhZ2UnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcbmltcG9ydCBTaWRlRm9vdGVyIGZyb20gJy4vU2lkZUZvb3Rlcic7XG5pbXBvcnQgU2lkZUZvb3RlcjIgZnJvbSAnLi9TaWRlRm9vdGVyMic7XG5pbXBvcnQgUHJvamVjdERlc2NyaXB0aW9uIGZyb20gJy4vUHJvamVjdERlc2NyaXB0aW9uJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7IFxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgSW5kZXh7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5zZWNvbmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZFBhZ2UnKTtcblx0XHR0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlyZFBhZ2UnKTtcblx0XHR0aGlzLl9oYW5kbGVTY3JvbGxpbmcoKTtcblx0fVxuXG5cblxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtNYWluUGFnZSxOYXZpZ2F0aW9uLENvbnRhY3QsIFByb2plY3REZXNjcmlwdGlvbixTaWRlRm9vdGVyMixTaWRlRm9vdGVyXTtcblx0fVxuXG5cdFxuXG5cdFxuXG5cdF9oYW5kbGVTY3JvbGxpbmcoKXtcblx0XHQvL3NlY3Rpb24gcG9zaXRpb25cblx0XHRjb25zdCBzZWNvbmRfcGFnZV9wb3NpdGlvbiAgPSggKDcvMTApICogc2Nyb2xsSGVpZ2h0KCkpICsgNTA7XG5cdFx0Y29uc3QgdGhpcmRfcGFnZV9wb3NpdGlvbiA9ICg5LzEwKSAqIHNjcm9sbEhlaWdodCgpO1xuXHRcdFxuXG5cdFx0Ly9zYXZpbmcgdGhpcyBwb3NpdGlvbm4gZm9yIGNoYW5nZVxuXHRcdGxldCBwcmV2aW91c19wb3NpdGlvbiA9IDA7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbigpe1xuXHRcdFx0XHQvL2dldCB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9uIFxuXHRcdFx0XHRsZXQgc2Nyb2xsX3Bvc2l0aW9uID0gIHdpbmRvdy5zY3JvbGxZO1xuXHRcdFx0XG5cdFx0XHRcdGxldCBjaGFuZ2UgPSBzY3JvbGxfcG9zaXRpb24gLSBwcmV2aW91c19wb3NpdGlvbjtcdFxuIFx0XHRcdFx0XG5cdFx0XHRcdHByZXZpb3VzX3Bvc2l0aW9uID0gc2Nyb2xsX3Bvc2l0aW9uO1xuXG5cdFx0XHRcdFxuXHRcdFx0XHRpZighc3RhdGUuZGlkU2Nyb2xsLnNlY29uZFBhZ2UgICYmIGNoYW5nZSA+IDApe1xuXHRcdFx0XHRcdHN0YXRlLmRpZFNjcm9sbC5zZWNvbmRQYWdlICA9IHRydWU7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUZXh0JykuY2xhc3NOYW1lKz0nIHZlcnRpY2FsLWxpbmUtcHJvamVjdCAnO1xuXG5cdFx0XHRcdFx0c2Nyb2xsKHNlY29uZF9wYWdlX3Bvc2l0aW9uICk7XG5cdFx0XHRcdFx0ZmFkZUluKHRoaXMuc2Vjb25kUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGlmKCFzdGF0ZS5kaWRTY3JvbGwudGhpcmRQYWdlICYmIHNjcm9sbF9wb3NpdGlvbiA+PSAgdGhpcmRfcGFnZV9wb3NpdGlvbiApe1xuXHRcdFx0XHRcdHN0YXRlLmRpZFNjcm9sbC50aGlyZFBhZ2UgPSB0cnVlO1xuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Rm9vdGVyJykuY2xhc3NOYW1lICs9JyBjb250YWN0LWZvb3RlciAnO1xuXHRcdFx0XHRcdHNjcm9sbChzY3JvbGxIZWlnaHQoKSx0aGlyZF9wYWdlX3Bvc2l0aW9uKTtcblx0XHRcdFx0XHRmYWRlSW4odGhpcy50aGlyZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHR9XG5cblx0XG5cdFxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHQ8ZGl2IGlkPVwiZmlyc3RQYWdlXCIgIGNsYXNzPVwicm93IGZpcnN0LXBhZ2VcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTggbWFpbi1wYWdlXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGRhdGEtY29tcG9uZW50PVwiTWFpblBhZ2VcIj48L2Rpdj5cdFxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBuYXZpZ2F0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGRhdGEtY29tcG9uZW50PVwiTmF2aWdhdGlvblwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgaWQ9XCJzZWNvbmRQYWdlXCIgY2xhc3M9XCJyb3cgc2Vjb25kLXBhZ2VcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIiBkYXRhLWNvbXBvbmVudD1cIlNpZGVGb290ZXJcIiBkYXRhLXBhcmFtZXRlci10aXRsZT1cIlByb2plY3RcIj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPSdjb2wtbWQtOScgZGF0YS1jb21wb25lbnQ9XCJQcm9qZWN0RGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBpZD1cInRoaXJkUGFnZVwiICBjbGFzcz1cInJvdyB0aGlyZC1wYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nY29sLW1kLTknIGRhdGEtY29tcG9uZW50PVwiQ29udGFjdFwiPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0zXCIgZGF0YS1jb21wb25lbnQ9XCJTaWRlRm9vdGVyMlwiIGRhdGEtcGFyYW1ldGVyLXRpdGxlPVwiUHJvamVjdFwiPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdGBcblxuXHR9XG5cdFxuXG5cbn1cbiIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkgeyBcblx0bmV3IEFwcCgnYXBwJyk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4e1xuXHQvKipcblx0ICogY29uc3RydWN0b3Jcblx0ICpcblx0ICogQHBhcmFtIGNvbXBvbmVudCBjb21wb25lbnQgbmFtZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29tcG9uZW50KXtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5jb21wb25lbnRTZWxlY3RvcigpLm1hcChxdWVyeVNlbGVjdG9yPT57XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblxuXHRcdH0pXG5cblx0XHRQcm9taXNlLmFsbChwcm9taXNlcylcblx0XHRcdC50aGVuKCgpPT57XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlICA9IHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdHRoaXMubG9hZENoaWxkVmlld3MoKTtcblx0XHRcdFx0dGhpcy5pbnNlcnRFbGVtZW50KHRlbXBsYXRlKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIGhvb2sgZm9yIHRoaW5ncyBhcmUgbG9hZGVkXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdC8qKlxuXHQgKiBwb3B1bGF0aW5nIHRoZSBpbm5lcmh0bWxcblx0ICpcblx0ICogQHBhcmFtIHRlbXBsYXRlXG5cdCAqL1xuXHRpbnNlcnRFbGVtZW50KHRlbXBsYXRlKXtcblx0XHR0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkuZm9yRWFjaChjb21wb25lbnRJbnN0YW5jZT0+e1xuXHRcdFx0Y29tcG9uZW50SW5zdGFuY2UuaW5uZXJIVE1MID0gIHRlbXBsYXRlO1xuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuICcnO1xuXG5cdH1cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbXTtcblx0XHRcblx0fVxuXHRjb21wb25lbnRTZWxlY3Rvcigpe1xuXHRcdHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY29tcG9uZW50PVwiJHt0aGlzLmNvbXBvbmVudH1cIl1gKV07XG5cdH1cblxuXHQvKipcblx0ICogbG9hZGluZyBsaXN0ZWQgY2hpbGQgdmlld3Ncblx0ICovXG5cdGxvYWRDaGlsZFZpZXdzKCl7XG5cdFx0aWYoIUFycmF5LmlzQXJyYXkodGhpcy5jaGlsZFZpZXdzKCkgKSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGlsZFZpZXdzKCkuZm9yRWFjaCh2aWV3PT57XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gdmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTtcblx0XHRcdG5ldyB2aWV3KGAke2NsYXNzTmFtZX1gKTtcblx0XHR9KVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleHtcblx0LyoqXG5cdCAqIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqIEBwYXJhbSBjb21wb25lbnQgY29tcG9uZW50IG5hbWVcblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudCl7XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cblx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5tYXAocXVlcnlTZWxlY3Rvcj0+e1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9Pntcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cblx0XHR9KVxuXG5cdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0XHQudGhlbigoKT0+e1xuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSAgPSB0aGlzLnJlbmRlcigpO1xuXHRcdFx0XHR0aGlzLmxvYWRDaGlsZFZpZXdzKCk7XG5cdFx0XHRcdHRoaXMuaW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSk7XG5cblx0XHRcdFx0dGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBob29rIGZvciB0aGluZ3MgYXJlIGxvYWRlZFxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHQvKipcblx0ICogcG9wdWxhdGluZyB0aGUgaW5uZXJodG1sXG5cdCAqXG5cdCAqIEBwYXJhbSB0ZW1wbGF0ZVxuXHQgKi9cblx0aW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSl7XG5cdFx0dGhpcy5jb21wb25lbnRTZWxlY3RvcigpLmZvckVhY2goY29tcG9uZW50SW5zdGFuY2U9Pntcblx0XHRcdGNvbXBvbmVudEluc3RhbmNlLmlubmVySFRNTCA9ICB0ZW1wbGF0ZTtcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAnJztcblxuXHR9XG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW107XG5cdFx0XG5cdH1cblx0Y29tcG9uZW50U2VsZWN0b3IoKXtcblx0XHRyZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNvbXBvbmVudD1cIiR7dGhpcy5jb21wb25lbnR9XCJdYCldO1xuXHR9XG5cblx0LyoqXG5cdCAqIGxvYWRpbmcgbGlzdGVkIGNoaWxkIHZpZXdzXG5cdCAqL1xuXHRsb2FkQ2hpbGRWaWV3cygpe1xuXHRcdGlmKCFBcnJheS5pc0FycmF5KHRoaXMuY2hpbGRWaWV3cygpICkpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hpbGRWaWV3cygpLmZvckVhY2godmlldz0+e1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9IHZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHRuZXcgdmlldyhgJHtjbGFzc05hbWV9YCk7XG5cdFx0fSlcblx0fVxufVxuIiwiZXhwb3J0ICBjb25zdCBzdGF0ZSAgPSAge1xuXHRkaWRTY3JvbGwgOiB7YWJvdXQgOiBmYWxzZSwgc2Vjb25kUGFnZSA6IGZhbHNlICwgdGhpcmRQYWdlIDogZmFsc2V9XG5cbn1cbiIsImV4cG9ydCBjb25zdCBzY3JvbGxIZWlnaHQgPSAoKT0+e1xuXHRyZXR1cm4gTWF0aC5tYXgoIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCApO1xufVxuXG5leHBvcnQgY29uc3Qgc2Nyb2xsID0gKGxhc3RfcG9zdGlvbixpbml0aWFsX3Bvc2l0aW9uPTApPT57XG5cdGNvbnN0IHJhdGUgPSAxNTtcblx0bGV0IHBvc2l0aW9uID0gaW5pdGlhbF9wb3NpdGlvbiA7XG5cdGNvbnN0IHJlcGVhdE9mdGVuID0gKCk9Pntcblx0XHRwb3NpdGlvbiA9IHBvc2l0aW9uK3JhdGU7XG5cdFx0d2luZG93LnNjcm9sbCgwLHBvc2l0aW9uKTtcblx0XHRjb25zdCBnbG9iYWxJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXBlYXRPZnRlbik7XG5cdFx0aWYocG9zaXRpb24gPj0gbGFzdF9wb3N0aW9uKXtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdsb2JhbElEKTtcblx0XHR9XG5cdH1cblxuXHRyZXBlYXRPZnRlbigpO1xufVxuXG5leHBvcnQgY29uc3QgZmFkZUluID0gKGVsZW1lbnQsaW5pdGlhbD0wKT0+e1xuXHRjb25zdCByYXRlID0gMC4wNTtcblx0Ly9maW5hbCBvcGFjaXR5IGNhbid0IGJlIGJpZ2dlciB0aGFuIDFcblx0Y29uc3QgZmluYWxPcGFjaXR5ID0gMTtcblxuXHRsZXQgb3BhY2l0eSA9IGluaXRpYWw7XG5cblx0Y29uc3QgX3Rhc2sgPSAoKT0+e1xuXHRcdGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG5cdFx0b3BhY2l0eSA9IG9wYWNpdHkgKyByYXRlOyBcblx0XHRjb25zdCBnbG9iYWxJRCA9ICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3Rhc2spO1xuXHRcdGlmKG9wYWNpdHkgPj0gZmluYWxPcGFjaXR5KXtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdsb2JhbElEKVxuXHRcdH1cblx0fVxuXG5cdF90YXNrKCk7XG5cbn1cblxuXG4iXX0=
