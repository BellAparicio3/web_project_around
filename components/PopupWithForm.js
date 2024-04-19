import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, buttonElement, handleSubmitForm) {
    super(popupSelector, buttonElement);
    this.formElement = this.popupElement.querySelector(".form__add");
    //this.inputElement = this.inputElement;
    this.handleSubmitForm = handleSubmitForm;
  }
  //Recopila los valores de los campos de entrada del formulario
  _getInputValues() {
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
  //Se agrega controlador de eventos de envio del form
  setEventListeners() {
    // llamando al metodo de la clase padre ejecutando a ambos
    this.formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmitForm(this._getInputValues());
      super.setEventListeners();
    });
  }
  // Se restablecen los campos del formulario al cerrar el popup
  close() {
    super.close();
    this.formElement.reset();
  }
}
