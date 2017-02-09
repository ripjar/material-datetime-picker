import delay from "delay";
import MaterialDatetimePicker from "../../";

// return a Promise to create a picker. open it, and have it interactive in the DOM
// the delay is to wait for the open transition.
export default async function openPicker(options) {
  const picker = new MaterialDatetimePicker(options);
  picker.open();
  await delay(300);
  return picker;
}
