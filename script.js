//create the board
const board = document.getElementById('container');

function createBoard(size) {
    let gridColumns = "";
    for (let i = 0; i < size; i++) gridColumns += "auto ";
    board.style.gridTemplateColumns = gridColumns;

    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = 'white';
        document.getElementById('container').appendChild(div);
    }
} //initial board
createBoard(48);

//choose color
const colorInput = document.getElementById('color');
let chosenColor = 'black';
colorInput.addEventListener('input', function(){
    chosenColor = colorInput.value;
    colorInput.style.backgroundColor = colorInput.value;
});

//drawing
let mouseDown = 0;
document.body.onmousedown = function () {
    ++mouseDown;
}
document.body.onmouseup = function () {
    --mouseDown;
}

board.addEventListener('mouseover', function (e) {
    if (mouseDown) {
        e.target.style.backgroundColor = chosenColor;
    }
});

//clear the board
const clearBtn = document.getElementById('clear');
const infoBox = document.getElementById('info');

clearBtn.addEventListener('click', function () {
    let pixels = document.querySelectorAll('div > div');
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white';
    }
    infoBox.innerHTML = "Cleared";
});

//change grid size
const sizeInput = document.getElementById('size');
const createBoardBtn = document.getElementById('createGrid');

createBoardBtn.addEventListener('click', function () {
    if (sizeInput.checkValidity()) {
        let pixels = document.querySelectorAll('div > div');
        for (let i = 0; i < pixels.length; i++) {
            document.getElementById('container').removeChild(pixels[i]);
        }
        createBoard(sizeInput.value);
        infoBox.innerHTML = `Created ${sizeInput.value}x${sizeInput.value}`;
    } else {
        infoBox.innerHTML = 'Choose 16 - 128';
    }
});