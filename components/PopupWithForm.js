import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, buttonElement, handleSubmitForm) {
    super(popupSelector, buttonElement);
    this.formElement = this.popupElement.querySelector(".forms");//clase general 
    this.inputList = this.popupElement.querySelectorAll(".form__input")
    this.handleSubmitForm = handleSubmitForm;
  }
  //Recopila los valores de los campos de entrada del formulario
  _getInputValues() {
    this.formValues = {}
    this.inputList.forEach((inputElement) => {
      this.formValues[inputElement.name] = inputElement.value;
    });
    return this.formValues;
  }
  //Se agrega controlador de eventos de envio del form
  setEventListeners() {
    // llamando al metodo de la clase padre ejecutando a ambos
    super.setEventListeners();
    this.formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmitForm(this._getInputValues());
      this.close();
    });
  }
  // Se restablecen los campos del formulario al cerrar el popup
  close() {
    super.close();
    this.formElement.reset();
  }
}
