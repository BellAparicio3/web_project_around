// Importando clases
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  formElement,
  formEdit,
} from "./utils.js";



// O B J E T O S   D E   V A L O R E S   D I N A M I C O S
const saveForm = {
  formSelector: ".form__edit",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input_error",
};

const addForm = {
  formSelector: ".form__add",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error",
};
// Instancias de formValidator
const formCard = new FormValidator(formElement, addForm);
formCard.enableValidation();
const formProfile = new FormValidator(formEdit, saveForm);
formProfile.enableValidation();
