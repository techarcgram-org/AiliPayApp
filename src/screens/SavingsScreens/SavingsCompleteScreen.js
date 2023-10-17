import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CustomButton from '../../components/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

export default function SavingsCompleteScreen({ navigation }) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainActivityScreen')}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <MaterialCommunityIcons
          name="piggy-bank-outline"
          size={200}
          color="#063B87"
          style={{ alignSelf: 'center' }}
        />
        <Text style={styles.infoText}>{t('savingsComplete.savingSuccess')}</Text>
        <Text style={styles.summaryText}>{t('savingsComplete.savingsAllocationUpdated')}</Text>
        <View style={styles.savingsCompleteBox}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="cash" size={50} color="#063B87" />
            <Text style={{ width: '40%' }}>{t('savingsComplete.date')}</Text>
            <Text style={{ fontWeight: 600 }}>XAF 20 000</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="piggy-bank" size={50} color="#063B87" />
            <Text style={{ width: '40%' }}>{t('savingsComplete.date')}</Text>
            <Text style={{ fontWeight: 600 }}>XAF 20 000</Text>
          </View>
          <Text style={{ textAlign: 'center', fontWeight: 600 }}>{t('savingsComplete.total')}</Text>
        </View>
        <CustomButton
          title={t('savingsComplete.done')}
          backgroundColor="transparent"
          color="#063B87"
          onPress={() => navigation.navigate('MainActivityScreen')}
        />
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
    flexDirection: 'column',
    justifyContent: 'center'
  },
  infoText: {
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 20,
    marginTop: 40,
    alignSelf: 'center'
  },
  summaryText: {
    width: '90%',
    fontSize: 17,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 25
  },
  savingsCompleteBox: {
    borderWidth: 1,
    borderColor: '#063B87',
    borderRadius: 30,
    padding: 20,
    marginBottom: 50,
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between'
  }
});
