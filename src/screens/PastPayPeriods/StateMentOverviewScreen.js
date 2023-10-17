import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomHr from '../../components/CustomHr';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

export default function StatementOverviewScreen({ navigation }) {
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainActivityScreen')}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerText}>{t('statementOverview.headerText')}</Text>
      <View>
        <CustomHr width={1} />
        <View style={styles.statementRow}>
          <Text style={styles.rowText}>{t('statementOverview.net')}</Text>
          <Text style={styles.rowText}>XAF 200 000</Text>
        </View>

        <CustomHr width={1} />
        <View style={styles.statementRow}>
          <Text style={styles.rowText}>{t('statementOverview.transfered')}</Text>
          <Text style={styles.rowText}>XAF 99 000</Text>
        </View>

        <CustomHr width={1} />
        <View style={styles.statementRow}>
          <Text style={styles.rowText}>{t('statementOverview.fee')}</Text>
          <Text style={styles.rowText}>XAF 1 000</Text>
        </View>

        <CustomHr width={1} />
        <View style={styles.statementRow}>
          <Text style={styles.rowText}>{t('statementOverview.remainder')}</Text>
          <Text style={styles.rowText}>XAF 100 000</Text>
        </View>
        <CustomHr width={1} />
      </View>
      <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 16 }}>
        {t('statementOverview.remainingBalance')}
      </Text>
      <Text style={styles.headerText}>{t('statementOverview.transfered')}</Text>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('CompletedTransferAmount')}>
          <View style={styles.row}>
            <MaterialIcon name="check-circle" size={20} color="#1C8B27" />
            <View style={{ marginLeft: -80 }}>
              <Text>1/02/22</Text>
              <Text>Transfer</Text>
            </View>
            <Text>XAF 100 000</Text>
            <MaterialIcon
              name="keyboard-arrow-right"
              size={20}
              color="#464242"
              style={{ marginLeft: -90 }}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.row}>
          <MaterialIcon name="check-circle" size={20} color="#1C8B27" />
          <View style={{ marginLeft: -80 }}>
            <Text>1/02/22</Text>
            <Text>Transfer</Text>
          </View>
          <Text>XAF 100 000</Text>
          <MaterialIcon
            name="keyboard-arrow-right"
            size={20}
            color="#464242"
            style={{ marginLeft: -90 }}
          />
        </View>

        <View style={styles.row}>
          <MaterialIcon name="check-circle" size={20} color="#1C8B27" />
          <View style={{ marginLeft: -80 }}>
            <Text>1/02/22</Text>
            <Text>Transfer</Text>
          </View>
          <Text>XAF 100 000</Text>
          <MaterialIcon
            name="keyboard-arrow-right"
            size={20}
            color="#464242"
            style={{ marginLeft: -90 }}
          />
        </View>

        <View style={styles.row}>
          <MaterialIcon name="check-circle" size={20} color="#1C8B27" />
          <View style={{ marginLeft: -80 }}>
            <Text>1/02/22</Text>
            <Text>Transfer</Text>
          </View>
          <Text>XAF 100 000</Text>
          <MaterialIcon
            name="keyboard-arrow-right"
            size={20}
            color="#464242"
            style={{ marginLeft: -90 }}
          />
        </View>

        <View style={styles.row}>
          <MaterialIcon name="check-circle" size={20} color="#1C8B27" />
          <View style={{ marginLeft: -80 }}>
            <Text>1/02/22</Text>
            <Text>Transfer</Text>
          </View>
          <Text>XAF 100 000</Text>
          <MaterialIcon
            name="keyboard-arrow-right"
            size={20}
            color="#464242"
            style={{ marginLeft: -90 }}
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
    padding: 40,
    flexDirection: 'column'
  },
  headerText: {
    color: '#3F5F90',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20
  },
  statementRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowText: {
    fontSize: 17,
    marginTop: 10,
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D9D9D9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  }
});
