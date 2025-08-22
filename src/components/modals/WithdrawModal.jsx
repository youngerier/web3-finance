import React, { useState } from 'react';
import { useModal } from '../../contexts/ModalContext';

const WithdrawModal = () => {
  const { withdrawModalOpen, currentWithdrawToken, closeWithdrawModal } = useModal();
  const [transferType, setTransferType] = useState('wallet'); // 'wallet' or 'quantum'
  const [selectedNetwork, setSelectedNetwork] = useState('Ethereum');
  const [withdrawAmount, setWithdrawAmount] = useState('0.00');

  if (!withdrawModalOpen) return null;

  const handleWithdraw = () => {
    // Here you would implement the actual withdrawal logic
    console.log('Withdraw', currentWithdrawToken, withdrawAmount, transferType);
    closeWithdrawModal();
  };

  const handleAllWithdraw = () => {
    // This would set the withdraw amount to the full balance
    setWithdrawAmount('11,761.2970');
  };

  return (
    <div
      id="withdrawModal"
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center opacity-100 visible transition-all duration-300"
      onClick={closeWithdrawModal}
    >
      <div
        className="bg-dark-light rounded-xl w-full max-w-md mx-4 transform scale-100 transition-all duration-300 border border-gray-700"
        id="modalContent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h3 className="text-xl font-bold">Withdraw</h3>
          <button className="text-gray-400 hover:text-white transition-colors" onClick={closeWithdrawModal}>
            <i className="fa fa-times"></i>
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {/* Withdrawal Wallet Information */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-medium text-gray-400">Withdrawal Wallet</h4>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                  <span className="text-blue-400 font-medium">U</span>
                </div>
                <span className="text-sm font-medium">USDC</span>
                <span className="ml-2 text-sm font-bold">11,761.2970</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Currently, USDC on the interlace platform is USDC (native USDC), not USDC.e (bridged USDC)
            </p>
          </div>

          {/* Sub-wallet Name */}
          <div className="mb-6 bg-dark rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-400">Sub-wallet Name</span>
              <div className="flex items-center">
                <span className="text-sm font-medium">Master Wallet</span>
                <span className="ml-4 text-sm font-bold">11,761.2970</span>
              </div>
            </div>
          </div>

          {/* Withdraw To */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-400 mb-3">Withdraw To</h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                className={`${transferType === 'quantum' ? 'bg-primary text-white' : 'bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300'} py-2 px-4 rounded-lg text-sm transition-colors flex items-center justify-center`}
                onClick={() => setTransferType('quantum')}
              >
                <i className={`fa fa-atom mr-2 ${transferType === 'quantum' ? 'text-white' : 'text-gray-400'}`}></i>
                Quantum Account
              </button>
              <button
                className={`${transferType === 'wallet' ? 'bg-primary text-white' : 'bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300'} py-2 px-4 rounded-lg text-sm transition-colors flex items-center justify-center`}
                onClick={() => setTransferType('wallet')}
              >
                <i className={`fa fa-wallet mr-2 ${transferType === 'wallet' ? 'text-white' : 'text-gray-400'}`}></i>
                Wallet Address
              </button>
            </div>
          </div>

          {/* Select Network */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">Select Network for Wallet Address</label>
            <select
              className="w-full bg-dark border border-gray-700 text-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={selectedNetwork}
              onChange={(e) => setSelectedNetwork(e.target.value)}
            >
              <option value="Ethereum">Ethereum</option>
              <option value="Polygon">Polygon</option>
              <option value="BSC">Binance Smart Chain</option>
            </select>
          </div>

          {/* Withdraw Address */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">Withdraw To</label>
            <div className="relative">
              <select
                className="w-full bg-dark border border-gray-700 text-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option>Select Wallet Address</option>
              </select>
              <i className="fa fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>
          </div>

          {/* Withdraw Amount */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm text-gray-400">Withdraw Amount</label>
              <button 
                className="text-primary text-sm hover:underline" 
                onClick={handleAllWithdraw}
              >
                Withdraw All
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-dark border border-gray-700 text-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                placeholder="0.00"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">USDC</span>
            </div>
          </div>

          {/* Fee Information */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Fee</span>
              <span className="text-sm text-gray-300">---</span>
            </div>
          </div>

          {/* Actual Withdrawal Amount */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Actual Withdrawal Amount</span>
              <span className="text-sm font-medium">0.00</span>
            </div>
          </div>

          {/* Time Limit Notice */}
          <div className="bg-dark p-4 rounded-lg mb-6">
            <p className="text-xs text-gray-500">
              Due to transaction processing speed requirements, the transaction will be completed by 4:30 pm (UTC-8) today. Please wait patiently.
            </p>
          </div>
        </div>

        <div className="p-6 border-t border-gray-800 flex space-x-3">
          <button 
            className="flex-1 bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 py-3 rounded-lg font-medium transition-all"
            onClick={closeWithdrawModal}
          >
            Cancel
          </button>
          <button 
            className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-all"
            onClick={handleWithdraw}
          >
            Confirm Withdrawal
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;