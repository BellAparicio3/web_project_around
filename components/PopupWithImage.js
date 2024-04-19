import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  //Constructor heredado de la clase Popup
  constructor(popupSelector, buttonElement) {
    super(popupSelector, buttonElement);
    this.popupImagen = this.popupElement.querySelector(".popup__imagen");
    this.popupName = this.popupElement.querySelector(".popup__name");
  }
  //Se redefine el metodo open de la clase padre
  open(link, name) {
    super.open();
    this.popupImagen.src = link;
    this.popupImagen.alt = name;
    this.popupName.textContent = name;
  }
}
