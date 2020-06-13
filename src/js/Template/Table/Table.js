export default class Table {

    columns = [];
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
        return `<table>${tableHeader}${tableBody}</table>`;
    }

    getHeader() {
        let formattedColumns = '';
        for (const column of this.columns) {
            if (!column || !column.name) {
                continue;
            }

            if (column.isSortable) {
                formattedColumns += `<th>${column.name} <i class="fas fa-sort-down"></i></th>`;
            } else {
                formattedColumns += `<th>${column.name}</th>`;
            }
        }
        // console.log(this.columns);
        return `<tr>${formattedColumns}</tr>`;
    }

    getBody() {
        let formattedColumns = '';
        for (const row of this.rows) {
            formattedColumns += row;
        }
        // console.log(formattedColumns);
        return formattedColumns;
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

    addRow(row) {
        if (typeof row !== 'string') {
            throw new Error('row must be a string');
        }

        this.rows.push(row);
    }
    isAValidHtmlElement(parent) {
        return parent instanceof HTMLDivElement || parent instanceof HTMLBodyElement;
    }
}

/*
const parent = document.createElement("div");

const myTable = new Template(parent)
myTable.addColumn('Title', true);
myTable.addRow('Data');
const pippo = myTable.printTable();
myTable.append(parent, pippo)
*/
