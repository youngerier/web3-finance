import React, { useState } from 'react';
import { useModal } from '../../contexts/ModalContext';

const PurchaseModal = () => {
  const { purchaseModalOpen, currentProduct, closePurchaseModal } = useModal();
  const [amount, setAmount] = useState('');

  if (!purchaseModalOpen || !currentProduct) return null;

  return (
    <div 
      id="purchaseModal" 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center opacity-100 visible transition-all duration-300"
      onClick={closePurchaseModal}
    >
      <div 
        className="bg-dark-light rounded-xl w-full max-w-md mx-4 transform scale-100 transition-all duration-300" 
        id="purchaseModalContent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h3 className="text-xl font-bold" id="productName">购买 {currentProduct.name}</h3>
          <button className="text-gray-400 hover:text-white transition-colors" onClick={closePurchaseModal}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">预期年化收益率</span>
              <span className="text-lg font-bold text-success" id="productRate">{currentProduct.rate}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">锁仓期限</span>
              <span className="font-medium" id="productTerm">{currentProduct.term}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">起投金额</span>
              <span className="font-medium" id="productMin">{currentProduct.min}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">选择币种</label>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button className="bg-primary text-white py-2 rounded-lg text-sm transition-colors">USDT</button>
              <button className="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 py-2 rounded-lg text-sm transition-colors">ETH</button>
            </div>
            
            <label className="block text-gray-400 text-sm mb-2">投资金额</label>
            <div className="relative mb-2">
              <input 
                type="number" 
                placeholder="请输入投资金额" 
                className="w-full bg-dark border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors" 
                min={parseInt(currentProduct.min)}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">USDT</span>
            </div>
            <div className="flex justify-between text-sm mb-6">
              <span className="text-gray-400">可用余额: 8,342.15 USDT</span>
              <button 
                className="text-primary hover:text-primary/80 transition-colors"
                onClick={() => setAmount('8342.15')}
              >
                全部投入
              </button>
            </div>
            
            <div className="bg-dark p-4 rounded-lg mb-6">
              <h4 className="text-sm font-medium mb-3">收益预估</h4>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">到期总收益（预估）</span>
                <span className="font-bold">
                  {amount 
                    ? `${(amount * parseFloat(currentProduct.rate) / 100 * parseInt(currentProduct.term) / 365).toFixed(2)} USDT`
                    : '-- USDT'
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-800">
          <button 
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-all" 
            onClick={closePurchaseModal}
            disabled={!amount || parseFloat(amount) < parseInt(currentProduct.min)}
          >
            确认购买
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
