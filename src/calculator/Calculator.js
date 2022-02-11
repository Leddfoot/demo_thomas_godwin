import React from 'react';
import { DisplayContextProvider } from './store/display-context';
import MainContainer from './components/MainContainer';
import './Calculator.css'



function Calculator() {

  
 

  return (
    <DisplayContextProvider>
      <MainContainer />
    </DisplayContextProvider>
  );
}





export default Calculator;
