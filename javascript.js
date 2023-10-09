function createBoard(){
    const board = document.querySelector("#board");
    let box = document.createElement('div');
    box.style.cssText = "padding: 5px; border: solid;"
    board.appendChild(box)
}

createBoard()