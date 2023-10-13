import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CustomButton from '../../components/CustomButton';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHr from '../../components/CustomHr';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UseTranslationOptions, useTranslation } from 'react-i18next';

export default function SavingsScreen({ navigation }) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainActivityScreen')}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.infoText}>{t('savingsScreen.confirm')}</Text>
        <View style={styles.detailSection}>
          <View style={styles.sumaryInfo}>
            <CustomHr width={1} />
            <View style={styles.row}>
              <Text style={styles.sumaryTextHeader}>{t('savingsScreen.balance')}</Text>
              <Text style={styles.changeText}>{t('savingsScreen.change')}</Text>
              <Text style={styles.summaryInfoTex}> XAF 10 000</Text>
            </View>
            <CustomHr width={1} />
            <View style={styles.row}>
              <Text style={styles.sumaryTextHeader}>{t('savingsScreen.when')}</Text>
              <TouchableOpacity style={styles.nowSection}>
                <Text style={styles.summaryInfoTex}> {t('savingsScreen.now')}</Text>
                <IconMaterial name="arrow-drop-down" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <CustomHr width={1} />
            <View style={styles.row}>
              <Text style={styles.sumaryTextHeader}>{t('savingsScreen.fee')}</Text>
              <View style={styles.nowSection}>
                <Text style={styles.freeText}>{t('savingsScreen.discount')}</Text>
                <Text style={[styles.summaryInfoTex, styles.strikeThrough]}> XAF 500</Text>
              </View>
            </View>
            <CustomHr width={1} />
            <View style={styles.row}>
              <Text style={styles.sumaryTextHeader}>{t('savingsScreen.amount')}</Text>
              <Text style={styles.summaryInfoTex}> XAF 20 000</Text>
            </View>
            <CustomHr width={1} />
            <View style={styles.row}>
              <Text style={styles.sumaryTextHeader}>{t('savingsScreen.balance1')}</Text>
              <Text style={styles.summaryInfoTex}> XAF 50 000</Text>
            </View>
            <CustomHr width={1} />
          </View>
          <View style={styles.buttonsSection}>
            <CustomButton
              title={t('savingsScreen.completeSavings')}
              backgroundColor="#063B87"
              color="white"
              onPress={() => navigation.navigate('SavingsCompleteScreen')}
            />
            <CustomButton
              title={t('savingsScreen.startOver')}
              backgroundColor="transparent"
              color="#063B87"
            />
          </View>
        </View>
      </ScrollView>
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
  infoText: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 20,
    marginTop: 40,
    alignSelf: 'center'
  },
  changeText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#3F5F90'
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 24
  },
  sumaryInfo: {
    marginTop: 20
  },
  nowSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sumaryTextHeader: {
    fontWeight: 600,
    fontSize: 17
  },
  summaryInfoTex: {
    fontWeight: 500,
    fontSize: 17
  },
  freeText: {
    fontWeight: 500,
    fontSize: 17,
    color: '#4F9E57',
    marginRight: 10
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
  buttonsSection: {
    marginTop: 30
  }
});
