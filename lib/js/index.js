import rome from 'rome';
import _defaults from 'lodash/object/defaults';
import moment from 'moment';
import popupTemplate from '../template/datepicker.hbs';
import scrimTemplate from '../template/scrim.hbs';

const prefix = 'c-datepicker';
const defaults = {
  default: moment(),
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
  container: document.body
};

class MaterialDateTimePicker {
  constructor(el, options) {
    this.el = el;
    this.options = _defaults({}, options, defaults);
    this.value = this.options.default;
  }

  initializeRome() {
    this.rome = rome(this.$(`.${this.options.styles.container}`), {
      styles: this.options.styles,
      time: false
    }).on('data', (value) => this.set(value));
  }

  open() {
    document.body.innerHTML += scrimTemplate
      .replace('{{styles.scrim}}', this.options.styles.scrim);
    this.options.container.innerHTML += popupTemplate;
    this.pickerEl = this.options.container.querySelector('.' + prefix);
    this.scrimEl = this.options.container.querySelector('.' + this.options.styles.scrim);
    this.set(this.value || this.options.default);
    this.initializeRome();
    this._show();
  }

  close() {
    this._hide();
  }

  _hide() {
    this.pickerEl.classList.remove('open');
    window.setTimeout(() => {
      this.options.container.removeChild(this.pickerEl);
      document.body.removeChild(this.scrimEl);
      this.trigger('close');
    }, 200);
    return this;
  }

  _show() {
    this.delegateEvents();
    // add the animation classes on the next animation tick
    // so that they actually work
    window.requestAnimationFrame(() => {
      this.scrimEl.classList.add(this.options.styles.scrim + '--shown');
      this.pickerEl.classList.add(prefix + '--open');
      this.trigger('open');
    });
    return this;
  }

  delegateEvents() {
    this.$('.js-cancel')
      .addEventListener('click', () => this.close());
    this.$('.js-ok')
      .addEventListener('click', () => this.submit());
    this.$(`.${this.options.styles.clockNum}`)
      .addEventListener('click', (e) => this.clickClock(e));
    return this;
  }

  submit() {
    this.close();
    return this;
  }

  clickClock() {
    return this;
  }

  val(val) {
    return (val ? this.set(val) : this.el.value);
  }

  set(value) {
    const m = moment(value);
    if (this.value && (m.date() !== this.value.date()
      || m.month() !== this.value.month()
      || m.year() !== this.value.year()
    )) {
      this.setDate(m);
      this.trigger('change:date', this.value, this);
    } else {
      this.setTime(m);
      this.trigger('change:time', this.value, this);
    }
    if (this.el.value) {
      this.el.value = m.format(this.options.format);
    } else {
      this.el.setAttribute('data-value', m.format(this.options.format));
    }
    this.trigger('change', this.value, this);
  }

  setDate(date) {
    const m = moment(date);
    const month = m.format('MMM');
    const day = m.format('Do');
    const dayOfWeek = m.format('dddd');
    const year = m.format('YYYY');
    console.log(month, day, dayOfWeek, year);
    this.$('.js-day').innerText = dayOfWeek;
    this.$('.js-date-month').innerText = (month + ' ' + year);
    this.$('.js-date-day').innerText = day;
    this.value.year(m.year());
    this.value.month(m.month());
    this.value.date(m.date());
    return this;
  }

  setTime(date) {
    const m = moment(date);
    const hour = m.format('HH');
    const hourAsInt = parseInt(hour, 10) % 12;
    console.log(hour + ':00');
    this.$('.js-date-hours').innerText = hour;
    this.$(`.${this.options.styles.clockNum}[data-number="${hourAsInt}"]`)
      .classList.add(`.${this.options.styles.clockNum}--active`);
    this.value.hours(m.hours());
    return this;
  }

  trigger(eventName, evtData) {
    const event = new CustomEvent(eventName, this, evtData);
    this.el.dispatchEvent(event);
  }

  $(selector) {
    return this.pickerEl.querySelector(selector);
  }
}

export default MaterialDateTimePicker;
