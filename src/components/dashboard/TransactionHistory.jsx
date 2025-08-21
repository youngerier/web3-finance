import React from 'react';

const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      type: '充值',
      icon: <i className="fa fa-plus text-success text-sm"></i>,
      iconBg: 'bg-success/10',
      product: 'USDT',
      amount: '+5,000 USDT',
      time: '2023-06-15 14:30',
      status: '已完成',
      statusColor: 'bg-success/10 text-success'
    },
    {
      id: 2,
      type: '购买',
      icon: <i className="fa fa-shopping-cart text-primary text-sm"></i>,
      iconBg: 'bg-primary/10',
      product: 'DeFi 流动性挖矿',
      amount: '-2,000 USDT',
      time: '2023-06-10 09:15',
      status: '已完成',
      statusColor: 'bg-success/10 text-success'
    },
    {
      id: 3,
      type: '收益',
      icon: <i className="fa fa-money text-accent text-sm"></i>,
      iconBg: 'bg-accent/10',
      product: 'NFT 质押计划',
      amount: '+156.25 USDT',
      time: '2023-06-05 00:00',
      status: '已到账',
      statusColor: 'bg-success/10 text-success'
    },
    {
      id: 4,
      type: '赎回',
      icon: <i className="fa fa-clock-o text-warning text-sm"></i>,
      iconBg: 'bg-warning/10',
      product: '跨链套利策略',
      amount: '+3,250 USDT',
      time: '2023-05-28 16:45',
      status: '处理中',
      statusColor: 'bg-warning/10 text-warning'
    }
  ];
  
  return (
    <section id="history" className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">交易记录</h2>
        <button className="text-primary hover:text-primary/80 text-sm transition-colors flex items-center">
          <span>查看全部</span>
          <i className="fa fa-chevron-right ml-1 text-xs"></i>
        </button>
      </div>

      <div className="bg-dark-light rounded-xl overflow-hidden border border-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">交易类型</th>
                <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">产品/币种</th>
                <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">金额</th>
                <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">时间</th>
                <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">状态</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr 
                  key={transaction.id}
                  className="border-b border-gray-800 hover:bg-dark-lighter/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full ${transaction.iconBg} flex items-center justify-center mr-3`}>
                        {transaction.icon}
                      </div>
                      <span>{transaction.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{transaction.product}</td>
                  <td className="px-6 py-4">{transaction.amount}</td>
                  <td className="px-6 py-4 text-gray-400">{transaction.time}</td>
                  <td className="px-6 py-4">
                    <span className={`${transaction.statusColor} text-xs px-2 py-1 rounded-full`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;
