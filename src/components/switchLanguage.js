import React, { useState } from 'react';
import i18next from 'i18next';
import {
    View,
    StyleSheet,
    Dimensions,
    Button,
    Modal
} from 'react-native';
import { useTranslation, I18nextProvider } from 'react-i18next';
import { CustomModal } from './CustomModal'


const SwitchLanguage = () => {
    const [modalVisible, setModalVisible] = useState(false);


    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


    return (

        <View style={styles.container}>
            <Button title='Change Language'
                onPress={() => setModalVisible(true)}
                color={'#063B87'} />
            <View style={styles.modalContent}>
                <CustomModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}>

                    <Button title={t('switchToEnglish')}
                        onPress={() => changeLanguage('en')}
                        color={'#063B87'} />
                    <Button title={t('switchToFrench')}
                        onPress={() => changeLanguage('fr')}
                        color={'#063B87'} />
                </CustomModal>

            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop:60,

    },
    modalContent: {

        width: '100%',
        maxHeight: Dimensions.get('window').height / 4,
        padding: 16,
        borderRadius: 8,
    }

})

export default SwitchLanguage