import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, buttonElement) {
    super(popupSelector, buttonElement);
  }
}