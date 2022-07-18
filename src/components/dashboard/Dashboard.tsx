import React from 'react';
import { ConfigProvider } from 'antd';
import { DatePicker as DatePickerJalali, JalaliLocaleListener } from 'antd-jalali';
import faIR from 'antd/lib/locale/fa_IR';

const Dashboard: React.FC = () => (
  <ConfigProvider locale={faIR} direction='rtl'>
    <JalaliLocaleListener />
    <DatePickerJalali
      className='w-100'
    />
    <DatePickerJalali.RangePicker />
  </ConfigProvider>
);

export default Dashboard;
