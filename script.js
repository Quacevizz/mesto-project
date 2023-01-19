//открытие попапа
let editButton = document.querySelector(".edit-button");
let popupOpener = document.querySelector(".popup");
let popupOpenerCheck = popupOpener.classList.contains("popup_opened");

function popupOpen() {
  popupOpener.classList.add("popup_opened");
}

editButton.addEventListener("click", popupOpen);

// закрытие попапа
let popupButtonClose = document.querySelector(".popup__close");

function popupClose() {
  popupOpener.classList.remove("popup_opened");
}

popupButtonClose.addEventListener("click", popupClose);

//Сохранение значений

let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector(".field_name");
let jobInput = document.querySelector(".field_description");

function formSubmitHandler(evt) {
  evt.preventDefault();

  document.querySelector(".profile__title").textContent = nameInput.value;
  document.querySelector(".profile__subtitle").textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener("submit", formSubmitHandler);
