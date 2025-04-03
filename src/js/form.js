// import { api } from '../api/instance.js';

const form = document.querySelector('.signup-form');

const formState = {
  name: '',
  email: '',
  phone: '',
};

document.addEventListener('DOMContentLoaded', () => {
  updateFormPlacement();
  restoreFormFields();
});
window.addEventListener('resize', updateFormPlacement);

form.addEventListener('submit', handleSubmit);

function updateFormPlacement() {
  const modalFormContainer = document.querySelector('.modal__form-container');
  const heroFormContainer = document.querySelector('.hero__form-container');

  if (window.innerWidth < 768) {
    modalFormContainer.appendChild(form);
  } else {
    heroFormContainer.appendChild(form);
  }
}

// async function handleSubmit(event) {
function handleSubmit(event) {
  event.preventDefault();

  const currForm = event.target;

  const name = currForm.userName.value;
  const email = currForm.userEmail.value;
  const phone = currForm.phoneNumber.value;

  if (!formState.name || !formState.email || !formState.phone) {
    alert('Fill please all fields');

    return;
  }

  localStorage.removeItem('form-state');
  resetFormState();

  // const response = await api.post('/post', {
  //   name,
  //   email,
  //   phone,
  // });

  // console.log(response.data.json);
  form.reset();
}

form.addEventListener('input', () => {
  formState.name = form.elements.userName.value.trim();
  formState.email = form.elements.userEmail.value.trim();
  formState.phone = form.elements.phoneNumber.value.trim();

  localStorage.setItem('form-state', JSON.stringify(formState));
});

form.addEventListener('submit', handleSubmit);

function restoreFormFields() {
  const parsedFormState = JSON.parse(localStorage.getItem('form-state'));

  if (parsedFormState) {
    form.elements.userName.value = parsedFormState.name;
    form.elements.userEmail.value = parsedFormState.email;
    form.elements.phoneNumber.value = parsedFormState.phone;

    formState.name = parsedFormState.name;
    formState.email = parsedFormState.email;
    formState.phone = parsedFormState.phone;
  }
}

function resetFormState() {
  const formStateKeys = Object.keys(formState);

  for (const key of formStateKeys) {
    formState[key] = '';
  }
}
