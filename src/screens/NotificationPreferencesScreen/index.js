import { StyleSheet, View, Text } from 'react-native';
import React, { useContext } from 'react';
import AccountSettingsHeader from '../../components/AccountsSettingsHeader';
import LineSeparator from '../../components/LineSeparator';
import ToggleButton from '../../components/ToggleButton';
import { Field, Formik } from 'formik';
import { store } from '../../../store';

export default function NotificationPreferencesScreen({ navigation }) {
  const { state, dispatch } = useContext(store);
  const { accountSettings } = state;
  const onSwitch = (values, actions) => {
    console.log(values, actions);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AccountSettingsHeader headerTitle="NOTIFICATION PREFERENCES" navigation={navigation} />
      </View>
      <Formik
        initialValues={{
          notification_enabled: accountSettings.notification_enabled
          // sms_notification: null,
          // email_notification: null
        }}
        onSubmit={(values, actions) => onSwitch(values, actions)}>
        {({ handleSubmit }) => (
          <View style={styles.preferencesContainer}>
            <LineSeparator />
            <View style={styles.notificationSettings}>
              <Text style={styles.textStyle}>Push Notifications</Text>
              <Field
                name="notification_enabled"
                component={ToggleButton}
                handleSubmit={handleSubmit}
              />
            </View>
            <LineSeparator />
            {/* <View style={styles.notificationSettings}>
              <Text style={styles.textStyle}>SMS Notifications</Text>
              <Field name="sms_notification" component={ToggleButton} />
            </View>
            <LineSeparator />
            <View style={styles.notificationSettings}>
              <Text style={styles.textStyle}>Email Notifications</Text>
              <Field name="email_notification" component={ToggleButton} />
            </View>
            <LineSeparator /> */}
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 40,
    paddingBottom: 40
  },
  headerContainer: {
    justifyContent: 'center',
    marginBottom: 10
  },
  notificationSettings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  },
  preferencesContainer: {
    // padding: 20,
  },
  textStyle: {
    fontSize: 20
  }
});
