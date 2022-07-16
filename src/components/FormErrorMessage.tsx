import React from 'react';

interface Props {
  message: string
}

// This component is only used to show form errors in ant style
export const FormErrorMessage: React.FC<Props> = ({ message }) => (
  <div className="ant-form-item-explain-error">
    <div role="alert">{message}</div>
  </div>
);

export default FormErrorMessage;
