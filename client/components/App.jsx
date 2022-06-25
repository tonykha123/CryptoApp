import React, { useEffect, useState } from 'react'
import * as api from '../apis/apiFile'

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  function handleChange(e) {
    setSearch(e.target.value)
  }

  function filterCoins(coins) {}
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
    </div>
  )
}

export default App
