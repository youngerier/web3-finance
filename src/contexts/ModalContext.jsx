import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [redeemModalOpen, setRedeemModalOpen] = useState(false); // Add redemption modal state
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false); // Add withdrawal modal state
  const [currentToken, setCurrentToken] = useState('USDT');
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentRedeemProduct, setCurrentRedeemProduct] = useState(null); // Add redemption product state
  const [currentWithdrawToken, setCurrentWithdrawToken] = useState('USDT'); // Add current withdrawal token state

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

  // Add redemption modal methods
  const openRedeemModal = (product) => {
    setCurrentRedeemProduct(product);
    setRedeemModalOpen(true);
  };

  const closeRedeemModal = () => {
    setRedeemModalOpen(false);
  };

  // Add withdrawal modal methods
  const openWithdrawModal = (token) => {
    setCurrentWithdrawToken(token);
    setWithdrawModalOpen(true);
  };

  const closeWithdrawModal = () => {
    setWithdrawModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{      depositModalOpen,
      purchaseModalOpen,
      redeemModalOpen, // Export redemption modal state
      withdrawModalOpen, // Export withdrawal modal state
      currentToken,
      currentProduct,
      currentRedeemProduct, // Export current redemption product
      currentWithdrawToken, // Export current withdrawal token
      openDepositModal,
      closeDepositModal,
      openPurchaseModal,
      closePurchaseModal,
      openRedeemModal, // Export open redemption modal method
      closeRedeemModal, // Export close redemption modal method
      openWithdrawModal, // Export open withdrawal modal method
      closeWithdrawModal // Export close withdrawal modal method
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);