import React from 'react';
import {getCardType} from '../../utils/getCardType';
import './CreditCardBack.css';
const CreditCardBack = (props) => {
  const {formValues,showBack} = props;
  // function getCardType(cardNumber as the params) is uesd to get the cardInformation 
  // related to the type of the card.
  const cardInfomation = getCardType(formValues.cardNumber);
  return (
    <div className="creditCardBack" 
    style={{display:showBack?'block':'none',
    background:cardInfomation.backGround,
    color:cardInfomation.type === 'Mastercard' || 
    cardInfomation.type === 'Discover'? '#000':'#fff'}}>
      <div className="stripe"></div>
      <div className="cvvShow">
        <p>CVV</p>
        <div className="cvvNumber">{formValues.cvv}</div>
      </div>
      <div className="cardTypeBack">
        <img src={cardInfomation.src} alt=""/>
      </div>
    </div>
  )
}
export default CreditCardBack;