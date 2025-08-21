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
            <p className="text-gray-400 text-sm mb-4">去中心化金融理财平台，让您的数字资产实现增值</p>
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
            <h4 className="font-bold mb-4">产品</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">流动性挖矿</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">质押理财</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NFT 投资</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">套利策略</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">支持</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">帮助中心</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">常见问题</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">安全中心</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">法律</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">服务条款</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">风险提示</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2023 Web3 Finance. 保留所有权利</p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">投资有风险，理财需谨慎</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
