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
      return "\n\t\t\t<div class=\"row margin-top-4  margin-left-4 padding-right-4 padding-left-4\">\n\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t<p>I am Fullstack developer who can help you with your digital needs.I can help you with the cutting edge technology. You can contact me here \n\t\t\t\t\t\tor email at abdullah2891@gmail.com</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-5 login-form\">\n\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-lg \" />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control input-lg \" />\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Comment</label>\n\t\t\t\t\t\t\t\t<textarea type=\"text\" class=\"form-control input-lg \"></textarea>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</form>\n\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
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

var _Navigation = _interopRequireDefault(require("./Navigation"));

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
    key: "childViews",
    value: function childViews() {
      return [_Navigation.default];
    }
  }, {
    key: "render",
    value: function render() {
      return "\n\t\t\t<div class=\"row introduction\">\n\t\t\t\t<div class=\"col-md-3\"></div>\n\n\t\t\t<div class=\"name-pad col-md-5\">\n\t\t\t\t<p class=\"title\"><strong>Hi,</strong></p>\n\t\t\t\t\t<p><strong>Welcome to this corner of the internet</strong></p>\n\t\t\t\t\t<p><strong>My Name is Abdullah Rahman</strong></p>\n\t\t\t\t\t<p><strong>How can I help you today</strong></p>\n\t\t\t\t\t<div data-component=\"Navigation\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t";
    }
  }]);

  return MainPage;
}(_index.default);

exports.default = MainPage;

},{"./Navigation":3,"./lib/index":10}],3:[function(require,module,exports){
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
          var pageName = event.srcElement.getAttribute('data-navigation') || event.currentTarget.getAttribute('data-navigation');
          var position = event.srcElement.offsetTop || event.currentTarget.offsetTop; //section position

          var second_page_position = 3 / 10 * (0, _util.scrollHeight)();
          var third_page_position = 8 / 10 * (0, _util.scrollHeight)();
          _state.state.didScroll[pageName] = true;
          console.log(pageName);

          switch (pageName) {
            case 'secondPage':
              (0, _util.scroll)(second_page_position);
              (0, _util.fadeIn)(this.secondPageElementId);
              document.getElementById('projectDescription').className += ' vertical-line-project ';
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
      return "\n\t\t\t<div class=\"row\">\n\t\t\t\t<div data-navigation=\"about\" class=\"col-md-4 cursor-pointer  navigation-button\">\n\t\t\t\t\t<img class=\"icon\" src=\"css/icons/architect.svg\" />\n\t\t\t\t</div>\n\t\t\t\t<div data-navigation=\"secondPage\" class=\"col-md-4 cursor-pointer navigation-button\">\n\t\t\t\t\t<img class=\"icon\" src=\"css/icons/projector-screen.svg\"/>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div data-navigation=\"thirdPage\" class=\"col-md-4 cursor-pointer navigation-button\">\n\t\t\t\t\t<img class=\"icon\" src=\"css/icons/lightbulb.svg\"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
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

var _state = require("./state");

var _util = require("./util");

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

var ProjectDescription =
/*#__PURE__*/
function (_Index) {
  _inherits(ProjectDescription, _Index);

  function ProjectDescription() {
    _classCallCheck(this, ProjectDescription);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectDescription).apply(this, arguments));
  }

  _createClass(ProjectDescription, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      _state.state.notifyPropertyChange = function (scrollPosition) {
        console.log({
          scrollPosition: scrollPosition
        });

        _this._updateProjectText(scrollPosition);

        _this.render();
      };
    }
    /**
     * _updateProjectText
     *
     * @param scrollPosition
     */

  }, {
    key: "_updateProjectText",
    value: function _updateProjectText(scrollPosition) {
      _toConsumableArray(document.getElementsByClassName('project-text')).forEach(function (text, index) {
        var project_dom = _state.state.projects[index];
        var showText = project_dom.upper_end > scrollPosition && project_dom.position <= scrollPosition;
        text.style.display = showText ? 'block' : 'none';
        console.log(project_dom.opacity);
        text.style.opacity = project_dom.opacity;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return "\n\t\t\t<div class=\"project-description side-footer\" id=\"projectDescription\">\n\t\t\t\t".concat(_state.state.projects.reduce(function (html, project) {
        var showRow = project.show ? "block" : "none";
        var row = "\n\t\t\t\t\t\t\t<div class=\"row project-text\" style=\"display: ".concat(showRow, "\" >\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<h3>").concat(project.title, "</h3>\n\t\t\t\t\t\t\t\t\t<p>").concat(project.description, "</p>\n\t\t\t\t\t\t\t\t\t<p>").concat(project.skills, "</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t");
        html += row + '\n';
        return html;
      }, ''), "\n\n\n\t\t\t</div>\n\t\t");
    }
  }]);

  return ProjectDescription;
}(_index.default);

exports.default = ProjectDescription;

},{"./lib/index":10,"./state":11,"./util":12}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./lib/index"));

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

var SideFooter =
/*#__PURE__*/
function (_Index) {
  _inherits(SideFooter, _Index);

  function SideFooter() {
    _classCallCheck(this, SideFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideFooter).apply(this, arguments));
  }

  _createClass(SideFooter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._handleScrolling();

      console.log(_state.state);
    }
  }, {
    key: "_updateOpacity",
    value: function _updateOpacity(scrollPosition) {
      _toConsumableArray(document.querySelectorAll('[data-index]')).forEach(function (currentDom) {
        var index = currentDom.getAttribute('data-index');
        var project = _state.state.projects[index];

        var y = function y(x, position) {
          var range = project.upper_end - project.position;
          var opacity = -Math.pow((x - position) / range, 2) + 1;
          return opacity > 0.3 ? opacity : 0.2;
        };

        var position = parseInt(project.position);
        var positionHighestOpacity = project.position;
        var currentOpacity = y(scrollPosition, positionHighestOpacity);
        console.log(currentOpacity);
        currentDom.style.opacity = currentOpacity;
        project.offset = currentOpacity;
        project.opacity = currentOpacity;
      });
    }
  }, {
    key: "_handleScrolling",
    value: function _handleScrolling() {
      var imageContainer = document.getElementById('projectImageContainer');
      imageContainer.addEventListener('scroll', function (event) {
        var scrollPosition = event.currentTarget.scrollTop;

        _state.state.notifyPropertyChange(scrollPosition);

        this._updateOpacity(scrollPosition);
      }.bind(this));
    }
  }, {
    key: "_updateDOMPosition",
    value: function _updateDOMPosition() {
      _toConsumableArray(document.getElementsByClassName('project-image')).forEach(function (image, index) {
        _state.state.projects[index].position = image.offsetTop;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return "\n\t\t\t<ul class=\"image-container\" id=\"projectImageContainer\">\n\t\t\t\t".concat(_state.state.projects.reduce(function (html, project, index) {
        html += "<li><img class=\"project-image\" data-index=".concat(index, " style=\"opacity:").concat(project.opacity, "\"  src=\"").concat(project.link, "\" /></li>");
        return html;
      }, ''), "\n\t\t\t\t<li><div class=\"empty-image\"></div></li>\n\t\t\t</ul>\n\t\t");
    }
  }]);

  return SideFooter;
}(_index.default);

exports.default = SideFooter;

},{"./lib/index":10,"./state":11}],6:[function(require,module,exports){
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
      return [_MainPage.default, _Contact.default, _ProjectDescription.default, _SideFooter2.default, _SideFooter.default];
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
          document.getElementById('projectDescription').className += ' vertical-line-project ';
          (0, _util.scroll)(second_page_position);
          (0, _util.fadeIn)(this.secondPageElementId);
        }

        if (!_state.state.didScroll.thirdPage && scroll_position >= third_page_position) {
          _state.state.didScroll.thirdPage = true;
          (0, _util.scroll)((0, _util.scrollHeight)(), third_page_position);
          (0, _util.fadeIn)(this.thirdPageElementId);
        }
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      return "\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div id=\"firstPage\"  class=\"row first-page\">\n\t\t\t\t\t<div class=\"col-md-12 main-page\">\n\t\t\t\t\t\t<div data-component=\"MainPage\"></div>\t\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div id=\"secondPage\" class=\"row second-page\">\n\t\t\t\t\t<div class='col-md-7' data-component=\"ProjectDescription\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-5\" data-component=\"SideFooter\" data-parameter-title=\"Project\">\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div id=\"thirdPage\"  class=\"row third-page\">\n\t\t\t\t\t\t<div class='col-md-12' data-component=\"Contact\"></div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t";
    }
  }]);

  return App;
}(_index.default);

exports.default = App;

},{"./Contact":1,"./MainPage":2,"./ProjectDescription":4,"./SideFooter":5,"./SideFooter2":6,"./lib/index":10,"./state":11,"./util":12}],8:[function(require,module,exports){
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
  },
  projects: [{
    title: "TASK ORGANIZER",
    description: "A TASK ORGANIZER WEB APPLICATION WITH EMBER JS FRONTEND AND DJANGO REST FRAMEWORK,INTEGRATING MYSQL AS DATABASE SUPPORT.",
    skills: "DJANGO REST, EMBER JS, MYSQL, HEROKU, BOOTSTRAP",
    link: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/how-to-setup-website.jpg",
    show: true,
    position: 0,
    opacity: 1,
    upper_end: 282
  }, {
    title: "OFFLINE FIRST REDDIT VIEWER",
    description: "THIS REACT APP UTILIZES SERVICE WORKER AND CACHING HEAVILY TO GIVE OFFLINE FIRST EXPERIENCE FOR A SUBREDDIT(REDDIT SUB FORUM).CURRENTLY, I AM WORKING ON MAKING IT MORE READER FRIENDLY AND WRITER FRIENDLY.",
    skills: "REACT , SERVICE WORKER , OAUTH2 . HEROKU, BOOTSTRAP",
    link: "https://cdn.blessthisstuff.com/imagens/stuff/clear-app-for-iphone.jpg",
    show: false,
    position: 282,
    opacity: 0.2,
    upper_end: 626
  }, {
    title: "CHANGE MY VIEW READER",
    description: "A REDDIT CLIENT MADE USING REACT NATIVE WHICH ALLOWS USER ADD POST AND PERFORM ACTION ON THE APP(AUTHENTICATED USING OAUTH2)",
    skills: "REACT NATIVE , OAUTH2 , HEROKU",
    link: "https://phandroid.s3.amazonaws.com/wp-content/uploads/2016/04/Boost-for-reddit-android.jpg",
    show: false,
    position: 626,
    opacity: 0.05,
    upper_end: 1000
  }],
  notifyPropertyChange: function notifyPropertyChange() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29udGFjdC5qcyIsInNyYy9NYWluUGFnZS5qcyIsInNyYy9OYXZpZ2F0aW9uLmpzIiwic3JjL1Byb2plY3REZXNjcmlwdGlvbi5qcyIsInNyYy9TaWRlRm9vdGVyLmpzIiwic3JjL1NpZGVGb290ZXIyLmpzIiwic3JjL2FwcC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9saWIvSW5kZXguanMiLCJzcmMvbGliL2luZGV4LmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFWjtBQUNQO0FBaUNBOzs7O0VBcENtQyxlOzs7Ozs7Ozs7Ozs7QUNGckM7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsUTs7Ozs7Ozs7Ozs7OztpQ0FDUjtBQUNYLGFBQU8sQ0FBQyxtQkFBRCxDQUFQO0FBQ0E7Ozs2QkFDTztBQUNQO0FBY0E7Ozs7RUFuQm9DLGM7Ozs7Ozs7Ozs7OztBQ0h0Qzs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFU7Ozs7Ozs7Ozs7Ozs7d0NBQ0Q7QUFDbEIsV0FBSyxtQkFBTCxHQUEyQixRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUEzQjtBQUNBLFdBQUssa0JBQUwsR0FBMEIsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBMUI7O0FBQ0EsV0FBSyxpQkFBTDtBQUNBOzs7d0NBR2tCO0FBQUE7O0FBQ2xCLHlCQUFJLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxtQkFBaEMsQ0FBSixFQUEwRCxPQUExRCxDQUFrRSxVQUFBLE1BQU0sRUFBRTtBQUN0RSxRQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFnQyxVQUFTLEtBQVQsRUFBZTtBQUNq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QUFDLFFBQUQsQ0FBcEI7QUFDQTtBQUNELEdBUEQ7O0FBU0EsRUFBQSxXQUFXO0FBQ1gsQ0FiTTs7OztBQWVBLElBQU0sTUFBTSxHQUFHLFNBQVQsTUFBUyxDQUFDLE9BQUQsRUFBcUI7QUFBQSxNQUFaLE9BQVksdUVBQUosQ0FBSTtBQUMxQyxNQUFNLElBQUksR0FBRyxJQUFiLENBRDBDLENBRTFDOztBQUNBLE1BQU0sWUFBWSxHQUFHLENBQXJCO0FBRUEsTUFBSSxPQUFPLEdBQUcsT0FBZDs7QUFFQSxNQUFNLEtBQUssR0FBRyxTQUFSLEtBQVEsR0FBSTtBQUNqQixJQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsT0FBZCxHQUF3QixPQUF4QjtBQUNBLElBQUEsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFwQjtBQUNBLFFBQU0sUUFBUSxHQUFJLHFCQUFxQixDQUFDLEtBQUQsQ0FBdkM7O0FBQ0EsUUFBRyxPQUFPLElBQUksWUFBZCxFQUEyQjtBQUMxQixNQUFBLG9CQUFvQixDQUFDLFFBQUQsQ0FBcEI7QUFDQTtBQUNELEdBUEQ7O0FBU0EsRUFBQSxLQUFLO0FBRUwsQ0FsQk0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvSW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgSW5kZXh7XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgbWFyZ2luLXRvcC00ICBtYXJnaW4tbGVmdC00IHBhZGRpbmctcmlnaHQtNCBwYWRkaW5nLWxlZnQtNFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuXHRcdFx0XHRcdFx0PHA+SSBhbSBGdWxsc3RhY2sgZGV2ZWxvcGVyIHdobyBjYW4gaGVscCB5b3Ugd2l0aCB5b3VyIGRpZ2l0YWwgbmVlZHMuSSBjYW4gaGVscCB5b3Ugd2l0aCB0aGUgY3V0dGluZyBlZGdlIHRlY2hub2xvZ3kuIFlvdSBjYW4gY29udGFjdCBtZSBoZXJlIFxuXHRcdFx0XHRcdFx0b3IgZW1haWwgYXQgYWJkdWxsYWgyODkxQGdtYWlsLmNvbTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTUgbG9naW4tZm9ybVwiPlxuXHRcdFx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsPk5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LWxnIFwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+RW1haWw8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LWxnIFwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+Q29tbWVudDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgXCI+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGBcblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBJbmRleHtcblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbTmF2aWdhdGlvbl07XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgaW50cm9kdWN0aW9uXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibmFtZS1wYWQgY29sLW1kLTVcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ0aXRsZVwiPjxzdHJvbmc+SGksPC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxwPjxzdHJvbmc+V2VsY29tZSB0byB0aGlzIGNvcm5lciBvZiB0aGUgaW50ZXJuZXQ8L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0PHA+PHN0cm9uZz5NeSBOYW1lIGlzIEFiZHVsbGFoIFJhaG1hbjwvc3Ryb25nPjwvcD5cblx0XHRcdFx0XHQ8cD48c3Ryb25nPkhvdyBjYW4gSSBoZWxwIHlvdSB0b2RheTwvc3Ryb25nPjwvcD5cblx0XHRcdFx0XHQ8ZGl2IGRhdGEtY29tcG9uZW50PVwiTmF2aWdhdGlvblwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0YDtcblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtmYWRlSW4sc2Nyb2xsLHNjcm9sbEhlaWdodH0gZnJvbSAgJy4vdXRpbCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuc2Vjb25kUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmRQYWdlJyk7XG5cdFx0dGhpcy50aGlyZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcmRQYWdlJyk7XG5cdFx0dGhpcy5fYWRkRXZlbnRMaXN0ZW5lcigpO1xuXHR9XG5cblxuXHRfYWRkRXZlbnRMaXN0ZW5lcigpe1xuXHRcdFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZpZ2F0aW9uLWJ1dHRvbicpXS5mb3JFYWNoKGJ1dHRvbj0+e1xuXHRcdCAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdFx0Y29uc3QgcGFnZU5hbWUgPSBldmVudC5zcmNFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uYXZpZ2F0aW9uJyl8fGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hdmlnYXRpb24nKTtcblx0XHRcdCAgICBcdGNvbnN0IHBvc2l0aW9uID0gZXZlbnQuc3JjRWxlbWVudC5vZmZzZXRUb3AgfHwgZXZlbnQuY3VycmVudFRhcmdldC5vZmZzZXRUb3A7XG5cdFx0XHRcdFxuXHRcdFx0ICAgIFx0Ly9zZWN0aW9uIHBvc2l0aW9uXG5cdFx0XHRcdGNvbnN0IHNlY29uZF9wYWdlX3Bvc2l0aW9uICA9KCAoMy8xMCkgKiBzY3JvbGxIZWlnaHQoKSkgO1xuXHRcdFx0XHRjb25zdCB0aGlyZF9wYWdlX3Bvc2l0aW9uID0gKDgvMTApICogc2Nyb2xsSGVpZ2h0KCk7XG5cdFx0XHRcdFxuXHRcdFx0XHRzdGF0ZS5kaWRTY3JvbGxbcGFnZU5hbWVdID0gdHJ1ZTtcbmNvbnNvbGUubG9nKHBhZ2VOYW1lKVxuXHRcdFx0ICAgIFx0c3dpdGNoKHBhZ2VOYW1lKXtcblx0XHRcdFx0XHRjYXNlICdzZWNvbmRQYWdlJzpcblx0XHRcdFx0XHRcdHNjcm9sbChzZWNvbmRfcGFnZV9wb3NpdGlvbik7XG5cdFx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGVzY3JpcHRpb24nKS5jbGFzc05hbWUrPScgdmVydGljYWwtbGluZS1wcm9qZWN0ICc7XG5cdFx0XHRcdFx0XHQgYnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAndGhpcmRQYWdlJzpcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0c2Nyb2xsKHRoaXJkX3BhZ2VfcG9zaXRpb24pO1xuXHRcdFx0XHRcdFx0ZmFkZUluKHRoaXMudGhpcmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Rm9vdGVyJykuY2xhc3NOYW1lICs9JyBjb250YWN0LWZvb3RlciAnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdCAgICB9LmJpbmQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cdHJlbmRlcigpe1xuXG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBkYXRhLW5hdmlnYXRpb249XCJhYm91dFwiIGNsYXNzPVwiY29sLW1kLTQgY3Vyc29yLXBvaW50ZXIgIG5hdmlnYXRpb24tYnV0dG9uXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cImljb25cIiBzcmM9XCJjc3MvaWNvbnMvYXJjaGl0ZWN0LnN2Z1wiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGRhdGEtbmF2aWdhdGlvbj1cInNlY29uZFBhZ2VcIiBjbGFzcz1cImNvbC1tZC00IGN1cnNvci1wb2ludGVyIG5hdmlnYXRpb24tYnV0dG9uXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cImljb25cIiBzcmM9XCJjc3MvaWNvbnMvcHJvamVjdG9yLXNjcmVlbi5zdmdcIi8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBkYXRhLW5hdmlnYXRpb249XCJ0aGlyZFBhZ2VcIiBjbGFzcz1cImNvbC1tZC00IGN1cnNvci1wb2ludGVyIG5hdmlnYXRpb24tYnV0dG9uXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cImljb25cIiBzcmM9XCJjc3MvaWNvbnMvbGlnaHRidWxiLnN2Z1wiLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHtmYWRlSW59IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3REZXNjcmlwdGlvbiBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHN0YXRlLm5vdGlmeVByb3BlcnR5Q2hhbmdlID0gKHNjcm9sbFBvc2l0aW9uKT0+e1xuXHRcdFx0Y29uc29sZS5sb2coe3Njcm9sbFBvc2l0aW9ufSk7XG5cdFx0XHR0aGlzLl91cGRhdGVQcm9qZWN0VGV4dChzY3JvbGxQb3NpdGlvbik7XG5cdFx0XHR0aGlzLnJlbmRlcigpO1x0XHRcblx0XHR9O1xuXHR9XG5cdFxuXHQvKipcblx0ICogX3VwZGF0ZVByb2plY3RUZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSBzY3JvbGxQb3NpdGlvblxuXHQgKi9cblx0X3VwZGF0ZVByb2plY3RUZXh0KHNjcm9sbFBvc2l0aW9uKXtcblx0XHRbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC10ZXh0JyldLmZvckVhY2goKHRleHQsaW5kZXgpPT57XG5cdFx0XHRjb25zdCBwcm9qZWN0X2RvbSA9IHN0YXRlLnByb2plY3RzW2luZGV4XTtcblx0XHRcdGNvbnN0IHNob3dUZXh0ID0gcHJvamVjdF9kb20udXBwZXJfZW5kID4gc2Nyb2xsUG9zaXRpb24gJiYgcHJvamVjdF9kb20ucG9zaXRpb24gPD1zY3JvbGxQb3NpdGlvbjtcblx0XHRcdHRleHQuc3R5bGUuZGlzcGxheSA9IHNob3dUZXh0ID8gJ2Jsb2NrJyA6ICdub25lJzsgXG5cdFx0XHRjb25zb2xlLmxvZyhwcm9qZWN0X2RvbS5vcGFjaXR5KVxuXHRcdFx0dGV4dC5zdHlsZS5vcGFjaXR5ID0gcHJvamVjdF9kb20ub3BhY2l0eTtcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uIHNpZGUtZm9vdGVyXCIgaWQ9XCJwcm9qZWN0RGVzY3JpcHRpb25cIj5cblx0XHRcdFx0JHtcblx0XHRcdFx0XHRzdGF0ZS5wcm9qZWN0cy5yZWR1Y2UoKGh0bWwscHJvamVjdCk9Pntcblx0XHRcdFx0XHRcdGNvbnN0IHNob3dSb3cgPSBwcm9qZWN0LnNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgcm93ID0gYFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93IHByb2plY3QtdGV4dFwiIHN0eWxlPVwiZGlzcGxheTogJHtzaG93Um93fVwiID5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDM+JHtwcm9qZWN0LnRpdGxlfTwvaDM+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+JHtwcm9qZWN0LnNraWxsc308L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0YDtcblx0XHRcdFx0XHRcdGh0bWwrPXJvdyArICdcXG4nO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRyZXR1cm4gaHRtbDtcblxuXHRcdFx0XHRcdH0sJycpXG5cblx0XHRcdFx0fVxuXG5cblx0XHRcdDwvZGl2PlxuXHRcdGA7XG5cblx0fVxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRm9vdGVyIGV4dGVuZHMgSW5kZXh7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5faGFuZGxlU2Nyb2xsaW5nKCk7XG5cblx0XHRjb25zb2xlLmxvZyhzdGF0ZSlcblxuXHR9XG5cdFxuXHRfdXBkYXRlT3BhY2l0eShzY3JvbGxQb3NpdGlvbil7XG5cblx0XHRcblxuXHRcdFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbmRleF0nKV0uZm9yRWFjaChjdXJyZW50RG9tPT57XG5cdFx0XHRjb25zdCBpbmRleCA9IGN1cnJlbnREb20uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gc3RhdGUucHJvamVjdHNbaW5kZXhdO1xuXG5cdFx0XHRjb25zdCB5ID0gKHgscG9zaXRpb24pPT57XG5cdFx0XHRcdGNvbnN0IHJhbmdlID0gcHJvamVjdC51cHBlcl9lbmQgLSBwcm9qZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRjb25zdCBvcGFjaXR5ID0gLU1hdGgucG93KCh4LXBvc2l0aW9uKS9yYW5nZSwyKSArIDE7XG5cdFx0XHRcdHJldHVybiBvcGFjaXR5ID4gMC4zID8gb3BhY2l0eTogMC4yO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSBwYXJzZUludChwcm9qZWN0LnBvc2l0aW9uKTtcblx0XHRcdGNvbnN0IHBvc2l0aW9uSGlnaGVzdE9wYWNpdHkgPSAgcHJvamVjdC5wb3NpdGlvbjtcblx0XHRcdGNvbnN0IGN1cnJlbnRPcGFjaXR5ID0geShzY3JvbGxQb3NpdGlvbixwb3NpdGlvbkhpZ2hlc3RPcGFjaXR5KTtcbmNvbnNvbGUubG9nKGN1cnJlbnRPcGFjaXR5KVxuXHRcdFx0Y3VycmVudERvbS5zdHlsZS5vcGFjaXR5ID0gY3VycmVudE9wYWNpdHk7XG5cdFx0XHRwcm9qZWN0Lm9mZnNldCA9IGN1cnJlbnRPcGFjaXR5O1xuXHRcdFx0cHJvamVjdC5vcGFjaXR5ID0gY3VycmVudE9wYWNpdHk7XG5cdH0pXG5cblx0fVxuXG5cblx0X2hhbmRsZVNjcm9sbGluZygpe1xuXHRcdGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RJbWFnZUNvbnRhaW5lcicpOyBcblx0XHRcblx0XHRpbWFnZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5zY3JvbGxUb3A7XG5cdFx0XHRzdGF0ZS5ub3RpZnlQcm9wZXJ0eUNoYW5nZShzY3JvbGxQb3NpdGlvbik7XHRcblx0XHRcdHRoaXMuX3VwZGF0ZU9wYWNpdHkoc2Nyb2xsUG9zaXRpb24pO1xuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0fVxuXHRcblx0X3VwZGF0ZURPTVBvc2l0aW9uKCl7XG5cdFx0Wy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QtaW1hZ2UnKV0uZm9yRWFjaCgoaW1hZ2UsaW5kZXgpPT57XG5cdFx0XHRzdGF0ZS5wcm9qZWN0c1tpbmRleF0ucG9zaXRpb24gPSBpbWFnZS5vZmZzZXRUb3A7XG5cdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8dWwgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIiBpZD1cInByb2plY3RJbWFnZUNvbnRhaW5lclwiPlxuXHRcdFx0XHQke1xuXHRcdFx0XHRcdHN0YXRlLnByb2plY3RzLnJlZHVjZSgoaHRtbCxwcm9qZWN0LGluZGV4KT0+e1xuXHRcdFx0XHRcdFx0aHRtbCArPSBgPGxpPjxpbWcgY2xhc3M9XCJwcm9qZWN0LWltYWdlXCIgZGF0YS1pbmRleD0ke2luZGV4fSBzdHlsZT1cIm9wYWNpdHk6JHtwcm9qZWN0Lm9wYWNpdHl9XCIgIHNyYz1cIiR7cHJvamVjdC5saW5rfVwiIC8+PC9saT5gO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gaHRtbDtcblx0XHRcdFx0XHR9LCcnKVxuXHRcdFx0XHR9XG5cdFx0XHRcdDxsaT48ZGl2IGNsYXNzPVwiZW1wdHktaW1hZ2VcIj48L2Rpdj48L2xpPlxuXHRcdFx0PC91bD5cblx0XHRgO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4ICBmcm9tICcuL2xpYi9pbmRleCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZUZvb3RlcjIgZXh0ZW5kcyBJbmRleHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYDxkaXYgaWQ9XCJjb250YWN0Rm9vdGVyXCIgIGNsYXNzPVwic2lkZS1mb290ZXJcIj5Db250YWN0PC9kaXY+YDtcblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAgJy4vbGliL2luZGV4JztcbmltcG9ydCB7c2Nyb2xsLGZhZGVJbixzY3JvbGxIZWlnaHR9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vTWFpblBhZ2UnO1xuaW1wb3J0IFNpZGVGb290ZXIgZnJvbSAnLi9TaWRlRm9vdGVyJztcbmltcG9ydCBTaWRlRm9vdGVyMiBmcm9tICcuL1NpZGVGb290ZXIyJztcbmltcG9ydCBQcm9qZWN0RGVzY3JpcHRpb24gZnJvbSAnLi9Qcm9qZWN0RGVzY3JpcHRpb24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JzsgXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kUGFnZScpO1xuXHRcdHRoaXMudGhpcmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXJkUGFnZScpO1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXHR9XG5cblxuXG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW01haW5QYWdlLENvbnRhY3QsIFByb2plY3REZXNjcmlwdGlvbixTaWRlRm9vdGVyMixTaWRlRm9vdGVyXTtcblx0fVxuXG5cdFxuXG5cdF9oYW5kbGVTY3JvbGxpbmcoKXtcblx0XHQvL3NlY3Rpb24gcG9zaXRpb25cblx0XHRjb25zdCBzZWNvbmRfcGFnZV9wb3NpdGlvbiAgPSggKDcvMTApICogc2Nyb2xsSGVpZ2h0KCkpICsgNTA7XG5cdFx0Y29uc3QgdGhpcmRfcGFnZV9wb3NpdGlvbiA9ICg5LzEwKSAqIHNjcm9sbEhlaWdodCgpO1xuXHRcdFxuXG5cdFx0Ly9zYXZpbmcgdGhpcyBwb3NpdGlvbm4gZm9yIGNoYW5nZVxuXHRcdGxldCBwcmV2aW91c19wb3NpdGlvbiA9IDA7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbigpe1xuXHRcdFx0XHQvL2dldCB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9uIFxuXHRcdFx0XHRsZXQgc2Nyb2xsX3Bvc2l0aW9uID0gIHdpbmRvdy5zY3JvbGxZO1xuXHRcdFx0XG5cdFx0XHRcdGxldCBjaGFuZ2UgPSBzY3JvbGxfcG9zaXRpb24gLSBwcmV2aW91c19wb3NpdGlvbjtcdFxuIFx0XHRcdFx0XG5cdFx0XHRcdHByZXZpb3VzX3Bvc2l0aW9uID0gc2Nyb2xsX3Bvc2l0aW9uO1xuXG5cdFx0XHRcdFxuXHRcdFx0XHRpZighc3RhdGUuZGlkU2Nyb2xsLnNlY29uZFBhZ2UgICYmIGNoYW5nZSA+IDApe1xuXHRcdFx0XHRcdHN0YXRlLmRpZFNjcm9sbC5zZWNvbmRQYWdlICA9IHRydWU7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3REZXNjcmlwdGlvbicpLmNsYXNzTmFtZSs9JyB2ZXJ0aWNhbC1saW5lLXByb2plY3QgJztcblxuXHRcdFx0XHRcdHNjcm9sbChzZWNvbmRfcGFnZV9wb3NpdGlvbiApO1xuXHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighc3RhdGUuZGlkU2Nyb2xsLnRoaXJkUGFnZSAmJiBzY3JvbGxfcG9zaXRpb24gPj0gIHRoaXJkX3BhZ2VfcG9zaXRpb24gKXtcblx0XHRcdFx0XHRzdGF0ZS5kaWRTY3JvbGwudGhpcmRQYWdlID0gdHJ1ZTtcblx0XHRcdFx0XHRzY3JvbGwoc2Nyb2xsSGVpZ2h0KCksdGhpcmRfcGFnZV9wb3NpdGlvbik7XG5cdFx0XHRcdFx0ZmFkZUluKHRoaXMudGhpcmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0fVxuXG5cdFxuXHRcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBpZD1cImZpcnN0UGFnZVwiICBjbGFzcz1cInJvdyBmaXJzdC1wYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBtYWluLXBhZ2VcIj5cblx0XHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJNYWluUGFnZVwiPjwvZGl2Plx0XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBpZD1cInNlY29uZFBhZ2VcIiBjbGFzcz1cInJvdyBzZWNvbmQtcGFnZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9J2NvbC1tZC03JyBkYXRhLWNvbXBvbmVudD1cIlByb2plY3REZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNVwiIGRhdGEtY29tcG9uZW50PVwiU2lkZUZvb3RlclwiIGRhdGEtcGFyYW1ldGVyLXRpdGxlPVwiUHJvamVjdFwiPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgaWQ9XCJ0aGlyZFBhZ2VcIiAgY2xhc3M9XCJyb3cgdGhpcmQtcGFnZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz0nY29sLW1kLTEyJyBkYXRhLWNvbXBvbmVudD1cIkNvbnRhY3RcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0YFxuXG5cdH1cblx0XG5cblxufVxuIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuXHRuZXcgQXBwKCdhcHAnKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXh7XG5cdC8qKlxuXHQgKiBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiBAcGFyYW0gY29tcG9uZW50IGNvbXBvbmVudCBuYW1lXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnQpe1xuXHRcdHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG5cdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkubWFwKHF1ZXJ5U2VsZWN0b3I9Pntcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXG5cdFx0fSlcblxuXHRcdFByb21pc2UuYWxsKHByb21pc2VzKVxuXHRcdFx0LnRoZW4oKCk9Pntcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgID0gdGhpcy5yZW5kZXIoKTtcblx0XHRcdFx0dGhpcy5sb2FkQ2hpbGRWaWV3cygpO1xuXHRcdFx0XHR0aGlzLmluc2VydEVsZW1lbnQodGVtcGxhdGUpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcblx0XHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogaG9vayBmb3IgdGhpbmdzIGFyZSBsb2FkZWRcblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0LyoqXG5cdCAqIHBvcHVsYXRpbmcgdGhlIGlubmVyaHRtbFxuXHQgKlxuXHQgKiBAcGFyYW0gdGVtcGxhdGVcblx0ICovXG5cdGluc2VydEVsZW1lbnQodGVtcGxhdGUpe1xuXHRcdHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5mb3JFYWNoKGNvbXBvbmVudEluc3RhbmNlPT57XG5cdFx0XHRjb21wb25lbnRJbnN0YW5jZS5pbm5lckhUTUwgPSAgdGVtcGxhdGU7XG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gJyc7XG5cblx0fVxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtdO1xuXHRcdFxuXHR9XG5cdGNvbXBvbmVudFNlbGVjdG9yKCl7XG5cdFx0cmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jb21wb25lbnQ9XCIke3RoaXMuY29tcG9uZW50fVwiXWApXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBsb2FkaW5nIGxpc3RlZCBjaGlsZCB2aWV3c1xuXHQgKi9cblx0bG9hZENoaWxkVmlld3MoKXtcblx0XHRpZighQXJyYXkuaXNBcnJheSh0aGlzLmNoaWxkVmlld3MoKSApKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmNoaWxkVmlld3MoKS5mb3JFYWNoKHZpZXc9Pntcblx0XHRcdGxldCBjbGFzc05hbWUgPSB2aWV3LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0bmV3IHZpZXcoYCR7Y2xhc3NOYW1lfWApO1xuXHRcdH0pXG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4e1xuXHQvKipcblx0ICogY29uc3RydWN0b3Jcblx0ICpcblx0ICogQHBhcmFtIGNvbXBvbmVudCBjb21wb25lbnQgbmFtZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29tcG9uZW50KXtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5jb21wb25lbnRTZWxlY3RvcigpLm1hcChxdWVyeVNlbGVjdG9yPT57XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblxuXHRcdH0pXG5cblx0XHRQcm9taXNlLmFsbChwcm9taXNlcylcblx0XHRcdC50aGVuKCgpPT57XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlICA9IHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdHRoaXMubG9hZENoaWxkVmlld3MoKTtcblx0XHRcdFx0dGhpcy5pbnNlcnRFbGVtZW50KHRlbXBsYXRlKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIGhvb2sgZm9yIHRoaW5ncyBhcmUgbG9hZGVkXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdC8qKlxuXHQgKiBwb3B1bGF0aW5nIHRoZSBpbm5lcmh0bWxcblx0ICpcblx0ICogQHBhcmFtIHRlbXBsYXRlXG5cdCAqL1xuXHRpbnNlcnRFbGVtZW50KHRlbXBsYXRlKXtcblx0XHR0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkuZm9yRWFjaChjb21wb25lbnRJbnN0YW5jZT0+e1xuXHRcdFx0Y29tcG9uZW50SW5zdGFuY2UuaW5uZXJIVE1MID0gIHRlbXBsYXRlO1xuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuICcnO1xuXG5cdH1cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbXTtcblx0XHRcblx0fVxuXHRjb21wb25lbnRTZWxlY3Rvcigpe1xuXHRcdHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY29tcG9uZW50PVwiJHt0aGlzLmNvbXBvbmVudH1cIl1gKV07XG5cdH1cblxuXHQvKipcblx0ICogbG9hZGluZyBsaXN0ZWQgY2hpbGQgdmlld3Ncblx0ICovXG5cdGxvYWRDaGlsZFZpZXdzKCl7XG5cdFx0aWYoIUFycmF5LmlzQXJyYXkodGhpcy5jaGlsZFZpZXdzKCkgKSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGlsZFZpZXdzKCkuZm9yRWFjaCh2aWV3PT57XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gdmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTtcblx0XHRcdG5ldyB2aWV3KGAke2NsYXNzTmFtZX1gKTtcblx0XHR9KVxuXHR9XG59XG4iLCJleHBvcnQgIGNvbnN0IHN0YXRlICA9ICB7XG5cdGRpZFNjcm9sbCA6IHthYm91dCA6IGZhbHNlLCBzZWNvbmRQYWdlIDogZmFsc2UgLCB0aGlyZFBhZ2UgOiBmYWxzZX0sXG5cdHByb2plY3RzOiBbe1xuXHRcdHRpdGxlOiBcIlRBU0sgT1JHQU5JWkVSXCIsXG5cdFx0ZGVzY3JpcHRpb24gOlwiQSBUQVNLIE9SR0FOSVpFUiBXRUIgQVBQTElDQVRJT04gV0lUSCBFTUJFUiBKUyBGUk9OVEVORCBBTkQgREpBTkdPIFJFU1QgRlJBTUVXT1JLLElOVEVHUkFUSU5HIE1ZU1FMIEFTIERBVEFCQVNFIFNVUFBPUlQuXCIsXG5cdFx0c2tpbGxzOiBcIkRKQU5HTyBSRVNULCBFTUJFUiBKUywgTVlTUUwsIEhFUk9LVSwgQk9PVFNUUkFQXCIsXG5cdFx0bGluayA6IFwiaHR0cHM6Ly9jZG4uY29sb3JsaWIuY29tL3dwL3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy8yL2hvdy10by1zZXR1cC13ZWJzaXRlLmpwZ1wiLCBcdFxuXHRcdHNob3cgOiB0cnVlLFxuXHRcdHBvc2l0aW9uOiAwLFxuXHRcdG9wYWNpdHk6IDEsXG5cdFx0dXBwZXJfZW5kOiAyODJcblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIk9GRkxJTkUgRklSU1QgUkVERElUIFZJRVdFUlwiLFxuXHRcdGRlc2NyaXB0aW9uIDpcIlRISVMgUkVBQ1QgQVBQIFVUSUxJWkVTIFNFUlZJQ0UgV09SS0VSIEFORCBDQUNISU5HIEhFQVZJTFkgVE8gR0lWRSBPRkZMSU5FIEZJUlNUIEVYUEVSSUVOQ0UgRk9SIEEgU1VCUkVERElUKFJFRERJVCBTVUIgRk9SVU0pLkNVUlJFTlRMWSwgSSBBTSBXT1JLSU5HIE9OIE1BS0lORyBJVCBNT1JFIFJFQURFUiBGUklFTkRMWSBBTkQgV1JJVEVSIEZSSUVORExZLlwiLFxuXHRcdHNraWxsczogXCJSRUFDVCAsIFNFUlZJQ0UgV09SS0VSICwgT0FVVEgyIC4gSEVST0tVLCBCT09UU1RSQVBcIixcblx0XHRsaW5rIDogXCJodHRwczovL2Nkbi5ibGVzc3RoaXNzdHVmZi5jb20vaW1hZ2Vucy9zdHVmZi9jbGVhci1hcHAtZm9yLWlwaG9uZS5qcGdcIixcblx0XHRzaG93IDogZmFsc2UsXG5cdFx0cG9zaXRpb24gOiAyODIsXG5cdFx0b3BhY2l0eTogMC4yLFxuXHRcdHVwcGVyX2VuZDogNjI2XG5cblx0fSxcblx0e1xuXHRcdHRpdGxlOiBcIkNIQU5HRSBNWSBWSUVXIFJFQURFUlwiLFxuXHRcdGRlc2NyaXB0aW9uIDpcIkEgUkVERElUIENMSUVOVCBNQURFIFVTSU5HIFJFQUNUIE5BVElWRSBXSElDSCBBTExPV1MgVVNFUiBBREQgUE9TVCBBTkQgUEVSRk9STSBBQ1RJT04gT04gVEhFIEFQUChBVVRIRU5USUNBVEVEIFVTSU5HIE9BVVRIMilcIixcblx0XHRza2lsbHM6IFwiUkVBQ1QgTkFUSVZFICwgT0FVVEgyICwgSEVST0tVXCIsXG5cdFx0bGluayA6IFwiaHR0cHM6Ly9waGFuZHJvaWQuczMuYW1hem9uYXdzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNC9Cb29zdC1mb3ItcmVkZGl0LWFuZHJvaWQuanBnXCIsXG5cdFx0c2hvdyA6IGZhbHNlLFxuXHRcdHBvc2l0aW9uIDogNjI2LFxuXHRcdG9wYWNpdHk6IDAuMDUsXG5cdFx0dXBwZXJfZW5kOiAxMDAwXG5cdH1dLFxuXHRub3RpZnlQcm9wZXJ0eUNoYW5nZSgpe31cbn1cbiIsImV4cG9ydCBjb25zdCBzY3JvbGxIZWlnaHQgPSAoKT0+e1xuXHRyZXR1cm4gTWF0aC5tYXgoIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCApO1xufVxuXG5leHBvcnQgY29uc3Qgc2Nyb2xsID0gKGxhc3RfcG9zdGlvbixpbml0aWFsX3Bvc2l0aW9uPTApPT57XG5cdGNvbnN0IHJhdGUgPSAxNTtcblx0bGV0IHBvc2l0aW9uID0gaW5pdGlhbF9wb3NpdGlvbiA7XG5cdGNvbnN0IHJlcGVhdE9mdGVuID0gKCk9Pntcblx0XHRwb3NpdGlvbiA9IHBvc2l0aW9uK3JhdGU7XG5cdFx0d2luZG93LnNjcm9sbCgwLHBvc2l0aW9uKTtcblx0XHRjb25zdCBnbG9iYWxJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXBlYXRPZnRlbik7XG5cdFx0aWYocG9zaXRpb24gPj0gbGFzdF9wb3N0aW9uKXtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdsb2JhbElEKTtcblx0XHR9XG5cdH1cblxuXHRyZXBlYXRPZnRlbigpO1xufVxuXG5leHBvcnQgY29uc3QgZmFkZUluID0gKGVsZW1lbnQsaW5pdGlhbD0wKT0+e1xuXHRjb25zdCByYXRlID0gMC4wNTtcblx0Ly9maW5hbCBvcGFjaXR5IGNhbid0IGJlIGJpZ2dlciB0aGFuIDFcblx0Y29uc3QgZmluYWxPcGFjaXR5ID0gMTtcblxuXHRsZXQgb3BhY2l0eSA9IGluaXRpYWw7XG5cblx0Y29uc3QgX3Rhc2sgPSAoKT0+e1xuXHRcdGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG5cdFx0b3BhY2l0eSA9IG9wYWNpdHkgKyByYXRlOyBcblx0XHRjb25zdCBnbG9iYWxJRCA9ICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3Rhc2spO1xuXHRcdGlmKG9wYWNpdHkgPj0gZmluYWxPcGFjaXR5KXtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdsb2JhbElEKVxuXHRcdH1cblx0fVxuXG5cdF90YXNrKCk7XG5cbn1cblxuXG4iXX0=
