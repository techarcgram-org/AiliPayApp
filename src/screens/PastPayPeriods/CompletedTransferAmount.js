import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

export default function CompletedTransferAmount({ navigation }) {
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>

      <Text style={styles.headerText}>{t('completedTransfer.headerText')}</Text>
      <View>
        <View style={styles.row}>
          <MaterialIcon name="check-circle" size={20} color="#1C8B27" />
          <View style={{ marginLeft: -80 }}>
            <Text style={{ fontSize: 16 }}>1/02/22</Text>
            <Text>{t('completedTransfer.transfer')}</Text>
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

      <Text style={styles.headerText}>{t('completedTransfer.to')}</Text>
      <View>
        <View style={styles.statementRow}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>{t('completedTransfer.momo')}</Text>
          <Text style={{ fontSize: 16 }}>{t('completedTransfer.accountNumber')}: xxxxxxxx34</Text>
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
    backgroundColor: '#D9D9D9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
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
