import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-light border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <i className="fa fa-link text-white text-sm"></i>
              </div>
              <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">ChainVest</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">Decentralized finance platform for growing your digital assets</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fa fa-telegram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fa fa-discord"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fa fa-medium"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Liquidity Mining</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Staking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NFT Investment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Arbitrage Strategies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 ChainVest. All rights reserved</p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">Investment involves risks, invest cautiously</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
