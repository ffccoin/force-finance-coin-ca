"use client";

import { Menu } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const Calculator = () => {
  const [coinData, setCoinData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [coinAmount, setCoinAmount] = useState(null);
  const [currencyAmount, setCurrencyAmount] = useState(null);

  const fetchExchangeRate = async () => {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,terra-luna,polkadot&vs_currencies=usd,pkr,inr,eur,gbp`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    console.log("DATA", data);
    setCoinData(data);
  };

  // If currencyAmount changes
  const calculateCoinAmount = () => {
    if (currencyAmount && coinData) {
      const exchangeRate = coinData[selectedCoin][selectedCurrency];
      setCoinAmount((currencyAmount / exchangeRate).toFixed(2));
    }
  };

  // If coinAmount changes
  const calculateCurrencyAmount = () => {
    if (coinAmount && coinData) {
      const exchangeRate = coinData[selectedCoin][selectedCurrency];
      setCurrencyAmount((coinAmount * exchangeRate).toFixed(2));
    }
  };

  useEffect(() => {
    calculateCoinAmount();
  }, [currencyAmount, coinData, selectedCoin, selectedCurrency]);

  useEffect(() => {
    calculateCurrencyAmount();
  }, [coinAmount, coinData, selectedCoin, selectedCurrency]);

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const handleCoinSelect = (coin) => {
    setSelectedCoin(coin);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div className="flex w-full flex-wrap lg:max-w-[24.438rem]">
      <div className="flex w-full flex-col flex-wrap">
        <p className="text-neutralLight">You have</p>
        <div className="flex gap-x-3">
          <input
            type="number"
            value={currencyAmount}
            onChange={(e) => setCurrencyAmount(e.target.value)}
            className="mt-3 h-8 w-full border border-transparent border-b-primary1 bg-transparent outline-none focus:border-b-primary1 focus:outline-none"
          />
          <Menu as="div" className="relative">
            <Menu.Button className="mt-3 flex h-8 max-w-fit items-center border border-transparent border-b-primary1 bg-transparent font-apfel-grotezk uppercase outline-none">
              {selectedCurrency}
              {chevronDown}
            </Menu.Button>
            <Menu.Items className="absolute right-0 top-11 flex w-[150px] flex-col items-start gap-y-1 rounded-md border border-primary1 border-opacity-50 bg-neutralDarker bg-opacity-50 px-4 py-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCurrencySelect("usd")}
                  >
                    USD
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCurrencySelect("inr")}
                  >
                    INR
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCurrencySelect("eur")}
                  >
                    EUR
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCurrencySelect("pkr")}
                  >
                    PKR
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCurrencySelect("gbp")}
                  >
                    GBP
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <p className="mt-6 text-neutralLight">You get</p>
        <div className="flex gap-x-3">
          <input
            type="number"
            value={coinAmount}
            onChange={(e) => setCoinAmount(e.target.value)}
            className="mt-3 h-8 w-full border border-transparent border-b-primary1 bg-transparent outline-none focus:border-b-primary1 focus:outline-none"
          />
          <Menu as="div" className="relative">
            <Menu.Button className="mt-3 flex h-8 max-w-fit items-center border border-transparent border-b-primary1 bg-transparent font-apfel-grotezk outline-none">
              {selectedCoin === "bitcoin"
                ? "BTC"
                : selectedCoin === "ethereum"
                  ? "ETH"
                  : selectedCoin === "cardano"
                    ? "ADA"
                    : selectedCoin === "polkadot"
                      ? "DOT"
                      : selectedCoin === "solana"
                        ? "SOL"
                        : "LUNA"}
              {chevronDown}
            </Menu.Button>
            <Menu.Items className="absolute right-0 top-11 flex w-[150px] flex-col items-start gap-y-1 rounded-md border border-primary1 border-opacity-50 bg-neutralDarker bg-opacity-50 px-4 py-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCoinSelect("bitcoin")}
                  >
                    BTC
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCoinSelect("ethereum")}
                  >
                    ETH
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCoinSelect("cardano")}
                  >
                    ADA
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCoinSelect("polkadot")}
                  >
                    DOT
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCoinSelect("solana")}
                  >
                    SOL
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active && ""} w-full text-start font-apfel-grotezk`}
                    onClick={() => handleCoinSelect("terra-luna")}
                  >
                    LUNA
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <div>
          <Image width={77} height={30} alt="img" src="/homepage/visa.svg" />
        </div>
        <div>
          <Image
            width={77}
            height={30}
            alt="img"
            src="/homepage/mastercard.svg"
          />
        </div>
        <div>
          <Image width={77} height={30} alt="img" src="/homepage/paypal.svg" />
        </div>
        <div>
          <Image
            width={77}
            height={30}
            alt="img"
            src="/homepage/discover.svg"
          />
        </div>
      </div>
    </div>
  );
};

const chevronDown = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10L12 15L17 10"
      stroke="#F3F3F3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Calculator;
