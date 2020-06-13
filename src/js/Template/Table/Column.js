export default class Column {
  name = '';
  isSortable = false;

  constructor(header) {
      if (typeof header.name !== 'string' || header.name == '') {
          throw new Error('name must be a string');
      }

      this.name = header.name;
      this.isSortable = header.isSortable;
  }

  setSortable(isSortable) {
      if (typeof isSortable !== 'boolean') {
          throw new Error('isSortable must be a boolean');
      }
      // console.log(this.isSortable);
      return this.isSortable = isSortable;
  }

  getName(){
    // console.log('Nome ' + this.name);
    return this.name;
  }

  getHtml(){
    return [this.getName(), this.setSortable(this.isSortable)];
  }
}
