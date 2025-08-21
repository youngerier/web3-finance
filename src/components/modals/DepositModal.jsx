import React, { useState } from 'react';
import { useModal } from '../../contexts/ModalContext';

const DepositModal = () => {
  const { depositModalOpen, currentToken, closeDepositModal } = useModal();
  const [selectedNetworkType, setSelectedNetworkType] = useState('ERC-20'); // Initialize with a default

  if (!depositModalOpen) return null;

  return (
    <div
      id="depositModal"
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center opacity-100 visible transition-all duration-300"
      onClick={closeDepositModal}
    >
      <div
        className="bg-dark-light rounded-xl w-full max-w-md mx-4 transform scale-100 transition-all duration-300 border border-gray-700"
        id="modalContent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h3 className="text-xl font-bold" id="depositTokenName">充值 {currentToken}</h3>
          <button className="text-gray-400 hover:text-white transition-colors" onClick={closeDepositModal}>
            <i className="fa fa-times"></i>
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">选择网络</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                className={`${selectedNetworkType === 'ERC-20' ? 'bg-primary text-white' : 'bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300'} py-2 rounded-lg text-sm transition-colors`}
                onClick={() => setSelectedNetworkType('ERC-20')}
              >
                ERC-20
              </button>
              <button
                className={`${selectedNetworkType === 'TRC-20' ? 'bg-primary text-white' : 'bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300'} py-2 rounded-lg text-sm transition-colors`}
                onClick={() => setSelectedNetworkType('TRC-20')}
              >
                TRC-20
              </button>
              <button
                className={`${selectedNetworkType === 'BEP-20' ? 'bg-primary text-white' : 'bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300'} py-2 rounded-lg text-sm transition-colors`}
                onClick={() => setSelectedNetworkType('BEP-20')}
              >
                BEP-20
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">充值地址</label>
            <div className="bg-dark rounded-lg p-3 font-mono text-sm mb-3 overflow-x-auto">
              0x71C97f2E5a8f53f8D27D38903046f8D27D389030
            </div>
            <div className="flex space-x-3">
              <button className="flex-1 bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 py-2 rounded-lg text-sm transition-colors flex items-center justify-center">
                <i className="fa fa-copy mr-2"></i>
                复制地址
              </button>
              <button className="w-12 h-12 bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 rounded-lg text-sm transition-colors flex items-center justify-center">
                <i className="fa fa-qrcode"></i>
              </button>
            </div>
          </div>
          
          <div className="bg-dark p-4 rounded-lg mb-6">
            <h4 className="text-sm font-medium mb-2 flex items-center">
              <i className="fa fa-info-circle text-primary mr-2"></i>
              充值须知
            </h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="flex items-start">
                <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                <span>请确认充值网络与您的钱包网络一致，否则资产可能丢失</span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                <span>充值到账需要一定数量的区块链确认，通常需要5-30分钟</span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check-circle text-success mt-1 mr-2"></i>
                <span>最低充值金额为 10 {currentToken}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-800">
          <button 
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-all" 
            onClick={closeDepositModal}
          >
            我已完成充值
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepositModal;
