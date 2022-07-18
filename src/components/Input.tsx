/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent, useState } from 'react';
import {
  Form, Input as AntInput, Select, Radio, DatePicker,
} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Control, Controller } from 'react-hook-form';
import { InputType } from '@constants/InputType';
import { MappedOption } from '../models';
import ErrorMessage from './FormErrorMessage';

interface Props {
  control: Control<any>
  name: string
  placeholder: string
  error?: string | false
  Icon?: FunctionComponent
  type?: InputType
  containerClassName?: string
  errorClassName?: string
  label?: string
  options?: MappedOption[]
  changeHandler?: () => void
  loading?: boolean
  disabled?: boolean
}

const Input: React.FC<Props> = ({
  type = InputType.TEXT,
  control,
  name,
  placeholder,
  error,
  Icon,
  containerClassName = '',
  errorClassName = '',
  label,
  options = [],
  changeHandler = () => undefined,
  loading = false,
  disabled = false,
}) => {
  const [isFocused, setFocus] = useState(false);
  // TODO refactor
  const validateStatus = error === 'لطفا ایمیل را به درستی وارد نمایید' ? 'warning' : 'error';
  //
  return (
    <Form.Item
      label={label}
      className={error ? errorClassName : containerClassName}
      validateStatus={error ? validateStatus : 'success'}
      hasFeedback
      help={error}
    >
      <Controller
        render={({ field }) => {
          const { onChange } = field;
          switch (type) {
            case InputType.MULTISELECT:
              return (
                <Select
                  data-testid={name}
                  mode='multiple'
                  allowClear
                  className='w-100'
                  placeholder={placeholder}
                  {...field}
                  onChange={onChange}
                  options={options}
                  optionFilterProp='label'
                  loading={loading}
                  disabled={disabled}
                />
              );
            case InputType.SELECT:
              return (
                <Select
                  data-testid={name}
                  className='w-100'
                  placeholder={placeholder}
                  {...field}
                  onChange={onChange}
                  options={options}
                  optionFilterProp='label'
                  loading={loading}
                  disabled={disabled}
                />
              );
            case InputType.RADIO:
              return (
                <Radio.Group
                  // value={value}
                  disabled={disabled}
                  {...field}
                  onChange={onChange}
                  data-testid={name}
                  className='w-100'
                >
                  {options.map((opt) => <Radio value={opt.value}>{opt.label}</Radio>)}
                </Radio.Group>
              );
            case InputType.DATE: {
              return (
                <DatePicker disabled={disabled} {...field} onChange={onChange} data-testid={name} className='w-100' />
              );
            }
            case InputType.TEXTAREA:
              return <AntInput.TextArea data-testid={name} className='w-100' placeholder={placeholder} {...field} />;
            case InputType.PASSWORD:
              return (
                <AntInput.Password
                  data-testid={name}
                  className='w-100'
                  placeholder={placeholder}
                  {...field}
                  disabled={disabled}
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              );
            default:
              return (
                <AntInput
                  onFocus={() => setFocus(true)}
                  onBlurCapture={() => setFocus(false)}
                  type={type}
                  prefix={!!Icon && !isFocused ? <Icon /> : <span />}
                  placeholder={placeholder}
                  {...field}
                  onChange={(e) => {
                    if (changeHandler) {
                      changeHandler();
                    }
                    onChange(e);
                  }}
                  disabled={disabled}
                />
              );
          }
        }}
        name={name}
        control={control}
      />
    </Form.Item>
  );
};

export default Input;
