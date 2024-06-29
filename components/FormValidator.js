export class FormValidator {
    constructor(formElement, setting) {
      this.formElement = formElement;
      this.formSelector = setting.formSelector;
      this.inputSelector = setting.inputSelector;
      this.submitButtonSelector = setting.submitButtonSelector;
      this.inactiveButtonClass = setting.inactiveButtonClass;
      this.inputErrorClass = setting.inputErrorClass;
      this.errorClass = setting.errorClass;
      console.log(formElement)
      this.buttonElement = this.formElement.querySelector(
        setting.submitButtonSelector
      );
      this.inputList = Array.from(
        this.formElement.querySelectorAll(this.inputSelector)
      );
    }
  
    _showInputError = (inputElement, errorMessage) => {
      this.errorElement = this.formElement.querySelector(
        `.${inputElement.id}-error`
      );
      inputElement.classList.add(this.inputErrorClass);
      this.errorElement.textContent = errorMessage;
      this.errorElement.classList.add(this.errorClass);
  
    };
  
    _hideInputError = (inputElement) => {
      this.errorElement = this.formElement.querySelector(
        `.${inputElement.id}-error`
      );
      inputElement.classList.remove(this.inputErrorClass);
      this.errorElement.classList.remove(this.errorClass);
      this.errorElement.textContent = "";
    };
  
    _checkInputValidity = (inputElement) => {
      if (!inputElement.validity.valid || inputElement == "") {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    };
  
    _hasInvalidInput = () => {
      return this.inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    };
  
    _toggleButtonState = () => {
      if (this._hasInvalidInput(this.inputList)) {
        this.buttonElement.classList.add(this.inactiveButtonClass);
      } else {
        this.buttonElement.classList.remove(this.inactiveButtonClass);
      }
    };
  
    _setEventListeners = () => {
      this.inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
        });
      });
      this._toggleButtonState();
    };
  
    enableValidation = () => {
      this.formList = Array.from(document.querySelectorAll(this.formSelector));
      this.formList.forEach((formElement) => {
        formElement.addEventListener("submit", (e) => {
          e.preventDefault();
        });
        this._setEventListeners();
      });
    };
  }
  