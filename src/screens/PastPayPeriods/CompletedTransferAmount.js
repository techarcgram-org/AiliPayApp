import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { generatemockDataFrom } from '../../utils/data/transactionsFrom';
import { generateMockDataTo } from '../../utils/data/transactionsTo';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function CompletedTransferAmount({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [mockDataFrom, setMockDataFrom] = useState([]);
  const [mockDataTo, setMockDataTo] = useState([]);

  useEffect(() => {
    fetchMockData();
  }, []);

  const fetchMockData = () => {
    const mockDataFrom = generatemockDataFrom();
    const mockDataTo = generateMockDataTo();

    // Simulating network delay
    setTimeout(() => {
      setMockDataFrom(mockDataFrom);
      setMockDataTo(mockDataTo);
      setLoading(false);
    }, 2000);
  };

  const renderTransferItemFrom = ({ item }) => (
    <View style={styles.row}>
      <MaterialIcon name="check-circle" size={20} color="#1C8B27" />
      <View style={{ marginLeft: -80 }}>
        <Text style={{ fontSize: 16 }}>{item.date}</Text>
        <Text>Transfer</Text>
      </View>
      <Text>{item.amount}</Text>
      <MaterialIcon
        name="keyboard-arrow-right"
        size={20}
        color="#464242"
        style={{ marginLeft: -90 }}
      />
    </View>
  );

  const renderTransferItemTo = ({ item }) => (
    <View style={styles.statementRow}>
      <Text style={{ fontSize: 20, fontWeight: 600 }}>{item.method}</Text>
      <Text style={{ fontSize: 16 }}>Account Number: {item.accountNumber}</Text>
    </View>
  );

  const renderSkeletonLoader = () => (
    <SkeletonPlaceholder.Item>
      <View style={styles.row}>
        <MaterialIcon name="check-circle" size={20} color="#1C8B27" />
        <View style={{marginLeft:-80}}>
          <Text style={{ fontSize: 16 }}>Loading...</Text>
          <Text>Transfer</Text>
        </View>
        <Text>XAF XXXX....</Text>
        <MaterialIcon
          name="keyboard-arrow-right"
          size={20}
          color="#464242"
          style={{ marginLeft: -90 }}
        />
      </View>
    </SkeletonPlaceholder.Item>
  );

  const renderSkeletonLoaderTo = () => (
    <SkeletonPlaceholder.Item>
      <View style={styles.statementRow}>
        <Text style={{ fontSize: 20, fontWeight: 600 }}>Loading....</Text>
        <Text style={{ fontSize: 16 }}>Account Number: xxxxxxx....</Text>
      </View>
    </SkeletonPlaceholder.Item>
  );

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Completed Transfer Amount</Text>

      {loading ? (
        renderSkeletonLoader()
      ) : (
        <FlatList
          data={mockDataFrom}
          renderItem={renderTransferItemFrom}
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      <Text style={styles.headerText}>Transferred To</Text>

      {loading ? (
        renderSkeletonLoaderTo()
      ) : (
        <FlatList
          data={mockDataTo}
          renderItem={renderTransferItemTo}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'white',
    padding: 40,
    flexDirection: 'column',
    paddingBottom: 16
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
