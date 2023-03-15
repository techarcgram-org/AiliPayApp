import React from "react";
import {
  Router,
  Scene,
  Drawer,
  NavigationDrawer,
} from "react-native-router-flux";
import LandingScreen from "../screens/LangingScreen";
import LandingScreen2 from "../screens/LangingScreen/LandingScreen";
import GettingStartedEmailScreen from "../screens/GettingStarted/GettingStartedEmailScreen";
import GettingStartedPhoneScreen from "../screens/GettingStarted/GettingStartedPhoneScreen";
import GettingStartedEmployeeIdScreen from "../screens/GettingStarted/GettingStartedEmployeeIdScreen";
import VerifyIdentity from "../screens/VerifyIdentityScreen/VerifyIdentityScreen";
import VerificationCodeScreen from "../screens/VerificationCodeScreen.js/Index";
import VerificationCodeEmailScreen from "../screens/VerificationCodeScreen.js/VerificationCodeEmailScreen";
import PasswordSetupScreen from "../screens/PasswordSetupScreen.js";
import WelcomeScreen from "../screens/WelcomeScreen";
import HelpScreen from "../screens/HelpScreen";
import LoginScreen from "../screens/LoginScreen";
import MainActivityScreen from "../screens/MainActivityScreen.js";
import BalanceSummary from "../screens/MainActivityScreen.js/BalanceSummary";
import BalanceDetails from "../screens/MainActivityScreen.js/BalanceDetails";
import TransferScreen from "../screens/TransferScreens.js";
import TransferCompleteScreen from "../screens/TransferScreens.js/TransferCompleteScreen";
// import DrawerContent from './DrawerContent'
import DebitCardScreen from "../screens/DebitCardScreen";
import MobileMoneyScreen from "../screens/MobileMoneyScreen";
import BankAccountScreen from "../screens/BankAccountScreen";
import LoginAndSecurityScreen from "../screens/LoginAndSecurityScreen";
import NotificationPreferencesScreen from "../screens/NotificationPreferencesScreen";

export default function Routes() {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="landingScreen"
          component={LandingScreen}
          title="LandingScreen"
          // initial={true}
          hideNavBar={true}

        />
        <Scene
          key="landingScreen2"
          component={LandingScreen2}
          title="LandingScreen2"
          hideNavBar={true}
        />
        <Scene
          key="gettingStartedEmailScreen"
          component={GettingStartedEmailScreen}
          title="GettingStartedEmailScreen"
          hideNavBar={true}
        />
        <Scene
          key="gettingStartedPhoneScreen"
          component={GettingStartedPhoneScreen}
          title="GettingStartedPhoneScreen"
          hideNavBar={true}
        />
        <Scene
          key="gettingStartedEmployeeIdScreen"
          component={GettingStartedEmployeeIdScreen}
          title="GettingStartedEmployeeIdScreen"
          hideNavBar={true}
        />
        <Scene
          key="verifyIdentify"
          component={VerifyIdentity}
          title="VerifyIdentity"
          hideNavBar={true}
        />
        <Scene
          key="verificationCodeScreen"
          component={VerificationCodeScreen}
          title="VerificationCodeScreen"
          hideNavBar={true}
        />
        <Scene
          key="verificationCodeEmailScreen"
          component={VerificationCodeEmailScreen}
          title="VerificationCodeEmailScreen"
          hideNavBar={true}
        />
        <Scene
          key="passwordSetupScreen"
          component={PasswordSetupScreen}
          title="PasswordSetupScreen"
          hideNavBar={true}
        />
        <Scene
          key="welcomeScreen"
          component={WelcomeScreen}
          title="WelcomeScreen"
          hideNavBar={true}
        />
        <Scene
          key="helpScreen"
          component={HelpScreen}
          title="HelpScreen"
          hideNavBar={true}
        />
        <Scene
          key="loginScreen"
          component={LoginScreen}
          title="LoginScreen"
          hideNavBar={true}
        />
        <Scene
          key="mainActivityScreen"
          component={MainActivityScreen}
          title="MainActivityScreen"
          hideNavBar={true}
        />
        <Scene
          key="balanceSummary"
          component={BalanceSummary}
          title="BalanceSummary"
          hideNavBar={true}
        />
        <Scene
          key="balanceDetails"
          component={BalanceDetails}
          title="BalanceDetails"
          hideNavBar={true}
        />
        <Scene
          key="transferScreen"
          component={TransferScreen}
          title="TransferScreen"
          hideNavBar={true}
        />
        <Scene
          key="transferCompleteScreen"
          component={TransferCompleteScreen}
          title="TransferCompleteScreen"
          hideNavBar={true}
        />
        <Scene
          key="debitCardScreen"
          component={DebitCardScreen}
          title="DebitCardScreen"
          hideNavBar={true}
        />
        <Scene
          key="mobileMoneyScreen"
          component={MobileMoneyScreen}
          title="MobileMoneyScreen"
          hideNavBar={true}
        />
        <Scene
          key="bankAccountScreen"
          component={BankAccountScreen}
          title="BankAccountScreen"
          hideNavBar={true}
        />
        <Scene
          key="loginAndSecurityScreen"
          component={LoginAndSecurityScreen}
          title="LoginAndSecurityScreen"
          hideNavBar={true}
          // initial={true}
        />
        <Scene
          key="notificationPreferencesScreen"
          component={NotificationPreferencesScreen}
          title="NotificationPreferencesScreen"
          hideNavBar={true}
          initial={true}
        />

        {/* <Drawer
            key="drawer"
            hideNavBar={true}
            contentCoponent={DrawerContent}
            drawerWidth={300}
            drawerPosition="left"
            swipeEnabled={true}
            drawer
          >
            
          </Drawer> */}
      </Scene>
    </Router>
  );
}
