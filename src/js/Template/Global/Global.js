// Classe che serve per la gestione dei dati globali.

export default class Global {

  boxes = [];
  formattedBoxes = '';
  parent;

  constructor(parent) {
    if (!this.isAValidHtmlElement(parent)) {
      throw new Error('parent must be a HTMLDivElement');
    }

    this.parent = parent;
  }

  append = (parent, html) => {
    if (!(parent instanceof HTMLDivElement)) {
      throw new Error('parent must be a HTMLDivElement object');
    }

    if (typeof html !== 'string') {
      throw new Error('html must be a string');
    }

    const main = document.getElementById('sectionGlobal');
    main.innerHTML = html;
  }

  setBox() {
    let formatX = '';
    let counter = 1;
    for (const box of this.boxes) {
      formatX += `
      <div class="globalItem">
        <img src="src/assets/icons/0${counter}.svg">
        <div class="itemTitle">${box.title}</div>
        <div class="itemData">${box.value}</div>
      </div>`;
      counter += 1;
    }
    return formatX;
  }

  formatBoxes() {
    this.formattedBoxes += `
    <div class="globalItem">
      <img src="src/assets/icons/0${counter}.svg">
      <div class="itemTitle">${boxes.title}</div>
      <div class="itemData">${boxes.value}</div>
    </div>`;
    counter += 1;
  }

  addBox = (columnValue, columnTitle, columnImg) => {
    console.log(columnValue, columnTitle, columnImg);
    if (typeof columnTitle != 'string') {
      throw new Error('columnTitle must be a string');
    }

    if (typeof columnValue != 'number') {
      throw new Error('columnValue must be a numeric value');
    }

    this.boxes.push({
      title: columnTitle,
      value: columnValue,
      img: columnImg
    });
    console.log(this.boxes);
  }

  // Verifico se il parent è istanza di HTMLDiv e HTMLBody
  isAValidHtmlElement = (parent) => {
    return parent instanceof HTMLDivElement || parent instanceof HTMLBodyElement;
  }

}
