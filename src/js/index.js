import '../scss/style.scss';
import Test1 from './Template/index';

import img1 from '../assets/icons/01.svg';
import img2 from '../assets/icons/02.svg';
import img3 from '../assets/icons/03.svg';
import img4 from '../assets/icons/04.svg';
import img5 from '../assets/icons/05.svg';
import img6 from '../assets/icons/06.svg';

const axios = require('axios');
const url = 'https://api.covid19api.com/summary';

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
        console.log(request);
        console.log(result);
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
    var numberOfCountries = countries.length;

    if (numberOfCountries > 0) {

        // Creo la tabella
        var table = document.createElement("table");
        table.setAttribute('id', 'countriesTable');
        // Prendo l'header

        var col = [];
        for (var i = 0; i < numberOfCountries; i++) {
            for (var key in countries[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Table head
        var tHead = document.createElement("thead");

        // Creo la riga del table head
        var hRow = document.createElement("tr");
        // Aggiungo le colonne al table head

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = col[i];
            hRow.appendChild(th);
        }
        tHead.appendChild(hRow);
        table.appendChild(tHead);

        // Creo il table body
        var tBody = document.createElement("tbody");

        // Aggiungo le righe al tbody
        for (var i = 0; i < numberOfCountries; i++) {
            var bRow = document.createElement("tr"); // Creo un nuovo record
            for (var j = 0; j < col.length; j++) {
                var td = document.createElement("td");
                td.innerHTML = countries[i][col[j]];
                bRow.appendChild(td);
            }
            tBody.appendChild(bRow)
        }
        table.appendChild(tBody);

        // Aggiungo la tabella al div
        var divContainer = document.getElementById("countries");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
    return
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
