export default class Column {
  name = '';
  isSortable = false;

  constructor(name) {
      if (typeof name !== 'string' || name == '') {
          throw new Error('name must be a string');
      }

      this.name = name;
  }

  setSortable(isSortable) {
      if (typeof isSortable !== 'boolean') {
          throw new Error('isSortable must be a boolean');
      }

      this.isSortable = isSortable;
  }

  getName(){
    console.log('Nome ' + this.name);
    return this.name;
  }
}
