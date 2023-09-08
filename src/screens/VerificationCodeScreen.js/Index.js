import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Field, Formik, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import { verificationSchema } from '../../validationSchemas/verificationSchema';
import { verifyEmailSecret } from '../../services';
import Toast from 'react-native-toast-message';
import { store } from '../../../store';
import InputErrorMessage from '../../components/InputErrorMessage';

export default function VerificationCodeScreen({ navigation }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { state } = useContext(store);

  const onSubmitEvent = async (values) => {
    setLoading(true);
    const response = await verifyEmailSecret({ secret: values.secret, email: state.auth.email });
    setLoading(false);

    if (response.status == 404) {
      navigation.navigate('HelpScreen');
    } else if (response.status == 200) {
      navigation.navigate('PasswordSetupScreen');
    } else {
      Toast.show({
        type: 'error',
        text1: t('verificationCodeScreen.common.loadingErrorText'),
        text2: t('verificationCodeScreen.common.somethingWentWrongText')
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoHeader}>{t('verificationCodeScreen.infoHeader')}</Text>
        <View>
          <Text>
            {t('verificationCodeScreen.messageText', { email: state.auth.email.slice(7) })}
          </Text>
          <View style={styles.confirmCode}>
            <Formik
              validationSchema={verificationSchema}
              initialValues={{ secret: '' }}
              onSubmit={(values) => onSubmitEvent(values)}>
              {({ handleSubmit, isValid }) => (
                <>
                  <Field
                    component={CustomInput}
                    name="secret"
                    placeholder={t('verificationCodeScreen.enterCodePlaceholder')}
                    editable={!loading}
                    inputMode="numeric"
                  />
                  <ErrorMessage component={InputErrorMessage} name="secret" />
                  <CustomButton
                    title={
                      loading ? (
                        <ActivityIndicator size="small" color="#0000ff" />
                      ) : (
                        t('verificationCodeScreen.confirmCodeButton')
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
            <Text style={styles.text}>{t('verificationCodeScreen.resendCodeText')}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('VerificationCodeEmailScreen')}>
              <Text style={[styles.text, { color: '#063B87' }]}>
                {t('verificationCodeScreen.sendCodeToText', { email: 'xxxstaing@airlipay.com' })}
              </Text>
            </TouchableOpacity>
            <Text style={styles.noAccess}>{t('verificationCodeScreen.noAccessText')}</Text>
          </View>
        </View>
      </View>
      <View style={styles.pageFooter}>
        <View style={styles.helpText}>
          <Text style={styles.frontText}>{t('verificationCodeScreen.verificationCodeScreen.helpText')} </Text>
          <Text>© AirliPay 2023</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'white',
    padding: 40,
    flexDirection: 'column'
  },
  header: {
    flexDirection: 'row',
    top: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  info: {
    flex: 7
  },
  infoHeader: {
    fontWeight: 700,
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20
  },
  pageFooter: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center'
  },
  helpText: {
    flexDirection: 'row'
  },
  frontText: {
    fontWeight: 600
  },
  noAccess: {
    alignSelf: 'center',
    fontWeight: 700,
    color: '#3F5F90',
    marginTop: 70
  },
  confirmCode: {
    marginTop: 20
  },
  text: {
    alignSelf: 'center',
    marginTop: 20
  }
});
