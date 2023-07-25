// METODO RANDOM

// COSTANTI NECESSARIE ALLO SVOLGIMENTO 
const userNumber = Math.floor((Math.random() * 6) + 1); // NUMERO UTENTE
const computerNumber = Math.floor((Math.random() * 6) + 1); // NUMERO COMPUTER 

// COSTANTI PER RECUPERARE GLI ELEMENTI SU CUI SCRIVERE

const userBox = document.getElementById("user__number");
const machineBox = document.getElementById("machine__number");
const results = document.getElementById("results");

// SCRITTURA NUMERI CASUALI NEGLI APPOSITI BOX

userBox.innerHTML = userNumber;
machineBox.innerHTML = computerNumber;


// IF CHE CERTIFICA CHI VINCE

if (userNumber > computerNumber) {

    results.innerHTML = "Bravo, hai battuto una macchina ! (Che culo..)"

} else if (computerNumber > userNumber){

    results.innerHTML = "Peccato, il computer ha vinto ancora..."
} else {

    results.innerHTML = "Sei fortunato, qua il banco non vince sempre.. riprova"
};




// METODO ARRAY

// const userBox = document.getElementById("user__number");
// const machineBox = document.getElementById("machine__number");
// const results = document.getElementById("results");

// // // SCRITTURA NUMERI CASUALI NEGLI APPOSITI BOX

// const randomNumber = [1, 2, 3, 4, 5, 6];

// const randomIndex = Math.floor(Math.random() * 6);

// const dice_result = randomNumber[randomIndex];


// userBox.innerHTML = userNumber;
// machineBox.innerHTML = computerNumber;

// for (let i = 0; i < userNumber; i++) {


// }