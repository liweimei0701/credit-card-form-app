import React from 'react';
import axios from 'axios';
import {message} from 'antd';
import {formatCardNumber,formatCVV} from '../../utils/format'
import expirationData from '../../assests/expirationData'
import './formInfo.css'
const FormInfo = (props) => {
  const {formValues,changeValue,changeShowBack} = props;
  // handleChange will be called by input or select onChange event.
  // formatCardNumber is used for formatting the cardNumber, formatCVV is used for formatting the CVV.
  // After formatting, the name and value will be passed to the function changeValue to set the formValues.
  const handleChange = (e) => {
    let {name,value} = e.target;
    if(name === 'cardNumber') {
      value = formatCardNumber(value)
    }else if(name === 'cvv') {
      value = formatCVV(value)
    }
    changeValue(name,value);
  }
  // handleFocus will be called by input or select onFocus event.
  // the name of the inputs or select will be passed to function changeShowBack.
  // changeShowBack is used to change the showBack(true to show the creditCardBack and false to show the creditCardFront.)
  const handleFocus = (e) => {
    const name = e.target.name;
    changeShowBack(name)
  }
  // handleSubmit will be called by the form onSubmit event.
  // formData will be passed as the params to the axios put request to the AWS.
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData = {...formValues} ;
    const {expiresMon,expiresYear,cardNumber,cvv} = formData;
    if(cardNumber.length !== 19){
      message.info('please enter your 16 digits card numbers!')
    }else if(!expiresMon || !expiresYear) {
      message.info('please select the expireDate!')
    }else if(cvv.length < 3) {
      message.info('please enter your cvv as 3 or 4 digits!')
    } else {
      const res = axios.put('/api',formData);
      res.then(res=>{
      // console.log(res.data);
      if (res.status === 200) {
        message.info(`${res.data} , Your card submit successfully!`)
      }
    })
  }
    }
  return (
    <form action="" className='form' onSubmit={handleSubmit}>
      {/* cardNumber group */}
      <div className="formGroup">
        <p>Card Number</p>
        <input 
        type="text"
        placeholder=".... .... .... ...." 
        className='cardnumber'
        value={formValues.cardNumber} 
        name='cardNumber'
        length='19'
        required
        onChange={handleChange}
        onFocus={handleFocus}/>        
      </div>
      {/* cardName group */}
      <div className="formGroup">
        <p>Card Name</p>
        <input 
         type="text"
         placeholder="Your Name Here" 
         value={formValues.cardName} 
         name='cardName'
         required 
         onChange={handleChange}
         onFocus={handleFocus}/>
      </div>
      {/* combine group of expiration and cvv*/}
      <div className="combineGroup">
      <div className="expiration">
        <p>Expiration Date</p>
        <select
        className="expirationMon" 
        value={formValues.expiresMon} 
        name='expiresMon'
        required  
        onChange={handleChange}
        onFocus={handleFocus}>
          <option value="Month" disabled>Month</option>
        {expirationData.Month.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <select
      className="expirationYear" 
      value={formValues.expiresYear} 
      name='expiresYear'
      required 
      onChange={handleChange}
      onFocus={handleFocus}>
        <option value="Year" disabled>Year</option>
        {expirationData.Year.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      </div>
      <div className="cvv">
        <p>CVV</p>
        <input
        type="text"
        value={formValues.cvv} 
        name='cvv'
        required 
        title="Three or four numbers on the back of yur card." 
        onChange={handleChange} 
        onFocus={handleFocus}/>
      </div>
      </div>
      {/* submit */}
      <button className='submit'>Submit</button>
    </form>
  )
}
export default FormInfo