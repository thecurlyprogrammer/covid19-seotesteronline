export default class Row {
  country = 'No Country';
  newConfirmed = 0;
  totalConfirmed = 0;
  newDeaths = 0;
  totalDeaths = 0;
  newRecovered = 0;
  totalRecovered = 0;

  constructor(country) {
      if (typeof country.Country !== 'string' || country.Country == '') {
          throw new Error('country must be a string');
      }

      this.country = country.Country;
      this.newConfirmed = country.NewConfirmed;
      this.totalConfirmed = country.TotalConfirmed;
      this.newDeaths = country.NewDeaths;
      this.totalDeaths = country.TotalDeaths;
      this.newRecovered = country.NewRecovered;
      this.totalRecovered = country.TotalRecovered;
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

  getHtml = () => {
    return {
      country: this.getCountry(),
      newConfirmed: this.getNewConfirmed(),
      totalConfirmed: this.getTotalConfirmed(),
      newDeaths: this.getNewDeaths(),
      totalDeaths: this.getTotalDeaths(),
      newRecovered: this.getNewRecovered(),
      totalRecovered: this.getTotalRecovered()
    };
  }
}