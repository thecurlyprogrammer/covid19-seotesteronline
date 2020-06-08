export default class Template {
  append(parent, html) {
      if(!(parent instanceof HTMLDivElement)) {
          throw new Error('parent must be a HTMLDivElement object');
      }

      if(typeof html !== 'string') {
          throw new Error('html must be a string');
      }

      // Append della tabella sul div con id test
      const main = document.getElementById('test');
      main.innerHTML = html;
  }

}

class Table extends Template {
  columns = [];
  rows = [];
  parent;

  constructor (parent) {
    super('test');
      if(!this.isAValidHtmlElement(parent)) {
          throw new Error('parent must be a HTMLDivElement object');
      }

      this.parent = parent;
  }

  print() {
      const init = '<table>';
      const rows = this.rows;
      const end = '</table>';
      const htmlTable = init + rows + end;
      console.log(htmlTable);
      this.append(this.parent, htmlTable);
  }

  addColumn(columnName, isSortable = false) {
      if(typeof columnName !== 'string') {
          throw new Error('columnName must be a string');
      }

      columns.push({
          name: columnName,
          isSortable,
      })
  }

  addRow(row) {
      if(typeof row !== 'string') {
          throw new Error('row must be a string');
      }

      this.rows.push(row);
  }

  isAValidHtmlElement(parent) {
      return parent instanceof HTMLDivElement || parent instanceof HTMLBodyElement;
  }
}

const parent = document.createElement("div");

const myTable = new Table(parent)
myTable.addRow('<tr><td>Data 1</td></tr>');
myTable.print();
