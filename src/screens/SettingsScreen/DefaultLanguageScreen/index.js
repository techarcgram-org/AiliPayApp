import { StyleSheet, View } from 'react-native';
import React, { useContext, useState } from 'react';
import AccountSettingsHeader from '../../../components/AccountsSettingsHeader';
import LineSeparator from '../../../components/LineSeparator';
import { Field, Formik } from 'formik';
import { store } from '../../../../store';
import CustomSelectInput from '../../../components/CustomSelectInput';
import { updateAccountSettings } from '../../../services';
import i18next from '../../../services/i18next';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const languages = [
  { id: 'en', name: 'English' },
  { id: 'fr', name: 'French' }
];

export default function DefaultLanguageScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(store);
  const { accountSettings } = state;
  const onSelectLanguage = async (values) => {
    setLoading(true);
    const res = await updateAccountSettings(values);
    setLoading(false);
    if (res.status == 200) {
      i18next.changeLanguage(values.language);
      await dispatch({
        type: 'SET_ACCOUNT_SETTINGS',
        payload: { data: res.data.data }
      });
      Toast.show({
        type: 'success',
        text1: `language set to ${values.language}`,
        text2: 'success'
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AccountSettingsHeader headerTitle="DEFAULT LANGUAGE" navigation={navigation} />
      </View>
      <Formik
        initialValues={{
          language: accountSettings.language
        }}
        onSubmit={(values) => onSelectLanguage(values)}>
        {() => (
          <View style={styles.preferencesContainer}>
            <LineSeparator />
            <View style={styles.languageSetting}>
              <Field
                name="language"
                component={CustomSelectInput}
                options={languages}
                placeholder={accountSettings.language === 'en' ? 'English' : 'French'}
                submitOnChange={true}
              />
            </View>
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
  languageSetting: {
    marginRight: 10,
    marginLeft: 10
  },
  preferencesContainer: {
    // padding: 20,
  },
  textStyle: {
    fontSize: 20
  }
});
