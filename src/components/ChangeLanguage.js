import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import LineSeparator from './LineSeparator';

export default function changeLanguage() {
  const [checked, setChecked] = useState('English');

  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Ionicons name="close" size={20} style={styles.close} />
        <Text style={styles.heading}>Change Language</Text>
        <View style={styles.radioContainer}>
          <RadioButton.Group onValueChange={(value) => setChecked(value)} value={checked}>
            <View>
              <LineSeparator />
              <RadioButton.Item label="English" value="English" color="#063B87" />
              <LineSeparator />
              <RadioButton.Item label="French" value="French" color="#063B87" />
              <LineSeparator />
            </View>
          </RadioButton.Group>
        </View>
        <CustomButton title="Done" backgroundColor="#063B87" color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(63, 95, 144, 0.4)'
  },
  popup: {
    backgroundColor: 'white',
    paddingTop: 30,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '85%',
    position: 'relative'
  },
  heading: {
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 20,
    alignSelf: 'center'
  },
  radioContainer: {
    width: '90%'
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 15
  }
});
