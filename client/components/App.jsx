import React, { useEffect, useState } from 'react'
import * as api from '../apis/apiFile'
import Coin from './Coin'

function App() {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  function handleChange(e) {
    setSearch(e.target.value)
  }

  //useEffect to call getcrypto function which calls api
  useEffect(async () => {
    try {
      const crypto = await api.getCrypto()
      console.log(crypto)
    } catch (error) {
      console.error
    }
  }, [])

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search</h1>
        <form>
          <input
            type="text"
            placeholder="Search..."
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.market_cap}
            price={coin.current_price}
          />
        )
      })}
    </div>
  )
}

export default App
