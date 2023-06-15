/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonts
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck           = [];
const types        = ['C','D','H','S'];
const specialCards = ['A','J','Q','K'];

const creearDeck = () => {

  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    } 
  }
  
  for( let type of types) {
    for( let special of specialCards) {
      deck.push(special + type);
    }
  }
  console.log(deck);
  deck = _.shuffle( deck )
  console.log(deck)
}

creearDeck();