export class Section {
  constructor({ items, renderer }, templateCard) {
    this.items = items;
    this.renderer = renderer;
    this.templateCard = document.querySelector(templateCard);
  }
  renderer() {
    this.items.forEach((element) => {
      this.renderer(element);
    });
  }
  addItem(element) {
    this.templateCard.append(element);
  }
}
