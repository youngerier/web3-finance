import React from 'react';

const AssetOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Assets */}
      <div className="gradient-border bg-dark-light p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <p className="text-gray-400 text-sm mb-2">Total Assets (USD)</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">12,489.52</h3>
          <div className="flex items-center text-success text-sm">
            <i className="fa fa-arrow-up mr-1"></i>
            <span>3.2%</span>
            <span className="text-gray-400 ml-1">Past 7 days</span>
          </div>
        </div>
      </div>
      
      {/* Available Balance */}
      <div className="gradient-border bg-dark-light p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <p className="text-gray-400 text-sm mb-2">Available Balance (USD)</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">8,342.15</h3>
          <button className="text-primary text-sm hover:text-primary/80 transition-colors mt-2 flex items-center">
            <span>Deposit/Withdraw</span>
            <i className="fa fa-chevron-right ml-1 text-xs"></i>
          </button>
        </div>
      </div>
      
      {/* Total Earnings */}
      <div className="gradient-border bg-dark-light p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative">
          <p className="text-gray-400 text-sm mb-2">Total Earnings (USD)</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">1,245.89</h3>
          <div className="flex items-center text-success text-sm">
            <i className="fa fa-arrow-up mr-1"></i>
            <span>12.5%</span>
            <span className="text-gray-400 ml-1">Annualized Return Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetOverview;
