import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AssetOverview from './components/dashboard/AssetOverview';
import AssetChart from './components/dashboard/AssetChart';
import WalletSection from './components/dashboard/WalletSection';
import ProductsSection from './components/dashboard/ProductsSection';
import TransactionHistory from './components/dashboard/TransactionHistory';
import DepositModal from './components/modals/DepositModal';
import PurchaseModal from './components/modals/PurchaseModal';

const Dashboard = () => (
  <>
    {/* 欢迎区域 */}
    <section className="mb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-2">欢迎回来，用户</h2>
          <p className="text-gray-400">让您的数字资产实现增值</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-primary/20 flex items-center">
            <i className="fa fa-plus-circle mr-2"></i>
            充值资产
          </button>
        </div>
      </div>

      <AssetOverview />
      <AssetChart />
    </section>

    <WalletSection />
    <ProductsSection />
    <TransactionHistory />
  </>
);

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductsSection />} />
        <Route path="/history" element={<TransactionHistory />} />
        <Route path="/market" element={<div>市场动态</div>} />
      </Routes>
      
      {/* 模态框 */}
      <DepositModal />
      <PurchaseModal />
    </Layout>
  );
};

export default App;
