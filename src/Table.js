class Table {

  constructor(){
    this.row = 2;
    this.column = 2;
    this.table = this.createTable();
    return this;
  }

  //add number of rows
  addRow(){
    this.row += 1;
    const newRow = document.createElement('tr');

    for(let col=0; col<this.column; col++){
      const cell = document.createElement("td");
      const cellText = document.createTextNode("cell in row "+this.row+", column "+col);

      cell.appendChild(cellText);
      
      newRow.appendChild(cell);
    }
    this.table.appendChild(newRow);

  }

  //add number of columns
  addColumn(){
    this.column += 1;
  }

  //Create the table
  createTable(){
    const tableElem = document.createElement('table');
    for(let row=0; row<this.row; row++){
      let newRow = document.createElement('tr');

      for(let col=0; col<this.column; col++){
        const cell = document.createElement("td");
        const cellText = document.createTextNode("cell in row "+row+", column "+col);

        cell.appendChild(cellText);
        
        newRow.appendChild(cell);
      }

      tableElem.appendChild(newRow);
    }
    document.querySelector('#output-container').appendChild(tableElem);
    return tableElem;
  }

  getAllRows(){
    const rowArray = [];

    for(let rowEach of this.table.children){
      console.log(rowEach);
      rowArray.push(rowEach);
    }

    return rowArray;
  }
}

export {Table};
