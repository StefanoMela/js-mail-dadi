console.log("JS OK");

// COSTANTI NECESSARIE ALLO SVOLGIMENTO 

const userNumber = Math.floor((Math.random() * 6) + 1); // NUMERO UTENTE
const computerNumber = Math.floor((Math.random() * 6) + 1); // NUMERO COMPUTER 

// COSTANTE PER RECUPERARE L'ELEMENTO HTML SU CUI SCRIVERE

const userBox = document.getElementById("user__number");
const machineBox = document.getElementById("machine__number");
const results = document.getElementById("results");

// SCRITTURA NUMERI CASUALI NEGLI APPOSITI BOX

userBox.innerHTML = userNumber;
machineBox.innerHTML = computerNumber;


// IF CHE CERTIFICA CHI VINCE

if (userNumber > computerNumber) {

    results.innerHTML = "Bravo, hai battuto una macchina ! (Che culo..)"

} else {

    results.innerHTML = "Peccato, il computer ha vinto ancora..."
};