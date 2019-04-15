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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.attachServiceWorker();
    }
  }, {
    key: "attachServiceWorker",
    value: function attachServiceWorker() {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
          navigator.serviceWorker.register('/js/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
          });
        });
      }
    }
  }, {
    key: "childViews",
    value: function childViews() {
      return [_Navigation.default];
    }
  }, {
    key: "render",
    value: function render() {
      return "\n\t\t\t<div class=\"row introduction introduction-sm\">\n\n\t\t\t<div class=\"name-pad col-lg-6   col-sm-10\">\n\t\t\t\t<p class=\"title\"><strong>Hi,</strong></p>\n\t\t\t\t\t<p><strong>Welcome to this corner of the internet</strong></p>\n\t\t\t\t\t<p><strong>My Name is Abdullah Rahman</strong></p>\n\t\t\t\t\t<p><strong>How can I help you today</strong></p>\n\t\t\t\t\t<div data-component=\"Navigation\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t";
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
        return "\n\t\t\t\t<h3>".concat(project.title, "</h3>\n\t\t\t\t<p>").concat(project.description, "</p>\n\t\t\t\t<p>").concat(project.skills, "</p>\n\t\t\t\t<p><a href=\"").concat(project.url, "\" target=\"_blnk\" style=\"color:#5e39ca\">Github Link</a></p>\n\t\t\t");
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
    description: "A Task Organizer web application with Ember.js frontend and Django Rest Framework, integrating MySQL as database support. Currently working recommendations system that will allow users to create smart lists.",
    skills: "DJANGO REST, EMBER JS, MYSQL, HEROKU, Meterial UI",
    link: "css/ticketing-system.gif",
    show: true,
    url: "https://github.com/abdullah2891/TicketingSystem-",
    position: 0,
    opacity: 1,
    didScroll: false
  }, {
    id: null,
    title: "OFFLINE FIRST REDDIT VIEWER",
    description: "This React app utilizes service worker and caching to give offline experience for a subreddit(Reddit subforum). Currently, I am working on making it more friendly for reading and writing posts",
    skills: "React, Service Worker, Oauth2, Heroku, Bootstrap",
    link: "css/changemyview.gif",
    url: "https://github.com/abdullah2891/Change-My-View",
    show: false,
    position: 282,
    opacity: 0.2,
    didScroll: false
  }, {
    id: null,
    title: "Task Organizer Android",
    description: "This project is porting the Task Organizer Website to Android devices. Written in Java. ",
    skills: "Java(Android)",
    link: "css/cmv.png",
    url: "https://github.com/abdullah2891/TicketingSytem-Android",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29udGFjdC5qcyIsInNyYy9NYWluUGFnZS5qcyIsInNyYy9OYXZpZ2F0aW9uLmpzIiwic3JjL1Byb2plY3REZXNjcmlwdGlvbi5qcyIsInNyYy9TaWRlRm9vdGVyLmpzIiwic3JjL1NpZGVGb290ZXIyLmpzIiwic3JjL2FwcC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9saWIvSW5kZXguanMiLCJzcmMvbGliL2luZGV4LmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3V0aWwuanMiLCJzcmMvd2F2ZS1hbmltYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFWjtBQUNQO0FBY0E7Ozs7RUFqQm1DLGU7Ozs7Ozs7Ozs7OztBQ0ZyQzs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixROzs7Ozs7Ozs7Ozs7O3dDQUNEO0FBQ2xCLFdBQUssbUJBQUw7QUFDQTs7OzBDQUNvQjtBQUNwQixVQUFJLG1CQUFtQixTQUF2QixFQUFrQztBQUNoQyxRQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFXO0FBQzVDLFVBQUEsU0FBUyxDQUFDLGFBQVYsQ0FBd0IsUUFBeEIsQ0FBaUMsV0FBakMsRUFBOEMsSUFBOUMsQ0FBbUQsVUFBUyxZQUFULEVBQXVCO0FBQ3hFO0FBQ0EsWUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLG9EQUFaLEVBQWtFLFlBQVksQ0FBQyxLQUEvRTtBQUNELFdBSEQsRUFHRyxVQUFTLEdBQVQsRUFBYztBQUNmO0FBQ0EsWUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLHFDQUFaLEVBQW1ELEdBQW5EO0FBQ0QsV0FORDtBQU9FLFNBUkQ7QUFTRDtBQUNEOzs7aUNBQ1c7QUFDWCxhQUFPLENBQUMsbUJBQUQsQ0FBUDtBQUNBOzs7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QUksR0FBRyxFQUFFLENBQUMscUJBQUgsRUFBWDtBQUFBLE1BQ0EsVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFQLElBQXNCLFFBQVEsQ0FBQyxlQUFULENBQXlCLFVBRDVEO0FBQUEsTUFFQSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVAsSUFBc0IsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsU0FGM0Q7QUFHQSxTQUFPO0FBQUUsSUFBQSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUwsR0FBVyxTQUFsQjtBQUE2QixJQUFBLElBQUksRUFBRSxJQUFJLENBQUMsSUFBTCxHQUFZO0FBQS9DLEdBQVA7QUFDSCxDQUxNOzs7Ozs7Ozs7Ozs7QUN4Q1A7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsYTs7Ozs7Ozs7Ozs7Ozt3Q0FDRDtBQUFBOztBQUNsQixVQUFLLFNBQVMsR0FBRyxLQUFqQjtBQUNBLE1BQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWlDLFVBQUMsS0FBRCxFQUFTO0FBQ3pDLFlBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLEdBQXpDOztBQUVBLFlBQUcsQ0FBQyxTQUFELElBQWMsYUFBTSxNQUFOLENBQWEsVUFBYixHQUEwQixlQUEzQyxFQUEyRDtBQUMxRCxVQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0EsVUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0QsU0FBaEQsR0FBNEQsS0FBSSxDQUFDLFVBQUwsRUFBNUQ7QUFDQTtBQUVELE9BUkQ7QUFVQTs7OzZCQUVPO0FBQ1AsYUFBTyx3Q0FBUDtBQUNBOzs7aUNBQ1c7QUFFWDtBQTBDQTs7OztFQTlEeUMsYzs7O0FBK0QxQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9JbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBJbmRleHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBtYXJnaW4tdG9wLTQgIG1hcmdpbi1sZWZ0LTQgcGFkZGluZy1yaWdodC00IHBhZGRpbmctbGVmdC00XCI+XG5cdFx0XHRcdDxwPkN1cnJlbnRseSBXb3JraW5nIDxzdHJvbmc+QVQmVDwvc3Ryb25nPiBhcyBhbiA8c3Ryb25nPldlYiBEZXZlbG9wZXIoVW5kZXIgQ29udHJhY3QsIEp1bHkgMjAxNiB0byBQcmVzZW50KTwvc3Ryb25nPjwvcD5cblxuXHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0PGxpPkRldmVsb3BlZCBhbmQgbWFpbnRhaW5lZCBjb21wbGV4IHdlYiBhcHBsaWNhdGlvbnMgY29tYmluaW5nIHNldmVyYWwgb2YgdGhlIEFUJlQgaW50ZXJuYWwgYXV0b21hdGlvbiB0b29scy4gV3JpdHRlbiBpbiBKYXZhU2NyaXB0LCBQZXJsLCBhbmQgUEhQIHVzaW5nIEVtYmVyLmpzIGFuZCBNb2pvbGljaW91cyBmcmFtZXdvcmtzLjwvbGk+XG5cdFx0XHRcdFx0PGxpPkludGVncmF0ZWQgMjUgU1FMIFNlcnZlciBkYXRhYmFzZXMgd2l0aCBvdmVyIDIwMCB0YWJsZXMgaW4gYSBjb21wbGV4IG5ldHdvcmsgb2YgdGlja2V0aW5nIHN5c3RlbSBhcHBsaWNhdGlvbnMgdGhhdCBjb250cm9sbGVkIHNlY3VyaXR5IHBlcm1pc3Npb25zIGZvciB0aG91c2FuZHMgb2YgdXNlcnMsIHVzZXIgZ3JvdXBzLCBhbmQgY29tcGFueSBjbGllbnRzIGZyb20gYXJvdW5kIHRoZSB3b3JsZC48L2xpPlxuXHRcdFx0XHRcdDxsaT5Db25zaXN0ZW50bHkgbWV0IGRlYWRsaW5lcyBhbmQgcmVwZWF0ZWRseSBleGNlZWRlZCBleHBlY3RhdGlvbnMgdG8gZWZmZWN0aXZlbHkgZGVsaXZlciBpbiBhbiBBZ2lsZSBlbnZpcm9ubWVudCB1c2luZyBKSVJBIGFuZCBmb3VyLXdlZWsgZGV2ZWxvcG1lbnQgbGlmZWN5Y2xlcy48L2xpPlxuXHRcdFx0XHRcdDxsaT5FdmFsdWF0ZWQgY29kZSBmb3IgZWZmaWNpZW5jeSwgZGVidWdnaW5nLCBhbmQgcXVhbGl0eSBhc3N1cmFuY2UgdXNpbmcgQ3J1Y2libGUgb24gYSBkYWlseSBiYXNpczwvbGk+XG5cdFx0XHRcdFx0PGxpPkltcHJvdmVkIGRldmVsb3BtZW50IHRpbWUgc3Vic3RhbnRpYWxseSBieSBkZXNpZ25pbmcgYXV0b21hdGlvbiBzY3JpcHRzIGZvciBmYXN0ZXIgZGV2ZWxvcG1lbnQgdGVzdGluZy48L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0XG5cdFx0XHQ8L2Rpdj5cblx0XHRgXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QYWdlIGV4dGVuZHMgSW5kZXh7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5hdHRhY2hTZXJ2aWNlV29ya2VyKCk7XG5cdH1cblx0YXR0YWNoU2VydmljZVdvcmtlcigpe1xuXHRcdGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG5cdFx0ICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9qcy9zdy5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG5cdFx0XHQgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuXHRcdFx0ICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xuXHRcdFx0fSwgZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHQgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcblx0XHRcdCAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcblx0XHRcdH0pO1xuXHRcdCAgfSk7XG5cdFx0fVxuXHR9XG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW05hdmlnYXRpb25dO1xuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93IGludHJvZHVjdGlvbiBpbnRyb2R1Y3Rpb24tc21cIj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cIm5hbWUtcGFkIGNvbC1sZy02ICAgY29sLXNtLTEwXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwidGl0bGVcIj48c3Ryb25nPkhpLDwvc3Ryb25nPjwvcD5cblx0XHRcdFx0XHQ8cD48c3Ryb25nPldlbGNvbWUgdG8gdGhpcyBjb3JuZXIgb2YgdGhlIGludGVybmV0PC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxwPjxzdHJvbmc+TXkgTmFtZSBpcyBBYmR1bGxhaCBSYWhtYW48L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0PHA+PHN0cm9uZz5Ib3cgY2FuIEkgaGVscCB5b3UgdG9kYXk8L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0PGRpdiBkYXRhLWNvbXBvbmVudD1cIk5hdmlnYXRpb25cIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdGA7XG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7ZmFkZUluLHNjcm9sbCxzY3JvbGxIZWlnaHR9IGZyb20gICcuL3V0aWwnO1xuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kUGFnZScpO1xuXHRcdHRoaXMudGhpcmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXJkUGFnZScpO1xuXHRcdHRoaXMuX2FkZEV2ZW50TGlzdGVuZXIoKTtcblx0fVxuXG5cblx0X2FkZEV2ZW50TGlzdGVuZXIoKXtcblx0XHRbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2aWdhdGlvbi1idXR0b24nKV0uZm9yRWFjaChidXR0b249Pntcblx0XHQgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihldmVudCl7XG5cdFx0XHRcdGNvbnN0IHBhZ2VOYW1lID0gZXZlbnQuc3JjRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2aWdhdGlvbicpfHxldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1uYXZpZ2F0aW9uJyk7XG5cdFx0XHQgICAgXHRjb25zdCBwb3NpdGlvbiA9IGV2ZW50LnNyY0VsZW1lbnQub2Zmc2V0VG9wIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQub2Zmc2V0VG9wO1xuXHRcdFx0XHRcblx0XHRcdFx0c3RhdGUuZGlkU2Nyb2xsW3BhZ2VOYW1lXSA9IHRydWU7XG5cblx0XHRcdCAgICBcdHN3aXRjaChwYWdlTmFtZSl7XG5cdFx0XHRcdFx0Y2FzZSAnc2Vjb25kUGFnZSc6XG5cdFx0XHRcdFx0XHRzY3JvbGwoc3RhdGUucG9zaXRpb24uc2Vjb25kUGFnZSAtMjApO1xuXHRcdFx0XHRcdFx0ZmFkZUluKHRoaXMuc2Vjb25kUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdFx0XHQgYnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAndGhpcmRQYWdlJzpcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0c2Nyb2xsKHN0YXRlLnBvc2l0aW9uLnRoaXJkUGFnZSsyMDAwKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvb3RlcicpLmNsYXNzTmFtZSArPScgY29udGFjdC1mb290ZXIgJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHQgICAgfS5iaW5kKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwiYWJvdXRcIiAgdGl0bGU9XCJHaXRodWJcIiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS00IGN1cnNvci1wb2ludGVyICBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWJkdWxsYWgyODkxXCI+IDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL2FyY2hpdGVjdC5zdmdcIiAvPjwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwic2Vjb25kUGFnZVwiICB0aXRsZT1cIlByb2plY3RzXCIgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tNCBjdXJzb3ItcG9pbnRlciBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL3Byb2plY3Rvci1zY3JlZW4uc3ZnXCIvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwidGhpcmRQYWdlXCIgIHRpdGxlPVwiQ29udGFjdHNcIiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS00IGN1cnNvci1wb2ludGVyIG5hdmlnYXRpb24tYnV0dG9uXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cImljb25cIiBzcmM9XCJjc3MvaWNvbnMvbGlnaHRidWxiLnN2Z1wiLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHtmYWRlSW4sb2Zmc2V0fSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFdhdmVBbmltYXRpb24gZnJvbSAnLi93YXZlLWFuaW1hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3REZXNjcmlwdGlvbiBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXHRcdHRoaXMuX3NldF9wb3NpdGlvbigpO1xuXHRcblx0fVxuXG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW1dhdmVBbmltYXRpb25dO1xuXHR9XG5cdF9oYW5kbGVTY3JvbGxpbmcoKXtcblx0XHRjb25zb2xlLmxvZyhzdGF0ZS5wcm9qZWN0cylcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbihldmVudCl7XG5cdFx0XHRjb25zdCBzY3JvbGxfcG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcblx0XHRcdGNvbnN0IHJhbmdlID0gMTAwO1xuXG5cdFx0XHRjb25zdCBzY3JvbGxlZF9wcm9qZWN0ID0gc3RhdGUucHJvamVjdHMuZmluZChwcm9qZWN0PT57XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0gcHJvamVjdC5wb3NpdGlvbi50b3A7XG5cblx0XHRcdFx0cmV0dXJuIHNjcm9sbF9wb3NpdGlvbiA+PSAocG9zaXRpb24gLXJhbmdlKSAmJiBzY3JvbGxfcG9zaXRpb24gPD0gKHBvc2l0aW9uICsgcmFuZ2UpO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGlmKCFzY3JvbGxlZF9wcm9qZWN0KXtyZXR1cm4gfTtcblxuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRfcHJvamVjdF9lbGVtZW50PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY3JvbGxlZF9wcm9qZWN0LmlkKTtcblxuXHRcdFx0aWYoIXNlbGVjdGVkX3Byb2plY3RfZWxlbWVudCB8fCBzY3JvbGxlZF9wcm9qZWN0LmRpZFNjcm9sbCl7cmV0dXJuIH07XG5cdFx0XHRcblx0XHRcdHNjcm9sbGVkX3Byb2plY3QuZGlkU2Nyb2xsID0gdHJ1ZTtcblx0XHRcdHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxlZF9wcm9qZWN0LnBvc2l0aW9uO1xuXHRcdFx0c2VsZWN0ZWRfcHJvamVjdF9lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0ZmFkZUluKHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudCk7XG5cblx0XHR9KVxuXG5cdH1cblxuXHRfc2V0X3Bvc2l0aW9uKCl7XG5cdFx0c3RhdGUucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XG5cdFx0XHRwcm9qZWN0LnBvc2l0aW9uID0gb2Zmc2V0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QuaWQpKTtcblx0XHR9KTtcblxuXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcHJvamVjdF9kZXNjcmlwdGlvbiA9IChwcm9qZWN0KT0+e1xuXHRcdFx0cmV0dXJuIGBcblx0XHRcdFx0PGgzPiR7cHJvamVjdC50aXRsZX08L2gzPlxuXHRcdFx0XHQ8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHQ8cD4ke3Byb2plY3Quc2tpbGxzfTwvcD5cblx0XHRcdFx0PHA+PGEgaHJlZj1cIiR7cHJvamVjdC51cmx9XCIgdGFyZ2V0PVwiX2JsbmtcIiBzdHlsZT1cImNvbG9yOiM1ZTM5Y2FcIj5HaXRodWIgTGluazwvYT48L3A+XG5cdFx0XHRgO1xuXHRcdH07XG5cblx0XHRjb25zdCBpbWFnZSA9IChwcm9qZWN0KT0+YDxpbWcgc3JjPVwiJHtwcm9qZWN0Lmxpbmt9XCIgYWx0PVwiJHtwcm9qZWN0LnRpdGxlfVwiIC8+YDtcblxuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzIGRhdGEtY29tcG9uZW50PVwiV2F2ZUFuaW1hdGlvblwiPjwvZGl2Plx0XG5cdFx0XHQke1xuXHRcdFx0XHRzdGF0ZS5wcm9qZWN0cy5yZWR1Y2UoKGh0bWwscHJvamVjdCxpbmRleCk9Pntcblx0XHRcdFx0XHRjb25zdCBzaG93Um93ID0gcHJvamVjdC5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCI7XG5cdFx0XHRcdFx0Y29uc3QgaXNFdmVuID0gaW5kZXggJSAyID09PTA7XG5cdFx0XHRcdFx0Y29uc3Qgcm93ID0gYFxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cIiR7cHJvamVjdC5pZH1cIiBjbGFzcz1cInJvdyBwcm9qZWN0LXJvd1wiIHN0eWxlPVwib3BhY2l0eTowXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtJHtpc0V2ZW4gPyAnNSc6ICc3J30gIGltYWdlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdCR7IWlzRXZlbiA/IGltYWdlKHByb2plY3QpIDogcHJvamVjdF9kZXNjcmlwdGlvbihwcm9qZWN0KX1cdFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0ke2lzRXZlbiA/ICc3JzogJzUnfSBpbWFnZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQke2lzRXZlbiA/IGltYWdlKHByb2plY3QpIDogcHJvamVjdF9kZXNjcmlwdGlvbihwcm9qZWN0KX1cdFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdGA7XG5cdFx0XHRcdFx0aHRtbCs9cm93ICsgJ1xcbic7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIGh0bWw7XG5cblx0XHRcdFx0fSwnJylcblxuXHRcdFx0fVxuXG5cdFx0YDtcblxuXHR9XG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVGb290ZXIgZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLl9oYW5kbGVTY3JvbGxpbmcoKTtcblxuXHRcdGNvbnNvbGUubG9nKHN0YXRlKVxuXG5cdH1cblx0XG5cdF91cGRhdGVPcGFjaXR5KHNjcm9sbFBvc2l0aW9uKXtcblx0XHRbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5kZXhdJyldLmZvckVhY2goY3VycmVudERvbT0+e1xuXHRcdFx0Y29uc3QgaW5kZXggPSBjdXJyZW50RG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuXHRcdFx0Y29uc3QgcHJvamVjdCA9IHN0YXRlLnByb2plY3RzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgeSA9ICh4LHBvc2l0aW9uKT0+e1xuXHRcdFx0XHRjb25zdCByYW5nZSA9IHByb2plY3QudXBwZXJfZW5kIC0gcHJvamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0Y29uc3Qgb3BhY2l0eSA9IC1NYXRoLnBvdygoeC1wb3NpdGlvbikvcmFuZ2UsMikgKyAxO1xuXHRcdFx0XHRyZXR1cm4gb3BhY2l0eSA+IDAuMyA/IG9wYWNpdHk6IDAuMjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQocHJvamVjdC5wb3NpdGlvbik7XG5cdFx0XHRjb25zdCBwb3NpdGlvbkhpZ2hlc3RPcGFjaXR5ID0gIHByb2plY3QucG9zaXRpb247XG5cdFx0XHRjb25zdCBjdXJyZW50T3BhY2l0eSA9IHkoc2Nyb2xsUG9zaXRpb24scG9zaXRpb25IaWdoZXN0T3BhY2l0eSk7XG5jb25zb2xlLmxvZyhjdXJyZW50T3BhY2l0eSlcblx0XHRcdGN1cnJlbnREb20uc3R5bGUub3BhY2l0eSA9IGN1cnJlbnRPcGFjaXR5O1xuXHRcdFx0cHJvamVjdC5vZmZzZXQgPSBjdXJyZW50T3BhY2l0eTtcblx0XHRcdHByb2plY3Qub3BhY2l0eSA9IGN1cnJlbnRPcGFjaXR5O1xuXHRcdH0pXG5cblx0fVxuXG5cblx0X2hhbmRsZVNjcm9sbGluZygpe1xuXHRcdGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RJbWFnZUNvbnRhaW5lcicpOyBcblx0XHRcblx0XHRpbWFnZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5zY3JvbGxUb3A7XG5cdFx0XHRzdGF0ZS5ub3RpZnlQcm9wZXJ0eUNoYW5nZShzY3JvbGxQb3NpdGlvbik7XHRcblx0XHRcdHRoaXMuX3VwZGF0ZU9wYWNpdHkoc2Nyb2xsUG9zaXRpb24pO1xuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0fVxuXHRcblx0X3VwZGF0ZURPTVBvc2l0aW9uKCl7XG5cdFx0Wy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QtaW1hZ2UnKV0uZm9yRWFjaCgoaW1hZ2UsaW5kZXgpPT57XG5cdFx0XHRzdGF0ZS5wcm9qZWN0c1tpbmRleF0ucG9zaXRpb24gPSBpbWFnZS5vZmZzZXRUb3A7XG5cdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8dWwgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIiBpZD1cInByb2plY3RJbWFnZUNvbnRhaW5lclwiPlxuXHRcdFx0XHQke1xuXHRcdFx0XHRcdHN0YXRlLnByb2plY3RzLnJlZHVjZSgoaHRtbCxwcm9qZWN0LGluZGV4KT0+e1xuXHRcdFx0XHRcdFx0aHRtbCArPSBgPGxpPjxpbWcgY2xhc3M9XCJwcm9qZWN0LWltYWdlXCIgZGF0YS1pbmRleD0ke2luZGV4fSBzdHlsZT1cIm9wYWNpdHk6JHtwcm9qZWN0Lm9wYWNpdHl9XCIgIHNyYz1cIiR7cHJvamVjdC5saW5rfVwiIC8+PC9saT5gO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gaHRtbDtcblx0XHRcdFx0XHR9LCcnKVxuXHRcdFx0XHR9XG5cdFx0XHRcdDxsaT48ZGl2IGNsYXNzPVwiZW1wdHktaW1hZ2VcIj48L2Rpdj48L2xpPlxuXHRcdFx0PC91bD5cblx0XHRgO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4ICBmcm9tICcuL2xpYi9pbmRleCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZUZvb3RlcjIgZXh0ZW5kcyBJbmRleHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYDxkaXYgaWQ9XCJjb250YWN0Rm9vdGVyXCIgIGNsYXNzPVwic2lkZS1mb290ZXJcIj5Db250YWN0PC9kaXY+YDtcblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAgJy4vbGliL2luZGV4JztcbmltcG9ydCB7c2Nyb2xsLGZhZGVJbixzY3JvbGxIZWlnaHQsb2Zmc2V0fSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdGF0ZSc7XG5cbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL01haW5QYWdlJztcbmltcG9ydCBTaWRlRm9vdGVyIGZyb20gJy4vU2lkZUZvb3Rlcic7XG5pbXBvcnQgU2lkZUZvb3RlcjIgZnJvbSAnLi9TaWRlRm9vdGVyMic7XG5pbXBvcnQgUHJvamVjdERlc2NyaXB0aW9uIGZyb20gJy4vUHJvamVjdERlc2NyaXB0aW9uJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7IFxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgSW5kZXh7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5zZWNvbmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZFBhZ2UnKTtcblx0XHR0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlyZFBhZ2UnKTtcblx0XHR0aGlzLl9zZXRfZWxlbWVudF9pZCgpO1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXHRcdHRoaXMuX3NldF9lbGVtZW50X3Bvc2l0aW9uKCk7XG5cdH1cblxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtNYWluUGFnZSxDb250YWN0LCBQcm9qZWN0RGVzY3JpcHRpb24sU2lkZUZvb3RlcjIsU2lkZUZvb3Rlcl07XG5cdH1cblxuXHRcblx0X3NldF9lbGVtZW50X2lkKCl7XG5cdFx0c3RhdGUucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XG5cdFx0XHRwcm9qZWN0LmlkID0gJ3Byb2plY3QnICsgTWF0aC5yYW5kb20oKTtcblx0XHR9KTtcblx0fVxuXG5cdF9zZXRfZWxlbWVudF9wb3NpdGlvbigpe1xuXHRcdE9iamVjdC5rZXlzKHN0YXRlLnBvc2l0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG5cdFx0XHRzdGF0ZS5wb3NpdGlvbltrZXldID0gb2Zmc2V0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleSkpLnRvcCB8fCAwO1xuXHRcdFx0Y29uc29sZS5sb2coc3RhdGUucG9zaXRpb25ba2V5XSxrZXkpXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogX2hhbmRsZVNjcm9sbGluZ1xuXHQgKlxuXHQgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuXHQgKi9cblx0X2hhbmRsZVNjcm9sbGluZygpe1xuXHRcdC8vc2VjdGlvbiBwb3NpdGlvblxuXHRcdFxuXHRcdC8vc2F2aW5nIHRoaXMgcG9zaXRpb25uIGZvciBjaGFuZ2Vcblx0XHRsZXQgcHJldmlvdXNfcG9zaXRpb24gPSAwO1xuXG5cdC8vXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbigpe1xuXHQvL1x0XHRcdGNvbnN0IHNlY29uZF9wYWdlX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24uc2Vjb25kUGFnZTtcblx0Ly9cdFx0XHRjb25zdCB0aGlyZF9wYWdlX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24udGhpcmRQYWdlO1xuXHQvL1x0XHRcdFxuXG5cdC8vXHRcdFx0Ly9nZXQgdGhlIHNjcm9sbGluZyBwb3NpdGlvbiBcblx0Ly9cdFx0XHRsZXQgc2Nyb2xsX3Bvc2l0aW9uID0gIHdpbmRvdy5zY3JvbGxZO1xuXHQvL1x0XHRcdGxldCBjaGFuZ2UgPSBzY3JvbGxfcG9zaXRpb24gLSBwcmV2aW91c19wb3NpdGlvbjtcdFxuIFx0Ly9cdFx0XHRcblx0Ly9cdFx0XHRwcmV2aW91c19wb3NpdGlvbiA9IHNjcm9sbF9wb3NpdGlvbjtcblxuXHQvL1x0XHRcdFx0XG5cdC8vXHRcdFx0aWYoIXN0YXRlLmRpZFNjcm9sbC5zZWNvbmRQYWdlICAmJiBjaGFuZ2UgPiAwKXtcblx0Ly9cdFx0XHRcdHN0YXRlLmRpZFNjcm9sbC5zZWNvbmRQYWdlICA9IHRydWU7XG5cblx0Ly9cdFx0XHRcdHNjcm9sbChzZWNvbmRfcGFnZV9wb3NpdGlvbiAtIDUwICk7XG5cdC8vXHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0Ly9cdFx0XHR9XG5cdC8vXHR9LmJpbmQodGhpcykpO1xuXG5cdH1cblxuXHRcblx0XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdDxkaXYgaWQ9XCJmaXJzdFBhZ2VcIiAgY2xhc3M9XCJyb3cgZmlyc3QtcGFnZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgbWFpbi1wYWdlICBtYWluLXBhZ2Utc21cIj5cblx0XHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJNYWluUGFnZVwiPjwvZGl2Plx0XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJzZWNvbmRQYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiAgZGF0YS1jb21wb25lbnQ9XCJQcm9qZWN0RGVzY3JpcHRpb25cIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGlkPVwidGhpcmRQYWdlXCIgIGNsYXNzPVwicm93IHRoaXJkLXBhZ2VcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9J2NvbC1tZC0xMicgZGF0YS1jb21wb25lbnQ9XCJDb250YWN0XCI+PC9kaXY+IDwvZGl2PiA8L2Rpdj4gYCB9IFxuXG5cbn1cbiIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkgeyBcblx0bmV3IEFwcCgnYXBwJyk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4e1xuXHQvKipcblx0ICogY29uc3RydWN0b3Jcblx0ICpcblx0ICogQHBhcmFtIGNvbXBvbmVudCBjb21wb25lbnQgbmFtZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29tcG9uZW50KXtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5jb21wb25lbnRTZWxlY3RvcigpLm1hcChxdWVyeVNlbGVjdG9yPT57XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblxuXHRcdH0pXG5cblx0XHRQcm9taXNlLmFsbChwcm9taXNlcylcblx0XHRcdC50aGVuKCgpPT57XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlICA9IHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdHRoaXMubG9hZENoaWxkVmlld3MoKTtcblx0XHRcdFx0dGhpcy5pbnNlcnRFbGVtZW50KHRlbXBsYXRlKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIGhvb2sgZm9yIHRoaW5ncyBhcmUgbG9hZGVkXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdC8qKlxuXHQgKiBwb3B1bGF0aW5nIHRoZSBpbm5lcmh0bWxcblx0ICpcblx0ICogQHBhcmFtIHRlbXBsYXRlXG5cdCAqL1xuXHRpbnNlcnRFbGVtZW50KHRlbXBsYXRlKXtcblx0XHR0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkuZm9yRWFjaChjb21wb25lbnRJbnN0YW5jZT0+e1xuXHRcdFx0Y29tcG9uZW50SW5zdGFuY2UuaW5uZXJIVE1MID0gIHRlbXBsYXRlO1xuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuICcnO1xuXG5cdH1cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbXTtcblx0XHRcblx0fVxuXHRjb21wb25lbnRTZWxlY3Rvcigpe1xuXHRcdHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY29tcG9uZW50PVwiJHt0aGlzLmNvbXBvbmVudH1cIl1gKV07XG5cdH1cblxuXHQvKipcblx0ICogbG9hZGluZyBsaXN0ZWQgY2hpbGQgdmlld3Ncblx0ICovXG5cdGxvYWRDaGlsZFZpZXdzKCl7XG5cdFx0aWYoIUFycmF5LmlzQXJyYXkodGhpcy5jaGlsZFZpZXdzKCkgKSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGlsZFZpZXdzKCkuZm9yRWFjaCh2aWV3PT57XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gdmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTtcblx0XHRcdG5ldyB2aWV3KGAke2NsYXNzTmFtZX1gKTtcblx0XHR9KVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleHtcblx0LyoqXG5cdCAqIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqIEBwYXJhbSBjb21wb25lbnQgY29tcG9uZW50IG5hbWVcblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudCl7XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cblx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5tYXAocXVlcnlTZWxlY3Rvcj0+e1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9Pntcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cblx0XHR9KVxuXG5cdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0XHQudGhlbigoKT0+e1xuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSAgPSB0aGlzLnJlbmRlcigpO1xuXHRcdFx0XHR0aGlzLmxvYWRDaGlsZFZpZXdzKCk7XG5cdFx0XHRcdHRoaXMuaW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSk7XG5cblx0XHRcdFx0dGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBob29rIGZvciB0aGluZ3MgYXJlIGxvYWRlZFxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHQvKipcblx0ICogcG9wdWxhdGluZyB0aGUgaW5uZXJodG1sXG5cdCAqXG5cdCAqIEBwYXJhbSB0ZW1wbGF0ZVxuXHQgKi9cblx0aW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSl7XG5cdFx0dGhpcy5jb21wb25lbnRTZWxlY3RvcigpLmZvckVhY2goY29tcG9uZW50SW5zdGFuY2U9Pntcblx0XHRcdGNvbXBvbmVudEluc3RhbmNlLmlubmVySFRNTCA9ICB0ZW1wbGF0ZTtcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAnJztcblxuXHR9XG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW107XG5cdFx0XG5cdH1cblx0Y29tcG9uZW50U2VsZWN0b3IoKXtcblx0XHRyZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNvbXBvbmVudD1cIiR7dGhpcy5jb21wb25lbnR9XCJdYCldO1xuXHR9XG5cblx0LyoqXG5cdCAqIGxvYWRpbmcgbGlzdGVkIGNoaWxkIHZpZXdzXG5cdCAqL1xuXHRsb2FkQ2hpbGRWaWV3cygpe1xuXHRcdGlmKCFBcnJheS5pc0FycmF5KHRoaXMuY2hpbGRWaWV3cygpICkpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hpbGRWaWV3cygpLmZvckVhY2godmlldz0+e1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9IHZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHRuZXcgdmlldyhgJHtjbGFzc05hbWV9YCk7XG5cdFx0fSlcblx0fVxufVxuIiwiZXhwb3J0ICBjb25zdCBzdGF0ZSAgPSAge1xuXHRkaWRTY3JvbGwgOiB7YWJvdXQgOiBmYWxzZSwgc2Vjb25kUGFnZSA6IGZhbHNlICwgdGhpcmRQYWdlIDogZmFsc2V9LFxuXHRwcm9qZWN0czogW3tcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiVEFTSyBPUkdBTklaRVJcIixcblx0XHRkZXNjcmlwdGlvbiA6XCJBIFRhc2sgT3JnYW5pemVyIHdlYiBhcHBsaWNhdGlvbiB3aXRoIEVtYmVyLmpzIGZyb250ZW5kIGFuZCBEamFuZ28gUmVzdCBGcmFtZXdvcmssIGludGVncmF0aW5nIE15U1FMIGFzIGRhdGFiYXNlIHN1cHBvcnQuIEN1cnJlbnRseSB3b3JraW5nIHJlY29tbWVuZGF0aW9ucyBzeXN0ZW0gdGhhdCB3aWxsIGFsbG93IHVzZXJzIHRvIGNyZWF0ZSBzbWFydCBsaXN0cy5cIixcblx0XHRza2lsbHM6IFwiREpBTkdPIFJFU1QsIEVNQkVSIEpTLCBNWVNRTCwgSEVST0tVLCBNZXRlcmlhbCBVSVwiLFxuXHRcdGxpbmsgOiBcImNzcy90aWNrZXRpbmctc3lzdGVtLmdpZlwiLCBcdFxuXHRcdHNob3cgOiB0cnVlLFxuXHRcdHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vYWJkdWxsYWgyODkxL1RpY2tldGluZ1N5c3RlbS1cIixcblx0XHRwb3NpdGlvbjogMCxcblx0XHRvcGFjaXR5OiAxLFxuXHRcdGRpZFNjcm9sbDogZmFsc2Vcblx0fSxcblx0e1xuXHRcdGlkIDogbnVsbCxcblx0XHR0aXRsZTogXCJPRkZMSU5FIEZJUlNUIFJFRERJVCBWSUVXRVJcIixcblx0XHRkZXNjcmlwdGlvbiA6XCJUaGlzIFJlYWN0IGFwcCB1dGlsaXplcyBzZXJ2aWNlIHdvcmtlciBhbmQgY2FjaGluZyB0byBnaXZlIG9mZmxpbmUgZXhwZXJpZW5jZSBmb3IgYSBzdWJyZWRkaXQoUmVkZGl0IHN1YmZvcnVtKS4gQ3VycmVudGx5LCBJIGFtIHdvcmtpbmcgb24gbWFraW5nIGl0IG1vcmUgZnJpZW5kbHkgZm9yIHJlYWRpbmcgYW5kIHdyaXRpbmcgcG9zdHNcIixcblx0XHRza2lsbHM6IFwiUmVhY3QsIFNlcnZpY2UgV29ya2VyLCBPYXV0aDIsIEhlcm9rdSwgQm9vdHN0cmFwXCIsXG5cdFx0bGluayA6IFwiY3NzL2NoYW5nZW15dmlldy5naWZcIixcblx0XHR1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FiZHVsbGFoMjg5MS9DaGFuZ2UtTXktVmlld1wiLFxuXHRcdHNob3cgOiBmYWxzZSxcblx0XHRwb3NpdGlvbiA6IDI4Mixcblx0XHRvcGFjaXR5OiAwLjIsXG5cdFx0ZGlkU2Nyb2xsOiBmYWxzZVxuXG5cdH0sXG5cdHtcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiVGFzayBPcmdhbml6ZXIgQW5kcm9pZFwiLFxuXHRcdGRlc2NyaXB0aW9uIDpcIlRoaXMgcHJvamVjdCBpcyBwb3J0aW5nIHRoZSBUYXNrIE9yZ2FuaXplciBXZWJzaXRlIHRvIEFuZHJvaWQgZGV2aWNlcy4gV3JpdHRlbiBpbiBKYXZhLiBcIixcblx0XHRza2lsbHM6IFwiSmF2YShBbmRyb2lkKVwiLFxuXHRcdGxpbmsgOiBcImNzcy9jbXYucG5nXCIsXG5cdFx0dXJsOlwiaHR0cHM6Ly9naXRodWIuY29tL2FiZHVsbGFoMjg5MS9UaWNrZXRpbmdTeXRlbS1BbmRyb2lkXCIsXG5cdFx0c2hvdyA6IGZhbHNlLFxuXHRcdHBvc2l0aW9uIDogNjI2LFxuXHRcdG9wYWNpdHk6IDAuMDUsXG5cdFx0ZGlkU2Nyb2xsOiBmYWxzZVxuXHR9XSxcblx0cG9zaXRpb246e1xuXHRcdGZpcnN0UGFnZTogbnVsbCxcblx0XHRzZWNvbmRQYWdlOiBudWxsLFxuXHRcdHRoaXJkUGFnZTogbnVsbFxuXHR9LFxuXG5cdHNjcm9sbDp7XG5cdFx0Zmlyc3RQYWdlOiBudWxsLFxuXHRcdHNlY29uZFBhZ2U6IG51bGwsXG5cdFx0dGhpcmRQYWdlOiBudWxsXG5cdH0sXG5cdG5vdGlmeVByb3BlcnR5Q2hhbmdlKCl7fVxufVxuIiwiZXhwb3J0IGNvbnN0IHNjcm9sbEhlaWdodCA9ICgpPT57XG5cdHJldHVybiBNYXRoLm1heCggZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG59XG5cbmV4cG9ydCBjb25zdCBzY3JvbGwgPSAobGFzdF9wb3N0aW9uLGluaXRpYWxfcG9zaXRpb249MCk9Pntcblx0Y29uc3QgcmF0ZSA9IDE1O1xuXHRsZXQgcG9zaXRpb24gPSBpbml0aWFsX3Bvc2l0aW9uIDtcblx0Y29uc3QgcmVwZWF0T2Z0ZW4gPSAoKT0+e1xuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24rcmF0ZTtcblx0XHR3aW5kb3cuc2Nyb2xsKDAscG9zaXRpb24pO1xuXHRcdGNvbnN0IGdsb2JhbElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcGVhdE9mdGVuKTtcblx0XHRpZihwb3NpdGlvbiA+PSBsYXN0X3Bvc3Rpb24pe1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2xvYmFsSUQpO1xuXHRcdH1cblx0fVxuXG5cdHJlcGVhdE9mdGVuKCk7XG59XG5cbmV4cG9ydCBjb25zdCBmYWRlSW4gPSAoZWxlbWVudCxpbml0aWFsPTApPT57XG5cdGNvbnN0IHJhdGUgPSAwLjA1O1xuXHQvL2ZpbmFsIG9wYWNpdHkgY2FuJ3QgYmUgYmlnZ2VyIHRoYW4gMVxuXHRjb25zdCBmaW5hbE9wYWNpdHkgPSAxO1xuXG5cdGxldCBvcGFjaXR5ID0gaW5pdGlhbDtcblxuXHRjb25zdCBfdGFzayA9ICgpPT57XG5cdFx0ZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcblx0XHRvcGFjaXR5ID0gb3BhY2l0eSArIHJhdGU7IFxuXHRcdGNvbnN0IGdsb2JhbElEID0gIHJlcXVlc3RBbmltYXRpb25GcmFtZShfdGFzayk7XG5cdFx0aWYob3BhY2l0eSA+PSBmaW5hbE9wYWNpdHkpe1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2xvYmFsSUQpXG5cdFx0fVxuXHR9XG5cblx0X3Rhc2soKTtcblxufVxuXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGVsKT0+IHtcbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgcmV0dXJuIHsgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCwgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCB9XG59XG5cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F2ZUFuaW1hdGlvbiBleHRlbmRzIEluZGV4IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRsZXQgIGRpZFNjcm9sbCA9IGZhbHNlO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLChldmVudCk9Pntcblx0XHRcdGNvbnN0IHNjcm9sbF9wb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZICsgNTAwO1xuXG5cdFx0XHRpZighZGlkU2Nyb2xsICYmIHN0YXRlLnNjcm9sbC5zZWNvbmRQYWdlIDwgc2Nyb2xsX3Bvc2l0aW9uKXtcblx0XHRcdFx0ZGlkU2Nyb2xsID0gdHJ1ZTtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZFBhZ2VCYWNrZ3JvdW5kJykuaW5uZXJIVE1MID0gdGhpcy5iYWNrZ3JvdW5kKCk7XG5cdFx0XHR9XG5cblx0XHR9KVxuXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gJzxkaXYgaWQ9XCJzZWNvbmRQYWdlQmFja2dyb3VuZFwiPiA8L2Rpdj4nO1xuXHR9XG5cdGJhY2tncm91bmQoKXtcblx0XHRcblx0XHRyZXR1cm4gYFxuXHRcdFx0PHN2ZyBpZD1cInByb2plY3RCYWNrZ3JvdW5kXCIgY2xhc3M9XCJ3YXZ5LWltYWdlXCIgdmlld0JveD1cIjAgMCA1MDAgNTAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0ICA8ZGVmcz5cblx0XHRcdCAgICA8cGF0dGVybiBpZD1cInBhdHRlcm4tMFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuXHRcdFx0ICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCIxMDBcIiBzdHlsZT1cImZpbGw6IGJsYWNrO1wiLz5cblx0XHRcdCAgICA8L3BhdHRlcm4+XG5cdFx0XHQgIDwvZGVmcz5cblx0XHRcdCAgPGc+XG5cdFx0XHQgICAgPHBhdGggc3R5bGU9XCJmaWxsOiByZ2IoMjE2LCAyMTYsIDIxNik7XCIvPlxuXHRcdFx0ICAgIDxwYXRoIHN0eWxlPVwiZmlsbDogcmdiKDIxNiwgMjE2LCAyMTYpO1wiLz5cblx0XHRcdCAgICA8cGF0aCBzdHlsZT1cImZpbGw6IHJnYigxOTQsIDI0OSwgMjgpO1wiIGQ9XCJNIDY4Ljg3NiA0NjAuNjQ3IEMgNzkuNTA3IDQ0Ny42ODIgMTMwLjk4NyA0MzIuNjQ4IDEzOC44ODkgNDc3LjI5MSBDIDE2NC4wNjMgNTc2LjE3MSAxNzUuMzIxIDQ3OC44ODEgMTkwLjUzNSA0NTAuMzUzIEMgMjA3LjgxNCA0MDguMjcgMjI2LjE4NiA1OTkuOTI2IDI3Ni40OSA0NTMuOTQyIEMgMjk2LjQxNSAzNTkuMTggMzQyLjE2MSA0NTAuNjEgMzQzLjIwMSA0NDkuMTM2IEMgNDU2LjY1MiA1NzMuNzM3IDQxMy41NDMgNDU0Ljk0MSA0NjAuNDYgNDI0LjIyNCBDIDQ2OS41NDMgNDEwLjA3MSA0NjguNzE0IDQzMS4wNzMgNDcxLjM4NyA0MzAuOTk4IEMgNDcyLjUxMSA0MzAuMTkgNDg4Ljk2OCA0NjMuOTg1IDQ5MC42MjIgNDY4LjI0MSBDIDUxMy44MjMgNDkyLjc5IDUwMi4zNjIgMTIxLjA3MiA0OTkuNyAxMTQuMjk2IEwgNDk4LjEyMSAxMDcuNjc1IEwgODYuOTI0IDExMC44MjcgTCAwLjMwMiAxMDkuNzcxIEwgMS41NjQgMTExLjM5NSBDIDQuNzc2IDg3LjM3NSAtMi44NjEgNDk1LjQxNiAzMi42NTYgNDkyLjczN1wiPlxuXHRcdFx0XHQ8YW5pbWF0ZVxuXHRcdFx0XHRcdCBhdHRyaWJ1dGVUeXBlPVwiWE1MXCIgXG5cdFx0XHRcdFx0YXR0cmlidXRlTmFtZT1cImRcIiBcblx0XHRcdFx0XHRmcm9tPVwiTSA3NC4wODkgMzEuMDg2IEMgODQuNzIgMTguMTIxIDEwMy41MDcgLTMwLjMyMiAxMTEuNDA5IDE0LjMyMSBDIDEzNi41ODMgMTEzLjIwMSAxODAuNjkxIDUxLjY5MSAxOTUuOTA1IDIzLjE2MyBDIDIxMy4xODQgLTE4LjkyIDI0NS45MDQgMTU2LjM3IDI5Ni4yMDggMTAuMzg2IEMgMzE2LjEzMyAtODQuMzc2IDM0NS4zMDkgMi44MzggMzQ2LjM0OSAxLjM2NCBDIDM4OS43NDggMTI2LjE3NSAzOTguMjA4IDQ0LjczMyA0MjAuNDAxIDI2LjgwMiBDIDQyOS40ODQgMTIuNjQ5IDQzNi40NSAzMy4xNzQgNDM5LjEyMyAzMy4wOTkgQyA0NDAuMjQ3IDMyLjI5MSA0NjIuNjgyIDQ1LjgwNiA0NjQuMzM2IDUwLjA2MiBDIDQ4Ny41MzcgNzQuNjExIDUwOS44ODMgNDAuODc1IDUwNy4yMjEgMzQuMDk5IEwgNTA1LjY0MiAyNy40NzggTCA5NC40NDUgMzAuNjMgTCA3LjgyMyAyOS41NzQgTCA5LjA4NSAzMS4xOTggQyAxMi4yOTcgNy4xNzggMTYuOTQxIDcxLjQ3OSA1Mi40NTggNjguOFwiXG5cdFx0XHRcdFx0IHRvPVwiTSA2OC44NzYgNDYwLjY0NyBDIDc5LjUwNyA0NDcuNjgyIDEzMC45ODcgNDMyLjY0OCAxMzguODg5IDQ3Ny4yOTEgQyAxNjQuMDYzIDU3Ni4xNzEgMTc1LjMyMSA0NzguODgxIDE5MC41MzUgNDUwLjM1MyBDIDIwNy44MTQgNDA4LjI3IDIyNi4xODYgNTk5LjkyNiAyNzYuNDkgNDUzLjk0MiBDIDI5Ni40MTUgMzU5LjE4IDM0Mi4xNjEgNDUwLjYxIDM0My4yMDEgNDQ5LjEzNiBDIDQ1Ni42NTIgNTczLjczNyA0MTMuNTQzIDQ1NC45NDEgNDYwLjQ2IDQyNC4yMjQgQyA0NjkuNTQzIDQxMC4wNzEgNDY4LjcxNCA0MzEuMDczIDQ3MS4zODcgNDMwLjk5OCBDIDQ3Mi41MTEgNDMwLjE5IDQ4OC45NjggNDYzLjk4NSA0OTAuNjIyIDQ2OC4yNDEgQyA1MTMuODIzIDQ5Mi43OSA1MDIuMzYyIDEyMS4wNzIgNDk5LjcgMTE0LjI5NiBMIDQ5OC4xMjEgMTA3LjY3NSBMIDg2LjkyNCAxMTAuODI3IEwgMC4zMDIgMTA5Ljc3MSBMIDEuNTY0IDExMS4zOTUgQyA0Ljc3NiA4Ny4zNzUgLTIuODYxIDQ5NS40MTYgMzIuNjU2IDQ5Mi43MzdcIlxuXHRcdFx0XHRcdGR1cj1cIjEwc1wiLz5cblx0XHRcdFx0PC9wYXRoPlxuXG5cblx0XHRcdCAgICA8cGF0aCBzdHlsZT1cImZpbGw6IHJnYigxMzUsIDIwNywgMjM1KTtcIiBkPVwiTSA3NS4wOTggNDM0LjQyOSBDIDk5LjM1NiAzOTYuOTkxIDE1MC42NSA0MTMuODg2IDE1OC43NjQgNDU2LjI5OCBDIDE4Mi4wOTcgNTUzLjU4NyAyMzUuMzc5IDQ3OC42MDIgMjQxLjc2MyA0NjAuNjA2IEMgMjc1LjEzOCA0MTQuODIxIDMwNC4zMjggNTk1LjAwNSAzNTIuMTA1IDQ1Ny43NzYgQyAzNzIuNTU5IDM2Ny44NDEgNDA5Ljg0NiA1MDguNzE4IDQxMC42MDEgNTAzLjg0NCBDIDQ0NC4xNDcgNTkzLjg1NSA0MTkuOTU2IDQwNi43MzkgNDM5LjI5NyAzODguMjk5IEMgNDUzLjQ5OSAzNzQuNzU4IDQ2Mi4wOTEgMzcyLjk0NiA0NjMuNjUzIDM3NC4yNzMgQyA0NjAuNjQ4IDM3My42MTUgNDgwLjg4NiA0MTQuOTU1IDQ4My45MzYgNDE5LjI1MiBDIDQ5OC41NjkgNDI2LjU4OCA1MDEuMTQyIDExNC4yNDEgNDk4LjM1OCAxMTUuMjMzIEwgNTAyLjY4MiAxMDkuMDc3IEwgODMuOTM3IDExMi4wNjYgTCAtNC4yNzQgMTExLjA2OSBMIC0wLjMwMyAxMTEuMTc5IEMgMy43ODkgMTE4Ljc1OCA2LjYwOSA0NzcuNDQ4IDM0LjA0NyA0NzMuMzEyXCI+XG5cdFx0XHRcdDxhbmltYXRlXG5cdFx0XHRcdFx0IGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiBcblx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lPVwiZFwiIFxuXHRcdFx0XHRcdGZyb209XCJNIDY1LjEzMiA0Mi4yNiBDIDg5LjM5IDQuODIyIDExMy43MDYgLTI5Ljc1NiAxMjEuODIgMTIuNjU2IEMgMTQ1LjE1MyAxMDkuOTQ1IDE4My41NjQgMzkuMjYgMTg5Ljk0OCAyMS4yNjQgQyAyMjMuMzIzIC0yNC41MjEgMjQ0Ljc5OSAxMzguNjc3IDI5Mi41NzYgMS40NDggQyAzMTMuMDMgLTg4LjQ4NyAzNDkuMDg2IDE4LjM0OSAzNDkuODQxIDEzLjQ3NSBDIDM4My4zODcgMTAzLjQ4NiA0MDMuNzM5IDMxLjA5MyA0MjMuMDggMTIuNjUzIEMgNDM3LjI4MiAtMC44ODggNDQ0LjU2IDQ2LjgyMiA0NDYuMTIyIDQ4LjE0OSBDIDQ0My4xMTcgNDcuNDkxIDQ3Ni4xMzkgNTEuMjcgNDc5LjE4OSA1NS41NjcgQyA0OTMuODIyIDYyLjkwMyA0OTcuMDUgMzMuMTY2IDUwMS4wNzQgMzIuODMzIEwgNTA1LjM5OCAyNi42NzcgTCA4Ni42NTMgMjkuNjY2IEwgLTEuNTU4IDI4LjY2OSBMIDIuNDEzIDI4Ljc3OSBDIDE2Ljc4NSAzMy4zNzUgMjYuODQxIDU4LjkwMyA1Mi4zMjkgNTUuMzMzXCJcblx0XHRcdFx0XHQgdG89XCJNIDc1LjA5OCA0MzQuNDI5IEMgOTkuMzU2IDM5Ni45OTEgMTUwLjY1IDQxMy44ODYgMTU4Ljc2NCA0NTYuMjk4IEMgMTgyLjA5NyA1NTMuNTg3IDIzNS4zNzkgNDc4LjYwMiAyNDEuNzYzIDQ2MC42MDYgQyAyNzUuMTM4IDQxNC44MjEgMzA0LjMyOCA1OTUuMDA1IDM1Mi4xMDUgNDU3Ljc3NiBDIDM3Mi41NTkgMzY3Ljg0MSA0MDkuODQ2IDUwOC43MTggNDEwLjYwMSA1MDMuODQ0IEMgNDQ0LjE0NyA1OTMuODU1IDQxOS45NTYgNDA2LjczOSA0MzkuMjk3IDM4OC4yOTkgQyA0NTMuNDk5IDM3NC43NTggNDYyLjA5MSAzNzIuOTQ2IDQ2My42NTMgMzc0LjI3MyBDIDQ2MC42NDggMzczLjYxNSA0ODAuODg2IDQxNC45NTUgNDgzLjkzNiA0MTkuMjUyIEMgNDk4LjU2OSA0MjYuNTg4IDUwMS4xNDIgMTE0LjI0MSA0OTguMzU4IDExNS4yMzMgTCA1MDIuNjgyIDEwOS4wNzcgTCA4My45MzcgMTEyLjA2NiBMIC00LjI3NCAxMTEuMDY5IEwgLTAuMzAzIDExMS4xNzkgQyAzLjc4OSAxMTguNzU4IDYuNjA5IDQ3Ny40NDggMzQuMDQ3IDQ3My4zMTJcIlxuXHRcdFx0XHRcdGR1cj1cIjEwc1wiLz5cblxuXHRcdFx0ICAgIDwvcGF0aD5cblx0XHRcdCAgICA8cmVjdCB4PVwiMS4yNVwiIHk9XCIwLjU0NVwiIHdpZHRoPVwiNTAwLjIxM1wiIGhlaWdodD1cIjExMS44MTFcIiBzdHlsZT1cImZpbGw6IHJnYigxMzUsIDIwNywgMjM1KTtcIiByeD1cIjIuODQ3XCIgcnk9XCIyLjg0N1wiPlxuXHRcdFx0XHQ8YW5pbWF0ZSBcblx0XHRcdFx0XHRhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcblx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lPVwiaGVpZ2h0XCJcblx0XHRcdFx0XHRmcm9tPVwiMjlcIlxuXHRcdFx0XHRcdHRvPSBcIjExMS44MTFcIlxuXHRcdFx0XHRcdGR1cj1cIjEwc1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdCAgICA8L3JlY3Q+XG5cdFx0XHQgIDwvZz5cblx0XHRcdDwvc3ZnPlxuXHRcdGA7XG5cblx0fVxufTtcbiJdfQ==
