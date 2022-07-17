import React from 'react';
import { Avatar, Dropdown, Row } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import AccountMenu from './AccountMenu';

interface Props {
  name: string
  onLogout: () => void
}

const HeaderAccount: React.FC<Props> = ({ name, onLogout }) => (
  <Row justify='center' align='middle'>
    <Avatar icon={<UserOutlined />} />
    <Dropdown arrow overlay={<AccountMenu onLogout={onLogout} />} className='ml-2' trigger={['click']}>
      <div role='button' className='pointer white ant-dropdown-link'>
        {name}
        <DownOutlined className='ml-3' />
      </div>
    </Dropdown>
  </Row>
);

export default HeaderAccount;
