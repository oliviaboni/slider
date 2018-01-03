webpackJsonp([5],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(120);


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-slider/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var React = __webpack_require__(78);
var ReactDOM = __webpack_require__(80);
var Slider = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-slider\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var style = { float: 'left', width: 160, height: 400, marginBottom: 160, marginLeft: 50 };
var parentStyle = { overflow: 'hidden' };

var marks = {
  '-10': '-10°C',
  0: React.createElement(
    'strong',
    null,
    '0\xB0C'
  ),
  26: '26°C',
  37: '37°C',
  50: '50°C',
  100: {
    style: {
      color: 'red'
    },
    label: React.createElement(
      'strong',
      null,
      '100\xB0C'
    )
  }
};

function log(value) {
  console.log(value);
}

ReactDOM.render(React.createElement(
  'div',
  { style: parentStyle },
  React.createElement(
    'div',
    { style: style },
    React.createElement(
      'p',
      null,
      'Slider with marks, `step=null`'
    ),
    React.createElement(Slider, { vertical: true, min: -10, marks: marks, step: null, onChange: log, defaultValue: 20 })
  ),
  React.createElement(
    'div',
    { style: style },
    React.createElement(
      'p',
      null,
      'Slider with marks and reverse, `step=null`'
    ),
    React.createElement(Slider, {
      reverse: true,
      vertical: true,
      min: -10,
      marks: marks,
      step: null,
      onChange: log,
      defaultValue: 20
    })
  ),
  React.createElement(
    'div',
    { style: style },
    React.createElement(
      'p',
      null,
      'Slider with marks and steps'
    ),
    React.createElement(Slider, { vertical: true, dots: true, min: -10, marks: marks, step: 10, onChange: log, defaultValue: 20 })
  ),
  React.createElement(
    'div',
    { style: style },
    React.createElement(
      'p',
      null,
      'Slider with marks, `included=false`'
    ),
    React.createElement(Slider, { vertical: true, min: -10, marks: marks, included: false, defaultValue: 20 })
  ),
  React.createElement(
    'div',
    { style: style },
    React.createElement(
      'p',
      null,
      'Slider with marks and steps, `included=false`'
    ),
    React.createElement(Slider, { vertical: true, min: -10, marks: marks, step: 10, included: false, defaultValue: 20 })
  ),
  React.createElement(
    'div',
    { style: style },
    React.createElement(
      'p',
      null,
      'Range with marks'
    ),
    React.createElement(Slider, { vertical: true, min: -10, range: true, marks: marks, onChange: log, defaultValue: [20, 40] })
  ),
  React.createElement(
    'div',
    { style: style },
    React.createElement(
      'p',
      null,
      'Range with marks and steps'
    ),
    React.createElement(Slider, { vertical: true, min: -10, range: true, marks: marks, step: 10,
      onChange: log, defaultValue: [20, 40]
    })
  )
), document.getElementById('__react-content'));

/***/ })

},[119]);
//# sourceMappingURL=v-marks.js.map