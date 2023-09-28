import { useContext, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Logo from '../../components/Logo';
import CustomRadioButton from '../../components/CustomRadioButton';
import CustomButton from '../../components/CustomButton';
import { store } from '../../../store';
import Toast from 'react-native-toast-message';
import { sendVerificationEmail } from '../../services';
import { useTranslation } from 'react-i18next';

export default function VerifyIdentityScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState('phone');
  const [loading, setLoading] = useState(false);
  const { state } = useContext(store);
  const { t } = useTranslation();

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
        text1: t('verifyIdentity.toast.text1'),
        text2: t('verifyIdentity.toast.text2')
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoHeader}>{t('verifyIdentity.title')}</Text>
        <View>
          <Text>{t('verifyIdentity.info.verifyIdentity')}</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoBoxTitle}>{t('verifyIdentity.info.account.title')}</Text>
            <View style={styles.infoBoxTextOne}>
              <Text style={{ fontWeight: 700 }}>{t('verifyIdentity.info.account.name')}: </Text>
              <Text>{state.auth.name}</Text>
            </View>
            <View style={styles.infoBoxTextTwo}>
              <Text style={{ fontWeight: 700 }}>
                {t('verifyIdentity.info.account.employeeId')}:{' '}
              </Text>
              <Text>******{state.auth.employeeId.slice(-3)}</Text>
            </View>
          </View>
          <Text>{t('verifyIdentity.info.verificationCode')}</Text>
          <View style={styles.getCode}>
            <View style={styles.options}>
              <CustomRadioButton
                value="phone"
                label={`${t(
                  'verifyIdentity.info.getCode.option'
                )} *****${state.auth.phoneNumber.slice(-4)}`}
                selectedValue={selectedOption}
                onValueChange={setSelectedOption}
                style={{ fontWeight: 700 }}
              />
              <CustomRadioButton
                value="email"
                label={`${t('verifyIdentity.info.getCode.option')} ***${state.auth.email.slice(7)}`}
                selectedValue={selectedOption}
                onValueChange={setSelectedOption}
                style={{ fontWeight: 700 }}
              />
            </View>
            <CustomButton
              title={
                loading ? (
                  <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                  t('verifyIdentity.info.getCode.getCodeButton')
                )
              }
              backgroundColor="#063B87"
              color="white"
              onPress={onSubmitEvent}
            />
            <Text style={styles.noAccess}>{t('verifyIdentity.info.getCode.noAccessText')}</Text>
          </View>
        </View>
      </View>
      <View style={styles.pageFooter}>
        <View style={styles.helpText}>
          <Text style={styles.frontText}>{t('verifyIdentity.helpText.frontText')} </Text>
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
