// Importation des jeux de données
import donneesPolitique from './donnees/donnees_projet_1.js';
import donneesDroit from './donnees/donnees_projet_2.js';

import { Citation } from './citation.js';

// Classe qui gère l'application et permet de faire le lien entre le javascript et l'html
export class App {
    constructor() {
        // Fonction appelée à l'instanciation de la classe App
        this.themeWatcher();
    }

    // Initialise les actions à effectuer lorsqu'on clique sur les boutons
    themeWatcher() {
        // Récupére de l'élément du DOM possédant l'id "generatePolitique"
        const politiqueButton = document.getElementById("generatePolitique");
        // Ajout d'une fonction à exécuter au clique sur le bouton "Politique"
        politiqueButton.addEventListener("click", () => {
            // Appelle de la fonction generate avec les données correspondants à la politique
            this.generate('Parler comme un Politique...', donneesPolitique)
        });

        // Récupére de l'élément du DOM possédant l'id "generateDroit"
        const droitButton = document.getElementById("generateDroit");
        // Ajout d'une fonction à exécuter au clique sur le bouton "Droit"
        droitButton.addEventListener("click", () => {
            // Appelle de la fonction generate avec les données correspondants au droit
            this.generate('Parler comme un Avocat...', donneesDroit)
        });
    }

    // Vérifie le nombre de citations donné par l'utilisateur et affiche le titre
    // Prend en paramètre un titre et un jeu de données
    generate(titre, donnees) {
        // Récupére de l'élément du DOM possédant l'id "titre"
        const titreElement = document.getElementById('titre');
        // Récupére de l'élément du DOM possédant l'id "error"
        const errorElement = document.getElementById('error');

        // Récupére de l'élément du DOM possédant l'id "number" (input)
        const numberInput = document.getElementById("number");
        // Récupère la valeur de l'input sous forme de nombre entier
        const number = parseInt(numberInput.value, 10);

        // Vérifie la validité de l'input: il faut que ce soit un nombre entier compris entre 1 et 5 inclus
        if (number == NaN || number <= 0 || number > 5 || !Number.isInteger(number)) {
            // Si l'input n'est pas valide
            // On définit le texte de l'élément error
            errorElement.innerText = 'Veuillez saisir un nombre entier compris entre 1 et 5 inclus.';
            // On arrète l'exécution de la fonction
            return;
        }

        // L'input est valide
        // On vide le message d'erreur et on définit le titre
        errorElement.innerText = '';
        titreElement.innerText = titre

        // Appelle de la fonction qui permet d'afficher les citations
        this.showSentences(number, donnees);
    }

    // Permet d'afficher les citations sur la page
    // Prend en paramètre le nombre de citation à générer et le jeu de données
    showSentences(n, donnees) {
        // Récupération de l'élément qui possède l'id citation qui contiendra les citations
        const citationElement = document.getElementById("citation");
        // On efface les citations qu'il aurait pu contenir
        citationElement.innerHTML = '';

        // Boucle répétée le nombre de fois choisi par l'utilisateur
        for (let i = 0; i < n; i++) {
            // Instanciation d'une nouvelle citation
            const citation = new Citation(donnees)

            // Création d'un élément paragraphe pour contenir la citation
            const p = document.createElement('p');

            // Création d'un élément span pour contenir la partie intro de la citation
            const spanIntro = document.createElement('span');
            // Ajout d'une classe pour utiliser le style css
            spanIntro.classList.add('intro');
            // On remplit le span avec le texte de l'intro
            spanIntro.innerText = citation.intro + ' '

            // Même principe que pour l'intro
            const spanCause = document.createElement('span');
            spanCause.classList.add('cause');
            spanCause.innerText = citation.cause + ' '

            // Même principe que pour l'intro
            const spanRaison = document.createElement('span');
            spanRaison.classList.add('raison');
            spanRaison.innerText = citation.raison + ' '

            // Même principe que pour l'intro
            const spanSolution = document.createElement('span');
            spanSolution.classList.add('solution');
            spanSolution.innerText = citation.solution

            // On ajoute les spans à l'élément paragraphe
            p.appendChild(spanIntro);
            p.appendChild(spanCause);
            p.appendChild(spanRaison);
            p.appendChild(spanSolution);

            // On ajoute le paragraphe à l'élément citation
            citationElement.appendChild(p);
        }
    }
}

