import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function changePassword(navigation) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainActivityScreen')}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.infoText}>Change Password</Text>
        <TextInput style={styles.inputField} placeholder="Enter Old Password"></TextInput>
        <TextInput style={styles.inputField} placeholder="Enter New Password"></TextInput>
        <TextInput style={styles.inputField} placeholder="Confirm Password"></TextInput>
        <CustomButton
          style={styles.btnSpace}
          title="Confirm"
          backgroundColor="#063B87"
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
    paddingTop: 40,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  infoText: {
    fontSize: 27,
    fontWeight: 700,
    marginBottom: 40,
    alignSelf: 'center',
    marginTop: 100
  },
  inputField: {
    borderRadius: 10,
    // maxWidth: 300,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#D9D9D9',
    color: 'white',
    marginBottom: 20
  },
  btnSpace: {
    marginTop: 120
  }
});
