import { StyleSheet, Text, View } from 'react-native';
import AccountSettingsHeader from '../../../components/AccountsSettingsHeader';
import CustomButton from '../../../components/CustomButton';
import CustomHr from '../../../components/CustomHr';
import { useTranslation } from 'react-i18next';

export default function AutomaticSavings({ navigation }) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <AccountSettingsHeader
        headerTitle={t('automaticSaving.headerTitle')}
        navigation={navigation}
      />
      <Text style={styles.infoText}>{t('automaticSaving.infoText')}</Text>
      <View style={styles.innerContainer}>
        <View style={styles.detail}>
          <View>
            <Text style={styles.detailTextHeader}>{t('automaticSaving.header1')}</Text>
            <Text style={styles.detailAmount}>XAF 20 000</Text>
          </View>
          <CustomHr width={1} />
          <View>
            <Text style={styles.detailTextHeader}>{t('automaticSaving.header2')}</Text>
            <Text style={styles.detailAmount}>xxxx xxxx xxxx 2312</Text>
          </View>
          <CustomHr width={1} />
        </View>
        <View style={styles.buttonSection}>
          <CustomButton
            title={t('automaticSaving.button1')}
            backgroundColor="#063B87"
            color="white"
            onPress={() => navigation.navigate('')}
          />
          <CustomButton
            title={t('automaticSaving.button2')}
            backgroundColor="transparent"
            color="#063B87"
            onPress={() => navigation.navigate('')}
          />
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
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: 'column'
  },
  innerContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
  infoText: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 0,
    marginTop: 40,
    alignSelf: 'center'
  },
  detail: {
    marginTop: 20
  },
  buttonSection: {
    marginTop: 30
  },
  detailTextHeader: {
    fontWeight: 600,
    fontSize: 17,
    marginTop: 30
  },
  detailAmount: {
    fontWeight: 600,
    fontSize: 17,
    marginTop: 10,
    marginBottom: 3
  }
});
