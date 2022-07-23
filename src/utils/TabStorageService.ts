// interface MenuItemMap {
//   key: string
//   path?: string
// }

// export const getOpenedTabs = () => {
//   const openedTabes = localStorage.getItem('openedTabs');

//   if (openedTabes) {
//     return JSON.parse(openedTabes);
//   }

//   return [{
//     key: 'item0',
//     path: 'dashbard',

//   }];
// };

// export const setOpenedTab = (tab : MenuItemMap) => {
//   const storedOpenedTabes = localStorage.getItem('openedTabs');
//   const newTabes = storedOpenedTabes ? JSON.parse(storedOpenedTabes) : [];
//   newTabes.push(tab);

//   localStorage.setItem('openedTabs', JSON.stringify(newTabes));
// };

// export const removeStoredTab = (key: string) => {
//   const openedTabes = localStorage.getItem('openedTabs');
//   const newTabes = openedTabes ? JSON.parse(openedTabes) : [];
//   const newOpenedTab = newTabes.filter((tab :MenuItemMap) => tab.key !== key);

//   localStorage.setItem('openedTabs', JSON.stringify(newOpenedTab));
// };

// export const removeStoredTabs = () => {
//   localStorage.removeItem('openedTabs');
// };

// export const getOpenedActiveKey = () => {
//   const storedActiveKey = localStorage.getItem('activeKey');

//   if (storedActiveKey) {
//     return storedActiveKey;
//   }

//   return 'item1';
// };

// export const setOpenedActiveKey = (key: string) => {
//   localStorage.setItem('activeKey', key);
// };

// export const removeActiveKey = () => {
//   localStorage.removeItem('activeKey');
// };

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
