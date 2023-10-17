import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Footer from '../../components/Footer';
import CustomHr from '../../components/CustomHr';
import { Ionicons } from '@expo/vector-icons';
import { getUserEarlyPayments } from '../../services/airlipayBalance';
import { useTranslation } from 'react-i18next';

export default function BalanceDetails({ navigation }) {
  const getTransactions = useCallback(async () => {
    const response = await getUserEarlyPayments({
      type: 'DEPOSIT',
      status: 'SUCCESS',
      pageSize: 30
    });
  }, []);

  const {t} = useTranslation()

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.sumary}>
          <Text style={styles.priceText}>XAF 100,000</Text>
          <Text style={styles.headingText}>{t('balanceDetails.total')}: XAF 200 000</Text>
          <Text style={styles.headingText}>{t('balanceDetails.viewBalance')}</Text>
        </View>
        <View style={styles.transferSection}>
          <Text style={styles.balanceDetailsText}>{t('balanceDetails.title')}</Text>
          <View style={styles.sumaryInfo}>
            <View style={styles.summarySection}>
              <Text style={styles.summaryTopText}>{t('balanceDetails.increase')}</Text>
              <CustomHr width={1} />
              <View style={styles.row}>
                <Text style={styles.sumaryTextHeader}>{t('balanceDetails.december10th')}</Text>
                <Text style={styles.sumaryTextHeader}> XAF 10 000</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.sumaryTextHeader}>{t('balanceDetails.savings')}</Text>
                <Text style={styles.sumaryTextHeader}> XAF 5 000</Text>
              </View>
            </View>

            <View style={styles.summarySection}>
              <Text style={styles.summaryTopText}>{t('balanceDetails.december9th')}</Text>
              <CustomHr width={1} />
              <View style={styles.row}>
                <Text style={styles.sumaryTextHeader}>{t('balanceDetails.increase')}</Text>
                <Text style={styles.sumaryTextHeader}> XAF 10 000</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.sumaryTextHeader}>{t('balanceDetails.savings')}</Text>
                <Text style={styles.sumaryTextHeader}> XAF 1 000</Text>
              </View>
            </View>

            <View style={styles.summarySection}>
              <Text style={styles.summaryTopText}>{t('balanceDetails.december8th')}</Text>
              <CustomHr width={1} />
              <View style={styles.row}>
                <Text style={styles.sumaryTextHeader}>{t('balanceDetails.increase')}</Text>
                <Text style={styles.sumaryTextHeader}> XAF 20 000</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.sumaryTextHeader}>{t('balanceDetails.savings')}</Text>
                <Text style={styles.sumaryTextHeader}> XAF 1 000</Text>
              </View>
            </View>

            <View style={styles.summarySection}>
              <Text style={styles.summaryTopText}>{t('balanceDetails.december7th')}</Text>
              <CustomHr width={1} />
              <View style={styles.row}>
                <Text style={styles.sumaryTextHeader}>{t('balanceDetails.increase')}</Text>
                <Text style={styles.sumaryTextHeader}> XAF 15 000</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.sumaryTextHeader}>{t('balanceDetails.savings')}</Text>
                <Text style={styles.sumaryTextHeader}> XAF 2 000</Text>
              </View>
            </View>

            <View style={styles.summarySection}>
              <Text style={styles.summaryTopText}>{t('balanceDetails.december6th')}</Text>
              <CustomHr width={1} />
              <View style={styles.row}>
                <Text style={styles.sumaryTextHeader}>{t('balanceDetails.increase')}</Text>
                <Text style={styles.sumaryTextHeader}> XAF 30 000</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.sumaryTextHeader}>{t('balanceDetails.savings')}</Text>
                <Text style={styles.sumaryTextHeader}> XAF 50 000</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
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
  header: {},
  sumary: {
    alignItems: 'center',
    marginTop: 40
  },
  priceText: {
    fontSize: 35,
    fontWeight: 700,
    marginBottom: 20
  },
  headingText: {
    fontSize: 17,
    fontWeight: 700,
    marginTop: 5
  },
  updateSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  balanceDetailsText: {
    fontSize: 22,
    fontWeight: 700,
    alignSelf: 'center',
    color: '#063B87'
  },
  transferSection: {
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 4
  },
  middleRow: {
    marginHorizontal: 10,
    flex: 4
  },
  sumaryInfo: {
    marginTop: 20
  },
  sumaryTextHeader: {
    fontWeight: 600,
    fontSize: 15
  },
  summaryTopText: {
    fontWeight: 700,
    fontSize: 15
  },
  summarySection: {
    marginBottom: 15
  },
  balanceText: {
    fontWeight: 700,
    fontSize: 15
  },
  footer: {}
});
