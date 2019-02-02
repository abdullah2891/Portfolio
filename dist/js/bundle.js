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
          var position = event.srcElement.offsetTop || event.currentTarget.offsetTop;
          _state.state.didScroll[pageName] = true;

          switch (pageName) {
            case 'secondPage':
              (0, _util.scroll)(_state.state.position.secondPage - 20);
              (0, _util.fadeIn)(this.secondPageElementId);
              break;

            case 'thirdPage':
              (0, _util.fadeIn)(this.secondPageElementId);
              (0, _util.scroll)(_state.state.position.thirdPage - 20);
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
        var range = 500;

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
        var row = "\n\t\t\t\t\t\t<div id=\"".concat(project.id, "\" class=\"row project-row\" style=\"opacity:0\">\n\t\t\t\t\t\t\t<div class=\"col-md-").concat(isEven ? '4' : '8', "  image-container\">\n\t\t\t\t\t\t\t\t").concat(!isEven ? image(project) : project_description(project), "\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-").concat(isEven ? '8' : '4', " image-container\">\n\t\t\t\t\t\t\t\t").concat(isEven ? image(project) : project_description(project), "\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t");
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
      });
    }
  }, {
    key: "_handleScrolling",
    value: function _handleScrolling() {
      //section position
      //saving this positionn for change
      var previous_position = 0;
      window.addEventListener('scroll', function () {
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

        if (!_state.state.didScroll.thirdPage && change > 0 && scroll_position >= third_page_position) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29udGFjdC5qcyIsInNyYy9NYWluUGFnZS5qcyIsInNyYy9OYXZpZ2F0aW9uLmpzIiwic3JjL1Byb2plY3REZXNjcmlwdGlvbi5qcyIsInNyYy9TaWRlRm9vdGVyLmpzIiwic3JjL1NpZGVGb290ZXIyLmpzIiwic3JjL2FwcC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9saWIvSW5kZXguanMiLCJzcmMvbGliL2luZGV4LmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3V0aWwuanMiLCJzcmMvd2F2ZS1hbmltYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFWjtBQUNQO0FBaUNBOzs7O0VBcENtQyxlOzs7Ozs7Ozs7Ozs7QUNGckM7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsUTs7Ozs7Ozs7Ozs7OztpQ0FDUjtBQUNYLGFBQU8sQ0FBQyxtQkFBRCxDQUFQO0FBQ0E7Ozs2QkFDTztBQUNQO0FBY0E7Ozs7RUFuQm9DLGM7Ozs7Ozs7Ozs7OztBQ0h0Qzs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFU7Ozs7Ozs7Ozs7Ozs7d0NBQ0Q7QUFDbEIsV0FBSyxtQkFBTCxHQUEyQixRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUEzQjtBQUNBLFdBQUssa0JBQUwsR0FBMEIsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBMUI7O0FBQ0EsV0FBSyxpQkFBTDtBQUNBOzs7d0NBR2tCO0FBQUE7O0FBQ2xCLHlCQUFJLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxtQkFBaEMsQ0FBSixFQUEwRCxPQUExRCxDQUFrRSxVQUFBLE1BQU0sRUFBRTtBQUN0RSxRQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixF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QUFJLElBQUksR0FBRyxFQUFFLENBQUMscUJBQUgsRUFBWDtBQUFBLE1BQ0EsVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFQLElBQXNCLFFBQVEsQ0FBQyxlQUFULENBQXlCLFVBRDVEO0FBQUEsTUFFQSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVAsSUFBc0IsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsU0FGM0Q7QUFHQSxTQUFPO0FBQUUsSUFBQSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUwsR0FBVyxTQUFsQjtBQUE2QixJQUFBLElBQUksRUFBRSxJQUFJLENBQUMsSUFBTCxHQUFZO0FBQS9DLEdBQVA7QUFDSCxDQUxNOzs7Ozs7Ozs7Ozs7QUN4Q1A7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsYTs7Ozs7Ozs7Ozs7Ozt3Q0FDRDtBQUFBOztBQUNsQixVQUFLLFNBQVMsR0FBRyxLQUFqQjtBQUNBLE1BQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWlDLFVBQUMsS0FBRCxFQUFTO0FBQ3pDLFlBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLEdBQXpDOztBQUVBLFlBQUcsQ0FBQyxTQUFELElBQWMsYUFBTSxNQUFOLENBQWEsVUFBYixHQUEwQixlQUEzQyxFQUEyRDtBQUMxRCxVQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0EsVUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0QsU0FBaEQsR0FBNEQsS0FBSSxDQUFDLFVBQUwsRUFBNUQ7QUFDQTtBQUVELE9BUkQ7QUFVQTs7OzZCQUVPO0FBQ1AsYUFBTyx3Q0FBUDtBQUNBOzs7aUNBQ1c7QUFFWDtBQTBDQTs7OztFQTlEeUMsYzs7O0FBK0QxQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9JbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBJbmRleHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBtYXJnaW4tdG9wLTQgIG1hcmdpbi1sZWZ0LTQgcGFkZGluZy1yaWdodC00IHBhZGRpbmctbGVmdC00XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG5cdFx0XHRcdFx0XHQ8cD5JIGFtIEZ1bGxzdGFjayBkZXZlbG9wZXIgd2hvIGNhbiBoZWxwIHlvdSB3aXRoIHlvdXIgZGlnaXRhbCBuZWVkcy5JIGNhbiBoZWxwIHlvdSB3aXRoIHRoZSBjdXR0aW5nIGVkZ2UgdGVjaG5vbG9neS4gWW91IGNhbiBjb250YWN0IG1lIGhlcmUgXG5cdFx0XHRcdFx0XHRvciBlbWFpbCBhdCBhYmR1bGxhaDI4OTFAZ21haWwuY29tPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNSBsb2dpbi1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5Db21tZW50PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1sZyBcIj48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YFxuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIEluZGV4e1xuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtOYXZpZ2F0aW9uXTtcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBpbnRyb2R1Y3Rpb24gaW50cm9kdWN0aW9uLXNtXCI+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCIgY29sLWxnLTFcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJuYW1lLXBhZCBjb2wtbGctNiAgIGNvbC1zbS0xMFwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInRpdGxlXCI+PHN0cm9uZz5IaSw8L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0PHA+PHN0cm9uZz5XZWxjb21lIHRvIHRoaXMgY29ybmVyIG9mIHRoZSBpbnRlcm5ldDwvc3Ryb25nPjwvcD5cblx0XHRcdFx0XHQ8cD48c3Ryb25nPk15IE5hbWUgaXMgQWJkdWxsYWggUmFobWFuPC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxwPjxzdHJvbmc+SG93IGNhbiBJIGhlbHAgeW91IHRvZGF5PC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJOYXZpZ2F0aW9uXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRgO1xuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge2ZhZGVJbixzY3JvbGwsc2Nyb2xsSGVpZ2h0fSBmcm9tICAnLi91dGlsJztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgSW5kZXh7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5zZWNvbmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZFBhZ2UnKTtcblx0XHR0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlyZFBhZ2UnKTtcblx0XHR0aGlzLl9hZGRFdmVudExpc3RlbmVyKCk7XG5cdH1cblxuXG5cdF9hZGRFdmVudExpc3RlbmVyKCl7XG5cdFx0Wy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb24tYnV0dG9uJyldLmZvckVhY2goYnV0dG9uPT57XG5cdFx0ICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XHRjb25zdCBwYWdlTmFtZSA9IGV2ZW50LnNyY0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hdmlnYXRpb24nKXx8ZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2aWdhdGlvbicpO1xuXHRcdFx0ICAgIFx0Y29uc3QgcG9zaXRpb24gPSBldmVudC5zcmNFbGVtZW50Lm9mZnNldFRvcCB8fCBldmVudC5jdXJyZW50VGFyZ2V0Lm9mZnNldFRvcDtcblx0XHRcdFx0XG5cdFx0XHRcdHN0YXRlLmRpZFNjcm9sbFtwYWdlTmFtZV0gPSB0cnVlO1xuXG5cdFx0XHQgICAgXHRzd2l0Y2gocGFnZU5hbWUpe1xuXHRcdFx0XHRcdGNhc2UgJ3NlY29uZFBhZ2UnOlxuXHRcdFx0XHRcdFx0c2Nyb2xsKHN0YXRlLnBvc2l0aW9uLnNlY29uZFBhZ2UgLTIwKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0IGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3RoaXJkUGFnZSc6XG5cdFx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0XHRcdHNjcm9sbChzdGF0ZS5wb3NpdGlvbi50aGlyZFBhZ2UgLTIwKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvb3RlcicpLmNsYXNzTmFtZSArPScgY29udGFjdC1mb290ZXIgJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHQgICAgfS5iaW5kKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwiYWJvdXRcIiAgdGl0bGU9XCJHaXRodWJcIiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS00IGN1cnNvci1wb2ludGVyICBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWJkdWxsYWgyODkxXCI+IDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL2FyY2hpdGVjdC5zdmdcIiAvPjwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwic2Vjb25kUGFnZVwiICB0aXRsZT1cIlByb2plY3RzXCIgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tNCBjdXJzb3ItcG9pbnRlciBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL3Byb2plY3Rvci1zY3JlZW4uc3ZnXCIvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwidGhpcmRQYWdlXCIgIHRpdGxlPVwiQ29udGFjdHNcIiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS00IGN1cnNvci1wb2ludGVyIG5hdmlnYXRpb24tYnV0dG9uXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cImljb25cIiBzcmM9XCJjc3MvaWNvbnMvbGlnaHRidWxiLnN2Z1wiLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHtmYWRlSW4sb2Zmc2V0fSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFdhdmVBbmltYXRpb24gZnJvbSAnLi93YXZlLWFuaW1hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3REZXNjcmlwdGlvbiBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXHRcdHRoaXMuX3NldF9wb3NpdGlvbigpO1xuXHRcblx0fVxuXG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW1dhdmVBbmltYXRpb25dO1xuXHR9XG5cdF9oYW5kbGVTY3JvbGxpbmcoKXtcblx0XHRjb25zb2xlLmxvZyhzdGF0ZS5wcm9qZWN0cylcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbihldmVudCl7XG5cdFx0XHRjb25zdCBzY3JvbGxfcG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcblx0XHRcdGNvbnN0IHJhbmdlID0gNTAwO1xuXG5cdFx0XHRjb25zdCBzY3JvbGxlZF9wcm9qZWN0ID0gc3RhdGUucHJvamVjdHMuZmluZChwcm9qZWN0PT57XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0gcHJvamVjdC5wb3NpdGlvbi50b3A7XG5cblx0XHRcdFx0cmV0dXJuIHNjcm9sbF9wb3NpdGlvbiA+PSAocG9zaXRpb24gLXJhbmdlKSAmJiBzY3JvbGxfcG9zaXRpb24gPD0gKHBvc2l0aW9uICsgcmFuZ2UpO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGlmKCFzY3JvbGxlZF9wcm9qZWN0KXtyZXR1cm4gfTtcblxuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRfcHJvamVjdF9lbGVtZW50PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY3JvbGxlZF9wcm9qZWN0LmlkKTtcblxuXHRcdFx0aWYoIXNlbGVjdGVkX3Byb2plY3RfZWxlbWVudCB8fCBzY3JvbGxlZF9wcm9qZWN0LmRpZFNjcm9sbCl7cmV0dXJuIH07XG5cdFx0XHRcblx0XHRcdHNjcm9sbGVkX3Byb2plY3QuZGlkU2Nyb2xsID0gdHJ1ZTtcblx0XHRcdHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxlZF9wcm9qZWN0LnBvc2l0aW9uO1xuXHRcdFx0c2VsZWN0ZWRfcHJvamVjdF9lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0ZmFkZUluKHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudCk7XG5cblx0XHR9KVxuXG5cdH1cblxuXHRfc2V0X3Bvc2l0aW9uKCl7XG5cdFx0c3RhdGUucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XG5cdFx0XHRwcm9qZWN0LnBvc2l0aW9uID0gb2Zmc2V0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QuaWQpKTtcblx0XHR9KTtcblxuXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcHJvamVjdF9kZXNjcmlwdGlvbiA9IChwcm9qZWN0KT0+e1xuXHRcdFx0cmV0dXJuIGBcblx0XHRcdFx0PGgzPiR7cHJvamVjdC50aXRsZX08L2gzPlxuXHRcdFx0XHQ8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHQ8cD4ke3Byb2plY3Quc2tpbGxzfTwvcD5cblx0XHRcdGA7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGltYWdlID0gKHByb2plY3QpPT5gPGltZyBzcmM9XCIke3Byb2plY3QubGlua31cIiBhbHQ9XCIke3Byb2plY3QudGl0bGV9XCIgLz5gO1xuXG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3MgZGF0YS1jb21wb25lbnQ9XCJXYXZlQW5pbWF0aW9uXCI+PC9kaXY+XHRcblx0XHRcdCR7XG5cdFx0XHRcdHN0YXRlLnByb2plY3RzLnJlZHVjZSgoaHRtbCxwcm9qZWN0LGluZGV4KT0+e1xuXHRcdFx0XHRcdGNvbnN0IHNob3dSb3cgPSBwcm9qZWN0LnNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcblx0XHRcdFx0XHRjb25zdCBpc0V2ZW4gPSBpbmRleCAlIDIgPT09MDtcblx0XHRcdFx0XHRjb25zdCByb3cgPSBgXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwiJHtwcm9qZWN0LmlkfVwiIGNsYXNzPVwicm93IHByb2plY3Qtcm93XCIgc3R5bGU9XCJvcGFjaXR5OjBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0ke2lzRXZlbiA/ICc0JzogJzgnfSAgaW1hZ2UtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0JHshaXNFdmVuID8gaW1hZ2UocHJvamVjdCkgOiBwcm9qZWN0X2Rlc2NyaXB0aW9uKHByb2plY3QpfVx0XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLSR7aXNFdmVuID8gJzgnOiAnNCd9IGltYWdlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdCR7aXNFdmVuID8gaW1hZ2UocHJvamVjdCkgOiBwcm9qZWN0X2Rlc2NyaXB0aW9uKHByb2plY3QpfVx0XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0YDtcblx0XHRcdFx0XHRodG1sKz1yb3cgKyAnXFxuJztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gaHRtbDtcblxuXHRcdFx0XHR9LCcnKVxuXG5cdFx0XHR9XG5cblx0XHRgO1xuXG5cdH1cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZUZvb3RlciBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXG5cdFx0Y29uc29sZS5sb2coc3RhdGUpXG5cblx0fVxuXHRcblx0X3VwZGF0ZU9wYWNpdHkoc2Nyb2xsUG9zaXRpb24pe1xuXHRcdFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbmRleF0nKV0uZm9yRWFjaChjdXJyZW50RG9tPT57XG5cdFx0XHRjb25zdCBpbmRleCA9IGN1cnJlbnREb20uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gc3RhdGUucHJvamVjdHNbaW5kZXhdO1xuXG5cdFx0XHRjb25zdCB5ID0gKHgscG9zaXRpb24pPT57XG5cdFx0XHRcdGNvbnN0IHJhbmdlID0gcHJvamVjdC51cHBlcl9lbmQgLSBwcm9qZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRjb25zdCBvcGFjaXR5ID0gLU1hdGgucG93KCh4LXBvc2l0aW9uKS9yYW5nZSwyKSArIDE7XG5cdFx0XHRcdHJldHVybiBvcGFjaXR5ID4gMC4zID8gb3BhY2l0eTogMC4yO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSBwYXJzZUludChwcm9qZWN0LnBvc2l0aW9uKTtcblx0XHRcdGNvbnN0IHBvc2l0aW9uSGlnaGVzdE9wYWNpdHkgPSAgcHJvamVjdC5wb3NpdGlvbjtcblx0XHRcdGNvbnN0IGN1cnJlbnRPcGFjaXR5ID0geShzY3JvbGxQb3NpdGlvbixwb3NpdGlvbkhpZ2hlc3RPcGFjaXR5KTtcbmNvbnNvbGUubG9nKGN1cnJlbnRPcGFjaXR5KVxuXHRcdFx0Y3VycmVudERvbS5zdHlsZS5vcGFjaXR5ID0gY3VycmVudE9wYWNpdHk7XG5cdFx0XHRwcm9qZWN0Lm9mZnNldCA9IGN1cnJlbnRPcGFjaXR5O1xuXHRcdFx0cHJvamVjdC5vcGFjaXR5ID0gY3VycmVudE9wYWNpdHk7XG5cdFx0fSlcblxuXHR9XG5cblxuXHRfaGFuZGxlU2Nyb2xsaW5nKCl7XG5cdFx0Y29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEltYWdlQ29udGFpbmVyJyk7IFxuXHRcdFxuXHRcdGltYWdlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0Y29uc3Qgc2Nyb2xsUG9zaXRpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcDtcblx0XHRcdHN0YXRlLm5vdGlmeVByb3BlcnR5Q2hhbmdlKHNjcm9sbFBvc2l0aW9uKTtcdFxuXHRcdFx0dGhpcy5fdXBkYXRlT3BhY2l0eShzY3JvbGxQb3NpdGlvbik7XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHR9XG5cdFxuXHRfdXBkYXRlRE9NUG9zaXRpb24oKXtcblx0XHRbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC1pbWFnZScpXS5mb3JFYWNoKChpbWFnZSxpbmRleCk9Pntcblx0XHRcdHN0YXRlLnByb2plY3RzW2luZGV4XS5wb3NpdGlvbiA9IGltYWdlLm9mZnNldFRvcDtcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDx1bCBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiIGlkPVwicHJvamVjdEltYWdlQ29udGFpbmVyXCI+XG5cdFx0XHRcdCR7XG5cdFx0XHRcdFx0c3RhdGUucHJvamVjdHMucmVkdWNlKChodG1sLHByb2plY3QsaW5kZXgpPT57XG5cdFx0XHRcdFx0XHRodG1sICs9IGA8bGk+PGltZyBjbGFzcz1cInByb2plY3QtaW1hZ2VcIiBkYXRhLWluZGV4PSR7aW5kZXh9IHN0eWxlPVwib3BhY2l0eToke3Byb2plY3Qub3BhY2l0eX1cIiAgc3JjPVwiJHtwcm9qZWN0Lmxpbmt9XCIgLz48L2xpPmA7XG5cblx0XHRcdFx0XHRcdHJldHVybiBodG1sO1xuXHRcdFx0XHRcdH0sJycpXG5cdFx0XHRcdH1cblx0XHRcdFx0PGxpPjxkaXYgY2xhc3M9XCJlbXB0eS1pbWFnZVwiPjwvZGl2PjwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdGA7XG5cblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggIGZyb20gJy4vbGliL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRm9vdGVyMiBleHRlbmRzIEluZGV4e1xuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgPGRpdiBpZD1cImNvbnRhY3RGb290ZXJcIiAgY2xhc3M9XCJzaWRlLWZvb3RlclwiPkNvbnRhY3Q8L2Rpdj5gO1xuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtzY3JvbGwsZmFkZUluLHNjcm9sbEhlaWdodCxvZmZzZXR9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vTWFpblBhZ2UnO1xuaW1wb3J0IFNpZGVGb290ZXIgZnJvbSAnLi9TaWRlRm9vdGVyJztcbmltcG9ydCBTaWRlRm9vdGVyMiBmcm9tICcuL1NpZGVGb290ZXIyJztcbmltcG9ydCBQcm9qZWN0RGVzY3JpcHRpb24gZnJvbSAnLi9Qcm9qZWN0RGVzY3JpcHRpb24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JzsgXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kUGFnZScpO1xuXHRcdHRoaXMudGhpcmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXJkUGFnZScpO1xuXHRcdHRoaXMuX3NldF9lbGVtZW50X2lkKCk7XG5cdFx0dGhpcy5faGFuZGxlU2Nyb2xsaW5nKCk7XG5cdFx0dGhpcy5fc2V0X2VsZW1lbnRfcG9zaXRpb24oKTtcblx0fVxuXG5cblxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtNYWluUGFnZSxDb250YWN0LCBQcm9qZWN0RGVzY3JpcHRpb24sU2lkZUZvb3RlcjIsU2lkZUZvb3Rlcl07XG5cdH1cblxuXHRcblx0X3NldF9lbGVtZW50X2lkKCl7XG5cdFx0c3RhdGUucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XG5cdFx0XHRwcm9qZWN0LmlkID0gJ3Byb2plY3QnICsgTWF0aC5yYW5kb20oKTtcblx0XHR9KTtcblx0fVxuXG5cdF9zZXRfZWxlbWVudF9wb3NpdGlvbigpe1xuXHRcdE9iamVjdC5rZXlzKHN0YXRlLnBvc2l0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG5cdFx0XHRzdGF0ZS5wb3NpdGlvbltrZXldID0gb2Zmc2V0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleSkpLnRvcCB8fCAwO1xuXHRcdH0pO1xuXHR9XG5cblx0X2hhbmRsZVNjcm9sbGluZygpe1xuXHRcdC8vc2VjdGlvbiBwb3NpdGlvblxuXHRcdFxuXHRcdC8vc2F2aW5nIHRoaXMgcG9zaXRpb25uIGZvciBjaGFuZ2Vcblx0XHRsZXQgcHJldmlvdXNfcG9zaXRpb24gPSAwO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsZnVuY3Rpb24oKXtcblx0XHRcdFx0Y29uc3Qgc2Vjb25kX3BhZ2VfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbi5zZWNvbmRQYWdlO1xuXHRcdFx0XHRjb25zdCB0aGlyZF9wYWdlX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24udGhpcmRQYWdlO1xuXHRcdFx0XHRcblxuXHRcdFx0XHQvL2dldCB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9uIFxuXHRcdFx0XHRsZXQgc2Nyb2xsX3Bvc2l0aW9uID0gIHdpbmRvdy5zY3JvbGxZO1xuXHRcdFx0XHRsZXQgY2hhbmdlID0gc2Nyb2xsX3Bvc2l0aW9uIC0gcHJldmlvdXNfcG9zaXRpb247XHRcbiBcdFx0XHRcdFxuXHRcdFx0XHRwcmV2aW91c19wb3NpdGlvbiA9IHNjcm9sbF9wb3NpdGlvbjtcblxuXHRcdFx0XHRcdFxuXHRcdFx0XHRpZighc3RhdGUuZGlkU2Nyb2xsLnNlY29uZFBhZ2UgICYmIGNoYW5nZSA+IDApe1xuXHRcdFx0XHRcdHN0YXRlLmRpZFNjcm9sbC5zZWNvbmRQYWdlICA9IHRydWU7XG5cblx0XHRcdFx0XHRzY3JvbGwoc2Vjb25kX3BhZ2VfcG9zaXRpb24gLSA1MCApO1xuXHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighc3RhdGUuZGlkU2Nyb2xsLnRoaXJkUGFnZSAmJiBjaGFuZ2UgPiAwICYmICBzY3JvbGxfcG9zaXRpb24gPj0gIHRoaXJkX3BhZ2VfcG9zaXRpb24pe1xuXHRcdFx0XHRcdHN0YXRlLmRpZFNjcm9sbC50aGlyZFBhZ2UgPSB0cnVlO1xuXHRcdFx0XHRcdHNjcm9sbChzY3JvbGxIZWlnaHQoKSx0aGlyZF9wYWdlX3Bvc2l0aW9uKTtcblx0XHRcdFx0XHRmYWRlSW4odGhpcy50aGlyZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHR9XG5cblx0XG5cdFxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHQ8ZGl2IGlkPVwiZmlyc3RQYWdlXCIgIGNsYXNzPVwicm93IGZpcnN0LXBhZ2VcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIG1haW4tcGFnZSAgbWFpbi1wYWdlLXNtXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGRhdGEtY29tcG9uZW50PVwiTWFpblBhZ2VcIj48L2Rpdj5cdFxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGlkPVwic2Vjb25kUGFnZVwiPlxuXHRcdFx0XHRcdDxkaXYgIGRhdGEtY29tcG9uZW50PVwiUHJvamVjdERlc2NyaXB0aW9uXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBpZD1cInRoaXJkUGFnZVwiICBjbGFzcz1cInJvdyB0aGlyZC1wYWdlXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPSdjb2wtbWQtMTInIGRhdGEtY29tcG9uZW50PVwiQ29udGFjdFwiPjwvZGl2PiA8L2Rpdj4gPC9kaXY+IGAgfSBcblxuXG59XG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHsgXG5cdG5ldyBBcHAoJ2FwcCcpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleHtcblx0LyoqXG5cdCAqIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqIEBwYXJhbSBjb21wb25lbnQgY29tcG9uZW50IG5hbWVcblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudCl7XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cblx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5tYXAocXVlcnlTZWxlY3Rvcj0+e1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9Pntcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cblx0XHR9KVxuXG5cdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0XHQudGhlbigoKT0+e1xuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSAgPSB0aGlzLnJlbmRlcigpO1xuXHRcdFx0XHR0aGlzLmxvYWRDaGlsZFZpZXdzKCk7XG5cdFx0XHRcdHRoaXMuaW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSk7XG5cblx0XHRcdFx0dGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBob29rIGZvciB0aGluZ3MgYXJlIGxvYWRlZFxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHQvKipcblx0ICogcG9wdWxhdGluZyB0aGUgaW5uZXJodG1sXG5cdCAqXG5cdCAqIEBwYXJhbSB0ZW1wbGF0ZVxuXHQgKi9cblx0aW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSl7XG5cdFx0dGhpcy5jb21wb25lbnRTZWxlY3RvcigpLmZvckVhY2goY29tcG9uZW50SW5zdGFuY2U9Pntcblx0XHRcdGNvbXBvbmVudEluc3RhbmNlLmlubmVySFRNTCA9ICB0ZW1wbGF0ZTtcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAnJztcblxuXHR9XG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW107XG5cdFx0XG5cdH1cblx0Y29tcG9uZW50U2VsZWN0b3IoKXtcblx0XHRyZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNvbXBvbmVudD1cIiR7dGhpcy5jb21wb25lbnR9XCJdYCldO1xuXHR9XG5cblx0LyoqXG5cdCAqIGxvYWRpbmcgbGlzdGVkIGNoaWxkIHZpZXdzXG5cdCAqL1xuXHRsb2FkQ2hpbGRWaWV3cygpe1xuXHRcdGlmKCFBcnJheS5pc0FycmF5KHRoaXMuY2hpbGRWaWV3cygpICkpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hpbGRWaWV3cygpLmZvckVhY2godmlldz0+e1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9IHZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHRuZXcgdmlldyhgJHtjbGFzc05hbWV9YCk7XG5cdFx0fSlcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXh7XG5cdC8qKlxuXHQgKiBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiBAcGFyYW0gY29tcG9uZW50IGNvbXBvbmVudCBuYW1lXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnQpe1xuXHRcdHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG5cdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkubWFwKHF1ZXJ5U2VsZWN0b3I9Pntcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXG5cdFx0fSlcblxuXHRcdFByb21pc2UuYWxsKHByb21pc2VzKVxuXHRcdFx0LnRoZW4oKCk9Pntcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgID0gdGhpcy5yZW5kZXIoKTtcblx0XHRcdFx0dGhpcy5sb2FkQ2hpbGRWaWV3cygpO1xuXHRcdFx0XHR0aGlzLmluc2VydEVsZW1lbnQodGVtcGxhdGUpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcblx0XHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogaG9vayBmb3IgdGhpbmdzIGFyZSBsb2FkZWRcblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0LyoqXG5cdCAqIHBvcHVsYXRpbmcgdGhlIGlubmVyaHRtbFxuXHQgKlxuXHQgKiBAcGFyYW0gdGVtcGxhdGVcblx0ICovXG5cdGluc2VydEVsZW1lbnQodGVtcGxhdGUpe1xuXHRcdHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5mb3JFYWNoKGNvbXBvbmVudEluc3RhbmNlPT57XG5cdFx0XHRjb21wb25lbnRJbnN0YW5jZS5pbm5lckhUTUwgPSAgdGVtcGxhdGU7XG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gJyc7XG5cblx0fVxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtdO1xuXHRcdFxuXHR9XG5cdGNvbXBvbmVudFNlbGVjdG9yKCl7XG5cdFx0cmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jb21wb25lbnQ9XCIke3RoaXMuY29tcG9uZW50fVwiXWApXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBsb2FkaW5nIGxpc3RlZCBjaGlsZCB2aWV3c1xuXHQgKi9cblx0bG9hZENoaWxkVmlld3MoKXtcblx0XHRpZighQXJyYXkuaXNBcnJheSh0aGlzLmNoaWxkVmlld3MoKSApKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmNoaWxkVmlld3MoKS5mb3JFYWNoKHZpZXc9Pntcblx0XHRcdGxldCBjbGFzc05hbWUgPSB2aWV3LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0bmV3IHZpZXcoYCR7Y2xhc3NOYW1lfWApO1xuXHRcdH0pXG5cdH1cbn1cbiIsImV4cG9ydCAgY29uc3Qgc3RhdGUgID0gIHtcblx0ZGlkU2Nyb2xsIDoge2Fib3V0IDogZmFsc2UsIHNlY29uZFBhZ2UgOiBmYWxzZSAsIHRoaXJkUGFnZSA6IGZhbHNlfSxcblx0cHJvamVjdHM6IFt7XG5cdFx0aWQgOiBudWxsLFxuXHRcdHRpdGxlOiBcIlRBU0sgT1JHQU5JWkVSXCIsXG5cdFx0ZGVzY3JpcHRpb24gOlwiQSBUQVNLIE9SR0FOSVpFUiBXRUIgQVBQTElDQVRJT04gV0lUSCBFTUJFUiBKUyBGUk9OVEVORCBBTkQgREpBTkdPIFJFU1QgRlJBTUVXT1JLLElOVEVHUkFUSU5HIE1ZU1FMIEFTIERBVEFCQVNFIFNVUFBPUlQuXCIsXG5cdFx0c2tpbGxzOiBcIkRKQU5HTyBSRVNULCBFTUJFUiBKUywgTVlTUUwsIEhFUk9LVSwgQk9PVFNUUkFQXCIsXG5cdFx0bGluayA6IFwiaHR0cHM6Ly9jZG4uY29sb3JsaWIuY29tL3dwL3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy8yL2hvdy10by1zZXR1cC13ZWJzaXRlLmpwZ1wiLCBcdFxuXHRcdHNob3cgOiB0cnVlLFxuXHRcdHBvc2l0aW9uOiAwLFxuXHRcdG9wYWNpdHk6IDEsXG5cdFx0ZGlkU2Nyb2xsOiBmYWxzZVxuXHR9LFxuXHR7XG5cdFx0aWQgOiBudWxsLFxuXHRcdHRpdGxlOiBcIk9GRkxJTkUgRklSU1QgUkVERElUIFZJRVdFUlwiLFxuXHRcdGRlc2NyaXB0aW9uIDpcIlRISVMgUkVBQ1QgQVBQIFVUSUxJWkVTIFNFUlZJQ0UgV09SS0VSIEFORCBDQUNISU5HIEhFQVZJTFkgVE8gR0lWRSBPRkZMSU5FIEZJUlNUIEVYUEVSSUVOQ0UgRk9SIEEgU1VCUkVERElUKFJFRERJVCBTVUIgRk9SVU0pLkNVUlJFTlRMWSwgSSBBTSBXT1JLSU5HIE9OIE1BS0lORyBJVCBNT1JFIFJFQURFUiBGUklFTkRMWSBBTkQgV1JJVEVSIEZSSUVORExZLlwiLFxuXHRcdHNraWxsczogXCJSRUFDVCAsIFNFUlZJQ0UgV09SS0VSICwgT0FVVEgyIC4gSEVST0tVLCBCT09UU1RSQVBcIixcblx0XHRsaW5rIDogXCJodHRwczovL2Nkbi5ibGVzc3RoaXNzdHVmZi5jb20vaW1hZ2Vucy9zdHVmZi9jbGVhci1hcHAtZm9yLWlwaG9uZS5qcGdcIixcblx0XHRzaG93IDogZmFsc2UsXG5cdFx0cG9zaXRpb24gOiAyODIsXG5cdFx0b3BhY2l0eTogMC4yLFxuXHRcdGRpZFNjcm9sbDogZmFsc2VcblxuXHR9LFxuXHR7XG5cdFx0aWQgOiBudWxsLFxuXHRcdHRpdGxlOiBcIkNIQU5HRSBNWSBWSUVXIFJFQURFUlwiLFxuXHRcdGRlc2NyaXB0aW9uIDpcIkEgUkVERElUIENMSUVOVCBNQURFIFVTSU5HIFJFQUNUIE5BVElWRSBXSElDSCBBTExPV1MgVVNFUiBBREQgUE9TVCBBTkQgUEVSRk9STSBBQ1RJT04gT04gVEhFIEFQUChBVVRIRU5USUNBVEVEIFVTSU5HIE9BVVRIMilcIixcblx0XHRza2lsbHM6IFwiUkVBQ1QgTkFUSVZFICwgT0FVVEgyICwgSEVST0tVXCIsXG5cdFx0bGluayA6IFwiaHR0cHM6Ly9waGFuZHJvaWQuczMuYW1hem9uYXdzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNC9Cb29zdC1mb3ItcmVkZGl0LWFuZHJvaWQuanBnXCIsXG5cdFx0c2hvdyA6IGZhbHNlLFxuXHRcdHBvc2l0aW9uIDogNjI2LFxuXHRcdG9wYWNpdHk6IDAuMDUsXG5cdFx0ZGlkU2Nyb2xsOiBmYWxzZVxuXHR9XSxcblx0cG9zaXRpb246e1xuXHRcdGZpcnN0UGFnZTogbnVsbCxcblx0XHRzZWNvbmRQYWdlOiBudWxsLFxuXHRcdHRoaXJkUGFnZTogbnVsbFxuXHR9LFxuXG5cdHNjcm9sbDp7XG5cdFx0Zmlyc3RQYWdlOiBudWxsLFxuXHRcdHNlY29uZFBhZ2U6IG51bGwsXG5cdFx0dGhpcmRQYWdlOiBudWxsXG5cdH0sXG5cdG5vdGlmeVByb3BlcnR5Q2hhbmdlKCl7fVxufVxuIiwiZXhwb3J0IGNvbnN0IHNjcm9sbEhlaWdodCA9ICgpPT57XG5cdHJldHVybiBNYXRoLm1heCggZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG59XG5cbmV4cG9ydCBjb25zdCBzY3JvbGwgPSAobGFzdF9wb3N0aW9uLGluaXRpYWxfcG9zaXRpb249MCk9Pntcblx0Y29uc3QgcmF0ZSA9IDE1O1xuXHRsZXQgcG9zaXRpb24gPSBpbml0aWFsX3Bvc2l0aW9uIDtcblx0Y29uc3QgcmVwZWF0T2Z0ZW4gPSAoKT0+e1xuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24rcmF0ZTtcblx0XHR3aW5kb3cuc2Nyb2xsKDAscG9zaXRpb24pO1xuXHRcdGNvbnN0IGdsb2JhbElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcGVhdE9mdGVuKTtcblx0XHRpZihwb3NpdGlvbiA+PSBsYXN0X3Bvc3Rpb24pe1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2xvYmFsSUQpO1xuXHRcdH1cblx0fVxuXG5cdHJlcGVhdE9mdGVuKCk7XG59XG5cbmV4cG9ydCBjb25zdCBmYWRlSW4gPSAoZWxlbWVudCxpbml0aWFsPTApPT57XG5cdGNvbnN0IHJhdGUgPSAwLjA1O1xuXHQvL2ZpbmFsIG9wYWNpdHkgY2FuJ3QgYmUgYmlnZ2VyIHRoYW4gMVxuXHRjb25zdCBmaW5hbE9wYWNpdHkgPSAxO1xuXG5cdGxldCBvcGFjaXR5ID0gaW5pdGlhbDtcblxuXHRjb25zdCBfdGFzayA9ICgpPT57XG5cdFx0ZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcblx0XHRvcGFjaXR5ID0gb3BhY2l0eSArIHJhdGU7IFxuXHRcdGNvbnN0IGdsb2JhbElEID0gIHJlcXVlc3RBbmltYXRpb25GcmFtZShfdGFzayk7XG5cdFx0aWYob3BhY2l0eSA+PSBmaW5hbE9wYWNpdHkpe1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2xvYmFsSUQpXG5cdFx0fVxuXHR9XG5cblx0X3Rhc2soKTtcblxufVxuXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGVsKT0+IHtcbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgcmV0dXJuIHsgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCwgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCB9XG59XG5cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F2ZUFuaW1hdGlvbiBleHRlbmRzIEluZGV4IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRsZXQgIGRpZFNjcm9sbCA9IGZhbHNlO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLChldmVudCk9Pntcblx0XHRcdGNvbnN0IHNjcm9sbF9wb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZICsgNTAwO1xuXG5cdFx0XHRpZighZGlkU2Nyb2xsICYmIHN0YXRlLnNjcm9sbC5zZWNvbmRQYWdlIDwgc2Nyb2xsX3Bvc2l0aW9uKXtcblx0XHRcdFx0ZGlkU2Nyb2xsID0gdHJ1ZTtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZFBhZ2VCYWNrZ3JvdW5kJykuaW5uZXJIVE1MID0gdGhpcy5iYWNrZ3JvdW5kKCk7XG5cdFx0XHR9XG5cblx0XHR9KVxuXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gJzxkaXYgaWQ9XCJzZWNvbmRQYWdlQmFja2dyb3VuZFwiPiA8L2Rpdj4nO1xuXHR9XG5cdGJhY2tncm91bmQoKXtcblx0XHRcblx0XHRyZXR1cm4gYFxuXHRcdFx0PHN2ZyBpZD1cInByb2plY3RCYWNrZ3JvdW5kXCIgY2xhc3M9XCJ3YXZ5LWltYWdlXCIgdmlld0JveD1cIjAgMCA1MDAgNTAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0ICA8ZGVmcz5cblx0XHRcdCAgICA8cGF0dGVybiBpZD1cInBhdHRlcm4tMFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuXHRcdFx0ICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCIxMDBcIiBzdHlsZT1cImZpbGw6IGJsYWNrO1wiLz5cblx0XHRcdCAgICA8L3BhdHRlcm4+XG5cdFx0XHQgIDwvZGVmcz5cblx0XHRcdCAgPGc+XG5cdFx0XHQgICAgPHBhdGggc3R5bGU9XCJmaWxsOiByZ2IoMjE2LCAyMTYsIDIxNik7XCIvPlxuXHRcdFx0ICAgIDxwYXRoIHN0eWxlPVwiZmlsbDogcmdiKDIxNiwgMjE2LCAyMTYpO1wiLz5cblx0XHRcdCAgICA8cGF0aCBzdHlsZT1cImZpbGw6IHJnYigxOTQsIDI0OSwgMjgpO1wiIGQ9XCJNIDY4Ljg3NiA0NjAuNjQ3IEMgNzkuNTA3IDQ0Ny42ODIgMTMwLjk4NyA0MzIuNjQ4IDEzOC44ODkgNDc3LjI5MSBDIDE2NC4wNjMgNTc2LjE3MSAxNzUuMzIxIDQ3OC44ODEgMTkwLjUzNSA0NTAuMzUzIEMgMjA3LjgxNCA0MDguMjcgMjI2LjE4NiA1OTkuOTI2IDI3Ni40OSA0NTMuOTQyIEMgMjk2LjQxNSAzNTkuMTggMzQyLjE2MSA0NTAuNjEgMzQzLjIwMSA0NDkuMTM2IEMgNDU2LjY1MiA1NzMuNzM3IDQxMy41NDMgNDU0Ljk0MSA0NjAuNDYgNDI0LjIyNCBDIDQ2OS41NDMgNDEwLjA3MSA0NjguNzE0IDQzMS4wNzMgNDcxLjM4NyA0MzAuOTk4IEMgNDcyLjUxMSA0MzAuMTkgNDg4Ljk2OCA0NjMuOTg1IDQ5MC42MjIgNDY4LjI0MSBDIDUxMy44MjMgNDkyLjc5IDUwMi4zNjIgMTIxLjA3MiA0OTkuNyAxMTQuMjk2IEwgNDk4LjEyMSAxMDcuNjc1IEwgODYuOTI0IDExMC44MjcgTCAwLjMwMiAxMDkuNzcxIEwgMS41NjQgMTExLjM5NSBDIDQuNzc2IDg3LjM3NSAtMi44NjEgNDk1LjQxNiAzMi42NTYgNDkyLjczN1wiPlxuXHRcdFx0XHQ8YW5pbWF0ZVxuXHRcdFx0XHRcdCBhdHRyaWJ1dGVUeXBlPVwiWE1MXCIgXG5cdFx0XHRcdFx0YXR0cmlidXRlTmFtZT1cImRcIiBcblx0XHRcdFx0XHRmcm9tPVwiTSA3NC4wODkgMzEuMDg2IEMgODQuNzIgMTguMTIxIDEwMy41MDcgLTMwLjMyMiAxMTEuNDA5IDE0LjMyMSBDIDEzNi41ODMgMTEzLjIwMSAxODAuNjkxIDUxLjY5MSAxOTUuOTA1IDIzLjE2MyBDIDIxMy4xODQgLTE4LjkyIDI0NS45MDQgMTU2LjM3IDI5Ni4yMDggMTAuMzg2IEMgMzE2LjEzMyAtODQuMzc2IDM0NS4zMDkgMi44MzggMzQ2LjM0OSAxLjM2NCBDIDM4OS43NDggMTI2LjE3NSAzOTguMjA4IDQ0LjczMyA0MjAuNDAxIDI2LjgwMiBDIDQyOS40ODQgMTIuNjQ5IDQzNi40NSAzMy4xNzQgNDM5LjEyMyAzMy4wOTkgQyA0NDAuMjQ3IDMyLjI5MSA0NjIuNjgyIDQ1LjgwNiA0NjQuMzM2IDUwLjA2MiBDIDQ4Ny41MzcgNzQuNjExIDUwOS44ODMgNDAuODc1IDUwNy4yMjEgMzQuMDk5IEwgNTA1LjY0MiAyNy40NzggTCA5NC40NDUgMzAuNjMgTCA3LjgyMyAyOS41NzQgTCA5LjA4NSAzMS4xOTggQyAxMi4yOTcgNy4xNzggMTYuOTQxIDcxLjQ3OSA1Mi40NTggNjguOFwiXG5cdFx0XHRcdFx0IHRvPVwiTSA2OC44NzYgNDYwLjY0NyBDIDc5LjUwNyA0NDcuNjgyIDEzMC45ODcgNDMyLjY0OCAxMzguODg5IDQ3Ny4yOTEgQyAxNjQuMDYzIDU3Ni4xNzEgMTc1LjMyMSA0NzguODgxIDE5MC41MzUgNDUwLjM1MyBDIDIwNy44MTQgNDA4LjI3IDIyNi4xODYgNTk5LjkyNiAyNzYuNDkgNDUzLjk0MiBDIDI5Ni40MTUgMzU5LjE4IDM0Mi4xNjEgNDUwLjYxIDM0My4yMDEgNDQ5LjEzNiBDIDQ1Ni42NTIgNTczLjczNyA0MTMuNTQzIDQ1NC45NDEgNDYwLjQ2IDQyNC4yMjQgQyA0NjkuNTQzIDQxMC4wNzEgNDY4LjcxNCA0MzEuMDczIDQ3MS4zODcgNDMwLjk5OCBDIDQ3Mi41MTEgNDMwLjE5IDQ4OC45NjggNDYzLjk4NSA0OTAuNjIyIDQ2OC4yNDEgQyA1MTMuODIzIDQ5Mi43OSA1MDIuMzYyIDEyMS4wNzIgNDk5LjcgMTE0LjI5NiBMIDQ5OC4xMjEgMTA3LjY3NSBMIDg2LjkyNCAxMTAuODI3IEwgMC4zMDIgMTA5Ljc3MSBMIDEuNTY0IDExMS4zOTUgQyA0Ljc3NiA4Ny4zNzUgLTIuODYxIDQ5NS40MTYgMzIuNjU2IDQ5Mi43MzdcIlxuXHRcdFx0XHRcdGR1cj1cIjEwc1wiLz5cblx0XHRcdFx0PC9wYXRoPlxuXG5cblx0XHRcdCAgICA8cGF0aCBzdHlsZT1cImZpbGw6IHJnYigxMzUsIDIwNywgMjM1KTtcIiBkPVwiTSA3NS4wOTggNDM0LjQyOSBDIDk5LjM1NiAzOTYuOTkxIDE1MC42NSA0MTMuODg2IDE1OC43NjQgNDU2LjI5OCBDIDE4Mi4wOTcgNTUzLjU4NyAyMzUuMzc5IDQ3OC42MDIgMjQxLjc2MyA0NjAuNjA2IEMgMjc1LjEzOCA0MTQuODIxIDMwNC4zMjggNTk1LjAwNSAzNTIuMTA1IDQ1Ny43NzYgQyAzNzIuNTU5IDM2Ny44NDEgNDA5Ljg0NiA1MDguNzE4IDQxMC42MDEgNTAzLjg0NCBDIDQ0NC4xNDcgNTkzLjg1NSA0MTkuOTU2IDQwNi43MzkgNDM5LjI5NyAzODguMjk5IEMgNDUzLjQ5OSAzNzQuNzU4IDQ2Mi4wOTEgMzcyLjk0NiA0NjMuNjUzIDM3NC4yNzMgQyA0NjAuNjQ4IDM3My42MTUgNDgwLjg4NiA0MTQuOTU1IDQ4My45MzYgNDE5LjI1MiBDIDQ5OC41NjkgNDI2LjU4OCA1MDEuMTQyIDExNC4yNDEgNDk4LjM1OCAxMTUuMjMzIEwgNTAyLjY4MiAxMDkuMDc3IEwgODMuOTM3IDExMi4wNjYgTCAtNC4yNzQgMTExLjA2OSBMIC0wLjMwMyAxMTEuMTc5IEMgMy43ODkgMTE4Ljc1OCA2LjYwOSA0NzcuNDQ4IDM0LjA0NyA0NzMuMzEyXCI+XG5cdFx0XHRcdDxhbmltYXRlXG5cdFx0XHRcdFx0IGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiBcblx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lPVwiZFwiIFxuXHRcdFx0XHRcdGZyb209XCJNIDY1LjEzMiA0Mi4yNiBDIDg5LjM5IDQuODIyIDExMy43MDYgLTI5Ljc1NiAxMjEuODIgMTIuNjU2IEMgMTQ1LjE1MyAxMDkuOTQ1IDE4My41NjQgMzkuMjYgMTg5Ljk0OCAyMS4yNjQgQyAyMjMuMzIzIC0yNC41MjEgMjQ0Ljc5OSAxMzguNjc3IDI5Mi41NzYgMS40NDggQyAzMTMuMDMgLTg4LjQ4NyAzNDkuMDg2IDE4LjM0OSAzNDkuODQxIDEzLjQ3NSBDIDM4My4zODcgMTAzLjQ4NiA0MDMuNzM5IDMxLjA5MyA0MjMuMDggMTIuNjUzIEMgNDM3LjI4MiAtMC44ODggNDQ0LjU2IDQ2LjgyMiA0NDYuMTIyIDQ4LjE0OSBDIDQ0My4xMTcgNDcuNDkxIDQ3Ni4xMzkgNTEuMjcgNDc5LjE4OSA1NS41NjcgQyA0OTMuODIyIDYyLjkwMyA0OTcuMDUgMzMuMTY2IDUwMS4wNzQgMzIuODMzIEwgNTA1LjM5OCAyNi42NzcgTCA4Ni42NTMgMjkuNjY2IEwgLTEuNTU4IDI4LjY2OSBMIDIuNDEzIDI4Ljc3OSBDIDE2Ljc4NSAzMy4zNzUgMjYuODQxIDU4LjkwMyA1Mi4zMjkgNTUuMzMzXCJcblx0XHRcdFx0XHQgdG89XCJNIDc1LjA5OCA0MzQuNDI5IEMgOTkuMzU2IDM5Ni45OTEgMTUwLjY1IDQxMy44ODYgMTU4Ljc2NCA0NTYuMjk4IEMgMTgyLjA5NyA1NTMuNTg3IDIzNS4zNzkgNDc4LjYwMiAyNDEuNzYzIDQ2MC42MDYgQyAyNzUuMTM4IDQxNC44MjEgMzA0LjMyOCA1OTUuMDA1IDM1Mi4xMDUgNDU3Ljc3NiBDIDM3Mi41NTkgMzY3Ljg0MSA0MDkuODQ2IDUwOC43MTggNDEwLjYwMSA1MDMuODQ0IEMgNDQ0LjE0NyA1OTMuODU1IDQxOS45NTYgNDA2LjczOSA0MzkuMjk3IDM4OC4yOTkgQyA0NTMuNDk5IDM3NC43NTggNDYyLjA5MSAzNzIuOTQ2IDQ2My42NTMgMzc0LjI3MyBDIDQ2MC42NDggMzczLjYxNSA0ODAuODg2IDQxNC45NTUgNDgzLjkzNiA0MTkuMjUyIEMgNDk4LjU2OSA0MjYuNTg4IDUwMS4xNDIgMTE0LjI0MSA0OTguMzU4IDExNS4yMzMgTCA1MDIuNjgyIDEwOS4wNzcgTCA4My45MzcgMTEyLjA2NiBMIC00LjI3NCAxMTEuMDY5IEwgLTAuMzAzIDExMS4xNzkgQyAzLjc4OSAxMTguNzU4IDYuNjA5IDQ3Ny40NDggMzQuMDQ3IDQ3My4zMTJcIlxuXHRcdFx0XHRcdGR1cj1cIjEwc1wiLz5cblxuXHRcdFx0ICAgIDwvcGF0aD5cblx0XHRcdCAgICA8cmVjdCB4PVwiMS4yNVwiIHk9XCIwLjU0NVwiIHdpZHRoPVwiNTAwLjIxM1wiIGhlaWdodD1cIjExMS44MTFcIiBzdHlsZT1cImZpbGw6IHJnYigxMzUsIDIwNywgMjM1KTtcIiByeD1cIjIuODQ3XCIgcnk9XCIyLjg0N1wiPlxuXHRcdFx0XHQ8YW5pbWF0ZSBcblx0XHRcdFx0XHRhdHRyaWJ1dGVUeXBlPVwiWE1MXCJcblx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lPVwiaGVpZ2h0XCJcblx0XHRcdFx0XHRmcm9tPVwiMjlcIlxuXHRcdFx0XHRcdHRvPSBcIjExMS44MTFcIlxuXHRcdFx0XHRcdGR1cj1cIjEwc1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdCAgICA8L3JlY3Q+XG5cdFx0XHQgIDwvZz5cblx0XHRcdDwvc3ZnPlxuXHRcdGA7XG5cblx0fVxufTtcbiJdfQ==
