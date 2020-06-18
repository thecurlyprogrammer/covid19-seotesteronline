import '../scss/style.scss';
import Global from '../js/Template/Global/Global.js';
import Table from '../js/Template/Table/Table.js';
import Row from '../js/Template/Table/Row.js';
import Column from '../js/Template/Table/Column.js';

import img1 from '../assets/icons/01.svg';
import img2 from '../assets/icons/02.svg';
import img3 from '../assets/icons/03.svg';
import img4 from '../assets/icons/04.svg';
import img5 from '../assets/icons/05.svg';
import img6 from '../assets/icons/06.svg';

const axios = require('axios');
const url = 'https://api.covid19api.com/summary';

const parent = document.createElement("div");
const global = new Global(parent);
const table = new Table(parent);

async function test(url) {
    let request;
    try {
        request = await axios.get(url);
        localStorage.setItem('newConfirmed', request.data.Global.NewConfirmed);
        const result = await Promise.all([
          fetch(createNav(request.data.Date)),
          fetch(createGlobal(request.data.Global)),
          fetch(createCountries(request.data.Countries))
        ]);
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
    const data = response;
    document.getElementById('data').innerHTML = splitData(data);
    return
}

// Table head, Object with name & icon
const header = [
    {
        name: 'Country',
        isSortable: true,
    },
    {
        name: 'New Confirmed',
        isSortable: false,
    },
    {
        name: 'Total Confirmed',
        isSortable: false,
    },
    {
        name: 'New Deaths',
        isSortable: true,
    },
    {
        name: 'Total Deaths',
        isSortable: true,
    },
    {
        name: 'New Recovered',
        isSortable: true,
    },
    {
        name: 'Total Recovered',
        isSortable: true,
    }
]

const createGlobal = (response) => {
    const data = response;
    const globalData = [
        {
            data: data.NewConfirmed,
            title: 'Nuovi Confermati',
            icon: 1,
        },
        {
            data: data.TotalConfirmed,
            title: 'Totale Confermati',
            icon: 2,
        },
        {
            data: data.NewDeaths,
            title: 'Nuovi Decessi',
            icon: 3,
        },
        {
            data: data.TotalDeaths,
            title: 'Totale Confermati',
            icon: 4,
        },
        {
            data: data.NewRecovered,
            title: 'Nuovi Ricoveri',
            icon: 5,
        },
        {
            data: data.TotalRecovered,
            title: 'Totale Confermati',
            icon: 6,
        }
    ]
    globalData.forEach(addGlobal);
    const setBoxes = global.setBox();
    global.append(parent, setBoxes);
}

const addGlobal = (data) => {
    global.addBox(data.data, data.title ,data.icon);
}

// Funzione che crea la tabella
const createCountries = (response) => {
    const countries = response;
    header.forEach(addHeaderToTable);
    countries.forEach(addRowToTable);
    const addTable = table.printTable();
    table.append(parent, addTable);
}

const addHeaderToTable = (header) => {
    const myColumn = new Column(header);
    const [x, y] = myColumn.getHtml();
    table.addColumn(x, y);
}

const addRowToTable = (countries) => {
    const myRow = new Row(countries);
    const getRow = myRow.getHtml();
    table.addRow(getRow);
}

// Funzione che splitta la data e la converte
const splitData = (x) => {
    const string = x.split('T');
    const left = string[0];
    const split = left.split('-');
    const day = split[2];
    const month = split[1];
    const year = split[0];
    const result = 'Data: ' + day + '-' + month + '-' + year;
	return result;
};

// numeric value parameter
function sortTest(n) {
    table.sortRows(n);
    const addTable = table.printTable();
    table.append(parent, addTable);
}

window.sortTest = sortTest;