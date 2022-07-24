import React from 'react';
import { Tabs } from 'antd';
import { DownSquareOutlined } from '@ant-design/icons';
import {
  getAllTabsFromls, addNewTabTols, removeTabFromls, getlsActiveTabKey, setlsActiveTabKey,
} from '@utils/TabStorageService';
import { allMenuItems as menuItems } from '@components/menus/allMenuItems';

import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

const { TabPane } = Tabs;

const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTabKey, setActiveTabKey] = React.useState('');
  const [openedTabsKey, setOpenedTabsKey] = React.useState(['']);

  React.useEffect(() => {
    const lsOpenedTabes = getAllTabsFromls();
    setOpenedTabsKey(lsOpenedTabes);

    const lsActiveTabKey = getlsActiveTabKey();
    setActiveTabKey(lsActiveTabKey);
    navigate(lsActiveTabKey);
  }, []);

  React.useEffect(() => {
    const { pathname } = location;

    const activePageKey = pathname.split('/').pop();
    if (activePageKey === 'panel') return;

    const lsActiveTabKey = getlsActiveTabKey();
    if (activePageKey === lsActiveTabKey) return;

    const tabIsActive = openedTabsKey.some((tabKey) => tabKey === activePageKey);
    if (activePageKey) {
      setActiveTabKey(activePageKey);
      setlsActiveTabKey(activePageKey);
    }

    if (!tabIsActive && activePageKey) {
      setOpenedTabsKey((prevState) => [...prevState, activePageKey]);
      addNewTabTols(activePageKey);
    }
  }, [location, location.pathname]);

  const remove = (targetKey: string) => {
    const newOpenedTabsKey = openedTabsKey.filter((key) => key !== targetKey);
    setOpenedTabsKey(newOpenedTabsKey);
    removeTabFromls(targetKey);
  };

  const onEdit = (targetKey: string | any, action: 'add' | 'remove') => {
    if (action === 'remove') {
      remove(targetKey);
    }
  };

  return (
    <Tabs
      activeKey={activeTabKey}
      size='small'
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
        height: '3rem',
      }}
      tabBarGutter={10}
      type='editable-card'
    >
      {(openedTabsKey.length !== 0) && (openedTabsKey.map((tabKey) => (
        <TabPane
          tab={menuItems[tabKey]?.title}
          key={tabKey}
        />
      ))
      )}
    </Tabs>
  );
};

export default TabBar;

/*
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
*/
