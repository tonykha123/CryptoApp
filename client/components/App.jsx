import React, { useEffect, useState } from 'react'
import * as api from '../apis/apiFile'
import Coin from './Coin'

function App() {
  //can use state to change currency on endpoint url
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [currency, setCurrency] = useState('NZD')

  function handleChange(e) {
    setSearch(e.target.value)
  }

  //useEffect to call getcrypto function which calls api
  useEffect(async () => {
    try {
      const crypto = await api.getCrypto()
      setCoins(crypto.body)
    } catch (error) {
      console.error
    }
  }, [])

  console.log('hey', coins)

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

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

        <div className="coin-currency">
          <label htmlFor="test">Select Currency</label>
          <select name="currency-change" id="test">
            <option value="USD">USD</option>
            <option value="NZD">NZD</option>
            <option value="EUR">EUR</option>
            <option value="AUD">AUD</option>
            <option value="JPY">JPY</option>
            <option value="VND">VND</option>
          </select>
        </div>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        )
      })}
    </div>
  )
}

export default App
