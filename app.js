let bodyEl = document.getElementsByTagName("body")[0];
let titleEl = document.getElementById("title");
let minuteurEl = document.getElementById("minuteur");
let joursEl = document.getElementById("j");
let heuresEl = document.getElementById("h");
let minutesEl = document.getElementById("m");
let secondesEl = document.getElementById("s");


let now = new Date();
//tenir compte de l'heure UTC
const dateOffsetMinutes = now.getTimezoneOffset();

const unJourEnMs = 1000 * 60 * 60 * 24;
const uneHeureEnMs = 1000 * 60 * 60;
const uneMinuteEnMs = 1000 * 60;

//On recupere la date cible
const newYear = new Date("2022")

function getCountdown(){

    let nowDate = Date.now();

    let tempsRestantEnMs = newYear - nowDate + dateOffsetMinutes * uneMinuteEnMs;
    
    //Decoupage en jour heur et minutes etc...
    //jours
    let nbJours = Math.floor(tempsRestantEnMs / unJourEnMs);
    console.log(nbJours);

    //decoupage heures restantes
    let resteTempsSansJoursMs = tempsRestantEnMs - nbJours * unJourEnMs;
    
    let nbHeures = resteTempsSansJoursMs / uneHeureEnMs
    console.log(nbJours);

    // decoupage  minutes restante
    let resteMinutes

}

//Initialisation
getCountdown();



