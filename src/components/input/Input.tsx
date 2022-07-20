/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent, useState } from 'react';
import {
  Input as AntInput, Select, Radio, DatePicker,
} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Control, Controller } from 'react-hook-form';
import { InputType } from '@constants/InputType';
import { ItemStyled as Item } from '@components/input/Item.style';
import { MappedOption } from '@models/MappedOption';

interface Props {
  control: Control<any>
  name: string
  placeholder: string
  error?: string | false
  Icon?: FunctionComponent
  type?: InputType
  label?: string
  options?: MappedOption[]
  errorClassName:string
  containerClassName:string
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
  label,
  errorClassName,
  containerClassName,
  options = [],
  changeHandler = () => undefined,
  loading = false,
  disabled = false,
}) => {
  const [isFocused, setFocus] = useState(false);
  return (
    <Item
      label={label}
      className={error ? errorClassName : containerClassName}
      validateStatus={error ? 'error' : 'success'}
      help={error || ' '}
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
                >
                  {options.map((opt) => <Radio value={opt.value}>{opt.label}</Radio>)}
                </Radio.Group>
              );
            case InputType.DATE: {
              return (
                <DatePicker disabled={disabled} {...field} onChange={onChange} data-testid={name} />
              );
            }
            case InputType.TEXTAREA:
              return <AntInput.TextArea data-testid={name} placeholder={placeholder} {...field} />;
            case InputType.PASSWORD:
              return (
                <AntInput.Password
                  data-testid={name}
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
    </Item>
  );
};

export default Input;
