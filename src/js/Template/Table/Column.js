export default class Column {
  name = '';
  isSortable = false;

  constructor(name, isSortable) {
      if (typeof name !== 'string' || name == '') {
          throw new Error('name must be a string');
      }

      this.name = name;
      this.isSortable = isSortable;
  }

  setSortable(isSortable) {
      if (typeof isSortable !== 'boolean') {
          throw new Error('isSortable must be a boolean');
      }

      return this.isSortable = isSortable;
  }

  getName(){
    // console.log('Nome ' + this.name);
    return this.name;
  }

  getHtml(){
    return {
      name: this.getName(),
      isSortable: this.setSortable(this.isSortable)
    };
  }
}
