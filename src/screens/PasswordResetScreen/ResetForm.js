import { ActivityIndicator, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { ErrorMessage, Field, Formik } from 'formik';
import InputErrorMessage from '../../components/InputErrorMessage';
import { emailSchema } from '../../validationSchemas/resetPasswordSchema';
import { useTranslation } from 'react-i18next';

export default function ResetForm({ infoHeader, loading, onSubmitEmailEvent }) {
  const {t} = useTranslation()
  return (
    <>
      <Text style={infoHeader}>{t('resetPassword.infoHeader')}</Text>
      <Formik
        validationSchema={emailSchema}
        initialValues={{ email: '' }}
        onSubmit={(values) => onSubmitEmailEvent(values.email)}>
        {({ handleSubmit, isValid }) => (
          <>
            <Field
              component={CustomInput}
              name="email"
              placeholder={t('resetPassword.placeholder')}
              editable={!loading}
              inputMode="email"
            />
            <ErrorMessage component={InputErrorMessage} name="email" />
            <CustomButton
              style={{ marginTop: 40 }}
              title={
                loading ? (
                  <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                  t('resetPassword.button')
                )
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
