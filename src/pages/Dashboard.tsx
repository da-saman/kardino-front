import React from 'react';
import { Layout } from 'antd';
import Header from '@components/header';
import PageLayout from '@components/PageLayout';
import Sidebar from '@components/sidebar';
import { adminMenu } from '@components/menus';

// todo why nested layout

const Dashboard = () => (
  <Layout>
    <Header name="Name" />
    <Layout>
      <PageLayout>
        <p>Hello</p>
      </PageLayout>
      <Sidebar menuItems={adminMenu} />

    </Layout>
  </Layout>
);

export default Dashboard;
