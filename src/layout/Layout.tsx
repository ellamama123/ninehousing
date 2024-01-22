// Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header  />
      <main>{children}</main>
      <Footer />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
