import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {

}

const refs = {
  form: document.querySelector('.feedback-form'),
//   inputEmail: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', submitForm);
// refs.form.addEventListener('input', inputAllFormData);
refs.textarea.addEventListener('input', throttle(inputTextarea, 500));

savedDataForm();

function inputAllFormData(e) {    
    formData[e.target.name] = e.target.value;
    console.log(formData);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function submitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('STORAGE_KEY');
}

function inputTextarea(e) {
  const message = e.target.value;
  console.log(message);
  localStorage.setItem('STORAGE_KEY', message);
}

function savedDataForm() {
    const savedMassege = localStorage.getItem('STORAGE_KEY');

  if (savedMassege) {
    refs.textarea.value = savedMassege;
  }
}


