import React, { useState } from 'react';
import PurchaseModal from '../modals/PurchaseModal';

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 产品数据
  const products = [
    { 
      id: 1, 
      name: "DeFi 流动性挖矿", 
      returnRate: "12.5%", 
      risk: "中风险", 
      period: "灵活期限",
      minInvestment: 100 
    },
    { 
      id: 2, 
      name: "NFT 质押计划", 
      returnRate: "18.2%", 
      risk: "高风险", 
      period: "90天",
      minInvestment: 500 
    },
    { 
      id: 3, 
      name: "稳定币收益聚合", 
      returnRate: "5.8%", 
      risk: "低风险", 
      period: "30天",
      minInvestment: 50 
    }
  ];
  
  // 打开购买模态框
  const openPurchaseModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">理财产品</h2>
        <button className="text-primary hover:text-primary/80 font-medium flex items-center">
          查看全部 <i className="fa fa-arrow-right ml-2"></i>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div 
            key={product.id} 
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl text-black font-semibold">{product.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                product.risk === '高风险' ? 'bg-red-100 text-red-600' :
                product.risk === '中风险' ? 'bg-yellow-100 text-yellow-600' :
                'bg-green-100 text-green-600'
              }`}>
                {product.risk}
              </span>
            </div>
            
            <div className="mb-6">
              <p className="text-3xl font-bold text-primary">{product.returnRate}</p>
              <p className="text-gray-500">预期年化收益</p>
            </div>
            
            <div className="border-t border-gray-100 pt-4 mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">投资期限</span>
                <span className="font-medium text-indigo-900	">{product.period}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">起投金额</span>
                <span className="font-medium text-indigo-900	">{product.minInvestment} USDT</span>
              </div>
            </div>
            
            <button 
              onClick={() => openPurchaseModal(product)}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-colors"
            >
              立即投资
            </button>
          </div>
        ))}
      </div>
      
      {isModalOpen && selectedProduct && (
        <PurchaseModal 
          product={selectedProduct} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </section>
  );
};

export default ProductsSection;
    