import React from 'react';
import {
  Layout, Col, Row, ConfigProvider,
} from 'antd';
import Header from '@components/header';
import PageLayout from '@components/PageLayout';
import Sidebar from '@components/sidebar';
import { Outlet } from 'react-router-dom';
import menuItems from '@components/menus/adminMenu';

import TabBar from '@components/tabbar';

const DashboardPage = () => (
  <Layout>
    <Header name='Name' />
    <Layout>
      <PageLayout>

        <Row className='h-100'>
          <Col xs={24} className='h-inherit'>
            <ConfigProvider direction='rtl'>
              <TabBar />
            </ConfigProvider>
            <Outlet />
          </Col>
        </Row>
      </PageLayout>
      <ConfigProvider direction='rtl'>
        <Sidebar menuItems={menuItems} />
      </ConfigProvider>
    </Layout>
  </Layout>
);

export default DashboardPage;
