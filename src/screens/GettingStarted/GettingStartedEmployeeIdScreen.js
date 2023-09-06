import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { searchUserByEmployeeId } from '../../services';
import { useState } from 'react';
import { Field, Formik, ErrorMessage } from 'formik';
import { gettingStartedValidationSchema } from '../../validationSchemas/gettingStartedValidationSchema';
import { store } from '../../../store';
import { useContext } from 'react';
import InputErrorMessage from '../../components/InputErrorMessage';
import { useTranslation } from 'react-i18next';

export default function GettingStartedEmployeeIdScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const goToLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };
  const {t} = useTranslation()

  const onNextClick = async (values) => {
    setLoading(true);
    const response = await searchUserByEmployeeId(values.employeeId);
    setLoading(false);
    if (response.status == 404) {
      navigation.navigate('HelpScreen');
    } else if (response.status == 200) {
      if (response.data.data.accounts.email_confirmed) {
        navigation.navigate('LoginScreen');
        Toast.show({
          type: 'info',
          text1: 'Login',
          text2: 'Email already verified!'
        });
      } else {
        await dispatch({ type: 'SET_AUTH', payload: response.data.data });
        navigation.navigate('VerifyIdentityScreen');
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong please try again later 🥲'
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.form}>
        <Text style={styles.formHeader}>{t('getStartedId.title')}</Text>
        <View>
          <Formik
            validationSchema={gettingStartedValidationSchema}
            initialValues={{ employeeId: '', lastName: '' }}
            onSubmit={(values) => onNextClick(values)}>
            {({ handleSubmit, isValid }) => (
              <>
                <Field
                  component={CustomInput}
                  name="employeeId"
                  placeholder={t('getStartedId.placeholder1')}
                  editable={!loading}
                />
                <ErrorMessage component={InputErrorMessage} name="employeeId" />
                <Field
                  component={CustomInput}
                  name="lastName"
                  placeholder={t('getStartedId.placeholder2')}
                  editable={!loading}
                />
                <ErrorMessage component={InputErrorMessage} name="lastName" />
                <Field
                  component={CustomInput}
                  name="employer"
                  placeholder={t('getStartedId.placeholder3')}
                  editable={!loading}
                />
                <ErrorMessage component={InputErrorMessage} name="employer" />
                <CustomButton
                  title={loading ? <ActivityIndicator size="small" color="#0000ff" /> : 'Next'}
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
        {/* <CustomHr style={styles.hr} text="or" />
        <CustomButton
          backgroundColor="transparent"
          title="Try your phone"
          color="grey"
          onPress={() => navigation.navigate('GettingStartedPhoneScreen');}
        />
        <CustomButton
          backgroundColor="transparent"
          title="Try you Email"
          color="grey"
          onPress={() => navigation.navigate('GettingStartedEmailScreen');}
        /> */}
      </View>
      <View style={styles.pageFooter}>
        <Text style={styles.loginInstead} onPress={goToLoginScreen}>
          {t('getStartedId.option')}
        </Text>
        <View style={styles.helpText}>
          <Text style={styles.frontText}>{t('getStartedId.footer1')} </Text>
          <Text>{t('getStartedId.footer2')}</Text>
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
    // flex: 3,
    marginTop: 40
  },
  info: {
    // flex: 2,
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
    fontWeight: 600
  }
});
