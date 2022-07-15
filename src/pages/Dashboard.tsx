import React from 'react';
import { Layout } from 'antd';
import Header from '@components/header';
import PageLayout from '@components/PageLayout';

// todo why nested layout

const Dashboard = () => {
  const dashboard = 'dashboard';
  return (
    <Layout>
      <Header name="Name" />
      <Layout>
        <PageLayout>
          <p>Hello</p>
        </PageLayout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;