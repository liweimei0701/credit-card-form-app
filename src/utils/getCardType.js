// credit-card-type provide the API creditCardType(number as the params) which will get the cardType.
import creditCardType from 'credit-card-type';
import cards from '../assests/cards';
export function getCardType(number) {
  const cardInfo = creditCardType(number)
  // console.log(cardInfo);
  let cardType;
  if(cardInfo.length ===  0){
    cardType = 'Unknown'
  }else {
    cardType = cardInfo[0].niceType;
  }
  // return cardType;
  let cardInfomation = {
    type: '',
    src: '',
    backGround: ''
  }
  // get the cardInformation related to the cardType.
  for(let i = 0; i < cards.length; i++){
    if(cards[i].type === cardType) {
      // console.log(i);
      // console.log(cards[i].logo);
      cardInfomation.src = cards[i].logo;
      cardInfomation.backGround = cards[i].backGround;
      cardInfomation.type = cards[i].type;
    }
  }
  return cardInfomation;
}