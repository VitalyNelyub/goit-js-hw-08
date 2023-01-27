import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', submitForm);
refs.form.addEventListener('input', throttle(inputAllFormData, 500));
refs.form.addEventListener('input', inputAllFormData);

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

saveDataForm();

function inputAllFormData(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function submitForm(e) {
  console.log({
    userMail: refs.inputEmail.value,
    userFedback: refs.textarea.value,
  });
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function saveDataForm() {
  //   localStorage.getItem(STORAGE_KEY);
  const message = localStorage.getItem(STORAGE_KEY);
  const messageJSON = JSON.parse(message);
  if (messageJSON) {
    refs.inputEmail.value = messageJSON.email;
    refs.textarea.value = messageJSON.message;
  }
}
