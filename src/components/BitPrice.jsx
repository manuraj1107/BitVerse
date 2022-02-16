import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './styles/BitPrice.css';

const BitPrice = () => {
  
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false').then(res => {
      setCoin(res.data);
    }).catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  }
  const filteredCoin = coin.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='coin-app' onChange={{ handleChange }}>
      <div className='coin-search'>
        
        <form>
          <input  disabled className='coin-input' onChange={handleChange} />
      
        </form>
      </div>
      {filteredCoin.map(coin => {
        return (
          <Coin key={coin.id} name={coin.name} Image={coin.image}
            symbol={coin.symbol} marketcap={coin.market_cap} price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
          ></Coin>
        )
      })}    
    </div>
  );
}

export default BitPrice