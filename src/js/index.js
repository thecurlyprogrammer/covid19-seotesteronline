import '../scss/style.scss';

import img1 from '../assets/icons/01.svg';
import img2 from '../assets/icons/02.svg';
import img3 from '../assets/icons/03.svg';
import img4 from '../assets/icons/04.svg';
import img5 from '../assets/icons/05.svg';
import img6 from '../assets/icons/06.svg';

const axios = require('axios');

// Funzione che effettua la richiesta
async function getData() {
    try {
        const response = await axios.get('https://api.covid19api.com/summary');
        // console.log(response);
        let data = response.data.Date;
        document.getElementById('data').innerHTML = splitData(data);
        createGlobal(response);
        createCountries(response);
    } catch (error) {
        console.error(error);
    }
}

// Funzione che crea la sezione global
function createGlobal(response) {
    const global = response.data.Global;
    const container = document.createElement("div");
    const globalData = [global.NewConfirmed, global.TotalConfirmed, global.NewDeaths, global.TotalDeaths, global.NewRecovered, global.TotalRecovered];
    const titleData = ['Nuovi Confermati', 'Totale Confermati', 'Nuovi Decessi', 'Totale Decessi', 'Nuovi Ricoveri', 'Totale Ricoveri'];
    const itemCount = globalData.length;
    for (let i = 0; i < itemCount; i++){

        let item = document.createElement("div");
        item.setAttribute('class', 'globalItem');

        let images = document.createElement("img");
        images.src = `src/assets/icons/0` + (i+1) + `.svg`;

        let title = document.createElement("div");
        title.setAttribute('class', 'itemTitle');
        title.innerHTML = titleData[i];

        let value = document.createElement("div");
        value.setAttribute('class', 'itemData');
        value.innerHTML = globalData[i]

        item.appendChild(images);
        item.appendChild(title);
        item.appendChild(value)
        container.appendChild(item);
    }
    
    const divContainer = document.getElementById("sectionGlobal");
    divContainer.innerHTML = "";
    divContainer.appendChild(container);
}

// Funzione che crea la tabella
function createCountries(response) {
    const countries = response.data.Countries;
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
            th.onclick = function() { sortTable(0) };
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

getData();
