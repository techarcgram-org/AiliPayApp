import * as yup from 'yup';

export const gettingStartedValidationSchema = yup.object().shape({
  employeeId: yup.string().required('Employee Id is required'),
  lastName: yup.string().required('Last name is required')
});
