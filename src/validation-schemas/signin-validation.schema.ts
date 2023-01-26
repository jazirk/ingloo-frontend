import * as Yup from 'yup';

const SignInValidationSchema = Yup.object().shape({
  username: Yup.string()
    .email('Please enter a valid username')
    .required('Please enter username'),
  password: Yup.string()
    .required('Please enter password')
    .min(8, 'Passowrd must contain atleast 8 letter'),
});

export default SignInValidationSchema;
