import React from 'react';
import {getCardType} from '../../utils/getCardType';
import {formatExpires} from '../../utils/format';
import cards from '../../assests/cards';
import './creditCardFront.css';
const chipSrc = cards[0].logo;
const CreditCardFront = (props) => {
  const {formValues,showBack} = props;
  // function getCardType(cardNumber as the params) is uesd to get the cardInformation 
  // related to the type of the card.
  const cardInfomation = getCardType(formValues.cardNumber);
  let {expiresYear,expiresMon} = formValues;
  expiresYear = formatExpires(expiresYear);
  return (
    <div className="creditCardFront" 
    style={{display:showBack?'none':'block',
    background:cardInfomation.backGround,
    color:cardInfomation.type === 'Mastercard' || 
    cardInfomation.type === 'Discover'? '#000':'#fff'
    }}>
      <div className="chip">
        <img src={chipSrc} alt=""/>
      </div>
      <div className="cardTypeFront">
        <img src={cardInfomation.src} alt=""/>
      </div>
      <div className="cardNumber">{formValues.cardNumber}</div>
      <div className="cardHolder">
        <p>Card Holder</p>
        <div className="holderName">{formValues.cardName.toUpperCase()}</div>
      </div>
      <div className="expirDate">
        <p>Expires</p>
        <div className="expirDateBox">
        <span>{expiresMon?expiresMon:'MM'}</span><span>/</span><span>{expiresYear?expiresYear:'YY'}</span>
      </div>
        </div>
    </div>
  )
}
export default CreditCardFront;