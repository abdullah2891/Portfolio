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

      this._draw_wavy_path(ctx);
    }
  }, {
    key: "_draw_wavy_path",
    value: function _draw_wavy_path(ctx) {
      var region = new Path2D();
      var offsety = 10;
      region.lineTo(0, 0);
      region.lineTo(0, 30); // Define the points as {x, y}

      region.lineTo(300, 30);
      region.lineTo(300, 0);
      region.closePath();
      ctx.fillStyle = 'green';
      ctx.fill(region, 'evenodd');

      for (var offsetx = 0; offsetx <= 300; offsetx = offsetx + 40) {
        var start = {
          x: 0 + offsetx,
          y: 20 + offsety
        };
        var cp1 = {
          x: 10 + offsetx,
          y: 0 + offsety
        };
        var cp2 = {
          x: 30 + offsetx,
          y: 80 + offsety
        };
        var end = {
          x: 40 + offsetx,
          y: 20 + offsety
        };
        region.moveTo(start.x, start.y);
        region.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
      }

      ctx.fillStyle = '#4e2d2dfc';
      ctx.fill(region, 'evenodd');
    }
  }, {
    key: "render",
    value: function render() {
      return "\n\t\t\t<canvas id=\"wave-animation\"></canvas>\n\t\t";
    }
  }]);

  return WaveAnimation;
}(_index.default);

exports.default = WaveAnimation;
;

},{"./lib/index":10}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ29udGFjdC5qcyIsInNyYy9NYWluUGFnZS5qcyIsInNyYy9OYXZpZ2F0aW9uLmpzIiwic3JjL1Byb2plY3REZXNjcmlwdGlvbi5qcyIsInNyYy9TaWRlRm9vdGVyLmpzIiwic3JjL1NpZGVGb290ZXIyLmpzIiwic3JjL2FwcC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9saWIvSW5kZXguanMiLCJzcmMvbGliL2luZGV4LmpzIiwic3JjL3N0YXRlLmpzIiwic3JjL3V0aWwuanMiLCJzcmMvd2F2ZS1hbmltYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFWjtBQUNQO0FBaUNBOzs7O0VBcENtQyxlOzs7Ozs7Ozs7Ozs7QUNGckM7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsUTs7Ozs7Ozs7Ozs7OztpQ0FDUjtBQUNYLGFBQU8sQ0FBQyxtQkFBRCxDQUFQO0FBQ0E7Ozs2QkFDTztBQUNQO0FBY0E7Ozs7RUFuQm9DLGM7Ozs7Ozs7Ozs7OztBQ0h0Qzs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFU7Ozs7Ozs7Ozs7Ozs7d0NBQ0Q7QUFDbEIsV0FBSyxtQkFBTCxHQUEyQixRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUEzQjtBQUNBLFdBQUssa0JBQUwsR0FBMEIsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBMUI7O0FBQ0EsV0FBSyxpQkFBTDtBQUNBOzs7d0NBR2tCO0FBQUE7O0FBQ2xCLHlCQUFJLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxtQkFBaEMsQ0FBSixFQUEwRCxPQUExRCxDQUFrRSxVQUFBLE1BQU0sRUFBRTtBQUN0RSxRQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixF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QUFDLElBQUosQ0FBUyxNQUFULEVBQWlCLFNBQWpCOztBQUNBLFdBQUksSUFBSSxPQUFPLEdBQUcsQ0FBbEIsRUFBcUIsT0FBTyxJQUFJLEdBQWhDLEVBQXNDLE9BQU8sR0FBRyxPQUFPLEdBQUcsRUFBMUQsRUFBNkQ7QUFDNUQsWUFBSSxLQUFLLEdBQUc7QUFBRSxVQUFBLENBQUMsRUFBRSxJQUFFLE9BQVA7QUFBbUIsVUFBQSxDQUFDLEVBQUUsS0FBSztBQUEzQixTQUFaO0FBQ0EsWUFBSSxHQUFHLEdBQUs7QUFBRSxVQUFBLENBQUMsRUFBRSxLQUFHLE9BQVI7QUFBbUIsVUFBQSxDQUFDLEVBQUUsSUFBSztBQUEzQixTQUFaO0FBQ0EsWUFBSSxHQUFHLEdBQUs7QUFBRSxVQUFBLENBQUMsRUFBRSxLQUFHLE9BQVI7QUFBbUIsVUFBQSxDQUFDLEVBQUUsS0FBTTtBQUE1QixTQUFaO0FBQ0EsWUFBSSxHQUFHLEdBQUs7QUFBRSxVQUFBLENBQUMsRUFBRSxLQUFHLE9BQVI7QUFBbUIsVUFBQSxDQUFDLEVBQUUsS0FBSztBQUEzQixTQUFaO0FBRUEsUUFBQSxNQUFNLENBQUMsTUFBUCxDQUFjLEtBQUssQ0FBQyxDQUFwQixFQUF1QixLQUFLLENBQUMsQ0FBN0I7QUFDQSxRQUFBLE1BQU0sQ0FBQyxhQUFQLENBQXFCLEdBQUcsQ0FBQyxDQUF6QixFQUE0QixHQUFHLENBQUMsQ0FBaEMsRUFBbUMsR0FBRyxDQUFDLENBQXZDLEVBQTBDLEdBQUcsQ0FBQyxDQUE5QyxFQUFpRCxHQUFHLENBQUMsQ0FBckQsRUFBd0QsR0FBRyxDQUFDLENBQTVEO0FBQ0E7O0FBQ0QsTUFBQSxHQUFHLENBQUMsU0FBSixHQUFnQixXQUFoQjtBQUNBLE1BQUEsR0FBRyxDQUFDLElBQUosQ0FBUyxNQUFULEVBQWlCLFNBQWpCO0FBRUE7Ozs2QkFDTztBQUVQO0FBSUE7Ozs7RUFuRHlDLGM7OztBQW9EMUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvSW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgSW5kZXh7XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgbWFyZ2luLXRvcC00ICBtYXJnaW4tbGVmdC00IHBhZGRpbmctcmlnaHQtNCBwYWRkaW5nLWxlZnQtNFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuXHRcdFx0XHRcdFx0PHA+SSBhbSBGdWxsc3RhY2sgZGV2ZWxvcGVyIHdobyBjYW4gaGVscCB5b3Ugd2l0aCB5b3VyIGRpZ2l0YWwgbmVlZHMuSSBjYW4gaGVscCB5b3Ugd2l0aCB0aGUgY3V0dGluZyBlZGdlIHRlY2hub2xvZ3kuIFlvdSBjYW4gY29udGFjdCBtZSBoZXJlIFxuXHRcdFx0XHRcdFx0b3IgZW1haWwgYXQgYWJkdWxsYWgyODkxQGdtYWlsLmNvbTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTUgbG9naW4tZm9ybVwiPlxuXHRcdFx0XHRcdFx0PGZvcm0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsPk5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LWxnIFwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+RW1haWw8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LWxnIFwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHQ8Zm9ybT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+Q29tbWVudDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGcgXCI+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGBcblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBJbmRleHtcblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbTmF2aWdhdGlvbl07XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgaW50cm9kdWN0aW9uIGludHJvZHVjdGlvbi1zbVwiPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiIGNvbC1sZy0xXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwibmFtZS1wYWQgY29sLWxnLTYgICBjb2wtc20tMTBcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ0aXRsZVwiPjxzdHJvbmc+SGksPC9zdHJvbmc+PC9wPlxuXHRcdFx0XHRcdDxwPjxzdHJvbmc+V2VsY29tZSB0byB0aGlzIGNvcm5lciBvZiB0aGUgaW50ZXJuZXQ8L3N0cm9uZz48L3A+XG5cdFx0XHRcdFx0PHA+PHN0cm9uZz5NeSBOYW1lIGlzIEFiZHVsbGFoIFJhaG1hbjwvc3Ryb25nPjwvcD5cblx0XHRcdFx0XHQ8cD48c3Ryb25nPkhvdyBjYW4gSSBoZWxwIHlvdSB0b2RheTwvc3Ryb25nPjwvcD5cblx0XHRcdFx0XHQ8ZGl2IGRhdGEtY29tcG9uZW50PVwiTmF2aWdhdGlvblwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0YDtcblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtmYWRlSW4sc2Nyb2xsLHNjcm9sbEhlaWdodH0gZnJvbSAgJy4vdXRpbCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIEluZGV4e1xuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdHRoaXMuc2Vjb25kUGFnZUVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmRQYWdlJyk7XG5cdFx0dGhpcy50aGlyZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhpcmRQYWdlJyk7XG5cdFx0dGhpcy5fYWRkRXZlbnRMaXN0ZW5lcigpO1xuXHR9XG5cblxuXHRfYWRkRXZlbnRMaXN0ZW5lcigpe1xuXHRcdFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZpZ2F0aW9uLWJ1dHRvbicpXS5mb3JFYWNoKGJ1dHRvbj0+e1xuXHRcdCAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdFx0Y29uc3QgcGFnZU5hbWUgPSBldmVudC5zcmNFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uYXZpZ2F0aW9uJyl8fGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hdmlnYXRpb24nKTtcblx0XHRcdCAgICBcdGNvbnN0IHBvc2l0aW9uID0gZXZlbnQuc3JjRWxlbWVudC5vZmZzZXRUb3AgfHwgZXZlbnQuY3VycmVudFRhcmdldC5vZmZzZXRUb3A7XG5cdFx0XHRcdFxuXHRcdFx0XHRzdGF0ZS5kaWRTY3JvbGxbcGFnZU5hbWVdID0gdHJ1ZTtcblxuXHRcdFx0ICAgIFx0c3dpdGNoKHBhZ2VOYW1lKXtcblx0XHRcdFx0XHRjYXNlICdzZWNvbmRQYWdlJzpcblx0XHRcdFx0XHRcdHNjcm9sbChzdGF0ZS5wb3NpdGlvbi5zZWNvbmRQYWdlIC0yMCk7XG5cdFx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0XHRcdCBicmVhaztcblx0XHRcdFx0XHRjYXNlICd0aGlyZFBhZ2UnOlxuXHRcdFx0XHRcdFx0ZmFkZUluKHRoaXMuc2Vjb25kUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdFx0XHRzY3JvbGwoc3RhdGUucG9zaXRpb24udGhpcmRQYWdlIC0yMCk7XG5cdFx0XHRcdFx0XHRmYWRlSW4odGhpcy50aGlyZFBhZ2VFbGVtZW50SWQpO1xuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RGb290ZXInKS5jbGFzc05hbWUgKz0nIGNvbnRhY3QtZm9vdGVyICc7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0ICAgIH0uYmluZCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblx0cmVuZGVyKCl7XG5cblx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGRhdGEtbmF2aWdhdGlvbj1cImFib3V0XCIgIHRpdGxlPVwiR2l0aHViXCIgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tNCBjdXJzb3ItcG9pbnRlciAgbmF2aWdhdGlvbi1idXR0b25cIj5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FiZHVsbGFoMjg5MVwiPiA8aW1nIGNsYXNzPVwiaWNvblwiIHNyYz1cImNzcy9pY29ucy9hcmNoaXRlY3Quc3ZnXCIgLz48L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGRhdGEtbmF2aWdhdGlvbj1cInNlY29uZFBhZ2VcIiAgdGl0bGU9XCJQcm9qZWN0c1wiIGNsYXNzPVwiY29sLWxnLTQgY29sLXNtLTQgY3Vyc29yLXBvaW50ZXIgbmF2aWdhdGlvbi1idXR0b25cIj5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzPVwiaWNvblwiIHNyYz1cImNzcy9pY29ucy9wcm9qZWN0b3Itc2NyZWVuLnN2Z1wiLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGRhdGEtbmF2aWdhdGlvbj1cInRoaXJkUGFnZVwiICB0aXRsZT1cIkNvbnRhY3RzXCIgY2xhc3M9XCJjb2wtbGctNCBjb2wtc20tNCBjdXJzb3ItcG9pbnRlciBuYXZpZ2F0aW9uLWJ1dHRvblwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPVwiY3NzL2ljb25zL2xpZ2h0YnVsYi5zdmdcIi8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblxuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7ZmFkZUluLG9mZnNldH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBXYXZlQW5pbWF0aW9uIGZyb20gJy4vd2F2ZS1hbmltYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0RGVzY3JpcHRpb24gZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLl9oYW5kbGVTY3JvbGxpbmcoKTtcblx0XHR0aGlzLl9zZXRfcG9zaXRpb24oKTtcblx0XG5cdH1cblxuXHRjaGlsZFZpZXdzKCl7XG5cdFx0cmV0dXJuIFtXYXZlQW5pbWF0aW9uXTtcblx0fVxuXHRfaGFuZGxlU2Nyb2xsaW5nKCl7XG5cdFx0Y29uc29sZS5sb2coc3RhdGUucHJvamVjdHMpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0Y29uc3Qgc2Nyb2xsX3Bvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgKyA1MDA7XG5cdFx0XHRjb25zdCByYW5nZSA9IDUwMDtcblxuXHRcdFx0Y29uc3Qgc2Nyb2xsZWRfcHJvamVjdCA9IHN0YXRlLnByb2plY3RzLmZpbmQocHJvamVjdD0+e1xuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHByb2plY3QucG9zaXRpb24udG9wO1xuXG5cdFx0XHRcdHJldHVybiBzY3JvbGxfcG9zaXRpb24gPj0gKHBvc2l0aW9uIC1yYW5nZSkgJiYgc2Nyb2xsX3Bvc2l0aW9uIDw9IChwb3NpdGlvbiArIHJhbmdlKTtcblx0XHRcdH0pO1xuXHRcdFx0XG5cdFx0XHRpZighc2Nyb2xsZWRfcHJvamVjdCl7cmV0dXJuIH07XG5cblx0XHRcdGNvbnN0IHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2Nyb2xsZWRfcHJvamVjdC5pZCk7XG5cblx0XHRcdGlmKCFzZWxlY3RlZF9wcm9qZWN0X2VsZW1lbnQgfHwgc2Nyb2xsZWRfcHJvamVjdC5kaWRTY3JvbGwpe3JldHVybiB9O1xuXHRcdFx0XG5cdFx0XHRzY3JvbGxlZF9wcm9qZWN0LmRpZFNjcm9sbCA9IHRydWU7XG5cdFx0XHRzZWxlY3RlZF9wcm9qZWN0X2VsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsZWRfcHJvamVjdC5wb3NpdGlvbjtcblx0XHRcdHNlbGVjdGVkX3Byb2plY3RfZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHRcdGZhZGVJbihzZWxlY3RlZF9wcm9qZWN0X2VsZW1lbnQpO1xuXG5cdFx0fSlcblxuXHR9XG5cblx0X3NldF9wb3NpdGlvbigpe1xuXHRcdHN0YXRlLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xuXHRcdFx0cHJvamVjdC5wb3NpdGlvbiA9IG9mZnNldChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0LmlkKSk7XG5cdFx0fSk7XG5cblxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdGNvbnN0IHByb2plY3RfZGVzY3JpcHRpb24gPSAocHJvamVjdCk9Pntcblx0XHRcdHJldHVybiBgXG5cdFx0XHRcdDxoMz4ke3Byb2plY3QudGl0bGV9PC9oMz5cblx0XHRcdFx0PHA+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0PHA+JHtwcm9qZWN0LnNraWxsc308L3A+XG5cdFx0XHRgO1xuXHRcdH07XG5cblx0XHRjb25zdCBpbWFnZSA9IChwcm9qZWN0KT0+YDxpbWcgc3JjPVwiJHtwcm9qZWN0Lmxpbmt9XCIgYWx0PVwiJHtwcm9qZWN0LnRpdGxlfVwiIC8+YDtcblxuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzIGRhdGEtY29tcG9uZW50PVwiV2F2ZUFuaW1hdGlvblwiPjwvZGl2Plx0XG5cdFx0XHQke1xuXHRcdFx0XHRzdGF0ZS5wcm9qZWN0cy5yZWR1Y2UoKGh0bWwscHJvamVjdCxpbmRleCk9Pntcblx0XHRcdFx0XHRjb25zdCBzaG93Um93ID0gcHJvamVjdC5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCI7XG5cdFx0XHRcdFx0Y29uc3QgaXNFdmVuID0gaW5kZXggJSAyID09PTA7XG5cdFx0XHRcdFx0Y29uc3Qgcm93ID0gYFxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cIiR7cHJvamVjdC5pZH1cIiBjbGFzcz1cInJvdyBwcm9qZWN0LXJvd1wiIHN0eWxlPVwib3BhY2l0eTowXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtJHtpc0V2ZW4gPyAnNCc6ICc4J30gIGltYWdlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdCR7IWlzRXZlbiA/IGltYWdlKHByb2plY3QpIDogcHJvamVjdF9kZXNjcmlwdGlvbihwcm9qZWN0KX1cdFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0ke2lzRXZlbiA/ICc4JzogJzQnfSBpbWFnZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQke2lzRXZlbiA/IGltYWdlKHByb2plY3QpIDogcHJvamVjdF9kZXNjcmlwdGlvbihwcm9qZWN0KX1cdFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdGA7XG5cdFx0XHRcdFx0aHRtbCs9cm93ICsgJ1xcbic7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIGh0bWw7XG5cblx0XHRcdFx0fSwnJylcblxuXHRcdFx0fVxuXG5cdFx0YDtcblxuXHR9XG59XG4iLCJpbXBvcnQgSW5kZXggZnJvbSAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtzdGF0ZX0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVGb290ZXIgZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLl9oYW5kbGVTY3JvbGxpbmcoKTtcblxuXHRcdGNvbnNvbGUubG9nKHN0YXRlKVxuXG5cdH1cblx0XG5cdF91cGRhdGVPcGFjaXR5KHNjcm9sbFBvc2l0aW9uKXtcblxuXHRcdFxuXG5cdFx0Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWluZGV4XScpXS5mb3JFYWNoKGN1cnJlbnREb209Pntcblx0XHRcdGNvbnN0IGluZGV4ID0gY3VycmVudERvbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcblx0XHRcdGNvbnN0IHByb2plY3QgPSBzdGF0ZS5wcm9qZWN0c1tpbmRleF07XG5cblx0XHRcdGNvbnN0IHkgPSAoeCxwb3NpdGlvbik9Pntcblx0XHRcdFx0Y29uc3QgcmFuZ2UgPSBwcm9qZWN0LnVwcGVyX2VuZCAtIHByb2plY3QucG9zaXRpb247XG5cdFx0XHRcdGNvbnN0IG9wYWNpdHkgPSAtTWF0aC5wb3coKHgtcG9zaXRpb24pL3JhbmdlLDIpICsgMTtcblx0XHRcdFx0cmV0dXJuIG9wYWNpdHkgPiAwLjMgPyBvcGFjaXR5OiAwLjI7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHBhcnNlSW50KHByb2plY3QucG9zaXRpb24pO1xuXHRcdFx0Y29uc3QgcG9zaXRpb25IaWdoZXN0T3BhY2l0eSA9ICBwcm9qZWN0LnBvc2l0aW9uO1xuXHRcdFx0Y29uc3QgY3VycmVudE9wYWNpdHkgPSB5KHNjcm9sbFBvc2l0aW9uLHBvc2l0aW9uSGlnaGVzdE9wYWNpdHkpO1xuY29uc29sZS5sb2coY3VycmVudE9wYWNpdHkpXG5cdFx0XHRjdXJyZW50RG9tLnN0eWxlLm9wYWNpdHkgPSBjdXJyZW50T3BhY2l0eTtcblx0XHRcdHByb2plY3Qub2Zmc2V0ID0gY3VycmVudE9wYWNpdHk7XG5cdFx0XHRwcm9qZWN0Lm9wYWNpdHkgPSBjdXJyZW50T3BhY2l0eTtcblx0fSlcblxuXHR9XG5cblxuXHRfaGFuZGxlU2Nyb2xsaW5nKCl7XG5cdFx0Y29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEltYWdlQ29udGFpbmVyJyk7IFxuXHRcdFxuXHRcdGltYWdlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0Y29uc3Qgc2Nyb2xsUG9zaXRpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcDtcblx0XHRcdHN0YXRlLm5vdGlmeVByb3BlcnR5Q2hhbmdlKHNjcm9sbFBvc2l0aW9uKTtcdFxuXHRcdFx0dGhpcy5fdXBkYXRlT3BhY2l0eShzY3JvbGxQb3NpdGlvbik7XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHR9XG5cdFxuXHRfdXBkYXRlRE9NUG9zaXRpb24oKXtcblx0XHRbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC1pbWFnZScpXS5mb3JFYWNoKChpbWFnZSxpbmRleCk9Pntcblx0XHRcdHN0YXRlLnByb2plY3RzW2luZGV4XS5wb3NpdGlvbiA9IGltYWdlLm9mZnNldFRvcDtcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDx1bCBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiIGlkPVwicHJvamVjdEltYWdlQ29udGFpbmVyXCI+XG5cdFx0XHRcdCR7XG5cdFx0XHRcdFx0c3RhdGUucHJvamVjdHMucmVkdWNlKChodG1sLHByb2plY3QsaW5kZXgpPT57XG5cdFx0XHRcdFx0XHRodG1sICs9IGA8bGk+PGltZyBjbGFzcz1cInByb2plY3QtaW1hZ2VcIiBkYXRhLWluZGV4PSR7aW5kZXh9IHN0eWxlPVwib3BhY2l0eToke3Byb2plY3Qub3BhY2l0eX1cIiAgc3JjPVwiJHtwcm9qZWN0Lmxpbmt9XCIgLz48L2xpPmA7XG5cblx0XHRcdFx0XHRcdHJldHVybiBodG1sO1xuXHRcdFx0XHRcdH0sJycpXG5cdFx0XHRcdH1cblx0XHRcdFx0PGxpPjxkaXYgY2xhc3M9XCJlbXB0eS1pbWFnZVwiPjwvZGl2PjwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdGA7XG5cblx0fVxuXG59XG4iLCJpbXBvcnQgSW5kZXggIGZyb20gJy4vbGliL2luZGV4JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlRm9vdGVyMiBleHRlbmRzIEluZGV4e1xuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgPGRpdiBpZD1cImNvbnRhY3RGb290ZXJcIiAgY2xhc3M9XCJzaWRlLWZvb3RlclwiPkNvbnRhY3Q8L2Rpdj5gO1xuXHR9XG5cbn1cbiIsImltcG9ydCBJbmRleCBmcm9tICAnLi9saWIvaW5kZXgnO1xuaW1wb3J0IHtzY3JvbGwsZmFkZUluLHNjcm9sbEhlaWdodCxvZmZzZXR9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge3N0YXRlfSBmcm9tICcuL3N0YXRlJztcblxuaW1wb3J0IE1haW5QYWdlIGZyb20gJy4vTWFpblBhZ2UnO1xuaW1wb3J0IFNpZGVGb290ZXIgZnJvbSAnLi9TaWRlRm9vdGVyJztcbmltcG9ydCBTaWRlRm9vdGVyMiBmcm9tICcuL1NpZGVGb290ZXIyJztcbmltcG9ydCBQcm9qZWN0RGVzY3JpcHRpb24gZnJvbSAnLi9Qcm9qZWN0RGVzY3JpcHRpb24nO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9Db250YWN0JzsgXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBJbmRleHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHR0aGlzLnNlY29uZFBhZ2VFbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kUGFnZScpO1xuXHRcdHRoaXMudGhpcmRQYWdlRWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoaXJkUGFnZScpO1xuXHRcdHRoaXMuX3NldF9lbGVtZW50X2lkKCk7XG5cdFx0dGhpcy5faGFuZGxlU2Nyb2xsaW5nKCk7XG5cdH1cblxuXG5cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbTWFpblBhZ2UsQ29udGFjdCwgUHJvamVjdERlc2NyaXB0aW9uLFNpZGVGb290ZXIyLFNpZGVGb290ZXJdO1xuXHR9XG5cblx0XG5cdF9zZXRfZWxlbWVudF9pZCgpe1xuXHRcdHN0YXRlLnByb2plY3RzLmZvckVhY2gocHJvamVjdD0+e1xuXHRcdFx0cHJvamVjdC5pZCA9ICdwcm9qZWN0JyArIE1hdGgucmFuZG9tKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRfc2V0X2VsZW1lbnRfcG9zaXRpb24oKXtcblx0XHRPYmplY3Qua2V5cyhzdGF0ZS5wb3NpdGlvbikuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuXHRcdFx0c3RhdGUucG9zaXRpb25ba2V5XSA9IG9mZnNldChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXkpKS50b3AgfHwgMDtcblx0XHR9KTtcblx0fVxuXG5cdF9oYW5kbGVTY3JvbGxpbmcoKXtcblx0XHQvL3NlY3Rpb24gcG9zaXRpb25cblx0XHRcblx0XHQvL3NhdmluZyB0aGlzIHBvc2l0aW9ubiBmb3IgY2hhbmdlXG5cdFx0bGV0IHByZXZpb3VzX3Bvc2l0aW9uID0gMDtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXMuX3NldF9lbGVtZW50X3Bvc2l0aW9uKCk7XG5cdFx0XHRcdGNvbnN0IHNlY29uZF9wYWdlX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb24uc2Vjb25kUGFnZTtcblx0XHRcdFx0Y29uc3QgdGhpcmRfcGFnZV9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uLnRoaXJkUGFnZTtcblx0XHRcdFx0XG5cblx0XHRcdFx0Ly9nZXQgdGhlIHNjcm9sbGluZyBwb3NpdGlvbiBcblx0XHRcdFx0bGV0IHNjcm9sbF9wb3NpdGlvbiA9ICB3aW5kb3cuc2Nyb2xsWTtcblx0XHRcdFx0bGV0IGNoYW5nZSA9IHNjcm9sbF9wb3NpdGlvbiAtIHByZXZpb3VzX3Bvc2l0aW9uO1x0XG4gXHRcdFx0XHRcblx0XHRcdFx0cHJldmlvdXNfcG9zaXRpb24gPSBzY3JvbGxfcG9zaXRpb247XG5cblx0XHRcdFx0XHRcblx0XHRcdFx0aWYoIXN0YXRlLmRpZFNjcm9sbC5zZWNvbmRQYWdlICAmJiBjaGFuZ2UgPiAwKXtcblx0XHRcdFx0XHRzdGF0ZS5kaWRTY3JvbGwuc2Vjb25kUGFnZSAgPSB0cnVlO1xuXG5cdFx0XHRcdFx0c2Nyb2xsKHNlY29uZF9wYWdlX3Bvc2l0aW9uIC0gNTAgKTtcblx0XHRcdFx0XHRmYWRlSW4odGhpcy5zZWNvbmRQYWdlRWxlbWVudElkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYoIXN0YXRlLmRpZFNjcm9sbC50aGlyZFBhZ2UgJiYgY2hhbmdlID4gMCAmJiAgc2Nyb2xsX3Bvc2l0aW9uID49ICB0aGlyZF9wYWdlX3Bvc2l0aW9uIC0gNTAwICl7XG5cdFx0XHRcdFx0c3RhdGUuZGlkU2Nyb2xsLnRoaXJkUGFnZSA9IHRydWU7XG5cdFx0XHRcdFx0c2Nyb2xsKHNjcm9sbEhlaWdodCgpLHRoaXJkX3BhZ2VfcG9zaXRpb24pO1xuXHRcdFx0XHRcdGZhZGVJbih0aGlzLnRoaXJkUGFnZUVsZW1lbnRJZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdH1cblxuXHRcblx0XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdDxkaXYgaWQ9XCJmaXJzdFBhZ2VcIiAgY2xhc3M9XCJyb3cgZmlyc3QtcGFnZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgbWFpbi1wYWdlICBtYWluLXBhZ2Utc21cIj5cblx0XHRcdFx0XHRcdDxkaXYgZGF0YS1jb21wb25lbnQ9XCJNYWluUGFnZVwiPjwvZGl2Plx0XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJzZWNvbmRQYWdlXCI+XG5cdFx0XHRcdFx0PGRpdiAgZGF0YS1jb21wb25lbnQ9XCJQcm9qZWN0RGVzY3JpcHRpb25cIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGlkPVwidGhpcmRQYWdlXCIgIGNsYXNzPVwicm93IHRoaXJkLXBhZ2VcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9J2NvbC1tZC0xMicgZGF0YS1jb21wb25lbnQ9XCJDb250YWN0XCI+PC9kaXY+IDwvZGl2PiA8L2Rpdj4gYCB9IFxuXG5cbn1cbiIsImltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbihldmVudCkgeyBcblx0bmV3IEFwcCgnYXBwJyk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4e1xuXHQvKipcblx0ICogY29uc3RydWN0b3Jcblx0ICpcblx0ICogQHBhcmFtIGNvbXBvbmVudCBjb21wb25lbnQgbmFtZVxuXHQgKi9cblx0Y29uc3RydWN0b3IoY29tcG9uZW50KXtcblx0XHR0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuXHRcdGNvbnN0IHByb21pc2VzID0gdGhpcy5jb21wb25lbnRTZWxlY3RvcigpLm1hcChxdWVyeVNlbGVjdG9yPT57XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9KTtcblxuXHRcdH0pXG5cblx0XHRQcm9taXNlLmFsbChwcm9taXNlcylcblx0XHRcdC50aGVuKCgpPT57XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlICA9IHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdHRoaXMubG9hZENoaWxkVmlld3MoKTtcblx0XHRcdFx0dGhpcy5pbnNlcnRFbGVtZW50KHRlbXBsYXRlKTtcblxuXHRcdFx0XHR0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG5cdFx0XHR9KVxuXHR9XG5cblx0LyoqXG5cdCAqIGhvb2sgZm9yIHRoaW5ncyBhcmUgbG9hZGVkXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHQgKi9cblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0fVxuXG5cdC8qKlxuXHQgKiBwb3B1bGF0aW5nIHRoZSBpbm5lcmh0bWxcblx0ICpcblx0ICogQHBhcmFtIHRlbXBsYXRlXG5cdCAqL1xuXHRpbnNlcnRFbGVtZW50KHRlbXBsYXRlKXtcblx0XHR0aGlzLmNvbXBvbmVudFNlbGVjdG9yKCkuZm9yRWFjaChjb21wb25lbnRJbnN0YW5jZT0+e1xuXHRcdFx0Y29tcG9uZW50SW5zdGFuY2UuaW5uZXJIVE1MID0gIHRlbXBsYXRlO1xuXHRcdH0pXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuICcnO1xuXG5cdH1cblx0Y2hpbGRWaWV3cygpe1xuXHRcdHJldHVybiBbXTtcblx0XHRcblx0fVxuXHRjb21wb25lbnRTZWxlY3Rvcigpe1xuXHRcdHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtY29tcG9uZW50PVwiJHt0aGlzLmNvbXBvbmVudH1cIl1gKV07XG5cdH1cblxuXHQvKipcblx0ICogbG9hZGluZyBsaXN0ZWQgY2hpbGQgdmlld3Ncblx0ICovXG5cdGxvYWRDaGlsZFZpZXdzKCl7XG5cdFx0aWYoIUFycmF5LmlzQXJyYXkodGhpcy5jaGlsZFZpZXdzKCkgKSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5jaGlsZFZpZXdzKCkuZm9yRWFjaCh2aWV3PT57XG5cdFx0XHRsZXQgY2xhc3NOYW1lID0gdmlldy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTtcblx0XHRcdG5ldyB2aWV3KGAke2NsYXNzTmFtZX1gKTtcblx0XHR9KVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleHtcblx0LyoqXG5cdCAqIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqIEBwYXJhbSBjb21wb25lbnQgY29tcG9uZW50IG5hbWVcblx0ICovXG5cdGNvbnN0cnVjdG9yKGNvbXBvbmVudCl7XG5cdFx0dGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cblx0XHRjb25zdCBwcm9taXNlcyA9IHRoaXMuY29tcG9uZW50U2VsZWN0b3IoKS5tYXAocXVlcnlTZWxlY3Rvcj0+e1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9Pntcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cblx0XHR9KVxuXG5cdFx0UHJvbWlzZS5hbGwocHJvbWlzZXMpXG5cdFx0XHQudGhlbigoKT0+e1xuXHRcdFx0XHRjb25zdCB0ZW1wbGF0ZSAgPSB0aGlzLnJlbmRlcigpO1xuXHRcdFx0XHR0aGlzLmxvYWRDaGlsZFZpZXdzKCk7XG5cdFx0XHRcdHRoaXMuaW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSk7XG5cblx0XHRcdFx0dGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuXHRcdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBob29rIGZvciB0aGluZ3MgYXJlIGxvYWRlZFxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGNvbXBvbmVudERpZE1vdW50KCl7XG5cdH1cblxuXHQvKipcblx0ICogcG9wdWxhdGluZyB0aGUgaW5uZXJodG1sXG5cdCAqXG5cdCAqIEBwYXJhbSB0ZW1wbGF0ZVxuXHQgKi9cblx0aW5zZXJ0RWxlbWVudCh0ZW1wbGF0ZSl7XG5cdFx0dGhpcy5jb21wb25lbnRTZWxlY3RvcigpLmZvckVhY2goY29tcG9uZW50SW5zdGFuY2U9Pntcblx0XHRcdGNvbXBvbmVudEluc3RhbmNlLmlubmVySFRNTCA9ICB0ZW1wbGF0ZTtcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAnJztcblxuXHR9XG5cdGNoaWxkVmlld3MoKXtcblx0XHRyZXR1cm4gW107XG5cdFx0XG5cdH1cblx0Y29tcG9uZW50U2VsZWN0b3IoKXtcblx0XHRyZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLWNvbXBvbmVudD1cIiR7dGhpcy5jb21wb25lbnR9XCJdYCldO1xuXHR9XG5cblx0LyoqXG5cdCAqIGxvYWRpbmcgbGlzdGVkIGNoaWxkIHZpZXdzXG5cdCAqL1xuXHRsb2FkQ2hpbGRWaWV3cygpe1xuXHRcdGlmKCFBcnJheS5pc0FycmF5KHRoaXMuY2hpbGRWaWV3cygpICkpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hpbGRWaWV3cygpLmZvckVhY2godmlldz0+e1xuXHRcdFx0bGV0IGNsYXNzTmFtZSA9IHZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG5cdFx0XHRuZXcgdmlldyhgJHtjbGFzc05hbWV9YCk7XG5cdFx0fSlcblx0fVxufVxuIiwiZXhwb3J0ICBjb25zdCBzdGF0ZSAgPSAge1xuXHRkaWRTY3JvbGwgOiB7YWJvdXQgOiBmYWxzZSwgc2Vjb25kUGFnZSA6IGZhbHNlICwgdGhpcmRQYWdlIDogZmFsc2V9LFxuXHRwcm9qZWN0czogW3tcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiVEFTSyBPUkdBTklaRVJcIixcblx0XHRkZXNjcmlwdGlvbiA6XCJBIFRBU0sgT1JHQU5JWkVSIFdFQiBBUFBMSUNBVElPTiBXSVRIIEVNQkVSIEpTIEZST05URU5EIEFORCBESkFOR08gUkVTVCBGUkFNRVdPUkssSU5URUdSQVRJTkcgTVlTUUwgQVMgREFUQUJBU0UgU1VQUE9SVC5cIixcblx0XHRza2lsbHM6IFwiREpBTkdPIFJFU1QsIEVNQkVSIEpTLCBNWVNRTCwgSEVST0tVLCBCT09UU1RSQVBcIixcblx0XHRsaW5rIDogXCJodHRwczovL2Nkbi5jb2xvcmxpYi5jb20vd3Avd3AtY29udGVudC91cGxvYWRzL3NpdGVzLzIvaG93LXRvLXNldHVwLXdlYnNpdGUuanBnXCIsIFx0XG5cdFx0c2hvdyA6IHRydWUsXG5cdFx0cG9zaXRpb246IDAsXG5cdFx0b3BhY2l0eTogMSxcblx0XHRkaWRTY3JvbGw6IGZhbHNlXG5cdH0sXG5cdHtcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiT0ZGTElORSBGSVJTVCBSRURESVQgVklFV0VSXCIsXG5cdFx0ZGVzY3JpcHRpb24gOlwiVEhJUyBSRUFDVCBBUFAgVVRJTElaRVMgU0VSVklDRSBXT1JLRVIgQU5EIENBQ0hJTkcgSEVBVklMWSBUTyBHSVZFIE9GRkxJTkUgRklSU1QgRVhQRVJJRU5DRSBGT1IgQSBTVUJSRURESVQoUkVERElUIFNVQiBGT1JVTSkuQ1VSUkVOVExZLCBJIEFNIFdPUktJTkcgT04gTUFLSU5HIElUIE1PUkUgUkVBREVSIEZSSUVORExZIEFORCBXUklURVIgRlJJRU5ETFkuXCIsXG5cdFx0c2tpbGxzOiBcIlJFQUNUICwgU0VSVklDRSBXT1JLRVIgLCBPQVVUSDIgLiBIRVJPS1UsIEJPT1RTVFJBUFwiLFxuXHRcdGxpbmsgOiBcImh0dHBzOi8vY2RuLmJsZXNzdGhpc3N0dWZmLmNvbS9pbWFnZW5zL3N0dWZmL2NsZWFyLWFwcC1mb3ItaXBob25lLmpwZ1wiLFxuXHRcdHNob3cgOiBmYWxzZSxcblx0XHRwb3NpdGlvbiA6IDI4Mixcblx0XHRvcGFjaXR5OiAwLjIsXG5cdFx0ZGlkU2Nyb2xsOiBmYWxzZVxuXG5cdH0sXG5cdHtcblx0XHRpZCA6IG51bGwsXG5cdFx0dGl0bGU6IFwiQ0hBTkdFIE1ZIFZJRVcgUkVBREVSXCIsXG5cdFx0ZGVzY3JpcHRpb24gOlwiQSBSRURESVQgQ0xJRU5UIE1BREUgVVNJTkcgUkVBQ1QgTkFUSVZFIFdISUNIIEFMTE9XUyBVU0VSIEFERCBQT1NUIEFORCBQRVJGT1JNIEFDVElPTiBPTiBUSEUgQVBQKEFVVEhFTlRJQ0FURUQgVVNJTkcgT0FVVEgyKVwiLFxuXHRcdHNraWxsczogXCJSRUFDVCBOQVRJVkUgLCBPQVVUSDIgLCBIRVJPS1VcIixcblx0XHRsaW5rIDogXCJodHRwczovL3BoYW5kcm9pZC5zMy5hbWF6b25hd3MuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA0L0Jvb3N0LWZvci1yZWRkaXQtYW5kcm9pZC5qcGdcIixcblx0XHRzaG93IDogZmFsc2UsXG5cdFx0cG9zaXRpb24gOiA2MjYsXG5cdFx0b3BhY2l0eTogMC4wNSxcblx0XHRkaWRTY3JvbGw6IGZhbHNlXG5cdH1dLFxuXHRwb3NpdGlvbjp7XG5cdFx0Zmlyc3RQYWdlOiBudWxsLFxuXHRcdHNlY29uZFBhZ2U6IG51bGwsXG5cdFx0dGhpcmRQYWdlOiBudWxsXG5cdH0sXG5cdG5vdGlmeVByb3BlcnR5Q2hhbmdlKCl7fVxufVxuIiwiZXhwb3J0IGNvbnN0IHNjcm9sbEhlaWdodCA9ICgpPT57XG5cdHJldHVybiBNYXRoLm1heCggZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0LCBcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICk7XG59XG5cbmV4cG9ydCBjb25zdCBzY3JvbGwgPSAobGFzdF9wb3N0aW9uLGluaXRpYWxfcG9zaXRpb249MCk9Pntcblx0Y29uc3QgcmF0ZSA9IDE1O1xuXHRsZXQgcG9zaXRpb24gPSBpbml0aWFsX3Bvc2l0aW9uIDtcblx0Y29uc3QgcmVwZWF0T2Z0ZW4gPSAoKT0+e1xuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24rcmF0ZTtcblx0XHR3aW5kb3cuc2Nyb2xsKDAscG9zaXRpb24pO1xuXHRcdGNvbnN0IGdsb2JhbElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcGVhdE9mdGVuKTtcblx0XHRpZihwb3NpdGlvbiA+PSBsYXN0X3Bvc3Rpb24pe1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2xvYmFsSUQpO1xuXHRcdH1cblx0fVxuXG5cdHJlcGVhdE9mdGVuKCk7XG59XG5cbmV4cG9ydCBjb25zdCBmYWRlSW4gPSAoZWxlbWVudCxpbml0aWFsPTApPT57XG5cdGNvbnN0IHJhdGUgPSAwLjA1O1xuXHQvL2ZpbmFsIG9wYWNpdHkgY2FuJ3QgYmUgYmlnZ2VyIHRoYW4gMVxuXHRjb25zdCBmaW5hbE9wYWNpdHkgPSAxO1xuXG5cdGxldCBvcGFjaXR5ID0gaW5pdGlhbDtcblxuXHRjb25zdCBfdGFzayA9ICgpPT57XG5cdFx0ZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcblx0XHRvcGFjaXR5ID0gb3BhY2l0eSArIHJhdGU7IFxuXHRcdGNvbnN0IGdsb2JhbElEID0gIHJlcXVlc3RBbmltYXRpb25GcmFtZShfdGFzayk7XG5cdFx0aWYob3BhY2l0eSA+PSBmaW5hbE9wYWNpdHkpe1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2xvYmFsSUQpXG5cdFx0fVxuXHR9XG5cblx0X3Rhc2soKTtcblxufVxuXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGVsKT0+IHtcbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgcmV0dXJuIHsgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCwgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCB9XG59XG5cbiIsImltcG9ydCBJbmRleCBmcm9tICcuL2xpYi9pbmRleCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F2ZUFuaW1hdGlvbiBleHRlbmRzIEluZGV4IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKXtcblx0XHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2F2ZS1hbmltYXRpb24nKTtcblx0XG5cdFx0aWYoY2FudmFzLmdldENvbnRleHQpe1xuXHRcdFx0dGhpcy5fZHJhdyhjYW52YXMpO1xuXHRcdH1lbHNle1xuXHRcdFx0Y29uc29sZS53YXJuKCdmYWlsZWQgaW50aWFsaXplZCBjYW52YXNlJyk7XG5cdFx0fVxuXHR9XG5cdF9kcmF3KGNhbnZhcyl7XG5cdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdFx0XG5cdFx0dGhpcy5fZHJhd193YXZ5X3BhdGgoY3R4KTtcblx0XHRcblx0fVxuXG5cblx0X2RyYXdfd2F2eV9wYXRoKGN0eCl7XG5cdFx0bGV0IHJlZ2lvbiA9IG5ldyBQYXRoMkQoKTtcblx0XHRjb25zdCBvZmZzZXR5ID0gMTA7XG5cblx0XHRyZWdpb24ubGluZVRvKDAsMCk7XG5cdFx0cmVnaW9uLmxpbmVUbygwLDMwKTtcblx0XHQvLyBEZWZpbmUgdGhlIHBvaW50cyBhcyB7eCwgeX1cblx0XHRcblx0XHRyZWdpb24ubGluZVRvKDMwMCwzMCk7XG5cdFx0cmVnaW9uLmxpbmVUbygzMDAsMCk7XG5cdFx0cmVnaW9uLmNsb3NlUGF0aCgpO1xuXG5cdFx0Y3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG5cdFx0Y3R4LmZpbGwocmVnaW9uLCAnZXZlbm9kZCcpO1xuXHRcdGZvcihsZXQgb2Zmc2V0eCA9IDA7IG9mZnNldHggPD0gMzAwIDsgb2Zmc2V0eCA9IG9mZnNldHggKyA0MCl7XG5cdFx0XHRsZXQgc3RhcnQgPSB7IHg6IDArb2Zmc2V0eCwgICAgeTogMjAgKyBvZmZzZXR5ICB9O1xuXHRcdFx0bGV0IGNwMSA9ICAgeyB4OiAxMCtvZmZzZXR4LCAgIHk6IDAgICsgb2Zmc2V0eX07XG5cdFx0XHRsZXQgY3AyID0gICB7IHg6IDMwK29mZnNldHgsICAgeTogODAgICsgb2Zmc2V0eX07XG5cdFx0XHRsZXQgZW5kID0gICB7IHg6IDQwK29mZnNldHgsICAgeTogMjAgKyBvZmZzZXR5IH07XG5cdFx0XHRcblx0XHRcdHJlZ2lvbi5tb3ZlVG8oc3RhcnQueCwgc3RhcnQueSk7XG5cdFx0XHRyZWdpb24uYmV6aWVyQ3VydmVUbyhjcDEueCwgY3AxLnksIGNwMi54LCBjcDIueSwgZW5kLngsIGVuZC55KTtcblx0XHR9XG5cdFx0Y3R4LmZpbGxTdHlsZSA9ICcjNGUyZDJkZmMnO1xuXHRcdGN0eC5maWxsKHJlZ2lvbiwgJ2V2ZW5vZGQnKTtcblxuXHR9XG5cdHJlbmRlcigpe1xuXHRcdFxuXHRcdHJldHVybiBgXG5cdFx0XHQ8Y2FudmFzIGlkPVwid2F2ZS1hbmltYXRpb25cIj48L2NhbnZhcz5cblx0XHRgO1xuXG5cdH1cbn07XG4iXX0=
