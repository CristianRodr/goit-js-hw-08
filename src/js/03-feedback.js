import '../css/common.css';
import '../css/03-feedback.css';
import { throttle } from 'throttle-debounce';

//const form = document.querySelector('.feedback-form');

const objetoHtml = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea')
}

const { form, input, textarea } = objetoHtml;

const objetoLocal = {};

function cadenaLocalhost() {
  const formularioJSON = JSON.stringify(objetoLocal);
  localStorage.setItem("feedback-form-state", formularioJSON);
}

const constructorInput = function(event) {
  objetoLocal.Email = event.target.value;
  cadenaLocalhost();
}

const constructorTextarea = function(event) {
  objetoLocal.Message = event.target.value;
  cadenaLocalhost();
}

input.addEventListener('input', _.throttle(constructorInput, 500));
textarea.addEventListener('input', _.throttle(constructorTextarea, 500));

const constructorSubmit = function(event) {
  event.preventDefault();

  localStorage.removeItem("feedback-form-state");

  const objeSumit = {
    email: input.value,
    message: textarea.value
  }

  console.log(objeSumit);
  event.currentTarget.reset();
}

form.addEventListener('submit', constructorSubmit);

updateOutput();
function updateOutput() {
  const savedSetting = localStorage.getItem("feedback-form-state");
  const parsedSettings = JSON.parse(savedSetting);
  if (parsedSettings  === null) {
    return
  }
  const values = Object.values(parsedSettings);
  console.log(values);
  input.value = values[0];
  textarea.value = values[1];
}



