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
  const picker = await openPicker()
  picker.close();
  await delay(300);
  
  const $backdrop = $(".c-scrim");
  const $picker = $(".c-datepicker");

  expect($picker).toBeNull();
  expect($backdrop).toBeNull();
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