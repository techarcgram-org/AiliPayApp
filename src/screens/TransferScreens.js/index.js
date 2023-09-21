import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import CustomButton from '../../components/CustomButton';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHr from '../../components/CustomHr';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Formik, Field, Form } from 'formik';
import { withdraw } from '../../services/airlipayBalance';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function TransferScreen({ route, navigation }) {
  const [loading, setLoading] = useState(false);
  const { withdrawAmount, balance } = route.params;
  const [fee, setFee] = useState(0);

  const transferEvent = async () => {
    setLoading(true);
    const amount = withdrawAmount - fee;
    const response = await withdraw({ amount });
    console.log(response);
    setLoading(false);
    if (response.status === 201) {
      navigation.navigate('TransferCompleteScreen', { data: response.data });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Transaction failed',
        text2: 'error'
      });
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainActivityScreen')}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.infoText}>
          Almost Done! Just confirm your XAF {withdrawAmount} transfer
        </Text>
        <View style={styles.detailSection}>
          <View style={styles.sumaryInfo}>
            <CustomHr width={1} />
            <View style={styles.row}>
              <Text style={styles.sumaryTextHeader}>Amount</Text>
              <Text style={styles.changeText}>Change</Text>
              <Text style={styles.summaryInfoTex}> XAF {withdrawAmount}</Text>
            </View>
            <CustomHr width={1} />
            <View style={styles.row}>
              <Text style={styles.sumaryTextHeader}>When</Text>
              {/* <Formik
                initialValues={{ selectedOption: 'now' }}
                >
                  <Field
                    as='select'
                    id='selectedOption'
                    name='selectedOption'
                    onChange={(e) => e.target.blur() }
                    onBlur={(e) => {
                      //Handle value change

                      console.log('selected value is: ', e.target.value);
                    }}
                  >
                    <option value='now'>Now</option>
                    <option value='next day'>Next Day</option>
                  </Field>
              </Formik> */}
              <TouchableOpacity style={styles.nowSection}>
                <Text style={styles.summaryInfoTex}> Now</Text>
                <IconMaterial name="arrow-drop-down" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <CustomHr width={1} />
            <View style={styles.row}>
              <Text style={styles.sumaryTextHeader}>Fee</Text>
              <View style={styles.nowSection}>
                <Text style={styles.freeText}>Free</Text>
                <Text style={[styles.summaryInfoTex, styles.strikeThrough]}> XAF 500</Text>
              </View>
            </View>
            <CustomHr width={1} />
            <View style={styles.row}>
              <Text style={styles.sumaryTextHeader}>Amount You'll receive</Text>
              <Text style={styles.summaryInfoTex}> XAF {withdrawAmount - fee}</Text>
            </View>
            <CustomHr width={1} />
            <View style={styles.row}>
              <Text style={styles.sumaryTextHeader}>Account Balance</Text>
              <Text style={styles.summaryInfoTex}> XAF {balance - withdrawAmount}</Text>
            </View>
            <CustomHr width={1} />
          </View>
          <View style={styles.buttonsSection}>
            <CustomButton
              title={
                loading ? (
                  <ActivityIndicator color="#00ff00" animating={loading} hidesWhenStopped />
                ) : (
                  'Complete Transfer'
                )
              }
              backgroundColor="#063B87"
              color="white"
              onPress={transferEvent}
            />
            <CustomButton
              title="Start Over"
              backgroundColor="transparent"
              color="#063B87"
              onPress={() => navigation.navigate('MainActivityScreen')}
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
