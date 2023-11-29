import { Text, ActivityIndicator } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react';
import { resetPassword } from '../../services';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import InputErrorMessage from '../../components/InputErrorMessage';
import { passwordSchema } from '../../validationSchemas/resetPasswordSchema';

export default function NewPasswordResetForm({ navigation, infoHeader, email }) {
  const [loading, setLoading] = useState(false);

  const onSubmitEvent = async (values) => {
    setLoading(true);
    const response = await resetPassword(values.password, email);
    setLoading(false);
    if (response.status == 201) {
      navigation.navigate('LoginScreen');
      Toast.show({
        type: 'info',
        text1: 'Success',
        text2: 'Password reseted successfully '
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong please try again later 🥲'
      });
    }
  };

  return (
    <>
      <Text style={infoHeader}>Enter New Password</Text>
      <Formik
        validationSchema={passwordSchema}
        initialValues={{ password: '', confirmPassword: '' }}
        onSubmit={(values) => onSubmitEvent(values)}>
        {({ handleSubmit, isValid }) => (
          <>
            <Field
              component={CustomInput}
              name="password"
              placeholder="New Password"
              editable={!loading}
              inputMode="password"
              secureTextEntry={true}
            />
            <ErrorMessage component={InputErrorMessage} name="password" />
            <Field
              component={CustomInput}
              name="confirmPassword"
              placeholder="Confirm password (Required)"
              editable={!loading}
              textContentType="password"
              secureTextEntry={true}
            />
            <ErrorMessage component={InputErrorMessage} name="confirmPassword" />
            <CustomButton
              style={{ marginTop: 40 }}
              title={
                loading ? <ActivityIndicator size="small" color="#0000ff" /> : 'Reset Password'
              }
              backgroundColor="#063B87"
              color="white"
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </>
  );
}
