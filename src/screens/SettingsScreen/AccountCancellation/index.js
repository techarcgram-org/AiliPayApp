import { StyleSheet, Text, View } from 'react-native';
import AccountSettingsHeader from '../../components/AccountsSettingsHeader';
import CustomButton from '../../components/CustomButton';
import CustomHr from '../../components/CustomHr';
import { useTranslation } from 'react-i18next';

export default function AccountCancellation({ navigation }) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <AccountSettingsHeader headerTitle={t('accountCancelation.title')} navigation={navigation} />
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("MainActivityScreen")}
      >
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity> */}
      <View style={styles.innerContainer}>
        <Text style={styles.infoText}>{t('accountCancelation.text1')}</Text>
        <Text style={styles.apologyText}>{t('accountCancelation.text2')}</Text>
        <View style={styles.detailSection}>
          <Text style={styles.companyName}>{t('accountCancelation.text3')}</Text>
          <Text style={styles.payperiodHeading}>{t('accountCancelation.text4')}</Text>
          <Text style={styles.payperiodDate}>Nov 29 - Dec 29</Text>
          <CustomHr width={1} />
          <View style={styles.row}>
            <Text style={styles.detailTextHeader}>{t('accountCancelation.text6')}</Text>
            <Text style={styles.detailTextHeader}>XAF 40 000</Text>
          </View>
          <CustomHr width={1} />
          <View style={styles.row}>
            <Text style={styles.detailTextHeader}>{t('accountCancelation.text7')}</Text>
            <Text style={styles.detailTextHeader}>{t('accountCancelation.text8')}</Text>
          </View>
          <CustomHr width={1} />
          <Text style={styles.explanationText}>{t('accountCancelation.text9')}</Text>
        </View>
        <View style={styles.buttonSection}>
          <CustomButton
            title={t('accountCancelation.button1')}
            backgroundColor="#063B87"
            color="white"
            onPress={() => navigation.navigate('')}
          />
          <CustomButton
            title={t('accountCancelation.button2')}
            backgroungColor="transparent"
            color="#063B87"
            onPress={() => navigation.navigate('')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoText: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 0,
    marginTop: 40,
    alignSelf: 'center'
  },
  apologyText: {
    marginBottom: 20,
    alignSelf: 'center',
    fontSize: 12
  },
  detailSection: {
    marginTop: 20
  },
  detailTextHeader: {
    fontWeight: 600,
    fontSize: 17
  },
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 24
  },
  buttonSection: {
    marginTop: 30
  },
  explanationText: {
    marginTop: 30,
    fontSize: 14,
    alignSelf: 'center'
  },
  companyName: {
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'center'
  },
  payperiodHeading: {
    fontSize: 20,
    fontWeight: 700,
    alignSelf: 'center',
    marginBottom: 20
  },
  payperiodDate: {
    alignSelf: 'center'
  }
});
