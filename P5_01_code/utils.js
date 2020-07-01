// Récupère un élément aléatoire du tableau passé en paramètre
module.exports = function getRandomElement(array) {
    // Génère un nombre entier aléatoire entre 0 inclus et la taille du tableau exclus
    const randomIndex = Math.floor(Math.random() * array.length);
    // Retourne l'élément du tableau à l'index randomIndex
    return array[randomIndex];
};
