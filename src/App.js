import React from 'react';
import {useState} from 'react';
import CreditCardFront from './components/CreditCardFront';
import CreditCardBack from './components/CreditCardBack';
import FormInfo from './components/FormInfo';
import './App.css';
const App = () => {
  // initialFormValue of the form
  const initialFormValues = {
    cardName:'',
    cardNumber:'',
    expiresMon:'',
    expiresYear:'',
    cvv:''
  }
  const [formValues,setFormValues] = useState(initialFormValues)
  const [showBack,setShowBack] = useState(false)
  // changeValue is used to setFormValues.
  const changeValue = (name,value) => {
    setFormValues({...formValues,[name]:value})
  }
  // changeShowBack is used to setShowBack.
  const changeShowBack = (name) => {
    // console.log(name);
    if(name ==='cvv'){
      setShowBack(true)
    }else {
      setShowBack(false)
    }
  }
    return(
      <div className="container">
        <CreditCardFront 
        formValues={formValues}
        showBack={showBack}>
        </CreditCardFront>
        <CreditCardBack 
        formValues={formValues} 
        showBack={showBack}>
        </CreditCardBack>
        <FormInfo 
        formValues={formValues}
        changeValue={changeValue}
        changeShowBack={changeShowBack}>
        </FormInfo>
      </div>
    )
}
export default App