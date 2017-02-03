export default () => `
<div class="c-datepicker">
  <a class="c-datepicker__toggle c-datepicker__toggle--right c-datepicker--show-time js-show-clock" title="show time picker">
  </a>

  <a class="c-datepicker__toggle c-datepicker__toggle--left c-datepicker--show-calendar is-selected js-show-calendar" title="show date picker">
  </a>

  <div class="c-datepicker__header">
    <div class="c-datepicker__header-day">
      <span class="js-day">Monday</span>
    </div>
    <div class="c-datepicker__header-date">
      <span class="c-datepicker__header-date__month js-date-month"></span>
      <span class="c-datepicker__header-date__day js-date-day"></span>
      <span class="c-datepicker__header-date__time js-date-time">
        <span class="c-datepicker__header-date__hours js-date-hours active">09</span>:<span class="c-datepicker__header-date__minutes js-date-minutes">00</span>
      </span>
    </div>
  </div>

  <div class="c-datepicker__calendar"></div>
  <div class="c-datepicker__clock">
    <div class="c-datepicker__clock__am-pm-toggle">
      <label class="c-datepicker__toggle--checked">
        <input checked="checked" class="c-datepicker__toggle c-datepicker__toggle--right c-datepicker__clock--am" type="radio" name="time-date-toggle" value="AM" />
        AM
      </label>

      <label>
        <input class="c-datepicker__toggle c-datepicker__toggle--right c-datepicker__clock--pm" type="radio" name="time-date-toggle" value="PM" />
        PM
      </label>
    </div>
    <div class="c-datepicker__mask"></div>
    <div class="c-datepicker__clock__hours js-clock-hours active">
      <div class="c-datepicker__clock__num" data-number="3">3</div>
      <div class="c-datepicker__clock__num" data-number="4">4</div>
      <div class="c-datepicker__clock__num" data-number="5">5</div>
      <div class="c-datepicker__clock__num" data-number="6">6</div>
      <div class="c-datepicker__clock__num" data-number="7">7</div>
      <div class="c-datepicker__clock__num" data-number="8">8</div>
      <div class="c-datepicker__clock__num" data-number="9">9</div>
      <div class="c-datepicker__clock__num" data-number="10">10</div>
      <div class="c-datepicker__clock__num" data-number="11">11</div>
      <div class="c-datepicker__clock__num" data-number="0">12</div>
      <div class="c-datepicker__clock__num" data-number="1">1</div>
      <div class="c-datepicker__clock__num" data-number="2">2</div>
      <div class="c-datepicker__clock-hands">
        <div class="c-datepicker__hour-hand"></div>
      </div>
    </div>
    <div class="c-datepicker__clock__minutes js-clock-minutes">
      <div class="c-datepicker__clock__num" data-number="15">15</div>
      <div class="c-datepicker__clock__num" data-number="20">20</div>
      <div class="c-datepicker__clock__num" data-number="25">25</div>
      <div class="c-datepicker__clock__num" data-number="30">30</div>
      <div class="c-datepicker__clock__num" data-number="35">35</div>
      <div class="c-datepicker__clock__num" data-number="40">40</div>
      <div class="c-datepicker__clock__num" data-number="45">45</div>
      <div class="c-datepicker__clock__num" data-number="50">50</div>
      <div class="c-datepicker__clock__num" data-number="55">55</div>
      <div class="c-datepicker__clock__num" data-number="0">0</div>
      <div class="c-datepicker__clock__num" data-number="5">5</div>
      <div class="c-datepicker__clock__num" data-number="10">10</div>
      <div class="c-datepicker__clock-hands">
        <div class="c-datepicker__hour-hand"></div>
      </div>
    </div>
  </div>
  <div class="modal-btns">
    <a class="c-btn c-btn--flat js-cancel">Cancel</a>
    <a class="c-btn c-btn--flat js-ok">OK</a>
  </div>
</div>
`;
