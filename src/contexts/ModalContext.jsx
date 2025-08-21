import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [redeemModalOpen, setRedeemModalOpen] = useState(false); // 新增赎回模态框状态
  const [currentToken, setCurrentToken] = useState('USDT');
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentRedeemProduct, setCurrentRedeemProduct] = useState(null); // 新增赎回产品状态

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

  // 新增赎回模态框方法
  const openRedeemModal = (product) => {
    setCurrentRedeemProduct(product);
    setRedeemModalOpen(true);
  };

  const closeRedeemModal = () => {
    setRedeemModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{
      depositModalOpen,
      purchaseModalOpen,
      redeemModalOpen, // 导出赎回模态框状态
      currentToken,
      currentProduct,
      currentRedeemProduct, // 导出当前赎回产品
      openDepositModal,
      closeDepositModal,
      openPurchaseModal,
      closePurchaseModal,
      openRedeemModal, // 导出打开赎回模态框方法
      closeRedeemModal // 导出关闭赎回模态框方法
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);