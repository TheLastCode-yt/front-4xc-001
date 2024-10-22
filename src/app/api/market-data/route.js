import { NextResponse } from 'next/server';
/* api methods */
import { fetchForexData, fetchCryptoData, fetchMarketData } from '@/lib/api';

// Listas de dados
const forexPairs = [
  { from: 'EUR', to: 'USD', image: '/images/active-photos/eur-usd.svg' },
  { from: 'USD', to: 'JPY', image: '/images/active-photos/usd-jpy.svg' },
  { from: 'AUD', to: 'USD', image: '/images/active-photos/aud-usd.svg' },
  { from: 'GBP', to: 'USD', image: '/images/active-photos/gbp-usd.svg' },
  { from: 'EUR', to: 'JPY', image: '/images/active-photos/eur-jpy.svg' },
  { from: 'GBP', to: 'JPY', image: '/images/active-photos/gbp-jpy.svg' },
];

const cryptoAssets = [
  { symbol: 'BTC', title: 'Bitcoin', image: '/images/active-photos/btc.svg' },
  { symbol: 'SOL', title: 'Solana', image: '/images/active-photos/sol.svg' },
  { symbol: 'ETH', title: 'Ethereum', image: '/images/active-photos/eth.png' },
];

const stockSymbols = [
  { symbol: 'AAPL', title: 'Apple', image: '/images/active-photos/aapl.svg' },
  {
    symbol: 'MSFT',
    title: 'Microsoft',
    image: '/images/active-photos/msft.svg',
  },
  {
    symbol: 'GOOGL',
    title: 'Google',
    image: '/images/active-photos/alphabet.svg',
  },
  { symbol: 'NVDA', title: 'NVIDIA', image: '/images/active-photos/nvda.svg' },
  { symbol: 'TSLA', title: 'Tesla', image: '/images/active-photos/tsla.svg' },
  {
    symbol: 'WBA',
    title: 'Walgreens Boots Alliance',
    image: '/images/active-photos/btc.svg',
  },
  { symbol: 'AMZN', title: 'Amazon', image: '/images/active-photos/amzn.svg' },
];

const commoditySymbols = [
  { symbol: 'XAU', title: 'Gold', image: '/images/active-photos/gold.svg' },
  { symbol: 'USOUSD', title: 'Oil', image: '/images/active-photos/usousd.svg' },
  {
    symbol: 'UKOUSD',
    title: 'Brent Oil',
    image: '/images/active-photos/walgreens.svg',
  },
  {
    symbol: 'XAGUSD:N',
    title: 'Silver',
    image: '/images/active-photos/silver.svg',
  },
];

const etfSymbols = [
  {
    symbol: 'SPY',
    title: 'SPDR S&P 500 ETF Trust',
    image: '/images/active-photos/spy.svg',
  },
  {
    symbol: 'FXI',
    title: 'iShares China Large-Cap ETF',
    image: '/images/active-photos/fxi.svg',
  },
  {
    symbol: 'JNUG',
    title: 'Direxion Daily Gold Miners Bull 2X Shares',
    image: '/images/active-photos/jnug.svg',
  },
  {
    symbol: 'SQQQ',
    title: 'ProShares UltraPro Short QQQ',
    image: '/images/active-photos/sqqq.svg',
  },
  {
    symbol: 'BRRR',
    title: 'Valkyrie Bitcoin Fund',
    image: '/images/active-photos/brrr.svg',
  },
  {
    symbol: 'BITB',
    title: 'Bitwise Bitcoin ETF',
    image: '/images/active-photos/bitb.svg',
  },
];

// Função auxiliar para gerar imagens
const generateImagePath = symbol => `/images/${symbol.toLowerCase()}.png`;

export async function GET() {
  try {
    const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

    // Fetch Forex data
    const forexDataPromises = forexPairs.map(pair =>
      fetchForexData(pair.from, pair.to, API_KEY)
    );
    const forexData = await Promise.all(forexDataPromises);

    // Adiciona as imagens aos pares de Forex
    const forexDataWithImages = forexData.map((data, index) => ({
      ...data,
      title: `${forexPairs[index].from}/${forexPairs[index].to}`,
      image: forexPairs[index].image,
    }));

    // Fetch Crypto data
    const cryptoDataPromises = cryptoAssets.map(asset =>
      fetchCryptoData(asset.symbol, API_KEY)
    );
    const cryptoData = await Promise.all(cryptoDataPromises);

    // Adiciona as imagens aos dados de criptomoedas
    const cryptoDataWithImages = cryptoData.map((data, index) => ({
      ...data,
      title: cryptoAssets[index].title,
      image: cryptoAssets[index].image,
    }));

    // Fetch Stock data
    const stockDataPromises = stockSymbols.map(stock =>
      fetchMarketData(stock.symbol, API_KEY)
    );
    const stockData = await Promise.all(stockDataPromises);

    // Adiciona as imagens aos dados de ações
    const stockDataWithImages = stockData.map((data, index) => ({
      ...data,
      title: stockSymbols[index].title,
      image: stockSymbols[index].image,
    }));

    // Fetch Commodity data
    const commodityDataPromises = commoditySymbols.map(commodity =>
      fetchMarketData(commodity.symbol, API_KEY)
    );
    const commodityData = await Promise.all(commodityDataPromises);

    // Adiciona as imagens aos dados de commodities
    const commodityDataWithImages = commodityData.map((data, index) => ({
      ...data,
      title: commoditySymbols[index].title,
      image: commoditySymbols[index].image,
    }));

    // Fetch ETF data
    const etfDataPromises = etfSymbols.map(etf =>
      fetchMarketData(etf.symbol, API_KEY)
    );
    const etfData = await Promise.all(etfDataPromises);

    // Adiciona as imagens aos dados de ETFs
    const etfDataWithImages = etfData.map((data, index) => ({
      ...data,
      title: etfSymbols[index].title,
      image: etfSymbols[index].image,
    }));

    // Retorna os dados de todos os tipos com imagens
    return NextResponse.json({
      forex: {
        sectionTitle: '44 Pares Forex',
        sectionLink: '/forex',
        data: forexDataWithImages,
      },
      crypto: {
        sectionTitle: 'Criptomoedas',
        sectionLink: '/crypto',
        data: cryptoDataWithImages,
      },
      stocks: {
        sectionTitle: 'Ações Populares',
        sectionLink: '/stocks',
        data: stockDataWithImages,
      },
      commodities: {
        sectionTitle: 'Commodities',
        sectionLink: '/commodities',
        data: commodityDataWithImages,
      },
      etfs: {
        sectionTitle: 'ETFs em Destaque',
        sectionLink: '/etfs',
        data: etfDataWithImages,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch market data' },
      { status: 500 }
    );
  }
}
