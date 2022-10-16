(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    docBody: document.querySelector('body'),

    headerBtn: document.querySelector('.header-btn'),
    heroBtn: document.querySelector('.hero-button'),
    offeringsBtn: document.querySelector('.interactive-block__btn'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.headerBtn.addEventListener('click', toggleModal);
  refs.heroBtn.addEventListener('click', toggleModal);
  refs.offeringsBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.docBody.classList.toggle('_lock');
  }
})();

// ========== Validation in modal form =================

const input1 = document.querySelector('[data-input1]');
const input2 = document.querySelector('[data-input2]');
const input3 = document.querySelector('[data-input3]');
const hint = document.querySelector('.required-hint');
const spanHints = document.querySelectorAll('.span-hint');
const sentBtn = document.querySelector('.modal-form__btn');

function showHint() {
  if (input1.value === '' && input2.value === '' && input3.value === '') {
    sentBtn.disabled = true;
    hint.style.opacity = '1';
    hint.style.visibility = 'visible';

    for (let i = 0; i < spanHints.length; i++) {
      spanHints[i].style.display = 'block';
      spanHints[i].style.opacity = '1';
      spanHints[i].style.visibility = 'visible';
    }

    setTimeout(() => {
      sentBtn.disabled = false;
      hint.style.opacity = '0';
      hint.style.visibility = 'hidden';

      for (let i = 0; i < spanHints.length; i++) {
        spanHints[i].style.display = 'none';
        spanHints[i].style.opacity = '0';
        spanHints[i].style.visibility = 'hidden';
      }
    }, 3000);
  } else if (
    input1.value === '' ||
    input2.value === '' ||
    input3.value === ''
  ) {
    sentBtn.disabled = true;
    hint.style.opacity = '1';
    hint.style.visibility = 'visible';

    setTimeout(() => {
      sentBtn.disabled = false;
      hint.style.opacity = '0';
      hint.style.visibility = 'hidden';
    }, 3000);
  }
}

sentBtn.onclick = showHint;

// ========== Validation in modal form =================
