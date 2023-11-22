

import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [anime,setAnime] = useState("code geass")
  const [quote,setQuote] = useState()

  function searchQuote(){
    const url = "https://animechan.xyz/api/random/anime?title="
    axios.get(`${url}${anime}`).then((response)=>{
      console.log(response.data)
      setQuote(response.data)
    })
  }
  function searchRamdomAnime() {
    const url = "https://animechan.xyz/api/random"
    axios.get(`${url}`).then((response)=>{
      console.log(response.data)
      setQuote(response.data)
    })
  }

  return (
    <>
        <main className='container'>
            <h1 className='title'>Anime Quotes</h1>
            <div className='input'>
              <input type="text" placeholder='Anime' value={anime} onChange={e => setAnime(e.target.value)} />
              <button onClick={searchQuote}>Search</button>
              <button onClick={searchRamdomAnime}>Random Anime</button>
            </div>
            {
              quote &&
              <div className='quote'>
                <h3>{quote.character}</h3>
                <span>{quote.anime}</span>
                <p>{quote.quote}</p>
              </div>
            }
           
        </main>
    </>
  )
}

export default App
