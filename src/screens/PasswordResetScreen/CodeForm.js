import { Text, ActivityIndicator } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { ErrorMessage, Field, Formik } from 'formik';
import { useState } from 'react';
import { verifyPasswordResetToken } from '../../services';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import InputErrorMessage from '../../components/InputErrorMessage';
import { tokenSchema } from '../../validationSchemas/resetPasswordSchema';

export default function CodeForm({ infoHeader, switchStage, stages, email }) {
  const [loading, setLoading] = useState(false);

  const onSubmitEvent = async (values) => {
    setLoading(true);
    const response = await verifyPasswordResetToken(values.token, email);
    console.log(values, email);
    setLoading(false);
    if (response.status == 200) {
      switchStage(stages.RESET);
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
      <Text style={infoHeader}>Enter Reset Token</Text>
      <Formik
        validationSchema={tokenSchema}
        initialValues={{ token: '' }}
        onSubmit={(values) => onSubmitEvent(values)}>
        {({ handleSubmit, isValid }) => (
          <>
            <Field
              component={CustomInput}
              name="token"
              placeholder="Enter reset code"
              editable={!loading}
            />
            <ErrorMessage component={InputErrorMessage} name="token" />
            <CustomButton
              style={{ marginTop: 40 }}
              title={loading ? <ActivityIndicator size="small" color="#0000ff" /> : 'Submit Token'}
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
