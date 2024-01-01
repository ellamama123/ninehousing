// Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
