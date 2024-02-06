import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import AccountSettingsHeader from '../../../components/AccountsSettingsHeader';
import CustomHr from '../../../components/CustomHr';
import UpdateInformation from '../../../components/UpdateInformation';
import { useTranslation } from 'react-i18next';

export default function AccountInformation({ navigation }) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <AccountSettingsHeader
        headerTitle={t('accountInformation.headerTitle')}
        navigation={navigation}
      />

    <ScrollView>
      <View style={styles.avatar}>
        <Ionicons name="person" size={100} color="black" alignSelf="center" />
        <Text style={styles.nameText}>Fname Lname</Text>       
        <Text style={styles.editNameText}>Edit</Text>
      </View>
      <View style={styles.securityAlert}>
        <MaterialCommunityIcons name="shield-alert-outline" size={30} color="white" />
        <View style={styles.alertText}>
          <Text style={styles.headingText}>{t('accountInformation.text1')}</Text>
          <Text style={styles.headingText}>{t('accountInformation.text2')}</Text>
        </View>
      </View>
      <View style={styles.userInformation}>
        <CustomHr width={1} />
        <View style={styles.row}>
          <MaterialCommunityIcons name="email" size={40} color="#3F5F90" />
          <View style={styles.innerRow}>
            <View style={styles.textSection}>
              <Text>{t('accountInformation.email')}</Text>
              <Text>fname.lname@dname.com</Text>
              <Image source={require('./assets/ScreenIcons/verified.png')}/>
            </View>
            <Text style={styles.editText}>Edit</Text>
           </View>
        </View>
        <CustomHr width={1} />
        <View style={styles.row}>
          <MaterialCommunityIcons name="cellphone" size={40} color="#3F5F90" />
          <View style={styles.innerRow}>
            <View style={styles.textSection}>
              <Text>{t('accountInformation.phone')}</Text>
              <Text>+237XXXXXXXXX</Text>
            </View>
          </View>
        </View>
        <CustomHr width={1} />
        <View style={styles.row}>
          <MaterialCommunityIcons name="form-textbox-password" size={40} color="#3F5F90" />
          <View style={styles.innerRow}>
            <View>
              <Text>{t('accountInformation.password')}</Text>
              <Text>*********</Text>
            </View>
            
            <Text style={styles.editText}>Edit</Text>
          </View>
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
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: 'column'
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent:'center',
  },
  nameText: {
    justifyContent:'center',
    fontSize: 15,
    fontWeight: 600,
    paddingLeft:15,
  },
  editButton: {
    backgroundColor: 'transparent',
    color: '#3F5F90',
    fontSize: 12,
    textTransform: 'capitalize'
  },
  editText: {
     fontSize: 15,
    color: '#3F5F90'
  },
  editNameText: {
    alignSelf: 'center',
    fontSize: 12,
    color: '#3F5F90'
  },
  securityAlert: {
    backgroundColor: '#063B87',
    flexDirection: 'row',
    padding: 20,
    color: 'white',
    margin:5,

  },
  alertText: {
    marginLeft: 10,
    color: 'white'
  },
  headingText: {
    fontSize: 15,
    fontWeight: 600,
    color: 'white'
  },
  userInformation: {
    margin: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  innerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 20,
    alignItems: 'flex-start'
  },
  textSection: {
    justifyContent: 'flex-start'
  }
});
