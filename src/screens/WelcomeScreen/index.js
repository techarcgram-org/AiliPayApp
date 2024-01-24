import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import { useTranslation } from 'react-i18next';

export default function WelcomeScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.image}></View>
      <View style={styles.info}>
        <Text style={styles.infoHeader}>{t('welcomeScreen.header')}</Text>
        <View>
          <Text style={{ textAlign: 'center', marginBottom: 20 }}>{t('welcomeScreen.title')}</Text>
          <View>
            <Text style={{ textAlign: 'center' }}>{t('welcomeScreen.action1')}</Text>
            <Text style={{ textAlign: 'center' }}>{t('welcomeScreen.action2')}</Text>
            <Text style={{ textAlign: 'center' }}>{t('welcomeScreen.action3')}</Text>
            <Text style={{ textAlign: 'center' }}>{t('welcomeScreen.action4')}</Text>
          </View>

          <CustomButton
            style={{ marginTop: 40 }}
            title={t('welcomeScreen.button')}
            backgroundColor="#063B87"
            color="white"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
      </View>
      <View style={styles.pageFooter}>
        <View style={styles.helpText}>
          <Text style={styles.frontText}>{t('welcomeScreen.footer')} </Text>
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
  image: {
    width: '100%',
    height: 160,
    backgroundColor: '#D9D9D9',
    marginTop: 40,
    borderRadius: 30
  },
  info: {
    flex: 7,
    alignItems: 'center'
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
