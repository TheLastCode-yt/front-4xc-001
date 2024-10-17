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
    <section className="text-white -mt-[40%] xl:-mt-[15%] bg-black">
      <div className="container mx-auto p-4">
        {/* <button onClick={() => console.log(stocksData.data)}>
          console.log
        </button> */}

        <div className="flex flex-col xl:gap-y-4">
          {/* Botões de seleção */}
          <div className="flex items-center xl:justify-center xl:gap-x-20 mb-6  overflow-hidden overflow-x-scroll remove-scroll-bar">
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
      <div className="grid grid-cols-6 xl:grid-cols-12 items-center py-6 px-4 bg-custom__blue-focus xl:gap-y-0 gap-y-4">
        <div className="col-span-6 xl:col-span-4 flex items-start">
          <Link
            href={sectionLink}
            className="flex items-center text-xl xl:text-4xl gap-x-2 justify-center"
          >
            {sectionTitle}
            <Image
              src="/icons/chevron.svg"
              width={20}
              height={20}
              alt="chevron icon"
              className="invert w-[14px] h-[14px] xl:w-[20px] xl:h-[20px]"
            />
          </Link>
        </div>

        <div className="col-span-2 xl:block hidden">
          <span>
            {selectedOption === 'forex' || selectedOption === 'crypto'
              ? 'Bid'
              : 'Low'}
          </span>
        </div>

        <div className="col-span-2 xl:block hidden">
          <span>
            {selectedOption === 'forex' || selectedOption === 'crypto'
              ? 'Ask'
              : 'High'}
          </span>
        </div>

        <div className="col-span-2 xl:block hidden">
          <span>
            {selectedOption === 'forex' || selectedOption === 'crypto'
              ? '1D change'
              : 'Variação'}
          </span>
        </div>

        <div className="col-span-2 xl:h-10 xl:block hidden"></div>

        {/* mobile options */}
        <div className=" col-span-3 xl:hidden">
          <span className="font-semibold text-lg">$10</span>
          <p className="text-xs">Depósito mín.</p>
        </div>

        <div className=" col-span-3 xl:hidden">
          <span className="font-semibold text-lg">$1</span>
          <p className="text-xs">Investimento mínimo</p>
        </div>
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
                className="p-2 grid grid-cols-6 xl:grid-cols-12 items-center border-b-gray-200/10 border-b-[0.1px] last:border-b-transparent"
              >
                {/* Nome e Logo */}
                <div className="flex items-center justify-start gap-x-2 col-span-4 xl:col-span-4">
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt="logo assets active"
                    className="w-[40px] h-[40px] xl:h-[50px] xl:w-[50px]"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-300">
                      {item.code} {item.currencyCode}
                    </p>
                  </div>
                </div>

                {/* Bid */}
                <div className="col-span-2  hidden xl:block">
                  {bidPrice.toFixed(6)}
                </div>

                {/* Ask */}
                <div className="col-span-2  hidden xl:block">
                  {askPrice.toFixed(6)}
                </div>

                {/* Diferença % */}
                <div
                  className={`col-span-2 font-semibold  hidden xl:block
                    ${
                      priceDifferencePercent > 0
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                >
                  {priceDifferencePercent.toFixed(2)}%
                </div>

                {/* Botões */}
                <div className=" hidden xl:flex gap-x-2 col-span-2 justify-end">
                  <button className="py-[10px] px-[20px] flex items-center overflow-hidden relative text-red-500 border border-red-500 hover:text-white hover:bg-red-500 transition-all">
                    Vender
                  </button>
                  <button className="py-[10px] px-[20px] flex items-center overflow-hidden relative text-green-500 hover:text-white hover:bg-green-500 border border-green-500 transition-all">
                    Comprar
                  </button>
                </div>

                {/* botoes mobile */}
                <div className="block xl:hidden col-span-2 ml-auto">
                  <button className="py-[10px] px-[20px] flex items-center justify-center overflow-hidden relative text-red-500 border border-red-500 hover:text-white hover:bg-red-500 transition-all text-xs w-[107px] text-center">
                    {askPrice.toFixed(6)}
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
                className="p-2 grid grid-cols-6 xl:grid-cols-12 items-center border-b-gray-200/10 border-b-[0.1px] last:border-b-transparent"
              >
                {/* Nome e Logo */}
                <div className="flex items-center justify-start gap-x-2 col-span-4 xl:col-span-4">
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt="logo assets inactive"
                    className="w-[40px] h-[40px] xl:h-[50px] xl:w-[50px]"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-gray-300">
                      {item['Global Quote']['01. symbol']}
                    </p>
                  </div>
                </div>

                {/* Low */}
                <div className="col-span-2 xl:block hidden">
                  {lowPrice.toFixed(6)}
                </div>

                {/* High */}
                <div className="col-span-2 xl:block hidden">
                  {highPrice.toFixed(6)}
                </div>

                {/* Variação % */}
                <div
                  className={`col-span-2 font-semibold xl:block hidden
                    ${
                      priceDifferencePercent > 0
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                >
                  {priceDifferencePercent.toFixed(2)}%
                </div>

                {/* Botões */}
                <div className="hidden xl:flex gap-x-2 col-span-2 justify-end ">
                  <button className="py-[10px] px-[20px] flex items-center overflow-hidden relative text-red-500 border border-red-500 hover:text-white hover:bg-red-500 transition-all">
                    Vender
                  </button>
                  <button className="py-[10px] px-[20px] flex items-center overflow-hidden relative text-green-500 hover:text-white hover:bg-green-500 border border-green-500 transition-all">
                    Comprar
                  </button>
                </div>

                {/* botoes mobile */}
                <div className="block xl:hidden col-span-2 ml-auto">
                  <button className="py-[10px] px-[20px] flex items-center justify-center overflow-hidden relative text-red-500 border border-red-500 hover:text-white hover:bg-red-500 transition-all text-xs w-[107px] text-center">
                    {highPrice.toFixed(6)}
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
