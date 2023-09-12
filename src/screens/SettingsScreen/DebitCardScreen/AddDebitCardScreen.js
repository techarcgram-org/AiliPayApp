import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import { useTranslation } from 'react-i18next';

export default function addDebitCard(navigation) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainActivityScreen')}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.infoText}>{t('debitCard.title')}</Text>
        <TextInput style={styles.inputField} placeholder={t('debitCard.placeholder1')}></TextInput>
        <TextInput style={styles.inputField} placeholder={t('debitCard.placeholder2')}></TextInput>
        <TextInput style={styles.inputField} placeholder={t('debitCard.placeholder3')}></TextInput>
        <TextInput style={styles.inputField} placeholder={t('debitCard.placeholder4')}></TextInput>
        <Text style={styles.description}>{t('debitCard.text1')}</Text>
        <CustomButton
          style={styles.btnSpace}
          title={t('debitCard.button')}
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
    marginTop: 80
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
  description: {
    width: '90%',
    maxWidth: 300,
    fontSize: 13,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 20,
    marginBottom: 15
  },
  btnSpace: {
    marginTop: 120
  }
});
