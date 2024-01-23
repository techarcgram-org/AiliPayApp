import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import CustomHr from '../../components/CustomHr';
import { Field, Formik } from 'formik';
import { gettingStartedValidationSchema } from '../../validationSchemas/gettingStartedValidationSchema';
import Toast from 'react-native-toast-message';
import { useState } from 'react';
import { searchUserByEmployeePhone } from '../../services';
import { useTranslation } from 'react-i18next';

export default function GettingStartedPhoneScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const goToVerifyIdentity = () => {
    navigation.navigate('VerifyIdentityScreen');
  };
  const goToLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };
  const goToGettingStartedEmailScreen = () => {
    navigation.navigate('GettingStartedEmailScreen');
  };
  const goToGettingStartedEmployeeIdScreen = () => {
    navigation.navigate('GettingStartedEmployeeIdScreen');
  };

  const onNextClick = async (values) => {
    setLoading(true);
    const response = await searchUserByEmployeePhone(values.phoneNumber);
    setLoading(false);
    if (response.status === 404) {
      navigation.navigate('HelpScreen');
    } else if (response.status === 200) {
      navigation.navigate('VerifyIdentity');
    } else {
      Toast.show({
        type: 'error',
        text1: t('getStartedPhone.toast.text1'),
        text2: t('getStartedPhone.toast.text2')
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.form}>
        <Text style={styles.formHeader}>{t('getStartedPhone.title')}</Text>
        <View>
          <Formik
            validationSchema={gettingStartedValidationSchema}
            initialValues={{ phoneNumber: '', employer: '' }}
            onSubmit={(values) => onNextClick(values)}>
            {({ handleSubmit, isValid }) => (
              <>
                <Field
                  component={CustomInput}
                  name="phoneNumber"
                  placeholder={t('getStartedPhone.placeholder1')}
                  editable={!loading}
                />
                <Field
                  component={CustomInput}
                  name="employer"
                  placeholder={t('getStartedPhone.placeholder2')}
                  editable={!loading}
                />
                <CustomButton
                  title={
                    loading ? (
                      <ActivityIndicator size="small" color="#0000ff" />
                    ) : (
                      t('getStartedPhone.button')
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
        </View>
      </View>
      <View style={styles.info}>
        <CustomHr style={styles.hr} text="or" />
        <CustomButton
          backgroundColor="transparent"
          title={t('getStartedPhone.option')}
          color="grey"
          onPress={goToLoginScreen}
        />
        <CustomButton
          backgroundColor="transparent"
          title={t('getStartedPhone.option')}
          color="grey"
          onPress={goToGettingStartedEmailScreen}
        />
      </View>
      <View style={styles.pageFooter}>
        <Text style={styles.loginInstead} onPress={goToLoginScreen}>
          {t('getStartedPhone.option')}
        </Text>
        <View style={styles.helpText}>
          <Text style={styles.frontText}>{t('getStartedPhone.footer1')} </Text>
          <Text>{t('getStartedPhone.footer2')}</Text>
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
  form: {
    marginTop: 40
  },
  info: {
    marginTop: 30
  },
  hr: {
    marginBottom: 40
  },
  formHeader: {
    fontWeight: 700,
    fontSize: 25,
    marginTop: 40,
    marginBottom: 20
  },
  pageFooter: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center'
  },
  loginInstead: {
    fontWeight: 700,
    color: '#3F5F90',
    marginBottom: 20
  },
  helpText: {
    flexDirection: 'row'
  },
  frontText: {
    fontWeight: 700
  }
});
