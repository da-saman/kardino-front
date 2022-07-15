import React from 'react';
import { Layout } from 'antd'


const Dashboard = () => {
  const dashboard = 'dashboard';
  return (
    <Layout>
      <Header name="Name" />
      <Layout>
        <Sidebar menuItems={adminMenu} />
        <PageLayout>
          <Switch>
            {mainRoutes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
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