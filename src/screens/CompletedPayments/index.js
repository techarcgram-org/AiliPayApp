import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function CompletedPayments({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.headerText}>Completed Payments</Text>
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
