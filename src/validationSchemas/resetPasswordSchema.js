import * as yup from 'yup';

export const emailSchema = yup.object().shape({
  email: yup.string().required('Enter username/email')
});

export const passwordSchema = yup.object().shape({
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

export const tokenSchema = yup.object().shape({
  token: yup.string().required('Token is required')
});
