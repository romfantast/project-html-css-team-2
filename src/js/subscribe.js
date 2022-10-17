//  section subscribe
const sectionSubscribeInput = document.querySelector('.subscribe-form__input');
const sectionSubscribeButtons = document.querySelectorAll('.btn-accept');

for (let i = 0; i < sectionSubscribeButtons.length; i++) {
  sectionSubscribeButtons[i].onclick = disableBtn;
}

function disableBtn() {
  if (sectionSubscribeInput.value === '') {
    for (let i = 0; i < sectionSubscribeButtons.length; i++) {
      sectionSubscribeButtons[i].disabled = true;
    }
  } else if (sectionSubscribeInput != '') {
    for (let i = 0; i < sectionSubscribeButtons.length; i++) {
      sectionSubscribeButtons[i].disabled = false;
    }
  }
}
