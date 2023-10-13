```javascript
"login": {
"toast": {
"text1": "Error",
"text2": "Something went wrong please try again later 🥲"
},
"title": "Login",
"placeholder1": "Email Address",
"placeholder2": "Password",
"label3": "Remember me",
"button": "Login",
"option1": "Forgot your password",
"option3": "Dont have an account",
"option2": "Reset password",
"option4": "Get Started",
"footer1": "Need Help?",
"footer2": "© AirliPay 2023"
},

above is the json used for the translation of the code below

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
import { useTranslation } from 'react-i18next';

export default function LoginScreen({ navigation }) {
const [loading, setLoading] = useState(false);
const { state, dispatch } = useContext(store);
const { t } = useTranslation();

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
text1: t('login.toast.text1'),
text2: t('login.toast.text2')
});
}
};

const year = new Date().getFullYear();

return (
<View style={styles.container}>
<View style={styles.header}>
<Logo color="#063B87" />
</View>
<View style={styles.info}>
<Text style={styles.infoHeader}>{t('login.title')}</Text>
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
placeholder={t('login.placeholder1')}
editable={!loading}
inputMode="email"
/>
<ErrorMessage component={InputErrorMessage} name="email" />
<Field
component={CustomInput}
name="password"
placeholder={t('login.placeholder2')}
editable={!loading}
secureTextEntry={true}
/>
<ErrorMessage component={InputErrorMessage} name="password" />
<Field component={CustomCheckbox} name="remember" label={t('login.label3')} />
<CustomButton
style={{ marginTop: 40 }}
title={
loading ? <ActivityIndicator size="small" color="#0000ff" /> : t('login.button')
}
backgroundColor="#063B87"
color="white"
onPress={handleSubmit}
disabled={!isValid}
/>
</>
)}
</Formik>
<View style={{ marginTop: 20, flexDirection: 'row' }}>
<Text>{t('login.option1')}</Text>
<TouchableOpacity onPress={() => navigation.navigate('PasswordResetScreen')}>
<Text style={{ color: '#3F5F90', fontWeight: 500 }}> {t('login.option2')}</Text>
</TouchableOpacity>
</View>
<Text style={{ marginTop: 10 }}>
{t('login.option3')}
<Text
style={{ color: '#3F5F90', fontWeight: 500 }}
onPress={() => navigation.navigate('GettingStartedEmployeeIdScreen')}>
{' '}
{t('login.option4')}
</Text>
</Text>
</View>
</View>
<View style={styles.pageFooter}>
<View style={styles.helpText}>
<Text style={styles.frontText}>{t('login.footer1')} </Text>
<Text>© AirliPay {year}</Text>
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

using the above as reference, generate a json that will be used to translate the code below


{/* ( */}
            {/* <Formik
                validationSchema={ bankValidationSchema }
                initialValues={{ accountName: '', accountNumber: '', routingNumber: '', bankName: '', bankAddress: '', swiftCode: '' }}
                onSubmit={(values) => {
                  //handle submission code goes here
                }}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="accountName"
                      placeholder="Account Holder Name"
                    />
                    <ErrorMessage component={InputErrorMessage} name="accountName" />
                    <Field
                      component={CustomInput}
                      name="accountNumber"
                      placeholder="Account Number"
                    />
                    <ErrorMessage component={InputErrorMessage} name="accountNumber" />
                    <Field
                      component={CustomInput}
                      name="routingNumber"
                      placeholder="Routing Number"
                    />
                    <ErrorMessage component={InputErrorMessage} name="routingNumber" />
                    <Field
                      component={CustomInput}
                      name="bankName"
                      placeholder="Bank Name"
                    />
                    <ErrorMessage component={InputErrorMessage} name="bankName" />
                    <Field
                      component={CustomInput}
                      name="bankAddress"
                      placeholder="Bank Address"
                    />
                    <ErrorMessage component={InputErrorMessage} name="bankAddress" />
                    <Field
                      component={CustomInput}
                      name="swiftCode"
                      placeholder="SWIFT/BIC Code"
                    />
                    <ErrorMessage component={InputErrorMessage} name="swiftCode" />
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Add Bank Account'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik> */}
            {/*
            ) : editValue == 'Name' ? (
              <Formik
                validationSchema={nameValidationSchema}
                initialValues={{ name: '' }}
                onSubmit={(values) => {
                  // handle submission code goes here
                }}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="name"
                      placeholder="Enter Name"
                    />
                    <ErrorMessage component={InputErrorMessage} name="name" />
                    <Text style={styles.description}>For confirmation, an OTP(One Time Password) will be sent to the phone number we have on file via SMS.</Text>
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Update Name'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik>

            ) : editValue == 'Email' ? (
              <Formik
                validationSchema={emailValidationSchema}
                initialValues={{ email: '' }}
                onSubmit={(values) => {
                }}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="email"
                      placeholder="Enter Email Address"
                      type='email'
                    />
                    <ErrorMessage component={InputErrorMessage} name="email" />
                    <Text style={styles.description}>For confirmation, an OTP(One Time Password) will be sent to the phone number we have on file via SMS.</Text>
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Update Email'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik>

            ) : editValue == 'Phone' ? (
              <Formik
                validationSchema={phoneValidationSchema}
                initialValues={{ phone: '' }}
                onSubmit={async (values) => {
                  try {
                    const response = await ChangeNumber (values);
                    console.log('api respnse', response);
                  } catch (error) {
                    console.error('api error', error.message);
                  }
                }}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="phone"
                      placeholder="Enter Phone Number"
                      type='tel'
                    />
                    <ErrorMessage component={InputErrorMessage} name="phone" />
                    <Text style={styles.description}>For confirmation, an OTP(One Time Password) will be sent to the Email Address we have on file.</Text>
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Update Number'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik>
            ) : editValue == 'Momo' ? (
              <Formik
                validationSchema={phoneValidationSchema}
                initialValues={{ phone: '' }}
                onSubmit={(values) => onBankSubmitEvent(values)}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="phone"
                      placeholder="Enter Phone Number"
                      type='tel'
                    />
                    <ErrorMessage component={InputErrorMessage} name="phone" />
                    <Text style={styles.description}>For confirmation, an OTP(One Time Password) will be sent to the phone number we have on file via SMS.</Text>
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Update Number'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik>
            ) : (
              <Formik
                // validationSchema={}
                initialValues={{ phone: '' }}
                onSubmit={(values) => onBankSubmitEvent(values)}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="phone"
                      placeholder="Enter"
                      type='tel'
                    />
                    <ErrorMessage component={InputErrorMessage} name="oldPassword" />
                  </>
                )}
              </Formik>
            ) */}
            {/* } */}
```
