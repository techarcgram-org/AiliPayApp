import * as yup from 'yup';

export const verificationSchema = yup.object().shape({
  secret: yup.string().required('Verification Code is required')
});

export const createPasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .matches(/^(?=.*[a-z])/, 'Must Contain One Lowercase Character')
    .matches(/^(?=.*[A-Z])/, 'Must Contain One Uppercase Character')
    .matches(/^(?=.*[0-9])/, 'Must Contain One Number Character')
    .matches(/^(?=.*[!@#\$%\^&\*])/, '  Must Contain  One Special Case Character')
    .min(8, 'Must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required('Enter username/email'),
  password: yup.string().required('Enter password')
});

export const bankValidationSchema = yup.object().shape({
  account_number: yup.string().required('Enter Your Bank account number'),
  bank_id: yup.string().required('Select your bank')
});
