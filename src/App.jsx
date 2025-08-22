import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AssetOverview from './components/dashboard/AssetOverview';
import AssetChart from './components/dashboard/AssetChart';
import WalletSection from './components/dashboard/WalletSection';
import ProductsSection from './components/dashboard/ProductsSection';
import TransactionHistory from './components/dashboard/TransactionHistory';
import DepositModal from './components/modals/DepositModal';
import PurchaseModal from './components/modals/PurchaseModal';
import RedeemModal from './components/modals/RedeemModal'; // Added import
import WithdrawModal from './components/modals/WithdrawModal';

const Dashboard = () => (
  <>
    {/* Welcome Area */}
    <section className="mb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-2">Welcome back, User</h2>
          <p className="text-gray-400">Grow your digital assets</p>
        </div>
      </div>

      <AssetOverview />
      <AssetChart />
    </section>
  </>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<WalletSection />} />
        <Route path="/products" element={<ProductsSection />} />
        <Route path="/history" element={<TransactionHistory />} />
        <Route path="/market" element={<div>Market Trends</div>} />
      </Routes>
      
      {/* 模态框 */}
      <DepositModal />
      <PurchaseModal />
      <RedeemModal /> {/* 新增赎回模态框 */}
      <WithdrawModal />
    </Layout>
  );
};

export default App;