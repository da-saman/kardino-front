export const getlsActiveTabKey = () => {
  const lsActiveKey = localStorage.getItem('activeKey');
  if (lsActiveKey) return lsActiveKey;
  return '';
};

export const setlsActiveTabKey = (key: string) => {
  localStorage.setItem('activeKey', key);
};

export const removeActiveTabKey = () => {
  localStorage.removeItem('activeKey');
};

export const getAllTabsFromls = ():string[] => {
  const ls = localStorage.getItem('savedTabs');
  const savedTabs: string[] = ls ? JSON.parse(ls) : [];
  if (ls) {
    return savedTabs;
  }
  localStorage.setItem('savedTabs', JSON.stringify(savedTabs));
  return [];
};

export const removeAllTabsFromls = () => {
  localStorage.removeItem('savedTabs');
};

export const addNewTabTols = (tabKey:string) => {
  const ls = localStorage.getItem('savedTabs');
  const savedTabs: string[] = ls ? JSON.parse(ls) : [];
  const hasTab = savedTabs.includes(tabKey);
  if (!hasTab) {
    savedTabs.push(tabKey);
    localStorage.setItem('savedTabs', JSON.stringify(savedTabs));
  }
};

export const removeTabFromls = (key:string) => {
  const ls = localStorage.getItem('savedTabs');
  const savedTabs: string[] = ls ? JSON.parse(ls) : [];
  const editedTabs = savedTabs.filter((tabKey) => tabKey !== key);

  localStorage.setItem('savedTabs', JSON.stringify(editedTabs));
};
