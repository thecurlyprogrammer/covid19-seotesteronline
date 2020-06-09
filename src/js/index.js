import '../scss/style.scss';
import Template from './Template/Table.js';

import img1 from '../assets/icons/01.svg';
import img2 from '../assets/icons/02.svg';
import img3 from '../assets/icons/03.svg';
import img4 from '../assets/icons/04.svg';
import img5 from '../assets/icons/05.svg';
import img6 from '../assets/icons/06.svg';

const axios = require('axios');
const url = 'https://api.covid19api.com/summary';

const parent = document.createElement("div");
let table = new Template(parent)

async function test(url) {
    let request;
    try {
        request = await axios.get(url);
       // let utente = await fetch("/utente/" + userId);
        let result = await Promise.all([
          fetch(createNav(request.data.Date)),
          fetch(createGlobal(request.data.Global)),
          fetch(createCountries(request.data.Countries))
        ]);
        // console.log(request);
        // console.log(result);
        return {
          request,
          global: result[0],
          country: result[1]
        };
    } catch (error) {
        console.log(error);
    }
}

test(url);

function createNav(response){
    let data = response;
    document.getElementById('data').innerHTML = splitData(data);
    return
}

// Funzione che crea la sezione global
function createGlobal(response) {
    const global = response;
    const divContainer = document.getElementById("sectionGlobal");
    const globalData = [
        {
            data: global.NewConfirmed,
            title: 'Nuovi Confermati'
        },
        {
            data: global.TotalConfirmed,
            title: 'Totale Confermati'
        },
        {
            data: global.NewDeaths,
            title: 'Nuovi Decessi'
        },
        {
            data: global.TotalDeaths,
            title: 'Totale Confermati'
        },
        {
            data: global.NewRecovered,
            title: 'Nuovi Ricoveri'
        },
        {
            data: global.TotalRecovered,
            title: 'Totale Confermati'
        }
    ]

    globalData.forEach(myFunction);

    function myFunction(element, index) {
        let item = document.createElement("div");
        item.setAttribute('class', 'globalItem');

        let images = document.createElement("img");
        images.src = `src/assets/icons/0` + ( index + 1 ) + `.svg`;

        let title = document.createElement("div");
        title.setAttribute('class', 'itemTitle');
        title.innerHTML = element.title;

        let value = document.createElement("div");
        value.setAttribute('class', 'itemData');
        value.innerHTML = element.data;

        item.appendChild(images);
        item.appendChild(title);
        item.appendChild(value)
        divContainer.appendChild(item);
    }
    return
}

// Funzione che crea la tabella
function createCountries(response) {
    const countries = response;
    console.log(countries);
    countries.forEach(addToTable);

    const addTable = table.printTable();
    table.append(parent, addTable);

}

function addToTable(countries){
    table.addRow(countries.Country);
    //console.log(countries);
}

// Funzione che splitta la data e la converte
const splitData = (x) => {
    let string = x.split('T');
    let left = string[0];
    let split = left.split('-');
    let day = split[2];
    let month = split[1];
    let year = split[0];
    let result = 'Data: ' + day + '-' + month + '-' + year;
    // console.log('Data convertita' + ' ' + result);
	return result;
};
