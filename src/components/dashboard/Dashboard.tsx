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

// import { Fragment } from 'react';

// import classes from './Layout.module.css';
// import MainNavigation from './MainNavigation';

// const Layout = (props) => {
//   return (
//     <Fragment>
//       <MainNavigation />
//       <main className={classes.main}>{props.children}</main>
//     </Fragment>
//   );
// };

// export default Layout;
