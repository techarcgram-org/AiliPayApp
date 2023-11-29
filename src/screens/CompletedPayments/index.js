import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { getUserEarlyPayments } from '../../services/airlipayBalance';
import moment from 'moment';

export default function CompletedPayments({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const getTransactions = useCallback(async () => {
    setLoading(true);
    const response = await getUserEarlyPayments({
      type: 'WITHDRAWAL',
      pageSize: 30
    });
    console.log(response.data);
    if (response.status === 200) {
      setTransactions(response.data);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerText}>Completed Payments</Text>
      <ScrollView>
        <View>
          {transactions.map((transaction) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CompletedTransferAmount', { transaction: transaction })
              }
              key={transaction.id}>
              <View style={styles.row}>
                {transaction.status === 'SUCCESS' ? (
                  <MaterialIcon name="check-circle" size={20} color="#1C8B27" />
                ) : (
                  <MaterialIcon name="cancel" size={20} color="#F06466" />
                )}
                <View style={{ marginLeft: -80 }}>
                  <Text>{moment(transaction.execution_date).format('DD/MM/YYYY')}</Text>
                  <Text>{moment(transaction.execution_date).format('hh:mm')}</Text>
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
          ))}
        </View>
      </ScrollView>
      {/* <Footer /> */}
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
    marginTop: 40,
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
