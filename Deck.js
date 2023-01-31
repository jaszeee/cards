// Ici on importe ce qui se trouve dans APP
import { options } from "./app.js";
import { Card } from "./Card.js";
import shuffle from "./node_modules/lodash-es/shuffle.js";

// Création class et exporter car première indication du prof
export class Deck {
	// ici à chaque nouveau deck, on veut un tableau de carte
	//pk pas de const devant la propriété carte ????
	#cards = [];
	constructor(options) {
		this.values = options.values;
		this.suits = options.suits;
	}

	// création de la méthode
	createFullDeck = () => {
		// pour chaque valeur qui se trouve dans l'objet option ...
		this.values.forEach((v) => {
			// et pour chaque suite qui se trouve dans l'objet option...
			this.suits.forEach((s) => {
				// dans ce tableau cards poush la nouvelle carte créer
				this.#cards.push(new Card(v, s));
			});
		});
	};

	// Création de la méthode affichage
	displayCards = () => {
		//dans ce tableau, pour chaque carte qui se trouve dans le tableau, applique la méthode display
		this.#cards.forEach((card) => {
			card.display();
		});
	};

	//méthode importée de la librairie lodash, on veut ici créer une méthode
	//pour trier les cartes
	shuffle = () => {
		this.#cards = shuffle(this.#cards);
	};
}
