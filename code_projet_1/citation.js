const { getRandomElement } = require('./utils')

module.exports = class Citation {
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