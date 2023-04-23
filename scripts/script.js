//Попап профиля
const editButton = document.querySelector(".profile__edit-button");
const popupOpener = document.querySelector(".popup_profile");
const formElement = popupOpener.querySelector(".popup__form");
const nameInput = popupOpener.querySelector(".popup__field_value_name");
const jobInput = popupOpener.querySelector(".popup__field_value_description");
const popupButtonClose = popupOpener.querySelector(".popup__close");
const valueName = document.querySelector(".profile__title");
const valueJob = document.querySelector(".profile__subtitle");
//Разворот картинки
const bigImage = document.querySelector(".photo");
const closePhotoButton = document.querySelector(".photo__close");
const photoImg = document.querySelector(".photo__image");
const photoFigcaption = document.querySelector('.photo__figcaption');
//Попап и список карточек
const popupCard = document.querySelector(".popup_card");
const formCard = popupCard.querySelector(".popup__form");
const nameInputCard = popupCard.querySelector(".popup__field_value_name");
const urlInputCard = popupCard.querySelector(".popup__field_value_description");
const popupButtonCardClose = popupCard.querySelector(".popup__close");
const addButton = document.querySelector(".profile__add-button");
const cardSection = document.querySelector(".elements");
const cardTemplate = document.querySelector("#card-template").content;
const initialCards = [
  {
    name: "Карачаевск",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
//открытие попапов
function popupOpen() {
  popupOpener.classList.add("popup_opened");
  nameInput.value = valueName.textContent;
  jobInput.value = valueJob.textContent;
}
function popupCardOpen() {
  popupCard.classList.add("popup_opened");
}
// закрытие попапов
function popupClose() {
  popupOpener.classList.remove("popup_opened");
}

function popupCardClose() {
  popupCard.classList.remove("popup_opened");
}
//Сохранение значений
function formSubmitHandler(evt) {
  evt.preventDefault();

  valueName.textContent = nameInput.value;
  valueJob.textContent = jobInput.value;

  popupClose();
}

//Взаимодействие с карточками базовыми
initialCards.forEach(function (element) {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".card__title").textContent = element.name;
  cardElement.querySelector(".card__image").src = element.link;
  cardElement
    .querySelector(".card__card-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__card-button_active");
    });
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", function (evt) {
      evt.target.closest(".card").remove();
    });
  cardElement
    .querySelector(".card__image")
    .addEventListener("click", function () {
      photoImg.src = element.link;
      photoFigcaption.textContent = element.name;
      bigImage.classList.add("photo_opened");
    });
  cardElement
    .querySelector(".card__image")
    .addEventListener("click", function () {
      closePhotoButton.classList.remove("photo_opened");
    });
  cardSection.append(cardElement);
});

// Взаимодействие с карточками добавленными
function addCard(evt) {
  evt.preventDefault();

  const newCardElement = cardTemplate.querySelector(".card").cloneNode(true);
  newCardElement.querySelector(".card__title").textContent =
    nameInputCard.value;
  newCardElement.querySelector(".card__image").src = urlInputCard.value;
  newCardElement
    .querySelector(".card__card-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__card-button_active");
    });
  newCardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", function (evt) {
      evt.target.closest(".card").remove();
    });
  newCardElement
    .querySelector(".card__image")
    .addEventListener("click", function () {
      photoFigcaption.textContent = nameInputCard.value;
      photoImg.src = urlInputCard.value;
      bigImage.classList.add("photo_opened");
    });
  newCardElement
    .querySelector(".card__image")
    .addEventListener("click", function () {
      closePhotoButton.classList.remove("photo_opened");
    });
  cardSection.prepend(newCardElement);

  popupCardClose();
}
//Разворот карточки
function openImg() {
  bigImage.classList.add("photo_opened");
}
function closeImg() {
  bigImage.classList.remove("photo_opened");
}
// Слушатель добавления карточки
formCard.addEventListener("submit", addCard);
// Слушатель открыть/закрыть попапы
addButton.addEventListener("click", popupCardOpen);
editButton.addEventListener("click", popupOpen);
popupButtonClose.addEventListener("click", popupClose);
popupButtonCardClose.addEventListener("click", popupCardClose);
//Сохранение значений профиля
formElement.addEventListener("submit", formSubmitHandler);
//Разворот карточки
closePhotoButton.addEventListener("click", closeImg);
