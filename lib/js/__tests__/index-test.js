import delay from "delay";
import moment from "moment";

import openPicker from "./helpers/open-picker";
import MaterialDatetimePicker from "../";

const $ = document.querySelector.bind(document);

afterEach(() => {
  document.body.innerHTML = "";
})

test("opening the picker ads backdrop and picker elements to the dom", () => {
  const picker = new MaterialDatetimePicker();
  picker.open();

  const $backdrop = $(".c-scrim");
  const $picker = $(".c-datepicker");

  expect($picker).not.toBeNull();
  expect($backdrop).not.toBeNull();
});

test("closing the picker removes elements from the dom", async () => {
  const picker = await openPicker();
  picker.close();
  await delay(300);

  const $backdrop = $(".c-scrim");
  const $picker = $(".c-datepicker");

  expect($picker).toBeNull();
  expect($backdrop).toBeNull();
});

test("the picker closes when the escape key is pressed", async () => {
  const picker = await openPicker();

  const event = new window.KeyboardEvent('keydown', { which: 27, keyCode: 27 });
  window.dispatchEvent(event);

  await delay(300);
  const $picker = $(".c-datepicker");
  expect($picker).toBeNull();
});

test("the picker closes when the scrim element is clicked", async () => {
  const picker = await openPicker();

  const event = new MouseEvent('click');
  $(".c-scrim").dispatchEvent(event);

  await delay(300);
  const $picker = $(".c-datepicker");
  expect($picker).toBeNull();
});

test("opening the picker with a default time", async () => {
  // time divides 5 minutes; set exactly
  const time = "2017-02-01T17:30:00.000Z";
  const picker = await openPicker({ default: moment(time) });
  expect(picker.data().toISOString()).toEqual(time);
});

// test("opening the picker with a default time rounds down to the nearest 5 minute interval", async () => {
//   const time = "2017-02-01T17:31:02.003Z";
//   const picker = await openPicker({ default: moment(time) });
//   expect(picker.data().toISOString()).toEqual("2017-02-01T17:30:00.000Z");
// });

test("opening the picker with a default time rounds up to the nearest 5 minute interval", async () => {
  const time = "2017-02-01T17:34:02.003Z";
  const picker = await openPicker({ default: moment(time) });
  expect(picker.data().toISOString()).toEqual("2017-02-01T17:35:00.000Z");
});

// TODO deprecated
test("picker#data() returns the selected date as a `moment` object", async () => {
  const startTimestamp = Date.now();
  const picker = await openPicker();

  expect(+picker.data() - startTimestamp).toBeLessThan(60 * 60 * 10000); // TODO set the time so we can assert on a known value
  expect(picker.data()._isAMomentObject).toBe(true);
})

test("picker#get returns the selected date as a `moment` object", async () => {
  const startTimestamp = Date.now();
  const picker = await openPicker();

  expect(+picker.get() - startTimestamp).toBeLessThan(60 * 60 * 10000); // TODO set the time so we can assert on a known value
  expect(picker.get()._isAMomentObject).toBe(true);
})

// TODO deprecated
test("picker#data(momentObject) sets the selected date", async () => {
  const startIsoTime = "2017-02-01T18:00:00.000Z";
  const startMoment = moment(startIsoTime);
  const picker = await openPicker();

  picker.set(startMoment);
  expect(picker.data().toISOString()).toEqual(startIsoTime);
})

test("picker#set(momentObject) sets the selected date", async () => {
  // FIXME 17:30 is rounded up to 18:00, which is inconsistent with
  // default. Fix: apply the same minute rounding (no hour rounding) to both.
  const startIsoTime = "2017-02-01T18:30:00.000Z";
  const startMoment = moment(startIsoTime);
  const picker = await openPicker();

  picker.set(startMoment);
  expect(picker.data().toISOString()).toEqual(startIsoTime);
})

test("picker#set(DateObject) sets the selected date", async () => {
  const startIsoTime = "2017-02-01T18:00:00.000Z";
  const startDate = new Date(startIsoTime);
  const picker = await openPicker();

  picker.set(startDate);
  expect(picker.data().toISOString()).toEqual(startIsoTime);
})

test("picker#set(isoTimeString) sets the selected date", async () => {
  const startIsoTime = "2017-02-01T18:00:00.000Z";
  const picker = await openPicker();

  picker.set(startIsoTime);
  expect(picker.data().toISOString()).toEqual(startIsoTime);
})

test("picker#set(timestampInMillis) sets the selected date", async () => {
  const startIsoTime = "2017-02-01T18:00:00.000Z";
  const startTimestamp = +(new Date(startIsoTime));
  const picker = await openPicker();

  picker.set(startTimestamp);
  expect(picker.data().toISOString()).toEqual(startIsoTime);
})

test("picker#set quanitizes to the nearest 5 minutes", async () => {
  const picker = await openPicker();

  // test round down
  picker.set("2017-02-01T18:31:04.941Z");
  expect(picker.data().toISOString()).toEqual( "2017-02-01T18:30:00.000Z");

  // test round up
  picker.set("2017-02-01T18:35:04.941Z");
  expect(picker.data().toISOString()).toEqual( "2017-02-01T18:35:00.000Z");
})
