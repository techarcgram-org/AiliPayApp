import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../components/Logo';
import ResetForm from './ResetForm';
import CodeForm from './CodeForm';
import NewPasswordResetForm from './NewPasswordForm';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { sendPasswordResetEmail } from '../../services';

const stages = {
  REQUEST_LINK: 'REQUEST_LINK',
  VERIFY: 'VERIFY',
  RESET: 'RESET'
};

export default function PasswordResetScreen({ navigation }) {
  const [stage, setStage] = useState(stages.REQUEST_LINK);
  const [email, setEmail] = useState(null);

  const switchStage = (stage) => {
    setStage(stage);
  };

  const [loading, setLoading] = useState(false);

  const onSubmitEmailEvent = async (email) => {
    setLoading(true);
    const response = await sendPasswordResetEmail(email);
    setLoading(false);
    if (response.status == 200) {
      setEmail(email);
      switchStage(stages.VERIFY);
      Toast.show({
        type: 'info',
        text1: 'Success',
        text2: 'Code sent success'
      });
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.info}>
        <View>
          {stage === stages.REQUEST_LINK && (
            <ResetForm
              stages={stages}
              switchStage={switchStage}
              setEmail={setEmail}
              infoHeader={styles.infoHeader}
              loading={loading}
              onSubmitEmailEvent={onSubmitEmailEvent}
            />
          )}
          {stage === stages.VERIFY && (
            <CodeForm
              stages={stages}
              switchStage={switchStage}
              infoHeader={styles.infoHeader}
              email={email}
              navigation={navigation}
            />
          )}
          {stage === stages.RESET && (
            <NewPasswordResetForm
              stages={stages}
              switchStage={switchStage}
              email={email}
              infoHeader={styles.infoHeader}
              navigation={navigation}
            />
          )}
          {stage !== stages.VERIFY ? (
            <View style={{ marginTop: 20, flexDirection: 'row' }}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{ color: '#3F5F90', fontWeight: 500 }}> Login</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ marginTop: 20, flexDirection: 'row' }}>
              <Text>Did not receive code</Text>
              <TouchableOpacity onPress={() => onSubmitEmailEvent(email)}>
                <Text style={{ color: '#3F5F90', fontWeight: 500 }}> Resend</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={{ marginTop: 20, flexDirection: 'row' }}>
            <Text>Dont have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('GettingStartedEmailScreen')}>
              <Text style={{ color: '#3F5F90', fontWeight: 500 }}> Get Started</Text>
            </TouchableOpacity>
          </View>
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
