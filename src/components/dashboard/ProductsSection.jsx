import React, { useState } from 'react';
import PurchaseModal from '../modals/PurchaseModal';
import { useModal } from '../../contexts/ModalContext'; // New import

const ProductsSection = () => {
  const { openPurchaseModal, openRedeemModal } = useModal(); // Get redemption modal method
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Product data
  const products = [
    { 
      id: 1, 
      name: "DeFi Liquidity Mining", 
      returnRate: "12.5%", 
      risk: "Medium Risk", 
      period: "Flexible Term",
      minInvestment: 100 
    },
    { 
      id: 2, 
      name: "NFT Staking Program", 
      returnRate: "18.2%", 
      risk: "High Risk", 
      period: "90 days",
      minInvestment: 500 
    },
    { 
      id: 3, 
      name: "Stablecoin Yield Aggregator", 
      returnRate: "5.8%", 
      risk: "Low Risk", 
      period: "30 days",
      minInvestment: 50 
    }
  ];

  // Purchased investment products data
  const purchasedProducts = [
    { 
      id: 101, 
      productId: 1, 
      name: "DeFi Liquidity Mining (12.5%)", // Contains return rate for calculation
      amount: 2000, 
      purchaseDate: "2023-06-10", 
      endDate: "Flexible Term", 
      currentEarnings: 45.25, 
      status: "Holding"
    },
    { 
      id: 102, 
      productId: 3, 
      name: "Stablecoin Yield Aggregator (5.8%)", // Contains return rate for calculation
      amount: 1000, 
      purchaseDate: "2023-05-20", 
      endDate: "2023-06-20", 
      currentEarnings: 48.33, 
      status: "Holding"
    }
  ];
  
  return (
    <section className="mb-12">
      {/* Available Investment Products */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Available Products</h2>
          <button className="text-primary hover:text-primary/80 font-medium flex items-center">
            View All <i className="fa fa-arrow-right ml-2"></i>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Product card content remains unchanged */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl text-black font-semibold">{product.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${ 
                  product.risk === 'High Risk' ? 'bg-red-100 text-red-600' : 
                  product.risk === 'Medium Risk' ? 'bg-yellow-100 text-yellow-600' : 
                  'bg-green-100 text-green-600' 
                }`}>
                  {product.risk}
                </span>
              </div>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary">{product.returnRate}</p>
                <p className="text-gray-500">Expected Annual Return</p>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Investment Term</span>
                  <span className="font-medium text-indigo-900	">{product.period}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Minimum Investment</span>
                  <span className="font-medium text-indigo-900	">{product.minInvestment} USDT</span>
                </div>
              </div>
              
              <button 
                onClick={() => openPurchaseModal(product)}
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Invest Now
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* My Investments */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Investments</h2>
          <button className="text-primary hover:text-primary/80 font-medium flex items-center">
            View All <i className="fa fa-arrow-right ml-2"></i>
          </button>
        </div>
        
        <div className="bg-dark-light rounded-xl overflow-hidden border border-gray-800">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Product Name</th>
                  <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Investment Amount</th>
                  <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Purchase Date</th>
                  <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Maturity Date</th>
                  <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Current Earnings</th>
                  <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Status</th>
                  <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {purchasedProducts.map((product) => (
                  <tr 
                    key={product.id}
                    className="border-b border-gray-800 hover:bg-dark-lighter/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium">{product.name}</td>
                    <td className="px-6 py-4">{product.amount} USDT</td>
                    <td className="px-6 py-4 text-gray-400">{product.purchaseDate}</td>
                    <td className="px-6 py-4">{product.endDate}</td>
                    <td className="px-6 py-4 text-success">{product.currentEarnings} USDT</td>
                    <td className="px-6 py-4">
                      <span className="bg-success/10 text-success text-xs px-2 py-1 rounded-full">
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        className="text-primary hover:text-primary/80 text-sm transition-colors"
                        disabled={product.status !== "Holding"}
                        onClick={() => openRedeemModal(product)} // Open redemption modal
                      >
                        Redeem
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <PurchaseModal />
    </section>
  );
};

export default ProductsSection;