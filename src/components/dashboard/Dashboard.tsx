import React from 'react';
import { Layout } from 'antd';
import Header from '@components/header/index';
import PageLayout from '@components/PageLayout';

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
