import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomDrawerContent from './CustomDrawerContent';
import {
  LandingScreen,
  LandingScreen2,
  GettingStartedEmailScreen,
  GettingStartedPhoneScreen,
  GettingStartedEmployeeIdScreen,
  VerifyIdentityScreen,
  VerificationCodeScreen,
  VerificationCodeEmailScreen,
  PasswordSetupScreen,
  WelcomeScreen,
  HelpScreen,
  LoginScreen,
  MainActivityScreen,
  BalanceSummary,
  TransferScreen,
  BalanceDetails,
  TransferCompleteScreen,
  SavingsScreen,
  SavingsCompleteScreen,
  PastPayPeriods as PastPayPeriodsScreen,
  StatementOverviewScreen,
  CompletedTransferAmount,
  CompletedPayments,
  SettingsScreen,
  LoginAndSecurityScreen,
  NotificationPreferencesScreen,
  MobileMoneyScreen,
  DebitCardScreen,
  BankAccountScreen,
  AccountCancellation,
  AccountInformation,
  AutomaticSavings,
  CompletedTransfer as CompleteTransfer,
  PasswordResetScreen,
  DefaultLanguageScreen,
  TransferFailedScreen,
  ChangePassword,
  AddDebitCardScreen,
  AddBankAccountScreen
} from '../screens';
// import changePassword from '../screens/AccountInformation/ChangePassword';
// import addDebitCard from '../screens/DebitCardScreen/AddDebitCardScreen';
// import addBankAccount from '../screens/BankAccountScreen/AddBankAccountScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MenuDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} options={{ gestureEnabled: false }} />
      )}>
      <Drawer.Screen
        name="MainActivityScreen"
        component={MainActivityScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="BalanceSummary"
        component={BalanceSummary}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="BalanceDetails"
        component={BalanceDetails}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="TransferScreen"
        component={TransferScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="TransferCompleteScreen"
        component={TransferCompleteScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="SavingsScreen"
        component={SavingsScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="SavingsCompleteScreen"
        component={SavingsCompleteScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="PastPayPeriodsScreen"
        component={PastPayPeriodsScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="StatementOverviewScreen"
        component={StatementOverviewScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="CompletedTransferAmount"
        component={CompletedTransferAmount}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="CompletedPayments"
        component={CompletedPayments}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainActivityScreen"
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LandingScreen2"
          component={LandingScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GettingStartedEmailScreen"
          component={GettingStartedEmailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GettingStartedPhoneScreen"
          component={GettingStartedPhoneScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GettingStartedEmployeeIdScreen"
          component={GettingStartedEmployeeIdScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyIdentityScreen"
          component={VerifyIdentityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationCodeScreen"
          component={VerificationCodeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationCodeEmailScreen"
          component={VerificationCodeEmailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordSetupScreen"
          component={PasswordSetupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="LoginAndSecurityScreen"
          component={LoginAndSecurityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationPreferencesScreen"
          component={NotificationPreferencesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MobileMoneyScreen"
          component={MobileMoneyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DebitCardScreen"
          component={DebitCardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BankAccountScreen"
          component={BankAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountCancellation"
          component={AccountCancellation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountInformation"
          component={AccountInformation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AutomaticSavings"
          component={AutomaticSavings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CompleteTransfer"
          component={CompleteTransfer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordResetScreen"
          component={PasswordResetScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerScreens"
          component={MenuDrawer}
          options={{
            title: 'Drawer Screens',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="DefaultLanguageScreen"
          component={DefaultLanguageScreen}
          options={{ title: 'Default language', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
