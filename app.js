"use strict";

//Ici on va importer la classe Deck car selon instruction du prof on a du exporter cette dernière
import { Deck } from "./Deck.js";
import { Card } from "./Card.js";

//on exporte app.js dans Deck
export const options = {
	values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
	suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
};

// Instancier Deck et de carte
const deck = new Deck(options);

// Appliquer la méthode créer sur notre deck
deck.createFullDeck();
deck.shuffle();
deck.displayCards();
console.log(deck);

console.log(deck);
