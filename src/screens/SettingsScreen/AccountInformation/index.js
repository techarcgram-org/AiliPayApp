import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import AccountSettingsHeader from '../../../components/AccountsSettingsHeader';
import CustomHr from '../../../components/CustomHr';
import UpdateInformation from '../../../components/UpdateInformation';
import { useTranslation } from 'react-i18next';
import { CustomModal } from '../../../components/CustomModal';
import ResetForm from '../../PasswordResetScreen/ResetForm';
import NewPasswordResetForm from '../../PasswordResetScreen/NewPasswordForm';

export default function AccountInformation({ navigation, username }) {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] =useState(false);
 

  return (
    
      <View style={styles.container}>
        {/* header */}
        <AccountSettingsHeader
          headerTitle={t('accountInformation.headerTitle')}
          navigation={navigation}
        />
        {/* user profile */}
        <ScrollView>
        <View style={styles.avatar}>
          <Ionicons name="person" size={100} color="black" alignSelf="center" />
          <View style={{ flexDirection: 'column', alignSelf: 'center' }}>

            <Text style={{ justifyContent: 'center' }}>Peter Durry</Text>
            <Text style={styles.editText}>Edit</Text>
           
          </View>
        </View>
        {/* security alert */}
        <View style={styles.securityAlert}>
          <MaterialCommunityIcons name="shield-alert-outline" size={40} color="white" />
          <View style={styles.alertText}>
            <Text style={styles.headingText}>{t('accountInformation.text1')}</Text>
            <Text style={styles.headingText}>{t('accountInformation.text2')}</Text>
          </View>
        </View>
        {/* user personal information */}
        <View style={styles.userInformation}>
          <CustomHr width={1} />
         
          {/* user email */}
          <View style={styles.row}>

            <MaterialCommunityIcons name="email" size={25} color="#3F5F90" />
            <View style={styles.innerRow}>
              <View style={styles.textSection}>
                <View style={{ alignContent: 'space-between', flexDirection: 'row' }}>
                  <Text>{t('accountInformation.email')}</Text>
                  <Image source={require('../../../../assets/ScreenIcons/verifiedemail.png')}
                    style={{ marginLeft: 5 }} />
                </View>
                <Text>fname.lname@dname.com</Text>
              </View>
              {/* <UpdateInformation editValue="Email" /> */}
              {/* <Button onPress={() => setEditEmail(true)} style={styles.editButton} title='Edit'></Button> */}
            </View>

          </View>
          {/* user phone number */}
          <View style={styles.row}>
            <View style={styles.horintalline} />
            <MaterialCommunityIcons name="cellphone" size={25} color="#3F5F90" />
            <View style={styles.innerRow}>
              <View style={styles.textSection}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>{t('accountInformation.phone')}</Text>
                  <Image source={require('../../../../assets/ScreenIcons/unverifiedemail.png')}
                    style={{ marginLeft: 5 }} />
                </View>
                <Text>+237XXXXXXXXX</Text>
              </View>
              {/* <UpdateInformation editValue="Phone" /> */}
            </View>
          </View>
          {/* change password */}
          <View style={styles.row}>
            <MaterialCommunityIcons name="form-textbox-password" size={25} color="#3F5F90" />
            <View style={styles.innerRow}>
              <View style={{ alignContent: 'center' }}>
                <Text>{t('accountInformation.password')}</Text>
                <Text>*********</Text>
              </View>
              
              <Text style={styles.editText} onPress={setModalVisible}>Edit
              {modalVisible &&(
              <CustomModal onPress={!modalVisible} >
                <NewPasswordResetForm/>
              </CustomModal>)}
              
              </Text>

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
    flexDirection: 'column',
    padding: 1,
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20
  },
  // nameText: {
  //   // alignSelf: 'center',
  //   fontSize: 15,
  //   fontWeight: 600
  // },
  editButton: {
    backgroundColor: 'transparent',
    color: '#3F5F90',
    fontSize: 12,
    textTransform: 'capitalize'
  },
  editText: {
    // alignSelf: "center",
    fontSize: 12,
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

  },
  alertText: {
    marginLeft: 10,

  },
  headingText: {
    fontSize: 15,
    fontWeight: 600,
    color: 'white',
    paddingRight: 10,
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
    alignItems: 'flex-start',
    padding: 5
  },
  textSection: {
    justifyContent: 'flex-start'
  },
  horintalline: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});
