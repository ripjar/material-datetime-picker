import delay from "delay";
import MaterialDatetimePicker from "../";

const $ = document.querySelector.bind(document);

async function openPicker(options) {
  const picker = new MaterialDatetimePicker(options);
  picker.open();
  await delay(300);
  return picker;
}

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
});