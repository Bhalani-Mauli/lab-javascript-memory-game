class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return;
    }
    for (let i = 0; i < this.cards.length; i++) {
      let shuffle = Math.floor(Math.random() * this.cards.length);
      let temp = this.cards[i]; //6,8
      this.cards[shuffle] = temp;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
    // if (this.pairsGuessed === this.pairsGuessed) {
    //   return this.pairsGuessed + 1;
    // }
  }

  checkIfFinished() {
    // ... write your code here

    // if (!this.pairsGuessed) {
    //   return false;
    // } else if (this.pairsGuessed === 12) {
    //   return true;
    // } else {
    //   return false;
    // }
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
