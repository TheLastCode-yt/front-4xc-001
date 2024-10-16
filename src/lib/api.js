const BASE_URL = 'https://www.alphavantage.co/query';

// Função para buscar dados de Forex
export const fetchForexData = async (fromCurrency, toCurrency, apiKey) => {
  const response = await fetch(
    `${BASE_URL}?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${apiKey}`
  );
  const data = await response.json();

  const code = data['Realtime Currency Exchange Rate']['1. From_Currency Code'];
  const name = data['Realtime Currency Exchange Rate']['2. From_Currency Name'];
  const currencyCode =
    data['Realtime Currency Exchange Rate']['3. To_Currency Code'];
  const bidPrice = data['Realtime Currency Exchange Rate']['8. Bid Price'];
  const askPrice = data['Realtime Currency Exchange Rate']['9. Ask Price'];

  return { code, name, bidPrice, askPrice, currencyCode };
};

// Função para buscar dados de Cripto
export const fetchCryptoData = async (symbol, apiKey) => {
  const response = await fetch(
    `${BASE_URL}?function=CURRENCY_EXCHANGE_RATE&from_currency=${symbol}&to_currency=USD&apikey=${apiKey}`
  );
  const data = await response.json();

  const code = data['Realtime Currency Exchange Rate']['1. From_Currency Code'];
  const name = data['Realtime Currency Exchange Rate']['2. From_Currency Name'];

  const bidPrice = data['Realtime Currency Exchange Rate']['8. Bid Price'];
  const askPrice = data['Realtime Currency Exchange Rate']['9. Ask Price'];
  console.log('sou o data', data);
  return { code, name, bidPrice, askPrice };
};

// Função para buscar dados de ações, commodities, índices e ETFs
export const fetchMarketData = async (symbol, apiKey) => {
  const response = await fetch(
    `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&interval=5min&apikey=${apiKey}`
  );

  const data = await response.json();
  return data;
};

/* ?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=XF5UBAY66F2SL76D  */
/* 
forex:
https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=EUR&to_currency=USD&apikey=XF5UBAY66F2SL76D

stock:
https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=XF5UBAY66F2SL76D

crypto:
https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=XF5UBAY66F2SL76D 

commodities:
https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOLD&apikey=XF5UBAY66F2SL76D

indices:
https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=US100&apikey=XF5UBAY66F2SL76D

etf:
https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&apikey=XF5UBAY66F2SL76D

fetchMarketData
${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&apikey=${apiKey}
*/
