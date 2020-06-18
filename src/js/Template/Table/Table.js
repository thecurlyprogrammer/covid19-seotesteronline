export default class Table {

    columns = [];
    // rows è un array di oggetti
    rows = [];
    parent;
    sortedRows = [];
    direction = 0;
    n = '';

    constructor(parent) {

        if (!this.isAValidHtmlElement(parent)) {
            throw new Error('parent must be a HTMLDivElement object');
        }

        this.parent = parent;
    }

    append(parent, html) {
        if (!(parent instanceof HTMLDivElement)) {
            throw new Error('parent must be a HTMLDivElement object');
        }

        if (typeof html !== 'string') {
            throw new Error('html must be a string');
        }

        // Append della tabella sul div con id test
        const main = document.getElementById('countries');
        main.innerHTML = html;
    }

    printTable() {
        const tableHeader = this.getHeader();
        const tableBody = this.getBody();
        // console.log(tableHeader);
        return `
        <table id="myTable">
            <thead>
            ${tableHeader}
            </thead>
            <tbody>
            ${tableBody}
            </tbody>
        </table>
        `;
    }

    getHeader() {
        let counter = 0;
        let formattedColumns = '';
        for (const column of this.columns) {
            if (!column || !column.name) {
                continue;
            }

            if (column.isSortable) {
                // console.log(column.name);
                formattedColumns += `<th onclick="sortTest('${column.name}')">${column.name} <i class="fas fa-sort-down"></i></th>`;
            } else {
                formattedColumns += `<th>${column.name}</th>`;
            }
            counter += 1;
        }
        // console.log(this.columns);
        return `<tr>${formattedColumns}</tr>`;
    }

    getBody() {
        let formattedRows = '';
        for (const row of this.rows) {
            formattedRows += `
            <tr>
                <td>${row.country}</td>
                <td>${row.newConfirmed}</td>
                <td>${row.totalConfirmed}</td>
                <td>${row.newDeaths}</td>
                <td>${row.totalDeaths}</td>
                <td>${row.newRecovered}</td>
                <td>${row.totalRecovered}</td>
            </tr>
            `;
        }
        // console.log(formattedRows);
        return formattedRows;
    }

    addColumn(columnName, isSortable) {
        // console.log(columnName, isSortable);
        if (typeof columnName !== 'string') {
            throw new Error('columnName must be a string');
        }
        this.columns.push({
            name: columnName,
            isSortable,
        })
    }

    // Ho modificato questa funzione, adesso passo un array anzichè una stringa
    addRow(row) {
        if (typeof row !== 'object') {
            throw new Error('row must be an array');
        }

        this.rows.push(row);
    }
    
    isAValidHtmlElement(parent) {
        return parent instanceof HTMLDivElement || parent instanceof HTMLBodyElement;
    }
    
    // Function invoked on click (table head)
    sortRows = (n) => {
        switch(n) {
            case 'Country':
                this.sortByValue('country');
                break;
            case 'New Confirmed':
                this.sortByValue('newConfirmed');
                break;
            case 'Total Confirmed':
                this.sortByValue('totalConfirmed');
                break;
            case 'New Deaths':
                this.sortByValue('newDeaths');
                break;
            case 'Total Deaths':
                this.sortByValue('totalDeaths');
                break;
            case 'New Recovered':
                this.sortByValue('newRecovered');
                break;
            case 'Total Recovered':
                this.sortByValue('totalRecovered');
                break;
            default:
                return;
        }
    }

    // Function asc or decr
    changeDirection = () => {
        if(this.direction == 0){
            this.direction = 1;
            return 'decr';
        } else {
            this.direction = 0;
            return 'asc';
        }
    }
    
    // Sort function
    sortByValue = (n) => {
        const direction = this.changeDirection();
        if(direction === 'asc'){
            this.rows.sort(function (a, b) {
                if(a[n] < b[n]) {
                    return -1;
                }
                if(a[n] > b[n]) {
                    return 1;
                }
                return 0;
            });
        } else if(direction === 'decr') {
            this.rows.sort(function (a, b) {
                if(a[n] > b[n]) {
                    return -1;
                }
                if(a[n] < b[n]) {
                    return 1;
                }
                return 0;
            });
        }
    }
}
