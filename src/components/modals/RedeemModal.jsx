import React, { useState, useEffect } from 'react';
import { useModal } from '../../contexts/ModalContext';

const RedeemModal = () => {
  const { redeemModalOpen, currentRedeemProduct, closeRedeemModal } = useModal();
  const [redeemAmount, setRedeemAmount] = useState('');
  const [estimatedEarnings, setEstimatedEarnings] = useState(0);

  // Calculate redemption earnings (simple example: based on holding days and return rate)
  useEffect(() => {
    if (!currentRedeemProduct || !redeemAmount) {
      setEstimatedEarnings(0);
      return;
    }

    // Assume annual return rate is extracted from product name (in real projects, get from product data)
    const rateMatch = currentRedeemProduct.name.match(/(\d+\.\d+)%/);
    const annualRate = rateMatch ? parseFloat(rateMatch[1]) / 100 : 0.125;
    
    // Calculate holding days (example: from purchase date to today)
    const purchaseDate = new Date(currentRedeemProduct.purchaseDate);
    const today = new Date();
    const daysHeld = Math.floor((today - purchaseDate) / (1000 * 60 * 60 * 24));
    
    // Calculate estimated earnings
    const earnings = (parseFloat(redeemAmount) * annualRate * daysHeld) / 365;
    setEstimatedEarnings(earnings.toFixed(2));
  }, [currentRedeemProduct, redeemAmount]);

  if (!redeemModalOpen || !currentRedeemProduct) return null;

  // Handle full redemption
  const handleRedeemAll = () => {
    setRedeemAmount(currentRedeemProduct.amount.toString());
  };

  // Handle redemption submission
  const handleSubmit = () => {
    // In real projects, add redemption logic (API calls, etc.)
    console.log(`Redeem product: ${currentRedeemProduct.name}, amount: ${redeemAmount} USDT, earnings: ${estimatedEarnings} USDT`);
    closeRedeemModal();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center opacity-100 visible transition-all duration-300"
      onClick={closeRedeemModal}
    >
      <div 
        className="bg-dark-light rounded-xl w-full max-w-md mx-4 transform scale-100 transition-all duration-300 border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h3 className="text-xl font-bold">Redeem {currentRedeemProduct.name}</h3>
          <button className="text-gray-400 hover:text-white transition-colors" onClick={closeRedeemModal}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">Investment Amount</span>
              <span className="font-medium">{currentRedeemProduct.amount} USDT</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">Purchase Date</span>
              <span className="font-medium">{currentRedeemProduct.purchaseDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Current Earnings</span>
              <span className="text-success font-medium">{currentRedeemProduct.currentEarnings} USDT</span>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">Redeem Amount</label>
            <div className="relative mb-2">
              <input 
                type="number" 
                placeholder="Enter redeem amount" 
                className="w-full bg-dark border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors" 
                min="10" // Minimum redemption amount
                max={currentRedeemProduct.amount}
                value={redeemAmount}
                onChange={(e) => setRedeemAmount(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">USDT</span>
            </div>
            <div className="flex justify-between text-sm mb-6">
              <span className="text-gray-400">Maximum redeemable: {currentRedeemProduct.amount} USDT</span>
              <button 
                className="text-primary hover:text-primary/80 transition-colors"
                onClick={handleRedeemAll}
              >
                Redeem All
              </button>
            </div>
            
            <div className="bg-dark p-4 rounded-lg mb-6">
              <h4 className="text-sm font-medium mb-3">Redemption Preview</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Principal to Redeem</span>
                <span className="font-bold">{redeemAmount || '--'} USDT</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Estimated Earnings (Calculated)</span>
                <span className="text-success font-bold">{estimatedEarnings} USDT</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-800">
                <span className="font-medium">Total Receivable</span>
                <span className="font-bold text-lg">
                  {redeemAmount ? (parseFloat(redeemAmount) + parseFloat(estimatedEarnings)).toFixed(2) : '--'} USDT
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-800">
          <button 
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-all" 
            onClick={handleSubmit}
            disabled={!redeemAmount || parseFloat(redeemAmount) < 10 || parseFloat(redeemAmount) > currentRedeemProduct.amount}
          >
            Confirm Redemption
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedeemModal;