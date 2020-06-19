const donnees = require('./donnees/donnees_projet_1.json');


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

console.log(new Citation(donnees).toString());
