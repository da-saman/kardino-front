import React from 'react';
import { Layout, Col, Row } from 'antd';
import Header from '@components/header';
import PageLayout from '@components/PageLayout';
import Sidebar from '@components/sidebar';
import { Outlet } from 'react-router-dom';
import menuItems from '@components/menus/adminMenu';

import TabBar from '../TabBar';

const DashboardPage = () => (
  <Layout>
    <Header name='Name' />
    <Layout>
      <PageLayout>
        <Row className='h-100'>
          <Col xs={24} className='h-inherit'>
            <TabBar />
            <Outlet />
          </Col>
        </Row>
      </PageLayout>
      <Sidebar menuItems={menuItems} />
    </Layout>
  </Layout>
);

export default DashboardPage;
