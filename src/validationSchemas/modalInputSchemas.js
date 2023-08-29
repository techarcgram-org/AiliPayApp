import * as yup from 'yup';

export const nameValidationSchema = yup.object().shape({
  name: yup.string()
  .required('Full name is required')
  .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, 'Please enter your first and last name'),
});

export const emailValidationSchema = yup.object().shape({
    email: yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  });

  export const phoneValidationSchema = yup.object().shape({
    phone: yup.string()
    .matches(/^(237)?[2368]\d{7,8}$/, 'Invalid phone number')
    .required('Phone number is required'),
  });

  export const bankValidationSchema = yup.object().shape({
    accountNumber: yup.string()
    .required('Account number is required')
    .matches(/^\d{11}$/, 'Account number must be 11 digits long and contain only numbers'),

    accountName: yup.string()
    .required('Account Holder Name is required'),

    routingNumber: yup.string()
    .required('Routing Number is required'),

    bankName: yup.string()
    .required('Bank Name is required'),

    bankAddress: yup.string()
    .required('Bank Address is required'),

    swiftCode: yup.string()
    .required('SWIFT/BIC Code is required')
  });

  export const cardValidationSchema = yup.object().shape({
    cardNumber: yup.string()
    .required('Card number is required')
    .matches(/^\d{16}$/, 'Card number must be 16 digits long and contain only numbers'),

    holderName: yup.string()
    .required('Card Holder Name is required'),  
    
    cvv: yup.string()
    .required('CVV is required')
    .matches(/^\d{3,4}$/, 'CVV must be 3 or 4 characters and contain only numbers'),

    expirationDate: yup.string()
    .required('Expiration date is required')
    .matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, 'Invalid date format (MM/YY)')
    .test('validDate', 'Card has expired', (value) => {
      if (!value) return false; // If no value is provided, return false
      const [month, year] = value.split('/');
      const currentDate = new Date();
      const expirationDate = new Date(`20${year}`, month - 1); // Create a date object from the expiration date

      // Check if the expiration date is in the future
      return expirationDate > currentDate;
    }),
  });