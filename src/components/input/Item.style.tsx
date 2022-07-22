import { Form } from 'antd';
import styled from 'styled-components';

export const ItemStyled = styled(Form.Item)`
margin: 0;
padding: 0 2rem;

.ant-form-item-control-input-content {
      text-align: left;
      font-size: 10px;
}

.ant-form-item-label {
      padding: 0;
      text-align: right;
}

.ant-form-item-label>label {
      font-size: 10px;
      color: ${(props) => (props.validateStatus === 'error') && 'red'};
 }
 
 .ant-form-item-explain-error{
      font-size: 10px;
}
`;
