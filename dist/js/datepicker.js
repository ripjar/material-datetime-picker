!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.MaterialDatePicker=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libJsIndexJs = require('./lib/js/index.js');

var _libJsIndexJs2 = _interopRequireDefault(_libJsIndexJs);

exports['default'] = _libJsIndexJs2['default'];

// window.MaterialDatePicker = MaterialDatePicker;
module.exports = exports['default'];

},{"./lib/js/index.js":3}],2:[function(require,module,exports){
//
// basic event triggering and listening
//
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var _slice = Array.prototype.slice;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Events = (function () {
  function Events() {
    _classCallCheck(this, Events);

    this._events = {
      '*': []
    };
  }

  _createClass(Events, [{
    key: 'trigger',
    value: function trigger(eventName, evtData) {
      var _this = this;

      eventName.split(' ').forEach(function (evtName) {
        // trigger a global event event
        _this._events['*'].forEach(function (evt) {
          return evt.fn.call(evt.scope, evtName, evtData);
        });
        // if there are any listeners to this event
        // then fire their handlers
        if (_this._events[evtName]) {
          _this._events[evtName].forEach(function (evt) {
            evt.fn.call(evt.scope, evtData);
          });
        }
      });
      return this;
    }
  }, {
    key: 'on',
    value: function on(eventName, fn, scope) {
      if (!this._events[eventName]) this._events[eventName] = [];
      this._events[eventName].push({
        eventName: eventName,
        fn: fn,
        scope: scope || this
      });
      return this;
    }
  }, {
    key: 'off',
    value: function off(eventName, fn) {
      if (!this._events[eventName]) return this;
      if (!fn) {
        this._events[eventName] = [];
      }
      this._events[eventName] = this._events[eventName].filter(function (evt) {
        return evt.fn !== fn;
      });
      return this;
    }
  }, {
    key: 'once',
    value: function once(eventName, fn, scope) {
      var _arguments = arguments,
          _this2 = this;

      var func = function func() {
        fn.call.apply(fn, [scope].concat(_slice.call(_arguments)));
        _this2.off(eventName, func);
      };
      return this.on(eventName, func, scope);
    }
  }]);

  return Events;
})();

exports['default'] = Events;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _rome = require('rome');

var _rome2 = _interopRequireDefault(_rome);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _templateDatepickerHbs = require('../template/datepicker.hbs');

var _templateDatepickerHbs2 = _interopRequireDefault(_templateDatepickerHbs);

var _templateScrimHbs = require('../template/scrim.hbs');

var _templateScrimHbs2 = _interopRequireDefault(_templateScrimHbs);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

var prefix = 'c-datepicker';
var defaults = function defaults() {
  return {
    'default': (0, _moment2['default'])().startOf('hour'),
    // allow the user to override all the classes
    // used for styling the calendar
    styles: {
      scrim: 'c-scrim',
      back: prefix + '__back',
      container: prefix + '__calendar',
      date: prefix + '__date',
      dayBody: prefix + '__days-body',
      dayBodyElem: prefix + '__day-body',
      dayConcealed: prefix + '__day--concealed',
      dayDisabled: prefix + '__day--disabled',
      dayHead: prefix + '__days-head',
      dayHeadElem: prefix + '__day-head',
      dayRow: prefix + '__days-row',
      dayTable: prefix + '__days',
      month: prefix + '__month',
      next: prefix + '__next',
      positioned: prefix + '--fixed',
      selectedDay: prefix + '__day--selected',
      selectedTime: prefix + '__time--selected',
      time: prefix + '__time',
      timeList: prefix + '__time-list',
      timeOption: prefix + '__time-option',
      clockNum: prefix + '__clock__num'
    },
    // format to display in the input, or set on the element
    format: 'dd/MM/YY',
    // the container to append the picker
    container: document.body,
    // allow any dates
    dateValidator: undefined
  };
};

var DateTimePicker = (function (_Events) {
  _inherits(DateTimePicker, _Events);

  function DateTimePicker() {
    var _this = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, DateTimePicker);

    _get(Object.getPrototypeOf(DateTimePicker.prototype), 'constructor', this).call(this);
    var styles = Object.assign(defaults().styles, options.styles);
    this.options = Object.assign(defaults(), options);
    this.options.styles = styles;
    this.value = this.options['default'];

    // listen to any event
    this.on('*', function (evtName, evtData) {
      if (_this.options.el) {
        // if there is a custom element, fire a real dom
        // event on that now
        var _event = new CustomEvent(evtName, _this, evtData);
        _this.options.el.dispatchEvent(_event);
      }
    });
  }

  // intialize the rom calendar with our default date and
  // style options

  _createClass(DateTimePicker, [{
    key: 'initializeRome',
    value: function initializeRome(container, validator) {
      var _this2 = this;

      return (0, _rome2['default'])(container, {
        styles: this.options.styles,
        time: false,
        dateValidator: validator
      }).on('data', function (value) {
        return _this2.set(value);
      });
    }

    // called to open the picker
  }, {
    key: 'open',
    value: function open() {
      var scrimEl = _templateScrimHbs2['default'].replace('{{styles.scrim}}', this.options.styles.scrim);
      _appendTemplate(document.body, scrimEl);
      _appendTemplate(this.options.container, _templateDatepickerHbs2['default']);
      this.pickerEl = this.options.container.querySelector('.' + prefix);
      this.scrimEl = this.options.container.querySelector('.' + this.options.styles.scrim);
      this.amToggleEl = this.$('.c-datepicker__clock--am');
      this.pmToggleEl = this.$('.c-datepicker__clock--pm');

      this.set(this.value || this.options['default'], {
        silent: true
      });
      this.initializeRome(this.$('.' + this.options.styles.container), this.options.dateValidator);
      this._show();
    }
  }, {
    key: 'close',
    value: function close() {
      this._hide();
    }
  }, {
    key: '_hide',
    value: function _hide() {
      var _this3 = this;

      this.pickerEl.classList.remove('open');
      window.setTimeout(function () {
        _this3.options.container.removeChild(_this3.pickerEl);
        document.body.removeChild(_this3.scrimEl);
        _this3.trigger('close');
      }, 200);
      return this;
    }
  }, {
    key: '_show',
    value: function _show() {
      var _this4 = this;

      this.delegateEvents();
      // add the animation classes on the next animation tick
      // so that they actually work
      window.requestAnimationFrame(function () {
        _this4.scrimEl.classList.add(_this4.options.styles.scrim + '--shown');
        _this4.pickerEl.classList.add(prefix + '--open');
        _this4.trigger('open');
      });
      return this;
    }
  }, {
    key: 'delegateEvents',
    value: function delegateEvents() {
      var _this5 = this;

      this.$('.js-cancel').addEventListener('click', function () {
        return _this5.clickCancel();
      }, false);
      this.$('.js-ok').addEventListener('click', function () {
        return _this5.clickSubmit();
      }, false);

      this.$('.' + this.options.styles.clockNum).forEach(function (el) {
        el.addEventListener('click', function (e) {
          return _this5.clickClock(e);
        }, false);
      });

      this.$('.c-datepicker__clock--am').addEventListener('click', function (e) {
        return _this5.clickAm(e);
      }, false);
      this.$('.c-datepicker__clock--pm').addEventListener('click', function (e) {
        return _this5.clickPm(e);
      }, false);

      return this;
    }
  }, {
    key: 'clickSubmit',
    value: function clickSubmit() {
      this.close();
      this.trigger('submit', this.value, this);
      return this;
    }
  }, {
    key: 'clickCancel',
    value: function clickCancel() {
      this.close();
      this.trigger('cancel', this.value, this);
      return this;
    }
  }, {
    key: 'clickClock',
    value: function clickClock(e) {
      var number = parseInt(e.currentTarget.getAttribute('data-number'), 10);
      if (number === 0 && this.meridiem === 'pm') {
        number = 12;
      } else if (this.meridiem === 'pm') {
        number += 12;
      }

      this.value.hour(number);
      this.setTime(this.value);
      return this;
    }
  }, {
    key: 'clickAm',
    value: function clickAm() {
      if (this.meridiem === 'pm') {
        this.meridiem = 'am';
        this.value.hour(this.value.hour() + 12);
      }
      this.setTime(this.value);
      return this;
    }
  }, {
    key: 'clickPm',
    value: function clickPm() {
      if (this.meridiem === 'am') {
        this.meridiem = 'pm';
        this.value.hour(this.value.hour() - 12);
      }
      this.setTime(this.value);
      return this;
    }
  }, {
    key: 'data',
    value: function data(val) {
      return val ? this.set(val) : this.value;
    }
  }, {
    key: 'set',
    value: function set(value, opts) {
      var m = (0, _moment2['default'])(value);
      // maintain a list of change events to fire all at once later
      var evts = [];
      if (!this.value || this.value && (m.date() !== this.value.date() || m.month() !== this.value.month() || m.year() !== this.value.year())) {
        // if the date has not been set yet, or has changed then set it
        // and fire a change:date event
        this.setDate(m);
        evts.push('change:date');
      } else {
        // otherwise just the time is being set
        // so fire a change:time event
        this.setTime(m);
        evts.push('change:time');
      }
      if (this.options.el) {
        // if there is an element to fire events on
        if (this.options.el.tagName === 'INPUT') {
          // and it is an input element then set the value
          this.options.el.value = m.format(this.options.format);
        } else {
          // or any other element set a data-value attribute
          this.options.el.setAttribute('data-value', m.format(this.options.format));
        }
      }
      if (!opts || !opts.silent) {
        // fire all the events we've collected
        this.trigger(['change'].concat(evts).join(' '), this.value, this);
      }
    }

    // set the value and header elements to `date`
    // the calendar will be updated automatically
    // by rome when clicked
  }, {
    key: 'setDate',
    value: function setDate(date) {
      var m = (0, _moment2['default'])(date);
      var month = m.format('MMM');
      var day = m.format('Do');
      var dayOfWeek = m.format('dddd');
      var year = m.format('YYYY');

      this.$('.js-day').innerText = dayOfWeek;
      this.$('.js-date-month').innerText = month + ' ' + year;
      this.$('.js-date-day').innerText = day;
      this.value.year(m.year());
      this.value.month(m.month());
      this.value.date(m.date());
      return this;
    }

    // set the value and header elements to `time`
    // also update the hands of the clock
  }, {
    key: 'setTime',
    value: function setTime(time) {
      var m = (0, _moment2['default'])(time);
      var hour = m.format('HH');
      var hourAsInt = parseInt(hour, 10) % 12;

      this.$('.js-date-hours').innerText = hour;

      this.$('.c-datepicker__clock__hours .' + this.options.styles.clockNum + '[data-number="' + hourAsInt + '"]').classList.add('.' + this.options.styles.clockNum + '--active');
      this.value.hours(m.hours());
      this.meridiem = this.value.format('a');

      if (this.meridiem === 'pm') {
        this.amToggleEl.removeAttribute('checked');
        this.pmToggleEl.setAttribute('checked', 'checked');
        this.amToggleEl.parentElement.classList.remove('c-datepicker__toggle--checked');
        this.pmToggleEl.parentElement.classList.add('c-datepicker__toggle--checked');
      } else {
        this.pmToggleEl.removeAttribute('checked');
        this.amToggleEl.setAttribute('checked', 'checked');
        this.pmToggleEl.parentElement.classList.remove('c-datepicker__toggle--checked');
        this.amToggleEl.parentElement.classList.add('c-datepicker__toggle--checked');
      }
      return this;
    }
  }, {
    key: '$',
    value: function $(selector) {
      var els = this.pickerEl.querySelectorAll(selector);
      return els.length > 1 ? [].concat(_toConsumableArray(els)) : els[0];
    }
  }]);

  return DateTimePicker;
})(_events2['default']);

exports['default'] = DateTimePicker;

function _appendTemplate(parent, template) {
  var tempEl = document.createElement('div');
  tempEl.innerHTML = template;
  parent.appendChild(tempEl.firstChild);
  return this;
}
module.exports = exports['default'];

},{"../template/datepicker.hbs":4,"../template/scrim.hbs":5,"./events":2,"moment":undefined,"rome":undefined}],4:[function(require,module,exports){
module.exports = "<div class=\"c-datepicker\">\n  <input class=\"c-datepicker__toggle c-datepicker__toggle--right c-datepicker--show-time\" type=\"radio\" name=\"date-toggle\" value=\"time\" >\n\n  <input class=\"c-datepicker__toggle c-datepicker__toggle--left  c-datepicker--show-calendar\" type=\"radio\" name=\"date-toggle\" value=\"calendar\" checked>\n\n  <div class=\"c-datepicker__header\">\n    <div class=\"c-datepicker__header-day\">\n      <span class=\"js-day\">Monday</span>\n    </div>\n    <div class=\"c-datepicker__header-date\">\n      <span class=\"c-datepicker__header-date__month js-date-month\">Jan 2015</span>\n      <span class=\"c-datepicker__header-date__day js-date-day\">10th</span>\n      <span class=\"c-datepicker__header-date__time js-date-time\">\n        <span class=\"c-datepicker__header-date__hours js-date-hours\">09</span>:<span class=\"c-datepicker__header-date__minutes js-date-minutes\">00</span>\n      </span>\n    </div>\n  </div>\n\n  <div class=\"c-datepicker__calendar\"></div>\n  <div class=\"c-datepicker__clock\">\n    <div class=\"c-datepicker__clock__am-pm-toggle\">\n      <label class=\"c-datepicker__toggle--checked\">\n        <input checked=\"checked\" class=\"c-datepicker__toggle c-datepicker__toggle--right c-datepicker__clock--am\" type=\"radio\" name=\"time-date-toggle\" value=\"AM\" />\n        AM\n      </label>\n\n      <label>\n        <input class=\"c-datepicker__toggle c-datepicker__toggle--right c-datepicker__clock--pm\" type=\"radio\" name=\"time-date-toggle\" value=\"PM\" />\n        PM\n      </label>\n    </div>\n\n    <div class=\"c-datepicker__clock__hours\">\n      <div class=\"c-datepicker__clock__num\" data-number=\"3\">3</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"4\">4</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"5\">5</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"6\">6</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"7\">7</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"8\">8</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"9\">9</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"10\">10</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"11\">11</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"0\">12</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"1\">1</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"2\">2</div>\n      <div class=\"c-datepicker__clock-hands\">\n        <div class=\"c-datepicker__hour-hand\"></div>\n      </div>\n    </div>\n    <div class=\"c-datepicker__clock__minutes\">\n      <div class=\"c-datepicker__clock__num\" data-number=\"15\">15</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"20\">20</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"25\">25</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"30\">30</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"35\">35</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"40\">40</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"45\">45</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"50\">50</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"55\">55</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"0\">0</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"5\">5</div>\n      <div class=\"c-datepicker__clock__num\" data-number=\"10\">10</div>\n      <div class=\"c-datepicker__clock-hands\">\n        <div class=\"c-datepicker__hour-hand\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-btns\">\n    <a class=\"c-btn c-btn--flat js-cancel\">Cancel</a>\n    <a class=\"c-btn c-btn--flat js-ok\">OK</a>\n  </div>\n</div>";

},{}],5:[function(require,module,exports){
module.exports = "<div class=\"{{styles.scrim}}\"></div>";

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qYW1lcy9yaXBqYXIvbWF0ZXJpYWwtZGF0ZXRpbWUtcGlja2VyL2RhdGV0aW1lLXBpY2tlci5qcyIsIi9Vc2Vycy9qYW1lcy9yaXBqYXIvbWF0ZXJpYWwtZGF0ZXRpbWUtcGlja2VyL2xpYi9qcy9ldmVudHMuanMiLCIvVXNlcnMvamFtZXMvcmlwamFyL21hdGVyaWFsLWRhdGV0aW1lLXBpY2tlci9saWIvanMvaW5kZXguanMiLCJsaWIvdGVtcGxhdGUvZGF0ZXBpY2tlci5oYnMiLCJsaWIvdGVtcGxhdGUvc2NyaW0uaGJzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7NEJDQStCLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRzdCLE1BQU07QUFDZCxXQURRLE1BQU0sR0FDWDswQkFESyxNQUFNOztBQUV2QixRQUFJLENBQUMsT0FBTyxHQUFHO0FBQ2IsU0FBRyxFQUFFLEVBQUU7S0FDUixDQUFDO0dBQ0g7O2VBTGtCLE1BQU07O1dBT2xCLGlCQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUU7OztBQUMxQixlQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU8sRUFBSTs7QUFFdEMsY0FBSyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztpQkFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7U0FBQSxDQUFDLENBQUM7OztBQUczRSxZQUFJLE1BQUssT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ3pCLGdCQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFH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Q0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2hGLFlBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztPQUM5RSxNQUFNO0FBQ0wsWUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDM0MsWUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25ELFlBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUNoRixZQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7T0FDOUU7QUFDRCxhQUFPLElBQUksQ0FBQztLQUNiOzs7V0FFQSxXQUFDLFFBQVEsRUFBRTtBQUNWLFVBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckQsYUFBTyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsZ0NBQU8sR0FBRyxLQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQzs7O1NBN05HLGNBQWM7OztxQkFnT0wsY0FBYzs7QUFFN0IsU0FBUyxlQUFlLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRTtBQUN6QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdDLFFBQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQzVCLFFBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLFNBQU8sSUFBSSxDQUFDO0NBQ2I7Ozs7QUNsUkQ7QUFDQTs7QUNEQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBNYXRlcmlhbERhdGVQaWNrZXIgZnJvbSAnLi9saWIvanMvaW5kZXguanMnO1xuZXhwb3J0IGRlZmF1bHQgTWF0ZXJpYWxEYXRlUGlja2VyO1xuLy8gd2luZG93Lk1hdGVyaWFsRGF0ZVBpY2tlciA9IE1hdGVyaWFsRGF0ZVBpY2tlcjsiLCIvL1xuLy8gYmFzaWMgZXZlbnQgdHJpZ2dlcmluZyBhbmQgbGlzdGVuaW5nXG4vL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fZXZlbnRzID0ge1xuICAgICAgJyonOiBbXVxuICAgIH07XG4gIH1cblxuICB0cmlnZ2VyKGV2ZW50TmFtZSwgZXZ0RGF0YSkge1xuICAgIGV2ZW50TmFtZS5zcGxpdCgnICcpLmZvckVhY2goZXZ0TmFtZSA9PiB7XG4gICAgICAvLyB0cmlnZ2VyIGEgZ2xvYmFsIGV2ZW50IGV2ZW50XG4gICAgICB0aGlzLl9ldmVudHNbJyonXS5mb3JFYWNoKGV2dCA9PiBldnQuZm4uY2FsbChldnQuc2NvcGUsIGV2dE5hbWUsIGV2dERhdGEpKTtcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSBhbnkgbGlzdGVuZXJzIHRvIHRoaXMgZXZlbnRcbiAgICAgIC8vIHRoZW4gZmlyZSB0aGVpciBoYW5kbGVyc1xuICAgICAgaWYgKHRoaXMuX2V2ZW50c1tldnROYW1lXSkge1xuICAgICAgICB0aGlzLl9ldmVudHNbZXZ0TmFtZV0uZm9yRWFjaChldnQgPT4ge1xuICAgICAgICAgIGV2dC5mbi5jYWxsKGV2dC5zY29wZSwgZXZ0RGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbiwgc2NvcGUpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50c1tldmVudE5hbWVdKSB0aGlzLl9ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgIHRoaXMuX2V2ZW50c1tldmVudE5hbWVdLnB1c2goe1xuICAgICAgZXZlbnROYW1lLFxuICAgICAgZm4sXG4gICAgICBzY29wZTogc2NvcGUgfHwgdGhpc1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb2ZmKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50c1tldmVudE5hbWVdKSByZXR1cm4gdGhpcztcbiAgICBpZiAoIWZuKSB7XG4gICAgICB0aGlzLl9ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLl9ldmVudHNbZXZlbnROYW1lXSA9IHRoaXMuX2V2ZW50c1tldmVudE5hbWVdLmZpbHRlcihldnQgPT4ge1xuICAgICAgcmV0dXJuIGV2dC5mbiAhPT0gZm47XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbmNlKGV2ZW50TmFtZSwgZm4sIHNjb3BlKSB7XG4gICAgY29uc3QgZnVuYyA9ICgpID0+IHtcbiAgICAgIGZuLmNhbGwoc2NvcGUsIC4uLmFyZ3VtZW50cyk7XG4gICAgICB0aGlzLm9mZihldmVudE5hbWUsIGZ1bmMpO1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMub24oZXZlbnROYW1lLCBmdW5jLCBzY29wZSk7XG4gIH1cbn1cbiIsImltcG9ydCByb21lIGZyb20gJ3JvbWUnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgcG9wdXBUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9kYXRlcGlja2VyLmhicyc7XG5pbXBvcnQgc2NyaW1UZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZS9zY3JpbS5oYnMnO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5cbmNvbnN0IHByZWZpeCA9ICdjLWRhdGVwaWNrZXInO1xuY29uc3QgZGVmYXVsdHMgPSAoKSA9PiAoe1xuICBkZWZhdWx0OiBtb21lbnQoKS5zdGFydE9mKCdob3VyJyksXG4gIC8vIGFsbG93IHRoZSB1c2VyIHRvIG92ZXJyaWRlIGFsbCB0aGUgY2xhc3Nlc1xuICAvLyB1c2VkIGZvciBzdHlsaW5nIHRoZSBjYWxlbmRhclxuICBzdHlsZXM6IHtcbiAgICBzY3JpbTogJ2Mtc2NyaW0nLFxuICAgIGJhY2s6IHByZWZpeCArICdfX2JhY2snLFxuICAgIGNvbnRhaW5lcjogcHJlZml4ICsgJ19fY2FsZW5kYXInLFxuICAgIGRhdGU6IHByZWZpeCArICdfX2RhdGUnLFxuICAgIGRheUJvZHk6IHByZWZpeCArICdfX2RheXMtYm9keScsXG4gICAgZGF5Qm9keUVsZW06IHByZWZpeCArICdfX2RheS1ib2R5JyxcbiAgICBkYXlDb25jZWFsZWQ6IHByZWZpeCArICdfX2RheS0tY29uY2VhbGVkJyxcbiAgICBkYXlEaXNhYmxlZDogcHJlZml4ICsgJ19fZGF5LS1kaXNhYmxlZCcsXG4gICAgZGF5SGVhZDogcHJlZml4ICsgJ19fZGF5cy1oZWFkJyxcbiAgICBkYXlIZWFkRWxlbTogcHJlZml4ICsgJ19fZGF5LWhlYWQnLFxuICAgIGRheVJvdzogcHJlZml4ICsgJ19fZGF5cy1yb3cnLFxuICAgIGRheVRhYmxlOiBwcmVmaXggKyAnX19kYXlzJyxcbiAgICBtb250aDogcHJlZml4ICsgJ19fbW9udGgnLFxuICAgIG5leHQ6IHByZWZpeCArICdfX25leHQnLFxuICAgIHBvc2l0aW9uZWQ6IHByZWZpeCArICctLWZpeGVkJyxcbiAgICBzZWxlY3RlZERheTogcHJlZml4ICsgJ19fZGF5LS1zZWxlY3RlZCcsXG4gICAgc2VsZWN0ZWRUaW1lOiBwcmVmaXggKyAnX190aW1lLS1zZWxlY3RlZCcsXG4gICAgdGltZTogcHJlZml4ICsgJ19fdGltZScsXG4gICAgdGltZUxpc3Q6IHByZWZpeCArICdfX3RpbWUtbGlzdCcsXG4gICAgdGltZU9wdGlvbjogcHJlZml4ICsgJ19fdGltZS1vcHRpb24nLFxuICAgIGNsb2NrTnVtOiBwcmVmaXggKyAnX19jbG9ja19fbnVtJ1xuICB9LFxuICAvLyBmb3JtYXQgdG8gZGlzcGxheSBpbiB0aGUgaW5wdXQsIG9yIHNldCBvbiB0aGUgZWxlbWVudFxuICBmb3JtYXQ6ICdkZC9NTS9ZWScsXG4gIC8vIHRoZSBjb250YWluZXIgdG8gYXBwZW5kIHRoZSBwaWNrZXJcbiAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5LFxuICAvLyBhbGxvdyBhbnkgZGF0ZXNcbiAgZGF0ZVZhbGlkYXRvcjogdW5kZWZpbmVkXG59KTtcblxuY2xhc3MgRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBFdmVudHMge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcigpO1xuICAgIGNvbnN0IHN0eWxlcyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdHMoKS5zdHlsZXMsIG9wdGlvbnMuc3R5bGVzKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRzKCksIG9wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9ucy5zdHlsZXMgPSBzdHlsZXM7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMub3B0aW9ucy5kZWZhdWx0O1xuXG4gICAgLy8gbGlzdGVuIHRvIGFueSBldmVudFxuICAgIHRoaXMub24oJyonLCAoZXZ0TmFtZSwgZXZ0RGF0YSkgPT4ge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIGN1c3RvbSBlbGVtZW50LCBmaXJlIGEgcmVhbCBkb21cbiAgICAgICAgLy8gZXZlbnQgb24gdGhhdCBub3dcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0TmFtZSwgdGhpcywgZXZ0RGF0YSk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIGludGlhbGl6ZSB0aGUgcm9tIGNhbGVuZGFyIHdpdGggb3VyIGRlZmF1bHQgZGF0ZSBhbmRcbiAgLy8gc3R5bGUgb3B0aW9uc1xuICBpbml0aWFsaXplUm9tZShjb250YWluZXIsIHZhbGlkYXRvcikge1xuICAgIHJldHVybiByb21lKGNvbnRhaW5lciwge1xuICAgICAgc3R5bGVzOiB0aGlzLm9wdGlvbnMuc3R5bGVzLFxuICAgICAgdGltZTogZmFsc2UsXG4gICAgICBkYXRlVmFsaWRhdG9yOiB2YWxpZGF0b3JcbiAgICB9KS5vbignZGF0YScsICh2YWx1ZSkgPT4gdGhpcy5zZXQodmFsdWUpKTtcbiAgfVxuXG4gIC8vIGNhbGxlZCB0byBvcGVuIHRoZSBwaWNrZXJcbiAgb3BlbigpIHtcbiAgICBjb25zdCBzY3JpbUVsID0gc2NyaW1UZW1wbGF0ZS5yZXBsYWNlKCd7e3N0eWxlcy5zY3JpbX19JywgdGhpcy5vcHRpb25zLnN0eWxlcy5zY3JpbSk7XG4gICAgX2FwcGVuZFRlbXBsYXRlKGRvY3VtZW50LmJvZHksIHNjcmltRWwpO1xuICAgIF9hcHBlbmRUZW1wbGF0ZSh0aGlzLm9wdGlvbnMuY29udGFpbmVyLCBwb3B1cFRlbXBsYXRlKTtcbiAgICB0aGlzLnBpY2tlckVsID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuJyArIHByZWZpeCk7XG4gICAgdGhpcy5zY3JpbUVsID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMub3B0aW9ucy5zdHlsZXMuc2NyaW0pO1xuICAgIHRoaXMuYW1Ub2dnbGVFbCA9IHRoaXMuJCgnLmMtZGF0ZXBpY2tlcl9fY2xvY2stLWFtJyk7XG4gICAgdGhpcy5wbVRvZ2dsZUVsID0gdGhpcy4kKCcuYy1kYXRlcGlja2VyX19jbG9jay0tcG0nKTtcblxuICAgIHRoaXMuc2V0KHRoaXMudmFsdWUgfHwgdGhpcy5vcHRpb25zLmRlZmF1bHQsIHtcbiAgICAgIHNpbGVudDogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuaW5pdGlhbGl6ZVJvbWUodGhpcy4kKGAuJHt0aGlzLm9wdGlvbnMuc3R5bGVzLmNvbnRhaW5lcn1gKSwgdGhpcy5vcHRpb25zLmRhdGVWYWxpZGF0b3IpO1xuICAgIHRoaXMuX3Nob3coKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX2hpZGUoKTtcbiAgfVxuXG4gIF9oaWRlKCkge1xuICAgIHRoaXMucGlja2VyRWwuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5waWNrZXJFbCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuc2NyaW1FbCk7XG4gICAgICB0aGlzLnRyaWdnZXIoJ2Nsb3NlJyk7XG4gICAgfSwgMjAwKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9zaG93KCkge1xuICAgIHRoaXMuZGVsZWdhdGVFdmVudHMoKTtcbiAgICAvLyBhZGQgdGhlIGFuaW1hdGlvbiBjbGFzc2VzIG9uIHRoZSBuZXh0IGFuaW1hdGlvbiB0aWNrXG4gICAgLy8gc28gdGhhdCB0aGV5IGFjdHVhbGx5IHdvcmtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc2NyaW1FbC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5zdHlsZXMuc2NyaW0gKyAnLS1zaG93bicpO1xuICAgICAgdGhpcy5waWNrZXJFbC5jbGFzc0xpc3QuYWRkKHByZWZpeCArICctLW9wZW4nKTtcbiAgICAgIHRoaXMudHJpZ2dlcignb3BlbicpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGVsZWdhdGVFdmVudHMoKSB7XG4gICAgdGhpcy4kKCcuanMtY2FuY2VsJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xpY2tDYW5jZWwoKSwgZmFsc2UpO1xuICAgIHRoaXMuJCgnLmpzLW9rJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xpY2tTdWJtaXQoKSwgZmFsc2UpO1xuXG4gICAgdGhpcy4kKGAuJHt0aGlzLm9wdGlvbnMuc3R5bGVzLmNsb2NrTnVtfWApLmZvckVhY2goZWwgPT4ge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5jbGlja0Nsb2NrKGUpLCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiQoJy5jLWRhdGVwaWNrZXJfX2Nsb2NrLS1hbScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5jbGlja0FtKGUpLCBmYWxzZSk7XG4gICAgdGhpcy4kKCcuYy1kYXRlcGlja2VyX19jbG9jay0tcG0nKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuY2xpY2tQbShlKSwgZmFsc2UpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbGlja1N1Ym1pdCgpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy50cmlnZ2VyKCdzdWJtaXQnLCB0aGlzLnZhbHVlLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNsaWNrQ2FuY2VsKCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLnRyaWdnZXIoJ2NhbmNlbCcsIHRoaXMudmFsdWUsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2xpY2tDbG9jayhlKSB7XG4gICAgbGV0IG51bWJlciA9IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtYmVyJyksIDEwKTtcbiAgICBpZiAobnVtYmVyID09PSAwICYmIHRoaXMubWVyaWRpZW0gPT09ICdwbScpIHtcbiAgICAgIG51bWJlciA9IDEyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5tZXJpZGllbSA9PT0gJ3BtJykge1xuICAgICAgbnVtYmVyICs9IDEyO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUuaG91cihudW1iZXIpO1xuICAgIHRoaXMuc2V0VGltZSh0aGlzLnZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNsaWNrQW0oKSB7XG4gICAgaWYgKHRoaXMubWVyaWRpZW0gPT09ICdwbScpIHtcbiAgICAgIHRoaXMubWVyaWRpZW0gPSAnYW0nO1xuICAgICAgdGhpcy52YWx1ZS5ob3VyKHRoaXMudmFsdWUuaG91cigpICsgMTIpO1xuICAgIH1cbiAgICB0aGlzLnNldFRpbWUodGhpcy52YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbGlja1BtKCkge1xuICAgIGlmICh0aGlzLm1lcmlkaWVtID09PSAnYW0nKSB7XG4gICAgICB0aGlzLm1lcmlkaWVtID0gJ3BtJztcbiAgICAgIHRoaXMudmFsdWUuaG91cih0aGlzLnZhbHVlLmhvdXIoKSAtIDEyKTtcbiAgICB9XG4gICAgdGhpcy5zZXRUaW1lKHRoaXMudmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGF0YSh2YWwpIHtcbiAgICByZXR1cm4gKHZhbCA/IHRoaXMuc2V0KHZhbCkgOiB0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHNldCh2YWx1ZSwgb3B0cykge1xuICAgIGNvbnN0IG0gPSBtb21lbnQodmFsdWUpO1xuICAgIC8vIG1haW50YWluIGEgbGlzdCBvZiBjaGFuZ2UgZXZlbnRzIHRvIGZpcmUgYWxsIGF0IG9uY2UgbGF0ZXJcbiAgICBjb25zdCBldnRzID0gW107XG4gICAgaWYgKCF0aGlzLnZhbHVlIHx8ICh0aGlzLnZhbHVlICYmIChtLmRhdGUoKSAhPT0gdGhpcy52YWx1ZS5kYXRlKClcbiAgICAgIHx8IG0ubW9udGgoKSAhPT0gdGhpcy52YWx1ZS5tb250aCgpXG4gICAgICB8fCBtLnllYXIoKSAhPT0gdGhpcy52YWx1ZS55ZWFyKClcbiAgICApKSkge1xuICAgICAgLy8gaWYgdGhlIGRhdGUgaGFzIG5vdCBiZWVuIHNldCB5ZXQsIG9yIGhhcyBjaGFuZ2VkIHRoZW4gc2V0IGl0XG4gICAgICAvLyBhbmQgZmlyZSBhIGNoYW5nZTpkYXRlIGV2ZW50XG4gICAgICB0aGlzLnNldERhdGUobSk7XG4gICAgICBldnRzLnB1c2goJ2NoYW5nZTpkYXRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aGVyd2lzZSBqdXN0IHRoZSB0aW1lIGlzIGJlaW5nIHNldFxuICAgICAgLy8gc28gZmlyZSBhIGNoYW5nZTp0aW1lIGV2ZW50XG4gICAgICB0aGlzLnNldFRpbWUobSk7XG4gICAgICBldnRzLnB1c2goJ2NoYW5nZTp0aW1lJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMuZWwpIHtcbiAgICAgIC8vIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgdG8gZmlyZSBldmVudHMgb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWwudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgICAvLyBhbmQgaXQgaXMgYW4gaW5wdXQgZWxlbWVudCB0aGVuIHNldCB0aGUgdmFsdWVcbiAgICAgICAgdGhpcy5vcHRpb25zLmVsLnZhbHVlID0gbS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvciBhbnkgb3RoZXIgZWxlbWVudCBzZXQgYSBkYXRhLXZhbHVlIGF0dHJpYnV0ZVxuICAgICAgICB0aGlzLm9wdGlvbnMuZWwuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgbS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW9wdHMgfHwgIW9wdHMuc2lsZW50KSB7XG4gICAgICAvLyBmaXJlIGFsbCB0aGUgZXZlbnRzIHdlJ3ZlIGNvbGxlY3RlZFxuICAgICAgdGhpcy50cmlnZ2VyKFsnY2hhbmdlJywgLi4uZXZ0c10uam9pbignICcpLCB0aGlzLnZhbHVlLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgdGhlIHZhbHVlIGFuZCBoZWFkZXIgZWxlbWVudHMgdG8gYGRhdGVgXG4gIC8vIHRoZSBjYWxlbmRhciB3aWxsIGJlIHVwZGF0ZWQgYXV0b21hdGljYWxseVxuICAvLyBieSByb21lIHdoZW4gY2xpY2tlZFxuICBzZXREYXRlKGRhdGUpIHtcbiAgICBjb25zdCBtID0gbW9tZW50KGRhdGUpO1xuICAgIGNvbnN0IG1vbnRoID0gbS5mb3JtYXQoJ01NTScpO1xuICAgIGNvbnN0IGRheSA9IG0uZm9ybWF0KCdEbycpO1xuICAgIGNvbnN0IGRheU9mV2VlayA9IG0uZm9ybWF0KCdkZGRkJyk7XG4gICAgY29uc3QgeWVhciA9IG0uZm9ybWF0KCdZWVlZJyk7XG5cbiAgICB0aGlzLiQoJy5qcy1kYXknKS5pbm5lclRleHQgPSBkYXlPZldlZWs7XG4gICAgdGhpcy4kKCcuanMtZGF0ZS1tb250aCcpLmlubmVyVGV4dCA9IChtb250aCArICcgJyArIHllYXIpO1xuICAgIHRoaXMuJCgnLmpzLWRhdGUtZGF5JykuaW5uZXJUZXh0ID0gZGF5O1xuICAgIHRoaXMudmFsdWUueWVhcihtLnllYXIoKSk7XG4gICAgdGhpcy52YWx1ZS5tb250aChtLm1vbnRoKCkpO1xuICAgIHRoaXMudmFsdWUuZGF0ZShtLmRhdGUoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzZXQgdGhlIHZhbHVlIGFuZCBoZWFkZXIgZWxlbWVudHMgdG8gYHRpbWVgXG4gIC8vIGFsc28gdXBkYXRlIHRoZSBoYW5kcyBvZiB0aGUgY2xvY2tcbiAgc2V0VGltZSh0aW1lKSB7XG4gICAgY29uc3QgbSA9IG1vbWVudCh0aW1lKTtcbiAgICBjb25zdCBob3VyID0gbS5mb3JtYXQoJ0hIJyk7XG4gICAgY29uc3QgaG91ckFzSW50ID0gcGFyc2VJbnQoaG91ciwgMTApICUgMTI7XG5cbiAgICB0aGlzLiQoJy5qcy1kYXRlLWhvdXJzJykuaW5uZXJUZXh0ID0gaG91cjtcblxuICAgIHRoaXMuJChgLmMtZGF0ZXBpY2tlcl9fY2xvY2tfX2hvdXJzIC4ke3RoaXMub3B0aW9ucy5zdHlsZXMuY2xvY2tOdW19W2RhdGEtbnVtYmVyPVwiJHtob3VyQXNJbnR9XCJdYClcbiAgICAgIC5jbGFzc0xpc3QuYWRkKGAuJHt0aGlzLm9wdGlvbnMuc3R5bGVzLmNsb2NrTnVtfS0tYWN0aXZlYCk7XG4gICAgdGhpcy52YWx1ZS5ob3VycyhtLmhvdXJzKCkpO1xuICAgIHRoaXMubWVyaWRpZW0gPSB0aGlzLnZhbHVlLmZvcm1hdCgnYScpO1xuXG4gICAgaWYgKHRoaXMubWVyaWRpZW0gPT09ICdwbScpIHtcbiAgICAgIHRoaXMuYW1Ub2dnbGVFbC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIHRoaXMucG1Ub2dnbGVFbC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgdGhpcy5hbVRvZ2dsZUVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYy1kYXRlcGlja2VyX190b2dnbGUtLWNoZWNrZWQnKTtcbiAgICAgIHRoaXMucG1Ub2dnbGVFbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2MtZGF0ZXBpY2tlcl9fdG9nZ2xlLS1jaGVja2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG1Ub2dnbGVFbC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIHRoaXMuYW1Ub2dnbGVFbC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgdGhpcy5wbVRvZ2dsZUVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYy1kYXRlcGlja2VyX190b2dnbGUtLWNoZWNrZWQnKTtcbiAgICAgIHRoaXMuYW1Ub2dnbGVFbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2MtZGF0ZXBpY2tlcl9fdG9nZ2xlLS1jaGVja2VkJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgJChzZWxlY3Rvcikge1xuICAgIGNvbnN0IGVscyA9IHRoaXMucGlja2VyRWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGVscy5sZW5ndGggPiAxID8gWy4uLmVsc10gOiBlbHNbMF07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWVQaWNrZXI7XG5cbmZ1bmN0aW9uIF9hcHBlbmRUZW1wbGF0ZShwYXJlbnQsIHRlbXBsYXRlKSB7XG4gIGNvbnN0IHRlbXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wRWwuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gIHBhcmVudC5hcHBlbmRDaGlsZCh0ZW1wRWwuZmlyc3RDaGlsZCk7XG4gIHJldHVybiB0aGlzO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImMtZGF0ZXBpY2tlclxcXCI+XFxuICA8aW5wdXQgY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9fdG9nZ2xlIGMtZGF0ZXBpY2tlcl9fdG9nZ2xlLS1yaWdodCBjLWRhdGVwaWNrZXItLXNob3ctdGltZVxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImRhdGUtdG9nZ2xlXFxcIiB2YWx1ZT1cXFwidGltZVxcXCIgPlxcblxcbiAgPGlucHV0IGNsYXNzPVxcXCJjLWRhdGVwaWNrZXJfX3RvZ2dsZSBjLWRhdGVwaWNrZXJfX3RvZ2dsZS0tbGVmdCAgYy1kYXRlcGlja2VyLS1zaG93LWNhbGVuZGFyXFxcIiB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZGF0ZS10b2dnbGVcXFwiIHZhbHVlPVxcXCJjYWxlbmRhclxcXCIgY2hlY2tlZD5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9faGVhZGVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19oZWFkZXItZGF5XFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwianMtZGF5XFxcIj5Nb25kYXk8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjLWRhdGVwaWNrZXJfX2hlYWRlci1kYXRlXFxcIj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19oZWFkZXItZGF0ZV9fbW9udGgganMtZGF0ZS1tb250aFxcXCI+SmFuIDIwMTU8L3NwYW4+XFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9faGVhZGVyLWRhdGVfX2RheSBqcy1kYXRlLWRheVxcXCI+MTB0aDwvc3Bhbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19oZWFkZXItZGF0ZV9fdGltZSBqcy1kYXRlLXRpbWVcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9faGVhZGVyLWRhdGVfX2hvdXJzIGpzLWRhdGUtaG91cnNcXFwiPjA5PC9zcGFuPjo8c3BhbiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19oZWFkZXItZGF0ZV9fbWludXRlcyBqcy1kYXRlLW1pbnV0ZXNcXFwiPjAwPC9zcGFuPlxcbiAgICAgIDwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9fY2FsZW5kYXJcXFwiPjwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9fY2xvY2tfX2FtLXBtLXRvZ2dsZVxcXCI+XFxuICAgICAgPGxhYmVsIGNsYXNzPVxcXCJjLWRhdGVwaWNrZXJfX3RvZ2dsZS0tY2hlY2tlZFxcXCI+XFxuICAgICAgICA8aW5wdXQgY2hlY2tlZD1cXFwiY2hlY2tlZFxcXCIgY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9fdG9nZ2xlIGMtZGF0ZXBpY2tlcl9fdG9nZ2xlLS1yaWdodCBjLWRhdGVwaWNrZXJfX2Nsb2NrLS1hbVxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcInRpbWUtZGF0ZS10b2dnbGVcXFwiIHZhbHVlPVxcXCJBTVxcXCIgLz5cXG4gICAgICAgIEFNXFxuICAgICAgPC9sYWJlbD5cXG5cXG4gICAgICA8bGFiZWw+XFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9fdG9nZ2xlIGMtZGF0ZXBpY2tlcl9fdG9nZ2xlLS1yaWdodCBjLWRhdGVwaWNrZXJfX2Nsb2NrLS1wbVxcXCIgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcInRpbWUtZGF0ZS10b2dnbGVcXFwiIHZhbHVlPVxcXCJQTVxcXCIgLz5cXG4gICAgICAgIFBNXFxuICAgICAgPC9sYWJlbD5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9fY2xvY2tfX2hvdXJzXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjLWRhdGVwaWNrZXJfX2Nsb2NrX19udW1cXFwiIGRhdGEtbnVtYmVyPVxcXCIzXFxcIj4zPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiNFxcXCI+NDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9fY2xvY2tfX251bVxcXCIgZGF0YS1udW1iZXI9XFxcIjVcXFwiPjU8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjLWRhdGVwaWNrZXJfX2Nsb2NrX19udW1cXFwiIGRhdGEtbnVtYmVyPVxcXCI2XFxcIj42PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiN1xcXCI+NzwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9fY2xvY2tfX251bVxcXCIgZGF0YS1udW1iZXI9XFxcIjhcXFwiPjg8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjLWRhdGVwaWNrZXJfX2Nsb2NrX19udW1cXFwiIGRhdGEtbnVtYmVyPVxcXCI5XFxcIj45PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiMTBcXFwiPjEwPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiMTFcXFwiPjExPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiMFxcXCI+MTI8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjLWRhdGVwaWNrZXJfX2Nsb2NrX19udW1cXFwiIGRhdGEtbnVtYmVyPVxcXCIxXFxcIj4xPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiMlxcXCI+MjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9fY2xvY2staGFuZHNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19ob3VyLWhhbmRcXFwiPjwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbWludXRlc1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiMTVcXFwiPjE1PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiMjBcXFwiPjIwPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiMjVcXFwiPjI1PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiMzBcXFwiPjMwPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiMzVcXFwiPjM1PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiNDBcXFwiPjQwPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiNDVcXFwiPjQ1PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiNTBcXFwiPjUwPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiNTVcXFwiPjU1PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiYy1kYXRlcGlja2VyX19jbG9ja19fbnVtXFxcIiBkYXRhLW51bWJlcj1cXFwiMFxcXCI+MDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9fY2xvY2tfX251bVxcXCIgZGF0YS1udW1iZXI9XFxcIjVcXFwiPjU8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjLWRhdGVwaWNrZXJfX2Nsb2NrX19udW1cXFwiIGRhdGEtbnVtYmVyPVxcXCIxMFxcXCI+MTA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjLWRhdGVwaWNrZXJfX2Nsb2NrLWhhbmRzXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImMtZGF0ZXBpY2tlcl9faG91ci1oYW5kXFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJ0bnNcXFwiPlxcbiAgICA8YSBjbGFzcz1cXFwiYy1idG4gYy1idG4tLWZsYXQganMtY2FuY2VsXFxcIj5DYW5jZWw8L2E+XFxuICAgIDxhIGNsYXNzPVxcXCJjLWJ0biBjLWJ0bi0tZmxhdCBqcy1va1xcXCI+T0s8L2E+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ7e3N0eWxlcy5zY3JpbX19XFxcIj48L2Rpdj5cIjtcbiJdfQ==
