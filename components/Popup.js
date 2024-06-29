export class Popup {
  constructor(popupSelector, buttonElement) {
    this.popupElement = document.querySelector(popupSelector);
    this.closeButton = this.popupElement.querySelector(buttonElement);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // Metodo publicos
  open() {
    this.popupElement.classList.add("popup__opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this.popupElement.classList.remove("popup__opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  //Detectores de eventos boton de cierre popup y area sombreada
  setEventListeners() {
    this.closeButton.addEventListener("click", () => {
      this.close();
    });

    this.popupElement.addEventListener("click", (e) => {
      if (e.target === this.popupElement || e.target.popupCloseBotton) {
        this.close();
      }
    });
  }
}
