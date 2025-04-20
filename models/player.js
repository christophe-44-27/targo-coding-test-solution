class Player {

    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    
    /**
     * @param {Card} card - The card to add
     */
    receiveCard(card) {
        this.hand.push(card);
    }
    
    /**
     * @returns {Array} The player's hand
     */
    getHand() {
        return this.hand;
    }
    
    /**
     * @returns {string} The string representation
     */
    displayHand() {
        if (this.hand.length === 0) {
            return `${this.name} has no cards`;
        }
        
        const handDisplay = this.hand.map(card => card.toString()).join(', ');
        return `${this.name}'s hand: ${handDisplay}`;
    }
    
    /**
     * Clear the player's hand
     */
    clearHand() {
        this.hand = [];
    }
}

export { Player };