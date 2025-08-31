import React, { createContext, useState } from 'react';
import SellActionWindow from './SellActionWindow';
import BuyActionWindow from './BuyActionWindow';

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [currentUid, setCurrentUid] = useState(null);

  const openBuyWindow = (uid) => {
    setCurrentUid(uid);
    setIsBuyWindowOpen(true);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
  };

  const openSellWindow = (uid) => {
    setCurrentUid(uid);
    setIsSellWindowOpen(true);
  };

  const closeSellWindow = () => {
    setIsSellWindowOpen(false);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
      }}
    >
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={currentUid} />}
      {isSellWindowOpen && <SellActionWindow uid={currentUid} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;