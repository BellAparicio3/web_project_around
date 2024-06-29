import { Card } from "./Card.js";
import { Popup } from "./Popup.js";
import { UserInfo } from "./UserInfo.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { PopupUpdate } from "./PopupUpdate.js";
import { api } from "../src/index.js";
// B O T O N   A G R E G A R
const profileButtonEdit = document.querySelector(".profile__button-edit");
const popupCloseEdit = document.querySelector(".popup__close-edit");
// M O D A L   P A R A   E D I T A R F O R M U L A R I O
export const formEdit = document.querySelector(".forms");
export const nameUser = formEdit.querySelector("#nameUser");
export const aboutMe = formEdit.querySelector("#aboutMe");
// M O D A L  P A R A   A G R E G A R
export const cards = document.querySelector(".cards");
/* B O T O N   A G R E G A R  I M A G E N E S   */
const profileButtonAdd = document.querySelector(".profile__button-add");
export const templateCard = document.querySelector(".template__card");
export const formElement = document.querySelectorAll(".forms");
export const title = formElement[1].querySelector("#title");
export const imageUrl = formElement[1].querySelector("#imageUrl");
//const buttonCreate = formElement.querySelector("#boton__create");
export const likeButton = document.querySelector(".card__like");

// B O T O N   P A R A   C E R R A R   E L   P O P U P PARA AGREGAR TARJETAS
const popupCloseAdd = document.querySelector(".popup__close-add");
// M O S T R A R   L A   I M A G E N   E N  P O P U P
export const popupImages = document.querySelector(".popup__images");
export const popupImagen = popupImages.querySelector(".popup__imagen");
export const popupName = popupImages.querySelector(".popup__name");
// B O T O N   C E R R A R   I M A G E N E S
export const popupClose = document.querySelector(".popup__close-images");
//POPUP CONFIRM
export const buttonCloseConfirm = document.querySelector(
  ".popup__close-confirm"
);
export const buttonConfirm = document.querySelector(".button__confirm");
//UPDATE AVATAR
const profileButtonUpdate = document.querySelector(".avatar__edition");
export const formUpdate = document.querySelector(".form__update");
const buttonCloseUpdate = document.querySelector(".popup__close-update");
//const updatePhoto = document.querySelector("#updatePhoto");
export const urlUpdate = document.querySelector(".avatar__imagen");
export const buttonUpdate = document.querySelector("#button__update");

// Creando instancias de clases
const popUpAdd = new PopupWithForm(".popup__add", ".popup__close-add", (data)=>{
});
export const userInfo = new UserInfo("#profile__name", "#profile__aboutme");
const popupProfile = new PopupWithForm(".popup__edit", ".popup__close-edit", (data)=>{
  api.editUserInfo(data.name, data.about).then((user) => {
    userInfo.setUserInfo({ nameUser: user.name, aboutUs: user.about });
  });
});
popupProfile.setEventListeners();
const updateAvatar = new PopupUpdate(".popup__update", ".popup__close-update");


//FUNCION PARA ABRIR EL FORMULARIO EDIT
export function openProfileEdit() {
  popupProfile.open();
}

export function saveProfileInfo(e) {
  // Solo los submit llevan preventDefault
  
}

export function closeProfileEdit() {
  popupProfile.setEventListeners();
}

// A G R E G A R   T A R J E T A S   D E   I M A G E N E S
export function buttonAddCards() {
  popUpAdd.open();
}

// ELIMINAR POPUP FORMULARIO CARDS
export function closeFormAdd() {
  popUpAdd.close();
}

function openUpdateAvatar() {
  updateAvatar.open();
}
//Actualizar Avatar
export function UpdateInfoAvatar(e) {
  e.preventDefault();
  api.updatePhotoProfile("users/me").then((data) => {
    data.avatar = urlUpdate.url;
  });
  updateAvatar.close();
}

function closeButtonUpdate() {
  updateAvatar.close();
}

// F U N C I O N   A G R E G A R   T A R J E T A
export function addCards(e) {
  e.preventDefault();
  const addCard = new Card(title.value, imageUrl.value, templateCard);
  api.addCard(title, imageUrl);
  // A Ñ A D E   L A   T A R J E T A   A L  P R I N C I P I O   C O N PREPEND
  cards.prepend(addCard.generateCard());
  popUpAdd.close();
  //buttonCreate.classList.add("button_inactive");
}

profileButtonAdd.addEventListener("click", buttonAddCards);
formElement[1].addEventListener("submit", addCards);
popupCloseAdd.addEventListener("click", closeFormAdd);

profileButtonEdit.addEventListener("click", openProfileEdit);
formEdit.addEventListener("submit", saveProfileInfo);
popupCloseEdit.addEventListener("click", closeProfileEdit);

//ACTUALIZAR AVATAR
profileButtonUpdate.addEventListener("click", openUpdateAvatar);
formUpdate.addEventListener("submit", UpdateInfoAvatar);
buttonCloseUpdate.addEventListener("click", closeButtonUpdate);
