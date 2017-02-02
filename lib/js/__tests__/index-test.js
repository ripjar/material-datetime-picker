import MaterialDatetimePicker from "../";

const $ = document.querySelector.bind(document);

afterEach(() => {
  document.body.innerHTML = "";
})

test("open the picker adds backdrop and picker elements to the dom", () => {
  const picker = new MaterialDatetimePicker();
  picker.open();

  const $backdrop = $(".c-scrim");
  const $picker = $(".c-datepicker");
  expect($picker).not.toBeNull();
  expect($backdrop).not.toBeNull();
});
