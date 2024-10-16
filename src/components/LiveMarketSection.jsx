'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LiveMarketSection = () => {
  const [selectedOption, setSelectedOption] = useState('forex');

  // Um useState para cada tipo de mercado
  const [forexData, setForexData] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);
  const [stocksData, setStocksData] = useState([]);
  const [commoditiesData, setCommoditiesData] = useState([]);
  const [etfsData, setEtfsData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      const response = await fetch('/api/market-data');
      const data = await response.json();

      // Define os dados para cada tipo de mercado
      setForexData(data.forex || []);
      setCryptoData(data.crypto || []);
      setStocksData(data.stocks || []);
      setCommoditiesData(data.commodities || []);
      setEtfsData(data.etfs || []);
    };

    fetchMarketData();
  }, []);

  const options = [
    { label: 'Forex', value: 'forex' },
    { label: 'Cripto', value: 'crypto' },
    { label: 'Ações', value: 'stocks' },
    { label: 'Commodities', value: 'commodities' },
    { label: 'ETFs', value: 'etfs' },
  ];

  // Função para renderizar os dados conforme a opção selecionada

  return (
    <section className="text-white -mt-[15%]">
      <div className="container mx-auto p-4">
        {/* <button onClick={() => console.log(stocksData.data)}>
          console.log
        </button> */}

        <div className="flex flex-col gap-y-4">
          {/* Botões de seleção */}
          <div className="flex items-center justify-center gap-x-20 mb-6">
            {options.map(option => (
              <button
                key={option.value}
                className={`px-6 py-2 font-bold border-b hover:border-b-white transition-all duration-300
                  ${
                    selectedOption === option.value
                      ? 'border-b-white'
                      : 'border-b-transparent'
                  }`}
                onClick={() => setSelectedOption(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Renderização dos dados selecionados */}
          {/* forex table */}
          <div>
            {selectedOption === 'forex' &&
              forexData.data &&
              forexData.data.length > 0 && (
                <Table
                  selectedOption={'forex'}
                  sectionTitle={forexData.sectionTitle}
                  sectionLink={forexData.sectionLink}
                  data={forexData.data}
                />
              )}
          </div>

          {/* crypto table */}
          <div>
            {selectedOption === 'crypto' &&
              cryptoData.data &&
              cryptoData.data.length > 0 && (
                <Table
                  selectedOption={'crypto'}
                  sectionTitle={cryptoData.sectionTitle}
                  sectionLink={cryptoData.sectionLink}
                  data={cryptoData.data}
                />
              )}
          </div>

          {/* açoes table */}
          <div>
            {selectedOption === 'stocks' &&
              stocksData.data &&
              stocksData.data.length > 0 && (
                <Table
                  selectedOption={'stocks'}
                  sectionTitle={stocksData.sectionTitle}
                  sectionLink={stocksData.sectionLink}
                  data={stocksData.data}
                />
              )}
          </div>

          {/* commodities table */}
          <div>
            {selectedOption === 'commodities' &&
              commoditiesData.data &&
              commoditiesData.data.length > 0 && (
                <Table
                  selectedOption={'commodities'}
                  sectionTitle={commoditiesData.sectionTitle}
                  sectionLink={commoditiesData.sectionLink}
                  data={commoditiesData.data}
                />
              )}
          </div>

          {/* ETFS table */}
          <div>
            {selectedOption === 'etfs' &&
              etfsData.data &&
              etfsData.data.length > 0 && (
                <Table
                  selectedOption={'etfs'}
                  sectionTitle={etfsData.sectionTitle}
                  sectionLink={etfsData.sectionLink}
                  data={etfsData.data}
                />
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Table = ({ selectedOption, sectionTitle, sectionLink, data }) => {
  return (
    <div className="w-full flex flex-col bg-black text-white rounded shadow shadow-white">
      {/* header */}
      <div className="grid grid-cols-12 items-center py-6 px-4 bg-custom__blue-focus">
        <div className="col-span-4 flex items-start">
          <Link
            href={sectionLink}
            className="flex items-center text-4xl gap-x-2 justify-center"
          >
            {sectionTitle}
            <Image
              src="/icons/chevron.svg"
              width={20}
              height={20}
              alt="chevron icon"
              className="invert"
            />
          </Link>
        </div>

        <div className="col-span-2">
          <span>
            {selectedOption === 'forex' || selectedOption === 'crypto'
              ? 'Bid'
              : 'Low'}
          </span>
        </div>

        <div className="col-span-2">
          <span>
            {selectedOption === 'forex' || selectedOption === 'crypto'
              ? 'Ask'
              : 'High'}
          </span>
        </div>

        <div className="col-span-2">
          <span>
            {selectedOption === 'forex' || selectedOption === 'crypto'
              ? '1D change'
              : 'Variação'}
          </span>
        </div>

        <div className="col-span-2 h-10"></div>
      </div>

      {/* grids para forex e crypto */}
      {(selectedOption === 'forex' || selectedOption === 'crypto') && (
        <div className="flex flex-col gap-y-4 px-2">
          {data?.map((item, index) => {
            const bidPrice = parseFloat(item.bidPrice);
            const askPrice = parseFloat(item.askPrice);
            const priceDifferencePercent =
              ((askPrice - bidPrice) / bidPrice) * 100;

            return (
              <div
                key={`${index}+image-logo-active`}
                className="p-2 grid grid-cols-12 items-center border-b-gray-200/10 border-b-[0.1px] last:border-b-transparent"
              >
                {/* Nome e Logo */}
                <div className="flex items-center justify-start gap-x-2 col-span-4">
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt="logo assets active"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-300">
                      {item.code} {item.currencyCode}
                    </p>
                  </div>
                </div>

                {/* Bid */}
                <div className="col-span-2">{bidPrice.toFixed(6)}</div>

                {/* Ask */}
                <div className="col-span-2">{askPrice.toFixed(6)}</div>

                {/* Diferença % */}
                <div
                  className={`col-span-2 font-semibold ${
                    priceDifferencePercent > 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {priceDifferencePercent.toFixed(2)}%
                </div>

                {/* Botões */}
                <div className="flex gap-x-2 col-span-2 justify-end">
                  <button className="py-[10px] px-[20px] flex items-center overflow-hidden relative text-red-500 border border-red-500 hover:text-white hover:bg-red-500 transition-all">
                    Vender
                  </button>
                  <button className="py-[10px] px-[20px] flex items-center overflow-hidden relative text-green-500 hover:text-white hover:bg-green-500 border border-green-500 transition-all">
                    Comprar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* grids para outros ativos */}
      {selectedOption !== 'forex' && selectedOption !== 'crypto' && (
        <div className="flex flex-col gap-y-4 px-2">
          {data?.map((item, index) => {
            const lowPrice = parseFloat(
              item.low || item['Global Quote']['04. low']
            );
            const highPrice = parseFloat(
              item.high || item['Global Quote']['03. high']
            );
            const priceDifferencePercent =
              ((highPrice - lowPrice) / lowPrice) * 100;

            return (
              <div
                key={`${index}+image-logo-inactive`}
                className="p-2 grid grid-cols-12 items-center border-b-gray-200/10 border-b-[0.1px] last:border-b-transparent"
              >
                {/* Nome e Logo */}
                <div className="flex items-center justify-start gap-x-2 col-span-4">
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt="logo assets inactive"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-300">
                      {item['Global Quote']['01. symbol']}
                    </p>
                  </div>
                </div>

                {/* Low */}
                <div className="col-span-2">{lowPrice.toFixed(6)}</div>

                {/* High */}
                <div className="col-span-2">{highPrice.toFixed(6)}</div>

                {/* Variação % */}
                <div
                  className={`col-span-2 font-semibold ${
                    priceDifferencePercent > 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {priceDifferencePercent.toFixed(2)}%
                </div>

                {/* Botões */}
                <div className="flex gap-x-2 col-span-2 justify-end">
                  <button className="py-[10px] px-[20px] flex items-center overflow-hidden relative text-red-500 border border-red-500 hover:text-white hover:bg-red-500 transition-all">
                    Vender
                  </button>
                  <button className="py-[10px] px-[20px] flex items-center overflow-hidden relative text-green-500 hover:text-white hover:bg-green-500 border border-green-500 transition-all">
                    Comprar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LiveMarketSection;
