import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Root } from '@/components/layout/Root';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="appContainer">
      <Header />
      <Root>{children}</Root>
      <Footer />
    </div>
  );
};

export default Layout;
