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
        var scroll_position = window.scrollY + 500;
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
      var canvas = document.getElementById('wave-animation');

      if (canvas.getContext) {
        this._draw(canvas);
      } else {
        console.warn('failed intialized canvase');
      }
    }
  }, {
    key: "_draw",
    value: function _draw(canvas) {
      var ctx = canvas.getContext('2d');
      var _state$position = _state.state.position,
          thirdPage = _state$position.thirdPage,
          secondPage = _state$position.secondPage;
      var height = parseInt(thirdPage) - parseInt(secondPage);

      this._draw_wavy_path(ctx);
    }
  }, {
    key: "_draw_wavy_path",
    value: function _draw_wavy_path(ctx) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var draw = function draw() {
        ctx.clearRect(0, 0, 300, 300);
        var region = new Path2D();
        var offsety = 10;
        region.lineTo(0, 0);
        region.lineTo(0, 30 + offset); // Define the points as {x, y}

        region.lineTo(300, 30 + offset);
        region.lineTo(300, 0);
        region.closePath();
        ctx.fillStyle = '#2d2727';
        ctx.fill(region, 'evenodd');

        for (var offsetx = 0; offsetx <= 300; offsetx = offsetx + 40) {
          var start = {
            x: 0 + offsetx,
            y: 20 + offsety + offset
          };
          var cp1 = {
            x: 10 + offsetx,
            y: 0 + offsety + offset
          };
          var cp2 = {
            x: 30 + offsetx,
            y: 80 + offsety + offset
          };
          var end = {
            x: 40 + offsetx,
            y: 20 + offsety + offset
          };
          region.moveTo(start.x, start.y);
          region.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
        }

        ctx.fillStyle = '#2d2727';
        ctx.fill(region, 'evenodd');
        offset = offset + 0.33;
        var requestId = requestAnimationFrame(draw);

        if (offset >= 1000) {
          cancelAnimationFrame(requestId);
        }
      };

      draw();
    }
  }, {
    key: "render",
    value: function render() {
      return "\n\t\t\t<svg class=\"wavy-image\" viewBox=\"0 0 500 500\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t  <defs>\n\t\t\t    <pattern id=\"pattern-0\" x=\"0\" y=\"0\" width=\"25\" height=\"25\" patternUnits=\"userSpaceOnUse\" viewBox=\"0 0 100 100\">\n\t\t\t      <rect x=\"0\" y=\"0\" width=\"50\" height=\"100\" style=\"fill: black;\"/>\n\t\t\t    </pattern>\n\t\t\t  </defs>\n\t\t\t  <g>\n\t\t\t    <path style=\"fill: rgb(216, 216, 216);\"/>\n\t\t\t    <path style=\"fill: rgb(216, 216, 216);\"/>\n\t\t\t    <path style=\"fill: rgb(194, 249, 28);\" d=\"M 68.876 460.647 C 79.507 447.682 130.987 432.648 138.889 477.291 C 164.063 576.171 175.321 478.881 190.535 450.353 C 207.814 408.27 226.186 599.926 276.49 453.942 C 296.415 359.18 342.161 450.61 343.201 449.136 C 456.652 573.737 413.543 454.941 460.46 424.224 C 469.543 410.071 468.714 431.073 471.387 430.998 C 472.511 430.19 488.968 463.985 490.622 468.241 C 513.823 492.79 502.362 121.072 499.7 114.296 L 498.121 107.675 L 86.924 110.827 L 0.302 109.771 L 1.564 111.395 C 4.776 87.375 -2.861 495.416 32.656 492.737\">\n\t\t\t\t<animate\n\t\t\t\t\t attributeType=\"XML\" \n\t\t\t\t\tattributeName=\"d\" \n\t\t\t\t\tfrom=\"M 57.175 161.934 C 81.433 124.496 101.701 119.902 109.815 162.314 C 133.148 259.603 173.668 170.211 180.052 152.215 C 213.427 106.43 231.111 334.706 278.888 197.477 C 299.342 107.542 339.714 200.881 340.469 196.007 C 374.015 286.018 385.495 168.404 404.836 149.964 C 419.038 136.423 445.412 158.961 446.974 160.288 C 443.969 159.63 462.995 173.01 466.045 177.307 C 480.678 184.643 494.334 115.566 498.358 115.233 L 502.682 109.077 L 83.937 112.066 L -4.274 111.069 L -0.303 111.179 C 14.069 115.775 32.11 166.712 57.598 163.142\"\n\t\t\t\t\t to=\"M 68.876 460.647 C 79.507 447.682 130.987 432.648 138.889 477.291 C 164.063 576.171 175.321 478.881 190.535 450.353 C 207.814 408.27 226.186 599.926 276.49 453.942 C 296.415 359.18 342.161 450.61 343.201 449.136 C 456.652 573.737 413.543 454.941 460.46 424.224 C 469.543 410.071 468.714 431.073 471.387 430.998 C 472.511 430.19 488.968 463.985 490.622 468.241 C 513.823 492.79 502.362 121.072 499.7 114.296 L 498.121 107.675 L 86.924 110.827 L 0.302 109.771 L 1.564 111.395 C 4.776 87.375 -2.861 495.416 32.656 492.737\"\n\t\t\t\t\tdur=\"10s\"/>\n\t\t\t\t</path>\n\n\n\t\t\t    <path style=\"fill: rgb(135, 207, 235);\" d=\"M 75.098 434.429 C 99.356 396.991 150.65 413.886 158.764 456.298 C 182.097 553.587 235.379 478.602 241.763 460.606 C 275.138 414.821 304.328 595.005 352.105 457.776 C 372.559 367.841 409.846 508.718 410.601 503.844 C 444.147 593.855 419.956 406.739 439.297 388.299 C 453.499 374.758 462.091 372.946 463.653 374.273 C 460.648 373.615 480.886 414.955 483.936 419.252 C 498.569 426.588 501.142 114.241 498.358 115.233 L 502.682 109.077 L 83.937 112.066 L -4.274 111.069 L -0.303 111.179 C 3.789 118.758 6.609 477.448 34.047 473.312\">\n\t\t\t\t<animate\n\t\t\t\t\t attributeType=\"XML\" \n\t\t\t\t\tattributeName=\"d\" \n\t\t\t\t\tfrom=\"M 57.175 161.934 C 81.433 124.496 101.701 119.902 109.815 162.314 C 133.148 259.603 173.668 170.211 180.052 152.215 C 213.427 106.43 231.111 334.706 278.888 197.477 C 299.342 107.542 339.714 200.881 340.469 196.007 C 374.015 286.018 385.495 168.404 404.836 149.964 C 419.038 136.423 445.412 158.961 446.974 160.288 C 443.969 159.63 462.995 173.01 466.045 177.307 C 480.678 184.643 494.334 115.566 498.358 115.233 L 502.682 109.077 L 83.937 112.066 L -4.274 111.069 L -0.303 111.179 C 14.069 115.775 32.11 166.712 57.598 163.142\"\n\t\t\t\t\t to=\"M 75.098 434.429 C 99.356 396.991 150.65 413.886 158.764 456.298 C 182.097 553.587 235.379 478.602 241.763 460.606 C 275.138 414.821 304.328 595.005 352.105 457.776 C 372.559 367.841 409.846 508.718 410.601 503.844 C 444.147 593.855 419.956 406.739 439.297 388.299 C 453.499 374.758 462.091 372.946 463.653 374.273 C 460.648 373.615 480.886 414.955 483.936 419.252 C 498.569 426.588 501.142 114.241 498.358 115.233 L 502.682 109.077 L 83.937 112.066 L -4.274 111.069 L -0.303 111.179 C 3.789 118.758 6.609 477.448 34.047 473.312\"\n\t\t\t\t\tdur=\"10s\"/>\n\n\t\t\t    </path>\n\t\t\t    <rect x=\"1.25\" y=\"0.545\" width=\"500.213\" height=\"111.811\" style=\"fill: rgb(135, 207, 235);\" rx=\"2.847\" ry=\"2.847\"/>\n\t\t\t  </g>\n\t\t\t</svg>\n\t\t";
    }
  }]);

  return WaveAnimation;
}(_index.default);

exports.default = WaveAnimation;
;

},{"./lib/index":10,"./state":11}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29udGFjdC5qcyIsInNyYy9NYWluUGFnZS5qcyIsInNyYy9OYXZpZ2F0aW9uLmpzIiwic3JjL1Byb2plY3REZXNjcmlwdGlvbi5qcyIsInNyYy9TaWRlRm9vdGVyLmpzIiwic3JjL1NpZGVGb290ZXIyLmpzIiwic3JjL2FwcC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9saWIvSW5kZXguanMiLCJzcmMvbGliL2luZGV4LmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3V0aWwuanMiLCJzcmMvd2F2ZS1hbmltYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFWjtBQUNQO0FBaUNBOzs7O0VBcENtQyxlOzs7Ozs7Ozs7Ozs7QUNGckM7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsUTs7Ozs7Ozs7Ozs7OztpQ0FDUjtBQUNYLGFBQU8sQ0FBQyxtQkFBRCxDQUFQO0FBQ0E7Ozs2QkFDTztBQUNQO0FBY0E7Ozs7RUFuQm9DLGM7Ozs7Ozs7Ozs7OztBQ0h0Qzs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFU7Ozs7Ozs7Ozs7Ozs7d0NBQ0Q7QUFDbEIsV0FBSyxtQkFBTCxHQUEyQixRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUEzQjtBQUNBLFdBQUssa0JBQUwsR0FBMEIsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBMUI7O0FBQ0EsV0FBSyxpQkFBTDtBQUNBOzs7d0NBR2tCO0FBQUE7O0FBQ2xCLHlCQUFJLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxtQkFBaEMsQ0FBSixFQUEwRCxPQUExRCxDQUFrRSxVQUFBLE1BQU0sRUFBRTtBQUN0RSxRQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixF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QUFyQyxXQUFaO0FBRUEsVUFBQSxNQUFNLENBQUMsTUFBUCxDQUFjLEtBQUssQ0FBQyxDQUFwQixFQUF1QixLQUFLLENBQUMsQ0FBN0I7QUFDQSxVQUFBLE1BQU0sQ0FBQyxhQUFQLENBQXFCLEdBQUcsQ0FBQyxDQUF6QixFQUE0QixHQUFHLENBQUMsQ0FBaEMsRUFBbUMsR0FBRyxDQUFDLENBQXZDLEVBQTBDLEdBQUcsQ0FBQyxDQUE5QyxFQUFpRCxHQUFHLENBQUMsQ0FBckQsRUFBd0QsR0FBRyxDQUFDLENBQTVEO0FBQ0E7O0FBQ0QsUUFBQSxHQUFHLENBQUMsU0FBSixHQUFnQixTQUFoQjtBQUNBLFFBQUEsR0FBRyxDQUFDLElBQUosQ0FBUyxNQUFULEVBQWlCLFNBQWpCO0FBQ0EsUUFBQSxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQWxCO0FBRUEsWUFBTSxTQUFTLEdBQUcscUJBQXFCLENBQUMsSUFBRCxDQUF2Qzs7QUFHQSxZQUFHLE1BQU0sSUFBSSxJQUFiLEVBQWtCO0FBQ2pCLFVBQUEsb0JBQW9CLENBQUMsU0FBRCxDQUFwQjtBQUNBO0FBQ0QsT0FuQ0Q7O0FBcUNBLE1BQUEsSUFBSTtBQUVKOzs7NkJBQ087QUFFUDtBQWtDQTs7OztFQS9GeUMsYzs7O0FBZ0cxQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9JbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBJbmRleHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBtYXJnaW4tdG9wLTQgIG1hcmdpbi1sZWZ0LTQgcGFkZGluZy1yaWdodC00IHBhZGRpbmctbGVmdC00XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG5cdFx0XHRcdFx0XHQ8cD5JIGFtIEZ1bGxzdGFjayBkZXZlbG9wZXIgd2hvIGNhbiBoZWxwIHlvdSB3aXRoIHlvdXIgZGlnaXRhbCBuZWVkcy5JIGNhbiBoZWxwIHlvdSB3aXRoIHRoZSBjdXR0aW5nIGVkZ2UgdGVjaG5vbG9neS4gWW91IGNhbiBjb250YWN0IG1lIGhlcmUgXG5cdFx0XHRcdFx0XHRvciBlbWFpbCBhdCBhYmR1bGxhaDI4OTFAZ21haWwuY29tPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNSBsb2dpbi1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5Db21tZW50PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1sZyBcIj48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YFxuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIEluZGV4e1xuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtOYXZpZ2F0aW9uXTtcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBpbnRyb2R1Y3Rpb24gaW50cm9kdWN0aW9uLXNtXCI+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCIgY29sLWxnLTFcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJuYW1lLXBhZCBjb2wtbGctNiAgIGNvbC1zbS0xMFwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInRpdGxlXCI+PHN0cm9uZz5IaSw8L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0PHA+PHN0cm9uZz5XZWxjb21lIHRvIHRoaXMgY29ybmVyIG9mIHRoZSBpbnRlcm5ldDwvc3Ryb25nPjwvcD5cblx0XHRcdFx0XHQ8cD48c3Ryb25nPk15IE5hbWUgaXMgQWJkdWxsYWggUmFobWFuPC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxwPjxzdHJvbmc+SG93IGNhbiBJIGhlbHAgeW91IHRvZGF5PC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJOYXZpZ2F0aW9uXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRgO1xuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge2ZhZGVJbixzY3JvbGwsc2Nyb2xsSGVpZ2h0fSBmcm9tICAnLi91dGlsJztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgSW5kZXh7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5zZWNvbmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZFBhZ2UnKTtcblx0XHR0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlyZFBhZ2UnKTtcblx0XHR0aGlzLl9hZGRFdmVudExpc3RlbmVyKCk7XG5cdH1cblxuXG5cdF9hZGRFdmVudExpc3RlbmVyKCl7XG5cdFx0Wy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb24tYnV0dG9uJyldLmZvckVhY2goYnV0dG9uPT57XG5cdFx0ICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XHRjb25zdCBwYWdlTmFtZSA9IGV2ZW50LnNyY0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hdmlnYXRpb24nKXx8ZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2aWdhdGlvbicpO1xuXHRcdFx0ICAgIFx0Y29uc3QgcG9zaXRpb24gPSBldmVudC5zcmNFbGVtZW50Lm9mZnNldFRvcCB8fCBldmVudC5jdXJyZW50VGFyZ2V0Lm9mZnNldFRvcDtcblx0XHRcdFx0XG5cdFx0XHRcdHN0YXRlLmRpZFNjcm9sbFtwYWdlTmFtZV0gPSB0cnVlO1xuXG5cdFx0XHQgICAgXHRzd2l0Y2gocGFnZU5hbWUpe1xuXHRcdFx0XHRcdGNhc2UgJ3NlY29uZFBhZ2UnOlxuXHRcdFx0XHRcdFx0c2Nyb2xsKHN0YXRlLnBvc2l0aW9uLnNlY29uZFBhZ2UgLTIwKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0IGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3RoaXJkUGFnZSc6XG5cdFx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0XHRcdHNjcm9sbChzdGF0ZS5wb3NpdGlvbi50aGlyZFBhZ2UgLTIwKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvb3RlcicpLmNsYXNzTmFtZSArPScgY29udGFjdC1mb290ZXIgJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHQgICAgfS5iaW5kKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwiYWJvdXRcIiAgdGl0bGU9XCJHaXRodWJcIiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS00IGN1cnNvci1wb2ludGVyICBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWJkdWxsYWgyODkxXCI+IDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL2FyY2hpdGVjdC5zdmdcIiAvPjwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwic2Vjb25kUGFnZVwiICB0aXRsZT1cIlByb2plY3RzXCIgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tNCBjdXJzb3ItcG9pbnRlciBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL3Byb2plY3Rvci1zY3JlZW4uc3ZnXCIvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwidGhpcmRQYWdlXCIgIHRpdGxlPVwiQ29udGFjdHNcIiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS00IGN1cnNvci1wb2ludGVyIG5hdmlnYXRpb24tYnV0dG9uXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cImljb25cIiBzcmM9XCJjc3MvaWNvbnMvbGlnaHRidWxiLnN2Z1wiLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHtmYWRlSW4sb2Zmc2V0fSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFdhdmVBbmltYXRpb24gZnJvbSAnLi93YXZlLWFuaW1hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3REZXNjcmlwdGlvbiBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXHRcdHRoaXMuX3NldF9wb3NpdGlvbigpO1xuXHRcblx0fVxuXG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW1dhdmVBbmltYXRpb25dO1xuXHR9XG5cdF9oYW5kbGVTY3JvbGxpbmcoKXtcblx0XHRjb25zb2xlLmxvZyhzdGF0ZS5wcm9qZWN0cylcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbihldmVudCl7XG5cdFx0XHRjb25zdCBzY3JvbGxfcG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWSArIDUwMDtcblx0XHRcdGNvbnN0IHJhbmdlID0gNTAwO1xuXG5cdFx0XHRjb25zdCBzY3JvbGxlZF9wcm9qZWN0ID0gc3RhdGUucHJvamVjdHMuZmluZChwcm9qZWN0PT57XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0gcHJvamVjdC5wb3NpdGlvbi50b3A7XG5cblx0XHRcdFx0cmV0dXJuIHNjcm9sbF9wb3NpdGlvbiA+PSAocG9zaXRpb24gLXJhbmdlKSAmJiBzY3JvbGxfcG9zaXRpb24gPD0gKHBvc2l0aW9uICsgcmFuZ2UpO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGlmKCFzY3JvbGxlZF9wcm9qZWN0KXtyZXR1cm4gfTtcblxuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRfcHJvamVjdF9lbGVtZW50PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY3JvbGxlZF9wcm9qZWN0LmlkKTtcblxuXHRcdFx0aWYoIXNlbGVjdGVkX3Byb2plY3RfZWxlbWVudCB8fCBzY3JvbGxlZF9wcm9qZWN0LmRpZFNjcm9sbCl7cmV0dXJuIH07XG5cdFx0XHRcblx0XHRcdHNjcm9sbGVkX3Byb2plY3QuZGlkU2Nyb2xsID0gdHJ1ZTtcblx0XHRcdHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxlZF9wcm9qZWN0LnBvc2l0aW9uO1xuXHRcdFx0c2VsZWN0ZWRfcHJvamVjdF9lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0ZmFkZUluKHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudCk7XG5cblx0XHR9KVxuXG5cdH1cblxuXHRfc2V0X3Bvc2l0aW9uKCl7XG5cdFx0c3RhdGUucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XG5cdFx0XHRwcm9qZWN0LnBvc2l0aW9uID0gb2Zmc2V0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QuaWQpKTtcblx0XHR9KTtcblxuXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcHJvamVjdF9kZXNjcmlwdGlvbiA9IChwcm9qZWN0KT0+e1xuXHRcdFx0cmV0dXJuIGBcblx0XHRcdFx0PGgzPiR7cHJvamVjdC50aXRsZX08L2gzPlxuXHRcdFx0XHQ8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHQ8cD4ke3Byb2plY3Quc2tpbGxzfTwvcD5cblx0XHRcdGA7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGltYWdlID0gKHByb2plY3QpPT5gPGltZyBzcmM9XCIke3Byb2plY3QubGlua31cIiBhbHQ9XCIke3Byb2plY3QudGl0bGV9XCIgLz5gO1xuXG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3MgZGF0YS1jb21wb25lbnQ9XCJXYXZlQW5pbWF0aW9uXCI+PC9kaXY+XHRcblx0XHRcdCR7XG5cdFx0XHRcdHN0YXRlLnByb2plY3RzLnJlZHVjZSgoaHRtbCxwcm9qZWN0LGluZGV4KT0+e1xuXHRcdFx0XHRcdGNvbnN0IHNob3dSb3cgPSBwcm9qZWN0LnNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcblx0XHRcdFx0XHRjb25zdCBpc0V2ZW4gPSBpbmRleCAlIDIgPT09MDtcblx0XHRcdFx0XHRjb25zdCByb3cgPSBgXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwiJHtwcm9qZWN0LmlkfVwiIGNsYXNzPVwicm93IHByb2plY3Qtcm93XCIgc3R5bGU9XCJvcGFjaXR5OjBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0ke2lzRXZlbiA/ICc0JzogJzgnfSAgaW1hZ2UtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0JHshaXNFdmVuID8gaW1hZ2UocHJvamVjdCkgOiBwcm9qZWN0X2Rlc2NyaXB0aW9uKHByb2plY3QpfVx0XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLSR7aXNFdmVuID8gJzgnOiAnNCd9IGltYWdlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdCR7aXNFdmVuID8gaW1hZ2UocHJvamVjdCkgOiBwcm9qZWN0X2Rlc2NyaXB0aW9uKHByb2plY3QpfVx0XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0YDtcblx0XHRcdFx0XHRodG1sKz1yb3cgKyAnXFxuJztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gaHRtbDtcblxuXHRcdFx0XHR9LCcnKVxuXG5cdFx0XHR9XG5cblx0XHRgO1xuXG5cdH1cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZUZvb3RlciBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXG5cdFx0Y29uc29sZS5sb2coc3RhdGUpXG5cblx0fVxuXHRcblx0X3VwZGF0ZU9wYWNpdHkoc2Nyb2xsUG9zaXRpb24pe1xuXG5cdFx0XG5cblx0XHRbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5kZXhdJyldLmZvckVhY2goY3VycmVudERvbT0+e1xuXHRcdFx0Y29uc3QgaW5kZXggPSBjdXJyZW50RG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuXHRcdFx0Y29uc3QgcHJvamVjdCA9IHN0YXRlLnByb2plY3RzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgeSA9ICh4LHBvc2l0aW9uKT0+e1xuXHRcdFx0XHRjb25zdCByYW5nZSA9IHByb2plY3QudXBwZXJfZW5kIC0gcHJvamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0Y29uc3Qgb3BhY2l0eSA9IC1NYXRoLnBvdygoeC1wb3NpdGlvbikvcmFuZ2UsMikgKyAxO1xuXHRcdFx0XHRyZXR1cm4gb3BhY2l0eSA+IDAuMyA/IG9wYWNpdHk6IDAuMjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gcGFyc2VJbnQocHJvamVjdC5wb3NpdGlvbik7XG5cdFx0XHRjb25zdCBwb3NpdGlvbkhpZ2hlc3RPcGFjaXR5ID0gIHByb2plY3QucG9zaXRpb247XG5cdFx0XHRjb25zdCBjdXJyZW50T3BhY2l0eSA9IHkoc2Nyb2xsUG9zaXRpb24scG9zaXRpb25IaWdoZXN0T3BhY2l0eSk7XG5jb25zb2xlLmxvZyhjdXJyZW50T3BhY2l0eSlcblx0XHRcdGN1cnJlbnREb20uc3R5bGUub3BhY2l0eSA9IGN1cnJlbnRPcGFjaXR5O1xuXHRcdFx0cHJvamVjdC5vZmZzZXQgPSBjdXJyZW50T3BhY2l0eTtcblx0XHRcdHByb2plY3Qub3BhY2l0eSA9IGN1cnJlbnRPcGFjaXR5O1xuXHR9KVxuXG5cdH1cblxuXG5cdF9oYW5kbGVTY3JvbGxpbmcoKXtcblx0XHRjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SW1hZ2VDb250YWluZXInKTsgXG5cdFx0XG5cdFx0aW1hZ2VDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbihldmVudCl7XG5cdFx0XHRjb25zdCBzY3JvbGxQb3NpdGlvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wO1xuXHRcdFx0c3RhdGUubm90aWZ5UHJvcGVydHlDaGFuZ2Uoc2Nyb2xsUG9zaXRpb24pO1x0XG5cdFx0XHR0aGlzLl91cGRhdGVPcGFjaXR5KHNjcm9sbFBvc2l0aW9uKTtcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdH1cblx0XG5cdF91cGRhdGVET01Qb3NpdGlvbigpe1xuXHRcdFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0LWltYWdlJyldLmZvckVhY2goKGltYWdlLGluZGV4KT0+e1xuXHRcdFx0c3RhdGUucHJvamVjdHNbaW5kZXhdLnBvc2l0aW9uID0gaW1hZ2Uub2Zmc2V0VG9wO1xuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PHVsIGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCIgaWQ9XCJwcm9qZWN0SW1hZ2VDb250YWluZXJcIj5cblx0XHRcdFx0JHtcblx0XHRcdFx0XHRzdGF0ZS5wcm9qZWN0cy5yZWR1Y2UoKGh0bWwscHJvamVjdCxpbmRleCk9Pntcblx0XHRcdFx0XHRcdGh0bWwgKz0gYDxsaT48aW1nIGNsYXNzPVwicHJvamVjdC1pbWFnZVwiIGRhdGEtaW5kZXg9JHtpbmRleH0gc3R5bGU9XCJvcGFjaXR5OiR7cHJvamVjdC5vcGFjaXR5fVwiICBzcmM9XCIke3Byb2plY3QubGlua31cIiAvPjwvbGk+YDtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGh0bWw7XG5cdFx0XHRcdFx0fSwnJylcblx0XHRcdFx0fVxuXHRcdFx0XHQ8bGk+PGRpdiBjbGFzcz1cImVtcHR5LWltYWdlXCI+PC9kaXY+PC9saT5cblx0XHRcdDwvdWw+XG5cdFx0YDtcblxuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCAgZnJvbSAnLi9saWIvaW5kZXgnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVGb290ZXIyIGV4dGVuZHMgSW5kZXh7XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGA8ZGl2IGlkPVwiY29udGFjdEZvb3RlclwiICBjbGFzcz1cInNpZGUtZm9vdGVyXCI+Q29udGFjdDwvZGl2PmA7XG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge3Njcm9sbCxmYWRlSW4sc2Nyb2xsSGVpZ2h0LG9mZnNldH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5pbXBvcnQgTWFpblBhZ2UgZnJvbSAnLi9NYWluUGFnZSc7XG5pbXBvcnQgU2lkZUZvb3RlciBmcm9tICcuL1NpZGVGb290ZXInO1xuaW1wb3J0IFNpZGVGb290ZXIyIGZyb20gJy4vU2lkZUZvb3RlcjInO1xuaW1wb3J0IFByb2plY3REZXNjcmlwdGlvbiBmcm9tICcuL1Byb2plY3REZXNjcmlwdGlvbic7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL0NvbnRhY3QnOyBcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuc2Vjb25kUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmRQYWdlJyk7XG5cdFx0dGhpcy50aGlyZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcmRQYWdlJyk7XG5cdFx0dGhpcy5fc2V0X2VsZW1lbnRfaWQoKTtcblx0XHR0aGlzLl9oYW5kbGVTY3JvbGxpbmcoKTtcblx0fVxuXG5cblxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtNYWluUGFnZSxDb250YWN0LCBQcm9qZWN0RGVzY3JpcHRpb24sU2lkZUZvb3RlcjIsU2lkZUZvb3Rlcl07XG5cdH1cblxuXHRcblx0X3NldF9lbGVtZW50X2lkKCl7XG5cdFx0c3RhdGUucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XG5cdFx0XHRwcm9qZWN0LmlkID0gJ3Byb2plY3QnICsgTWF0aC5yYW5kb20oKTtcblx0XHR9KTtcblx0fVxuXG5cdF9zZXRfZWxlbWVudF9wb3NpdGlvbigpe1xuXHRcdE9iamVjdC5rZXlzKHN0YXRlLnBvc2l0aW9uKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG5cdFx0XHRzdGF0ZS5wb3NpdGlvbltrZXldID0gb2Zmc2V0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGtleSkpLnRvcCB8fCAwO1xuXHRcdH0pO1xuXHR9XG5cblx0X2hhbmRsZVNjcm9sbGluZygpe1xuXHRcdC8vc2VjdGlvbiBwb3NpdGlvblxuXHRcdFxuXHRcdC8vc2F2aW5nIHRoaXMgcG9zaXRpb25uIGZvciBjaGFuZ2Vcblx0XHRsZXQgcHJldmlvdXNfcG9zaXRpb24gPSAwO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsZnVuY3Rpb24oKXtcblx0XHRcdFx0dGhpcy5fc2V0X2VsZW1lbnRfcG9zaXRpb24oKTtcblx0XHRcdFx0Y29uc3Qgc2Vjb25kX3BhZ2VfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbi5zZWNvbmRQYWdlO1xuXHRcdFx0XHRjb25zdCB0aGlyZF9wYWdlX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24udGhpcmRQYWdlO1xuXHRcdFx0XHRcblxuXHRcdFx0XHQvL2dldCB0aGUgc2Nyb2xsaW5nIHBvc2l0aW9uIFxuXHRcdFx0XHRsZXQgc2Nyb2xsX3Bvc2l0aW9uID0gIHdpbmRvdy5zY3JvbGxZO1xuXHRcdFx0XHRsZXQgY2hhbmdlID0gc2Nyb2xsX3Bvc2l0aW9uIC0gcHJldmlvdXNfcG9zaXRpb247XHRcbiBcdFx0XHRcdFxuXHRcdFx0XHRwcmV2aW91c19wb3NpdGlvbiA9IHNjcm9sbF9wb3NpdGlvbjtcblxuXHRcdFx0XHRcdFxuXHRcdFx0XHRpZighc3RhdGUuZGlkU2Nyb2xsLnNlY29uZFBhZ2UgICYmIGNoYW5nZSA+IDApe1xuXHRcdFx0XHRcdHN0YXRlLmRpZFNjcm9sbC5zZWNvbmRQYWdlICA9IHRydWU7XG5cblx0XHRcdFx0XHRzY3JvbGwoc2Vjb25kX3BhZ2VfcG9zaXRpb24gLSA1MCApO1xuXHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZighc3RhdGUuZGlkU2Nyb2xsLnRoaXJkUGFnZSAmJiBjaGFuZ2UgPiAwICYmICBzY3JvbGxfcG9zaXRpb24gPj0gIHRoaXJkX3BhZ2VfcG9zaXRpb24gLSA1MDAgKXtcblx0XHRcdFx0XHRzdGF0ZS5kaWRTY3JvbGwudGhpcmRQYWdlID0gdHJ1ZTtcblx0XHRcdFx0XHRzY3JvbGwoc2Nyb2xsSGVpZ2h0KCksdGhpcmRfcGFnZV9wb3NpdGlvbik7XG5cdFx0XHRcdFx0ZmFkZUluKHRoaXMudGhpcmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0fVxuXG5cdFxuXHRcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBpZD1cImZpcnN0UGFnZVwiICBjbGFzcz1cInJvdyBmaXJzdC1wYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBtYWluLXBhZ2UgIG1haW4tcGFnZS1zbVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBkYXRhLWNvbXBvbmVudD1cIk1haW5QYWdlXCI+PC9kaXY+XHRcblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBpZD1cInNlY29uZFBhZ2VcIj5cblx0XHRcdFx0XHQ8ZGl2ICBkYXRhLWNvbXBvbmVudD1cIlByb2plY3REZXNjcmlwdGlvblwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgaWQ9XCJ0aGlyZFBhZ2VcIiAgY2xhc3M9XCJyb3cgdGhpcmQtcGFnZVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz0nY29sLW1kLTEyJyBkYXRhLWNvbXBvbmVudD1cIkNvbnRhY3RcIj48L2Rpdj4gPC9kaXY+IDwvZGl2PiBgIH0gXG5cblxufVxuIiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7IFxuXHRuZXcgQXBwKCdhcHAnKTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXh7XG5cdC8qKlxuXHQgKiBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiBAcGFyYW0gY29tcG9uZW50IGNvbXBvbmVudCBuYW1lXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihjb21wb25lbnQpe1xuXHRcdHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG5cdFx0Y29uc3QgcHJvbWlzZXMgPSB0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkubWFwKHF1ZXJ5U2VsZWN0b3I9Pntcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXG5cdFx0fSlcblxuXHRcdFByb21pc2UuYWxsKHByb21pc2VzKVxuXHRcdFx0LnRoZW4oKCk9Pntcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgID0gdGhpcy5yZW5kZXIoKTtcblx0XHRcdFx0dGhpcy5sb2FkQ2hpbGRWaWV3cygpO1xuXHRcdFx0XHR0aGlzLmluc2VydEVsZW1lbnQodGVtcGxhdGUpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcblx0XHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogaG9vayBmb3IgdGhpbmdzIGFyZSBsb2FkZWRcblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHR9XG5cblx0LyoqXG5cdCAqIHBvcHVsYXRpbmcgdGhlIGlubmVyaHRtbFxuXHQgKlxuXHQgKiBAcGFyYW0gdGVtcGxhdGVcblx0ICovXG5cdGluc2VydEVsZW1lbnQodGVtcGxhdGUpe1xuXHRcdHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5mb3JFYWNoKGNvbXBvbmVudEluc3RhbmNlPT57XG5cdFx0XHRjb21wb25lbnRJbnN0YW5jZS5pbm5lckhUTUwgPSAgdGVtcGxhdGU7XG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gJyc7XG5cblx0fVxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtdO1xuXHRcdFxuXHR9XG5cdGNvbXBvbmVudFNlbGVjdG9yKCl7XG5cdFx0cmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1jb21wb25lbnQ9XCIke3RoaXMuY29tcG9uZW50fVwiXWApXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBsb2FkaW5nIGxpc3RlZCBjaGlsZCB2aWV3c1xuXHQgKi9cblx0bG9hZENoaWxkVmlld3MoKXtcblx0XHRpZighQXJyYXkuaXNBcnJheSh0aGlzLmNoaWxkVmlld3MoKSApKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmNoaWxkVmlld3MoKS5mb3JFYWNoKHZpZXc9Pntcblx0XHRcdGxldCBjbGFzc05hbWUgPSB2aWV3LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0bmV3IHZpZXcoYCR7Y2xhc3NOYW1lfWApO1xuXHRcdH0pXG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4e1xuXHQvKipcblx0ICogY29uc3RydWN0b3Jcblx0ICpcblx0ICogQHBhcmFtIGNvbXBvbmVudCBjb21wb25lbnQgbmFtZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29tcG9uZW50KXtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5jb21wb25lbnRTZWxlY3RvcigpLm1hcChxdWVyeVNlbGVjdG9yPT57XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblxuXHRcdH0pXG5cblx0XHRQcm9taXNlLmFsbChwcm9taXNlcylcblx0XHRcdC50aGVuKCgpPT57XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlICA9IHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdHRoaXMubG9hZENoaWxkVmlld3MoKTtcblx0XHRcdFx0dGhpcy5pbnNlcnRFbGVtZW50KHRlbXBsYXRlKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIGhvb2sgZm9yIHRoaW5ncyBhcmUgbG9hZGVkXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdC8qKlxuXHQgKiBwb3B1bGF0aW5nIHRoZSBpbm5lcmh0bWxcblx0ICpcblx0ICogQHBhcmFtIHRlbXBsYXRlXG5cdCAqL1xuXHRpbnNlcnRFbGVtZW50KHRlbXBsYXRlKXtcblx0XHR0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkuZm9yRWFjaChjb21wb25lbnRJbnN0YW5jZT0+e1xuXHRcdFx0Y29tcG9uZW50SW5zdGFuY2UuaW5uZXJIVE1MID0gIHRlbXBsYXRlO1xuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuICcnO1xuXG5cdH1cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbXTtcblx0XHRcblx0fVxuXHRjb21wb25lbnRTZWxlY3Rvcigpe1xuXHRcdHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY29tcG9uZW50PVwiJHt0aGlzLmNvbXBvbmVudH1cIl1gKV07XG5cdH1cblxuXHQvKipcblx0ICogbG9hZGluZyBsaXN0ZWQgY2hpbGQgdmlld3Ncblx0ICovXG5cdGxvYWRDaGlsZFZpZXdzKCl7XG5cdFx0aWYoIUFycmF5LmlzQXJyYXkodGhpcy5jaGlsZFZpZXdzKCkgKSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGlsZFZpZXdzKCkuZm9yRWFjaCh2aWV3PT57XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gdmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTtcblx0XHRcdG5ldyB2aWV3KGAke2NsYXNzTmFtZX1gKTtcblx0XHR9KVxuXHR9XG59XG4iLCJleHBvcnQgIGNvbnN0IHN0YXRlICA9ICB7XG5cdGRpZFNjcm9sbCA6IHthYm91dCA6IGZhbHNlLCBzZWNvbmRQYWdlIDogZmFsc2UgLCB0aGlyZFBhZ2UgOiBmYWxzZX0sXG5cdHByb2plY3RzOiBbe1xuXHRcdGlkIDogbnVsbCxcblx0XHR0aXRsZTogXCJUQVNLIE9SR0FOSVpFUlwiLFxuXHRcdGRlc2NyaXB0aW9uIDpcIkEgVEFTSyBPUkdBTklaRVIgV0VCIEFQUExJQ0FUSU9OIFdJVEggRU1CRVIgSlMgRlJPTlRFTkQgQU5EIERKQU5HTyBSRVNUIEZSQU1FV09SSyxJTlRFR1JBVElORyBNWVNRTCBBUyBEQVRBQkFTRSBTVVBQT1JULlwiLFxuXHRcdHNraWxsczogXCJESkFOR08gUkVTVCwgRU1CRVIgSlMsIE1ZU1FMLCBIRVJPS1UsIEJPT1RTVFJBUFwiLFxuXHRcdGxpbmsgOiBcImh0dHBzOi8vY2RuLmNvbG9ybGliLmNvbS93cC93cC1jb250ZW50L3VwbG9hZHMvc2l0ZXMvMi9ob3ctdG8tc2V0dXAtd2Vic2l0ZS5qcGdcIiwgXHRcblx0XHRzaG93IDogdHJ1ZSxcblx0XHRwb3NpdGlvbjogMCxcblx0XHRvcGFjaXR5OiAxLFxuXHRcdGRpZFNjcm9sbDogZmFsc2Vcblx0fSxcblx0e1xuXHRcdGlkIDogbnVsbCxcblx0XHR0aXRsZTogXCJPRkZMSU5FIEZJUlNUIFJFRERJVCBWSUVXRVJcIixcblx0XHRkZXNjcmlwdGlvbiA6XCJUSElTIFJFQUNUIEFQUCBVVElMSVpFUyBTRVJWSUNFIFdPUktFUiBBTkQgQ0FDSElORyBIRUFWSUxZIFRPIEdJVkUgT0ZGTElORSBGSVJTVCBFWFBFUklFTkNFIEZPUiBBIFNVQlJFRERJVChSRURESVQgU1VCIEZPUlVNKS5DVVJSRU5UTFksIEkgQU0gV09SS0lORyBPTiBNQUtJTkcgSVQgTU9SRSBSRUFERVIgRlJJRU5ETFkgQU5EIFdSSVRFUiBGUklFTkRMWS5cIixcblx0XHRza2lsbHM6IFwiUkVBQ1QgLCBTRVJWSUNFIFdPUktFUiAsIE9BVVRIMiAuIEhFUk9LVSwgQk9PVFNUUkFQXCIsXG5cdFx0bGluayA6IFwiaHR0cHM6Ly9jZG4uYmxlc3N0aGlzc3R1ZmYuY29tL2ltYWdlbnMvc3R1ZmYvY2xlYXItYXBwLWZvci1pcGhvbmUuanBnXCIsXG5cdFx0c2hvdyA6IGZhbHNlLFxuXHRcdHBvc2l0aW9uIDogMjgyLFxuXHRcdG9wYWNpdHk6IDAuMixcblx0XHRkaWRTY3JvbGw6IGZhbHNlXG5cblx0fSxcblx0e1xuXHRcdGlkIDogbnVsbCxcblx0XHR0aXRsZTogXCJDSEFOR0UgTVkgVklFVyBSRUFERVJcIixcblx0XHRkZXNjcmlwdGlvbiA6XCJBIFJFRERJVCBDTElFTlQgTUFERSBVU0lORyBSRUFDVCBOQVRJVkUgV0hJQ0ggQUxMT1dTIFVTRVIgQUREIFBPU1QgQU5EIFBFUkZPUk0gQUNUSU9OIE9OIFRIRSBBUFAoQVVUSEVOVElDQVRFRCBVU0lORyBPQVVUSDIpXCIsXG5cdFx0c2tpbGxzOiBcIlJFQUNUIE5BVElWRSAsIE9BVVRIMiAsIEhFUk9LVVwiLFxuXHRcdGxpbmsgOiBcImh0dHBzOi8vcGhhbmRyb2lkLnMzLmFtYXpvbmF3cy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDQvQm9vc3QtZm9yLXJlZGRpdC1hbmRyb2lkLmpwZ1wiLFxuXHRcdHNob3cgOiBmYWxzZSxcblx0XHRwb3NpdGlvbiA6IDYyNixcblx0XHRvcGFjaXR5OiAwLjA1LFxuXHRcdGRpZFNjcm9sbDogZmFsc2Vcblx0fV0sXG5cdHBvc2l0aW9uOntcblx0XHRmaXJzdFBhZ2U6IG51bGwsXG5cdFx0c2Vjb25kUGFnZTogbnVsbCxcblx0XHR0aGlyZFBhZ2U6IG51bGxcblx0fSxcblxuXHRzY3JvbGw6e1xuXHRcdGZpcnN0UGFnZTogbnVsbCxcblx0XHRzZWNvbmRQYWdlOiBudWxsLFxuXHRcdHRoaXJkUGFnZTogbnVsbFxuXHR9LFxuXHRub3RpZnlQcm9wZXJ0eUNoYW5nZSgpe31cbn1cbiIsImV4cG9ydCBjb25zdCBzY3JvbGxIZWlnaHQgPSAoKT0+e1xuXHRyZXR1cm4gTWF0aC5tYXgoIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCApO1xufVxuXG5leHBvcnQgY29uc3Qgc2Nyb2xsID0gKGxhc3RfcG9zdGlvbixpbml0aWFsX3Bvc2l0aW9uPTApPT57XG5cdGNvbnN0IHJhdGUgPSAxNTtcblx0bGV0IHBvc2l0aW9uID0gaW5pdGlhbF9wb3NpdGlvbiA7XG5cdGNvbnN0IHJlcGVhdE9mdGVuID0gKCk9Pntcblx0XHRwb3NpdGlvbiA9IHBvc2l0aW9uK3JhdGU7XG5cdFx0d2luZG93LnNjcm9sbCgwLHBvc2l0aW9uKTtcblx0XHRjb25zdCBnbG9iYWxJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXBlYXRPZnRlbik7XG5cdFx0aWYocG9zaXRpb24gPj0gbGFzdF9wb3N0aW9uKXtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdsb2JhbElEKTtcblx0XHR9XG5cdH1cblxuXHRyZXBlYXRPZnRlbigpO1xufVxuXG5leHBvcnQgY29uc3QgZmFkZUluID0gKGVsZW1lbnQsaW5pdGlhbD0wKT0+e1xuXHRjb25zdCByYXRlID0gMC4wNTtcblx0Ly9maW5hbCBvcGFjaXR5IGNhbid0IGJlIGJpZ2dlciB0aGFuIDFcblx0Y29uc3QgZmluYWxPcGFjaXR5ID0gMTtcblxuXHRsZXQgb3BhY2l0eSA9IGluaXRpYWw7XG5cblx0Y29uc3QgX3Rhc2sgPSAoKT0+e1xuXHRcdGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG5cdFx0b3BhY2l0eSA9IG9wYWNpdHkgKyByYXRlOyBcblx0XHRjb25zdCBnbG9iYWxJRCA9ICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3Rhc2spO1xuXHRcdGlmKG9wYWNpdHkgPj0gZmluYWxPcGFjaXR5KXtcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdsb2JhbElEKVxuXHRcdH1cblx0fVxuXG5cdF90YXNrKCk7XG5cbn1cblxuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChlbCk9PiB7XG4gICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIHJldHVybiB7IHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AsIGxlZnQ6IHJlY3QubGVmdCArIHNjcm9sbExlZnQgfVxufVxuXG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdmVBbmltYXRpb24gZXh0ZW5kcyBJbmRleCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhdmUtYW5pbWF0aW9uJyk7XG5cblx0XHRpZihjYW52YXMuZ2V0Q29udGV4dCl7XG5cdFx0XHR0aGlzLl9kcmF3KGNhbnZhcyk7XG5cdFx0fWVsc2V7XG5cdFx0XHRjb25zb2xlLndhcm4oJ2ZhaWxlZCBpbnRpYWxpemVkIGNhbnZhc2UnKTtcblx0XHR9XG5cdH1cblx0X2RyYXcoY2FudmFzKXtcblx0XHRjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0XHRjb25zdCB7dGhpcmRQYWdlLCBzZWNvbmRQYWdlfSA9IHN0YXRlLnBvc2l0aW9uO1xuXHRcdGNvbnN0IGhlaWdodCA9IHBhcnNlSW50KHRoaXJkUGFnZSkgLSBwYXJzZUludChzZWNvbmRQYWdlKTtcblx0XHR0aGlzLl9kcmF3X3dhdnlfcGF0aChjdHgpO1x0XG5cdH1cblxuXG5cdF9kcmF3X3dhdnlfcGF0aChjdHgsb2Zmc2V0PTApe1xuXHRcdGNvbnN0IGRyYXcgPSAoKT0+e1xuXHRcdFx0Y3R4LmNsZWFyUmVjdCgwLCAwLCAzMDAsIDMwMCk7XG5cdFx0XHRsZXQgcmVnaW9uID0gbmV3IFBhdGgyRCgpO1xuXHRcdFx0Y29uc3Qgb2Zmc2V0eSA9IDEwO1xuXG5cdFx0XHRyZWdpb24ubGluZVRvKDAsMCk7XG5cdFx0XHRyZWdpb24ubGluZVRvKDAsMzAgKyBvZmZzZXQpO1xuXHRcdFx0Ly8gRGVmaW5lIHRoZSBwb2ludHMgYXMge3gsIHl9XG5cdFx0XHRcblx0XHRcdHJlZ2lvbi5saW5lVG8oMzAwLDMwICsgb2Zmc2V0KTtcblx0XHRcdHJlZ2lvbi5saW5lVG8oMzAwLDApO1xuXHRcdFx0cmVnaW9uLmNsb3NlUGF0aCgpO1xuXG5cdFx0XHRjdHguZmlsbFN0eWxlID0gJyMyZDI3MjcnO1xuXHRcdFx0Y3R4LmZpbGwocmVnaW9uLCAnZXZlbm9kZCcpO1xuXG5cdFx0XHRmb3IobGV0IG9mZnNldHggPSAwOyBvZmZzZXR4IDw9IDMwMCA7IG9mZnNldHggPSBvZmZzZXR4ICsgNDApe1xuXHRcdFx0XHRsZXQgc3RhcnQgPSB7IHg6IDArb2Zmc2V0eCwgICAgeTogMjAgKyBvZmZzZXR5ICArIG9mZnNldCB9O1xuXHRcdFx0XHRsZXQgY3AxID0gICB7IHg6IDEwK29mZnNldHgsICAgeTogMCAgKyBvZmZzZXR5ICsgb2Zmc2V0fTtcblx0XHRcdFx0bGV0IGNwMiA9ICAgeyB4OiAzMCtvZmZzZXR4LCAgIHk6IDgwICArIG9mZnNldHkgKyBvZmZzZXR9O1xuXHRcdFx0XHRsZXQgZW5kID0gICB7IHg6IDQwK29mZnNldHgsICAgeTogMjAgKyBvZmZzZXR5ICsgb2Zmc2V0IH07XG5cdFx0XHRcdFxuXHRcdFx0XHRyZWdpb24ubW92ZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuXHRcdFx0XHRyZWdpb24uYmV6aWVyQ3VydmVUbyhjcDEueCwgY3AxLnksIGNwMi54LCBjcDIueSwgZW5kLngsIGVuZC55KTtcblx0XHRcdH1cblx0XHRcdGN0eC5maWxsU3R5bGUgPSAnIzJkMjcyNyc7XG5cdFx0XHRjdHguZmlsbChyZWdpb24sICdldmVub2RkJyk7XG5cdFx0XHRvZmZzZXQgPSBvZmZzZXQgKyAwLjMzO1xuXG5cdFx0XHRjb25zdCByZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG5cblxuXHRcdFx0aWYob2Zmc2V0ID49IDEwMDApe1xuXHRcdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRyYXcoKTtcblxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdFxuXHRcdHJldHVybiBgXG5cdFx0XHQ8c3ZnIGNsYXNzPVwid2F2eS1pbWFnZVwiIHZpZXdCb3g9XCIwIDAgNTAwIDUwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdCAgPGRlZnM+XG5cdFx0XHQgICAgPHBhdHRlcm4gaWQ9XCJwYXR0ZXJuLTBcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI1XCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj5cblx0XHRcdCAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiMTAwXCIgc3R5bGU9XCJmaWxsOiBibGFjaztcIi8+XG5cdFx0XHQgICAgPC9wYXR0ZXJuPlxuXHRcdFx0ICA8L2RlZnM+XG5cdFx0XHQgIDxnPlxuXHRcdFx0ICAgIDxwYXRoIHN0eWxlPVwiZmlsbDogcmdiKDIxNiwgMjE2LCAyMTYpO1wiLz5cblx0XHRcdCAgICA8cGF0aCBzdHlsZT1cImZpbGw6IHJnYigyMTYsIDIxNiwgMjE2KTtcIi8+XG5cdFx0XHQgICAgPHBhdGggc3R5bGU9XCJmaWxsOiByZ2IoMTk0LCAyNDksIDI4KTtcIiBkPVwiTSA2OC44NzYgNDYwLjY0NyBDIDc5LjUwNyA0NDcuNjgyIDEzMC45ODcgNDMyLjY0OCAxMzguODg5IDQ3Ny4yOTEgQyAxNjQuMDYzIDU3Ni4xNzEgMTc1LjMyMSA0NzguODgxIDE5MC41MzUgNDUwLjM1MyBDIDIwNy44MTQgNDA4LjI3IDIyNi4xODYgNTk5LjkyNiAyNzYuNDkgNDUzLjk0MiBDIDI5Ni40MTUgMzU5LjE4IDM0Mi4xNjEgNDUwLjYxIDM0My4yMDEgNDQ5LjEzNiBDIDQ1Ni42NTIgNTczLjczNyA0MTMuNTQzIDQ1NC45NDEgNDYwLjQ2IDQyNC4yMjQgQyA0NjkuNTQzIDQxMC4wNzEgNDY4LjcxNCA0MzEuMDczIDQ3MS4zODcgNDMwLjk5OCBDIDQ3Mi41MTEgNDMwLjE5IDQ4OC45NjggNDYzLjk4NSA0OTAuNjIyIDQ2OC4yNDEgQyA1MTMuODIzIDQ5Mi43OSA1MDIuMzYyIDEyMS4wNzIgNDk5LjcgMTE0LjI5NiBMIDQ5OC4xMjEgMTA3LjY3NSBMIDg2LjkyNCAxMTAuODI3IEwgMC4zMDIgMTA5Ljc3MSBMIDEuNTY0IDExMS4zOTUgQyA0Ljc3NiA4Ny4zNzUgLTIuODYxIDQ5NS40MTYgMzIuNjU2IDQ5Mi43MzdcIj5cblx0XHRcdFx0PGFuaW1hdGVcblx0XHRcdFx0XHQgYXR0cmlidXRlVHlwZT1cIlhNTFwiIFxuXHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU9XCJkXCIgXG5cdFx0XHRcdFx0ZnJvbT1cIk0gNTcuMTc1IDE2MS45MzQgQyA4MS40MzMgMTI0LjQ5NiAxMDEuNzAxIDExOS45MDIgMTA5LjgxNSAxNjIuMzE0IEMgMTMzLjE0OCAyNTkuNjAzIDE3My42NjggMTcwLjIxMSAxODAuMDUyIDE1Mi4yMTUgQyAyMTMuNDI3IDEwNi40MyAyMzEuMTExIDMzNC43MDYgMjc4Ljg4OCAxOTcuNDc3IEMgMjk5LjM0MiAxMDcuNTQyIDMzOS43MTQgMjAwLjg4MSAzNDAuNDY5IDE5Ni4wMDcgQyAzNzQuMDE1IDI4Ni4wMTggMzg1LjQ5NSAxNjguNDA0IDQwNC44MzYgMTQ5Ljk2NCBDIDQxOS4wMzggMTM2LjQyMyA0NDUuNDEyIDE1OC45NjEgNDQ2Ljk3NCAxNjAuMjg4IEMgNDQzLjk2OSAxNTkuNjMgNDYyLjk5NSAxNzMuMDEgNDY2LjA0NSAxNzcuMzA3IEMgNDgwLjY3OCAxODQuNjQzIDQ5NC4zMzQgMTE1LjU2NiA0OTguMzU4IDExNS4yMzMgTCA1MDIuNjgyIDEwOS4wNzcgTCA4My45MzcgMTEyLjA2NiBMIC00LjI3NCAxMTEuMDY5IEwgLTAuMzAzIDExMS4xNzkgQyAxNC4wNjkgMTE1Ljc3NSAzMi4xMSAxNjYuNzEyIDU3LjU5OCAxNjMuMTQyXCJcblx0XHRcdFx0XHQgdG89XCJNIDY4Ljg3NiA0NjAuNjQ3IEMgNzkuNTA3IDQ0Ny42ODIgMTMwLjk4NyA0MzIuNjQ4IDEzOC44ODkgNDc3LjI5MSBDIDE2NC4wNjMgNTc2LjE3MSAxNzUuMzIxIDQ3OC44ODEgMTkwLjUzNSA0NTAuMzUzIEMgMjA3LjgxNCA0MDguMjcgMjI2LjE4NiA1OTkuOTI2IDI3Ni40OSA0NTMuOTQyIEMgMjk2LjQxNSAzNTkuMTggMzQyLjE2MSA0NTAuNjEgMzQzLjIwMSA0NDkuMTM2IEMgNDU2LjY1MiA1NzMuNzM3IDQxMy41NDMgNDU0Ljk0MSA0NjAuNDYgNDI0LjIyNCBDIDQ2OS41NDMgNDEwLjA3MSA0NjguNzE0IDQzMS4wNzMgNDcxLjM4NyA0MzAuOTk4IEMgNDcyLjUxMSA0MzAuMTkgNDg4Ljk2OCA0NjMuOTg1IDQ5MC42MjIgNDY4LjI0MSBDIDUxMy44MjMgNDkyLjc5IDUwMi4zNjIgMTIxLjA3MiA0OTkuNyAxMTQuMjk2IEwgNDk4LjEyMSAxMDcuNjc1IEwgODYuOTI0IDExMC44MjcgTCAwLjMwMiAxMDkuNzcxIEwgMS41NjQgMTExLjM5NSBDIDQuNzc2IDg3LjM3NSAtMi44NjEgNDk1LjQxNiAzMi42NTYgNDkyLjczN1wiXG5cdFx0XHRcdFx0ZHVyPVwiMTBzXCIvPlxuXHRcdFx0XHQ8L3BhdGg+XG5cblxuXHRcdFx0ICAgIDxwYXRoIHN0eWxlPVwiZmlsbDogcmdiKDEzNSwgMjA3LCAyMzUpO1wiIGQ9XCJNIDc1LjA5OCA0MzQuNDI5IEMgOTkuMzU2IDM5Ni45OTEgMTUwLjY1IDQxMy44ODYgMTU4Ljc2NCA0NTYuMjk4IEMgMTgyLjA5NyA1NTMuNTg3IDIzNS4zNzkgNDc4LjYwMiAyNDEuNzYzIDQ2MC42MDYgQyAyNzUuMTM4IDQxNC44MjEgMzA0LjMyOCA1OTUuMDA1IDM1Mi4xMDUgNDU3Ljc3NiBDIDM3Mi41NTkgMzY3Ljg0MSA0MDkuODQ2IDUwOC43MTggNDEwLjYwMSA1MDMuODQ0IEMgNDQ0LjE0NyA1OTMuODU1IDQxOS45NTYgNDA2LjczOSA0MzkuMjk3IDM4OC4yOTkgQyA0NTMuNDk5IDM3NC43NTggNDYyLjA5MSAzNzIuOTQ2IDQ2My42NTMgMzc0LjI3MyBDIDQ2MC42NDggMzczLjYxNSA0ODAuODg2IDQxNC45NTUgNDgzLjkzNiA0MTkuMjUyIEMgNDk4LjU2OSA0MjYuNTg4IDUwMS4xNDIgMTE0LjI0MSA0OTguMzU4IDExNS4yMzMgTCA1MDIuNjgyIDEwOS4wNzcgTCA4My45MzcgMTEyLjA2NiBMIC00LjI3NCAxMTEuMDY5IEwgLTAuMzAzIDExMS4xNzkgQyAzLjc4OSAxMTguNzU4IDYuNjA5IDQ3Ny40NDggMzQuMDQ3IDQ3My4zMTJcIj5cblx0XHRcdFx0PGFuaW1hdGVcblx0XHRcdFx0XHQgYXR0cmlidXRlVHlwZT1cIlhNTFwiIFxuXHRcdFx0XHRcdGF0dHJpYnV0ZU5hbWU9XCJkXCIgXG5cdFx0XHRcdFx0ZnJvbT1cIk0gNTcuMTc1IDE2MS45MzQgQyA4MS40MzMgMTI0LjQ5NiAxMDEuNzAxIDExOS45MDIgMTA5LjgxNSAxNjIuMzE0IEMgMTMzLjE0OCAyNTkuNjAzIDE3My42NjggMTcwLjIxMSAxODAuMDUyIDE1Mi4yMTUgQyAyMTMuNDI3IDEwNi40MyAyMzEuMTExIDMzNC43MDYgMjc4Ljg4OCAxOTcuNDc3IEMgMjk5LjM0MiAxMDcuNTQyIDMzOS43MTQgMjAwLjg4MSAzNDAuNDY5IDE5Ni4wMDcgQyAzNzQuMDE1IDI4Ni4wMTggMzg1LjQ5NSAxNjguNDA0IDQwNC44MzYgMTQ5Ljk2NCBDIDQxOS4wMzggMTM2LjQyMyA0NDUuNDEyIDE1OC45NjEgNDQ2Ljk3NCAxNjAuMjg4IEMgNDQzLjk2OSAxNTkuNjMgNDYyLjk5NSAxNzMuMDEgNDY2LjA0NSAxNzcuMzA3IEMgNDgwLjY3OCAxODQuNjQzIDQ5NC4zMzQgMTE1LjU2NiA0OTguMzU4IDExNS4yMzMgTCA1MDIuNjgyIDEwOS4wNzcgTCA4My45MzcgMTEyLjA2NiBMIC00LjI3NCAxMTEuMDY5IEwgLTAuMzAzIDExMS4xNzkgQyAxNC4wNjkgMTE1Ljc3NSAzMi4xMSAxNjYuNzEyIDU3LjU5OCAxNjMuMTQyXCJcblx0XHRcdFx0XHQgdG89XCJNIDc1LjA5OCA0MzQuNDI5IEMgOTkuMzU2IDM5Ni45OTEgMTUwLjY1IDQxMy44ODYgMTU4Ljc2NCA0NTYuMjk4IEMgMTgyLjA5NyA1NTMuNTg3IDIzNS4zNzkgNDc4LjYwMiAyNDEuNzYzIDQ2MC42MDYgQyAyNzUuMTM4IDQxNC44MjEgMzA0LjMyOCA1OTUuMDA1IDM1Mi4xMDUgNDU3Ljc3NiBDIDM3Mi41NTkgMzY3Ljg0MSA0MDkuODQ2IDUwOC43MTggNDEwLjYwMSA1MDMuODQ0IEMgNDQ0LjE0NyA1OTMuODU1IDQxOS45NTYgNDA2LjczOSA0MzkuMjk3IDM4OC4yOTkgQyA0NTMuNDk5IDM3NC43NTggNDYyLjA5MSAzNzIuOTQ2IDQ2My42NTMgMzc0LjI3MyBDIDQ2MC42NDggMzczLjYxNSA0ODAuODg2IDQxNC45NTUgNDgzLjkzNiA0MTkuMjUyIEMgNDk4LjU2OSA0MjYuNTg4IDUwMS4xNDIgMTE0LjI0MSA0OTguMzU4IDExNS4yMzMgTCA1MDIuNjgyIDEwOS4wNzcgTCA4My45MzcgMTEyLjA2NiBMIC00LjI3NCAxMTEuMDY5IEwgLTAuMzAzIDExMS4xNzkgQyAzLjc4OSAxMTguNzU4IDYuNjA5IDQ3Ny40NDggMzQuMDQ3IDQ3My4zMTJcIlxuXHRcdFx0XHRcdGR1cj1cIjEwc1wiLz5cblxuXHRcdFx0ICAgIDwvcGF0aD5cblx0XHRcdCAgICA8cmVjdCB4PVwiMS4yNVwiIHk9XCIwLjU0NVwiIHdpZHRoPVwiNTAwLjIxM1wiIGhlaWdodD1cIjExMS44MTFcIiBzdHlsZT1cImZpbGw6IHJnYigxMzUsIDIwNywgMjM1KTtcIiByeD1cIjIuODQ3XCIgcnk9XCIyLjg0N1wiLz5cblx0XHRcdCAgPC9nPlxuXHRcdFx0PC9zdmc+XG5cdFx0YDtcblxuXHR9XG59O1xuIl19
