import { ActivityIndicator, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { ErrorMessage, Field, Formik } from 'formik';
import InputErrorMessage from '../../components/InputErrorMessage';
import { emailSchema } from '../../validationSchemas/resetPasswordSchema';

export default function ResetForm({ infoHeader, loading, onSubmitEmailEvent }) {
  return (
    <>
      <Text style={infoHeader}>Password Reset Email</Text>
      <Formik
        validationSchema={emailSchema}
        initialValues={{ email: '' }}
        onSubmit={(values) => onSubmitEmailEvent(values.email)}>
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
