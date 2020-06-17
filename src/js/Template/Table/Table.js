export default class Table {

    columns = [];
    // rows è un array di oggetti
    rows = [];
    parent;
    
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
        <table>
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
        let formattedColumns = '';
        for (const column of this.columns) {
            if (!column || !column.name) {
                continue;
            }

            if (column.isSortable) {
                formattedColumns += `<th onclick="sortTest('${column.name}')">${column.name} <i class="fas fa-sort-down"></i></th>`;
            } else {
                formattedColumns += `<th>${column.name}</th>`;
            }
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

    tableSort = (valuePath) => {
        const array = this.rows;
        let path = valuePath.split('.')  
        // console.log(path);
        return array.sort((a, b) => {
           return getValue(b,path) -  getValue(a,path)
        });
      
        function getValue(obj, path){
          path.forEach(path => obj = obj[path])
          return obj;
        }
    }
      
    isAValidHtmlElement(parent) {
        return parent instanceof HTMLDivElement || parent instanceof HTMLBodyElement;
    }
}
