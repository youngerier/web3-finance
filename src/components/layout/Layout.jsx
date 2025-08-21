import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <div className="bg-dark text-gray-100 font-inter min-h-screen flex flex-col overflow-x-hidden">
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1 container mx-auto px-4 py-6 md:py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
