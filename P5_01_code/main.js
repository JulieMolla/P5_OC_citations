// Importation de la classe Citation
const Citation = require('./citation.js')
// Importation du jeu de données
const donnees = require('./donnees/donnees_projet_1.json');

// Création d'une instance de la classe citation
const citation = new Citation(donnees);

// Affichage de l'instance de Citation sous forme de string
console.log(citation.toString());


