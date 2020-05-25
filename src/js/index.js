import '../css/style.scss';
import 'angular-material/angular-material.css';
import 'angular';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-messages';
import img1 from '../assets/icons/01.svg';
import img2 from '../assets/icons/02.svg';
import img3 from '../assets/icons/03.svg';
import img4 from '../assets/icons/04.svg';
import img5 from '../assets/icons/05.svg';
import img6 from '../assets/icons/06.svg';

// Url dell'API
let urlApi = 'https://api.covid19api.com/summary';

export const app = angular.module("covid19", ['ngMaterial', 'ngMessages']);

app.controller("test", ($scope) => {
    fetch(urlApi)
        .then(response => response.json())
        .then(data => {
            $scope.date = data.Date;
            $scope.global = data.Global;
            $scope.countries = data.Countries;
            $scope.$apply()
        });
});
