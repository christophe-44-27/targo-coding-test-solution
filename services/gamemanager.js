import {Game} from "../models/game";

class GameManager {

    constructor() {
        this.games = {};
    }
    
    /**
     * @param {string} gameId - Unique identifier for the game
     * @param {Array} playerNames - Names of the players
     * @returns {Game} The created game
     */
    createGame(gameId, playerNames) {
        if (this.games[gameId]) {
            throw new Error(`Game with ID ${gameId} already exists`);
        }
        
        const game = new Game(gameId, playerNames);
        this.games[gameId] = game;
        return game;
    }
    
    /**
     * @param {string} gameId - The ID of the game to find
     * @returns {Game|null} The game object or null if not found
     */
    getGame(gameId) {
        return this.games[gameId] || null;
    }
    
    /**
     * @param {string} gameId - The ID of the game to start
     */
    startGame(gameId) {
        const game = this.getGame(gameId);
        if (!game) {
            throw new Error(`Game with ID ${gameId} not found`);
        }
        game.start();
    }
    
    /**
     * @param {string} gameId - The ID of the game to end
     */
    endGame(gameId) {
        const game = this.getGame(gameId);
        if (!game) {
            throw new Error(`Game with ID ${gameId} not found`);
        }
        game.end();
    }
    
    /**
     * @param {string} gameId - The ID of the game
     * @param {string} playerName - The name of the player
     * @returns {string} The display of the player's hand
     */
    displayPlayerHand(gameId, playerName) {
        const game = this.getGame(gameId);
        if (!game) {
            return `Game with ID ${gameId} not found`;
        }
        return game.displayPlayerHand(playerName);
    }
    
    /**
     * @param {string} gameId - The ID of the game
     * @returns {Array} Array of strings representing each player's hand
     */
    displayAllHands(gameId) {
        const game = this.getGame(gameId);
        if (!game) {
            return [`Game with ID ${gameId} not found`];
        }
        return game.displayAllHands();
    }
    
    /**
     * @returns {Array} Array of game objects that are currently active
     */
    getActiveGames() {
        return Object.values(this.games).filter(game => game.isActive);
    }
    
    /**
     * @param {string} gameId - The ID of the game to remove
     */
    removeGame(gameId) {
        if (this.games[gameId]) {
            delete this.games[gameId];
        }
    }
}

export { GameManager };