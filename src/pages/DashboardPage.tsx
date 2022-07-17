import React from 'react';
import { Layout, Col, Row } from 'antd';
import Header from '@components/header';
import PageLayout from '@components/PageLayout';
import Sidebar from '@components/sidebar';
import { adminMenu } from '@components/menus';
import { Outlet } from 'react-router-dom';

// todo why nested layout

const DashboardPage = () => (

  <Layout>
    <Header name='Name' />
    <Layout>
      <PageLayout>
        <Row className='h-100'>
          <Col xs={0} lg={6} className='h-inherit'>
            <Outlet />
          </Col>
        </Row>
      </PageLayout>
      <Sidebar menuItems={adminMenu} />
    </Layout>
  </Layout>
);

export default DashboardPage;
