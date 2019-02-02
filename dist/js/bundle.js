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
    key: "render",
    value: function render() {
      return "\n\t\t\t<svg id=\"projectBackground\" class=\"wavy-image\" viewBox=\"0 0 500 500\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t  <defs>\n\t\t\t    <pattern id=\"pattern-0\" x=\"0\" y=\"0\" width=\"25\" height=\"25\" patternUnits=\"userSpaceOnUse\" viewBox=\"0 0 100 100\">\n\t\t\t      <rect x=\"0\" y=\"0\" width=\"50\" height=\"100\" style=\"fill: black;\"/>\n\t\t\t    </pattern>\n\t\t\t  </defs>\n\t\t\t  <g>\n\t\t\t    <path style=\"fill: rgb(216, 216, 216);\"/>\n\t\t\t    <path style=\"fill: rgb(216, 216, 216);\"/>\n\t\t\t    <path style=\"fill: rgb(194, 249, 28);\" d=\"M 68.876 460.647 C 79.507 447.682 130.987 432.648 138.889 477.291 C 164.063 576.171 175.321 478.881 190.535 450.353 C 207.814 408.27 226.186 599.926 276.49 453.942 C 296.415 359.18 342.161 450.61 343.201 449.136 C 456.652 573.737 413.543 454.941 460.46 424.224 C 469.543 410.071 468.714 431.073 471.387 430.998 C 472.511 430.19 488.968 463.985 490.622 468.241 C 513.823 492.79 502.362 121.072 499.7 114.296 L 498.121 107.675 L 86.924 110.827 L 0.302 109.771 L 1.564 111.395 C 4.776 87.375 -2.861 495.416 32.656 492.737\">\n\t\t\t\t<animate\n\t\t\t\t\t attributeType=\"XML\" \n\t\t\t\t\tattributeName=\"d\" \n\t\t\t\t\tfrom=\"M 57.175 161.934 C 81.433 124.496 101.701 119.902 109.815 162.314 C 133.148 259.603 173.668 170.211 180.052 152.215 C 213.427 106.43 231.111 334.706 278.888 197.477 C 299.342 107.542 339.714 200.881 340.469 196.007 C 374.015 286.018 385.495 168.404 404.836 149.964 C 419.038 136.423 445.412 158.961 446.974 160.288 C 443.969 159.63 462.995 173.01 466.045 177.307 C 480.678 184.643 494.334 115.566 498.358 115.233 L 502.682 109.077 L 83.937 112.066 L -4.274 111.069 L -0.303 111.179 C 14.069 115.775 32.11 166.712 57.598 163.142\"\n\t\t\t\t\t to=\"M 68.876 460.647 C 79.507 447.682 130.987 432.648 138.889 477.291 C 164.063 576.171 175.321 478.881 190.535 450.353 C 207.814 408.27 226.186 599.926 276.49 453.942 C 296.415 359.18 342.161 450.61 343.201 449.136 C 456.652 573.737 413.543 454.941 460.46 424.224 C 469.543 410.071 468.714 431.073 471.387 430.998 C 472.511 430.19 488.968 463.985 490.622 468.241 C 513.823 492.79 502.362 121.072 499.7 114.296 L 498.121 107.675 L 86.924 110.827 L 0.302 109.771 L 1.564 111.395 C 4.776 87.375 -2.861 495.416 32.656 492.737\"\n\t\t\t\t\tdur=\"10s\"/>\n\t\t\t\t</path>\n\n\n\t\t\t    <path style=\"fill: rgb(135, 207, 235);\" d=\"M 75.098 434.429 C 99.356 396.991 150.65 413.886 158.764 456.298 C 182.097 553.587 235.379 478.602 241.763 460.606 C 275.138 414.821 304.328 595.005 352.105 457.776 C 372.559 367.841 409.846 508.718 410.601 503.844 C 444.147 593.855 419.956 406.739 439.297 388.299 C 453.499 374.758 462.091 372.946 463.653 374.273 C 460.648 373.615 480.886 414.955 483.936 419.252 C 498.569 426.588 501.142 114.241 498.358 115.233 L 502.682 109.077 L 83.937 112.066 L -4.274 111.069 L -0.303 111.179 C 3.789 118.758 6.609 477.448 34.047 473.312\">\n\t\t\t\t<animate\n\t\t\t\t\t attributeType=\"XML\" \n\t\t\t\t\tattributeName=\"d\" \n\t\t\t\t\tfrom=\"M 57.175 161.934 C 81.433 124.496 101.701 119.902 109.815 162.314 C 133.148 259.603 173.668 170.211 180.052 152.215 C 213.427 106.43 231.111 334.706 278.888 197.477 C 299.342 107.542 339.714 200.881 340.469 196.007 C 374.015 286.018 385.495 168.404 404.836 149.964 C 419.038 136.423 445.412 158.961 446.974 160.288 C 443.969 159.63 462.995 173.01 466.045 177.307 C 480.678 184.643 494.334 115.566 498.358 115.233 L 502.682 109.077 L 83.937 112.066 L -4.274 111.069 L -0.303 111.179 C 14.069 115.775 32.11 166.712 57.598 163.142\"\n\t\t\t\t\t to=\"M 75.098 434.429 C 99.356 396.991 150.65 413.886 158.764 456.298 C 182.097 553.587 235.379 478.602 241.763 460.606 C 275.138 414.821 304.328 595.005 352.105 457.776 C 372.559 367.841 409.846 508.718 410.601 503.844 C 444.147 593.855 419.956 406.739 439.297 388.299 C 453.499 374.758 462.091 372.946 463.653 374.273 C 460.648 373.615 480.886 414.955 483.936 419.252 C 498.569 426.588 501.142 114.241 498.358 115.233 L 502.682 109.077 L 83.937 112.066 L -4.274 111.069 L -0.303 111.179 C 3.789 118.758 6.609 477.448 34.047 473.312\"\n\t\t\t\t\tdur=\"10s\"/>\n\n\t\t\t    </path>\n\t\t\t    <rect x=\"1.25\" y=\"0.545\" width=\"500.213\" height=\"111.811\" style=\"fill: rgb(135, 207, 235);\" rx=\"2.847\" ry=\"2.847\"/>\n\t\t\t  </g>\n\t\t\t</svg>\n\t\t";
    }
  }]);

  return WaveAnimation;
}(_index.default);

exports.default = WaveAnimation;
;

},{"./lib/index":10,"./state":11}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29udGFjdC5qcyIsInNyYy9NYWluUGFnZS5qcyIsInNyYy9OYXZpZ2F0aW9uLmpzIiwic3JjL1Byb2plY3REZXNjcmlwdGlvbi5qcyIsInNyYy9TaWRlRm9vdGVyLmpzIiwic3JjL1NpZGVGb290ZXIyLmpzIiwic3JjL2FwcC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9saWIvSW5kZXguanMiLCJzcmMvbGliL2luZGV4LmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3V0aWwuanMiLCJzcmMvd2F2ZS1hbmltYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFWjtBQUNQO0FBaUNBOzs7O0VBcENtQyxlOzs7Ozs7Ozs7Ozs7QUNGckM7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsUTs7Ozs7Ozs7Ozs7OztpQ0FDUjtBQUNYLGFBQU8sQ0FBQyxtQkFBRCxDQUFQO0FBQ0E7Ozs2QkFDTztBQUNQO0FBY0E7Ozs7RUFuQm9DLGM7Ozs7Ozs7Ozs7OztBQ0h0Qzs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFU7Ozs7Ozs7Ozs7Ozs7d0NBQ0Q7QUFDbEIsV0FBSyxtQkFBTCxHQUEyQixRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUEzQjtBQUNBLFdBQUssa0JBQUwsR0FBMEIsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBMUI7O0FBQ0EsV0FBSyxpQkFBTDtBQUNBOzs7d0NBR2tCO0FBQUE7O0FBQ2xCLHlCQUFJLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxtQkFBaEMsQ0FBSixFQUEwRCxPQUExRCxDQUFrRSxVQUFBLE1BQU0sRUFBRTtBQUN0RSxRQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixF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Q0FBQyxFQUFELEVBQU87QUFDekIsTUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLHFCQUFILEVBQVg7QUFBQSxNQUNBLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBUCxJQUFzQixRQUFRLENBQUMsZUFBVCxDQUF5QixVQUQ1RDtBQUFBLE1BRUEsU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFQLElBQXNCLFFBQVEsQ0FBQyxlQUFULENBQXlCLFNBRjNEO0FBR0EsU0FBTztBQUFFLElBQUEsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFMLEdBQVcsU0FBbEI7QUFBNkIsSUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUwsR0FBWTtBQUEvQyxHQUFQO0FBQ0gsQ0FMTTs7Ozs7Ozs7Ozs7O0FDeENQOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLGE7Ozs7Ozs7Ozs7Ozs7NkJBQ1o7QUFFUDtBQWtDQTs7OztFQXJDeUMsYzs7O0FBc0MxQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9JbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3QgZXh0ZW5kcyBJbmRleHtcblxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBtYXJnaW4tdG9wLTQgIG1hcmdpbi1sZWZ0LTQgcGFkZGluZy1yaWdodC00IHBhZGRpbmctbGVmdC00XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG5cdFx0XHRcdFx0XHQ8cD5JIGFtIEZ1bGxzdGFjayBkZXZlbG9wZXIgd2hvIGNhbiBoZWxwIHlvdSB3aXRoIHlvdXIgZGlnaXRhbCBuZWVkcy5JIGNhbiBoZWxwIHlvdSB3aXRoIHRoZSBjdXR0aW5nIGVkZ2UgdGVjaG5vbG9neS4gWW91IGNhbiBjb250YWN0IG1lIGhlcmUgXG5cdFx0XHRcdFx0XHRvciBlbWFpbCBhdCBhYmR1bGxhaDI4OTFAZ21haWwuY29tPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNSBsb2dpbi1mb3JtXCI+XG5cdFx0XHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+TmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgXCIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5Db21tZW50PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1sZyBcIj48L3RleHRhcmVhPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YFxuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIEluZGV4e1xuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtOYXZpZ2F0aW9uXTtcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvdyBpbnRyb2R1Y3Rpb24gaW50cm9kdWN0aW9uLXNtXCI+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCIgY29sLWxnLTFcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJuYW1lLXBhZCBjb2wtbGctNiAgIGNvbC1zbS0xMFwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInRpdGxlXCI+PHN0cm9uZz5IaSw8L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0PHA+PHN0cm9uZz5XZWxjb21lIHRvIHRoaXMgY29ybmVyIG9mIHRoZSBpbnRlcm5ldDwvc3Ryb25nPjwvcD5cblx0XHRcdFx0XHQ8cD48c3Ryb25nPk15IE5hbWUgaXMgQWJkdWxsYWggUmFobWFuPC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxwPjxzdHJvbmc+SG93IGNhbiBJIGhlbHAgeW91IHRvZGF5PC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJOYXZpZ2F0aW9uXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRgO1xuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge2ZhZGVJbixzY3JvbGwsc2Nyb2xsSGVpZ2h0fSBmcm9tICAnLi91dGlsJztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgSW5kZXh7XG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdFx0dGhpcy5zZWNvbmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZFBhZ2UnKTtcblx0XHR0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGlyZFBhZ2UnKTtcblx0XHR0aGlzLl9hZGRFdmVudExpc3RlbmVyKCk7XG5cdH1cblxuXG5cdF9hZGRFdmVudExpc3RlbmVyKCl7XG5cdFx0Wy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb24tYnV0dG9uJyldLmZvckVhY2goYnV0dG9uPT57XG5cdFx0ICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0XHRjb25zdCBwYWdlTmFtZSA9IGV2ZW50LnNyY0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hdmlnYXRpb24nKXx8ZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2aWdhdGlvbicpO1xuXHRcdFx0ICAgIFx0Y29uc3QgcG9zaXRpb24gPSBldmVudC5zcmNFbGVtZW50Lm9mZnNldFRvcCB8fCBldmVudC5jdXJyZW50VGFyZ2V0Lm9mZnNldFRvcDtcblx0XHRcdFx0XG5cdFx0XHRcdHN0YXRlLmRpZFNjcm9sbFtwYWdlTmFtZV0gPSB0cnVlO1xuXG5cdFx0XHQgICAgXHRzd2l0Y2gocGFnZU5hbWUpe1xuXHRcdFx0XHRcdGNhc2UgJ3NlY29uZFBhZ2UnOlxuXHRcdFx0XHRcdFx0c2Nyb2xsKHN0YXRlLnBvc2l0aW9uLnNlY29uZFBhZ2UgLTIwKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0IGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3RoaXJkUGFnZSc6XG5cdFx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0XHRcdHNjcm9sbChzdGF0ZS5wb3NpdGlvbi50aGlyZFBhZ2UgLTIwKTtcblx0XHRcdFx0XHRcdGZhZGVJbih0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvb3RlcicpLmNsYXNzTmFtZSArPScgY29udGFjdC1mb290ZXIgJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHQgICAgfS5iaW5kKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXHRyZW5kZXIoKXtcblxuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwiYWJvdXRcIiAgdGl0bGU9XCJHaXRodWJcIiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS00IGN1cnNvci1wb2ludGVyICBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYWJkdWxsYWgyODkxXCI+IDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL2FyY2hpdGVjdC5zdmdcIiAvPjwvYT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwic2Vjb25kUGFnZVwiICB0aXRsZT1cIlByb2plY3RzXCIgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tNCBjdXJzb3ItcG9pbnRlciBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL3Byb2plY3Rvci1zY3JlZW4uc3ZnXCIvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgZGF0YS1uYXZpZ2F0aW9uPVwidGhpcmRQYWdlXCIgIHRpdGxlPVwiQ29udGFjdHNcIiBjbGFzcz1cImNvbC1sZy00IGNvbC1zbS00IGN1cnNvci1wb2ludGVyIG5hdmlnYXRpb24tYnV0dG9uXCI+XG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cImljb25cIiBzcmM9XCJjc3MvaWNvbnMvbGlnaHRidWxiLnN2Z1wiLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXG5cdH1cblxufVxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHtmYWRlSW4sb2Zmc2V0fSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFdhdmVBbmltYXRpb24gZnJvbSAnLi93YXZlLWFuaW1hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3REZXNjcmlwdGlvbiBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXHRcdHRoaXMuX3NldF9wb3NpdGlvbigpO1xuXHRcblx0fVxuXG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW1dhdmVBbmltYXRpb25dO1xuXHR9XG5cdF9oYW5kbGVTY3JvbGxpbmcoKXtcblx0XHRjb25zb2xlLmxvZyhzdGF0ZS5wcm9qZWN0cylcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxmdW5jdGlvbihldmVudCl7XG5cdFx0XHRjb25zdCBzY3JvbGxfcG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWSArIDUwMDtcblx0XHRcdGNvbnN0IHJhbmdlID0gNTAwO1xuXG5cdFx0XHRjb25zdCBzY3JvbGxlZF9wcm9qZWN0ID0gc3RhdGUucHJvamVjdHMuZmluZChwcm9qZWN0PT57XG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0gcHJvamVjdC5wb3NpdGlvbi50b3A7XG5cblx0XHRcdFx0cmV0dXJuIHNjcm9sbF9wb3NpdGlvbiA+PSAocG9zaXRpb24gLXJhbmdlKSAmJiBzY3JvbGxfcG9zaXRpb24gPD0gKHBvc2l0aW9uICsgcmFuZ2UpO1xuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdGlmKCFzY3JvbGxlZF9wcm9qZWN0KXtyZXR1cm4gfTtcblxuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRfcHJvamVjdF9lbGVtZW50PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY3JvbGxlZF9wcm9qZWN0LmlkKTtcblxuXHRcdFx0aWYoIXNlbGVjdGVkX3Byb2plY3RfZWxlbWVudCB8fCBzY3JvbGxlZF9wcm9qZWN0LmRpZFNjcm9sbCl7cmV0dXJuIH07XG5cdFx0XHRcblx0XHRcdHNjcm9sbGVkX3Byb2plY3QuZGlkU2Nyb2xsID0gdHJ1ZTtcblx0XHRcdHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxlZF9wcm9qZWN0LnBvc2l0aW9uO1xuXHRcdFx0c2VsZWN0ZWRfcHJvamVjdF9lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0ZmFkZUluKHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudCk7XG5cblx0XHR9KVxuXG5cdH1cblxuXHRfc2V0X3Bvc2l0aW9uKCl7XG5cdFx0c3RhdGUucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0PT57XG5cdFx0XHRwcm9qZWN0LnBvc2l0aW9uID0gb2Zmc2V0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QuaWQpKTtcblx0XHR9KTtcblxuXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3QgcHJvamVjdF9kZXNjcmlwdGlvbiA9IChwcm9qZWN0KT0+e1xuXHRcdFx0cmV0dXJuIGBcblx0XHRcdFx0PGgzPiR7cHJvamVjdC50aXRsZX08L2gzPlxuXHRcdFx0XHQ8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuXHRcdFx0XHQ8cD4ke3Byb2plY3Quc2tpbGxzfTwvcD5cblx0XHRcdGA7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGltYWdlID0gKHByb2plY3QpPT5gPGltZyBzcmM9XCIke3Byb2plY3QubGlua31cIiBhbHQ9XCIke3Byb2plY3QudGl0bGV9XCIgLz5gO1xuXG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3MgZGF0YS1jb21wb25lbnQ9XCJXYXZlQW5pbWF0aW9uXCI+PC9kaXY+XHRcblx0XHRcdCR7XG5cdFx0XHRcdHN0YXRlLnByb2plY3RzLnJlZHVjZSgoaHRtbCxwcm9qZWN0LGluZGV4KT0+e1xuXHRcdFx0XHRcdGNvbnN0IHNob3dSb3cgPSBwcm9qZWN0LnNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcblx0XHRcdFx0XHRjb25zdCBpc0V2ZW4gPSBpbmRleCAlIDIgPT09MDtcblx0XHRcdFx0XHRjb25zdCByb3cgPSBgXG5cdFx0XHRcdFx0XHQ8ZGl2IGlkPVwiJHtwcm9qZWN0LmlkfVwiIGNsYXNzPVwicm93IHByb2plY3Qtcm93XCIgc3R5bGU9XCJvcGFjaXR5OjBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0ke2lzRXZlbiA/ICc0JzogJzgnfSAgaW1hZ2UtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0JHshaXNFdmVuID8gaW1hZ2UocHJvamVjdCkgOiBwcm9qZWN0X2Rlc2NyaXB0aW9uKHByb2plY3QpfVx0XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLSR7aXNFdmVuID8gJzgnOiAnNCd9IGltYWdlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdCR7aXNFdmVuID8gaW1hZ2UocHJvamVjdCkgOiBwcm9qZWN0X2Rlc2NyaXB0aW9uKHByb2plY3QpfVx0XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0YDtcblx0XHRcdFx0XHRodG1sKz1yb3cgKyAnXFxuJztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gaHRtbDtcblxuXHRcdFx0XHR9LCcnKVxuXG5cdFx0XHR9XG5cblx0XHRgO1xuXG5cdH1cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZUZvb3RlciBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuX2hhbmRsZVNjcm9sbGluZygpO1xuXG5cdFx0Y29uc29sZS5sb2coc3RhdGUpXG5cblx0fVxuXHRcblx0X3VwZGF0ZU9wYWNpdHkoc2Nyb2xsUG9zaXRpb24pe1xuXHRcdFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pbmRleF0nKV0uZm9yRWFjaChjdXJyZW50RG9tPT57XG5cdFx0XHRjb25zdCBpbmRleCA9IGN1cnJlbnREb20uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG5cdFx0XHRjb25zdCBwcm9qZWN0ID0gc3RhdGUucHJvamVjdHNbaW5kZXhdO1xuXG5cdFx0XHRjb25zdCB5ID0gKHgscG9zaXRpb24pPT57XG5cdFx0XHRcdGNvbnN0IHJhbmdlID0gcHJvamVjdC51cHBlcl9lbmQgLSBwcm9qZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRjb25zdCBvcGFjaXR5ID0gLU1hdGgucG93KCh4LXBvc2l0aW9uKS9yYW5nZSwyKSArIDE7XG5cdFx0XHRcdHJldHVybiBvcGFjaXR5ID4gMC4zID8gb3BhY2l0eTogMC4yO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSBwYXJzZUludChwcm9qZWN0LnBvc2l0aW9uKTtcblx0XHRcdGNvbnN0IHBvc2l0aW9uSGlnaGVzdE9wYWNpdHkgPSAgcHJvamVjdC5wb3NpdGlvbjtcblx0XHRcdGNvbnN0IGN1cnJlbnRPcGFjaXR5ID0geShzY3JvbGxQb3NpdGlvbixwb3NpdGlvbkhpZ2hlc3RPcGFjaXR5KTtcbmNvbnNvbGUubG9nKGN1cnJlbnRPcGFjaXR5KVxuXHRcdFx0Y3VycmVudERvbS5zdHlsZS5vcGFjaXR5ID0gY3VycmVudE9wYWNpdHk7XG5cdFx0XHRwcm9qZWN0Lm9mZnNldCA9IGN1cnJlbnRPcGFjaXR5O1xuXHRcdFx0cHJvamVjdC5vcGFjaXR5ID0gY3VycmVudE9wYWNpdHk7XG5cdFx0fSlcblxuXHR9XG5cblxuXHRfaGFuZGxlU2Nyb2xsaW5nKCl7XG5cdFx0Y29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEltYWdlQ29udGFpbmVyJyk7IFxuXHRcdFxuXHRcdGltYWdlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0Y29uc3Qgc2Nyb2xsUG9zaXRpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcDtcblx0XHRcdHN0YXRlLm5vdGlmeVByb3BlcnR5Q2hhbmdlKHNjcm9sbFBvc2l0aW9uKTtcdFxuXHRcdFx0dGhpcy5fdXBkYXRlT3BhY2l0eShzY3JvbGxQb3NpdGlvbik7XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHR9XG5cdFxuXHRfdXBkYXRlRE9NUG9zaXRpb24oKXtcblx0XHRbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC1pbWFnZScpXS5mb3JFYWNoKChpbWFnZSxpbmRleCk9Pntcblx0XHRcdHN0YXRlLnByb2plY3RzW2luZGV4XS5wb3NpdGlvbiA9IGltYWdlLm9mZnNldFRvcDtcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDx1bCBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiIGlkPVwicHJvamVjdEltYWdlQ29udGFpbmVyXCI+XG5cdFx0XHRcdCR7XG5cdFx0XHRcdFx0c3RhdGUucHJvamVjdHMucmVkdWNlKChodG1sLHByb2plY3QsaW5kZXgpPT57XG5cdFx0XHRcdFx0XHRodG1sICs9IGA8bGk+PGltZyBjbGFzcz1cInByb2plY3QtaW1hZ2VcIiBkYXRhLWluZGV4PSR7aW5kZXh9IHN0eWxlPVwib3BhY2l0eToke3Byb2plY3Qub3BhY2l0eX1cIiAgc3JjPVwiJHtwcm9qZWN0Lmxpbmt9XCIgLz48L2xpPmA7XG5cblx0XHRcdFx0XHRcdHJldHVybiBodG1sO1xuXHRcdFx0XHRcdH0sJycpXG5cdFx0XHRcdH1cblx0XHRcdFx0PGxpPjxkaXYgY2xhc3M9XCJlbXB0eS1pbWFnZVwiPjwvZGl2PjwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdGA7XG5cblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggIGZyb20gJy4vbGliL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRm9vdGVyMiBleHRlbmRzIEluZGV4e1xuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgPGRpdiBpZD1cImNvbnRhY3RGb290ZXJcIiAgY2xhc3M9XCJzaWRlLWZvb3RlclwiPkNvbnRhY3Q8L2Rpdj5gO1xuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtzY3JvbGwsZmFkZUluLHNjcm9sbEhlaWdodCxvZmZzZXR9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vTWFpblBhZ2UnO1xuaW1wb3J0IFNpZGVGb290ZXIgZnJvbSAnLi9TaWRlRm9vdGVyJztcbmltcG9ydCBTaWRlRm9vdGVyMiBmcm9tICcuL1NpZGVGb290ZXIyJztcbmltcG9ydCBQcm9qZWN0RGVzY3JpcHRpb24gZnJvbSAnLi9Qcm9qZWN0RGVzY3JpcHRpb24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JzsgXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kUGFnZScpO1xuXHRcdHRoaXMudGhpcmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXJkUGFnZScpO1xuXHRcdHRoaXMuX3NldF9lbGVtZW50X2lkKCk7XG5cdFx0dGhpcy5faGFuZGxlU2Nyb2xsaW5nKCk7XG5cdH1cblxuXG5cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbTWFpblBhZ2UsQ29udGFjdCwgUHJvamVjdERlc2NyaXB0aW9uLFNpZGVGb290ZXIyLFNpZGVGb290ZXJdO1xuXHR9XG5cblx0XG5cdF9zZXRfZWxlbWVudF9pZCgpe1xuXHRcdHN0YXRlLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xuXHRcdFx0cHJvamVjdC5pZCA9ICdwcm9qZWN0JyArIE1hdGgucmFuZG9tKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRfc2V0X2VsZW1lbnRfcG9zaXRpb24oKXtcblx0XHRPYmplY3Qua2V5cyhzdGF0ZS5wb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuXHRcdFx0c3RhdGUucG9zaXRpb25ba2V5XSA9IG9mZnNldChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXkpKS50b3AgfHwgMDtcblx0XHR9KTtcblx0fVxuXG5cdF9oYW5kbGVTY3JvbGxpbmcoKXtcblx0XHQvL3NlY3Rpb24gcG9zaXRpb25cblx0XHRcblx0XHQvL3NhdmluZyB0aGlzIHBvc2l0aW9ubiBmb3IgY2hhbmdlXG5cdFx0bGV0IHByZXZpb3VzX3Bvc2l0aW9uID0gMDtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXMuX3NldF9lbGVtZW50X3Bvc2l0aW9uKCk7XG5cdFx0XHRcdGNvbnN0IHNlY29uZF9wYWdlX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24uc2Vjb25kUGFnZTtcblx0XHRcdFx0Y29uc3QgdGhpcmRfcGFnZV9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uLnRoaXJkUGFnZTtcblx0XHRcdFx0XG5cblx0XHRcdFx0Ly9nZXQgdGhlIHNjcm9sbGluZyBwb3NpdGlvbiBcblx0XHRcdFx0bGV0IHNjcm9sbF9wb3NpdGlvbiA9ICB3aW5kb3cuc2Nyb2xsWTtcblx0XHRcdFx0bGV0IGNoYW5nZSA9IHNjcm9sbF9wb3NpdGlvbiAtIHByZXZpb3VzX3Bvc2l0aW9uO1x0XG4gXHRcdFx0XHRcblx0XHRcdFx0cHJldmlvdXNfcG9zaXRpb24gPSBzY3JvbGxfcG9zaXRpb247XG5cblx0XHRcdFx0XHRcblx0XHRcdFx0aWYoIXN0YXRlLmRpZFNjcm9sbC5zZWNvbmRQYWdlICAmJiBjaGFuZ2UgPiAwKXtcblx0XHRcdFx0XHRzdGF0ZS5kaWRTY3JvbGwuc2Vjb25kUGFnZSAgPSB0cnVlO1xuXG5cdFx0XHRcdFx0c2Nyb2xsKHNlY29uZF9wYWdlX3Bvc2l0aW9uIC0gNTAgKTtcblx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYoIXN0YXRlLmRpZFNjcm9sbC50aGlyZFBhZ2UgJiYgY2hhbmdlID4gMCAmJiAgc2Nyb2xsX3Bvc2l0aW9uID49ICB0aGlyZF9wYWdlX3Bvc2l0aW9uIC0gNTAwICl7XG5cdFx0XHRcdFx0c3RhdGUuZGlkU2Nyb2xsLnRoaXJkUGFnZSA9IHRydWU7XG5cdFx0XHRcdFx0c2Nyb2xsKHNjcm9sbEhlaWdodCgpLHRoaXJkX3BhZ2VfcG9zaXRpb24pO1xuXHRcdFx0XHRcdGZhZGVJbih0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdH1cblxuXHRcblx0XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdDxkaXYgaWQ9XCJmaXJzdFBhZ2VcIiAgY2xhc3M9XCJyb3cgZmlyc3QtcGFnZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgbWFpbi1wYWdlICBtYWluLXBhZ2Utc21cIj5cblx0XHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJNYWluUGFnZVwiPjwvZGl2Plx0XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJzZWNvbmRQYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiAgZGF0YS1jb21wb25lbnQ9XCJQcm9qZWN0RGVzY3JpcHRpb25cIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGlkPVwidGhpcmRQYWdlXCIgIGNsYXNzPVwicm93IHRoaXJkLXBhZ2VcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9J2NvbC1tZC0xMicgZGF0YS1jb21wb25lbnQ9XCJDb250YWN0XCI+PC9kaXY+IDwvZGl2PiA8L2Rpdj4gYCB9IFxuXG5cbn1cbiIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkgeyBcblx0bmV3IEFwcCgnYXBwJyk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4e1xuXHQvKipcblx0ICogY29uc3RydWN0b3Jcblx0ICpcblx0ICogQHBhcmFtIGNvbXBvbmVudCBjb21wb25lbnQgbmFtZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29tcG9uZW50KXtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5jb21wb25lbnRTZWxlY3RvcigpLm1hcChxdWVyeVNlbGVjdG9yPT57XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblxuXHRcdH0pXG5cblx0XHRQcm9taXNlLmFsbChwcm9taXNlcylcblx0XHRcdC50aGVuKCgpPT57XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlICA9IHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdHRoaXMubG9hZENoaWxkVmlld3MoKTtcblx0XHRcdFx0dGhpcy5pbnNlcnRFbGVtZW50KHRlbXBsYXRlKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIGhvb2sgZm9yIHRoaW5ncyBhcmUgbG9hZGVkXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdC8qKlxuXHQgKiBwb3B1bGF0aW5nIHRoZSBpbm5lcmh0bWxcblx0ICpcblx0ICogQHBhcmFtIHRlbXBsYXRlXG5cdCAqL1xuXHRpbnNlcnRFbGVtZW50KHRlbXBsYXRlKXtcblx0XHR0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkuZm9yRWFjaChjb21wb25lbnRJbnN0YW5jZT0+e1xuXHRcdFx0Y29tcG9uZW50SW5zdGFuY2UuaW5uZXJIVE1MID0gIHRlbXBsYXRlO1xuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuICcnO1xuXG5cdH1cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbXTtcblx0XHRcblx0fVxuXHRjb21wb25lbnRTZWxlY3Rvcigpe1xuXHRcdHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY29tcG9uZW50PVwiJHt0aGlzLmNvbXBvbmVudH1cIl1gKV07XG5cdH1cblxuXHQvKipcblx0ICogbG9hZGluZyBsaXN0ZWQgY2hpbGQgdmlld3Ncblx0ICovXG5cdGxvYWRDaGlsZFZpZXdzKCl7XG5cdFx0aWYoIUFycmF5LmlzQXJyYXkodGhpcy5jaGlsZFZpZXdzKCkgKSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGlsZFZpZXdzKCkuZm9yRWFjaCh2aWV3PT57XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gdmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTtcblx0XHRcdG5ldyB2aWV3KGAke2NsYXNzTmFtZX1gKTtcblx0XHR9KVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleHtcblx0LyoqXG5cdCAqIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqIEBwYXJhbSBjb21wb25lbnQgY29tcG9uZW50IG5hbWVcblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudCl7XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cblx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5tYXAocXVlcnlTZWxlY3Rvcj0+e1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9Pntcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cblx0XHR9KVxuXG5cdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0XHQudGhlbigoKT0+e1xuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSAgPSB0aGlzLnJlbmRlcigpO1xuXHRcdFx0XHR0aGlzLmxvYWRDaGlsZFZpZXdzKCk7XG5cdFx0XHRcdHRoaXMuaW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSk7XG5cblx0XHRcdFx0dGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBob29rIGZvciB0aGluZ3MgYXJlIGxvYWRlZFxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHQvKipcblx0ICogcG9wdWxhdGluZyB0aGUgaW5uZXJodG1sXG5cdCAqXG5cdCAqIEBwYXJhbSB0ZW1wbGF0ZVxuXHQgKi9cblx0aW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSl7XG5cdFx0dGhpcy5jb21wb25lbnRTZWxlY3RvcigpLmZvckVhY2goY29tcG9uZW50SW5zdGFuY2U9Pntcblx0XHRcdGNvbXBvbmVudEluc3RhbmNlLmlubmVySFRNTCA9ICB0ZW1wbGF0ZTtcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAnJztcblxuXHR9XG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW107XG5cdFx0XG5cdH1cblx0Y29tcG9uZW50U2VsZWN0b3IoKXtcblx0XHRyZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNvbXBvbmVudD1cIiR7dGhpcy5jb21wb25lbnR9XCJdYCldO1xuXHR9XG5cblx0LyoqXG5cdCAqIGxvYWRpbmcgbGlzdGVkIGNoaWxkIHZpZXdzXG5cdCAqL1xuXHRsb2FkQ2hpbGRWaWV3cygpe1xuXHRcdGlmKCFBcnJheS5pc0FycmF5KHRoaXMuY2hpbGRWaWV3cygpICkpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hpbGRWaWV3cygpLmZvckVhY2godmlldz0+e1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9IHZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHRuZXcgdmlldyhgJHtjbGFzc05hbWV9YCk7XG5cdFx0fSlcblx0fVxufVxuIiwiZXhwb3J0ICBjb25zdCBzdGF0ZSAgPSAge1xuXHRkaWRTY3JvbGwgOiB7YWJvdXQgOiBmYWxzZSwgc2Vjb25kUGFnZSA6IGZhbHNlICwgdGhpcmRQYWdlIDogZmFsc2V9LFxuXHRwcm9qZWN0czogW3tcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiVEFTSyBPUkdBTklaRVJcIixcblx0XHRkZXNjcmlwdGlvbiA6XCJBIFRBU0sgT1JHQU5JWkVSIFdFQiBBUFBMSUNBVElPTiBXSVRIIEVNQkVSIEpTIEZST05URU5EIEFORCBESkFOR08gUkVTVCBGUkFNRVdPUkssSU5URUdSQVRJTkcgTVlTUUwgQVMgREFUQUJBU0UgU1VQUE9SVC5cIixcblx0XHRza2lsbHM6IFwiREpBTkdPIFJFU1QsIEVNQkVSIEpTLCBNWVNRTCwgSEVST0tVLCBCT09UU1RSQVBcIixcblx0XHRsaW5rIDogXCJodHRwczovL2Nkbi5jb2xvcmxpYi5jb20vd3Avd3AtY29udGVudC91cGxvYWRzL3NpdGVzLzIvaG93LXRvLXNldHVwLXdlYnNpdGUuanBnXCIsIFx0XG5cdFx0c2hvdyA6IHRydWUsXG5cdFx0cG9zaXRpb246IDAsXG5cdFx0b3BhY2l0eTogMSxcblx0XHRkaWRTY3JvbGw6IGZhbHNlXG5cdH0sXG5cdHtcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiT0ZGTElORSBGSVJTVCBSRURESVQgVklFV0VSXCIsXG5cdFx0ZGVzY3JpcHRpb24gOlwiVEhJUyBSRUFDVCBBUFAgVVRJTElaRVMgU0VSVklDRSBXT1JLRVIgQU5EIENBQ0hJTkcgSEVBVklMWSBUTyBHSVZFIE9GRkxJTkUgRklSU1QgRVhQRVJJRU5DRSBGT1IgQSBTVUJSRURESVQoUkVERElUIFNVQiBGT1JVTSkuQ1VSUkVOVExZLCBJIEFNIFdPUktJTkcgT04gTUFLSU5HIElUIE1PUkUgUkVBREVSIEZSSUVORExZIEFORCBXUklURVIgRlJJRU5ETFkuXCIsXG5cdFx0c2tpbGxzOiBcIlJFQUNUICwgU0VSVklDRSBXT1JLRVIgLCBPQVVUSDIgLiBIRVJPS1UsIEJPT1RTVFJBUFwiLFxuXHRcdGxpbmsgOiBcImh0dHBzOi8vY2RuLmJsZXNzdGhpc3N0dWZmLmNvbS9pbWFnZW5zL3N0dWZmL2NsZWFyLWFwcC1mb3ItaXBob25lLmpwZ1wiLFxuXHRcdHNob3cgOiBmYWxzZSxcblx0XHRwb3NpdGlvbiA6IDI4Mixcblx0XHRvcGFjaXR5OiAwLjIsXG5cdFx0ZGlkU2Nyb2xsOiBmYWxzZVxuXG5cdH0sXG5cdHtcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiQ0hBTkdFIE1ZIFZJRVcgUkVBREVSXCIsXG5cdFx0ZGVzY3JpcHRpb24gOlwiQSBSRURESVQgQ0xJRU5UIE1BREUgVVNJTkcgUkVBQ1QgTkFUSVZFIFdISUNIIEFMTE9XUyBVU0VSIEFERCBQT1NUIEFORCBQRVJGT1JNIEFDVElPTiBPTiBUSEUgQVBQKEFVVEhFTlRJQ0FURUQgVVNJTkcgT0FVVEgyKVwiLFxuXHRcdHNraWxsczogXCJSRUFDVCBOQVRJVkUgLCBPQVVUSDIgLCBIRVJPS1VcIixcblx0XHRsaW5rIDogXCJodHRwczovL3BoYW5kcm9pZC5zMy5hbWF6b25hd3MuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA0L0Jvb3N0LWZvci1yZWRkaXQtYW5kcm9pZC5qcGdcIixcblx0XHRzaG93IDogZmFsc2UsXG5cdFx0cG9zaXRpb24gOiA2MjYsXG5cdFx0b3BhY2l0eTogMC4wNSxcblx0XHRkaWRTY3JvbGw6IGZhbHNlXG5cdH1dLFxuXHRwb3NpdGlvbjp7XG5cdFx0Zmlyc3RQYWdlOiBudWxsLFxuXHRcdHNlY29uZFBhZ2U6IG51bGwsXG5cdFx0dGhpcmRQYWdlOiBudWxsXG5cdH0sXG5cblx0c2Nyb2xsOntcblx0XHRmaXJzdFBhZ2U6IG51bGwsXG5cdFx0c2Vjb25kUGFnZTogbnVsbCxcblx0XHR0aGlyZFBhZ2U6IG51bGxcblx0fSxcblx0bm90aWZ5UHJvcGVydHlDaGFuZ2UoKXt9XG59XG4iLCJleHBvcnQgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gKCk9Pntcblx0cmV0dXJuIE1hdGgubWF4KCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIFxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNjcm9sbCA9IChsYXN0X3Bvc3Rpb24saW5pdGlhbF9wb3NpdGlvbj0wKT0+e1xuXHRjb25zdCByYXRlID0gMTU7XG5cdGxldCBwb3NpdGlvbiA9IGluaXRpYWxfcG9zaXRpb24gO1xuXHRjb25zdCByZXBlYXRPZnRlbiA9ICgpPT57XG5cdFx0cG9zaXRpb24gPSBwb3NpdGlvbityYXRlO1xuXHRcdHdpbmRvdy5zY3JvbGwoMCxwb3NpdGlvbik7XG5cdFx0Y29uc3QgZ2xvYmFsSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVwZWF0T2Z0ZW4pO1xuXHRcdGlmKHBvc2l0aW9uID49IGxhc3RfcG9zdGlvbil7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShnbG9iYWxJRCk7XG5cdFx0fVxuXHR9XG5cblx0cmVwZWF0T2Z0ZW4oKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IChlbGVtZW50LGluaXRpYWw9MCk9Pntcblx0Y29uc3QgcmF0ZSA9IDAuMDU7XG5cdC8vZmluYWwgb3BhY2l0eSBjYW4ndCBiZSBiaWdnZXIgdGhhbiAxXG5cdGNvbnN0IGZpbmFsT3BhY2l0eSA9IDE7XG5cblx0bGV0IG9wYWNpdHkgPSBpbml0aWFsO1xuXG5cdGNvbnN0IF90YXNrID0gKCk9Pntcblx0XHRlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuXHRcdG9wYWNpdHkgPSBvcGFjaXR5ICsgcmF0ZTsgXG5cdFx0Y29uc3QgZ2xvYmFsSUQgPSAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF90YXNrKTtcblx0XHRpZihvcGFjaXR5ID49IGZpbmFsT3BhY2l0eSl7XG5cdFx0XHRjYW5jZWxBbmltYXRpb25GcmFtZShnbG9iYWxJRClcblx0XHR9XG5cdH1cblxuXHRfdGFzaygpO1xuXG59XG5cbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAoZWwpPT4ge1xuICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICByZXR1cm4geyB0b3A6IHJlY3QudG9wICsgc2Nyb2xsVG9wLCBsZWZ0OiByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IH1cbn1cblxuIiwiaW1wb3J0IEluZGV4IGZyb20gJy4vbGliL2luZGV4JztcbmltcG9ydCB7c3RhdGV9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXZlQW5pbWF0aW9uIGV4dGVuZHMgSW5kZXgge1xuXHRyZW5kZXIoKXtcblx0XHRcblx0XHRyZXR1cm4gYFxuXHRcdFx0PHN2ZyBpZD1cInByb2plY3RCYWNrZ3JvdW5kXCIgY2xhc3M9XCJ3YXZ5LWltYWdlXCIgdmlld0JveD1cIjAgMCA1MDAgNTAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0ICA8ZGVmcz5cblx0XHRcdCAgICA8cGF0dGVybiBpZD1cInBhdHRlcm4tMFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjVcIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuXHRcdFx0ICAgICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCIxMDBcIiBzdHlsZT1cImZpbGw6IGJsYWNrO1wiLz5cblx0XHRcdCAgICA8L3BhdHRlcm4+XG5cdFx0XHQgIDwvZGVmcz5cblx0XHRcdCAgPGc+XG5cdFx0XHQgICAgPHBhdGggc3R5bGU9XCJmaWxsOiByZ2IoMjE2LCAyMTYsIDIxNik7XCIvPlxuXHRcdFx0ICAgIDxwYXRoIHN0eWxlPVwiZmlsbDogcmdiKDIxNiwgMjE2LCAyMTYpO1wiLz5cblx0XHRcdCAgICA8cGF0aCBzdHlsZT1cImZpbGw6IHJnYigxOTQsIDI0OSwgMjgpO1wiIGQ9XCJNIDY4Ljg3NiA0NjAuNjQ3IEMgNzkuNTA3IDQ0Ny42ODIgMTMwLjk4NyA0MzIuNjQ4IDEzOC44ODkgNDc3LjI5MSBDIDE2NC4wNjMgNTc2LjE3MSAxNzUuMzIxIDQ3OC44ODEgMTkwLjUzNSA0NTAuMzUzIEMgMjA3LjgxNCA0MDguMjcgMjI2LjE4NiA1OTkuOTI2IDI3Ni40OSA0NTMuOTQyIEMgMjk2LjQxNSAzNTkuMTggMzQyLjE2MSA0NTAuNjEgMzQzLjIwMSA0NDkuMTM2IEMgNDU2LjY1MiA1NzMuNzM3IDQxMy41NDMgNDU0Ljk0MSA0NjAuNDYgNDI0LjIyNCBDIDQ2OS41NDMgNDEwLjA3MSA0NjguNzE0IDQzMS4wNzMgNDcxLjM4NyA0MzAuOTk4IEMgNDcyLjUxMSA0MzAuMTkgNDg4Ljk2OCA0NjMuOTg1IDQ5MC42MjIgNDY4LjI0MSBDIDUxMy44MjMgNDkyLjc5IDUwMi4zNjIgMTIxLjA3MiA0OTkuNyAxMTQuMjk2IEwgNDk4LjEyMSAxMDcuNjc1IEwgODYuOTI0IDExMC44MjcgTCAwLjMwMiAxMDkuNzcxIEwgMS41NjQgMTExLjM5NSBDIDQuNzc2IDg3LjM3NSAtMi44NjEgNDk1LjQxNiAzMi42NTYgNDkyLjczN1wiPlxuXHRcdFx0XHQ8YW5pbWF0ZVxuXHRcdFx0XHRcdCBhdHRyaWJ1dGVUeXBlPVwiWE1MXCIgXG5cdFx0XHRcdFx0YXR0cmlidXRlTmFtZT1cImRcIiBcblx0XHRcdFx0XHRmcm9tPVwiTSA1Ny4xNzUgMTYxLjkzNCBDIDgxLjQzMyAxMjQuNDk2IDEwMS43MDEgMTE5LjkwMiAxMDkuODE1IDE2Mi4zMTQgQyAxMzMuMTQ4IDI1OS42MDMgMTczLjY2OCAxNzAuMjExIDE4MC4wNTIgMTUyLjIxNSBDIDIxMy40MjcgMTA2LjQzIDIzMS4xMTEgMzM0LjcwNiAyNzguODg4IDE5Ny40NzcgQyAyOTkuMzQyIDEwNy41NDIgMzM5LjcxNCAyMDAuODgxIDM0MC40NjkgMTk2LjAwNyBDIDM3NC4wMTUgMjg2LjAxOCAzODUuNDk1IDE2OC40MDQgNDA0LjgzNiAxNDkuOTY0IEMgNDE5LjAzOCAxMzYuNDIzIDQ0NS40MTIgMTU4Ljk2MSA0NDYuOTc0IDE2MC4yODggQyA0NDMuOTY5IDE1OS42MyA0NjIuOTk1IDE3My4wMSA0NjYuMDQ1IDE3Ny4zMDcgQyA0ODAuNjc4IDE4NC42NDMgNDk0LjMzNCAxMTUuNTY2IDQ5OC4zNTggMTE1LjIzMyBMIDUwMi42ODIgMTA5LjA3NyBMIDgzLjkzNyAxMTIuMDY2IEwgLTQuMjc0IDExMS4wNjkgTCAtMC4zMDMgMTExLjE3OSBDIDE0LjA2OSAxMTUuNzc1IDMyLjExIDE2Ni43MTIgNTcuNTk4IDE2My4xNDJcIlxuXHRcdFx0XHRcdCB0bz1cIk0gNjguODc2IDQ2MC42NDcgQyA3OS41MDcgNDQ3LjY4MiAxMzAuOTg3IDQzMi42NDggMTM4Ljg4OSA0NzcuMjkxIEMgMTY0LjA2MyA1NzYuMTcxIDE3NS4zMjEgNDc4Ljg4MSAxOTAuNTM1IDQ1MC4zNTMgQyAyMDcuODE0IDQwOC4yNyAyMjYuMTg2IDU5OS45MjYgMjc2LjQ5IDQ1My45NDIgQyAyOTYuNDE1IDM1OS4xOCAzNDIuMTYxIDQ1MC42MSAzNDMuMjAxIDQ0OS4xMzYgQyA0NTYuNjUyIDU3My43MzcgNDEzLjU0MyA0NTQuOTQxIDQ2MC40NiA0MjQuMjI0IEMgNDY5LjU0MyA0MTAuMDcxIDQ2OC43MTQgNDMxLjA3MyA0NzEuMzg3IDQzMC45OTggQyA0NzIuNTExIDQzMC4xOSA0ODguOTY4IDQ2My45ODUgNDkwLjYyMiA0NjguMjQxIEMgNTEzLjgyMyA0OTIuNzkgNTAyLjM2MiAxMjEuMDcyIDQ5OS43IDExNC4yOTYgTCA0OTguMTIxIDEwNy42NzUgTCA4Ni45MjQgMTEwLjgyNyBMIDAuMzAyIDEwOS43NzEgTCAxLjU2NCAxMTEuMzk1IEMgNC43NzYgODcuMzc1IC0yLjg2MSA0OTUuNDE2IDMyLjY1NiA0OTIuNzM3XCJcblx0XHRcdFx0XHRkdXI9XCIxMHNcIi8+XG5cdFx0XHRcdDwvcGF0aD5cblxuXG5cdFx0XHQgICAgPHBhdGggc3R5bGU9XCJmaWxsOiByZ2IoMTM1LCAyMDcsIDIzNSk7XCIgZD1cIk0gNzUuMDk4IDQzNC40MjkgQyA5OS4zNTYgMzk2Ljk5MSAxNTAuNjUgNDEzLjg4NiAxNTguNzY0IDQ1Ni4yOTggQyAxODIuMDk3IDU1My41ODcgMjM1LjM3OSA0NzguNjAyIDI0MS43NjMgNDYwLjYwNiBDIDI3NS4xMzggNDE0LjgyMSAzMDQuMzI4IDU5NS4wMDUgMzUyLjEwNSA0NTcuNzc2IEMgMzcyLjU1OSAzNjcuODQxIDQwOS44NDYgNTA4LjcxOCA0MTAuNjAxIDUwMy44NDQgQyA0NDQuMTQ3IDU5My44NTUgNDE5Ljk1NiA0MDYuNzM5IDQzOS4yOTcgMzg4LjI5OSBDIDQ1My40OTkgMzc0Ljc1OCA0NjIuMDkxIDM3Mi45NDYgNDYzLjY1MyAzNzQuMjczIEMgNDYwLjY0OCAzNzMuNjE1IDQ4MC44ODYgNDE0Ljk1NSA0ODMuOTM2IDQxOS4yNTIgQyA0OTguNTY5IDQyNi41ODggNTAxLjE0MiAxMTQuMjQxIDQ5OC4zNTggMTE1LjIzMyBMIDUwMi42ODIgMTA5LjA3NyBMIDgzLjkzNyAxMTIuMDY2IEwgLTQuMjc0IDExMS4wNjkgTCAtMC4zMDMgMTExLjE3OSBDIDMuNzg5IDExOC43NTggNi42MDkgNDc3LjQ0OCAzNC4wNDcgNDczLjMxMlwiPlxuXHRcdFx0XHQ8YW5pbWF0ZVxuXHRcdFx0XHRcdCBhdHRyaWJ1dGVUeXBlPVwiWE1MXCIgXG5cdFx0XHRcdFx0YXR0cmlidXRlTmFtZT1cImRcIiBcblx0XHRcdFx0XHRmcm9tPVwiTSA1Ny4xNzUgMTYxLjkzNCBDIDgxLjQzMyAxMjQuNDk2IDEwMS43MDEgMTE5LjkwMiAxMDkuODE1IDE2Mi4zMTQgQyAxMzMuMTQ4IDI1OS42MDMgMTczLjY2OCAxNzAuMjExIDE4MC4wNTIgMTUyLjIxNSBDIDIxMy40MjcgMTA2LjQzIDIzMS4xMTEgMzM0LjcwNiAyNzguODg4IDE5Ny40NzcgQyAyOTkuMzQyIDEwNy41NDIgMzM5LjcxNCAyMDAuODgxIDM0MC40NjkgMTk2LjAwNyBDIDM3NC4wMTUgMjg2LjAxOCAzODUuNDk1IDE2OC40MDQgNDA0LjgzNiAxNDkuOTY0IEMgNDE5LjAzOCAxMzYuNDIzIDQ0NS40MTIgMTU4Ljk2MSA0NDYuOTc0IDE2MC4yODggQyA0NDMuOTY5IDE1OS42MyA0NjIuOTk1IDE3My4wMSA0NjYuMDQ1IDE3Ny4zMDcgQyA0ODAuNjc4IDE4NC42NDMgNDk0LjMzNCAxMTUuNTY2IDQ5OC4zNTggMTE1LjIzMyBMIDUwMi42ODIgMTA5LjA3NyBMIDgzLjkzNyAxMTIuMDY2IEwgLTQuMjc0IDExMS4wNjkgTCAtMC4zMDMgMTExLjE3OSBDIDE0LjA2OSAxMTUuNzc1IDMyLjExIDE2Ni43MTIgNTcuNTk4IDE2My4xNDJcIlxuXHRcdFx0XHRcdCB0bz1cIk0gNzUuMDk4IDQzNC40MjkgQyA5OS4zNTYgMzk2Ljk5MSAxNTAuNjUgNDEzLjg4NiAxNTguNzY0IDQ1Ni4yOTggQyAxODIuMDk3IDU1My41ODcgMjM1LjM3OSA0NzguNjAyIDI0MS43NjMgNDYwLjYwNiBDIDI3NS4xMzggNDE0LjgyMSAzMDQuMzI4IDU5NS4wMDUgMzUyLjEwNSA0NTcuNzc2IEMgMzcyLjU1OSAzNjcuODQxIDQwOS44NDYgNTA4LjcxOCA0MTAuNjAxIDUwMy44NDQgQyA0NDQuMTQ3IDU5My44NTUgNDE5Ljk1NiA0MDYuNzM5IDQzOS4yOTcgMzg4LjI5OSBDIDQ1My40OTkgMzc0Ljc1OCA0NjIuMDkxIDM3Mi45NDYgNDYzLjY1MyAzNzQuMjczIEMgNDYwLjY0OCAzNzMuNjE1IDQ4MC44ODYgNDE0Ljk1NSA0ODMuOTM2IDQxOS4yNTIgQyA0OTguNTY5IDQyNi41ODggNTAxLjE0MiAxMTQuMjQxIDQ5OC4zNTggMTE1LjIzMyBMIDUwMi42ODIgMTA5LjA3NyBMIDgzLjkzNyAxMTIuMDY2IEwgLTQuMjc0IDExMS4wNjkgTCAtMC4zMDMgMTExLjE3OSBDIDMuNzg5IDExOC43NTggNi42MDkgNDc3LjQ0OCAzNC4wNDcgNDczLjMxMlwiXG5cdFx0XHRcdFx0ZHVyPVwiMTBzXCIvPlxuXG5cdFx0XHQgICAgPC9wYXRoPlxuXHRcdFx0ICAgIDxyZWN0IHg9XCIxLjI1XCIgeT1cIjAuNTQ1XCIgd2lkdGg9XCI1MDAuMjEzXCIgaGVpZ2h0PVwiMTExLjgxMVwiIHN0eWxlPVwiZmlsbDogcmdiKDEzNSwgMjA3LCAyMzUpO1wiIHJ4PVwiMi44NDdcIiByeT1cIjIuODQ3XCIvPlxuXHRcdFx0ICA8L2c+XG5cdFx0XHQ8L3N2Zz5cblx0XHRgO1xuXG5cdH1cbn07XG4iXX0=
