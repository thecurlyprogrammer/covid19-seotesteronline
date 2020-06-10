export default class Row {
  country = 'pippo';
  newConfirmed = 0;
  totalConfirmed = 0;
  newDeaths = 0;
  totalDeaths = 0;
  newRecovered = 0;
  totalRecovered = 0;



  constructor(country, newConfirmed, totalConfirmed, newDeaths, totalDeaths, newRecovered, totalRecovered) {
      if (typeof country !== 'string' || country == '') {
          throw new Error('country must be a string');
      }

      this.country = country;
      this.newConfirmed = newConfirmed;
      this.totalConfirmed = totalConfirmed;
      this.newDeaths = newDeaths;
      this.totalDeaths = totalDeaths;
      this.newRecovered = newRecovered;
      this.totalRecovered = totalRecovered;

  }

  getCountry(){
    // console.log(this.country);
    return this.country;
  }

  getNewConfirmed(){
    // console.log(this.newConfirmed);
    return this.newConfirmed;
  }

  getTotalConfirmed(){
    // console.log(this.totalConfirmed);
    return this.totalConfirmed;
  }
  
  getNewDeaths(){
    // console.log(this.newDeaths);
    return this.newDeaths;
  }
  
  getTotalDeaths(){
    // console.log(this.totalDeaths);
    return this.totalDeaths;
  }
  
  getNewRecovered(){
    // console.log(this.newRecovered);
    return this.newRecovered;
  }
  
  getTotalRecovered(){
    // console.log(this.totalRecovered);
    return this.totalRecovered;
  }

  getAllData(){
    const row = '<tr><td>' + this.getCountry() + '</td>'
    +'<td>' + this.getNewConfirmed() + '</td>'
    +'<td>' + this.getTotalConfirmed() + '</td>'
    +'<td>' + this.getNewDeaths() + '</td>'
    +'<td>' + this.getTotalDeaths() + '</td>'
    +'<td>' + this.getNewRecovered() + '</td>'
    +'<td>' + this.getTotalRecovered() + '</td></tr>';
    // console.log(row);
    return row;
  }
}