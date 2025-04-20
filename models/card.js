class Card {
    /**
     * @param {string} color - The color of the card (red, yellow, blue, green, black)
     * @param {number} value - The value of the card (1-12)
     */
    constructor(color, value) {
        this.color = color;
        this.value = value;
    }
    
    toString() {
        return `${this.color} ${this.value}`;
    }
}

export {Card};