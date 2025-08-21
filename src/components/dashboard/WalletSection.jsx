import React from 'react';
import { useModal } from '../../contexts/ModalContext';

const WalletSection = () => {
  const { openDepositModal } = useModal();
  
  const tokens = [
    {
      name: 'USDT',
      fullName: 'Tether',
      balance: '8,342.15',
      usdValue: '8,342.15',
      change: '+0.24%',
      isPositive: true,
      icon: <i className="fa fa-usd text-blue-400"></i>,
      bgColor: 'bg-blue-600/20'
    },
    {
      name: 'ETH',
      fullName: 'Ethereum',
      balance: '3.245',
      usdValue: '6,842.35',
      change: '+1.56%',
      isPositive: true,
      icon: <i className="fa fa-ethereum text-gray-400"></i>,
      bgColor: 'bg-gray-600/20'
    },
    {
      name: 'BTC',
      fullName: 'Bitcoin',
      balance: '0.452',
      usdValue: '23,456.78',
      change: '-0.87%',
      isPositive: false,
      icon: <i className="fa fa-btc text-orange-400"></i>,
      bgColor: 'bg-orange-600/20'
    }
  ];
  
  return (
    <section className="mb-12" id="wallet">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">我的钱包</h2>
        <button className="text-primary hover:text-primary/80 text-sm transition-colors flex items-center">
          <span>查看全部</span>
          <i className="fa fa-chevron-right ml-1 text-xs"></i>
        </button>
      </div>

      {/* 代币列表 - 增强视觉效果 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {tokens.map((token) => (
          <div 
            key={token.name}
            className="bg-dark-light rounded-xl p-5 border border-gray-800 
                      hover:border-primary/30 transition-all duration-300
                      shadow-lg shadow-black/5 hover:shadow-primary/5
                      transform hover:-translate-y-1"
          >
            {/* 添加顶部装饰条 */}
            <div className={`absolute top-0 left-0 right-0 h-1 ${
              token.name === 'USDT' ? 'bg-blue-500' :
              token.name === 'ETH' ? 'bg-gray-500' :
              'bg-orange-500'
            }`}></div>
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full ${token.bgColor} flex items-center justify-center`}>
                  {token.icon}
                </div>
                <div>
                  <h4 className="font-medium">{token.name}</h4>
                  <p className="text-gray-400 text-sm">{token.fullName}</p>
                </div>
              </div>
              <span className={`text-sm px-2 py-0.5 rounded-full ${
                token.isPositive ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
              }`}>
                {token.change}
              </span>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-400 text-sm">余额</p>
              <p className="text-xl font-bold">{token.balance} {token.name}</p>
              <p className="text-gray-400 text-sm mt-1">${token.usdValue}</p>
            </div>
            
            <div className="flex space-x-2">
              <button 
                className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary text-sm py-2 rounded-lg transition-colors" 
                onClick={() => openDepositModal(token.name)}
              >
                充值
              </button>
              <button className="flex-1 bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 text-sm py-2 rounded-lg transition-colors">
                提现
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WalletSection;