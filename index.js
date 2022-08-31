const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');
const popupOpen = document.querySelector('.slider__info__btn');
const checkboxAgreement = popup.querySelector('#agreement');
const submitPopup = popup.querySelector('.feedback-form__submit')

const POPUP_ACTIVE = 'popup--active';

// закрытие и открытие попапа
function closePopup() {
  popup.classList.remove(POPUP_ACTIVE);
}

function switchDisabled () {
    submitPopup.disabled = !submitPopup.disabled
}

if (popupOpen) {
  popupOpen.addEventListener('click', () => {
    if (popup) {
      popup.classList.add(POPUP_ACTIVE);
    }
  });
}

if (popup) {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains(POPUP_ACTIVE)) {
      closePopup();
    }
  });
}

if (popupClose) {
  popupClose.addEventListener('click', (e) => {
    if (popup) {
      e.preventDefault();
      closePopup();
    }
  });
}

// активировать кнопку формы
checkboxAgreement.addEventListener('click', switchDisabled)
