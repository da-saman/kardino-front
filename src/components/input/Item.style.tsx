import { Form } from 'antd';
import styled from 'styled-components';

export const ItemStyled = styled(Form.Item)`
.ant-form-item-label {
      padding: 0;
      margin: 0;
      text-align: right;
}

.ant-form-item-label>label {
      font-size: 10px;
 }
 
 .ant-form-item-explain-error{
      font-size: 10px;
}

`;
