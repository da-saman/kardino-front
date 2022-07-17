import React from 'react';
import { Layout } from 'antd';
import Header from '@components/header';
import PageLayout from '@components/PageLayout';
import Sidebar from '@components/sidebar';
import { adminMenu } from '@components/menus';
import { Outlet } from 'react-router-dom';

// todo why nested layout

const Dashboard = () => (
  <Layout>
    <Header name='Name' />
    <Layout>
      <PageLayout>
        <p>Sould Be here</p>
        <Outlet />
      </PageLayout>
      <Sidebar menuItems={adminMenu} />
    </Layout>
  </Layout>
);

export default Dashboard;
