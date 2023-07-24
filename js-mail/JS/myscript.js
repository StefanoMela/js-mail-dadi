// DEFINIZIONE INDIRIZZI EMAIL ACCETTATI

const validEmails = ["admin@admin.it", "user@admin.it", "email@email.it", "user@email.it"];
const userMail = prompt("Qual è il tuo indirizzo email ?");

// STABILISCO L'ELEMENTO HTML NEL QUALE SCRIVERE SE L'INPUT E' OK O MENO
const textEl = document.getElementById("myP");

//  COMPARO GLI INDIRIZZI EMAIL

for (let i = 0; i < validEmails.length; i++) {

    const validEmail = validEmails[i];

    if (validEmail === userMail) {

        textEl.innerHTML = "Bravo puoi entrare";
        break;
    } 
    else {
        textEl.innerHTML = "Cambia email";
    }
};