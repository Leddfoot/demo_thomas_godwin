import React, {useState } from 'react'
import Button from '../components/UI/Button/Button';
import FetchQuote from './FetchQuote';

import './QuoteMachine.css'

function QuoteMachine() {
    // const [ quote, setQuote] = useState('loading')

    // async function fetchQuotesHandler (){
    //     const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    //     const data = await response.json()
    //     console.log('data: ', data);
 

    //         // const transformedMovies = data.results.map(movieData=>{
    //         //     console.log('movieData: ', movieData);
    //         //     return{
    //         //         id: movieData.quote,
    //         //         title: movieData.author
    //         //     }
    //         // })
    //         setQuote(data)
  
    // }

    // fetchQuotesHandler()

//     fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
// .then(res=> res.json())
// .then(data=>{
// console.log(data);
// })


// function getRandomQuote() {
//     return quotesData.quotes[
//       Math.floor(Math.random() * quotesData.quotes.length)
//     ];
//   }




  return (
    <div className='quote-container'>
        <div className='quote-area'>
        <Button >get a quote</Button>
    <FetchQuote />
        </div>
    </div>
  )
}

export default QuoteMachine