import {Card} from "./card";

class Deck {

    constructor() {
        this.cards = [];
        this.colors = ['red', 'yellow', 'blue', 'green', 'black'];
        this.initializeDeck();
    }

    initializeDeck() {
        this.cards = [];
        for (const color of this.colors) {
            for (let value = 1; value <= 12; value++) {
                this.cards.push(new Card(color, value));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    get size() {
        return this.cards.length;
    }
}

export {Deck};