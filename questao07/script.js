const form = document.querySelector('form');

const { 0: inputName, 1: inputEmail } = form;
// console.log(form);

/**
 * @param {HTMLInputElement | HTMLTextAreaElement} inputElement
 * @param {string} validityMessage
 */
const customValidity = (inputElement, validityMessage) => {
  /** @type {HTMLSpanElement} */
  const validitySpan = inputElement.nextElementSibling;
  inputElement.setCustomValidity(validityMessage);
  validitySpan.innerText = validityMessage;
};

inputName.addEventListener('input', (e) => {
  /** @type {string} */
  const value = e.target.value;

  if (value.length < 3) {
    customValidity(e.target, 'Nome deve conter pelo menos 3 caracteres');
  } else {
    customValidity(e.target, '');
  }
});

inputEmail.addEventListener('input', (e) => {
  /** @type {string} */
  const value = e.target.value;

  if (!value.endsWith('@alu.ufc.br')) {
    customValidity(e.target, "email deve ser institucional: '@alu.ufc.br'");
  } else {
    customValidity(e.target, '');
  }
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();

  alert('Agradecemos seu Feedback!');
});
