// Import de la fonction getRandomElement
const getRandomElement = require('./utils')

// Définition et export de la class Citation
module.exports = class Citation {
    // Constructeur de la classe citation
    // Prends un jeu de données en paramètre
    constructor(donnees) {
        // Initialisation des 4 attributs de la classe avec des éléments aléatoires tirés du jeu de données
        this.intro = getRandomElement(donnees.selection1);
        this.cause = getRandomElement(donnees.selection2);
        this.raison = getRandomElement(donnees.selection3);
        this.solution = getRandomElement(donnees.selection4);
    }

    // Retourne une représentation de la classe citation sous forme de string
    toString() {
        return this.intro + " " + this.cause + " " + this.raison + " " + this.solution;

    }
}