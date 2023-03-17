import React from 'react';
import { NavigationContext } from '@react-navigation/native';
const navigation = React.useContext(NavigationContext);

export const goToVerifyIdentity = () => {
  navigation.navigate("VerifyIdentity")
}
export const goToLoginScreen = () => {
  navigation.navigate("LoginScreen")
}
export const goToGettingStartedPhoneScreen = () => {
  navigation.navigate("GettingStartedPhoneScreen")
}
export const goToGettingStartedEmployeeIdScreen = () => {
  navigation.navigate("GettingStartedEmployeeIdScreen")
}