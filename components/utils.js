import { Card } from "./Card.js";
import { Popup } from "./Popup.js";
import { UserInfo } from "./UserInfo.js";
import { PopupWithForm } from "./PopupWithForm.js";
// B O T O N   A G R E G A R

const profileButtonEdit = document.querySelector(".profile__button-edit");
const popupCloseEdit = document.querySelector(".popup__close-edit");
const profileInfo = document.querySelector(".profile__info");
const profileNames = profileInfo.querySelector("#profile__name");
const profileAboutUs = profileInfo.querySelector("#profile__aboutme");

// M O D A L   P A R A   E D I T A R F O R M U L A R I O
const popupEdit = document.querySelector(".popup__edit");
export const formEdit = document.querySelector(".form__edit");
export const nameUser = formEdit.querySelector("#nameUser");
export const aboutMe = formEdit.querySelector("#aboutMe");

// M O D A L  P A R A   A G R E G A R
const popupAdd = document.querySelector(".popup__add");
export const cards = document.querySelector(".cards");
/* B O T O N   A G R E G A R  I M A G E N E S   */
const profileButtonAdd = document.querySelector(".profile__button-add");
export const templateCard = document.querySelector(".template__card");
export const formElement = document.querySelector(".form__add");
export const title = formElement.querySelector("#title");
export const imageUrl = formElement.querySelector("#imageUrl");
const buttonCreate = formElement.querySelector("#boton__create");

// B O T O N   P A R A   C E R R A R   E L   P O P U P
const popupCloseAdd = document.querySelector(".popup__close-add");
// M O S T R A R   L A   I M A G E N   E N  P O P U P
export const popupImages = document.querySelector(".popup__images");
export const popupImagen = popupImages.querySelector(".popup__imagen");
export const popupName = popupImages.querySelector(".popup__name");
// B O T O N   C E R R A R   I M A G E N E S
export const popupClose = document.querySelector(".popup__close-images");

// Creando instancias de clases
const popUpAdd = new PopupWithForm(".popup__add", ".popup__close-add");
const openPopupProfile = new Popup(".popup__edit", ".popup__close-edit");
const userInfo = new UserInfo("#profile__name", "#profile__aboutme");

//FUNCION PARA ABRIR EL FORMULARIO EDIT
export function openProfileEdit(e) {
  openPopupProfile.open();
  userInfo.getUserInfo();
}

export function saveProfileInfo(e) {
  // Solo los submit llevan preventDefault
  e.preventDefault();
  userInfo.setUserInfo({ name: nameUser, aboutUs: aboutMe });
  openPopupProfile.close();
}

export function closeProfileEdit() {
  openPopupProfile.setEventListeners();
}

// A G R E G A R   T A R J E T A S   D E   I M A G E N E S
export function buttonAddCards() {
  popUpAdd.setEventListeners();
}

// ELIMINAR POPUP FORMULARIO CARDS
export function closeFormAdd() {
  popUpAdd.close();
}

// F U N C I O N   A G R E G A R   T A R J E T A
export function addCards(e) {
  e.preventDefault();
  const addCard = new Card(title.value, imageUrl.value, templateCard);
  // A Ñ A D E   L A   T A R J E T A   A L  P R I N C I P I O   C O N PREPEND
  cards.prepend(addCard.generateCard());
  popUpAdd.close();
  buttonCreate.classList.add("button_inactive");
}

profileButtonAdd.addEventListener("click", buttonAddCards);
formElement.addEventListener("submit", addCards);
popupCloseAdd.addEventListener("click", closeFormAdd);

profileButtonEdit.addEventListener("click", openProfileEdit);
formEdit.addEventListener("submit", saveProfileInfo);
popupCloseEdit.addEventListener("click", closeProfileEdit);
