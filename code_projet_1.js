const sujets = require('./donnees/sujets.json');

const verbes = require('./donnees/verbes.json');

const complements = require('./donnees/complements.json');


function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
};

function getRandomElement(array) {
    return array[generateRandomNumber(array.length)];
};

function generateSentence() {
    let sujet = getRandomElement(sujets)
    let verbe = getRandomElement(verbes)
    let complement = getRandomElement(complements)
    return sujet + " " + verbe + " " + complement
}

console.log(generateSentence());


