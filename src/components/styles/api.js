
export const HistoricalChart = (days = 365) =>
  `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`;