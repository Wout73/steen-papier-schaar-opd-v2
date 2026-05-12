// Span elements
const spelerOutput = document.querySelector('[span-id="speler"]');
const computerOutput = document.querySelector('[span-id="computer"]');
const uitkomstOutput = document.querySelector('[span-id="uitkomst"]');

// Button elements
const steenbtn = document.querySelector('#steen');
const papierbtn = document.querySelector('#papier');
const schaarbtn = document.querySelector('#schaar');

// Variables
let humanChoice = '';
let computerChoice = '';

if (spelerOutput) spelerOutput.innerHTML = "Jouw keuze ";
if (computerOutput) computerOutput.innerHTML = "Computer keuze: ";
if (uitkomstOutput) uitkomstOutput.innerHTML = "Uitkomst: ";

// Buttons event
steenbtn.addEventListener('click', function(event) {
    humanChoice = event.target.id;
    spelerOutput.innerHTML = "Jouw keuze: " + humanChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = 'steen';
    }
    if (randomNumber === 2) {
        computerChoice = 'schaar';
    }
    if (randomNumber === 3) {
        computerChoice = 'papier';
    }
    computerOutput.innerHTML = "Computer keuze: " + computerChoice;
    
    // Bepaal de uitkomst
    if (humanChoice === computerChoice) {
        uitkomstOutput.innerHTML = "Uitkomst: Gelijkspel!";
    } else if (humanChoice === 'steen' && computerChoice === 'schaar') {
        uitkomstOutput.innerHTML = "Uitkomst: Je wint!";
    } else {
        uitkomstOutput.innerHTML = "Uitkomst: Je verliest!";
    }
});

papierbtn.addEventListener('click', function(event) {
    humanChoice = event.target.id;
    spelerOutput.innerHTML = "Jouw keuze: " + humanChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = 'steen';
    }
    if (randomNumber === 2) {
        computerChoice = 'schaar';
    }
    if (randomNumber === 3) {
        computerChoice = 'papier';
    }
    computerOutput.innerHTML = "Computer keuze: " + computerChoice;
    
    // Bepaal de uitkomst
    if (humanChoice === computerChoice) {
        uitkomstOutput.innerHTML = "Uitkomst: Gelijkspel!";
    } else if (humanChoice === 'papier' && computerChoice === 'steen') {
        uitkomstOutput.innerHTML = "Uitkomst: Je wint!";
    } else {
        uitkomstOutput.innerHTML = "Uitkomst: Je verliest!";
    }
});

schaarbtn.addEventListener('click', function(event) {
    humanChoice = event.target.id;
    spelerOutput.innerHTML = "Jouw keuze: " + humanChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = 'steen';
    }
    if (randomNumber === 2) {
        computerChoice = 'schaar';
    }
    if (randomNumber === 3) {
        computerChoice = 'papier';
    }
    computerOutput.innerHTML = "Computer keuze: " + computerChoice;
    
    // Bepaal de uitkomst
    if (humanChoice === computerChoice) {
        uitkomstOutput.innerHTML = "Uitkomst: Gelijkspel!";
    } else if (humanChoice === 'schaar' && computerChoice === 'papier') {
        uitkomstOutput.innerHTML = "Uitkomst: Je wint!";
    } else {
        uitkomstOutput.innerHTML = "Uitkomst: Je verliest!";
    }
});