const donnees1 = require('./donnees/donnees_projet_1.json');
const donnees2 = require('./donnees/donnees_projet_2.json');


function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
};

class Citation {
    constructor(donnees) {
        this.intro = getRandomElement(donnees.selection1);
        this.cause = getRandomElement(donnees.selection2);
        this.raison = getRandomElement(donnees.selection3);
        this.solution = getRandomElement(donnees.selection4);
    }
    toString() {
        return this.intro + " " + this.cause + " " + this.raison + " " + this.solution;

    }
}

function repeatSentence(n, donnees) {
    for (let i = 0; i < n; i++) {
        console.log(new Citation(donnees));
    }
}




const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

askForDonnees();

rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});


function askForNumber(donnees) {
    rl.question("Combien de citation voulez-vous générer ? ", function (chosenNumber) {
        if (chosenNumber >= 1 && chosenNumber <= 5) {
            repeatSentence(chosenNumber, donnees);
            askForNewGenerate();
        }
        else {
            console.log("Vous devez choisir un nombre entre 1 et 5.");
            askForNumber(donnees);
        }
    });
}

function askForDonnees() {
    rl.question("Si vous pensez que votre vie ressemble à un compte de fées, tapez 1. Si vous vous sentez l'âme d'un super héro, tapez 2. ", function (chosenNumber) {
        if (chosenNumber == 1) {
            askForNumber(donnees1);
        }
        else if (chosenNumber == 2) {
            askForNumber(donnees2);
        }
        else {
            console.log("Vous devez taper 1 ou 2.");
            askForDonnees();
        }
    });
}

function askForNewGenerate() {
    rl.question("Souhaitez-vous recommencer ? (oui/non) ", function (input) {
        input = input.toLowerCase();
        if (input == "oui") {
            askForDonnees();
        }
        else if (input == "non") {
            rl.close()
        }
        else {
            console.log("Veuillez taper oui ou non.")
            askForNewGenerate();
        }
    }
    )
}