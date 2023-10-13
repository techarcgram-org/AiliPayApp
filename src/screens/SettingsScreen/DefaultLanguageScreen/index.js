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
import { useTranslation } from 'react-i18next';



export default function DefaultLanguageScreen({ navigation }) {
  const {t} = useTranslation()
  const languages = [
    { id: 'en', name: t('changeLanguage.value1') },
    { id: 'fr', name: t('changeLanguage.value2') }
  ];
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
        text1: `${t('changeLanguage.toast.text1')} ${values.language}`,
        text2: t('changeLanguage.toast.text2')
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AccountSettingsHeader headerTitle={t('changeLanguage.title')} navigation={navigation} />
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
                placeholder={
                  accountSettings.language === 'en'
                    ? t('changeLanguage.value1')
                    : t('changeLanguage.value2')
                }
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
