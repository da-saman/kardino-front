import styled from 'styled-components';
import { Input, Form } from 'antd';

export const LoginInput = styled(Input)`
  margin-bottom: 2rem;
  padding: 0.5rem;
`;

export const LoginLabel = styled(Form.Item)`
  position: absolute;
  transition: all 0.3s;
`;

// TODO: maybe used later as a general Input Idea
//   .form__input:placeholder-shown + .form__label {
//     opacity: 0;
//     visibility: hidden;
//     transform: translateY(-4rem);
//   }

//   .form__input:focus + .form__label {
//     opacity: 1;
//     visibility: visible;
//     transform: translateY(-2rem);
//   }

//   .form__input:focus::placeholder {
//     color: transparent;
//   }
// `;
