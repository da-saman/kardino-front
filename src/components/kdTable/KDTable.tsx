import React, { useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import {
  Button, ConfigProvider, Space, Tag,
} from 'antd';
import faIRIntl from 'antd/lib/locale/fa_IR';

type GithubIssueItem = {
    url: string;
    id: number;
    number: number;
    title: string;
    labels: {
        name: string;
        color: string;
    }[];
    state: string;
    comments: number;
    created_at: string;
    updated_at: string;
    closed_at?: string;
};

const response: GithubIssueItem[] = [
  {
    id: 624556297,
    number: 6680,
    title: 'title 1',
    labels: [
      {
        name: 'bug',
        color: 'error',
      },
    ],
    state: 'open',
    comments: 0,
    created_at: '2020-05-26T02:13:47Z',
    updated_at: '2020-05-26T02:13:47Z',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  },
  {
    id: 624415799,
    number: 6678,
    title: 'title 2',
    labels: [
      {
        name: 'bug',
        color: 'error',
      },
    ],
    state: 'open',
    comments: 1,
    created_at: '2020-05-25T17:34:21Z',
    updated_at: '2020-05-26T03:05:55Z',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  },
  {
    id: 624300343,
    number: 6675,
    title: 'build(deps-dev): bump eslint from 6.8.0 to 7.1.0',
    labels: [
      {
        name: 'dependencies',
        color: 'default',
      },
    ],
    state: 'open',
    comments: 0,
    created_at: '2020-05-25T13:27:09Z',
    updated_at: '2020-05-25T13:27:10Z',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  },
  {
    id: 624130987,
    number: 6674,
    title: 'title 3',
    labels: [
      {
        name: 'question',
        color: 'success',
      },
    ],
    state: 'open',
    comments: 3,
    created_at: '2020-05-25T08:20:31Z',
    updated_at: '2020-05-26T07:37:47Z',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  },
  {
    id: 623677811,
    number: 6663,
    title: 'title 4',
    state: 'open',
    comments: 1,
    created_at: '2020-05-23T15:00:49Z',
    updated_at: '2020-05-24T23:47:37Z',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    labels: [
      {
        name: 'question',
        color: 'processing',
      },
    ],
  },
];
const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'عنوان',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tip: 'عنوان اگر خیلی طولانی باشد کوتاه می شود',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'این فیلد الزامی است',
        },
      ],
    },
    width: '30%',
    search: false,
  },
  {
    title: 'وضعیت',
    dataIndex: 'state',
    initialValue: 'open',
    filters: true,
    onFilter: true,
    valueEnum: {
      all: { text: 'کل', status: 'Default' },
      open: {
        text: 'حل نشده',
        status: 'Error',
      },
      closed: {
        text: 'حل شده',
        status: 'Success',
      },
      processing: {
        text: 'در حال بررسی',
        status: 'Processing',
      },
    },
  },
  {
    title: 'برچسب',
    dataIndex: 'labels',
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: 'تاریخ ایجاد',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: 'استخدام',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="link">
        رابط
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: 'کبی' },
          { key: 'delete', name: 'حذف' },
        ]}
      />,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();

  return (
    <ConfigProvider locale={faIRIntl} direction="rtl">
      <ProTable<GithubIssueItem>
        columns={columns}
        actionRef={actionRef}
        dataSource={response}
        pagination={{
          pageSize: 5,
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        dateFormatter="string"
        headerTitle="مدل حرفه ای"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            جديد
          </Button>,
        ]}
      />
    </ConfigProvider>
  );
};
