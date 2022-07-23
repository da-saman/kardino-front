// import React, { useEffect } from 'react';
import React from 'react';
import { Tabs } from 'antd';
import { DownSquareOutlined } from '@ant-design/icons';
import { getAllTabs, removeTab } from '@utils/TabStorageService';
import { allMenuItems as menuItems } from '@components/menus/allMenuItems';

import {
  useNavigate,
} from 'react-router-dom';

const { TabPane } = Tabs;

const TabBar = () => {
  const [tabChanged, setTabChanged] = React.useState(false);

  const onEdit = (targetKey: string | any, action: 'add' | 'remove') => {
    if (action === 'remove') {
      removeTab(targetKey);
      setTabChanged(!tabChanged);
    }
  };
  const allTabs = getAllTabs();
  const navigate = useNavigate();
  return (
    <Tabs
      animated={{ inkBar: false, tabPane: false }}
      hideAdd
      moreIcon={<DownSquareOutlined />}
      onEdit={onEdit}
      onTabClick={(key) => {
        navigate(menuItems[key].path);
      }}
      tabBarStyle={{
        backgroundColor: 'yellow',
        padding: '0.5rem 1rem',
      }}
      tabBarGutter={10}
      type='editable-card'
    >
      {allTabs.map((tabKey) => (
        <TabPane
          tab={menuItems[tabKey].title}
          key={tabKey}
        />
      ))}
    </Tabs>
  );
};

export default TabBar;

// const TabBar: React.FC = () => {
//   const navigate = useNavigate();
//   const params = useParams();

//   const [activeKey, setActiveKey] = React.useState(initialPanes[0].key || '');
//   const [panes, setPanes] = React.useState(initialPanes);

//   useEffect(() => {
//     const storedOpenedTabes: MenuItem[] = getOpenedTabs();
//     console.log(storedOpenedTabes);

//     setPanes(storedOpenedTabes);

//     const storedActiveKey = getOpenedActiveKey();
//     console.log(storedActiveKey);

//     setActiveKey(storedActiveKey);
//   }, []);

//   useEffect(() => {
//     const { menuItemId } = params;
//     const activeMenuItem = allMenuItems.find((item) => `${item.path}` === menuItemId);
//     const menuItemIsActive = panes.some((pane) => `${pane.key}` === activeMenuItem?.key);

//     if (activeMenuItem) {
//       setActiveKey(activeMenuItem.key);
//       setOpenedActiveKey(activeMenuItem.key);
//     }

//     if (activeMenuItem && !menuItemIsActive) {
//       setPanes((prevState) => [...prevState, activeMenuItem]);
//       setOpenedTab(activeMenuItem);
//     }
//   }, [params.menuItemId]);

//   const onChange = (newActiveKey: string) => {
//     setActiveKey(newActiveKey);
//     const activePane = panes.find((pane) => pane.key === newActiveKey);
//     const activePath = activePane?.path || 'login';
//     navigate(activePath);
//   };

//   const remove = (targetKey: string) => {
//     let newActiveKey = activeKey;
//     let lastIndex = -1;
//     panes.forEach((pane, i) => {
//       if (pane.key === targetKey) {
//         lastIndex = i - 1;
//       }
//     });
//     const newPanes = panes.filter((pane) => pane.key !== targetKey);
//     if (newPanes.length && newActiveKey === targetKey) {
//       if (lastIndex >= 0) {
//         newActiveKey = newPanes[lastIndex].key;
//       } else {
//         newActiveKey = newPanes[0].key;
//       }
//     }
//     setPanes(newPanes);
//     setActiveKey(newActiveKey);
//   };

//   const tabClickHandler = (tabKey : string) => {
//     const clickedTab = panes.filter((tab) => tab.key === tabKey);
//     setActiveKey(tabKey);
//     const [newActiveTab] = clickedTab;
//     navigate(`./${newActiveTab.title}`);
//   };

//   return (
//     <Tabs
//       moreIcon={<DownSquareOutlined />}
//       type='editable-card'
//       activeKey={activeKey}
//       onChange={onChange}
//       onEdit={onEdit}
//       hideAdd
//       tabBarStyle={{
//         backgroundColor: 'yellow',
//         padding: '0.5rem 1rem',
//       }}
//       animated={{ inkBar: false, tabPane: false }}
//       onTabClick={(key) => tabClickHandler(key)}
//       tabBarGutter={10}
//     >
//       {panes.map((pane) => (
//         <TabPane tab={pane.title} key={pane.key}>
//           <Card>
//             <Outlet />
//           </Card>
//           {/* {pane.icon} */}
//         </TabPane>

//       ))}
//     </Tabs>
//   );
// };

// export default TabBar;
