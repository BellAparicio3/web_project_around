import { Popup } from "./Popup.js";

//El valor que tiene el inpu debe de ser colocado en el src del avatar
export class PopupUpdate extends Popup {
  constructor(popupSelector, buttonElement) {
    super(popupSelector, buttonElement);
    this.formElement = this.popupElement.querySelector(".form__update");
  }
  // Se restablecen los campos del formulario al cerrar el popup
  close() {
    super.close();
    this.formElement.reset();
  }
}