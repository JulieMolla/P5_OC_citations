import donneesPolitique from './donnees/donnees_projet_1.js';
import donneesDroit from './donnees/donnees_projet_2.js';

import { Citation } from './citation.js';

export class App {
    constructor() {
        this.themeWatcher();
    }

    themeWatcher() {
        const politiqueButton = document.getElementById("generatePolitique");
        politiqueButton.addEventListener("click", () => {
            this.generate('Parler comme un Politique...', donneesPolitique)
        });

        const droitButton = document.getElementById("generateDroit");
        droitButton.addEventListener("click", () => {
            this.generate('Parler comme un Avocat...', donneesDroit)

        });
    }

    generate(titre, donnees) {
        const titreElement = document.getElementById('titre');
        const errorElement = document.getElementById('error');

        const numberInput = document.getElementById("number");
        const number = parseInt(numberInput.value, 10);

        if (number == NaN || number <= 0 || number > 5 || !Number.isInteger(number)) {
            errorElement.innerText = 'Veuillez saisir un nombre entier compris entre 1 et 5 inclus.';
            return;
        }

        errorElement.innerText = '';
        titreElement.innerText = titre

        this.showSentences(number, donnees);
    }

    showSentences(n, donnees) {
        const citationElement = document.getElementById("citation");
        citationElement.innerHTML = '';

        for (let i = 0; i < n; i++) {
            const citation = new Citation(donnees)

            const p = document.createElement('p');

            const spanIntro = document.createElement('span');
            spanIntro.classList.add('intro');
            spanIntro.innerText = citation.intro + ' '

            const spanCause = document.createElement('span');
            spanCause.classList.add('cause');
            spanCause.innerText = citation.cause + ' '

            const spanRaison = document.createElement('span');
            spanRaison.classList.add('raison');
            spanRaison.innerText = citation.raison + ' '

            const spanSolution = document.createElement('span');
            spanSolution.classList.add('solution');
            spanSolution.innerText = citation.solution

            p.appendChild(spanIntro);
            p.appendChild(spanCause);
            p.appendChild(spanRaison);
            p.appendChild(spanSolution);

            citationElement.appendChild(p);
        }
    }
}

