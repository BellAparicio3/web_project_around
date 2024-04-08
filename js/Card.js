import {
    templateCard,popupCloseImages, popupImages, cards
  } from "./utils.js";
  
  // C A R G A R   I M A G E N E S  I N I C I A L E S   A   H T M L
  export const initialCards = [
    {
      name: "Mountains",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    },
    {
      name: "Colors",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    },
    {
      name: "Birhat",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    },
    {
      name: "Parque Nacional",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    },
  ];
  
  export class Card {
    constructor(name, link, templateCard) {
      this.name = name;
      this.link = link;
      this.templateCard = templateCard;
    }
  
    _getTemplate() {
      this.card = templateCard.cloneNode(true).content.querySelector(".card");
    }
  
    _setProperties() {
      this.cardImg = this.card.querySelector(".card__img");
      this.cardName = this.card.querySelector(".card__name");
      this.cardLike = this.card.querySelector(".card__like");
      this.buttonTrash = this.card.querySelector(".card__trash");
  
      this.cardImg.src = this.link;
      this.cardImg.alt = this.name;
      this.cardName.textContent = this.name;
    }
  
    // Handler cuando se ejecuta una función
    _handleDelete() {
      this.card.remove();
    }
  
    _handleLike() {
      this.cardLike.classList.toggle("card__like-active");
    }
  
    // E V E N T O   P A R A   M O S T R A R   L A   I M A G E N   S E L E C C I O N A D A
    _handleOpenImagesPopup() {
      this.popupImages = document.querySelector(".popup__images");
      this.popupImages.classList.add("popup__opened");
      this.popupImagen = this.popupImages.querySelector(".popup__imagen");
      this.popupName = this.popupImages.querySelector(".popup__name");
      this.popupImagen.src = this.link;
      this.popupImagen.alt = this.name;
      this.popupName.textContent = this.name;
    }
  
    // E V E N T O   P A R A   C E R R A R   L A   I M A G E N   S E L E C C I O N A D A
    _handleCloseImagesPopup() {
      popupImages.classList.remove("popup__opened");
    }
  
    // SetEventListener, Establece los eventos->Se crean los eventos
    _setEventListeners() {
      this.buttonTrash.addEventListener("click", () => {
        this._handleDelete();
      });
      this.cardLike.addEventListener("click", () => {
        this._handleLike();
      });
      this.cardImg.addEventListener("click", () => {
        this._handleOpenImagesPopup();
      });
      popupCloseImages.addEventListener("click", () => {
        this._handleCloseImagesPopup();
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
  
  // C A R G A N D O   I M A G E N E S  E N   E L   C O N T A I N E R
  initialCards.forEach(function (item) {
    const card = new Card(item.name, item.link, item.templateCard);
    cards.append(card.generateCard());
  });
  
  
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
  