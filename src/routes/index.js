// import React from 'react'
// import { Router, Scene, Drawer, Stack } from 'react-native-router-flux'
import LandingScreen from '../screens/LangingScreen'
import LandingScreen2 from '../screens/LangingScreen/LandingScreen'
import GettingStartedEmailScreen from '../screens/GettingStarted/GettingStartedEmailScreen'
import GettingStartedPhoneScreen from '../screens/GettingStarted/GettingStartedPhoneScreen'
import GettingStartedEmployeeIdScreen from '../screens/GettingStarted/GettingStartedEmployeeIdScreen'
import VerifyIdentity from '../screens/VerifyIdentityScreen/VerifyIdentityScreen'
import VerificationCodeScreen from '../screens/VerificationCodeScreen.js/Index'
import VerificationCodeEmailScreen from '../screens/VerificationCodeScreen.js/VerificationCodeEmailScreen'
import PasswordSetupScreen from '../screens/PasswordSetupScreen.js'
import WelcomeScreen from '../screens/WelcomeScreen'
import HelpScreen from '../screens/HelpScreen'
import LoginScreen from '../screens/LoginScreen'
import MainActivityScreen from '../screens/MainActivityScreen.js'
import BalanceSummary from '../screens/MainActivityScreen.js/BalanceSummary'
import BalanceDetails from '../screens/MainActivityScreen.js/BalanceDetails'
import TransferScreen from '../screens/TransferScreens.js'
import TransferCompleteScreen from '../screens/TransferScreens.js/TransferCompleteScreen'
import DrawerContent from './DrawerContent'

// export default function Routes() {

//   return (
//     <Router>
//       <Scene key="root" panHandlers={null}>
//           <Scene key="landingScreen" component={LandingScreen} title="LandingScreen" initial={true} hideNavBar={true} />
//           <Scene key="landingScreen2" component={LandingScreen2} title="LandingScreen2" hideNavBar={true} />
//           <Scene key="gettingStartedEmailScreen" component={GettingStartedEmailScreen} title="GettingStartedEmailScreen" hideNavBar={true} />
//           <Scene key="gettingStartedPhoneScreen" component={GettingStartedPhoneScreen} title="GettingStartedPhoneScreen" hideNavBar={true} />
//           <Scene key="gettingStartedEmployeeIdScreen" component={GettingStartedEmployeeIdScreen} title="GettingStartedEmployeeIdScreen" hideNavBar={true} />
//           <Scene key="verifyIdentify" component={VerifyIdentity} title="VerifyIdentity" hideNavBar={true} />
//           <Scene key="verificationCodeScreen" component={VerificationCodeScreen} title="VerificationCodeScreen" hideNavBar={true} />
//           <Scene key="verificationCodeEmailScreen" component={VerificationCodeEmailScreen} title="VerificationCodeEmailScreen" hideNavBar={true} />
//           <Scene key="passwordSetupScreen" component={PasswordSetupScreen} title="PasswordSetupScreen" hideNavBar={true} />
//           <Scene key="welcomeScreen" component={WelcomeScreen} title="WelcomeScreen" hideNavBar={true} />
//           <Scene key="helpScreen" component={HelpScreen} title="HelpScreen" hideNavBar={true} />
//           <Scene key="loginScreen" component={LoginScreen} title="LoginScreen" hideNavBar={true} />
//           <Scene key="mainActivityScreen" component={MainActivityScreen} title="MainActivityScreen" hideNavBar={true} />
//           <Scene key="balanceSummary" component={BalanceSummary} title="BalanceSummary" hideNavBar={true} />
//           <Scene key="balanceDetails" component={BalanceDetails} title="BalanceDetails" hideNavBar={true} />
//           <Scene key="transferScreen" component={TransferScreen} title="TransferScreen" hideNavBar={true} />
//           <Scene key="transferCompleteScreen" component={TransferCompleteScreen} title="TransferCompleteScreen" hideNavBar={true} />
//           <Drawer
//             key="drawer"
//             hideNavBar={true}
//             contentComponent={DrawerContent}
//             drawerWidth={300}
//             drawerPosition="left"
//             swipeEnabled={false}
//           >
//             <Scene key="mainActivityScreen" component={MainActivityScreen} title="MainActivityScreen" hideNavBar={true} />
//             <Scene key="balanceSummary" component={BalanceSummary} title="BalanceSummary" hideNavBar={true} />
//             <Scene key="balanceDetails" component={BalanceDetails} title="BalanceDetails" hideNavBar={true} />
//             <Scene key="transferScreen" component={TransferScreen} title="TransferScreen" hideNavBar={true} />
//             <Scene key="transferCompleteScreen" component={TransferCompleteScreen} title="TransferCompleteScreen" hideNavBar={true} />
//           </Drawer>
//         </Scene>
//    </Router>
//   )
// }

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingScreen">
        <Stack.Screen name="LandingScreen" component={LandingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LandingScreen2" component={LandingScreen2} options={{headerShown: false}}/>
        <Stack.Screen name="GettingStartedEmailScreen" component={GettingStartedEmailScreen} options={{headerShown: false}} />
        <Stack.Screen name="GettingStartedPhoneScreen" component={GettingStartedPhoneScreen} options={{headerShown: false}} />
        <Stack.Screen name="GettingStartedEmployeeIdScreen" component={GettingStartedEmployeeIdScreen} options={{headerShown: false}} />
        <Stack.Screen name="VerifyIdentity" component={VerifyIdentity} options={{headerShown: false}} />
        <Stack.Screen name="VerificationCodeScreen" component={VerificationCodeScreen} options={{headerShown: false}} />
        <Stack.Screen name="VerificationCodeEmailScreen" component={VerificationCodeEmailScreen} options={{headerShown: false}} />
        <Stack.Screen name="PasswordSetupScreen" component={PasswordSetupScreen} options={{headerShown: false}} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} options={{headerShown: false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="MainActivityScreen" component={MainActivityScreen} options={{headerShown: false}} />
        <Stack.Screen name="BalanceSummary" component={BalanceSummary} options={{headerShown: false}} />
        <Stack.Screen name="BalanceDetails" component={BalanceDetails} options={{headerShown: false}} />
        <Stack.Screen name="TransferScreen" component={TransferScreen} options={{headerShown: false}} />
        <Stack.Screen name="TransferCompleteScreen" component={TransferCompleteScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}