/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonts
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck           = [];
const types        = ['C','D','H','S'];
const specialCards = ['A','J','Q','K'];

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector(' #btnPedir');
const puntosHTML = document.querySelectorAll('small') ;

//Function to create a deck
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
  // console.log(deck);
  deck = _.shuffle( deck )
  console.log(deck)
}

creearDeck();

//Function to take a card
const requestCard = () => {

  if (deck.length === 0 ) {
    throw 'there is not cards';
  }
  const card = deck.pop();
  return card;
}


//PEDIR CARTA
const valorCarta = ( card ) => {

  const valor = card.substring(0, card.length -1);
  return (isNaN( valor ) ) ? 
          (valor === 'A') ? 11 : 10
          :valor * 1;
}




//Eventos
btnPedir.addEventListener('click', () => {
  
  const carta = requestCard();
  
  puntosJugador = puntosJugador + valorCarta(carta)
  puntosHTML[0].innerText = puntosJugador

  console.log(puntosJugador)

});