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
          var position = event.srcElement.offsetTop || event.currentTarget.offsetTop; //section position

          var second_page_position = 3 / 10 * (0, _util.scrollHeight)();
          var third_page_position = 8 / 10 * (0, _util.scrollHeight)();
          _state.state.didScroll[pageName] = true;
          console.log(pageName);

          switch (pageName) {
            case 'secondPage':
              (0, _util.scroll)(second_page_position);
              (0, _util.fadeIn)(this.secondPageElementId);
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
    key: "_handleScrolling",
    value: function _handleScrolling() {
      console.log(_state.state.projects);
      window.addEventListener('scroll', function (event) {
        var scroll_position = window.scrollY + 500;
        var range = 500;
        console.log(scroll_position);

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

      return "\n\t\t\t".concat(_state.state.projects.reduce(function (html, project, index) {
        var showRow = project.show ? "block" : "none";
        var isEven = index % 2 === 0;
        var row = "\n\t\t\t\t\t\t<div id=\"".concat(project.id, "\" class=\"row project-row\" style=\"opacity:0\">\n\t\t\t\t\t\t\t<div class=\"col-md-").concat(isEven ? '4' : '8', "  image-container\">\n\t\t\t\t\t\t\t\t").concat(!isEven ? image(project) : project_description(project), "\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-").concat(isEven ? '8' : '4', " image-container\">\n\t\t\t\t\t\t\t\t").concat(isEven ? image(project) : project_description(project), "\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t");
        html += row + '\n';
        return html;
      }, ''), "\n\n\t\t");
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

      this._set_element_id();

      this._handleScrolling();
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
      });
    }
  }, {
    key: "_handleScrolling",
    value: function _handleScrolling() {
      //section position
      //saving this positionn for change
      var previous_position = 0;
      window.addEventListener('scroll', function () {
        this._set_element_position();

        var second_page_position = _state.state.position.secondPage;
        var third_page_position = _state.state.position.thirdPage; //get the scrolling position 

        var scroll_position = window.scrollY;
        var change = scroll_position - previous_position;
        previous_position = scroll_position;

        if (!_state.state.didScroll.secondPage && change > 0) {
          _state.state.didScroll.secondPage = true;
          (0, _util.scroll)(second_page_position - 50);
          (0, _util.fadeIn)(this.secondPageElementId);
        }

        if (!_state.state.didScroll.thirdPage && change > 0 && scroll_position >= third_page_position - 500) {
          _state.state.didScroll.thirdPage = true;
          (0, _util.scroll)((0, _util.scrollHeight)(), third_page_position);
          (0, _util.fadeIn)(this.thirdPageElementId);
        }
      }.bind(this));
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
    link: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/how-to-setup-website.jpg",
    show: true,
    position: 0,
    opacity: 1,
    didScroll: false
  }, {
    id: null,
    title: "OFFLINE FIRST REDDIT VIEWER",
    description: "THIS REACT APP UTILIZES SERVICE WORKER AND CACHING HEAVILY TO GIVE OFFLINE FIRST EXPERIENCE FOR A SUBREDDIT(REDDIT SUB FORUM).CURRENTLY, I AM WORKING ON MAKING IT MORE READER FRIENDLY AND WRITER FRIENDLY.",
    skills: "REACT , SERVICE WORKER , OAUTH2 . HEROKU, BOOTSTRAP",
    link: "https://cdn.blessthisstuff.com/imagens/stuff/clear-app-for-iphone.jpg",
    show: false,
    position: 282,
    opacity: 0.2,
    didScroll: false
  }, {
    id: null,
    title: "CHANGE MY VIEW READER",
    description: "A REDDIT CLIENT MADE USING REACT NATIVE WHICH ALLOWS USER ADD POST AND PERFORM ACTION ON THE APP(AUTHENTICATED USING OAUTH2)",
    skills: "REACT NATIVE , OAUTH2 , HEROKU",
    link: "https://phandroid.s3.amazonaws.com/wp-content/uploads/2016/04/Boost-for-reddit-android.jpg",
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

},{}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29udGFjdC5qcyIsInNyYy9NYWluUGFnZS5qcyIsInNyYy9OYXZpZ2F0aW9uLmpzIiwic3JjL1Byb2plY3REZXNjcmlwdGlvbi5qcyIsInNyYy9TaWRlRm9vdGVyLmpzIiwic3JjL1NpZGVGb290ZXIyLmpzIiwic3JjL2FwcC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9saWIvSW5kZXguanMiLCJzcmMvbGliL2luZGV4LmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFWjtBQUNQO0FBaUNBOzs7O0VBcENtQyxlOzs7Ozs7Ozs7Ozs7QUNGckM7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsUTs7Ozs7Ozs7Ozs7OztpQ0FDUjtBQUNYLGFBQU8sQ0FBQyxtQkFBRCxDQUFQO0FBQ0E7Ozs2QkFDTztBQUNQO0FBY0E7Ozs7RUFuQm9DLGM7Ozs7Ozs7Ozs7OztBQ0h0Qzs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFU7Ozs7Ozs7Ozs7Ozs7d0NBQ0Q7QUFDbEIsV0FBSyxtQkFBTCxHQUEyQixRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUEzQjtBQUNBLFdBQUssa0JBQUwsR0FBMEIsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBMUI7O0FBQ0EsV0FBSyxpQkFBTDtBQUNBOzs7d0NBR2tCO0FBQUE7O0FBQ2xCLHlCQUFJLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxtQkFBaEMsQ0FBSixFQUEwRCxPQUExRCxDQUFrRSxVQUFBLE1BQU0sRUFBRTtBQUN0RSxRQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFnQyxVQUFTLEtBQVQsRUFBZTtBQUNq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QVg7QUFBQSxNQUNBLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBUCxJQUFzQixRQUFRLENBQUMsZUFBVCxDQUF5QixVQUQ1RDtBQUFBLE1BRUEsU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFQLElBQXNCLFFBQVEsQ0FBQyxlQUFULENBQXlCLFNBRjNEO0FBR0EsU0FBTztBQUFFLElBQUEsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFMLEdBQVcsU0FBbEI7QUFBNkIsSUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUwsR0FBWTtBQUEvQyxHQUFQO0FBQ0gsQ0FMTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9JbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBJbmRleHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBtYXJnaW4tdG9wLTQgIG1hcmdpbi1sZWZ0LTQgcGFkZGluZy1yaWdodC00IHBhZGRpbmctbGVmdC00XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG5cdFx0XHRcdFx0XHQ8cD5JIGFtIEZ1bGxzdGFjayBkZXZlbG9wZXIgd2hvIGNhbiBoZWxwIHlvdSB3aXRoIHlvdXIgZGlnaXRhbCBuZWVkcy5JIGNhbiBoZWxwIHlvdSB3aXRoIHRoZSBjdXR0aW5nIGVkZ2UgdGVjaG5vbG9neS4gWW91IGNhbiBjb250YWN0IG1lIGhlcmUgXG5cdFx0XHRcdFx0XHRvciBlbWFpbCBhdCBhYmR1bGxhaDI4OTFAZ21haWwuY29tPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNSBsb2dpbi1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5Db21tZW50PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1sZyBcIj48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YFxuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIEluZGV4e1xuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtOYXZpZ2F0aW9uXTtcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBpbnRyb2R1Y3Rpb24gaW50cm9kdWN0aW9uLXNtXCI+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCIgY29sLWxnLTFcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJuYW1lLXBhZCBjb2wtbGctNiAgIGNvbC1zbS0xMFwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInRpdGxlXCI+PHN0cm9uZz5IaSw8L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0PHA+PHN0cm9uZz5XZWxjb21lIHRvIHRoaXMgY29ybmVyIG9mIHRoZSBpbnRlcm5ldDwvc3Ryb25nPjwvcD5cblx0XHRcdFx0XHQ8cD48c3Ryb25nPk15IE5hbWUgaXMgQWJkdWxsYWggUmFobWFuPC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxwPjxzdHJvbmc+SG93IGNhbiBJIGhlbHAgeW91IHRvZGF5PC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJOYXZpZ2F0aW9uXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRgO1xuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge2ZhZGVJbixzY3JvbGwsc2Nyb2xsSGVpZ2h0fSBmcm9tICAnLi91dGlsJztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgSW5kZXh7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5zZWNvbmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZFBhZ2UnKTtcblx0XHR0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlyZFBhZ2UnKTtcblx0XHR0aGlzLl9hZGRFdmVudExpc3RlbmVyKCk7XG5cdH1cblxuXG5cdF9hZGRFdmVudExpc3RlbmVyKCl7XG5cdFx0Wy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb24tYnV0dG9uJyldLmZvckVhY2goYnV0dG9uPT57XG5cdFx0ICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XHRjb25zdCBwYWdlTmFtZSA9IGV2ZW50LnNyY0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hdmlnYXRpb24nKXx8ZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2aWdhdGlvbicpO1xuXHRcdFx0ICAgIFx0Y29uc3QgcG9zaXRpb24gPSBldmVudC5zcmNFbGVtZW50Lm9mZnNldFRvcCB8fCBldmVudC5jdXJyZW50VGFyZ2V0Lm9mZnNldFRvcDtcblx0XHRcdFx0XG5cdFx0XHQgICAgXHQvL3NlY3Rpb24gcG9zaXRpb25cblx0XHRcdFx0Y29uc3Qgc2Vjb25kX3BhZ2VfcG9zaXRpb24gID0oICgzLzEwKSAqIHNjcm9sbEhlaWdodCgpKSA7XG5cdFx0XHRcdGNvbnN0IHRoaXJkX3BhZ2VfcG9zaXRpb24gPSAoOC8xMCkgKiBzY3JvbGxIZWlnaHQoKTtcblx0XHRcdFx0XG5cdFx0XHRcdHN0YXRlLmRpZFNjcm9sbFtwYWdlTmFtZV0gPSB0cnVlO1xuY29uc29sZS5sb2cocGFnZU5hbWUpXG5cdFx0XHQgICAgXHRzd2l0Y2gocGFnZU5hbWUpe1xuXHRcdFx0XHRcdGNhc2UgJ3NlY29uZFBhZ2UnOlxuXHRcdFx0XHRcdFx0c2Nyb2xsKHNlY29uZF9wYWdlX3Bvc2l0aW9uKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0IGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3RoaXJkUGFnZSc6XG5cdFx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0XHRcdHNjcm9sbCh0aGlyZF9wYWdlX3Bvc2l0aW9uKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvb3RlcicpLmNsYXNzTmFtZSArPScgY29udGFjdC1mb290ZXIgJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHQgICAgfS5iaW5kKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwiYWJvdXRcIiBjbGFzcz1cImNvbC1tZC00IGN1cnNvci1wb2ludGVyICBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL2FyY2hpdGVjdC5zdmdcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBkYXRhLW5hdmlnYXRpb249XCJzZWNvbmRQYWdlXCIgY2xhc3M9XCJjb2wtbWQtNCBjdXJzb3ItcG9pbnRlciBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL3Byb2plY3Rvci1zY3JlZW4uc3ZnXCIvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwidGhpcmRQYWdlXCIgY2xhc3M9XCJjb2wtbWQtNCBjdXJzb3ItcG9pbnRlciBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL2xpZ2h0YnVsYi5zdmdcIi8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblxuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7ZmFkZUluLG9mZnNldH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdERlc2NyaXB0aW9uIGV4dGVuZHMgSW5kZXh7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5faGFuZGxlU2Nyb2xsaW5nKCk7XG5cdFx0dGhpcy5fc2V0X3Bvc2l0aW9uKCk7XG5cdFxuXHR9XG5cdF9oYW5kbGVTY3JvbGxpbmcoKXtcblx0XHRjb25zb2xlLmxvZyhzdGF0ZS5wcm9qZWN0cylcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbihldmVudCl7XG5cdFx0XHRjb25zdCBzY3JvbGxfcG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWSArIDUwMDtcblx0XHRcdGNvbnN0IHJhbmdlID0gNTAwO1xuY29uc29sZS5sb2coc2Nyb2xsX3Bvc2l0aW9uKVxuXHRcdFx0Y29uc3Qgc2Nyb2xsZWRfcHJvamVjdCA9IHN0YXRlLnByb2plY3RzLmZpbmQocHJvamVjdD0+e1xuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHByb2plY3QucG9zaXRpb24udG9wO1xuXG5cdFx0XHRcdHJldHVybiBzY3JvbGxfcG9zaXRpb24gPj0gKHBvc2l0aW9uIC1yYW5nZSkgJiYgc2Nyb2xsX3Bvc2l0aW9uIDw9IChwb3NpdGlvbiArIHJhbmdlKTtcblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHRpZighc2Nyb2xsZWRfcHJvamVjdCl7cmV0dXJuIH07XG5cblx0XHRcdGNvbnN0IHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2Nyb2xsZWRfcHJvamVjdC5pZCk7XG5cblx0XHRcdGlmKCFzZWxlY3RlZF9wcm9qZWN0X2VsZW1lbnQgfHwgc2Nyb2xsZWRfcHJvamVjdC5kaWRTY3JvbGwpe3JldHVybiB9O1xuXHRcdFx0XG5cdFx0XHRzY3JvbGxlZF9wcm9qZWN0LmRpZFNjcm9sbCA9IHRydWU7XG5cdFx0XHRzZWxlY3RlZF9wcm9qZWN0X2VsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsZWRfcHJvamVjdC5wb3NpdGlvbjtcblx0XHRcdHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHRcdGZhZGVJbihzZWxlY3RlZF9wcm9qZWN0X2VsZW1lbnQpO1xuXG5cdFx0fSlcblxuXHR9XG5cblx0X3NldF9wb3NpdGlvbigpe1xuXHRcdHN0YXRlLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xuXHRcdFx0cHJvamVjdC5wb3NpdGlvbiA9IG9mZnNldChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0LmlkKSk7XG5cdFx0fSk7XG5cblxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHByb2plY3RfZGVzY3JpcHRpb24gPSAocHJvamVjdCk9Pntcblx0XHRcdHJldHVybiBgXG5cdFx0XHRcdDxoMz4ke3Byb2plY3QudGl0bGV9PC9oMz5cblx0XHRcdFx0PHA+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0PHA+JHtwcm9qZWN0LnNraWxsc308L3A+XG5cdFx0XHRgO1xuXHRcdH07XG5cblx0XHRjb25zdCBpbWFnZSA9IChwcm9qZWN0KT0+YDxpbWcgc3JjPVwiJHtwcm9qZWN0Lmxpbmt9XCIgYWx0PVwiJHtwcm9qZWN0LnRpdGxlfVwiIC8+YDtcblxuXHRcdHJldHVybiBgXG5cdFx0XHQke1xuXHRcdFx0XHRzdGF0ZS5wcm9qZWN0cy5yZWR1Y2UoKGh0bWwscHJvamVjdCxpbmRleCk9Pntcblx0XHRcdFx0XHRjb25zdCBzaG93Um93ID0gcHJvamVjdC5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCI7XG5cdFx0XHRcdFx0Y29uc3QgaXNFdmVuID0gaW5kZXggJSAyID09PTA7XG5cdFx0XHRcdFx0Y29uc3Qgcm93ID0gYFxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cIiR7cHJvamVjdC5pZH1cIiBjbGFzcz1cInJvdyBwcm9qZWN0LXJvd1wiIHN0eWxlPVwib3BhY2l0eTowXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtJHtpc0V2ZW4gPyAnNCc6ICc4J30gIGltYWdlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdCR7IWlzRXZlbiA/IGltYWdlKHByb2plY3QpIDogcHJvamVjdF9kZXNjcmlwdGlvbihwcm9qZWN0KX1cdFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0ke2lzRXZlbiA/ICc4JzogJzQnfSBpbWFnZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQke2lzRXZlbiA/IGltYWdlKHByb2plY3QpIDogcHJvamVjdF9kZXNjcmlwdGlvbihwcm9qZWN0KX1cdFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdGA7XG5cdFx0XHRcdFx0aHRtbCs9cm93ICsgJ1xcbic7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIGh0bWw7XG5cblx0XHRcdFx0fSwnJylcblxuXHRcdFx0fVxuXG5cdFx0YDtcblxuXHR9XG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVGb290ZXIgZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLl9oYW5kbGVTY3JvbGxpbmcoKTtcblxuXHRcdGNvbnNvbGUubG9nKHN0YXRlKVxuXG5cdH1cblx0XG5cdF91cGRhdGVPcGFjaXR5KHNjcm9sbFBvc2l0aW9uKXtcblxuXHRcdFxuXG5cdFx0Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluZGV4XScpXS5mb3JFYWNoKGN1cnJlbnREb209Pntcblx0XHRcdGNvbnN0IGluZGV4ID0gY3VycmVudERvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcblx0XHRcdGNvbnN0IHByb2plY3QgPSBzdGF0ZS5wcm9qZWN0c1tpbmRleF07XG5cblx0XHRcdGNvbnN0IHkgPSAoeCxwb3NpdGlvbik9Pntcblx0XHRcdFx0Y29uc3QgcmFuZ2UgPSBwcm9qZWN0LnVwcGVyX2VuZCAtIHByb2plY3QucG9zaXRpb247XG5cdFx0XHRcdGNvbnN0IG9wYWNpdHkgPSAtTWF0aC5wb3coKHgtcG9zaXRpb24pL3JhbmdlLDIpICsgMTtcblx0XHRcdFx0cmV0dXJuIG9wYWNpdHkgPiAwLjMgPyBvcGFjaXR5OiAwLjI7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHByb2plY3QucG9zaXRpb24pO1xuXHRcdFx0Y29uc3QgcG9zaXRpb25IaWdoZXN0T3BhY2l0eSA9ICBwcm9qZWN0LnBvc2l0aW9uO1xuXHRcdFx0Y29uc3QgY3VycmVudE9wYWNpdHkgPSB5KHNjcm9sbFBvc2l0aW9uLHBvc2l0aW9uSGlnaGVzdE9wYWNpdHkpO1xuY29uc29sZS5sb2coY3VycmVudE9wYWNpdHkpXG5cdFx0XHRjdXJyZW50RG9tLnN0eWxlLm9wYWNpdHkgPSBjdXJyZW50T3BhY2l0eTtcblx0XHRcdHByb2plY3Qub2Zmc2V0ID0gY3VycmVudE9wYWNpdHk7XG5cdFx0XHRwcm9qZWN0Lm9wYWNpdHkgPSBjdXJyZW50T3BhY2l0eTtcblx0fSlcblxuXHR9XG5cblxuXHRfaGFuZGxlU2Nyb2xsaW5nKCl7XG5cdFx0Y29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEltYWdlQ29udGFpbmVyJyk7IFxuXHRcdFxuXHRcdGltYWdlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0Y29uc3Qgc2Nyb2xsUG9zaXRpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcDtcblx0XHRcdHN0YXRlLm5vdGlmeVByb3BlcnR5Q2hhbmdlKHNjcm9sbFBvc2l0aW9uKTtcdFxuXHRcdFx0dGhpcy5fdXBkYXRlT3BhY2l0eShzY3JvbGxQb3NpdGlvbik7XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHR9XG5cdFxuXHRfdXBkYXRlRE9NUG9zaXRpb24oKXtcblx0XHRbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC1pbWFnZScpXS5mb3JFYWNoKChpbWFnZSxpbmRleCk9Pntcblx0XHRcdHN0YXRlLnByb2plY3RzW2luZGV4XS5wb3NpdGlvbiA9IGltYWdlLm9mZnNldFRvcDtcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDx1bCBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiIGlkPVwicHJvamVjdEltYWdlQ29udGFpbmVyXCI+XG5cdFx0XHRcdCR7XG5cdFx0XHRcdFx0c3RhdGUucHJvamVjdHMucmVkdWNlKChodG1sLHByb2plY3QsaW5kZXgpPT57XG5cdFx0XHRcdFx0XHRodG1sICs9IGA8bGk+PGltZyBjbGFzcz1cInByb2plY3QtaW1hZ2VcIiBkYXRhLWluZGV4PSR7aW5kZXh9IHN0eWxlPVwib3BhY2l0eToke3Byb2plY3Qub3BhY2l0eX1cIiAgc3JjPVwiJHtwcm9qZWN0Lmxpbmt9XCIgLz48L2xpPmA7XG5cblx0XHRcdFx0XHRcdHJldHVybiBodG1sO1xuXHRcdFx0XHRcdH0sJycpXG5cdFx0XHRcdH1cblx0XHRcdFx0PGxpPjxkaXYgY2xhc3M9XCJlbXB0eS1pbWFnZVwiPjwvZGl2PjwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdGA7XG5cblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggIGZyb20gJy4vbGliL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRm9vdGVyMiBleHRlbmRzIEluZGV4e1xuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgPGRpdiBpZD1cImNvbnRhY3RGb290ZXJcIiAgY2xhc3M9XCJzaWRlLWZvb3RlclwiPkNvbnRhY3Q8L2Rpdj5gO1xuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtzY3JvbGwsZmFkZUluLHNjcm9sbEhlaWdodCxvZmZzZXR9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vTWFpblBhZ2UnO1xuaW1wb3J0IFNpZGVGb290ZXIgZnJvbSAnLi9TaWRlRm9vdGVyJztcbmltcG9ydCBTaWRlRm9vdGVyMiBmcm9tICcuL1NpZGVGb290ZXIyJztcbmltcG9ydCBQcm9qZWN0RGVzY3JpcHRpb24gZnJvbSAnLi9Qcm9qZWN0RGVzY3JpcHRpb24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JzsgXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kUGFnZScpO1xuXHRcdHRoaXMudGhpcmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXJkUGFnZScpO1xuXHRcdHRoaXMuX3NldF9lbGVtZW50X2lkKCk7XG5cdFx0dGhpcy5faGFuZGxlU2Nyb2xsaW5nKCk7XG5cdH1cblxuXG5cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbTWFpblBhZ2UsQ29udGFjdCwgUHJvamVjdERlc2NyaXB0aW9uLFNpZGVGb290ZXIyLFNpZGVGb290ZXJdO1xuXHR9XG5cblx0XG5cdF9zZXRfZWxlbWVudF9pZCgpe1xuXHRcdHN0YXRlLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xuXHRcdFx0cHJvamVjdC5pZCA9ICdwcm9qZWN0JyArIE1hdGgucmFuZG9tKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRfc2V0X2VsZW1lbnRfcG9zaXRpb24oKXtcblx0XHRPYmplY3Qua2V5cyhzdGF0ZS5wb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuXHRcdFx0c3RhdGUucG9zaXRpb25ba2V5XSA9IG9mZnNldChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXkpKS50b3AgfHwgMDtcblx0XHR9KTtcblx0fVxuXG5cdF9oYW5kbGVTY3JvbGxpbmcoKXtcblx0XHQvL3NlY3Rpb24gcG9zaXRpb25cblx0XHRcblx0XHQvL3NhdmluZyB0aGlzIHBvc2l0aW9ubiBmb3IgY2hhbmdlXG5cdFx0bGV0IHByZXZpb3VzX3Bvc2l0aW9uID0gMDtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXMuX3NldF9lbGVtZW50X3Bvc2l0aW9uKCk7XG5cdFx0XHRcdGNvbnN0IHNlY29uZF9wYWdlX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24uc2Vjb25kUGFnZTtcblx0XHRcdFx0Y29uc3QgdGhpcmRfcGFnZV9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uLnRoaXJkUGFnZTtcblx0XHRcdFx0XG5cblx0XHRcdFx0Ly9nZXQgdGhlIHNjcm9sbGluZyBwb3NpdGlvbiBcblx0XHRcdFx0bGV0IHNjcm9sbF9wb3NpdGlvbiA9ICB3aW5kb3cuc2Nyb2xsWTtcblx0XHRcdFx0bGV0IGNoYW5nZSA9IHNjcm9sbF9wb3NpdGlvbiAtIHByZXZpb3VzX3Bvc2l0aW9uO1x0XG4gXHRcdFx0XHRcblx0XHRcdFx0cHJldmlvdXNfcG9zaXRpb24gPSBzY3JvbGxfcG9zaXRpb247XG5cblx0XHRcdFx0XHRcblx0XHRcdFx0aWYoIXN0YXRlLmRpZFNjcm9sbC5zZWNvbmRQYWdlICAmJiBjaGFuZ2UgPiAwKXtcblx0XHRcdFx0XHRzdGF0ZS5kaWRTY3JvbGwuc2Vjb25kUGFnZSAgPSB0cnVlO1xuXG5cdFx0XHRcdFx0c2Nyb2xsKHNlY29uZF9wYWdlX3Bvc2l0aW9uIC0gNTAgKTtcblx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYoIXN0YXRlLmRpZFNjcm9sbC50aGlyZFBhZ2UgJiYgY2hhbmdlID4gMCAmJiAgc2Nyb2xsX3Bvc2l0aW9uID49ICB0aGlyZF9wYWdlX3Bvc2l0aW9uIC0gNTAwICl7XG5cdFx0XHRcdFx0c3RhdGUuZGlkU2Nyb2xsLnRoaXJkUGFnZSA9IHRydWU7XG5cdFx0XHRcdFx0c2Nyb2xsKHNjcm9sbEhlaWdodCgpLHRoaXJkX3BhZ2VfcG9zaXRpb24pO1xuXHRcdFx0XHRcdGZhZGVJbih0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdH1cblxuXHRcblx0XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdDxkaXYgaWQ9XCJmaXJzdFBhZ2VcIiAgY2xhc3M9XCJyb3cgZmlyc3QtcGFnZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgbWFpbi1wYWdlICBtYWluLXBhZ2Utc21cIj5cblx0XHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJNYWluUGFnZVwiPjwvZGl2Plx0XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJzZWNvbmRQYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiAgZGF0YS1jb21wb25lbnQ9XCJQcm9qZWN0RGVzY3JpcHRpb25cIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGlkPVwidGhpcmRQYWdlXCIgIGNsYXNzPVwicm93IHRoaXJkLXBhZ2VcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9J2NvbC1tZC0xMicgZGF0YS1jb21wb25lbnQ9XCJDb250YWN0XCI+PC9kaXY+IDwvZGl2PiA8L2Rpdj4gYCB9IFxuXG5cbn1cbiIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkgeyBcblx0bmV3IEFwcCgnYXBwJyk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4e1xuXHQvKipcblx0ICogY29uc3RydWN0b3Jcblx0ICpcblx0ICogQHBhcmFtIGNvbXBvbmVudCBjb21wb25lbnQgbmFtZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29tcG9uZW50KXtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5jb21wb25lbnRTZWxlY3RvcigpLm1hcChxdWVyeVNlbGVjdG9yPT57XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblxuXHRcdH0pXG5cblx0XHRQcm9taXNlLmFsbChwcm9taXNlcylcblx0XHRcdC50aGVuKCgpPT57XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlICA9IHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdHRoaXMubG9hZENoaWxkVmlld3MoKTtcblx0XHRcdFx0dGhpcy5pbnNlcnRFbGVtZW50KHRlbXBsYXRlKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIGhvb2sgZm9yIHRoaW5ncyBhcmUgbG9hZGVkXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdC8qKlxuXHQgKiBwb3B1bGF0aW5nIHRoZSBpbm5lcmh0bWxcblx0ICpcblx0ICogQHBhcmFtIHRlbXBsYXRlXG5cdCAqL1xuXHRpbnNlcnRFbGVtZW50KHRlbXBsYXRlKXtcblx0XHR0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkuZm9yRWFjaChjb21wb25lbnRJbnN0YW5jZT0+e1xuXHRcdFx0Y29tcG9uZW50SW5zdGFuY2UuaW5uZXJIVE1MID0gIHRlbXBsYXRlO1xuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuICcnO1xuXG5cdH1cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbXTtcblx0XHRcblx0fVxuXHRjb21wb25lbnRTZWxlY3Rvcigpe1xuXHRcdHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY29tcG9uZW50PVwiJHt0aGlzLmNvbXBvbmVudH1cIl1gKV07XG5cdH1cblxuXHQvKipcblx0ICogbG9hZGluZyBsaXN0ZWQgY2hpbGQgdmlld3Ncblx0ICovXG5cdGxvYWRDaGlsZFZpZXdzKCl7XG5cdFx0aWYoIUFycmF5LmlzQXJyYXkodGhpcy5jaGlsZFZpZXdzKCkgKSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGlsZFZpZXdzKCkuZm9yRWFjaCh2aWV3PT57XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gdmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTtcblx0XHRcdG5ldyB2aWV3KGAke2NsYXNzTmFtZX1gKTtcblx0XHR9KVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleHtcblx0LyoqXG5cdCAqIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqIEBwYXJhbSBjb21wb25lbnQgY29tcG9uZW50IG5hbWVcblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudCl7XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cblx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5tYXAocXVlcnlTZWxlY3Rvcj0+e1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9Pntcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cblx0XHR9KVxuXG5cdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0XHQudGhlbigoKT0+e1xuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSAgPSB0aGlzLnJlbmRlcigpO1xuXHRcdFx0XHR0aGlzLmxvYWRDaGlsZFZpZXdzKCk7XG5cdFx0XHRcdHRoaXMuaW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSk7XG5cblx0XHRcdFx0dGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBob29rIGZvciB0aGluZ3MgYXJlIGxvYWRlZFxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHQvKipcblx0ICogcG9wdWxhdGluZyB0aGUgaW5uZXJodG1sXG5cdCAqXG5cdCAqIEBwYXJhbSB0ZW1wbGF0ZVxuXHQgKi9cblx0aW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSl7XG5cdFx0dGhpcy5jb21wb25lbnRTZWxlY3RvcigpLmZvckVhY2goY29tcG9uZW50SW5zdGFuY2U9Pntcblx0XHRcdGNvbXBvbmVudEluc3RhbmNlLmlubmVySFRNTCA9ICB0ZW1wbGF0ZTtcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAnJztcblxuXHR9XG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW107XG5cdFx0XG5cdH1cblx0Y29tcG9uZW50U2VsZWN0b3IoKXtcblx0XHRyZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNvbXBvbmVudD1cIiR7dGhpcy5jb21wb25lbnR9XCJdYCldO1xuXHR9XG5cblx0LyoqXG5cdCAqIGxvYWRpbmcgbGlzdGVkIGNoaWxkIHZpZXdzXG5cdCAqL1xuXHRsb2FkQ2hpbGRWaWV3cygpe1xuXHRcdGlmKCFBcnJheS5pc0FycmF5KHRoaXMuY2hpbGRWaWV3cygpICkpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hpbGRWaWV3cygpLmZvckVhY2godmlldz0+e1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9IHZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHRuZXcgdmlldyhgJHtjbGFzc05hbWV9YCk7XG5cdFx0fSlcblx0fVxufVxuIiwiZXhwb3J0ICBjb25zdCBzdGF0ZSAgPSAge1xuXHRkaWRTY3JvbGwgOiB7YWJvdXQgOiBmYWxzZSwgc2Vjb25kUGFnZSA6IGZhbHNlICwgdGhpcmRQYWdlIDogZmFsc2V9LFxuXHRwcm9qZWN0czogW3tcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiVEFTSyBPUkdBTklaRVJcIixcblx0XHRkZXNjcmlwdGlvbiA6XCJBIFRBU0sgT1JHQU5JWkVSIFdFQiBBUFBMSUNBVElPTiBXSVRIIEVNQkVSIEpTIEZST05URU5EIEFORCBESkFOR08gUkVTVCBGUkFNRVdPUkssSU5URUdSQVRJTkcgTVlTUUwgQVMgREFUQUJBU0UgU1VQUE9SVC5cIixcblx0XHRza2lsbHM6IFwiREpBTkdPIFJFU1QsIEVNQkVSIEpTLCBNWVNRTCwgSEVST0tVLCBCT09UU1RSQVBcIixcblx0XHRsaW5rIDogXCJodHRwczovL2Nkbi5jb2xvcmxpYi5jb20vd3Avd3AtY29udGVudC91cGxvYWRzL3NpdGVzLzIvaG93LXRvLXNldHVwLXdlYnNpdGUuanBnXCIsIFx0XG5cdFx0c2hvdyA6IHRydWUsXG5cdFx0cG9zaXRpb246IDAsXG5cdFx0b3BhY2l0eTogMSxcblx0XHRkaWRTY3JvbGw6IGZhbHNlXG5cdH0sXG5cdHtcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiT0ZGTElORSBGSVJTVCBSRURESVQgVklFV0VSXCIsXG5cdFx0ZGVzY3JpcHRpb24gOlwiVEhJUyBSRUFDVCBBUFAgVVRJTElaRVMgU0VSVklDRSBXT1JLRVIgQU5EIENBQ0hJTkcgSEVBVklMWSBUTyBHSVZFIE9GRkxJTkUgRklSU1QgRVhQRVJJRU5DRSBGT1IgQSBTVUJSRURESVQoUkVERElUIFNVQiBGT1JVTSkuQ1VSUkVOVExZLCBJIEFNIFdPUktJTkcgT04gTUFLSU5HIElUIE1PUkUgUkVBREVSIEZSSUVORExZIEFORCBXUklURVIgRlJJRU5ETFkuXCIsXG5cdFx0c2tpbGxzOiBcIlJFQUNUICwgU0VSVklDRSBXT1JLRVIgLCBPQVVUSDIgLiBIRVJPS1UsIEJPT1RTVFJBUFwiLFxuXHRcdGxpbmsgOiBcImh0dHBzOi8vY2RuLmJsZXNzdGhpc3N0dWZmLmNvbS9pbWFnZW5zL3N0dWZmL2NsZWFyLWFwcC1mb3ItaXBob25lLmpwZ1wiLFxuXHRcdHNob3cgOiBmYWxzZSxcblx0XHRwb3NpdGlvbiA6IDI4Mixcblx0XHRvcGFjaXR5OiAwLjIsXG5cdFx0ZGlkU2Nyb2xsOiBmYWxzZVxuXG5cdH0sXG5cdHtcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiQ0hBTkdFIE1ZIFZJRVcgUkVBREVSXCIsXG5cdFx0ZGVzY3JpcHRpb24gOlwiQSBSRURESVQgQ0xJRU5UIE1BREUgVVNJTkcgUkVBQ1QgTkFUSVZFIFdISUNIIEFMTE9XUyBVU0VSIEFERCBQT1NUIEFORCBQRVJGT1JNIEFDVElPTiBPTiBUSEUgQVBQKEFVVEhFTlRJQ0FURUQgVVNJTkcgT0FVVEgyKVwiLFxuXHRcdHNraWxsczogXCJSRUFDVCBOQVRJVkUgLCBPQVVUSDIgLCBIRVJPS1VcIixcblx0XHRsaW5rIDogXCJodHRwczovL3BoYW5kcm9pZC5zMy5hbWF6b25hd3MuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA0L0Jvb3N0LWZvci1yZWRkaXQtYW5kcm9pZC5qcGdcIixcblx0XHRzaG93IDogZmFsc2UsXG5cdFx0cG9zaXRpb24gOiA2MjYsXG5cdFx0b3BhY2l0eTogMC4wNSxcblx0XHRkaWRTY3JvbGw6IGZhbHNlXG5cdH1dLFxuXHRwb3NpdGlvbjp7XG5cdFx0Zmlyc3RQYWdlOiBudWxsLFxuXHRcdHNlY29uZFBhZ2U6IG51bGwsXG5cdFx0dGhpcmRQYWdlOiBudWxsXG5cdH0sXG5cdG5vdGlmeVByb3BlcnR5Q2hhbmdlKCl7fVxufVxuIiwiZXhwb3J0IGNvbnN0IHNjcm9sbEhlaWdodCA9ICgpPT57XG5cdHJldHVybiBNYXRoLm1heCggZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG59XG5cbmV4cG9ydCBjb25zdCBzY3JvbGwgPSAobGFzdF9wb3N0aW9uLGluaXRpYWxfcG9zaXRpb249MCk9Pntcblx0Y29uc3QgcmF0ZSA9IDE1O1xuXHRsZXQgcG9zaXRpb24gPSBpbml0aWFsX3Bvc2l0aW9uIDtcblx0Y29uc3QgcmVwZWF0T2Z0ZW4gPSAoKT0+e1xuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24rcmF0ZTtcblx0XHR3aW5kb3cuc2Nyb2xsKDAscG9zaXRpb24pO1xuXHRcdGNvbnN0IGdsb2JhbElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcGVhdE9mdGVuKTtcblx0XHRpZihwb3NpdGlvbiA+PSBsYXN0X3Bvc3Rpb24pe1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2xvYmFsSUQpO1xuXHRcdH1cblx0fVxuXG5cdHJlcGVhdE9mdGVuKCk7XG59XG5cbmV4cG9ydCBjb25zdCBmYWRlSW4gPSAoZWxlbWVudCxpbml0aWFsPTApPT57XG5cdGNvbnN0IHJhdGUgPSAwLjA1O1xuXHQvL2ZpbmFsIG9wYWNpdHkgY2FuJ3QgYmUgYmlnZ2VyIHRoYW4gMVxuXHRjb25zdCBmaW5hbE9wYWNpdHkgPSAxO1xuXG5cdGxldCBvcGFjaXR5ID0gaW5pdGlhbDtcblxuXHRjb25zdCBfdGFzayA9ICgpPT57XG5cdFx0ZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcblx0XHRvcGFjaXR5ID0gb3BhY2l0eSArIHJhdGU7IFxuXHRcdGNvbnN0IGdsb2JhbElEID0gIHJlcXVlc3RBbmltYXRpb25GcmFtZShfdGFzayk7XG5cdFx0aWYob3BhY2l0eSA+PSBmaW5hbE9wYWNpdHkpe1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2xvYmFsSUQpXG5cdFx0fVxuXHR9XG5cblx0X3Rhc2soKTtcblxufVxuXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGVsKT0+IHtcbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgcmV0dXJuIHsgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCwgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCB9XG59XG5cbiJdfQ==
