import { useContext, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Logo from '../../components/Logo';
import CustomRadioButton from '../../components/CustomRadioButton';
import CustomButton from '../../components/CustomButton';
import { store } from '../../../store';
import Toast from 'react-native-toast-message';
import { sendVerificationEmail } from '../../services';

export default function VerifyIdentityScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState('phone');
  const [loading, setLoading] = useState(false);
  const { state } = useContext(store);

  const onSubmitEvent = async () => {
    setLoading(true);
    const response = await sendVerificationEmail(state.auth.email);
    setLoading(false);
    if (response.status == 404) {
      navigation.navigate('HelpScreen');
    } else if (response.status == 200) {
      // await dispatch({ type: 'SET_AUTH', payload: response.data.data });
      navigation.navigate('VerificationCodeScreen');
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
        <Text style={styles.infoHeader}>Great! we found your account</Text>
        <View>
          <Text>Verify Your Identify</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoBoxTitle}>Your Account</Text>
            <View style={styles.infoBoxTextOne}>
              <Text style={{ fontWeight: 700 }}>Name: </Text>
              <Text>{state.auth.name}</Text>
            </View>
            <View style={styles.infoBoxTextTwo}>
              <Text style={{ fontWeight: 700 }}>Employee Id: </Text>
              <Text>******{state.auth.employeeId.slice(-3)}</Text>
            </View>
          </View>
          <Text>We’ll send a verification code to your phone or email on file</Text>
          <View style={styles.getCode}>
            <View style={styles.options}>
              <CustomRadioButton
                value="phone"
                label={`send code to *****${state.auth.phoneNumber.slice(-4)}`}
                selectedValue={selectedOption}
                onValueChange={setSelectedOption}
                style={{ fontWeight: 700 }}
              />
              <CustomRadioButton
                value="email"
                label={`send code to ***${state.auth.email.slice(7)}`}
                selectedValue={selectedOption}
                onValueChange={setSelectedOption}
                style={{ fontWeight: 700 }}
              />
            </View>
            <CustomButton
              title={loading ? <ActivityIndicator size="small" color="#0000ff" /> : 'Get Code'}
              backgroundColor="#063B87"
              color="white"
              onPress={onSubmitEvent}
            />
            <Text style={styles.noAccess}>I don't have access to the listed accounts</Text>
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
    flexDirection: 'row',
    top: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  info: {
    flex: 7
  },
  infoBox: {
    marginTop: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginBottom: 30
  },
  infoBoxTitle: {
    fontWeight: 700,
    fontSize: 30,
    marginBottom: 20
  },
  infoBoxTextOne: {
    flexDirection: 'row',
    marginBottom: 20
  },
  infoBoxTextTwo: {
    flexDirection: 'row'
  },
  options: {
    marginTop: 30,
    marginBottom: 30
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
    color: '#3F5F90'
  }
});
