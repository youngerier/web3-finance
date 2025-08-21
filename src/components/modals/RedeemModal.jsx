import React, { useState, useEffect } from 'react';
import { useModal } from '../../contexts/ModalContext';

const RedeemModal = () => {
  const { redeemModalOpen, currentRedeemProduct, closeRedeemModal } = useModal();
  const [redeemAmount, setRedeemAmount] = useState('');
  const [estimatedEarnings, setEstimatedEarnings] = useState(0);

  // 计算赎回收益（简单示例：按持有天数和收益率计算）
  useEffect(() => {
    if (!currentRedeemProduct || !redeemAmount) {
      setEstimatedEarnings(0);
      return;
    }

    // 假设年化收益率从产品名称提取（实际项目应从产品数据获取）
    const rateMatch = currentRedeemProduct.name.match(/(\d+\.\d+)%/);
    const annualRate = rateMatch ? parseFloat(rateMatch[1]) / 100 : 0.125;
    
    // 计算持有天数（示例：从购买日期到今天）
    const purchaseDate = new Date(currentRedeemProduct.purchaseDate);
    const today = new Date();
    const daysHeld = Math.floor((today - purchaseDate) / (1000 * 60 * 60 * 24));
    
    // 计算预估收益
    const earnings = (parseFloat(redeemAmount) * annualRate * daysHeld) / 365;
    setEstimatedEarnings(earnings.toFixed(2));
  }, [currentRedeemProduct, redeemAmount]);

  if (!redeemModalOpen || !currentRedeemProduct) return null;

  // 处理全部赎回
  const handleRedeemAll = () => {
    setRedeemAmount(currentRedeemProduct.amount.toString());
  };

  // 处理赎回提交
  const handleSubmit = () => {
    // 实际项目中添加赎回逻辑（API调用等）
    console.log(`赎回产品: ${currentRedeemProduct.name}, 金额: ${redeemAmount} USDT, 收益: ${estimatedEarnings} USDT`);
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
          <h3 className="text-xl font-bold">赎回 {currentRedeemProduct.name}</h3>
          <button className="text-gray-400 hover:text-white transition-colors" onClick={closeRedeemModal}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">投资金额</span>
              <span className="font-medium">{currentRedeemProduct.amount} USDT</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">购买日期</span>
              <span className="font-medium">{currentRedeemProduct.purchaseDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">当前收益</span>
              <span className="text-success font-medium">{currentRedeemProduct.currentEarnings} USDT</span>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-2">赎回金额</label>
            <div className="relative mb-2">
              <input 
                type="number" 
                placeholder="请输入赎回金额" 
                className="w-full bg-dark border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors" 
                min="10" // 最低赎回金额
                max={currentRedeemProduct.amount}
                value={redeemAmount}
                onChange={(e) => setRedeemAmount(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">USDT</span>
            </div>
            <div className="flex justify-between text-sm mb-6">
              <span className="text-gray-400">可赎回上限: {currentRedeemProduct.amount} USDT</span>
              <button 
                className="text-primary hover:text-primary/80 transition-colors"
                onClick={handleRedeemAll}
              >
                全部赎回
              </button>
            </div>
            
            <div className="bg-dark p-4 rounded-lg mb-6">
              <h4 className="text-sm font-medium mb-3">赎回预览</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">赎回本金</span>
                <span className="font-bold">{redeemAmount || '--'} USDT</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">预估收益（已计算）</span>
                <span className="text-success font-bold">{estimatedEarnings} USDT</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-800">
                <span className="font-medium">到账总额</span>
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
            确认赎回
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedeemModal;