
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

export const addNewTabTols = (tabKey:string) => {
  const ls = localStorage.getItem('savedTabs');
  const savedTabs: string[] = ls ? JSON.parse(ls) : [];
  const hasTab = savedTabs.includes(tabKey);
  if (!hasTab) {
    savedTabs.push(tabKey);
    localStorage.setItem('savedTabs', JSON.stringify(savedTabs));
  }
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

export const removeTabFromls = (key:string) => {
  const ls = localStorage.getItem('savedTabs');
  const savedTabs: string[] = ls ? JSON.parse(ls) : [];
  const editedTabs = savedTabs.filter((tabKey) => tabKey !== key);

  localStorage.setItem('savedTabs', JSON.stringify(editedTabs));
};

/*
export const addNewKey = (key:string) => {
  const ls = localStorage.getItem('savedTabs');
  const savedTabs: string[] = ls ? JSON.parse(ls) : [];
  const hasTab = savedTabs.includes(key);
  if (!hasTab) {
    savedTabs.push(key);
    localStorage.setItem('savedTabs', JSON.stringify(savedTabs));
  }
};

export const getAllTabs = ():string[] => {
  const ls = localStorage.getItem('savedTabs');
  const savedTabs: string[] = ls ? JSON.parse(ls) : [];
  if (ls) {
    return savedTabs;
  }
  localStorage.setItem('savedTabs', JSON.stringify(savedTabs));
  return [];
};

export const removeTab = (key:string) => {
  const ls = localStorage.getItem('savedTabs');
  const savedTabs: string[] = ls ? JSON.parse(ls) : [];
  const editedTabs = savedTabs.filter((tabKey) => tabKey !== key);

  localStorage.setItem('savedTabs', JSON.stringify(editedTabs));
};
*/
