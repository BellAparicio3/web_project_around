import {
  templateCard,
  popupClose,
  buttonConfirm,
  buttonCloseConfirm,
} from "./utils.js";

import { PopupWithImage } from "./PopupWithImage.js";
import { Popup } from "./Popup.js";
import { api } from "../src/index.js";

const popUpImages = new PopupWithImage(
  ".popup__images",
  ".popup__close-images"
);
const popupConfirm = new Popup(
  ".popup__confirm",
  ".popup__close-confirm"
);

export class Card {
  constructor(name, link, templateCard, handleCardClick, id, likes, userId) {
    this.name = name;
    this.link = link;
    this.templateCard = templateCard;
    this.handleCardClick = handleCardClick;
    this.id = id;
    this.likes = likes;
    this.userId = userId;
  }

  _getTemplate() {
    this.card = templateCard.cloneNode(true).content.querySelector(".card");
  }

  // Propiedades de la carta
  _setProperties() {
    this.cardImg = this.card.querySelector(".card__img");
    this.cardName = this.card.querySelector(".card__name");
    this.cardLike = this.card.querySelector(".card__like");
    this.likeButton = this.card.querySelector(".card__like_count");
    this.buttonTrash = this.card.querySelector(".card__trash");
    
    if (this.userId === "5f1ef69bb878ef5b06364d6a") {
      this.buttonTrash;
    }else{
      this.buttonTrash.remove();
    }
    
    this.cardImg.src = this.link;
    this.cardImg.alt = this.name;
    this.cardName.textContent = this.name;
    this.likeButton.textContent = this.likes.length;
    if (this.likes.some(item=> item._id === "5f1ef69bb878ef5b06364d6a")) {
      this.cardLike.classList.toggle("card__like-active");
    }
  }

  _handleLike() {
    if (!this.likes.some(item => item._id === "5f1ef69bb878ef5b06364d6a")) {
      api.likeCard(this.id).then((data) => {
        this.likeButton.textContent = data.likes.length;
        this.cardLike.classList.toggle("card__like-active");
      });
    } else {
      api.dislikeCard(this.id).then((data) => {
        this.likeButton.textContent = data.likes.length;
        this.cardLike.classList.toggle("card__like-active");
      });
    }
  }

  // E V E N T O   P A R A   M O S T R A R   L A   I M A G E N   S E L E C C I O N A D A
  _handleOpenImagesPopup() {
    popUpImages.open(this.link, this.name);
  }

  _handleDelete() {
    api.deleteCard(this.id).then(this.card.remove(this.card));
    popupConfirm.close();
  }

  // MUESTRA EL POPUP PARA CONFIRMAR LA ELIMINACIÓN
  _handleOpenConfirmPopup() {
    popupConfirm.open();
    buttonConfirm.addEventListener("click", () => {
      this._handleDelete();
    });
  }

  // E V E N T O   P A R A   C E R R A R   L A   I M A G E N   S E L E C C I O N A D A
  _handleCloseImagesPopup() {
    popUpImages.setEventListeners();
  }

  _handleCloseConfirmPopup() {
    popupConfirm.close();
  }

  // SetEventListener, Establece los eventos->Se crean los eventos
  _setEventListeners() {
    this.buttonTrash.addEventListener("click", () => {
      this._handleOpenConfirmPopup();
    });
    this.cardLike.addEventListener("click", () => {
      this._handleLike();
    });
    this.cardImg.addEventListener("click", () => {
      this._handleOpenImagesPopup();
    });
    popupClose.addEventListener("click", () => {
      this._handleCloseImagesPopup();
    });
    buttonCloseConfirm.addEventListener("click", () => {
      this._handleCloseConfirmPopup();
    });

    this.regex = /\.(jpeg|jpg|png|gif|svg)$/i;
    if (this.cardImg.src === "" || !this.regex.test(this.cardImg.src)) {
      this.card.style.backgroundColor = "#000";
    }
  }

  generateCard() {
    this._getTemplate();
    this._setProperties();
    this._setEventListeners();

    return this.card;
  }
}
/* abstraccion
  CAPAS
  un clon de tarjeta
  una imagen con link
  un texto
  una imagen de bote de basura
  un like
  **METODOS**
  metodo para darle like a la tarjeta
  metodo para agregar tarjeta
  metodo para remover tarjeta
*/
