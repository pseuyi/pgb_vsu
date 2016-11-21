'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

var _Object3D2 = require('./Object3D');

var _Object3D3 = _interopRequireDefault(_Object3D2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Camera = function (_Object3D) {
  _inherits(Camera, _Object3D);

  function Camera(props, context) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Camera).call(this, props, context));

    var _context$getSize = context.getSize();

    var width = _context$getSize.width;
    var height = _context$getSize.height;

    _this.obj = props.obj || new _three2.default.PerspectiveCamera(75, width / height, 0.1, 1000);
    _this.obj.name = _this.obj.name || _this.constructor.name;
    context.setCamera(_this.obj);
    return _this;
  }

  return Camera;
}(_Object3D3.default);

Camera.contextTypes = _extends({}, _Object3D3.default.contextTypes, { // fixme: other places
  setCamera: _react.PropTypes.func.isRequired,
  getSize: _react.PropTypes.func.isRequired
});
exports.default = Camera;