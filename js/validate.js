const showInputError = (formElement, inputElement, errorMessage, setting) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(setting.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(setting.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, setting) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(setting.inputErrorClass);
    errorElement.classList.remove(setting.errorClass);
    errorElement.textContent = "";
  };
  
  
  const checkInputValidity = (formElement, inputElement, setting) => {
    const inactiveElement = formElement.querySelector(setting.submitButtonSelector);
    if (!inputElement.validity.valid || inputElement=="") {
      showInputError(formElement, inputElement, inputElement.validationMessage, setting);
      inactiveElement.classList.add(setting.inactiveButtonClass);
    } else {
      hideInputError(formElement, inputElement, setting);
      inactiveElement.classList.remove(setting.inactiveButtonClass);
    }
  };
  
  const setEventListeners = (formElement, setting) => {
    const inputList = Array.from(formElement.querySelectorAll(setting.inputSelector));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement, setting);
      });
    });
  };
  const enableValidation = (setting) =>{
    const formList = Array.from(document.querySelectorAll(setting.formSelector));
    formList.forEach((formElement)=>{
      formElement.addEventListener("submit", (evt) =>{
        evt.preventDefault();
      });
      setEventListeners(formElement, setting);
    });
  };
  
  
  
  // O B J E T O S   D E   V A L O R E S   D I N A M I C O S
  const saveForm = {
    formSelector: ".form__edit",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: ".button_inactive",
    inputErrorClass: ".form__input_type_error",
    errorClass: ".form__input_error",
  };
  
  const addForm = {
    formSelector: ".form__add",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: ".button_inactive",
    inputErrorClass: ".form__input_type_error",
    errorClass: ".form__input-error",
  };
  // L L A M A D A  A  L A   F U N C I O N
  enableValidation(saveForm);
  enableValidation(addForm);
  