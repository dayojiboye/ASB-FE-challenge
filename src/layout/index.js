import React from 'react';

import Header from '../components/ui/header';
import ModuleTab from '../components/module__tab';
import ModuleSider from '../components/module__sider';
import ModuleTable from '../components/module__table';

import './styles.scss';

const Layout = () => {
  return (
    <div className="app_layout _max_width">
      <Header />
      
      <main className="app_layout__main">
        <ModuleTab />
        <ModuleSider />
        <ModuleTable />
      </main>
    </div>
  );
};

export default Layout;
