import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }) => 
    isActive 
      ? 'text-primary font-medium hover:text-primary/80 transition-colors' 
      : 'text-gray-300 hover:text-white transition-colors';

  return (
    <header className="glass-effect border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* 品牌标识 */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <i className="fa fa-link text-white text-xl"></i>
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">ChainVest</h1>
        </div>

        {/* 主导航 - 桌面版 */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={getLinkClass}>首页</NavLink>
          <NavLink to="/wallet" className={getLinkClass}>我的钱包</NavLink>
          <NavLink to="/products" className={getLinkClass}>理财产品</NavLink>
          <NavLink to="/history" className={getLinkClass}>交易记录</NavLink>
          <NavLink to="/market" className={getLinkClass}>市场动态</NavLink>
        </nav>

        {/* 用户区域 */}
        <div className="flex items-center space-x-4">
          <button 
            className="text-gray-300 hover:text-white transition-colors"
            onClick={toggleDarkMode}
            title={darkMode ? '切换到亮色模式' : '切换到深色模式'}
          >
            <i className={`fa ${darkMode ? 'fa-sun-o' : 'fa-moon-o'}`}></i>
          </button>

          <button className="hidden md:flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
            <i className="fa fa-bell-o"></i>
            <span className="absolute top-2 right-24 w-2 h-2 bg-danger rounded-full"></span>
          </button>
          
          {/* 用户下拉菜单 */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center space-x-2 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-dark-lighter overflow-hidden border border-gray-700">
                <img src="https://picsum.photos/id/237/200/200" alt="用户头像" className="w-full h-full object-cover" />
              </div>
              <span className="hidden md:inline text-sm font-medium">0x71C...f8D2</span>
              <i className="fa fa-chevron-down text-xs text-gray-400"></i>
            </button>
            
            {/* 下拉菜单 */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 glass-effect rounded-lg shadow-lg border border-gray-800 opacity-100 visible transition-all duration-200 transform translate-y-0 z-50">
                <div className="p-3 border-b border-gray-800">
                  <p className="text-xs text-gray-400">账户</p>
                  <p className="text-sm font-medium truncate">0x71C97f2E5a8f53f8D2</p>
                </div>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-dark-lighter transition-colors">
                    <i className="fa fa-user-o mr-2 text-gray-400"></i>个人资料
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-dark-lighter transition-colors">
                    <i className="fa fa-cog mr-2 text-gray-400"></i>设置
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-danger hover:bg-dark-lighter transition-colors">
                    <i className="fa fa-sign-out mr-2"></i>断开连接
                  </a>
                </div>
              </div>
            )}
          </div>
          
          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-gray-800">
          <nav className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <NavLink to="/" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>首页</NavLink>
            <NavLink to="/wallet" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>我的钱包</NavLink>
            <NavLink to="/products" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>理财产品</NavLink>
            <NavLink to="/history" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>交易记录</NavLink>
            <NavLink to="/market" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>市场动态</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
