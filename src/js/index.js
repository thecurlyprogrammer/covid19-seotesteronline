import 'angular';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-messages';
import '../css/style.scss';
import 'angular-material/angular-material.css';
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
            const day = splitData(data.Date);
            $scope.date = day;
            $scope.global = data.Global;
            $scope.countries = data.Countries;
            $scope.$apply()
        })
        .catch(() => {
            console.log('Error')
        });
});

// Funzione che splitta la data e la converte
const splitData = (x) => {
    let string = x.split('T');
    let left = string[0];
    let split = left.split('-');
    let day = split[2];
    let month = split[1];
    let year = split[0];
    let result = 'Data: ' + day + '-' + month + '-' + year;
	return result;
};