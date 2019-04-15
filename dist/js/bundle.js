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
      return "\n\t\t\t<div class=\"row margin-top-4  margin-left-4 padding-right-4 padding-left-4\">\n\t\t\t\t<p>Currently Working <strong>AT&T</strong> as an <strong>Web Developer(Under Contract, July 2016 to Present)</strong></p>\n\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Developed and maintained complex web applications combining several of the AT&T internal automation tools. Written in JavaScript, Perl, and PHP using Ember.js and Mojolicious frameworks.</li>\n\t\t\t\t\t<li>Integrated 25 SQL Server databases with over 200 tables in a complex network of ticketing system applications that controlled security permissions for thousands of users, user groups, and company clients from around the world.</li>\n\t\t\t\t\t<li>Consistently met deadlines and repeatedly exceeded expectations to effectively deliver in an Agile environment using JIRA and four-week development lifecycles.</li>\n\t\t\t\t\t<li>Evaluated code for efficiency, debugging, and quality assurance using Crucible on a daily basis</li>\n\t\t\t\t\t<li>Improved development time substantially by designing automation scripts for faster development testing.</li>\n\t\t\t\t</ul>\n\t\t\t\n\t\t\t</div>\n\t\t";
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
      return "\n\t\t\t<div class=\"row introduction introduction-sm\">\n\n\t\t\t<div class=\" col-lg-1\"></div>\n\t\t\t<div class=\"name-pad col-lg-6   col-sm-10\">\n\t\t\t\t<p class=\"title\"><strong>Hi,</strong></p>\n\t\t\t\t\t<p><strong>Welcome to this corner of the internet</strong></p>\n\t\t\t\t\t<p><strong>My Name is Abdullah Rahman</strong></p>\n\t\t\t\t\t<p><strong>How can I help you today</strong></p>\n\t\t\t\t\t<div data-component=\"Navigation\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t";
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
          var position = event.srcElement.offsetTop || event.currentTarget.offsetTop;
          _state.state.didScroll[pageName] = true;

          switch (pageName) {
            case 'secondPage':
              (0, _util.scroll)(_state.state.position.secondPage - 20);
              (0, _util.fadeIn)(this.secondPageElementId);
              break;

            case 'thirdPage':
              (0, _util.fadeIn)(this.secondPageElementId);
              (0, _util.scroll)(_state.state.position.thirdPage + 2000);
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
      return "\n\t\t\t<div class=\"row\">\n\t\t\t\t<div data-navigation=\"about\"  title=\"Github\" class=\"col-lg-4 col-sm-4 cursor-pointer  navigation-button\">\n\t\t\t\t\t<a href=\"https://github.com/abdullah2891\"> <img class=\"icon\" src=\"css/icons/architect.svg\" /></a>\n\t\t\t\t</div>\n\t\t\t\t<div data-navigation=\"secondPage\"  title=\"Projects\" class=\"col-lg-4 col-sm-4 cursor-pointer navigation-button\">\n\t\t\t\t\t<img class=\"icon\" src=\"css/icons/projector-screen.svg\"/>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div data-navigation=\"thirdPage\"  title=\"Contacts\" class=\"col-lg-4 col-sm-4 cursor-pointer navigation-button\">\n\t\t\t\t\t<img class=\"icon\" src=\"css/icons/lightbulb.svg\"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
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

var _waveAnimation = _interopRequireDefault(require("./wave-animation"));

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
    key: "componentDidMount",
    value: function componentDidMount() {
      this._handleScrolling();

      this._set_position();
    }
  }, {
    key: "childViews",
    value: function childViews() {
      return [_waveAnimation.default];
    }
  }, {
    key: "_handleScrolling",
    value: function _handleScrolling() {
      console.log(_state.state.projects);
      window.addEventListener('scroll', function (event) {
        var scroll_position = window.scrollY;
        var range = 100;

        var scrolled_project = _state.state.projects.find(function (project) {
          var position = project.position.top;
          return scroll_position >= position - range && scroll_position <= position + range;
        });

        if (!scrolled_project) {
          return;
        }

        ;
        var selected_project_element = document.getElementById(scrolled_project.id);

        if (!selected_project_element || scrolled_project.didScroll) {
          return;
        }

        ;
        scrolled_project.didScroll = true;
        selected_project_element.scrollTop = scrolled_project.position;
        selected_project_element.style.opacity = 1;
        (0, _util.fadeIn)(selected_project_element);
      });
    }
  }, {
    key: "_set_position",
    value: function _set_position() {
      _state.state.projects.forEach(function (project) {
        project.position = (0, _util.offset)(document.getElementById(project.id));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var project_description = function project_description(project) {
        return "\n\t\t\t\t<h3>".concat(project.title, "</h3>\n\t\t\t\t<p>").concat(project.description, "</p>\n\t\t\t\t<p>").concat(project.skills, "</p>\n\t\t\t");
      };

      var image = function image(project) {
        return "<img src=\"".concat(project.link, "\" alt=\"").concat(project.title, "\" />");
      };

      return "\n\t\t\t<div class data-component=\"WaveAnimation\"></div>\t\n\t\t\t".concat(_state.state.projects.reduce(function (html, project, index) {
        var showRow = project.show ? "block" : "none";
        var isEven = index % 2 === 0;
        var row = "\n\t\t\t\t\t\t<div id=\"".concat(project.id, "\" class=\"row project-row\" style=\"opacity:0\">\n\t\t\t\t\t\t\t<div class=\"col-md-").concat(isEven ? '5' : '7', "  image-container\">\n\t\t\t\t\t\t\t\t").concat(!isEven ? image(project) : project_description(project), "\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-").concat(isEven ? '7' : '5', " image-container\">\n\t\t\t\t\t\t\t\t").concat(isEven ? image(project) : project_description(project), "\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t");
        html += row + '\n';
        return html;
      }, ''), "\n\n\t\t");
    }
  }]);

  return ProjectDescription;
}(_index.default);

exports.default = ProjectDescription;

},{"./lib/index":10,"./state":11,"./util":12,"./wave-animation":13}],5:[function(require,module,exports){
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

      this._set_element_id();

      this._handleScrolling();

      this._set_element_position();
    }
  }, {
    key: "childViews",
    value: function childViews() {
      return [_MainPage.default, _Contact.default, _ProjectDescription.default, _SideFooter2.default, _SideFooter.default];
    }
  }, {
    key: "_set_element_id",
    value: function _set_element_id() {
      _state.state.projects.forEach(function (project) {
        project.id = 'project' + Math.random();
      });
    }
  }, {
    key: "_set_element_position",
    value: function _set_element_position() {
      Object.keys(_state.state.position).forEach(function (key) {
        _state.state.position[key] = (0, _util.offset)(document.getElementById(key)).top || 0;
        console.log(_state.state.position[key], key);
      });
    }
    /**
     * _handleScrolling
     *
     * @returns {undefined}
     */

  }, {
    key: "_handleScrolling",
    value: function _handleScrolling() {
      //section position
      //saving this positionn for change
      var previous_position = 0; //	window.addEventListener('scroll',function(){
      //			const second_page_position = state.position.secondPage;
      //			const third_page_position = state.position.thirdPage;
      //			
      //			//get the scrolling position 
      //			let scroll_position =  window.scrollY;
      //			let change = scroll_position - previous_position;	
      //			
      //			previous_position = scroll_position;
      //				
      //			if(!state.didScroll.secondPage  && change > 0){
      //				state.didScroll.secondPage  = true;
      //				scroll(second_page_position - 50 );
      //				fadeIn(this.secondPageElementId);
      //			}
      //	}.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      return "\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div id=\"firstPage\"  class=\"row first-page\">\n\t\t\t\t\t<div class=\"col-md-12 main-page  main-page-sm\">\n\t\t\t\t\t\t<div data-component=\"MainPage\"></div>\t\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<div id=\"secondPage\">\n\t\t\t\t\t<div  data-component=\"ProjectDescription\"></div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div id=\"thirdPage\"  class=\"row third-page\">\n\t\t\t\t\t\t<div class='col-md-12' data-component=\"Contact\"></div> </div> </div> ";
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
    id: null,
    title: "TASK ORGANIZER",
    description: "A TASK ORGANIZER WEB APPLICATION WITH EMBER JS FRONTEND AND DJANGO REST FRAMEWORK,INTEGRATING MYSQL AS DATABASE SUPPORT.",
    skills: "DJANGO REST, EMBER JS, MYSQL, HEROKU, BOOTSTRAP",
    link: "css/ticketing-system.gif",
    show: true,
    position: 0,
    opacity: 1,
    didScroll: false
  }, {
    id: null,
    title: "OFFLINE FIRST REDDIT VIEWER",
    description: "THIS REACT APP UTILIZES SERVICE WORKER AND CACHING HEAVILY TO GIVE OFFLINE FIRST EXPERIENCE FOR A SUBREDDIT(REDDIT SUB FORUM).CURRENTLY, I AM WORKING ON MAKING IT MORE READER FRIENDLY AND WRITER FRIENDLY.",
    skills: "REACT , SERVICE WORKER , OAUTH2 . HEROKU, BOOTSTRAP",
    link: "css/changemyview.gif",
    show: false,
    position: 282,
    opacity: 0.2,
    didScroll: false
  }, {
    id: null,
    title: "CHANGE MY VIEW READER",
    description: "A REDDIT CLIENT MADE USING REACT NATIVE WHICH ALLOWS USER ADD POST AND PERFORM ACTION ON THE APP(AUTHENTICATED USING OAUTH2)",
    skills: "REACT NATIVE , OAUTH2 , HEROKU",
    link: "css/cmv.png",
    show: false,
    position: 626,
    opacity: 0.05,
    didScroll: false
  }],
  position: {
    firstPage: null,
    secondPage: null,
    thirdPage: null
  },
  scroll: {
    firstPage: null,
    secondPage: null,
    thirdPage: null
  },
  notifyPropertyChange: function notifyPropertyChange() {}
};
exports.state = state;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.offset = exports.fadeIn = exports.scroll = exports.scrollHeight = void 0;

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

var offset = function offset(el) {
  var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
};

exports.offset = offset;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./lib/index"));

var _state = require("./state");

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

var WaveAnimation =
/*#__PURE__*/
function (_Index) {
  _inherits(WaveAnimation, _Index);

  function WaveAnimation() {
    _classCallCheck(this, WaveAnimation);

    return _possibleConstructorReturn(this, _getPrototypeOf(WaveAnimation).apply(this, arguments));
  }

  _createClass(WaveAnimation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var didScroll = false;
      window.addEventListener('scroll', function (event) {
        var scroll_position = window.scrollY + 500;

        if (!didScroll && _state.state.scroll.secondPage < scroll_position) {
          didScroll = true;
          document.getElementById('secondPageBackground').innerHTML = _this.background();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return '<div id="secondPageBackground"> </div>';
    }
  }, {
    key: "background",
    value: function background() {
      return "\n\t\t\t<svg id=\"projectBackground\" class=\"wavy-image\" viewBox=\"0 0 500 500\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t  <defs>\n\t\t\t    <pattern id=\"pattern-0\" x=\"0\" y=\"0\" width=\"25\" height=\"25\" patternUnits=\"userSpaceOnUse\" viewBox=\"0 0 100 100\">\n\t\t\t      <rect x=\"0\" y=\"0\" width=\"50\" height=\"100\" style=\"fill: black;\"/>\n\t\t\t    </pattern>\n\t\t\t  </defs>\n\t\t\t  <g>\n\t\t\t    <path style=\"fill: rgb(216, 216, 216);\"/>\n\t\t\t    <path style=\"fill: rgb(216, 216, 216);\"/>\n\t\t\t    <path style=\"fill: rgb(194, 249, 28);\" d=\"M 68.876 460.647 C 79.507 447.682 130.987 432.648 138.889 477.291 C 164.063 576.171 175.321 478.881 190.535 450.353 C 207.814 408.27 226.186 599.926 276.49 453.942 C 296.415 359.18 342.161 450.61 343.201 449.136 C 456.652 573.737 413.543 454.941 460.46 424.224 C 469.543 410.071 468.714 431.073 471.387 430.998 C 472.511 430.19 488.968 463.985 490.622 468.241 C 513.823 492.79 502.362 121.072 499.7 114.296 L 498.121 107.675 L 86.924 110.827 L 0.302 109.771 L 1.564 111.395 C 4.776 87.375 -2.861 495.416 32.656 492.737\">\n\t\t\t\t<animate\n\t\t\t\t\t attributeType=\"XML\" \n\t\t\t\t\tattributeName=\"d\" \n\t\t\t\t\tfrom=\"M 74.089 31.086 C 84.72 18.121 103.507 -30.322 111.409 14.321 C 136.583 113.201 180.691 51.691 195.905 23.163 C 213.184 -18.92 245.904 156.37 296.208 10.386 C 316.133 -84.376 345.309 2.838 346.349 1.364 C 389.748 126.175 398.208 44.733 420.401 26.802 C 429.484 12.649 436.45 33.174 439.123 33.099 C 440.247 32.291 462.682 45.806 464.336 50.062 C 487.537 74.611 509.883 40.875 507.221 34.099 L 505.642 27.478 L 94.445 30.63 L 7.823 29.574 L 9.085 31.198 C 12.297 7.178 16.941 71.479 52.458 68.8\"\n\t\t\t\t\t to=\"M 68.876 460.647 C 79.507 447.682 130.987 432.648 138.889 477.291 C 164.063 576.171 175.321 478.881 190.535 450.353 C 207.814 408.27 226.186 599.926 276.49 453.942 C 296.415 359.18 342.161 450.61 343.201 449.136 C 456.652 573.737 413.543 454.941 460.46 424.224 C 469.543 410.071 468.714 431.073 471.387 430.998 C 472.511 430.19 488.968 463.985 490.622 468.241 C 513.823 492.79 502.362 121.072 499.7 114.296 L 498.121 107.675 L 86.924 110.827 L 0.302 109.771 L 1.564 111.395 C 4.776 87.375 -2.861 495.416 32.656 492.737\"\n\t\t\t\t\tdur=\"10s\"/>\n\t\t\t\t</path>\n\n\n\t\t\t    <path style=\"fill: rgb(135, 207, 235);\" d=\"M 75.098 434.429 C 99.356 396.991 150.65 413.886 158.764 456.298 C 182.097 553.587 235.379 478.602 241.763 460.606 C 275.138 414.821 304.328 595.005 352.105 457.776 C 372.559 367.841 409.846 508.718 410.601 503.844 C 444.147 593.855 419.956 406.739 439.297 388.299 C 453.499 374.758 462.091 372.946 463.653 374.273 C 460.648 373.615 480.886 414.955 483.936 419.252 C 498.569 426.588 501.142 114.241 498.358 115.233 L 502.682 109.077 L 83.937 112.066 L -4.274 111.069 L -0.303 111.179 C 3.789 118.758 6.609 477.448 34.047 473.312\">\n\t\t\t\t<animate\n\t\t\t\t\t attributeType=\"XML\" \n\t\t\t\t\tattributeName=\"d\" \n\t\t\t\t\tfrom=\"M 65.132 42.26 C 89.39 4.822 113.706 -29.756 121.82 12.656 C 145.153 109.945 183.564 39.26 189.948 21.264 C 223.323 -24.521 244.799 138.677 292.576 1.448 C 313.03 -88.487 349.086 18.349 349.841 13.475 C 383.387 103.486 403.739 31.093 423.08 12.653 C 437.282 -0.888 444.56 46.822 446.122 48.149 C 443.117 47.491 476.139 51.27 479.189 55.567 C 493.822 62.903 497.05 33.166 501.074 32.833 L 505.398 26.677 L 86.653 29.666 L -1.558 28.669 L 2.413 28.779 C 16.785 33.375 26.841 58.903 52.329 55.333\"\n\t\t\t\t\t to=\"M 75.098 434.429 C 99.356 396.991 150.65 413.886 158.764 456.298 C 182.097 553.587 235.379 478.602 241.763 460.606 C 275.138 414.821 304.328 595.005 352.105 457.776 C 372.559 367.841 409.846 508.718 410.601 503.844 C 444.147 593.855 419.956 406.739 439.297 388.299 C 453.499 374.758 462.091 372.946 463.653 374.273 C 460.648 373.615 480.886 414.955 483.936 419.252 C 498.569 426.588 501.142 114.241 498.358 115.233 L 502.682 109.077 L 83.937 112.066 L -4.274 111.069 L -0.303 111.179 C 3.789 118.758 6.609 477.448 34.047 473.312\"\n\t\t\t\t\tdur=\"10s\"/>\n\n\t\t\t    </path>\n\t\t\t    <rect x=\"1.25\" y=\"0.545\" width=\"500.213\" height=\"111.811\" style=\"fill: rgb(135, 207, 235);\" rx=\"2.847\" ry=\"2.847\">\n\t\t\t\t<animate \n\t\t\t\t\tattributeType=\"XML\"\n\t\t\t\t\tattributeName=\"height\"\n\t\t\t\t\tfrom=\"29\"\n\t\t\t\t\tto= \"111.811\"\n\t\t\t\t\tdur=\"10s\"\n\t\t\t\t\t/>\n\t\t\t    </rect>\n\t\t\t  </g>\n\t\t\t</svg>\n\t\t";
    }
  }]);

  return WaveAnimation;
}(_index.default);

exports.default = WaveAnimation;
;

},{"./lib/index":10,"./state":11}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29udGFjdC5qcyIsInNyYy9NYWluUGFnZS5qcyIsInNyYy9OYXZpZ2F0aW9uLmpzIiwic3JjL1Byb2plY3REZXNjcmlwdGlvbi5qcyIsInNyYy9TaWRlRm9vdGVyLmpzIiwic3JjL1NpZGVGb290ZXIyLmpzIiwic3JjL2FwcC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9saWIvSW5kZXguanMiLCJzcmMvbGliL2luZGV4LmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3V0aWwuanMiLCJzcmMvd2F2ZS1hbmltYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFWjtBQUNQO0FBY0E7Ozs7RUFqQm1DLGU7Ozs7Ozs7Ozs7OztBQ0ZyQzs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixROzs7Ozs7Ozs7Ozs7O2lDQUNSO0FBQ1gsYUFBTyxDQUFDLG1CQUFELENBQVA7QUFDQTs7OzZCQUNPO0FBQ1A7QUFjQTs7OztFQW5Cb0MsYzs7Ozs7Ozs7Ozs7O0FDSHRDOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsVTs7Ozs7Ozs7Ozs7Ozt3Q0FDRDtBQUNsQixXQUFLLG1CQUFMLEdBQTJCLFFBQVEsQ0FBQyxjQUFULENBQXdCLFlBQXhCLENBQTNCO0FBQ0EsV0FBSyxrQkFBTCxHQUEwQixRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUExQjs7QUFDQSxXQUFLLGlCQUFMO0FBQ0E7Ozt3Q0FHa0I7QUFBQTs7QUFDbEIseUJBQUksUUFBUSxDQUFDLHNCQUFULENBQWdDLG1CQUFoQyxDQUFKLEVBQTBELE9BQTFELENBQWtFLFVBQUEsTUFBTSxFQUFFO0FBQ3RFLFFBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVB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UCxHQUFpQixHQUF6Qzs7QUFFQSxZQUFHLENBQUMsU0FBRCxJQUFjLGFBQU0sTUFBTixDQUFhLFVBQWIsR0FBMEIsZUFBM0MsRUFBMkQ7QUFDMUQsVUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNBLFVBQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdELFNBQWhELEdBQTRELEtBQUksQ0FBQyxVQUFMLEVBQTVEO0FBQ0E7QUFFRCxPQVJEO0FBVUE7Ozs2QkFFTztBQUNQLGFBQU8sd0NBQVA7QUFDQTs7O2lDQUNXO0FBRVg7QUEwQ0E7Ozs7RUE5RHlDLGM7OztBQStEMUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvSW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgSW5kZXh7XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgbWFyZ2luLXRvcC00ICBtYXJnaW4tbGVmdC00IHBhZGRpbmctcmlnaHQtNCBwYWRkaW5nLWxlZnQtNFwiPlxuXHRcdFx0XHQ8cD5DdXJyZW50bHkgV29ya2luZyA8c3Ryb25nPkFUJlQ8L3N0cm9uZz4gYXMgYW4gPHN0cm9uZz5XZWIgRGV2ZWxvcGVyKFVuZGVyIENvbnRyYWN0LCBKdWx5IDIwMTYgdG8gUHJlc2VudCk8L3N0cm9uZz48L3A+XG5cblx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdDxsaT5EZXZlbG9wZWQgYW5kIG1haW50YWluZWQgY29tcGxleCB3ZWIgYXBwbGljYXRpb25zIGNvbWJpbmluZyBzZXZlcmFsIG9mIHRoZSBBVCZUIGludGVybmFsIGF1dG9tYXRpb24gdG9vbHMuIFdyaXR0ZW4gaW4gSmF2YVNjcmlwdCwgUGVybCwgYW5kIFBIUCB1c2luZyBFbWJlci5qcyBhbmQgTW9qb2xpY2lvdXMgZnJhbWV3b3Jrcy48L2xpPlxuXHRcdFx0XHRcdDxsaT5JbnRlZ3JhdGVkIDI1IFNRTCBTZXJ2ZXIgZGF0YWJhc2VzIHdpdGggb3ZlciAyMDAgdGFibGVzIGluIGEgY29tcGxleCBuZXR3b3JrIG9mIHRpY2tldGluZyBzeXN0ZW0gYXBwbGljYXRpb25zIHRoYXQgY29udHJvbGxlZCBzZWN1cml0eSBwZXJtaXNzaW9ucyBmb3IgdGhvdXNhbmRzIG9mIHVzZXJzLCB1c2VyIGdyb3VwcywgYW5kIGNvbXBhbnkgY2xpZW50cyBmcm9tIGFyb3VuZCB0aGUgd29ybGQuPC9saT5cblx0XHRcdFx0XHQ8bGk+Q29uc2lzdGVudGx5IG1ldCBkZWFkbGluZXMgYW5kIHJlcGVhdGVkbHkgZXhjZWVkZWQgZXhwZWN0YXRpb25zIHRvIGVmZmVjdGl2ZWx5IGRlbGl2ZXIgaW4gYW4gQWdpbGUgZW52aXJvbm1lbnQgdXNpbmcgSklSQSBhbmQgZm91ci13ZWVrIGRldmVsb3BtZW50IGxpZmVjeWNsZXMuPC9saT5cblx0XHRcdFx0XHQ8bGk+RXZhbHVhdGVkIGNvZGUgZm9yIGVmZmljaWVuY3ksIGRlYnVnZ2luZywgYW5kIHF1YWxpdHkgYXNzdXJhbmNlIHVzaW5nIENydWNpYmxlIG9uIGEgZGFpbHkgYmFzaXM8L2xpPlxuXHRcdFx0XHRcdDxsaT5JbXByb3ZlZCBkZXZlbG9wbWVudCB0aW1lIHN1YnN0YW50aWFsbHkgYnkgZGVzaWduaW5nIGF1dG9tYXRpb24gc2NyaXB0cyBmb3IgZmFzdGVyIGRldmVsb3BtZW50IHRlc3RpbmcuPC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdFxuXHRcdFx0PC9kaXY+XG5cdFx0YFxuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIEluZGV4e1xuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtOYXZpZ2F0aW9uXTtcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBpbnRyb2R1Y3Rpb24gaW50cm9kdWN0aW9uLXNtXCI+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCIgY29sLWxnLTFcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJuYW1lLXBhZCBjb2wtbGctNiAgIGNvbC1zbS0xMFwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInRpdGxlXCI+PHN0cm9uZz5IaSw8L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0PHA+PHN0cm9uZz5XZWxjb21lIHRvIHRoaXMgY29ybmVyIG9mIHRoZSBpbnRlcm5ldDwvc3Ryb25nPjwvcD5cblx0XHRcdFx0XHQ8cD48c3Ryb25nPk15IE5hbWUgaXMgQWJkdWxsYWggUmFobWFuPC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxwPjxzdHJvbmc+SG93IGNhbiBJIGhlbHAgeW91IHRvZGF5PC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJOYXZpZ2F0aW9uXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRgO1xuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge2ZhZGVJbixzY3JvbGwsc2Nyb2xsSGVpZ2h0fSBmcm9tICAnLi91dGlsJztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgSW5kZXh7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5zZWNvbmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZFBhZ2UnKTtcblx0XHR0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlyZFBhZ2UnKTtcblx0XHR0aGlzLl9hZGRFdmVudExpc3RlbmVyKCk7XG5cdH1cblxuXG5cdF9hZGRFdmVudExpc3RlbmVyKCl7XG5cdFx0Wy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb24tYnV0dG9uJyldLmZvckVhY2goYnV0dG9uPT57XG5cdFx0ICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XHRjb25zdCBwYWdlTmFtZSA9IGV2ZW50LnNyY0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hdmlnYXRpb24nKXx8ZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2aWdhdGlvbicpO1xuXHRcdFx0ICAgIFx0Y29uc3QgcG9zaXRpb24gPSBldmVudC5zcmNFbGVtZW50Lm9mZnNldFRvcCB8fCBldmVudC5jdXJyZW50VGFyZ2V0Lm9mZnNldFRvcDtcblx0XHRcdFx0XG5cdFx0XHRcdHN0YXRlLmRpZFNjcm9sbFtwYWdlTmFtZV0gPSB0cnVlO1xuXG5cdFx0XHQgICAgXHRzd2l0Y2gocGFnZU5hbWUpe1xuXHRcdFx0XHRcdGNhc2UgJ3NlY29uZFBhZ2UnOlxuXHRcdFx0XHRcdFx0c2Nyb2xsKHN0YXRlLnBvc2l0aW9uLnNlY29uZFBhZ2UgLTIwKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0IGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3RoaXJkUGFnZSc6XG5cdFx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0XHRcdHNjcm9sbChzdGF0ZS5wb3NpdGlvbi50aGlyZFBhZ2UrMjAwMCk7XG5cdFx0XHRcdFx0XHRmYWRlSW4odGhpcy50aGlyZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RGb290ZXInKS5jbGFzc05hbWUgKz0nIGNvbnRhY3QtZm9vdGVyICc7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0ICAgIH0uYmluZCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGRhdGEtbmF2aWdhdGlvbj1cImFib3V0XCIgIHRpdGxlPVwiR2l0aHViXCIgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tNCBjdXJzb3ItcG9pbnRlciAgbmF2aWdhdGlvbi1idXR0b25cIj5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FiZHVsbGFoMjg5MVwiPiA8aW1nIGNsYXNzPVwiaWNvblwiIHNyYz1cImNzcy9pY29ucy9hcmNoaXRlY3Quc3ZnXCIgLz48L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGRhdGEtbmF2aWdhdGlvbj1cInNlY29uZFBhZ2VcIiAgdGl0bGU9XCJQcm9qZWN0c1wiIGNsYXNzPVwiY29sLWxnLTQgY29sLXNtLTQgY3Vyc29yLXBvaW50ZXIgbmF2aWdhdGlvbi1idXR0b25cIj5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzPVwiaWNvblwiIHNyYz1cImNzcy9pY29ucy9wcm9qZWN0b3Itc2NyZWVuLnN2Z1wiLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGRhdGEtbmF2aWdhdGlvbj1cInRoaXJkUGFnZVwiICB0aXRsZT1cIkNvbnRhY3RzXCIgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tNCBjdXJzb3ItcG9pbnRlciBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL2xpZ2h0YnVsYi5zdmdcIi8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblxuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7ZmFkZUluLG9mZnNldH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBXYXZlQW5pbWF0aW9uIGZyb20gJy4vd2F2ZS1hbmltYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0RGVzY3JpcHRpb24gZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLl9oYW5kbGVTY3JvbGxpbmcoKTtcblx0XHR0aGlzLl9zZXRfcG9zaXRpb24oKTtcblx0XG5cdH1cblxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtXYXZlQW5pbWF0aW9uXTtcblx0fVxuXHRfaGFuZGxlU2Nyb2xsaW5nKCl7XG5cdFx0Y29uc29sZS5sb2coc3RhdGUucHJvamVjdHMpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0Y29uc3Qgc2Nyb2xsX3Bvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG5cdFx0XHRjb25zdCByYW5nZSA9IDEwMDtcblxuXHRcdFx0Y29uc3Qgc2Nyb2xsZWRfcHJvamVjdCA9IHN0YXRlLnByb2plY3RzLmZpbmQocHJvamVjdD0+e1xuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHByb2plY3QucG9zaXRpb24udG9wO1xuXG5cdFx0XHRcdHJldHVybiBzY3JvbGxfcG9zaXRpb24gPj0gKHBvc2l0aW9uIC1yYW5nZSkgJiYgc2Nyb2xsX3Bvc2l0aW9uIDw9IChwb3NpdGlvbiArIHJhbmdlKTtcblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHRpZighc2Nyb2xsZWRfcHJvamVjdCl7cmV0dXJuIH07XG5cblx0XHRcdGNvbnN0IHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2Nyb2xsZWRfcHJvamVjdC5pZCk7XG5cblx0XHRcdGlmKCFzZWxlY3RlZF9wcm9qZWN0X2VsZW1lbnQgfHwgc2Nyb2xsZWRfcHJvamVjdC5kaWRTY3JvbGwpe3JldHVybiB9O1xuXHRcdFx0XG5cdFx0XHRzY3JvbGxlZF9wcm9qZWN0LmRpZFNjcm9sbCA9IHRydWU7XG5cdFx0XHRzZWxlY3RlZF9wcm9qZWN0X2VsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsZWRfcHJvamVjdC5wb3NpdGlvbjtcblx0XHRcdHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHRcdGZhZGVJbihzZWxlY3RlZF9wcm9qZWN0X2VsZW1lbnQpO1xuXG5cdFx0fSlcblxuXHR9XG5cblx0X3NldF9wb3NpdGlvbigpe1xuXHRcdHN0YXRlLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xuXHRcdFx0cHJvamVjdC5wb3NpdGlvbiA9IG9mZnNldChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0LmlkKSk7XG5cdFx0fSk7XG5cblxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHByb2plY3RfZGVzY3JpcHRpb24gPSAocHJvamVjdCk9Pntcblx0XHRcdHJldHVybiBgXG5cdFx0XHRcdDxoMz4ke3Byb2plY3QudGl0bGV9PC9oMz5cblx0XHRcdFx0PHA+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0PHA+JHtwcm9qZWN0LnNraWxsc308L3A+XG5cdFx0XHRgO1xuXHRcdH07XG5cblx0XHRjb25zdCBpbWFnZSA9IChwcm9qZWN0KT0+YDxpbWcgc3JjPVwiJHtwcm9qZWN0Lmxpbmt9XCIgYWx0PVwiJHtwcm9qZWN0LnRpdGxlfVwiIC8+YDtcblxuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzIGRhdGEtY29tcG9uZW50PVwiV2F2ZUFuaW1hdGlvblwiPjwvZGl2Plx0XG5cdFx0XHQke1xuXHRcdFx0XHRzdGF0ZS5wcm9qZWN0cy5yZWR1Y2UoKGh0bWwscHJvamVjdCxpbmRleCk9Pntcblx0XHRcdFx0XHRjb25zdCBzaG93Um93ID0gcHJvamVjdC5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCI7XG5cdFx0XHRcdFx0Y29uc3QgaXNFdmVuID0gaW5kZXggJSAyID09PTA7XG5cdFx0XHRcdFx0Y29uc3Qgcm93ID0gYFxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cIiR7cHJvamVjdC5pZH1cIiBjbGFzcz1cInJvdyBwcm9qZWN0LXJvd1wiIHN0eWxlPVwib3BhY2l0eTowXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtJHtpc0V2ZW4gPyAnNSc6ICc3J30gIGltYWdlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdCR7IWlzRXZlbiA/IGltYWdlKHByb2plY3QpIDogcHJvamVjdF9kZXNjcmlwdGlvbihwcm9qZWN0KX1cdFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0ke2lzRXZlbiA/ICc3JzogJzUnfSBpbWFnZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQke2lzRXZlbiA/IGltYWdlKHByb2plY3QpIDogcHJvamVjdF9kZXNjcmlwdGlvbihwcm9qZWN0KX1cdFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdGA7XG5cdFx0XHRcdFx0aHRtbCs9cm93ICsgJ1xcbic7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIGh0bWw7XG5cblx0XHRcdFx0fSwnJylcblxuXHRcdFx0fVxuXG5cdFx0YDtcblxuXHR9XG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVGb290ZXIgZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLl9oYW5kbGVTY3JvbGxpbmcoKTtcblxuXHRcdGNvbnNvbGUubG9nKHN0YXRlKVxuXG5cdH1cblx0XG5cdF91cGRhdGVPcGFjaXR5KHNjcm9sbFBvc2l0aW9uKXtcblx0XHRbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5kZXhdJyldLmZvckVhY2goY3VycmVudERvbT0+e1xuXHRcdFx0Y29uc3QgaW5kZXggPSBjdXJyZW50RG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuXHRcdFx0Y29uc3QgcHJvamVjdCA9IHN0YXRlLnByb2plY3RzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgeSA9ICh4LHBvc2l0aW9uKT0+e1xuXHRcdFx0XHRjb25zdCByYW5nZSA9IHByb2plY3QudXBwZXJfZW5kIC0gcHJvamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0Y29uc3Qgb3BhY2l0eSA9IC1NYXRoLnBvdygoeC1wb3NpdGlvbikvcmFuZ2UsMikgKyAxO1xuXHRcdFx0XHRyZXR1cm4gb3BhY2l0eSA+IDAuMyA/IG9wYWNpdHk6IDAuMjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQocHJvamVjdC5wb3NpdGlvbik7XG5cdFx0XHRjb25zdCBwb3NpdGlvbkhpZ2hlc3RPcGFjaXR5ID0gIHByb2plY3QucG9zaXRpb247XG5cdFx0XHRjb25zdCBjdXJyZW50T3BhY2l0eSA9IHkoc2Nyb2xsUG9zaXRpb24scG9zaXRpb25IaWdoZXN0T3BhY2l0eSk7XG5jb25zb2xlLmxvZyhjdXJyZW50T3BhY2l0eSlcblx0XHRcdGN1cnJlbnREb20uc3R5bGUub3BhY2l0eSA9IGN1cnJlbnRPcGFjaXR5O1xuXHRcdFx0cHJvamVjdC5vZmZzZXQgPSBjdXJyZW50T3BhY2l0eTtcblx0XHRcdHByb2plY3Qub3BhY2l0eSA9IGN1cnJlbnRPcGFjaXR5O1xuXHRcdH0pXG5cblx0fVxuXG5cblx0X2hhbmRsZVNjcm9sbGluZygpe1xuXHRcdGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RJbWFnZUNvbnRhaW5lcicpOyBcblx0XHRcblx0XHRpbWFnZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5zY3JvbGxUb3A7XG5cdFx0XHRzdGF0ZS5ub3RpZnlQcm9wZXJ0eUNoYW5nZShzY3JvbGxQb3NpdGlvbik7XHRcblx0XHRcdHRoaXMuX3VwZGF0ZU9wYWNpdHkoc2Nyb2xsUG9zaXRpb24pO1xuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0fVxuXHRcblx0X3VwZGF0ZURPTVBvc2l0aW9uKCl7XG5cdFx0Wy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QtaW1hZ2UnKV0uZm9yRWFjaCgoaW1hZ2UsaW5kZXgpPT57XG5cdFx0XHRzdGF0ZS5wcm9qZWN0c1tpbmRleF0ucG9zaXRpb24gPSBpbWFnZS5vZmZzZXRUb3A7XG5cdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8dWwgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIiBpZD1cInByb2plY3RJbWFnZUNvbnRhaW5lclwiPlxuXHRcdFx0XHQke1xuXHRcdFx0XHRcdHN0YXRlLnByb2plY3RzLnJlZHVjZSgoaHRtbCxwcm9qZWN0LGluZGV4KT0+e1xuXHRcdFx0XHRcdFx0aHRtbCArPSBgPGxpPjxpbWcgY2xhc3M9XCJwcm9qZWN0LWltYWdlXCIgZGF0YS1pbmRleD0ke2luZGV4fSBzdHlsZT1cIm9wYWNpdHk6JHtwcm9qZWN0Lm9wYWNpdHl9XCIgIHNyYz1cIiR7cHJvamVjdC5saW5rfVwiIC8+PC9saT5gO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gaHRtbDtcblx0XHRcdFx0XHR9LCcnKVxuXHRcdFx0XHR9XG5cdFx0XHRcdDxsaT48ZGl2IGNsYXNzPVwiZW1wdHktaW1hZ2VcIj48L2Rpdj48L2xpPlxuXHRcdFx0PC91bD5cblx0XHRgO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4ICBmcm9tICcuL2xpYi9pbmRleCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZUZvb3RlcjIgZXh0ZW5kcyBJbmRleHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYDxkaXYgaWQ9XCJjb250YWN0Rm9vdGVyXCIgIGNsYXNzPVwic2lkZS1mb290ZXJcIj5Db250YWN0PC9kaXY+YDtcblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAgJy4vbGliL2luZGV4JztcbmltcG9ydCB7c2Nyb2xsLGZhZGVJbixzY3JvbGxIZWlnaHQsb2Zmc2V0fSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdGF0ZSc7XG5cbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL01haW5QYWdlJztcbmltcG9ydCBTaWRlRm9vdGVyIGZyb20gJy4vU2lkZUZvb3Rlcic7XG5pbXBvcnQgU2lkZUZvb3RlcjIgZnJvbSAnLi9TaWRlRm9vdGVyMic7XG5pbXBvcnQgUHJvamVjdERlc2NyaXB0aW9uIGZyb20gJy4vUHJvamVjdERlc2NyaXB0aW9uJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7IFxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgSW5kZXh7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5zZWNvbmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZFBhZ2UnKTtcblx0XHR0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlyZFBhZ2UnKTtcblx0XHR0aGlzLl9zZXRfZWxlbWVudF9pZCgpO1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXHRcdHRoaXMuX3NldF9lbGVtZW50X3Bvc2l0aW9uKCk7XG5cdH1cblxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtNYWluUGFnZSxDb250YWN0LCBQcm9qZWN0RGVzY3JpcHRpb24sU2lkZUZvb3RlcjIsU2lkZUZvb3Rlcl07XG5cdH1cblxuXHRcblx0X3NldF9lbGVtZW50X2lkKCl7XG5cdFx0c3RhdGUucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XG5cdFx0XHRwcm9qZWN0LmlkID0gJ3Byb2plY3QnICsgTWF0aC5yYW5kb20oKTtcblx0XHR9KTtcblx0fVxuXG5cdF9zZXRfZWxlbWVudF9wb3NpdGlvbigpe1xuXHRcdE9iamVjdC5rZXlzKHN0YXRlLnBvc2l0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG5cdFx0XHRzdGF0ZS5wb3NpdGlvbltrZXldID0gb2Zmc2V0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleSkpLnRvcCB8fCAwO1xuXHRcdFx0Y29uc29sZS5sb2coc3RhdGUucG9zaXRpb25ba2V5XSxrZXkpXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogX2hhbmRsZVNjcm9sbGluZ1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuXHQgKi9cblx0X2hhbmRsZVNjcm9sbGluZygpe1xuXHRcdC8vc2VjdGlvbiBwb3NpdGlvblxuXHRcdFxuXHRcdC8vc2F2aW5nIHRoaXMgcG9zaXRpb25uIGZvciBjaGFuZ2Vcblx0XHRsZXQgcHJldmlvdXNfcG9zaXRpb24gPSAwO1xuXG5cdC8vXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbigpe1xuXHQvL1x0XHRcdGNvbnN0IHNlY29uZF9wYWdlX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24uc2Vjb25kUGFnZTtcblx0Ly9cdFx0XHRjb25zdCB0aGlyZF9wYWdlX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24udGhpcmRQYWdlO1xuXHQvL1x0XHRcdFxuXG5cdC8vXHRcdFx0Ly9nZXQgdGhlIHNjcm9sbGluZyBwb3NpdGlvbiBcblx0Ly9cdFx0XHRsZXQgc2Nyb2xsX3Bvc2l0aW9uID0gIHdpbmRvdy5zY3JvbGxZO1xuXHQvL1x0XHRcdGxldCBjaGFuZ2UgPSBzY3JvbGxfcG9zaXRpb24gLSBwcmV2aW91c19wb3NpdGlvbjtcdFxuIFx0Ly9cdFx0XHRcblx0Ly9cdFx0XHRwcmV2aW91c19wb3NpdGlvbiA9IHNjcm9sbF9wb3NpdGlvbjtcblxuXHQvL1x0XHRcdFx0XG5cdC8vXHRcdFx0aWYoIXN0YXRlLmRpZFNjcm9sbC5zZWNvbmRQYWdlICAmJiBjaGFuZ2UgPiAwKXtcblx0Ly9cdFx0XHRcdHN0YXRlLmRpZFNjcm9sbC5zZWNvbmRQYWdlICA9IHRydWU7XG5cblx0Ly9cdFx0XHRcdHNjcm9sbChzZWNvbmRfcGFnZV9wb3NpdGlvbiAtIDUwICk7XG5cdC8vXHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0Ly9cdFx0XHR9XG5cdC8vXHR9LmJpbmQodGhpcykpO1xuXG5cdH1cblxuXHRcblx0XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdDxkaXYgaWQ9XCJmaXJzdFBhZ2VcIiAgY2xhc3M9XCJyb3cgZmlyc3QtcGFnZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgbWFpbi1wYWdlICBtYWluLXBhZ2Utc21cIj5cblx0XHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJNYWluUGFnZVwiPjwvZGl2Plx0XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJzZWNvbmRQYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiAgZGF0YS1jb21wb25lbnQ9XCJQcm9qZWN0RGVzY3JpcHRpb25cIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGlkPVwidGhpcmRQYWdlXCIgIGNsYXNzPVwicm93IHRoaXJkLXBhZ2VcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9J2NvbC1tZC0xMicgZGF0YS1jb21wb25lbnQ9XCJDb250YWN0XCI+PC9kaXY+IDwvZGl2PiA8L2Rpdj4gYCB9IFxuXG5cbn1cbiIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkgeyBcblx0bmV3IEFwcCgnYXBwJyk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4e1xuXHQvKipcblx0ICogY29uc3RydWN0b3Jcblx0ICpcblx0ICogQHBhcmFtIGNvbXBvbmVudCBjb21wb25lbnQgbmFtZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29tcG9uZW50KXtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5jb21wb25lbnRTZWxlY3RvcigpLm1hcChxdWVyeVNlbGVjdG9yPT57XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblxuXHRcdH0pXG5cblx0XHRQcm9taXNlLmFsbChwcm9taXNlcylcblx0XHRcdC50aGVuKCgpPT57XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlICA9IHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdHRoaXMubG9hZENoaWxkVmlld3MoKTtcblx0XHRcdFx0dGhpcy5pbnNlcnRFbGVtZW50KHRlbXBsYXRlKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIGhvb2sgZm9yIHRoaW5ncyBhcmUgbG9hZGVkXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdC8qKlxuXHQgKiBwb3B1bGF0aW5nIHRoZSBpbm5lcmh0bWxcblx0ICpcblx0ICogQHBhcmFtIHRlbXBsYXRlXG5cdCAqL1xuXHRpbnNlcnRFbGVtZW50KHRlbXBsYXRlKXtcblx0XHR0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkuZm9yRWFjaChjb21wb25lbnRJbnN0YW5jZT0+e1xuXHRcdFx0Y29tcG9uZW50SW5zdGFuY2UuaW5uZXJIVE1MID0gIHRlbXBsYXRlO1xuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuICcnO1xuXG5cdH1cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbXTtcblx0XHRcblx0fVxuXHRjb21wb25lbnRTZWxlY3Rvcigpe1xuXHRcdHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY29tcG9uZW50PVwiJHt0aGlzLmNvbXBvbmVudH1cIl1gKV07XG5cdH1cblxuXHQvKipcblx0ICogbG9hZGluZyBsaXN0ZWQgY2hpbGQgdmlld3Ncblx0ICovXG5cdGxvYWRDaGlsZFZpZXdzKCl7XG5cdFx0aWYoIUFycmF5LmlzQXJyYXkodGhpcy5jaGlsZFZpZXdzKCkgKSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGlsZFZpZXdzKCkuZm9yRWFjaCh2aWV3PT57XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gdmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTtcblx0XHRcdG5ldyB2aWV3KGAke2NsYXNzTmFtZX1gKTtcblx0XHR9KVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleHtcblx0LyoqXG5cdCAqIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqIEBwYXJhbSBjb21wb25lbnQgY29tcG9uZW50IG5hbWVcblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudCl7XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cblx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5tYXAocXVlcnlTZWxlY3Rvcj0+e1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9Pntcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cblx0XHR9KVxuXG5cdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0XHQudGhlbigoKT0+e1xuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSAgPSB0aGlzLnJlbmRlcigpO1xuXHRcdFx0XHR0aGlzLmxvYWRDaGlsZFZpZXdzKCk7XG5cdFx0XHRcdHRoaXMuaW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSk7XG5cblx0XHRcdFx0dGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBob29rIGZvciB0aGluZ3MgYXJlIGxvYWRlZFxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHQvKipcblx0ICogcG9wdWxhdGluZyB0aGUgaW5uZXJodG1sXG5cdCAqXG5cdCAqIEBwYXJhbSB0ZW1wbGF0ZVxuXHQgKi9cblx0aW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSl7XG5cdFx0dGhpcy5jb21wb25lbnRTZWxlY3RvcigpLmZvckVhY2goY29tcG9uZW50SW5zdGFuY2U9Pntcblx0XHRcdGNvbXBvbmVudEluc3RhbmNlLmlubmVySFRNTCA9ICB0ZW1wbGF0ZTtcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAnJztcblxuXHR9XG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW107XG5cdFx0XG5cdH1cblx0Y29tcG9uZW50U2VsZWN0b3IoKXtcblx0XHRyZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNvbXBvbmVudD1cIiR7dGhpcy5jb21wb25lbnR9XCJdYCldO1xuXHR9XG5cblx0LyoqXG5cdCAqIGxvYWRpbmcgbGlzdGVkIGNoaWxkIHZpZXdzXG5cdCAqL1xuXHRsb2FkQ2hpbGRWaWV3cygpe1xuXHRcdGlmKCFBcnJheS5pc0FycmF5KHRoaXMuY2hpbGRWaWV3cygpICkpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hpbGRWaWV3cygpLmZvckVhY2godmlldz0+e1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9IHZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHRuZXcgdmlldyhgJHtjbGFzc05hbWV9YCk7XG5cdFx0fSlcblx0fVxufVxuIiwiZXhwb3J0ICBjb25zdCBzdGF0ZSAgPSAge1xuXHRkaWRTY3JvbGwgOiB7YWJvdXQgOiBmYWxzZSwgc2Vjb25kUGFnZSA6IGZhbHNlICwgdGhpcmRQYWdlIDogZmFsc2V9LFxuXHRwcm9qZWN0czogW3tcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiVEFTSyBPUkdBTklaRVJcIixcblx0XHRkZXNjcmlwdGlvbiA6XCJBIFRBU0sgT1JHQU5JWkVSIFdFQiBBUFBMSUNBVElPTiBXSVRIIEVNQkVSIEpTIEZST05URU5EIEFORCBESkFOR08gUkVTVCBGUkFNRVdPUkssSU5URUdSQVRJTkcgTVlTUUwgQVMgREFUQUJBU0UgU1VQUE9SVC5cIixcblx0XHRza2lsbHM6IFwiREpBTkdPIFJFU1QsIEVNQkVSIEpTLCBNWVNRTCwgSEVST0tVLCBCT09UU1RSQVBcIixcblx0XHRsaW5rIDogXCJjc3MvdGlja2V0aW5nLXN5c3RlbS5naWZcIiwgXHRcblx0XHRzaG93IDogdHJ1ZSxcblx0XHRwb3NpdGlvbjogMCxcblx0XHRvcGFjaXR5OiAxLFxuXHRcdGRpZFNjcm9sbDogZmFsc2Vcblx0fSxcblx0e1xuXHRcdGlkIDogbnVsbCxcblx0XHR0aXRsZTogXCJPRkZMSU5FIEZJUlNUIFJFRERJVCBWSUVXRVJcIixcblx0XHRkZXNjcmlwdGlvbiA6XCJUSElTIFJFQUNUIEFQUCBVVElMSVpFUyBTRVJWSUNFIFdPUktFUiBBTkQgQ0FDSElORyBIRUFWSUxZIFRPIEdJVkUgT0ZGTElORSBGSVJTVCBFWFBFUklFTkNFIEZPUiBBIFNVQlJFRERJVChSRURESVQgU1VCIEZPUlVNKS5DVVJSRU5UTFksIEkgQU0gV09SS0lORyBPTiBNQUtJTkcgSVQgTU9SRSBSRUFERVIgRlJJRU5ETFkgQU5EIFdSSVRFUiBGUklFTkRMWS5cIixcblx0XHRza2lsbHM6IFwiUkVBQ1QgLCBTRVJWSUNFIFdPUktFUiAsIE9BVVRIMiAuIEhFUk9LVSwgQk9PVFNUUkFQXCIsXG5cdFx0bGluayA6IFwiY3NzL2NoYW5nZW15dmlldy5naWZcIixcblx0XHRzaG93IDogZmFsc2UsXG5cdFx0cG9zaXRpb24gOiAyODIsXG5cdFx0b3BhY2l0eTogMC4yLFxuXHRcdGRpZFNjcm9sbDogZmFsc2VcblxuXHR9LFxuXHR7XG5cdFx0aWQgOiBudWxsLFxuXHRcdHRpdGxlOiBcIkNIQU5HRSBNWSBWSUVXIFJFQURFUlwiLFxuXHRcdGRlc2NyaXB0aW9uIDpcIkEgUkVERElUIENMSUVOVCBNQURFIFVTSU5HIFJFQUNUIE5BVElWRSBXSElDSCBBTExPV1MgVVNFUiBBREQgUE9TVCBBTkQgUEVSRk9STSBBQ1RJT04gT04gVEhFIEFQUChBVVRIRU5USUNBVEVEIFVTSU5HIE9BVVRIMilcIixcblx0XHRza2lsbHM6IFwiUkVBQ1QgTkFUSVZFICwgT0FVVEgyICwgSEVST0tVXCIsXG5cdFx0bGluayA6IFwiY3NzL2Ntdi5wbmdcIixcblx0XHRzaG93IDogZmFsc2UsXG5cdFx0cG9zaXRpb24gOiA2MjYsXG5cdFx0b3BhY2l0eTogMC4wNSxcblx0XHRkaWRTY3JvbGw6IGZhbHNlXG5cdH1dLFxuXHRwb3NpdGlvbjp7XG5cdFx0Zmlyc3RQYWdlOiBudWxsLFxuXHRcdHNlY29uZFBhZ2U6IG51bGwsXG5cdFx0dGhpcmRQYWdlOiBudWxsXG5cdH0sXG5cblx0c2Nyb2xsOntcblx0XHRmaXJzdFBhZ2U6IG51bGwsXG5cdFx0c2Vjb25kUGFnZTogbnVsbCxcblx0XHR0aGlyZFBhZ2U6IG51bGxcblx0fSxcblx0bm90aWZ5UHJvcGVydHlDaGFuZ2UoKXt9XG59XG4iLCJleHBvcnQgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gKCk9Pntcblx0cmV0dXJuIE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIFxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNjcm9sbCA9IChsYXN0X3Bvc3Rpb24saW5pdGlhbF9wb3NpdGlvbj0wKT0+e1xuXHRjb25zdCByYXRlID0gMTU7XG5cdGxldCBwb3NpdGlvbiA9IGluaXRpYWxfcG9zaXRpb24gO1xuXHRjb25zdCByZXBlYXRPZnRlbiA9ICgpPT57XG5cdFx0cG9zaXRpb24gPSBwb3NpdGlvbityYXRlO1xuXHRcdHdpbmRvdy5zY3JvbGwoMCxwb3NpdGlvbik7XG5cdFx0Y29uc3QgZ2xvYmFsSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVwZWF0T2Z0ZW4pO1xuXHRcdGlmKHBvc2l0aW9uID49IGxhc3RfcG9zdGlvbil7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShnbG9iYWxJRCk7XG5cdFx0fVxuXHR9XG5cblx0cmVwZWF0T2Z0ZW4oKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IChlbGVtZW50LGluaXRpYWw9MCk9Pntcblx0Y29uc3QgcmF0ZSA9IDAuMDU7XG5cdC8vZmluYWwgb3BhY2l0eSBjYW4ndCBiZSBiaWdnZXIgdGhhbiAxXG5cdGNvbnN0IGZpbmFsT3BhY2l0eSA9IDE7XG5cblx0bGV0IG9wYWNpdHkgPSBpbml0aWFsO1xuXG5cdGNvbnN0IF90YXNrID0gKCk9Pntcblx0XHRlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuXHRcdG9wYWNpdHkgPSBvcGFjaXR5ICsgcmF0ZTsgXG5cdFx0Y29uc3QgZ2xvYmFsSUQgPSAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF90YXNrKTtcblx0XHRpZihvcGFjaXR5ID49IGZpbmFsT3BhY2l0eSl7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShnbG9iYWxJRClcblx0XHR9XG5cdH1cblxuXHRfdGFzaygpO1xuXG59XG5cbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAoZWwpPT4ge1xuICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICByZXR1cm4geyB0b3A6IHJlY3QudG9wICsgc2Nyb2xsVG9wLCBsZWZ0OiByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IH1cbn1cblxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXZlQW5pbWF0aW9uIGV4dGVuZHMgSW5kZXgge1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGxldCAgZGlkU2Nyb2xsID0gZmFsc2U7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsKGV2ZW50KT0+e1xuXHRcdFx0Y29uc3Qgc2Nyb2xsX3Bvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgKyA1MDA7XG5cblx0XHRcdGlmKCFkaWRTY3JvbGwgJiYgc3RhdGUuc2Nyb2xsLnNlY29uZFBhZ2UgPCBzY3JvbGxfcG9zaXRpb24pe1xuXHRcdFx0XHRkaWRTY3JvbGwgPSB0cnVlO1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kUGFnZUJhY2tncm91bmQnKS5pbm5lckhUTUwgPSB0aGlzLmJhY2tncm91bmQoKTtcblx0XHRcdH1cblxuXHRcdH0pXG5cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAnPGRpdiBpZD1cInNlY29uZFBhZ2VCYWNrZ3JvdW5kXCI+IDwvZGl2Pic7XG5cdH1cblx0YmFja2dyb3VuZCgpe1xuXHRcdFxuXHRcdHJldHVybiBgXG5cdFx0XHQ8c3ZnIGlkPVwicHJvamVjdEJhY2tncm91bmRcIiBjbGFzcz1cIndhdnktaW1hZ2VcIiB2aWV3Qm94PVwiMCAwIDUwMCA1MDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHQgIDxkZWZzPlxuXHRcdFx0ICAgIDxwYXR0ZXJuIGlkPVwicGF0dGVybi0wXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XG5cdFx0XHQgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjEwMFwiIHN0eWxlPVwiZmlsbDogYmxhY2s7XCIvPlxuXHRcdFx0ICAgIDwvcGF0dGVybj5cblx0XHRcdCAgPC9kZWZzPlxuXHRcdFx0ICA8Zz5cblx0XHRcdCAgICA8cGF0aCBzdHlsZT1cImZpbGw6IHJnYigyMTYsIDIxNiwgMjE2KTtcIi8+XG5cdFx0XHQgICAgPHBhdGggc3R5bGU9XCJmaWxsOiByZ2IoMjE2LCAyMTYsIDIxNik7XCIvPlxuXHRcdFx0ICAgIDxwYXRoIHN0eWxlPVwiZmlsbDogcmdiKDE5NCwgMjQ5LCAyOCk7XCIgZD1cIk0gNjguODc2IDQ2MC42NDcgQyA3OS41MDcgNDQ3LjY4MiAxMzAuOTg3IDQzMi42NDggMTM4Ljg4OSA0NzcuMjkxIEMgMTY0LjA2MyA1NzYuMTcxIDE3NS4zMjEgNDc4Ljg4MSAxOTAuNTM1IDQ1MC4zNTMgQyAyMDcuODE0IDQwOC4yNyAyMjYuMTg2IDU5OS45MjYgMjc2LjQ5IDQ1My45NDIgQyAyOTYuNDE1IDM1OS4xOCAzNDIuMTYxIDQ1MC42MSAzNDMuMjAxIDQ0OS4xMzYgQyA0NTYuNjUyIDU3My43MzcgNDEzLjU0MyA0NTQuOTQxIDQ2MC40NiA0MjQuMjI0IEMgNDY5LjU0MyA0MTAuMDcxIDQ2OC43MTQgNDMxLjA3MyA0NzEuMzg3IDQzMC45OTggQyA0NzIuNTExIDQzMC4xOSA0ODguOTY4IDQ2My45ODUgNDkwLjYyMiA0NjguMjQxIEMgNTEzLjgyMyA0OTIuNzkgNTAyLjM2MiAxMjEuMDcyIDQ5OS43IDExNC4yOTYgTCA0OTguMTIxIDEwNy42NzUgTCA4Ni45MjQgMTEwLjgyNyBMIDAuMzAyIDEwOS43NzEgTCAxLjU2NCAxMTEuMzk1IEMgNC43NzYgODcuMzc1IC0yLjg2MSA0OTUuNDE2IDMyLjY1NiA0OTIuNzM3XCI+XG5cdFx0XHRcdDxhbmltYXRlXG5cdFx0XHRcdFx0IGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiBcblx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lPVwiZFwiIFxuXHRcdFx0XHRcdGZyb209XCJNIDc0LjA4OSAzMS4wODYgQyA4NC43MiAxOC4xMjEgMTAzLjUwNyAtMzAuMzIyIDExMS40MDkgMTQuMzIxIEMgMTM2LjU4MyAxMTMuMjAxIDE4MC42OTEgNTEuNjkxIDE5NS45MDUgMjMuMTYzIEMgMjEzLjE4NCAtMTguOTIgMjQ1LjkwNCAxNTYuMzcgMjk2LjIwOCAxMC4zODYgQyAzMTYuMTMzIC04NC4zNzYgMzQ1LjMwOSAyLjgzOCAzNDYuMzQ5IDEuMzY0IEMgMzg5Ljc0OCAxMjYuMTc1IDM5OC4yMDggNDQuNzMzIDQyMC40MDEgMjYuODAyIEMgNDI5LjQ4NCAxMi42NDkgNDM2LjQ1IDMzLjE3NCA0MzkuMTIzIDMzLjA5OSBDIDQ0MC4yNDcgMzIuMjkxIDQ2Mi42ODIgNDUuODA2IDQ2NC4zMzYgNTAuMDYyIEMgNDg3LjUzNyA3NC42MTEgNTA5Ljg4MyA0MC44NzUgNTA3LjIyMSAzNC4wOTkgTCA1MDUuNjQyIDI3LjQ3OCBMIDk0LjQ0NSAzMC42MyBMIDcuODIzIDI5LjU3NCBMIDkuMDg1IDMxLjE5OCBDIDEyLjI5NyA3LjE3OCAxNi45NDEgNzEuNDc5IDUyLjQ1OCA2OC44XCJcblx0XHRcdFx0XHQgdG89XCJNIDY4Ljg3NiA0NjAuNjQ3IEMgNzkuNTA3IDQ0Ny42ODIgMTMwLjk4NyA0MzIuNjQ4IDEzOC44ODkgNDc3LjI5MSBDIDE2NC4wNjMgNTc2LjE3MSAxNzUuMzIxIDQ3OC44ODEgMTkwLjUzNSA0NTAuMzUzIEMgMjA3LjgxNCA0MDguMjcgMjI2LjE4NiA1OTkuOTI2IDI3Ni40OSA0NTMuOTQyIEMgMjk2LjQxNSAzNTkuMTggMzQyLjE2MSA0NTAuNjEgMzQzLjIwMSA0NDkuMTM2IEMgNDU2LjY1MiA1NzMuNzM3IDQxMy41NDMgNDU0Ljk0MSA0NjAuNDYgNDI0LjIyNCBDIDQ2OS41NDMgNDEwLjA3MSA0NjguNzE0IDQzMS4wNzMgNDcxLjM4NyA0MzAuOTk4IEMgNDcyLjUxMSA0MzAuMTkgNDg4Ljk2OCA0NjMuOTg1IDQ5MC42MjIgNDY4LjI0MSBDIDUxMy44MjMgNDkyLjc5IDUwMi4zNjIgMTIxLjA3MiA0OTkuNyAxMTQuMjk2IEwgNDk4LjEyMSAxMDcuNjc1IEwgODYuOTI0IDExMC44MjcgTCAwLjMwMiAxMDkuNzcxIEwgMS41NjQgMTExLjM5NSBDIDQuNzc2IDg3LjM3NSAtMi44NjEgNDk1LjQxNiAzMi42NTYgNDkyLjczN1wiXG5cdFx0XHRcdFx0ZHVyPVwiMTBzXCIvPlxuXHRcdFx0XHQ8L3BhdGg+XG5cblxuXHRcdFx0ICAgIDxwYXRoIHN0eWxlPVwiZmlsbDogcmdiKDEzNSwgMjA3LCAyMzUpO1wiIGQ9XCJNIDc1LjA5OCA0MzQuNDI5IEMgOTkuMzU2IDM5Ni45OTEgMTUwLjY1IDQxMy44ODYgMTU4Ljc2NCA0NTYuMjk4IEMgMTgyLjA5NyA1NTMuNTg3IDIzNS4zNzkgNDc4LjYwMiAyNDEuNzYzIDQ2MC42MDYgQyAyNzUuMTM4IDQxNC44MjEgMzA0LjMyOCA1OTUuMDA1IDM1Mi4xMDUgNDU3Ljc3NiBDIDM3Mi41NTkgMzY3Ljg0MSA0MDkuODQ2IDUwOC43MTggNDEwLjYwMSA1MDMuODQ0IEMgNDQ0LjE0NyA1OTMuODU1IDQxOS45NTYgNDA2LjczOSA0MzkuMjk3IDM4OC4yOTkgQyA0NTMuNDk5IDM3NC43NTggNDYyLjA5MSAzNzIuOTQ2IDQ2My42NTMgMzc0LjI3MyBDIDQ2MC42NDggMzczLjYxNSA0ODAuODg2IDQxNC45NTUgNDgzLjkzNiA0MTkuMjUyIEMgNDk4LjU2OSA0MjYuNTg4IDUwMS4xNDIgMTE0LjI0MSA0OTguMzU4IDExNS4yMzMgTCA1MDIuNjgyIDEwOS4wNzcgTCA4My45MzcgMTEyLjA2NiBMIC00LjI3NCAxMTEuMDY5IEwgLTAuMzAzIDExMS4xNzkgQyAzLjc4OSAxMTguNzU4IDYuNjA5IDQ3Ny40NDggMzQuMDQ3IDQ3My4zMTJcIj5cblx0XHRcdFx0PGFuaW1hdGVcblx0XHRcdFx0XHQgYXR0cmlidXRlVHlwZT1cIlhNTFwiIFxuXHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU9XCJkXCIgXG5cdFx0XHRcdFx0ZnJvbT1cIk0gNjUuMTMyIDQyLjI2IEMgODkuMzkgNC44MjIgMTEzLjcwNiAtMjkuNzU2IDEyMS44MiAxMi42NTYgQyAxNDUuMTUzIDEwOS45NDUgMTgzLjU2NCAzOS4yNiAxODkuOTQ4IDIxLjI2NCBDIDIyMy4zMjMgLTI0LjUyMSAyNDQuNzk5IDEzOC42NzcgMjkyLjU3NiAxLjQ0OCBDIDMxMy4wMyAtODguNDg3IDM0OS4wODYgMTguMzQ5IDM0OS44NDEgMTMuNDc1IEMgMzgzLjM4NyAxMDMuNDg2IDQwMy43MzkgMzEuMDkzIDQyMy4wOCAxMi42NTMgQyA0MzcuMjgyIC0wLjg4OCA0NDQuNTYgNDYuODIyIDQ0Ni4xMjIgNDguMTQ5IEMgNDQzLjExNyA0Ny40OTEgNDc2LjEzOSA1MS4yNyA0NzkuMTg5IDU1LjU2NyBDIDQ5My44MjIgNjIuOTAzIDQ5Ny4wNSAzMy4xNjYgNTAxLjA3NCAzMi44MzMgTCA1MDUuMzk4IDI2LjY3NyBMIDg2LjY1MyAyOS42NjYgTCAtMS41NTggMjguNjY5IEwgMi40MTMgMjguNzc5IEMgMTYuNzg1IDMzLjM3NSAyNi44NDEgNTguOTAzIDUyLjMyOSA1NS4zMzNcIlxuXHRcdFx0XHRcdCB0bz1cIk0gNzUuMDk4IDQzNC40MjkgQyA5OS4zNTYgMzk2Ljk5MSAxNTAuNjUgNDEzLjg4NiAxNTguNzY0IDQ1Ni4yOTggQyAxODIuMDk3IDU1My41ODcgMjM1LjM3OSA0NzguNjAyIDI0MS43NjMgNDYwLjYwNiBDIDI3NS4xMzggNDE0LjgyMSAzMDQuMzI4IDU5NS4wMDUgMzUyLjEwNSA0NTcuNzc2IEMgMzcyLjU1OSAzNjcuODQxIDQwOS44NDYgNTA4LjcxOCA0MTAuNjAxIDUwMy44NDQgQyA0NDQuMTQ3IDU5My44NTUgNDE5Ljk1NiA0MDYuNzM5IDQzOS4yOTcgMzg4LjI5OSBDIDQ1My40OTkgMzc0Ljc1OCA0NjIuMDkxIDM3Mi45NDYgNDYzLjY1MyAzNzQuMjczIEMgNDYwLjY0OCAzNzMuNjE1IDQ4MC44ODYgNDE0Ljk1NSA0ODMuOTM2IDQxOS4yNTIgQyA0OTguNTY5IDQyNi41ODggNTAxLjE0MiAxMTQuMjQxIDQ5OC4zNTggMTE1LjIzMyBMIDUwMi42ODIgMTA5LjA3NyBMIDgzLjkzNyAxMTIuMDY2IEwgLTQuMjc0IDExMS4wNjkgTCAtMC4zMDMgMTExLjE3OSBDIDMuNzg5IDExOC43NTggNi42MDkgNDc3LjQ0OCAzNC4wNDcgNDczLjMxMlwiXG5cdFx0XHRcdFx0ZHVyPVwiMTBzXCIvPlxuXG5cdFx0XHQgICAgPC9wYXRoPlxuXHRcdFx0ICAgIDxyZWN0IHg9XCIxLjI1XCIgeT1cIjAuNTQ1XCIgd2lkdGg9XCI1MDAuMjEzXCIgaGVpZ2h0PVwiMTExLjgxMVwiIHN0eWxlPVwiZmlsbDogcmdiKDEzNSwgMjA3LCAyMzUpO1wiIHJ4PVwiMi44NDdcIiByeT1cIjIuODQ3XCI+XG5cdFx0XHRcdDxhbmltYXRlIFxuXHRcdFx0XHRcdGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxuXHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU9XCJoZWlnaHRcIlxuXHRcdFx0XHRcdGZyb209XCIyOVwiXG5cdFx0XHRcdFx0dG89IFwiMTExLjgxMVwiXG5cdFx0XHRcdFx0ZHVyPVwiMTBzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0ICAgIDwvcmVjdD5cblx0XHRcdCAgPC9nPlxuXHRcdFx0PC9zdmc+XG5cdFx0YDtcblxuXHR9XG59O1xuIl19
