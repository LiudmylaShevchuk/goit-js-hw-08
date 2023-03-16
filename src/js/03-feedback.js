import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

entryFormInput();

function onInput(e) {
  let formData = localStorage.getItem(STORAGE_KEY);
  formData = formData ? JSON.parse(formData) : {};
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function entryFormInput() {
  let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    Object.entries(savedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  if (refs.email.value === '' || refs.textarea.value === '') {
    alert('Please, fill the form!');
  }

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
