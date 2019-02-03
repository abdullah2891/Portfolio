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
        console.log(_state.state.position[key], key);
      });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29udGFjdC5qcyIsInNyYy9NYWluUGFnZS5qcyIsInNyYy9OYXZpZ2F0aW9uLmpzIiwic3JjL1Byb2plY3REZXNjcmlwdGlvbi5qcyIsInNyYy9TaWRlRm9vdGVyLmpzIiwic3JjL1NpZGVGb290ZXIyLmpzIiwic3JjL2FwcC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9saWIvSW5kZXguanMiLCJzcmMvbGliL2luZGV4LmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3V0aWwuanMiLCJzcmMvd2F2ZS1hbmltYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFWjtBQUNQO0FBaUNBOzs7O0VBcENtQyxlOzs7Ozs7Ozs7Ozs7QUNGckM7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsUTs7Ozs7Ozs7Ozs7OztpQ0FDUjtBQUNYLGFBQU8sQ0FBQyxtQkFBRCxDQUFQO0FBQ0E7Ozs2QkFDTztBQUNQO0FBY0E7Ozs7RUFuQm9DLGM7Ozs7Ozs7Ozs7OztBQ0h0Qzs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFU7Ozs7Ozs7Ozs7Ozs7d0NBQ0Q7QUFDbEIsV0FBSyxtQkFBTCxHQUEyQixRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUEzQjtBQUNBLFdBQUssa0JBQUwsR0FBMEIsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBMUI7O0FBQ0EsV0FBSyxpQkFBTDtBQUNBOzs7d0NBR2tCO0FBQUE7O0FBQ2xCLHlCQUFJLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxtQkFBaEMsQ0FBSixFQUEwRCxPQUExRCxDQUFrRSxVQUFBLE1BQU0sRUFBRTtBQUN0RSxRQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixF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R0FBekM7O0FBRUEsWUFBRyxDQUFDLFNBQUQsSUFBYyxhQUFNLE1BQU4sQ0FBYSxVQUFiLEdBQTBCLGVBQTNDLEVBQTJEO0FBQzFELFVBQUEsU0FBUyxHQUFHLElBQVo7QUFDQSxVQUFBLFFBQVEsQ0FBQyxjQUFULENBQXdCLHNCQUF4QixFQUFnRCxTQUFoRCxHQUE0RCxLQUFJLENBQUMsVUFBTCxFQUE1RDtBQUNBO0FBRUQsT0FSRDtBQVVBOzs7NkJBRU87QUFDUCxhQUFPLHdDQUFQO0FBQ0E7OztpQ0FDVztBQUVYO0FBMENBOzs7O0VBOUR5QyxjOzs7QUErRDFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL0luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdCBleHRlbmRzIEluZGV4e1xuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93IG1hcmdpbi10b3AtNCAgbWFyZ2luLWxlZnQtNCBwYWRkaW5nLXJpZ2h0LTQgcGFkZGluZy1sZWZ0LTRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cblx0XHRcdFx0XHRcdDxwPkkgYW0gRnVsbHN0YWNrIGRldmVsb3BlciB3aG8gY2FuIGhlbHAgeW91IHdpdGggeW91ciBkaWdpdGFsIG5lZWRzLkkgY2FuIGhlbHAgeW91IHdpdGggdGhlIGN1dHRpbmcgZWRnZSB0ZWNobm9sb2d5LiBZb3UgY2FuIGNvbnRhY3QgbWUgaGVyZSBcblx0XHRcdFx0XHRcdG9yIGVtYWlsIGF0IGFiZHVsbGFoMjg5MUBnbWFpbC5jb208L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC01IGxvZ2luLWZvcm1cIj5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5OYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1sZyBcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsPkVtYWlsPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1sZyBcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsPkNvbW1lbnQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LWxnIFwiPjwvdGV4dGFyZWE+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5QYWdlIGV4dGVuZHMgSW5kZXh7XG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW05hdmlnYXRpb25dO1xuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93IGludHJvZHVjdGlvbiBpbnRyb2R1Y3Rpb24tc21cIj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cIiBjb2wtbGctMVwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIm5hbWUtcGFkIGNvbC1sZy02ICAgY29sLXNtLTEwXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwidGl0bGVcIj48c3Ryb25nPkhpLDwvc3Ryb25nPjwvcD5cblx0XHRcdFx0XHQ8cD48c3Ryb25nPldlbGNvbWUgdG8gdGhpcyBjb3JuZXIgb2YgdGhlIGludGVybmV0PC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxwPjxzdHJvbmc+TXkgTmFtZSBpcyBBYmR1bGxhaCBSYWhtYW48L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0PHA+PHN0cm9uZz5Ib3cgY2FuIEkgaGVscCB5b3UgdG9kYXk8L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0PGRpdiBkYXRhLWNvbXBvbmVudD1cIk5hdmlnYXRpb25cIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdGA7XG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7ZmFkZUluLHNjcm9sbCxzY3JvbGxIZWlnaHR9IGZyb20gICcuL3V0aWwnO1xuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kUGFnZScpO1xuXHRcdHRoaXMudGhpcmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXJkUGFnZScpO1xuXHRcdHRoaXMuX2FkZEV2ZW50TGlzdGVuZXIoKTtcblx0fVxuXG5cblx0X2FkZEV2ZW50TGlzdGVuZXIoKXtcblx0XHRbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2aWdhdGlvbi1idXR0b24nKV0uZm9yRWFjaChidXR0b249Pntcblx0XHQgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihldmVudCl7XG5cdFx0XHRcdGNvbnN0IHBhZ2VOYW1lID0gZXZlbnQuc3JjRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2aWdhdGlvbicpfHxldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1uYXZpZ2F0aW9uJyk7XG5cdFx0XHQgICAgXHRjb25zdCBwb3NpdGlvbiA9IGV2ZW50LnNyY0VsZW1lbnQub2Zmc2V0VG9wIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQub2Zmc2V0VG9wO1xuXHRcdFx0XHRcblx0XHRcdFx0c3RhdGUuZGlkU2Nyb2xsW3BhZ2VOYW1lXSA9IHRydWU7XG5cblx0XHRcdCAgICBcdHN3aXRjaChwYWdlTmFtZSl7XG5cdFx0XHRcdFx0Y2FzZSAnc2Vjb25kUGFnZSc6XG5cdFx0XHRcdFx0XHRzY3JvbGwoc3RhdGUucG9zaXRpb24uc2Vjb25kUGFnZSAtMjApO1xuXHRcdFx0XHRcdFx0ZmFkZUluKHRoaXMuc2Vjb25kUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdFx0XHQgYnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAndGhpcmRQYWdlJzpcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0c2Nyb2xsKHN0YXRlLnBvc2l0aW9uLnRoaXJkUGFnZSsyMDAwKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvb3RlcicpLmNsYXNzTmFtZSArPScgY29udGFjdC1mb290ZXIgJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHQgICAgfS5iaW5kKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwiYWJvdXRcIiAgdGl0bGU9XCJHaXRodWJcIiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS00IGN1cnNvci1wb2ludGVyICBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWJkdWxsYWgyODkxXCI+IDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL2FyY2hpdGVjdC5zdmdcIiAvPjwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwic2Vjb25kUGFnZVwiICB0aXRsZT1cIlByb2plY3RzXCIgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tNCBjdXJzb3ItcG9pbnRlciBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL3Byb2plY3Rvci1zY3JlZW4uc3ZnXCIvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwidGhpcmRQYWdlXCIgIHRpdGxlPVwiQ29udGFjdHNcIiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS00IGN1cnNvci1wb2ludGVyIG5hdmlnYXRpb24tYnV0dG9uXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cImljb25cIiBzcmM9XCJjc3MvaWNvbnMvbGlnaHRidWxiLnN2Z1wiLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHtmYWRlSW4sb2Zmc2V0fSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFdhdmVBbmltYXRpb24gZnJvbSAnLi93YXZlLWFuaW1hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3REZXNjcmlwdGlvbiBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXHRcdHRoaXMuX3NldF9wb3NpdGlvbigpO1xuXHRcblx0fVxuXG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW1dhdmVBbmltYXRpb25dO1xuXHR9XG5cdF9oYW5kbGVTY3JvbGxpbmcoKXtcblx0XHRjb25zb2xlLmxvZyhzdGF0ZS5wcm9qZWN0cylcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbihldmVudCl7XG5cdFx0XHRjb25zdCBzY3JvbGxfcG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcblx0XHRcdGNvbnN0IHJhbmdlID0gMTAwO1xuXG5cdFx0XHRjb25zdCBzY3JvbGxlZF9wcm9qZWN0ID0gc3RhdGUucHJvamVjdHMuZmluZChwcm9qZWN0PT57XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0gcHJvamVjdC5wb3NpdGlvbi50b3A7XG5cblx0XHRcdFx0cmV0dXJuIHNjcm9sbF9wb3NpdGlvbiA+PSAocG9zaXRpb24gLXJhbmdlKSAmJiBzY3JvbGxfcG9zaXRpb24gPD0gKHBvc2l0aW9uICsgcmFuZ2UpO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGlmKCFzY3JvbGxlZF9wcm9qZWN0KXtyZXR1cm4gfTtcblxuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRfcHJvamVjdF9lbGVtZW50PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY3JvbGxlZF9wcm9qZWN0LmlkKTtcblxuXHRcdFx0aWYoIXNlbGVjdGVkX3Byb2plY3RfZWxlbWVudCB8fCBzY3JvbGxlZF9wcm9qZWN0LmRpZFNjcm9sbCl7cmV0dXJuIH07XG5cdFx0XHRcblx0XHRcdHNjcm9sbGVkX3Byb2plY3QuZGlkU2Nyb2xsID0gdHJ1ZTtcblx0XHRcdHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxlZF9wcm9qZWN0LnBvc2l0aW9uO1xuXHRcdFx0c2VsZWN0ZWRfcHJvamVjdF9lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0ZmFkZUluKHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudCk7XG5cblx0XHR9KVxuXG5cdH1cblxuXHRfc2V0X3Bvc2l0aW9uKCl7XG5cdFx0c3RhdGUucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XG5cdFx0XHRwcm9qZWN0LnBvc2l0aW9uID0gb2Zmc2V0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QuaWQpKTtcblx0XHR9KTtcblxuXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcHJvamVjdF9kZXNjcmlwdGlvbiA9IChwcm9qZWN0KT0+e1xuXHRcdFx0cmV0dXJuIGBcblx0XHRcdFx0PGgzPiR7cHJvamVjdC50aXRsZX08L2gzPlxuXHRcdFx0XHQ8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHQ8cD4ke3Byb2plY3Quc2tpbGxzfTwvcD5cblx0XHRcdGA7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGltYWdlID0gKHByb2plY3QpPT5gPGltZyBzcmM9XCIke3Byb2plY3QubGlua31cIiBhbHQ9XCIke3Byb2plY3QudGl0bGV9XCIgLz5gO1xuXG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3MgZGF0YS1jb21wb25lbnQ9XCJXYXZlQW5pbWF0aW9uXCI+PC9kaXY+XHRcblx0XHRcdCR7XG5cdFx0XHRcdHN0YXRlLnByb2plY3RzLnJlZHVjZSgoaHRtbCxwcm9qZWN0LGluZGV4KT0+e1xuXHRcdFx0XHRcdGNvbnN0IHNob3dSb3cgPSBwcm9qZWN0LnNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcblx0XHRcdFx0XHRjb25zdCBpc0V2ZW4gPSBpbmRleCAlIDIgPT09MDtcblx0XHRcdFx0XHRjb25zdCByb3cgPSBgXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwiJHtwcm9qZWN0LmlkfVwiIGNsYXNzPVwicm93IHByb2plY3Qtcm93XCIgc3R5bGU9XCJvcGFjaXR5OjBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0ke2lzRXZlbiA/ICc0JzogJzgnfSAgaW1hZ2UtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0JHshaXNFdmVuID8gaW1hZ2UocHJvamVjdCkgOiBwcm9qZWN0X2Rlc2NyaXB0aW9uKHByb2plY3QpfVx0XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLSR7aXNFdmVuID8gJzgnOiAnNCd9IGltYWdlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdCR7aXNFdmVuID8gaW1hZ2UocHJvamVjdCkgOiBwcm9qZWN0X2Rlc2NyaXB0aW9uKHByb2plY3QpfVx0XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0YDtcblx0XHRcdFx0XHRodG1sKz1yb3cgKyAnXFxuJztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gaHRtbDtcblxuXHRcdFx0XHR9LCcnKVxuXG5cdFx0XHR9XG5cblx0XHRgO1xuXG5cdH1cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZUZvb3RlciBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXG5cdFx0Y29uc29sZS5sb2coc3RhdGUpXG5cblx0fVxuXHRcblx0X3VwZGF0ZU9wYWNpdHkoc2Nyb2xsUG9zaXRpb24pe1xuXHRcdFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbmRleF0nKV0uZm9yRWFjaChjdXJyZW50RG9tPT57XG5cdFx0XHRjb25zdCBpbmRleCA9IGN1cnJlbnREb20uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gc3RhdGUucHJvamVjdHNbaW5kZXhdO1xuXG5cdFx0XHRjb25zdCB5ID0gKHgscG9zaXRpb24pPT57XG5cdFx0XHRcdGNvbnN0IHJhbmdlID0gcHJvamVjdC51cHBlcl9lbmQgLSBwcm9qZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRjb25zdCBvcGFjaXR5ID0gLU1hdGgucG93KCh4LXBvc2l0aW9uKS9yYW5nZSwyKSArIDE7XG5cdFx0XHRcdHJldHVybiBvcGFjaXR5ID4gMC4zID8gb3BhY2l0eTogMC4yO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSBwYXJzZUludChwcm9qZWN0LnBvc2l0aW9uKTtcblx0XHRcdGNvbnN0IHBvc2l0aW9uSGlnaGVzdE9wYWNpdHkgPSAgcHJvamVjdC5wb3NpdGlvbjtcblx0XHRcdGNvbnN0IGN1cnJlbnRPcGFjaXR5ID0geShzY3JvbGxQb3NpdGlvbixwb3NpdGlvbkhpZ2hlc3RPcGFjaXR5KTtcbmNvbnNvbGUubG9nKGN1cnJlbnRPcGFjaXR5KVxuXHRcdFx0Y3VycmVudERvbS5zdHlsZS5vcGFjaXR5ID0gY3VycmVudE9wYWNpdHk7XG5cdFx0XHRwcm9qZWN0Lm9mZnNldCA9IGN1cnJlbnRPcGFjaXR5O1xuXHRcdFx0cHJvamVjdC5vcGFjaXR5ID0gY3VycmVudE9wYWNpdHk7XG5cdFx0fSlcblxuXHR9XG5cblxuXHRfaGFuZGxlU2Nyb2xsaW5nKCl7XG5cdFx0Y29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEltYWdlQ29udGFpbmVyJyk7IFxuXHRcdFxuXHRcdGltYWdlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0Y29uc3Qgc2Nyb2xsUG9zaXRpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcDtcblx0XHRcdHN0YXRlLm5vdGlmeVByb3BlcnR5Q2hhbmdlKHNjcm9sbFBvc2l0aW9uKTtcdFxuXHRcdFx0dGhpcy5fdXBkYXRlT3BhY2l0eShzY3JvbGxQb3NpdGlvbik7XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHR9XG5cdFxuXHRfdXBkYXRlRE9NUG9zaXRpb24oKXtcblx0XHRbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC1pbWFnZScpXS5mb3JFYWNoKChpbWFnZSxpbmRleCk9Pntcblx0XHRcdHN0YXRlLnByb2plY3RzW2luZGV4XS5wb3NpdGlvbiA9IGltYWdlLm9mZnNldFRvcDtcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDx1bCBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiIGlkPVwicHJvamVjdEltYWdlQ29udGFpbmVyXCI+XG5cdFx0XHRcdCR7XG5cdFx0XHRcdFx0c3RhdGUucHJvamVjdHMucmVkdWNlKChodG1sLHByb2plY3QsaW5kZXgpPT57XG5cdFx0XHRcdFx0XHRodG1sICs9IGA8bGk+PGltZyBjbGFzcz1cInByb2plY3QtaW1hZ2VcIiBkYXRhLWluZGV4PSR7aW5kZXh9IHN0eWxlPVwib3BhY2l0eToke3Byb2plY3Qub3BhY2l0eX1cIiAgc3JjPVwiJHtwcm9qZWN0Lmxpbmt9XCIgLz48L2xpPmA7XG5cblx0XHRcdFx0XHRcdHJldHVybiBodG1sO1xuXHRcdFx0XHRcdH0sJycpXG5cdFx0XHRcdH1cblx0XHRcdFx0PGxpPjxkaXYgY2xhc3M9XCJlbXB0eS1pbWFnZVwiPjwvZGl2PjwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdGA7XG5cblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggIGZyb20gJy4vbGliL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRm9vdGVyMiBleHRlbmRzIEluZGV4e1xuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgPGRpdiBpZD1cImNvbnRhY3RGb290ZXJcIiAgY2xhc3M9XCJzaWRlLWZvb3RlclwiPkNvbnRhY3Q8L2Rpdj5gO1xuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtzY3JvbGwsZmFkZUluLHNjcm9sbEhlaWdodCxvZmZzZXR9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vTWFpblBhZ2UnO1xuaW1wb3J0IFNpZGVGb290ZXIgZnJvbSAnLi9TaWRlRm9vdGVyJztcbmltcG9ydCBTaWRlRm9vdGVyMiBmcm9tICcuL1NpZGVGb290ZXIyJztcbmltcG9ydCBQcm9qZWN0RGVzY3JpcHRpb24gZnJvbSAnLi9Qcm9qZWN0RGVzY3JpcHRpb24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JzsgXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kUGFnZScpO1xuXHRcdHRoaXMudGhpcmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXJkUGFnZScpO1xuXHRcdHRoaXMuX3NldF9lbGVtZW50X2lkKCk7XG5cdFx0dGhpcy5faGFuZGxlU2Nyb2xsaW5nKCk7XG5cdFx0dGhpcy5fc2V0X2VsZW1lbnRfcG9zaXRpb24oKTtcblx0fVxuXG5cblxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtNYWluUGFnZSxDb250YWN0LCBQcm9qZWN0RGVzY3JpcHRpb24sU2lkZUZvb3RlcjIsU2lkZUZvb3Rlcl07XG5cdH1cblxuXHRcblx0X3NldF9lbGVtZW50X2lkKCl7XG5cdFx0c3RhdGUucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XG5cdFx0XHRwcm9qZWN0LmlkID0gJ3Byb2plY3QnICsgTWF0aC5yYW5kb20oKTtcblx0XHR9KTtcblx0fVxuXG5cdF9zZXRfZWxlbWVudF9wb3NpdGlvbigpe1xuXHRcdE9iamVjdC5rZXlzKHN0YXRlLnBvc2l0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG5cdFx0XHRzdGF0ZS5wb3NpdGlvbltrZXldID0gb2Zmc2V0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleSkpLnRvcCB8fCAwO1xuXHRcdFx0Y29uc29sZS5sb2coc3RhdGUucG9zaXRpb25ba2V5XSxrZXkpXG5cdFx0fSk7XG5cdH1cblxuXHRfaGFuZGxlU2Nyb2xsaW5nKCl7XG5cdFx0Ly9zZWN0aW9uIHBvc2l0aW9uXG5cdFx0XG5cdFx0Ly9zYXZpbmcgdGhpcyBwb3NpdGlvbm4gZm9yIGNoYW5nZVxuXHRcdGxldCBwcmV2aW91c19wb3NpdGlvbiA9IDA7XG5cblx0Ly9cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XG5cdC8vXHRcdFx0Y29uc3Qgc2Vjb25kX3BhZ2VfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbi5zZWNvbmRQYWdlO1xuXHQvL1x0XHRcdGNvbnN0IHRoaXJkX3BhZ2VfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbi50aGlyZFBhZ2U7XG5cdC8vXHRcdFx0XG5cblx0Ly9cdFx0XHQvL2dldCB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9uIFxuXHQvL1x0XHRcdGxldCBzY3JvbGxfcG9zaXRpb24gPSAgd2luZG93LnNjcm9sbFk7XG5cdC8vXHRcdFx0bGV0IGNoYW5nZSA9IHNjcm9sbF9wb3NpdGlvbiAtIHByZXZpb3VzX3Bvc2l0aW9uO1x0XG4gXHQvL1x0XHRcdFxuXHQvL1x0XHRcdHByZXZpb3VzX3Bvc2l0aW9uID0gc2Nyb2xsX3Bvc2l0aW9uO1xuXG5cdC8vXHRcdFx0XHRcblx0Ly9cdFx0XHRpZighc3RhdGUuZGlkU2Nyb2xsLnNlY29uZFBhZ2UgICYmIGNoYW5nZSA+IDApe1xuXHQvL1x0XHRcdFx0c3RhdGUuZGlkU2Nyb2xsLnNlY29uZFBhZ2UgID0gdHJ1ZTtcblxuXHQvL1x0XHRcdFx0c2Nyb2xsKHNlY29uZF9wYWdlX3Bvc2l0aW9uIC0gNTAgKTtcblx0Ly9cdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHQvL1x0XHRcdH1cblx0Ly9cdH0uYmluZCh0aGlzKSk7XG5cblx0fVxuXG5cdFxuXHRcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBpZD1cImZpcnN0UGFnZVwiICBjbGFzcz1cInJvdyBmaXJzdC1wYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBtYWluLXBhZ2UgIG1haW4tcGFnZS1zbVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBkYXRhLWNvbXBvbmVudD1cIk1haW5QYWdlXCI+PC9kaXY+XHRcblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD1cInNlY29uZFBhZ2VcIj5cblx0XHRcdFx0XHQ8ZGl2ICBkYXRhLWNvbXBvbmVudD1cIlByb2plY3REZXNjcmlwdGlvblwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgaWQ9XCJ0aGlyZFBhZ2VcIiAgY2xhc3M9XCJyb3cgdGhpcmQtcGFnZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz0nY29sLW1kLTEyJyBkYXRhLWNvbXBvbmVudD1cIkNvbnRhY3RcIj48L2Rpdj4gPC9kaXY+IDwvZGl2PiBgIH0gXG5cblxufVxuIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuXHRuZXcgQXBwKCdhcHAnKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXh7XG5cdC8qKlxuXHQgKiBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiBAcGFyYW0gY29tcG9uZW50IGNvbXBvbmVudCBuYW1lXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnQpe1xuXHRcdHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG5cdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkubWFwKHF1ZXJ5U2VsZWN0b3I9Pntcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXG5cdFx0fSlcblxuXHRcdFByb21pc2UuYWxsKHByb21pc2VzKVxuXHRcdFx0LnRoZW4oKCk9Pntcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgID0gdGhpcy5yZW5kZXIoKTtcblx0XHRcdFx0dGhpcy5sb2FkQ2hpbGRWaWV3cygpO1xuXHRcdFx0XHR0aGlzLmluc2VydEVsZW1lbnQodGVtcGxhdGUpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcblx0XHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogaG9vayBmb3IgdGhpbmdzIGFyZSBsb2FkZWRcblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0LyoqXG5cdCAqIHBvcHVsYXRpbmcgdGhlIGlubmVyaHRtbFxuXHQgKlxuXHQgKiBAcGFyYW0gdGVtcGxhdGVcblx0ICovXG5cdGluc2VydEVsZW1lbnQodGVtcGxhdGUpe1xuXHRcdHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5mb3JFYWNoKGNvbXBvbmVudEluc3RhbmNlPT57XG5cdFx0XHRjb21wb25lbnRJbnN0YW5jZS5pbm5lckhUTUwgPSAgdGVtcGxhdGU7XG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gJyc7XG5cblx0fVxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtdO1xuXHRcdFxuXHR9XG5cdGNvbXBvbmVudFNlbGVjdG9yKCl7XG5cdFx0cmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jb21wb25lbnQ9XCIke3RoaXMuY29tcG9uZW50fVwiXWApXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBsb2FkaW5nIGxpc3RlZCBjaGlsZCB2aWV3c1xuXHQgKi9cblx0bG9hZENoaWxkVmlld3MoKXtcblx0XHRpZighQXJyYXkuaXNBcnJheSh0aGlzLmNoaWxkVmlld3MoKSApKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmNoaWxkVmlld3MoKS5mb3JFYWNoKHZpZXc9Pntcblx0XHRcdGxldCBjbGFzc05hbWUgPSB2aWV3LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0bmV3IHZpZXcoYCR7Y2xhc3NOYW1lfWApO1xuXHRcdH0pXG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4e1xuXHQvKipcblx0ICogY29uc3RydWN0b3Jcblx0ICpcblx0ICogQHBhcmFtIGNvbXBvbmVudCBjb21wb25lbnQgbmFtZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29tcG9uZW50KXtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5jb21wb25lbnRTZWxlY3RvcigpLm1hcChxdWVyeVNlbGVjdG9yPT57XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblxuXHRcdH0pXG5cblx0XHRQcm9taXNlLmFsbChwcm9taXNlcylcblx0XHRcdC50aGVuKCgpPT57XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlICA9IHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdHRoaXMubG9hZENoaWxkVmlld3MoKTtcblx0XHRcdFx0dGhpcy5pbnNlcnRFbGVtZW50KHRlbXBsYXRlKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIGhvb2sgZm9yIHRoaW5ncyBhcmUgbG9hZGVkXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdC8qKlxuXHQgKiBwb3B1bGF0aW5nIHRoZSBpbm5lcmh0bWxcblx0ICpcblx0ICogQHBhcmFtIHRlbXBsYXRlXG5cdCAqL1xuXHRpbnNlcnRFbGVtZW50KHRlbXBsYXRlKXtcblx0XHR0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkuZm9yRWFjaChjb21wb25lbnRJbnN0YW5jZT0+e1xuXHRcdFx0Y29tcG9uZW50SW5zdGFuY2UuaW5uZXJIVE1MID0gIHRlbXBsYXRlO1xuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuICcnO1xuXG5cdH1cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbXTtcblx0XHRcblx0fVxuXHRjb21wb25lbnRTZWxlY3Rvcigpe1xuXHRcdHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY29tcG9uZW50PVwiJHt0aGlzLmNvbXBvbmVudH1cIl1gKV07XG5cdH1cblxuXHQvKipcblx0ICogbG9hZGluZyBsaXN0ZWQgY2hpbGQgdmlld3Ncblx0ICovXG5cdGxvYWRDaGlsZFZpZXdzKCl7XG5cdFx0aWYoIUFycmF5LmlzQXJyYXkodGhpcy5jaGlsZFZpZXdzKCkgKSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGlsZFZpZXdzKCkuZm9yRWFjaCh2aWV3PT57XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gdmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTtcblx0XHRcdG5ldyB2aWV3KGAke2NsYXNzTmFtZX1gKTtcblx0XHR9KVxuXHR9XG59XG4iLCJleHBvcnQgIGNvbnN0IHN0YXRlICA9ICB7XG5cdGRpZFNjcm9sbCA6IHthYm91dCA6IGZhbHNlLCBzZWNvbmRQYWdlIDogZmFsc2UgLCB0aGlyZFBhZ2UgOiBmYWxzZX0sXG5cdHByb2plY3RzOiBbe1xuXHRcdGlkIDogbnVsbCxcblx0XHR0aXRsZTogXCJUQVNLIE9SR0FOSVpFUlwiLFxuXHRcdGRlc2NyaXB0aW9uIDpcIkEgVEFTSyBPUkdBTklaRVIgV0VCIEFQUExJQ0FUSU9OIFdJVEggRU1CRVIgSlMgRlJPTlRFTkQgQU5EIERKQU5HTyBSRVNUIEZSQU1FV09SSyxJTlRFR1JBVElORyBNWVNRTCBBUyBEQVRBQkFTRSBTVVBQT1JULlwiLFxuXHRcdHNraWxsczogXCJESkFOR08gUkVTVCwgRU1CRVIgSlMsIE1ZU1FMLCBIRVJPS1UsIEJPT1RTVFJBUFwiLFxuXHRcdGxpbmsgOiBcImNzcy90aWNrZXRpbmctc3lzdGVtLmdpZlwiLCBcdFxuXHRcdHNob3cgOiB0cnVlLFxuXHRcdHBvc2l0aW9uOiAwLFxuXHRcdG9wYWNpdHk6IDEsXG5cdFx0ZGlkU2Nyb2xsOiBmYWxzZVxuXHR9LFxuXHR7XG5cdFx0aWQgOiBudWxsLFxuXHRcdHRpdGxlOiBcIk9GRkxJTkUgRklSU1QgUkVERElUIFZJRVdFUlwiLFxuXHRcdGRlc2NyaXB0aW9uIDpcIlRISVMgUkVBQ1QgQVBQIFVUSUxJWkVTIFNFUlZJQ0UgV09SS0VSIEFORCBDQUNISU5HIEhFQVZJTFkgVE8gR0lWRSBPRkZMSU5FIEZJUlNUIEVYUEVSSUVOQ0UgRk9SIEEgU1VCUkVERElUKFJFRERJVCBTVUIgRk9SVU0pLkNVUlJFTlRMWSwgSSBBTSBXT1JLSU5HIE9OIE1BS0lORyBJVCBNT1JFIFJFQURFUiBGUklFTkRMWSBBTkQgV1JJVEVSIEZSSUVORExZLlwiLFxuXHRcdHNraWxsczogXCJSRUFDVCAsIFNFUlZJQ0UgV09SS0VSICwgT0FVVEgyIC4gSEVST0tVLCBCT09UU1RSQVBcIixcblx0XHRsaW5rIDogXCJjc3MvY2hhbmdlbXl2aWV3LmdpZlwiLFxuXHRcdHNob3cgOiBmYWxzZSxcblx0XHRwb3NpdGlvbiA6IDI4Mixcblx0XHRvcGFjaXR5OiAwLjIsXG5cdFx0ZGlkU2Nyb2xsOiBmYWxzZVxuXG5cdH0sXG5cdHtcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiQ0hBTkdFIE1ZIFZJRVcgUkVBREVSXCIsXG5cdFx0ZGVzY3JpcHRpb24gOlwiQSBSRURESVQgQ0xJRU5UIE1BREUgVVNJTkcgUkVBQ1QgTkFUSVZFIFdISUNIIEFMTE9XUyBVU0VSIEFERCBQT1NUIEFORCBQRVJGT1JNIEFDVElPTiBPTiBUSEUgQVBQKEFVVEhFTlRJQ0FURUQgVVNJTkcgT0FVVEgyKVwiLFxuXHRcdHNraWxsczogXCJSRUFDVCBOQVRJVkUgLCBPQVVUSDIgLCBIRVJPS1VcIixcblx0XHRsaW5rIDogXCJodHRwczovL3BoYW5kcm9pZC5zMy5hbWF6b25hd3MuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA0L0Jvb3N0LWZvci1yZWRkaXQtYW5kcm9pZC5qcGdcIixcblx0XHRzaG93IDogZmFsc2UsXG5cdFx0cG9zaXRpb24gOiA2MjYsXG5cdFx0b3BhY2l0eTogMC4wNSxcblx0XHRkaWRTY3JvbGw6IGZhbHNlXG5cdH1dLFxuXHRwb3NpdGlvbjp7XG5cdFx0Zmlyc3RQYWdlOiBudWxsLFxuXHRcdHNlY29uZFBhZ2U6IG51bGwsXG5cdFx0dGhpcmRQYWdlOiBudWxsXG5cdH0sXG5cblx0c2Nyb2xsOntcblx0XHRmaXJzdFBhZ2U6IG51bGwsXG5cdFx0c2Vjb25kUGFnZTogbnVsbCxcblx0XHR0aGlyZFBhZ2U6IG51bGxcblx0fSxcblx0bm90aWZ5UHJvcGVydHlDaGFuZ2UoKXt9XG59XG4iLCJleHBvcnQgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gKCk9Pntcblx0cmV0dXJuIE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIFxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNjcm9sbCA9IChsYXN0X3Bvc3Rpb24saW5pdGlhbF9wb3NpdGlvbj0wKT0+e1xuXHRjb25zdCByYXRlID0gMTU7XG5cdGxldCBwb3NpdGlvbiA9IGluaXRpYWxfcG9zaXRpb24gO1xuXHRjb25zdCByZXBlYXRPZnRlbiA9ICgpPT57XG5cdFx0cG9zaXRpb24gPSBwb3NpdGlvbityYXRlO1xuXHRcdHdpbmRvdy5zY3JvbGwoMCxwb3NpdGlvbik7XG5cdFx0Y29uc3QgZ2xvYmFsSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVwZWF0T2Z0ZW4pO1xuXHRcdGlmKHBvc2l0aW9uID49IGxhc3RfcG9zdGlvbil7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShnbG9iYWxJRCk7XG5cdFx0fVxuXHR9XG5cblx0cmVwZWF0T2Z0ZW4oKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IChlbGVtZW50LGluaXRpYWw9MCk9Pntcblx0Y29uc3QgcmF0ZSA9IDAuMDU7XG5cdC8vZmluYWwgb3BhY2l0eSBjYW4ndCBiZSBiaWdnZXIgdGhhbiAxXG5cdGNvbnN0IGZpbmFsT3BhY2l0eSA9IDE7XG5cblx0bGV0IG9wYWNpdHkgPSBpbml0aWFsO1xuXG5cdGNvbnN0IF90YXNrID0gKCk9Pntcblx0XHRlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuXHRcdG9wYWNpdHkgPSBvcGFjaXR5ICsgcmF0ZTsgXG5cdFx0Y29uc3QgZ2xvYmFsSUQgPSAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF90YXNrKTtcblx0XHRpZihvcGFjaXR5ID49IGZpbmFsT3BhY2l0eSl7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShnbG9iYWxJRClcblx0XHR9XG5cdH1cblxuXHRfdGFzaygpO1xuXG59XG5cbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAoZWwpPT4ge1xuICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICByZXR1cm4geyB0b3A6IHJlY3QudG9wICsgc2Nyb2xsVG9wLCBsZWZ0OiByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IH1cbn1cblxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXZlQW5pbWF0aW9uIGV4dGVuZHMgSW5kZXgge1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGxldCAgZGlkU2Nyb2xsID0gZmFsc2U7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsKGV2ZW50KT0+e1xuXHRcdFx0Y29uc3Qgc2Nyb2xsX3Bvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgKyA1MDA7XG5cblx0XHRcdGlmKCFkaWRTY3JvbGwgJiYgc3RhdGUuc2Nyb2xsLnNlY29uZFBhZ2UgPCBzY3JvbGxfcG9zaXRpb24pe1xuXHRcdFx0XHRkaWRTY3JvbGwgPSB0cnVlO1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kUGFnZUJhY2tncm91bmQnKS5pbm5lckhUTUwgPSB0aGlzLmJhY2tncm91bmQoKTtcblx0XHRcdH1cblxuXHRcdH0pXG5cblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAnPGRpdiBpZD1cInNlY29uZFBhZ2VCYWNrZ3JvdW5kXCI+IDwvZGl2Pic7XG5cdH1cblx0YmFja2dyb3VuZCgpe1xuXHRcdFxuXHRcdHJldHVybiBgXG5cdFx0XHQ8c3ZnIGlkPVwicHJvamVjdEJhY2tncm91bmRcIiBjbGFzcz1cIndhdnktaW1hZ2VcIiB2aWV3Qm94PVwiMCAwIDUwMCA1MDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHQgIDxkZWZzPlxuXHRcdFx0ICAgIDxwYXR0ZXJuIGlkPVwicGF0dGVybi0wXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XG5cdFx0XHQgICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI1MFwiIGhlaWdodD1cIjEwMFwiIHN0eWxlPVwiZmlsbDogYmxhY2s7XCIvPlxuXHRcdFx0ICAgIDwvcGF0dGVybj5cblx0XHRcdCAgPC9kZWZzPlxuXHRcdFx0ICA8Zz5cblx0XHRcdCAgICA8cGF0aCBzdHlsZT1cImZpbGw6IHJnYigyMTYsIDIxNiwgMjE2KTtcIi8+XG5cdFx0XHQgICAgPHBhdGggc3R5bGU9XCJmaWxsOiByZ2IoMjE2LCAyMTYsIDIxNik7XCIvPlxuXHRcdFx0ICAgIDxwYXRoIHN0eWxlPVwiZmlsbDogcmdiKDE5NCwgMjQ5LCAyOCk7XCIgZD1cIk0gNjguODc2IDQ2MC42NDcgQyA3OS41MDcgNDQ3LjY4MiAxMzAuOTg3IDQzMi42NDggMTM4Ljg4OSA0NzcuMjkxIEMgMTY0LjA2MyA1NzYuMTcxIDE3NS4zMjEgNDc4Ljg4MSAxOTAuNTM1IDQ1MC4zNTMgQyAyMDcuODE0IDQwOC4yNyAyMjYuMTg2IDU5OS45MjYgMjc2LjQ5IDQ1My45NDIgQyAyOTYuNDE1IDM1OS4xOCAzNDIuMTYxIDQ1MC42MSAzNDMuMjAxIDQ0OS4xMzYgQyA0NTYuNjUyIDU3My43MzcgNDEzLjU0MyA0NTQuOTQxIDQ2MC40NiA0MjQuMjI0IEMgNDY5LjU0MyA0MTAuMDcxIDQ2OC43MTQgNDMxLjA3MyA0NzEuMzg3IDQzMC45OTggQyA0NzIuNTExIDQzMC4xOSA0ODguOTY4IDQ2My45ODUgNDkwLjYyMiA0NjguMjQxIEMgNTEzLjgyMyA0OTIuNzkgNTAyLjM2MiAxMjEuMDcyIDQ5OS43IDExNC4yOTYgTCA0OTguMTIxIDEwNy42NzUgTCA4Ni45MjQgMTEwLjgyNyBMIDAuMzAyIDEwOS43NzEgTCAxLjU2NCAxMTEuMzk1IEMgNC43NzYgODcuMzc1IC0yLjg2MSA0OTUuNDE2IDMyLjY1NiA0OTIuNzM3XCI+XG5cdFx0XHRcdDxhbmltYXRlXG5cdFx0XHRcdFx0IGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiBcblx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lPVwiZFwiIFxuXHRcdFx0XHRcdGZyb209XCJNIDc0LjA4OSAzMS4wODYgQyA4NC43MiAxOC4xMjEgMTAzLjUwNyAtMzAuMzIyIDExMS40MDkgMTQuMzIxIEMgMTM2LjU4MyAxMTMuMjAxIDE4MC42OTEgNTEuNjkxIDE5NS45MDUgMjMuMTYzIEMgMjEzLjE4NCAtMTguOTIgMjQ1LjkwNCAxNTYuMzcgMjk2LjIwOCAxMC4zODYgQyAzMTYuMTMzIC04NC4zNzYgMzQ1LjMwOSAyLjgzOCAzNDYuMzQ5IDEuMzY0IEMgMzg5Ljc0OCAxMjYuMTc1IDM5OC4yMDggNDQuNzMzIDQyMC40MDEgMjYuODAyIEMgNDI5LjQ4NCAxMi42NDkgNDM2LjQ1IDMzLjE3NCA0MzkuMTIzIDMzLjA5OSBDIDQ0MC4yNDcgMzIuMjkxIDQ2Mi42ODIgNDUuODA2IDQ2NC4zMzYgNTAuMDYyIEMgNDg3LjUzNyA3NC42MTEgNTA5Ljg4MyA0MC44NzUgNTA3LjIyMSAzNC4wOTkgTCA1MDUuNjQyIDI3LjQ3OCBMIDk0LjQ0NSAzMC42MyBMIDcuODIzIDI5LjU3NCBMIDkuMDg1IDMxLjE5OCBDIDEyLjI5NyA3LjE3OCAxNi45NDEgNzEuNDc5IDUyLjQ1OCA2OC44XCJcblx0XHRcdFx0XHQgdG89XCJNIDY4Ljg3NiA0NjAuNjQ3IEMgNzkuNTA3IDQ0Ny42ODIgMTMwLjk4NyA0MzIuNjQ4IDEzOC44ODkgNDc3LjI5MSBDIDE2NC4wNjMgNTc2LjE3MSAxNzUuMzIxIDQ3OC44ODEgMTkwLjUzNSA0NTAuMzUzIEMgMjA3LjgxNCA0MDguMjcgMjI2LjE4NiA1OTkuOTI2IDI3Ni40OSA0NTMuOTQyIEMgMjk2LjQxNSAzNTkuMTggMzQyLjE2MSA0NTAuNjEgMzQzLjIwMSA0NDkuMTM2IEMgNDU2LjY1MiA1NzMuNzM3IDQxMy41NDMgNDU0Ljk0MSA0NjAuNDYgNDI0LjIyNCBDIDQ2OS41NDMgNDEwLjA3MSA0NjguNzE0IDQzMS4wNzMgNDcxLjM4NyA0MzAuOTk4IEMgNDcyLjUxMSA0MzAuMTkgNDg4Ljk2OCA0NjMuOTg1IDQ5MC42MjIgNDY4LjI0MSBDIDUxMy44MjMgNDkyLjc5IDUwMi4zNjIgMTIxLjA3MiA0OTkuNyAxMTQuMjk2IEwgNDk4LjEyMSAxMDcuNjc1IEwgODYuOTI0IDExMC44MjcgTCAwLjMwMiAxMDkuNzcxIEwgMS41NjQgMTExLjM5NSBDIDQuNzc2IDg3LjM3NSAtMi44NjEgNDk1LjQxNiAzMi42NTYgNDkyLjczN1wiXG5cdFx0XHRcdFx0ZHVyPVwiMTBzXCIvPlxuXHRcdFx0XHQ8L3BhdGg+XG5cblxuXHRcdFx0ICAgIDxwYXRoIHN0eWxlPVwiZmlsbDogcmdiKDEzNSwgMjA3LCAyMzUpO1wiIGQ9XCJNIDc1LjA5OCA0MzQuNDI5IEMgOTkuMzU2IDM5Ni45OTEgMTUwLjY1IDQxMy44ODYgMTU4Ljc2NCA0NTYuMjk4IEMgMTgyLjA5NyA1NTMuNTg3IDIzNS4zNzkgNDc4LjYwMiAyNDEuNzYzIDQ2MC42MDYgQyAyNzUuMTM4IDQxNC44MjEgMzA0LjMyOCA1OTUuMDA1IDM1Mi4xMDUgNDU3Ljc3NiBDIDM3Mi41NTkgMzY3Ljg0MSA0MDkuODQ2IDUwOC43MTggNDEwLjYwMSA1MDMuODQ0IEMgNDQ0LjE0NyA1OTMuODU1IDQxOS45NTYgNDA2LjczOSA0MzkuMjk3IDM4OC4yOTkgQyA0NTMuNDk5IDM3NC43NTggNDYyLjA5MSAzNzIuOTQ2IDQ2My42NTMgMzc0LjI3MyBDIDQ2MC42NDggMzczLjYxNSA0ODAuODg2IDQxNC45NTUgNDgzLjkzNiA0MTkuMjUyIEMgNDk4LjU2OSA0MjYuNTg4IDUwMS4xNDIgMTE0LjI0MSA0OTguMzU4IDExNS4yMzMgTCA1MDIuNjgyIDEwOS4wNzcgTCA4My45MzcgMTEyLjA2NiBMIC00LjI3NCAxMTEuMDY5IEwgLTAuMzAzIDExMS4xNzkgQyAzLjc4OSAxMTguNzU4IDYuNjA5IDQ3Ny40NDggMzQuMDQ3IDQ3My4zMTJcIj5cblx0XHRcdFx0PGFuaW1hdGVcblx0XHRcdFx0XHQgYXR0cmlidXRlVHlwZT1cIlhNTFwiIFxuXHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU9XCJkXCIgXG5cdFx0XHRcdFx0ZnJvbT1cIk0gNjUuMTMyIDQyLjI2IEMgODkuMzkgNC44MjIgMTEzLjcwNiAtMjkuNzU2IDEyMS44MiAxMi42NTYgQyAxNDUuMTUzIDEwOS45NDUgMTgzLjU2NCAzOS4yNiAxODkuOTQ4IDIxLjI2NCBDIDIyMy4zMjMgLTI0LjUyMSAyNDQuNzk5IDEzOC42NzcgMjkyLjU3NiAxLjQ0OCBDIDMxMy4wMyAtODguNDg3IDM0OS4wODYgMTguMzQ5IDM0OS44NDEgMTMuNDc1IEMgMzgzLjM4NyAxMDMuNDg2IDQwMy43MzkgMzEuMDkzIDQyMy4wOCAxMi42NTMgQyA0MzcuMjgyIC0wLjg4OCA0NDQuNTYgNDYuODIyIDQ0Ni4xMjIgNDguMTQ5IEMgNDQzLjExNyA0Ny40OTEgNDc2LjEzOSA1MS4yNyA0NzkuMTg5IDU1LjU2NyBDIDQ5My44MjIgNjIuOTAzIDQ5Ny4wNSAzMy4xNjYgNTAxLjA3NCAzMi44MzMgTCA1MDUuMzk4IDI2LjY3NyBMIDg2LjY1MyAyOS42NjYgTCAtMS41NTggMjguNjY5IEwgMi40MTMgMjguNzc5IEMgMTYuNzg1IDMzLjM3NSAyNi44NDEgNTguOTAzIDUyLjMyOSA1NS4zMzNcIlxuXHRcdFx0XHRcdCB0bz1cIk0gNzUuMDk4IDQzNC40MjkgQyA5OS4zNTYgMzk2Ljk5MSAxNTAuNjUgNDEzLjg4NiAxNTguNzY0IDQ1Ni4yOTggQyAxODIuMDk3IDU1My41ODcgMjM1LjM3OSA0NzguNjAyIDI0MS43NjMgNDYwLjYwNiBDIDI3NS4xMzggNDE0LjgyMSAzMDQuMzI4IDU5NS4wMDUgMzUyLjEwNSA0NTcuNzc2IEMgMzcyLjU1OSAzNjcuODQxIDQwOS44NDYgNTA4LjcxOCA0MTAuNjAxIDUwMy44NDQgQyA0NDQuMTQ3IDU5My44NTUgNDE5Ljk1NiA0MDYuNzM5IDQzOS4yOTcgMzg4LjI5OSBDIDQ1My40OTkgMzc0Ljc1OCA0NjIuMDkxIDM3Mi45NDYgNDYzLjY1MyAzNzQuMjczIEMgNDYwLjY0OCAzNzMuNjE1IDQ4MC44ODYgNDE0Ljk1NSA0ODMuOTM2IDQxOS4yNTIgQyA0OTguNTY5IDQyNi41ODggNTAxLjE0MiAxMTQuMjQxIDQ5OC4zNTggMTE1LjIzMyBMIDUwMi42ODIgMTA5LjA3NyBMIDgzLjkzNyAxMTIuMDY2IEwgLTQuMjc0IDExMS4wNjkgTCAtMC4zMDMgMTExLjE3OSBDIDMuNzg5IDExOC43NTggNi42MDkgNDc3LjQ0OCAzNC4wNDcgNDczLjMxMlwiXG5cdFx0XHRcdFx0ZHVyPVwiMTBzXCIvPlxuXG5cdFx0XHQgICAgPC9wYXRoPlxuXHRcdFx0ICAgIDxyZWN0IHg9XCIxLjI1XCIgeT1cIjAuNTQ1XCIgd2lkdGg9XCI1MDAuMjEzXCIgaGVpZ2h0PVwiMTExLjgxMVwiIHN0eWxlPVwiZmlsbDogcmdiKDEzNSwgMjA3LCAyMzUpO1wiIHJ4PVwiMi44NDdcIiByeT1cIjIuODQ3XCI+XG5cdFx0XHRcdDxhbmltYXRlIFxuXHRcdFx0XHRcdGF0dHJpYnV0ZVR5cGU9XCJYTUxcIlxuXHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU9XCJoZWlnaHRcIlxuXHRcdFx0XHRcdGZyb209XCIyOVwiXG5cdFx0XHRcdFx0dG89IFwiMTExLjgxMVwiXG5cdFx0XHRcdFx0ZHVyPVwiMTBzXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0ICAgIDwvcmVjdD5cblx0XHRcdCAgPC9nPlxuXHRcdFx0PC9zdmc+XG5cdFx0YDtcblxuXHR9XG59O1xuIl19
