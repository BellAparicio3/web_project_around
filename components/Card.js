import {
  templateCard,
  popupClose,
  buttonConfirm,
  buttonCloseConfirm,
  likeButton
} from "./utils.js";

import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithConfirmation } from "./PopupWithConfirmation .js";
import { api } from "../src/index.js";

let count = 0;
const popUpImages = new PopupWithImage(
  ".popup__images",
  ".popup__close-images"
);
const popupConfirm = new PopupWithConfirmation(
  ".popup__confirm",
  ".popup__close-confirm"
);


export class Card {
  constructor(name, link, templateCard, handleCardClick) {
    this.name = name;
    this.link = link;
    this.templateCard = templateCard;
    this.handleCardClick = handleCardClick;
  }

  _getTemplate() {
    this.card = templateCard.cloneNode(true).content.querySelector(".card");
  }
  // Propiedades de la carta
  _setProperties() {
    this.cardImg = this.card.querySelector(".card__img");
    this.cardName = this.card.querySelector(".card__name");
    this.cardLike = this.card.querySelector(".card__like");
    this.likeButton = this.card.querySelector(".card__like");
    this.buttonTrash = this.card.querySelector(".card__trash");

    this.cardImg.src = this.link;
    this.cardImg.alt = this.name;
    this.cardName.textContent = this.name;
  }

  _handleDelete(card) {
    api.deleteCard(this.card).then(this.card.remove.bind(this.card));

    popupConfirm.close();
  }

  updateCardLikes(cardElement, card) {
    const likesCount = cardElement.querySelector('.likes-count');
    const likeButton = cardElement.querySelector('.like-button');
    likesCount.textContent = card.likes.length;
    likeButton.textContent = card.likes.length > 0 ? '❤️' : '🖤';
  }

  _handleLike() {
    likeButton.addEventListener('click', () => {
      if (likeButton.textContent === '🖤') {
      api.likeCard(card._id)
        .then(updatedCard => {
          updateCardLikes(cardElement, updatedCard);
        })
        .catch(err => {
          console.error(err);
        });
      } 
      else {
      api.dislikeCard(card._id)
        .then(updatedCard => {
          updateCardLikes(cardElement, updatedCard);
        })
        .catch(err => {
          console.error(err);
        });
      }
    });
  }

  // E V E N T O   P A R A   M O S T R A R   L A   I M A G E N   S E L E C C I O N A D A
  _handleOpenImagesPopup() {
    popUpImages.open(this.link, this.name);
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
    this.likeButton.addEventListener("click", () => {
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

// creando instancias

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
