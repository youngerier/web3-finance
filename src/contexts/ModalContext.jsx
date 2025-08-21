import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [currentToken, setCurrentToken] = useState('USDT');
  const [currentProduct, setCurrentProduct] = useState(null);

  const openDepositModal = (token) => {
    setCurrentToken(token);
    setDepositModalOpen(true);
  };

  const closeDepositModal = () => {
    setDepositModalOpen(false);
  };

  const openPurchaseModal = (product) => {
    setCurrentProduct(product);
    setPurchaseModalOpen(true);
  };

  const closePurchaseModal = () => {
    setPurchaseModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{
      depositModalOpen,
      purchaseModalOpen,
      currentToken,
      currentProduct,
      openDepositModal,
      closeDepositModal,
      openPurchaseModal,
      closePurchaseModal
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
