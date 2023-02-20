import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = {};

const formEl = document.querySelector('.feedback-form');
const email = document.querySelector('email');
const message = document.querySelector('message');

fillingForm();

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formData = {};
}

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function fillingForm() {
  const parsedData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (parsedData) {
    const formKeys = JSON.parse(parsedData);
    if (formKeys.email !== undefined) email.value = formKeys.email;
    if (formKeys.message !== undefined) message.value = formKeys.message;
  }
}
