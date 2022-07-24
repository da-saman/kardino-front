import styled from 'styled-components';

export const TabsContainerStyled = styled.div`
* {
  font-size: 13px;
  color: #455A64;

}

.ant-tabs-tab {
  background-color: #ffffff !important; 
}

.ant-tabs-ink-bar {
  background-color: #8BC240;
  visibility: visible !important;
  height: 2px;
}

.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: #455A64;
  /* color: #8BC240; */

}
`;
