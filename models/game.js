import {Player} from "./player";
import {Deck} from "./deck";

class Game {
    /**
     * @param {string} id - Unique identifier for the game
     * @param {Array} playerNames - Names of the players
     */
    constructor(id, playerNames) {
        this.id = id;
        this.players = [];
        this.deck = new Deck();
        this.isActive = false;
        
        // Validate number of players
        if (playerNames.length < 3 || playerNames.length > 6) {
            throw new Error('MU requires 3 to 6 players');
        }
        
        // Create player objects
        for (const name of playerNames) {
            this.players.push(new Player(name));
        }
    }
    
    start() {
        for (const player of this.players) {
            player.clearHand();
        }
        
        this.deck.initializeDeck();
        this.deck.shuffle();
        
        const cardsPerPlayer = this.deck.size / this.players.length;
        
        if (!Number.isInteger(cardsPerPlayer)) {
            throw new Error('Cannot distribute cards evenly among players');
        }
        
        for (let i = 0; i < cardsPerPlayer; i++) {
            for (const player of this.players) {
                player.receiveCard(this.deck.cards.pop());
            }
        }
        
        this.isActive = true;
    }
    
    /**
     * @param {string} name - The name of the player to find
     * @returns {Player|null} The player object or null if not found
     */
    getPlayerByName(name) {
        return this.players.find(player => player.name === name) || null;
    }
    
    /**
     * @param {string} playerName - The name of the player
     * @returns {string} The display of the player's hand
     */
    displayPlayerHand(playerName) {
        const player = this.getPlayerByName(playerName);
        if (!player) {
            return `Player ${playerName} not found`;
        }
        return player.displayHand();
    }
    
    /**
     * @returns {Array} Array of strings representing each player's hand
     */
    displayAllHands() {
        return this.players.map(player => player.displayHand());
    }

    end() {
        this.isActive = false;
    }
}

export { Game };