import React, { useEffect, useCallback } from 'react';
import { Tabs } from 'antd';
import {
  useNavigate, Outlet, useLocation, Location,
} from 'react-router-dom';
import { DownSquareOutlined } from '@ant-design/icons';
import Card from '@components/auth/authCard';

type PaneType = {
  title: string;
  path: string;
  content: string;
  key: string;
}

const { TabPane } = Tabs;

const initialPanes = [
  {
    title: 'Tab1', path: 'Tab1', content: 'Content of Tab 1', key: '1',
  },

];

const menuItems = [
  {
    title: 'users', path: 'users', content: 'Content of Tab 4', key: '4',
  },
  {
    title: 'companies', path: 'companies', content: 'Content of Tab 5', key: '5',
  },
];

const TabBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeKey, setActiveKey] = React.useState(initialPanes[0].key || '');
  const [panes, setPanes] = React.useState(initialPanes);

  useEffect(() => {
    const { pathname } = location;
    const activeMenuItem = menuItems.find((menuItem) => `/dashboard/${menuItem.path}` === pathname);
    const menuItemIsActive = panes.some((menuItem) => `/dashboard/${menuItem.path}` === pathname);

    if (activeMenuItem) setActiveKey(activeMenuItem.key);
    if (!menuItemIsActive && activeMenuItem) setPanes((prevState) => [...prevState, activeMenuItem]);
  }, [location.pathname]);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
    const activePane = panes.find((pane) => pane.key === newActiveKey);
    const activePath = activePane?.path || 'login';
    navigate(activePath);
  };

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setPanes(newPanes);
    setActiveKey(newActiveKey);
  };
  const onEdit = (targetKey: string | any, action: 'add' | 'remove') => {
    if (action === 'remove') {
      remove(targetKey);
    }
  };

  const tabClickHandler = (tabKey : string) => {
    const clickedTab = panes.filter((tab) => tab.key === tabKey);
    setActiveKey(tabKey);
    const [newActiveTab] = clickedTab;
    navigate(`./${newActiveTab.title}`);
  };

  return (
    <Tabs
      moreIcon={<DownSquareOutlined />}
      type='editable-card'
      activeKey={activeKey}
      onChange={onChange}
      onEdit={onEdit}
      hideAdd
      tabBarStyle={{
        backgroundColor: 'yellow',
        padding: '0.5rem 1rem',
      }}
      animated={{ inkBar: false, tabPane: false }}
      onTabClick={(key) => tabClickHandler(key)}
      tabBarGutter={10}
    >
      {panes.map((pane) => (
        <TabPane tab={pane.title} key={pane.key}>
          <Card>
            <Outlet />
          </Card>
          {pane.content}
        </TabPane>

      ))}
    </Tabs>
  );
};

export default TabBar;
