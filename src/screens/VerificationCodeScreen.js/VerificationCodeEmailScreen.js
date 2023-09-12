import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../../components/Logo';
import Icon from 'react-native-vector-icons/Entypo';
import CustomButton from '../../components/CustomButton';
import { useTranslation } from 'react-i18next';

export default function VerificationCodeScreen() {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState('phone');
  const label = <Text>{t('common.agreeText')}</Text>;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoHeader}>{t('verificationCodeEmailScreen.infoHeader')}</Text>
        <View>
          <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 20, marginBottom: 20 }}>
            <Text style={{ marginRight: 20 }}>{t('verificationCodeEmailScreen.emailText')}</Text>
            <View style={styles.edit}>
              <Icon name="edit" />
              <Text style={{ fontWeight: 700, marginLeft: 5 }}>
                {t('verificationCodeEmailScreen.editButton')}
              </Text>
            </View>
          </View>
          <CustomButton
            title={t('verificationCodeEmailScreen.sendVerificationCodeButton')}
            backgroundColor="#063B87"
            color="white"
            onPress={Actions.verificationCodeScreen}
          />
        </View>
      </View>
      <View style={styles.pageFooter}>
        <View style={styles.helpText}>
          <Text style={styles.frontText}>{t('verificationCodeEmailScreen.helpText.frontText')} </Text>
          <Text>{t('verificationCodeEmailScreen.helpText.footerText')}</Text>
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
  },
  edit: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
