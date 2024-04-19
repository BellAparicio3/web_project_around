export class Section {
  constructor({ items, renderer }, selector) {
    this.items = items;
    this.renderer = renderer;
    this.card = document.querySelector(selector);
  }
  addItem(element) {
    this.card.prepend(element);
  }
  renderer() {
    this.items.forEach((item) => {
     const element = this.renderer(item);
     this.addItem(element);
    });
  }
}


