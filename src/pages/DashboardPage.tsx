import React from 'react';
import { Layout, Col, Row } from 'antd';
import Header from '@components/header';
import PageLayout from '@components/PageLayout';
import Sidebar from '@components/sidebar';
import { adminMenu } from '@components/menus';
import TabBar from '../TabBar';

// todo why nested layout

const DashboardPage = () => (

  <Layout>
    <Header name='Name' />
    <Layout>
      <PageLayout>
        <Row className='h-100'>
          <Col xs={24} className='h-inherit'>
            <TabBar />
          </Col>
        </Row>
      </PageLayout>
      <Sidebar menuItems={adminMenu} />
    </Layout>
  </Layout>
);

export default DashboardPage;
