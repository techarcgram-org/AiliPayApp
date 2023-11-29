import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TransferFailedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainActivityScreen')}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.infoText}>Tranfer Failed!</Text>
        <Text style={styles.summaryText}>
          Oops! Something went wrong. Please try again or{' '}
          <Text style={styles.linkText}>contact support.</Text>
        </Text>
        <CustomButton
          title="Try Again"
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
    marginTop: 140,
    alignSelf: 'center'
  },
  summaryText: {
    width: '90%',
    fontSize: 17,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 25,
    marginBottom: 120
  },
  linkText: {
    color: '#063B87'
  }
});
