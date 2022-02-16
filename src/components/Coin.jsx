import React from 'react';
import './styles/Coin.css';
import CoinInfo from './CoinInfo';

const Coin = ({name, Image, symbol, price, priceChange, marketcap}) => {
  return (
      <>
      <div className='coin-container'>
          <div className='coin-row'>
              <div className='coin'>
                  <img src={Image} alt="crypto" />
                  <h1>{name}</h1>
                  <p className='coin-symbol'>{symbol}</p>
              </div>
              <div className='coin-data'>
                  <p className='coin-price'>Current Price
                      ${price}</p>
                  
                  {priceChange < 0 ? (
                      <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                  ) : (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)
                  }
                  <p className='coin-marketcap'>
                      Mkt Cap: ${marketcap.toLocaleString()}
                  </p>
              </div>
          </div>

    </div>
    <CoinInfo/>
    </>
  )
}

export default Coin