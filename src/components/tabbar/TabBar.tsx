import React from 'react';
import { Tabs } from 'antd';
import { DownSquareOutlined } from '@ant-design/icons';
import * as tabHandlers from '@utils/TabStorageService';
import { allMenuItems as menuItems } from '@components/menus/allMenuItems';
import { TabsContainerStyled as TabsContainer } from '@components/tabbar/TabsContainer.style';
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
    const lsOpenedTabes = tabHandlers.getAllTabsFromls();
    setOpenedTabsKey(lsOpenedTabes);

    const lsActiveTabKey = tabHandlers.getlsActiveTabKey();
    setActiveTabKey(lsActiveTabKey);
    navigate(lsActiveTabKey);
  }, []);

  React.useEffect(() => {
    const { pathname } = location;

    const activePageKey = pathname.split('/').pop();
    if (activePageKey === 'panel') return;

    const lsActiveTabKey = tabHandlers.getlsActiveTabKey();
    if (activePageKey === lsActiveTabKey) return;

    const tabIsActive = openedTabsKey.some((tabKey) => tabKey === activePageKey);
    if (activePageKey) {
      setActiveTabKey(activePageKey);
      tabHandlers.setlsActiveTabKey(activePageKey);
    }

    if (!tabIsActive && activePageKey) {
      setOpenedTabsKey((prevState) => [...prevState, activePageKey]);
      tabHandlers.addNewTabTols(activePageKey);
    }
  }, [location, location.pathname]);

  const remove = (targetKey: string) => {
    const lsOpenedTabes = tabHandlers.getAllTabsFromls();
    const newOpenedTabsKey = lsOpenedTabes.filter((key) => key !== targetKey);
    setOpenedTabsKey(newOpenedTabsKey);
    tabHandlers.removeTabFromls(targetKey);

    const lastActiveTab = newOpenedTabsKey.at(-1);

    if (newOpenedTabsKey.length === 0) {
      navigate('/panel', { replace: true });
      tabHandlers.removeActiveTabKey();
      tabHandlers.getAllTabsFromls();
    }
    if (lastActiveTab && newOpenedTabsKey.length > 0) {
      navigate(lastActiveTab, { replace: true });
      setActiveTabKey(lastActiveTab);
    }
  };

  const onEdit = (targetKey: string | any, action: 'add' | 'remove') => {
    if (action === 'remove') {
      remove(targetKey);
    }
  };

  return (
    <TabsContainer className='tabs-container'>
      <Tabs
        activeKey={activeTabKey}
        animated={{ inkBar: false, tabPane: false }}
        hideAdd
        moreIcon={<DownSquareOutlined />}
        onEdit={onEdit}
        onTabClick={(key) => {
          navigate(menuItems[key].path);
        }}
        tabBarStyle={{
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 15px 40px rgba(139, 194, 64, 0.16)',
          height: '33px',
        }}
        tabBarGutter={1}
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
    </TabsContainer>
  );
};

export default TabBar;
