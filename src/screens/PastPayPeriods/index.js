import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PastPayPeriodsScreen({navigation}) {
  openDrawer = () => {
    return () => {
      Actions.refresh({key: 'drawer', open: true });
    }
  }

  return (
    <View style={styles.container}>
      <Header text="AILIPAY" onPressMenu={openDrawer}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Past Pay Periods</Text>
        <View style={styles.summary}>
          <TouchableOpacity onPress={() => navigation.navigate("StatementOverviewScreen")}>
            <View style={styles.row}>
              <Text>1/02/22-29/02/22</Text>
              <Text style={{fontWeight: 600}}>XAF 100 000</Text>
              <MaterialIcon 
                name="keyboard-arrow-right"
                size={20}
                color="#464242"
                style={{marginLeft: -70}}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.row}>
            <Text>1/02/22-29/02/22</Text>
            <Text style={{fontWeight: 600}}>XAF 100 000</Text>
            <MaterialIcon 
              name="keyboard-arrow-right"
              size={20}
              color="#464242"
              style={{marginLeft: -70}}
            />
          </View>
          <View style={styles.row}>
            <Text>1/02/22-29/02/22</Text>
            <Text style={{fontWeight: 600}}>XAF 100 000</Text>
            <MaterialIcon 
              name="keyboard-arrow-right"
              size={20}
              color="#464242"
              style={{marginLeft: -70}}
            />
          </View>
          <View style={styles.row}>
            <Text>1/02/22-29/02/22</Text>
            <Text style={{fontWeight: 600}}>XAF 100 000</Text>
            <MaterialIcon 
              name="keyboard-arrow-right"
              size={20}
              color="#464242"
              style={{marginLeft: -70}}
            />
          </View>
          <View style={styles.row}>
            <Text>1/02/22-29/02/22</Text>
            <Text style={{fontWeight: 600}}>XAF 100 000</Text>
            <MaterialIcon 
              name="keyboard-arrow-right"
              size={20}
              color="#464242"
              style={{marginLeft: -70}}
            />
          </View>
          <View style={styles.row}>
            <Text>1/02/22-29/02/22</Text>
            <Text style={{fontWeight: 600}}>XAF 100 000</Text>
            <MaterialIcon 
              name="keyboard-arrow-right"
              size={20}
              color="#464242"
              style={{marginLeft: -70}}
            />
          </View>
          <View style={styles.row}>
            <Text>1/02/22-29/02/22</Text>
            <Text style={{fontWeight: 600}}>XAF 100 000</Text>
            <MaterialIcon 
              name="keyboard-arrow-right"
              size={20}
              color="#464242"
              style={{marginLeft: -70}}
            />
          </View>
          <View style={styles.row}>
            <Text>1/02/22-29/02/22</Text>
            <Text style={{fontWeight: 600}}>XAF 100 000</Text>
            <MaterialIcon 
              name="keyboard-arrow-right"
              size={20}
              color="#464242"
              style={{marginLeft: -70}}
            />
          </View>
          <View style={styles.row}>
            <Text>1/02/22-29/02/22</Text>
            <Text style={{fontWeight: 600}}>XAF 100 000</Text>
            <MaterialIcon 
              name="keyboard-arrow-right"
              size={20}
              color="#464242"
              style={{marginLeft: -70}}
            />
          </View>
          <View style={styles.row}>
            <Text>1/02/22-29/02/22</Text>
            <Text style={{fontWeight: 600}}>XAF 100 000</Text>
            <MaterialIcon 
              name="keyboard-arrow-right"
              size={20}
              color="#464242"
              style={{marginLeft: -70}}
            />
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
    color: "white",
    padding: 40,
    flexDirection: "column"
  },
  headerText: {
    fontSize: 30, 
    fontWeight: 700, 
    color: "#3F5F90",
    textAlign: "center",
    marginTop: 30
  },
  summary: {
    marginTop: 20
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10
  },
  
});