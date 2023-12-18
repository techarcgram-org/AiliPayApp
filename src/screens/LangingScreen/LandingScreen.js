import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Button,
  Modal
} from "react-native";
import Logo from "../../components/Logo";
import CustomButton from "../../components/CustomButton";
import DisplayBox from "../../components/DisplayBox";
import i18n, { languageResources } from '../../services/i18next';
import React, { useState } from 'react';


import { useTranslation, I18nextProvider } from 'react-i18next'
// import ChangeLanguage from "../../components/ChangeLanguage";


export default function LandingScreen2({ navigation }) {
  const { t } = useTranslation()

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);

  };
  return (
    <ScrollView>
      <I18nextProvider i18n={i18n}>


        <View style={styles.container}>
          <View style={styles.header}>
            <Logo />
            <CustomButton
              title="login"
              backgroundColor="#3F5F90"
              color="white"
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </View>
          <View style={styles.image}></View>
          <View style={styles.info}>
            <DisplayBox
              header={t('landing2.text1')}
              body={t('landing2.text2')}
              footer={
                <CustomButton
                  title={t('landing2.button')}
                  backgroundColor="#063B87"
                  color="white"
                  onPress={() => navigation.navigate('GettingStartedEmployeeIdScreen')}
                />
              }
            />
          </View>
        </View>



        {showModal && (
          <Modal visible={true} animationType='slide-left' >
            <View style={styles.modalontainer}>
              <View style={styles.modalContent}>
                <LanguageSwitcher onClose={handleCloseModal} />
              </View>
            </View>

          </Modal>
        )}
       
          <Button title='Change Language '
          color={'#063B87'}

            onPress={handleOpenModal} />
       

      </I18nextProvider>



    </ScrollView>
  );
}

function LanguageSwitcher({ onClose }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const handleClose = () => {
    onClose();
  }

  return (
    <View>
      <Button title={t('switchToEnglish')} onPress={() => changeLanguage('en')} />
      <Button title={t('switchToFrench')} onPress={() => changeLanguage('fr')} />
      <Button title='close' onPress={handleClose} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#063B87",
    color: "white",
    padding: 40,
  },
  header: {
    flexDirection: "row",
    top: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 160,
    backgroundColor: "#D9D9D9",
    marginTop: 70,
    borderRadius: 30,
  },
  info: {
    marginTop: 30,
  },
  modalontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '75%',
    maxHeight: Dimensions.get('window').height / 4,
    padding: 16,
    borderRadius: 8,
  },
  lngswitchbtn:{
    backgroundColor:"#063B87",
    // width:'80%',
  }
});
