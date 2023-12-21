import {
  StyleSheet,
  View,
  Dimensions


} from "react-native";
import Logo from "../../components/Logo";
import CustomButton from "../../components/CustomButton";
import DisplayBox from "../../components/DisplayBox";
import i18n, { languageResources } from '../../services/i18next';
import React, { useState } from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next'
import SwitchLanguage from "../../components/switchLanguage";
import { SafeAreaView } from "react-native";



export default function LandingScreen2({ navigation }) {
  const { t } = useTranslation()



  return (
    <SafeAreaView style={styles.safeContainer}>

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

        <SwitchLanguage />


      </I18nextProvider>
    </SafeAreaView>

  );
}
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#063B87",
  },
  container: {
    flex: 1,
    backgroundColor: "#063B87",
    // color: "white",
    padding: 30,
  },
  header: {
    flexDirection: "row",
    // top: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    flex: 1,
  },
  image: {
    flex: 2,
    width: windowWidth > 500 ? "80%" : "100%",
    height: windowHeight > 600 ? "60%" : "100%",
    backgroundColor: "#D9D9D9",
    marginTop: 5,
    borderRadius: 30,
  },
  info: {
    marginTop: 20,
    flex: 3,
    width: windowWidth > 500 ? "80%" : "100%",
    height: windowHeight > 600 ? "50%" : "80%",
    fontSize: windowWidth > 500 ? 30 : 24,
    // marginBottom:40,

  },
  lngSwitchBtn: {
    flex: 1,

  }
});
