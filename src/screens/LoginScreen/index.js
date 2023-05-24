import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import CustomCheckbox from '../../components/CustomCheckbox';
import { ErrorMessage, Field, Formik } from 'formik';
import { loginValidationSchema } from '../../validationSchemas/verificationSchema';
import { useContext, useState } from 'react';
import { login } from '../../services';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { store } from '../../../store';
import InputErrorMessage from '../../components/InputErrorMessage';

export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(store);

  const onSubmitEvent = async (values) => {
    setLoading(true);
    const response = await login({
      username: values.email,
      password: values.password,
      remember: values.remember
    });
    setLoading(false);
    if (response.status == 201) {
      await dispatch({ type: 'SET_USER', payload: response.data.data });
      await AsyncStorage.setItem('access_token', response.data.access_token);
      navigation.navigate('DrawerScreens');
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
      <View style={styles.info}>
        <Text style={styles.infoHeader}>Login</Text>
        <View>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '', remember: false }}
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
                <Field
                  component={CustomInput}
                  name="password"
                  placeholder="Password"
                  editable={!loading}
                  secureTextEntry={true}
                />
                <ErrorMessage component={InputErrorMessage} name="password" />
                <Field component={CustomCheckbox} name="remember" label="Remember me" />
                <CustomButton
                  style={{ marginTop: 40 }}
                  title={loading ? <ActivityIndicator size="small" color="#0000ff" /> : 'login'}
                  backgroundColor="#063B87"
                  color="white"
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </>
            )}
          </Formik>
          <View style={{ marginTop: 20, flexDirection: 'row' }}>
            <Text>Forgot your password?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('PasswordResetScreen')}>
              <Text style={{ color: '#3F5F90', fontWeight: 500 }}> Reset password</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 10 }}>
            Dont have an account?
            <Text
              style={{ color: '#3F5F90', fontWeight: 500 }}
              onPress={() => navigation.navigate('GettingStartedEmailScreen')}>
              {' '}
              Get Started
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.pageFooter}>
        <View style={styles.helpText}>
          <Text style={styles.frontText}>Need Help? </Text>
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
    // flex: 1,
    flexDirection: 'row',
    top: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  info: {
    // flex: 8
  },
  infoHeader: {
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
