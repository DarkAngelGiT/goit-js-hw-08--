import throttle from 'lodash.throttle';

// посилання на елементи форми (зручніше)
const refs = {
  formRef: document.querySelector('.feedback-form'),
  emailRef: document.querySelector('[name="email"]'),
  msgRef: document.querySelector('[name="message"]'),

}

const STORAGE_KEY = 'feedback-form-state'; // ключ для сховища
const formData ={}
// додаємо подію
refs.formRef.addEventListener('submit', onFormSubmit);
refs.formRef.addEventListener('input', throttle(onFormData, 500))

function onFormSubmit(event) {
  event.preventDefault(); //заборона оновлювати сторінку
  event.currentTarget.reset(); //
  // console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData)
}

// функція отримання значень з полів форми і запис їх в локальне сховище
function onFormData() {
  // об"єкт для запису email та message
  // const formData = {
    //   email: refs.emailRef.value,
    //   message: refs.msgRef.value,
    // };
    formData.email = refs.emailRef.value;
    formData.message = refs.msgRef.value;
  // };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));// перетворюємо об"єкт в валідний рядок JSON
}

SaveData();

function SaveData() {
  let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) // перетворюємо валідний рядок JSON в об"єкт
  if (savedData) {
    email.value = savedData.email;
    message.value = savedData.message;
  }
}
