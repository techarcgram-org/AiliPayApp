import { ActivityIndicator, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react';
import { sendPasswordResetEmail } from '../../services';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import InputErrorMessage from '../../components/InputErrorMessage';
import { emailSchema } from '../../validationSchemas/resetPasswordSchema';

export default function ResetForm({ infoHeader, switchStage, stages, setEmail }) {
  const [loading, setLoading] = useState(false);

  const onSubmitEvent = async (values) => {
    setLoading(true);
    const response = await sendPasswordResetEmail(values.email);
    setLoading(false);
    if (response.status == 200) {
      setEmail(values.email);
      switchStage(stages.VERIFY);
    } else if (response.status == 404) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'User with email not found'
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
      <Text style={infoHeader}>Password Reset Email</Text>
      <Formik
        validationSchema={emailSchema}
        initialValues={{ email: '' }}
        onSubmit={(values) => onSubmitEvent(values)}>
        {({ handleSubmit, isValid }) => (
          <>
            <Field
              component={CustomInput}
              name="email"
              placeholder="Email Address"
              editable={!loading}
              inputMode="email"
            />
            <ErrorMessage component={InputErrorMessage} name="email" />
            <CustomButton
              style={{ marginTop: 40 }}
              title={loading ? <ActivityIndicator size="small" color="#0000ff" /> : 'Submit Code'}
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
