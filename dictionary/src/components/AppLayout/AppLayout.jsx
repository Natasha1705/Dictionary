import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AppLayout.css';

function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;