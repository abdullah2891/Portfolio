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
          console.log(second_page_position, third_page_position);
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
  var rate = 20;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29udGFjdC5qcyIsInNyYy9NYWluUGFnZS5qcyIsInNyYy9OYXZpZ2F0aW9uLmpzIiwic3JjL1Byb2plY3REZXNjcmlwdGlvbi5qcyIsInNyYy9TaWRlRm9vdGVyLmpzIiwic3JjL1NpZGVGb290ZXIyLmpzIiwic3JjL2FwcC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9saWIvSW5kZXguanMiLCJzcmMvbGliL2luZGV4LmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFWjtBQUNQO0FBeUJBOzs7O0VBNUJtQyxlOzs7Ozs7Ozs7Ozs7QUNGckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUIsUTs7Ozs7Ozs7Ozs7Ozs2QkFDWjtBQUNQO0FBV0E7Ozs7RUFib0MsYzs7Ozs7Ozs7Ozs7O0FDSHRDOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsVTs7Ozs7Ozs7Ozs7Ozt3Q0FDRDtBQUNsQixXQUFLLG1CQUFMLEdBQTJCLFFBQVEsQ0FBQyxjQUFULENBQXdCLFlBQXhCLENBQTNCO0FBQ0EsV0FBSyxrQkFBTCxHQUEwQixRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUExQjs7QUFDQSxXQUFLLGlCQUFMO0FBQ0E7Ozt3Q0FHa0I7QUFBQTs7QUFDbEIseUJBQUksUUFBUSxDQUFDLHNCQUFULENBQWdDLG1CQUFoQyxDQUFKLEVBQTBELE9BQTFELENBQWtFLFVBQUEsTUFBTSxFQUFFO0FBRXRFLFFBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWdDLFVBQVMsS0FBVCxFQUFlO0FBQ2pELGNBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFOLENBQWlCLFlBQWpCLENB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UUFBRCxDQUFwQjtBQUNBO0FBQ0QsR0FQRDs7QUFTQSxFQUFBLEtBQUs7QUFFTCxDQWxCTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9JbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBJbmRleHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhY3RcIj5cblx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdDxsYWJlbD5OYW1lPGxhYmVsPlxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgY3VzdG9tLWlucHV0XCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+d2F0ZXZlcjxsYWJlbD5cblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LWxnIGN1c3RvbS1pbnB1dFwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsPndhdGV2ZXI8bGFiZWw+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1sZyBjdXN0b20taW5wdXRcIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvZGl2PlxuXHRcdGBcblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QYWdlIGV4dGVuZHMgSW5kZXh7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaW50cm9kdWN0aW9uXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwidGl0bGVcIj5IaTwvcD5cblx0XHRcdFx0PHA+V2VsY29tZSB0byB0aGlzIGNvcm5lciBvZiB0aGUgaW50ZXJuZXQ8L3A+XG5cblx0XHRcdFx0PHA+IEhvdyBjYW4gSSBoZWxwIHlvdSB0b2RheTwvcD5cblx0XHRcdFx0PHA+IEhvdyBjYW4gSSBoZWxwIHlvdSB0b2RheTwvcD5cblx0XHRcdFx0PHA+IEhvdyBjYW4gSSBoZWxwIHlvdSB0b2RheTwvcD5cblx0XHRcdDwvZGl2PlxuXG5cdFx0YDtcblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtmYWRlSW4sc2Nyb2xsLHNjcm9sbEhlaWdodH0gZnJvbSAgJy4vdXRpbCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuc2Vjb25kUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmRQYWdlJyk7XG5cdFx0dGhpcy50aGlyZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcmRQYWdlJyk7XG5cdFx0dGhpcy5fYWRkRXZlbnRMaXN0ZW5lcigpO1xuXHR9XG5cblxuXHRfYWRkRXZlbnRMaXN0ZW5lcigpe1xuXHRcdFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZpZ2F0aW9uLWJ1dHRvbicpXS5mb3JFYWNoKGJ1dHRvbj0+e1xuXG5cdFx0ICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XHRjb25zdCBwYWdlTmFtZSA9IGV2ZW50LnNyY0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hdmlnYXRpb24nKTtcblx0XHRcdCAgICBcdGNvbnN0IHBvc2l0aW9uID0gZXZlbnQuc3JjRWxlbWVudC5vZmZzZXRUb3A7XG5cblx0XHRcdFx0Ly9zZWN0aW9uIHBvc2l0aW9uXG5cdFx0XHRcdGNvbnN0IHNlY29uZF9wYWdlX3Bvc2l0aW9uICA9KCAoMy8xMCkgKiBzY3JvbGxIZWlnaHQoKSkgO1xuXHRcdFx0XHRjb25zdCB0aGlyZF9wYWdlX3Bvc2l0aW9uID0gKDgvMTApICogc2Nyb2xsSGVpZ2h0KCk7XG5cdGNvbnNvbGUubG9nKHNlY29uZF9wYWdlX3Bvc2l0aW9uLHRoaXJkX3BhZ2VfcG9zaXRpb24pO1x0XG5cdFx0XHRcdFxuXG5cdFx0XHQgICAgXHRzdGF0ZS5kaWRTY3JvbGwgPSB7XG5cdFx0XHRcdFx0c2Vjb25kUGFnZSA6IHRydWUsXG5cdFx0XHRcdFx0dGhpcmRQYWdlIDogdHJ1ZVxuXHRcdFx0XHR9XG5cblxuXHRcdFx0ICAgIFx0c3dpdGNoKHBhZ2VOYW1lKXtcblx0XHRcdFx0XHRjYXNlICdzZWNvbmRQYWdlJzpcblx0XHRcdFx0XHRcdHNjcm9sbChzZWNvbmRfcGFnZV9wb3NpdGlvbik7XG5cdFx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGV4dCcpLmNsYXNzTmFtZSs9JyB2ZXJ0aWNhbC1saW5lLXByb2plY3QgJztcblx0XHRcdFx0XHRcdCBicmVhaztcblx0XHRcdFx0XHRjYXNlICd0aGlyZFBhZ2UnOlxuXHRcdFx0XHRcdFx0ZmFkZUluKHRoaXMuc2Vjb25kUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdFx0XHRzY3JvbGwodGhpcmRfcGFnZV9wb3NpdGlvbik7XG5cdFx0XHRcdFx0XHRmYWRlSW4odGhpcy50aGlyZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RGb290ZXInKS5jbGFzc05hbWUgKz0nIGNvbnRhY3QtZm9vdGVyICc7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0ICAgIH0uYmluZCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4gYFxuXHRcdFx0PHVsIGNsYXNzPVwibmF2aWdhdGlvblwiPlxuXHRcdFx0XHQ8bGkgZGF0YS1uYXZpZ2F0aW9uPVwiYWJvdXRcIiAgY2xhc3M9XCJuYXZpZ2F0aW9uLWJ1dHRvblwiID5BYm91dCBNZTwvbGk+XG5cdFx0XHRcdDxsaSBkYXRhLW5hdmlnYXRpb249XCJzZWNvbmRQYWdlXCIgY2xhc3M9XCJuYXZpZ2F0aW9uLWJ1dHRvblwiPlByb2plY3Q8L2xpPlxuXHRcdFx0XHQ8bGkgZGF0YS1uYXZpZ2F0aW9uPVwidGhpcmRQYWdlXCIgY2xhc3M9XCJuYXZpZ2F0aW9uLWJ1dHRvblwiPkNvbnRhY3QgbWU8L2xpPlxuXG5cdFx0XHQ8L3VsPlxuXHRcdGA7XG5cblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3REZXNjcmlwdGlvbiBleHRlbmRzIEluZGV4e1xuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHQ8aDM+UHJvamVjdCAxPC9oMz5cblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0PGgzPlByb2plY3QgMjwvaDM+XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHQ8aDM+UHJvamVjdCAzPC9oMz5cblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHQ8aDM+UHJvamVjdCA0PC9oMz5cblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcblx0XHRcdFx0XHRcdDxwPmRlc2NyaXB0aW9uPC9wPlxuXHRcdFx0XHRcdFx0PHA+ZGVzY3JpcHRpb248L3A+XG5cdFx0XHRcdFx0XHQ8cD5kZXNjcmlwdGlvbjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXG5cdH1cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZUZvb3RlciBleHRlbmRzIEluZGV4e1xuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGlkPVwicHJvamVjdFRleHRcIiBjbGFzcz1cInByb2plY3QtdGV4dCAgc2lkZS1mb290ZXJcIj5Qcm9qZWN0PC9kaXY+XG5cdFx0YDtcblxuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCAgZnJvbSAnLi9saWIvaW5kZXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVGb290ZXIyIGV4dGVuZHMgSW5kZXh7XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGA8ZGl2IGlkPVwiY29udGFjdEZvb3RlclwiICBjbGFzcz1cInNpZGUtZm9vdGVyXCI+Q29udGFjdDwvZGl2PmA7XG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge3Njcm9sbCxmYWRlSW4sc2Nyb2xsSGVpZ2h0fSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdGF0ZSc7XG5cbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL01haW5QYWdlJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbic7XG5pbXBvcnQgU2lkZUZvb3RlciBmcm9tICcuL1NpZGVGb290ZXInO1xuaW1wb3J0IFNpZGVGb290ZXIyIGZyb20gJy4vU2lkZUZvb3RlcjInO1xuaW1wb3J0IFByb2plY3REZXNjcmlwdGlvbiBmcm9tICcuL1Byb2plY3REZXNjcmlwdGlvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnOyBcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuc2Vjb25kUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmRQYWdlJyk7XG5cdFx0dGhpcy50aGlyZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcmRQYWdlJyk7XG5cdFx0dGhpcy5faGFuZGxlU2Nyb2xsaW5nKCk7XG5cdH1cblxuXG5cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbTWFpblBhZ2UsTmF2aWdhdGlvbixDb250YWN0LCBQcm9qZWN0RGVzY3JpcHRpb24sU2lkZUZvb3RlcjIsU2lkZUZvb3Rlcl07XG5cdH1cblxuXHRcblxuXHRcblxuXHRfaGFuZGxlU2Nyb2xsaW5nKCl7XG5cdFx0Ly9zZWN0aW9uIHBvc2l0aW9uXG5cdFx0Y29uc3Qgc2Vjb25kX3BhZ2VfcG9zaXRpb24gID0oICg3LzEwKSAqIHNjcm9sbEhlaWdodCgpKSArIDUwO1xuXHRcdGNvbnN0IHRoaXJkX3BhZ2VfcG9zaXRpb24gPSAoOS8xMCkgKiBzY3JvbGxIZWlnaHQoKTtcblx0XHRcblxuXHRcdC8vc2F2aW5nIHRoaXMgcG9zaXRpb25uIGZvciBjaGFuZ2Vcblx0XHRsZXQgcHJldmlvdXNfcG9zaXRpb24gPSAwO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsZnVuY3Rpb24oKXtcblx0XHRcdFx0Ly9nZXQgdGhlIHNjcm9sbGluZyBwb3NpdGlvbiBcblx0XHRcdFx0bGV0IHNjcm9sbF9wb3NpdGlvbiA9ICB3aW5kb3cuc2Nyb2xsWTtcblx0XHRcdFxuXHRcdFx0XHRsZXQgY2hhbmdlID0gc2Nyb2xsX3Bvc2l0aW9uIC0gcHJldmlvdXNfcG9zaXRpb247XHRcbiBcdFx0XHRcdFxuXHRcdFx0XHRwcmV2aW91c19wb3NpdGlvbiA9IHNjcm9sbF9wb3NpdGlvbjtcblxuXHRcdFx0XHRcblx0XHRcdFx0aWYoIXN0YXRlLmRpZFNjcm9sbC5zZWNvbmRQYWdlICAmJiBjaGFuZ2UgPiAwKXtcblx0XHRcdFx0XHRzdGF0ZS5kaWRTY3JvbGwuc2Vjb25kUGFnZSAgPSB0cnVlO1xuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGV4dCcpLmNsYXNzTmFtZSs9JyB2ZXJ0aWNhbC1saW5lLXByb2plY3QgJztcblxuXHRcdFx0XHRcdHNjcm9sbChzZWNvbmRfcGFnZV9wb3NpdGlvbiApO1xuXHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighc3RhdGUuZGlkU2Nyb2xsLnRoaXJkUGFnZSAmJiBzY3JvbGxfcG9zaXRpb24gPj0gIHRoaXJkX3BhZ2VfcG9zaXRpb24gKXtcblx0XHRcdFx0XHRzdGF0ZS5kaWRTY3JvbGwudGhpcmRQYWdlID0gdHJ1ZTtcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvb3RlcicpLmNsYXNzTmFtZSArPScgY29udGFjdC1mb290ZXIgJztcblx0XHRcdFx0XHRzY3JvbGwoc2Nyb2xsSGVpZ2h0KCksdGhpcmRfcGFnZV9wb3NpdGlvbik7XG5cdFx0XHRcdFx0ZmFkZUluKHRoaXMudGhpcmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0fVxuXG5cdFxuXHRcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBpZD1cImZpcnN0UGFnZVwiICBjbGFzcz1cInJvdyBmaXJzdC1wYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC04IG1haW4tcGFnZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBkYXRhLWNvbXBvbmVudD1cIk1haW5QYWdlXCI+PC9kaXY+XHRcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTMgbmF2aWdhdGlvblwiPlxuXHRcdFx0XHRcdFx0PGRpdiBkYXRhLWNvbXBvbmVudD1cIk5hdmlnYXRpb25cIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGlkPVwic2Vjb25kUGFnZVwiIGNsYXNzPVwicm93IHNlY29uZC1wYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0zXCIgZGF0YS1jb21wb25lbnQ9XCJTaWRlRm9vdGVyXCIgZGF0YS1wYXJhbWV0ZXItdGl0bGU9XCJQcm9qZWN0XCI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz0nY29sLW1kLTknIGRhdGEtY29tcG9uZW50PVwiUHJvamVjdERlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgaWQ9XCJ0aGlyZFBhZ2VcIiAgY2xhc3M9XCJyb3cgdGhpcmQtcGFnZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9J2NvbC1tZC05JyBkYXRhLWNvbXBvbmVudD1cIkNvbnRhY3RcIj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiIGRhdGEtY29tcG9uZW50PVwiU2lkZUZvb3RlcjJcIiBkYXRhLXBhcmFtZXRlci10aXRsZT1cIlByb2plY3RcIj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRgXG5cblx0fVxuXHRcblxuXG59XG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHsgXG5cdG5ldyBBcHAoJ2FwcCcpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleHtcblx0LyoqXG5cdCAqIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqIEBwYXJhbSBjb21wb25lbnQgY29tcG9uZW50IG5hbWVcblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudCl7XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cblx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5tYXAocXVlcnlTZWxlY3Rvcj0+e1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9Pntcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cblx0XHR9KVxuXG5cdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0XHQudGhlbigoKT0+e1xuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSAgPSB0aGlzLnJlbmRlcigpO1xuXHRcdFx0XHR0aGlzLmxvYWRDaGlsZFZpZXdzKCk7XG5cdFx0XHRcdHRoaXMuaW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSk7XG5cblx0XHRcdFx0dGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBob29rIGZvciB0aGluZ3MgYXJlIGxvYWRlZFxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHQvKipcblx0ICogcG9wdWxhdGluZyB0aGUgaW5uZXJodG1sXG5cdCAqXG5cdCAqIEBwYXJhbSB0ZW1wbGF0ZVxuXHQgKi9cblx0aW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSl7XG5cdFx0dGhpcy5jb21wb25lbnRTZWxlY3RvcigpLmZvckVhY2goY29tcG9uZW50SW5zdGFuY2U9Pntcblx0XHRcdGNvbXBvbmVudEluc3RhbmNlLmlubmVySFRNTCA9ICB0ZW1wbGF0ZTtcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAnJztcblxuXHR9XG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW107XG5cdFx0XG5cdH1cblx0Y29tcG9uZW50U2VsZWN0b3IoKXtcblx0XHRyZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNvbXBvbmVudD1cIiR7dGhpcy5jb21wb25lbnR9XCJdYCldO1xuXHR9XG5cblx0LyoqXG5cdCAqIGxvYWRpbmcgbGlzdGVkIGNoaWxkIHZpZXdzXG5cdCAqL1xuXHRsb2FkQ2hpbGRWaWV3cygpe1xuXHRcdGlmKCFBcnJheS5pc0FycmF5KHRoaXMuY2hpbGRWaWV3cygpICkpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hpbGRWaWV3cygpLmZvckVhY2godmlldz0+e1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9IHZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHRuZXcgdmlldyhgJHtjbGFzc05hbWV9YCk7XG5cdFx0fSlcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXh7XG5cdC8qKlxuXHQgKiBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiBAcGFyYW0gY29tcG9uZW50IGNvbXBvbmVudCBuYW1lXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnQpe1xuXHRcdHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG5cdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkubWFwKHF1ZXJ5U2VsZWN0b3I9Pntcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXG5cdFx0fSlcblxuXHRcdFByb21pc2UuYWxsKHByb21pc2VzKVxuXHRcdFx0LnRoZW4oKCk9Pntcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgID0gdGhpcy5yZW5kZXIoKTtcblx0XHRcdFx0dGhpcy5sb2FkQ2hpbGRWaWV3cygpO1xuXHRcdFx0XHR0aGlzLmluc2VydEVsZW1lbnQodGVtcGxhdGUpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcblx0XHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogaG9vayBmb3IgdGhpbmdzIGFyZSBsb2FkZWRcblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0LyoqXG5cdCAqIHBvcHVsYXRpbmcgdGhlIGlubmVyaHRtbFxuXHQgKlxuXHQgKiBAcGFyYW0gdGVtcGxhdGVcblx0ICovXG5cdGluc2VydEVsZW1lbnQodGVtcGxhdGUpe1xuXHRcdHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5mb3JFYWNoKGNvbXBvbmVudEluc3RhbmNlPT57XG5cdFx0XHRjb21wb25lbnRJbnN0YW5jZS5pbm5lckhUTUwgPSAgdGVtcGxhdGU7XG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gJyc7XG5cblx0fVxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtdO1xuXHRcdFxuXHR9XG5cdGNvbXBvbmVudFNlbGVjdG9yKCl7XG5cdFx0cmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jb21wb25lbnQ9XCIke3RoaXMuY29tcG9uZW50fVwiXWApXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBsb2FkaW5nIGxpc3RlZCBjaGlsZCB2aWV3c1xuXHQgKi9cblx0bG9hZENoaWxkVmlld3MoKXtcblx0XHRpZighQXJyYXkuaXNBcnJheSh0aGlzLmNoaWxkVmlld3MoKSApKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmNoaWxkVmlld3MoKS5mb3JFYWNoKHZpZXc9Pntcblx0XHRcdGxldCBjbGFzc05hbWUgPSB2aWV3LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0bmV3IHZpZXcoYCR7Y2xhc3NOYW1lfWApO1xuXHRcdH0pXG5cdH1cbn1cbiIsImV4cG9ydCAgY29uc3Qgc3RhdGUgID0gIHtcblx0ZGlkU2Nyb2xsIDoge2Fib3V0IDogZmFsc2UsIHNlY29uZFBhZ2UgOiBmYWxzZSAsIHRoaXJkUGFnZSA6IGZhbHNlfVxuXG59XG4iLCJleHBvcnQgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gKCk9Pntcblx0cmV0dXJuIE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIFxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNjcm9sbCA9IChsYXN0X3Bvc3Rpb24saW5pdGlhbF9wb3NpdGlvbj0wKT0+e1xuXHRjb25zdCByYXRlID0gMjA7XG5cdGxldCBwb3NpdGlvbiA9IGluaXRpYWxfcG9zaXRpb24gO1xuXHRjb25zdCByZXBlYXRPZnRlbiA9ICgpPT57XG5cdFx0cG9zaXRpb24gPSBwb3NpdGlvbityYXRlO1xuXHRcdHdpbmRvdy5zY3JvbGwoMCxwb3NpdGlvbik7XG5cdFx0Y29uc3QgZ2xvYmFsSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVwZWF0T2Z0ZW4pO1xuXHRcdGlmKHBvc2l0aW9uID49IGxhc3RfcG9zdGlvbil7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShnbG9iYWxJRCk7XG5cdFx0fVxuXHR9XG5cblx0cmVwZWF0T2Z0ZW4oKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IChlbGVtZW50LGluaXRpYWw9MCk9Pntcblx0Y29uc3QgcmF0ZSA9IDAuMDU7XG5cdC8vZmluYWwgb3BhY2l0eSBjYW4ndCBiZSBiaWdnZXIgdGhhbiAxXG5cdGNvbnN0IGZpbmFsT3BhY2l0eSA9IDE7XG5cblx0bGV0IG9wYWNpdHkgPSBpbml0aWFsO1xuXG5cdGNvbnN0IF90YXNrID0gKCk9Pntcblx0XHRlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuXHRcdG9wYWNpdHkgPSBvcGFjaXR5ICsgcmF0ZTsgXG5cdFx0Y29uc3QgZ2xvYmFsSUQgPSAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF90YXNrKTtcblx0XHRpZihvcGFjaXR5ID49IGZpbmFsT3BhY2l0eSl7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShnbG9iYWxJRClcblx0XHR9XG5cdH1cblxuXHRfdGFzaygpO1xuXG59XG5cblxuIl19
