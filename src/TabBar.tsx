import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import {
  useNavigate, Outlet, useLocation,
} from 'react-router-dom';

type tabType = {
    title: string;
    path: string;
    content: string;
    key: string;
}

const { TabPane } = Tabs;

const openTabs: tabType[] = [
  {
    title: 'Tab 1', path: 'Tab1', content: 'Content of Tab 1', key: '1',
  },
  {
    title: 'Tab 2', path: 'Tab2', content: 'Content of Tab 2', key: '2',
  },
  {
    title: 'Tab 3', path: 'Tab3', content: 'Content of Tab 3', key: '3',
  },
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

  const [tabs, setTabs] = React.useState(openTabs);
  const [activeKey, setActiveKey] = React.useState('1');

  const newTabIndex = React.useRef(0);

  // const openedTab = openTabs.filter((tab) => `/dashboard/${tab.path}` === location.pathname);

  // React.useEffect(() => {
  //   console.log(openedTab);
  //   setActiveKey(openedTab[0]?.key);
  // }, [openedTab, openTabs]);

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current + 1}`;
    setTabs([...tabs, {
      title: 'New Tab', path: 'NewTab', content: 'New Tab Pane', key: newActiveKey,
    }]);
    setActiveKey(newActiveKey);
  };

  const removeTab = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    tabs.forEach((tab, i) => {
      if (tab.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newTabs = tabs.filter((tab) => tab.key !== targetKey);
    if (newTabs.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newTabs[lastIndex].key;
      } else {
        newActiveKey = newTabs[0].key;
      }
    }
    setTabs(newTabs);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      removeTab(targetKey);
    }
  };

  const tabClickHandler = (tabKey : string) => {
    // const [clickedTab] = tabs.filter((tab) => tab.key === tabKey);
    // setActiveKey(tabKey);
    // const newActiveTab = clickedTab;
    // navigate(`./${newActiveTab.title}`);
    // console.log(newActiveTab);
  };
  const onChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <Tabs
      type='editable-card'
      // hideAdd
      onEdit={onEdit}
      // defaultActiveKey='0'
      onChange={onChange}
      activeKey={activeKey}
      tabBarStyle={{
        backgroundColor: 'yellow',
        padding: '0 1rem',
      }}
      onTabClick={(key) => tabClickHandler(key)}
    >

      <Outlet />

      {openTabs.map((tab) => (
        <TabPane tab={tab.title} key={tab.key} closable>
          {tab.content}
        </TabPane>
      ))}

    </Tabs>
  );
};

export default TabBar;
