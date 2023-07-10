import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import CustomButton from './CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function UpdateInformation() {

    return (
        <View style={styles.container}>
            <View style={styles.popup}>
                <Button><Ionicons name='close' size={20} style={styles.close}/></Button>
                <Text style={styles.heading}>Update Name</Text>
                <TextInput style={styles.inputField}></TextInput>
                <Text style={styles.description}>For confirmation, an OTP(One Time Password) will be sent to the phone number we have on file via SMS. </Text>
                <CustomButton title='Done' backgroundColor='#063B87' color='white' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#rgba(63, 95, 144, 0.4)'
    },
    popup: {
        backgroundColor: 'white',
        paddingTop: 30,
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        width: '85%',
        position: 'relative'
    },
    heading: {
        fontSize: 30,
        fontWeight: 700,
        marginBottom: 20,
        alignSelf: "center",
        marginBottom: 20
    },
    inputField: {
        borderRadius: 10,
        width: '85%',
        maxWidth: 300,
        paddingHorizontal: 10,
        paddingVertical: 4,
        backgroundColor: '#D9D9D9',
        color: 'white',
        marginBottom: 20
    },
    description: {
        width: "90%",
        maxWidth: 300,
        fontSize: 13,
        textAlign: "center",
        alignSelf: "center",
        lineHeight: 20,
        marginBottom: 15
    },
    close: {
      position: 'absolute',
      top: 10,
      right: 15
    }
})