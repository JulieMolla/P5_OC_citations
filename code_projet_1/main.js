const Citation = require('./citation.js')
const donnees = require('./donnees/donnees_projet_1.json');

const citation = new Citation(donnees);
console.log(citation.toString());