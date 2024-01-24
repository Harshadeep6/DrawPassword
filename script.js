const cl = console.log.bind()

const colorPallete = [
    "red", // Gajar ka rang
    "green", // Patta hara
    "yellow", // Aasman ka rang
    "violet", // Gulabi mehfil
    "indigo", // Suraj ki kirne
    "orange", // Baingani shaan
    "aqua", // Sona chandi
    "crimson", // Neela aasman
    "khaki", // Tamatar laal
    "deepskyblue", // Aasmani paani
    "blue", // Kesar bhara orange
    "white"  // Badal ka bhatakti saaya
];

selectedColor = colorPallete[0]

const boxes = document.querySelectorAll('.boxes')

let isMousePressed = false;

boxes.forEach(element => {
    element.addEventListener('mousedown', startColoring)
    element.addEventListener('mouseover', colorOnHover)
});

function startColoring(event) {
    isMousePressed = true;
    colorBox(event.target.id)
}

function colorOnHover(event) {
    if(isMousePressed) colorBox(event.target.id)
}

function colorBox(id) {
    const box = document.getElementById(id)
    box.style.backgroundColor = selectedColor;
}

document.addEventListener('mouseup', () => isMousePressed = false)

const password = document.querySelector('#password')
const gridContainer = document.querySelector('.gridContainer')
const button = document.querySelector('button')
const colors = document.querySelectorAll('.colors')

password.addEventListener('focus', () => {
    password.classList.toggle('focus')
    gridContainer.classList.toggle('opa')
    button.classList.toggle('buttonVisible')
})


colors.forEach((color, idx) => {
    color.addEventListener('click', () => {
        selectedColor = colorPallete[idx]
    })
})
