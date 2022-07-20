import * as yup from 'yup';

const loginSchema = yup.object().shape({
  // email: yup.string().email('لطفا ایمیل را به درستی وارد نمایید').required('ایمیل الزامی می باشد'),
  username: yup.string().required('نام کاربری الزامی می باشد'),
  password: yup.string().required('پسورد الزامی می باشد'),
});

export default loginSchema;
