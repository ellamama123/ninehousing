// Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';
import {useRouter} from 'next/router'; 

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter() 

  return (
    <div>
      <Header  />
      <div className={`${router.pathname !== "/" ? ' space-header' : '' }`} ></div>
      <main>{children}</main>
      <Footer />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
