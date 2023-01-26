
let editButton = document.querySelector(".profile__edit-button");
let popupOpener = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form"); //работает
let nameInput = document.querySelector(".popup__field_value_name");
let jobInput = document.querySelector(".popup__field_value_description");
let valueName = document.querySelector(".profile__title");
let valueJob = document.querySelector(".profile__subtitle");
let popupButtonClose = document.querySelector(".popup__close");
//открытие попапа
function popupOpen() {
  popupOpener.classList.add("popup_opened");
  nameInput.value = valueName.textContent;

  jobInput.value = valueJob.textContent;
}
// закрытие попапа
function popupClose() {
  popupOpener.classList.remove("popup_opened");
}
//Сохранение значений
function formSubmitHandler(evt) {
  evt.preventDefault();

  valueName.textContent = nameInput.value;

  valueJob.textContent = jobInput.value;

  popupClose();
}
editButton.addEventListener("click", popupOpen);
popupButtonClose.addEventListener("click", popupClose);
formElement.addEventListener("submit", formSubmitHandler);
