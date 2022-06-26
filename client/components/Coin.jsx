import React from 'react'

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
  currency,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto coin" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            ${price.toLocaleString()} {currency}
          </p>
          <p className="coin-volume">
            ${volume.toLocaleString()} {currency}
          </p>

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange}%</p>
          ) : (
            <p className="coin-percent green">{priceChange}%</p>
          )}

          <p className="coin-marketcap">
            Market Cap: ${marketcap.toLocaleString()} {currency}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin
