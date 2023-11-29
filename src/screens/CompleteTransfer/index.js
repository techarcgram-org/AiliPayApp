import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CustomHr from '../../components/CustomHr';
import CustomButton from '../../components/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountSettingsHeader from '../../components/AccountsSettingsHeader';
import { useTranslation } from 'react-i18next';

export default function CompleteTransfer({ fromScreen, navigation }) {
  const { t } = useTranslation();
  console.log('from', fromScreen);
  return (
    <View style={styles.container}>
      {/* <AccountSettingsHeader
        headerTitle={t('completeTransfer.headerTitle')}
        navigation={navigation}
      /> */}
      <TouchableOpacity onPress={() => navigation.navigate(fromScreen)}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.infoText}>{t('completeTransfer.infoText')}</Text>
        <View style={styles.summaryInfo}>
          <CustomHr width={1} />
          <View style={styles.row}>
            <Text style={styles.summaryTextHeader}>
              {' '}
              {t('completeTransfer.summaryInfo.amount')}
            </Text>
            <Text style={styles.changeText}> {t('completeTransfer.summaryInfo.change')}</Text>
            <Text style={styles.summaryTextHeader}> xxxx 2524</Text>
          </View>
          <CustomHr width={1} />
          <View style={styles.row}>
            <Text style={styles.summaryTextHeader}> {t('completeTransfer.summaryInfo.when')} </Text>
            <Text style={styles.summaryTextHeader}> March 17</Text>
          </View>
          <CustomHr width={1} />
          <View style={styles.row}>
            <Text style={styles.summaryTextHeader}> {t('completeTransfer.summaryInfo.fee')} </Text>
            <Text style={styles.freeText}> Free</Text>
          </View>
          <CustomHr width={1} />
          <View style={styles.row}>
            <Text style={styles.summaryTextHeader}>
              {' '}
              {t('completeTransfer.summaryInfo.amountReceived')}{' '}
            </Text>
            <Text style={styles.summaryTextHeader}> XAF 20 000</Text>
          </View>
          <CustomHr width={1} />
          <View style={styles.row}>
            <Text style={styles.summaryTextHeader}>
              {' '}
              {t('completeTransfer.summaryInfo.accountBalance')}{' '}
            </Text>
            <Text style={styles.summaryTextHeader}> XAF 50 000</Text>
          </View>
          <CustomHr width={1} />
        </View>
        <View style={styles.buttonSection}>
          <CustomButton
            title={t('completeTransfer.button1')}
            backgroundColor="#063B87"
            color="white"
            onPress={() => navigation.navigate('')}
          />
          <CustomButton
            title={t('completeTransfer.button2')}
            backgroundColor="transparent"
            color="#063B87"
            onPress={() => navigation.navigate('')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryInfo: {
    marginTop: 20
  },
  infoText: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 20,
    marginTop: 40,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'white',
    padding: 40,
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 24
  },
  summaryTextHeader: {
    fontWeight: 600,
    fontSize: 17
  },
  changeText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#3F5F90'
  },
  freeText: {
    fontWeight: 500,
    fontSize: 17,
    color: '#4F9E57',
    marginRight: 10
  },
  buttonSection: {
    marginTop: 30
  }
});
