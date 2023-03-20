import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import CustomHr from '../../components/CustomHr';
import CustomButton from '../../components/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountSettingsHeader from "../../components/AccountsSettingsHeader";


export default function CompleteTransfer({navigation}) {

    return (<View style={styles.container}>
        <AccountSettingsHeader
        headerTitle="COMPLETE TRANSFER"
        navigation={navigation}
      />
        <TouchableOpacity onPress={() => navigation.navigate("MainActivityScreen")}>
            <Ionicons
                name="md-arrow-back"
                size={30}
                color="black"
            />
        </TouchableOpacity>
        <ScrollView>
            <Text style={styles.infoText}>Please confirm your XAF 20 000 savings allocation</Text>
            <View style={styles.summaryInfo}>
                <CustomHr width={1} />
                <View style={styles.row}>
                    <Text style={styles.summaryTextHeader}> Amount</Text>
                    <Text style={styles.changeText}> Change</Text>
                    <Text style={styles.summaryTextHeader}> xxxx 2524</Text>
                </View>
                <CustomHr width={1} />
                <View style={styles.row}>
                    <Text style={styles.summaryTextHeader}> When </Text>
                    <Text style={styles.summaryTextHeader}> March 17</Text>
                </View>
                <CustomHr width={1} />
                <View style={styles.row}>
                    <Text style={styles.summaryTextHeader}> Fee </Text>
                    <Text style={styles.freeText}> Free</Text>
                </View>
                <CustomHr width={1} />
                <View style={styles.row}>
                    <Text style={styles.summaryTextHeader}> Amount you'll receive </Text>
                    <Text style={styles.summaryTextHeader}> XAF 20 000</Text>
                </View>
                <CustomHr width={1} />
                <View style={styles.row}>
                    <Text style={styles.summaryTextHeader}> Account Balance </Text>
                    <Text style={styles.summaryTextHeader}> XAF 50 000</Text>
                </View>
                <CustomHr width={1} />
            </View>
            <View style={styles.buttonSection}>
                <CustomButton
                    title="Complete Transfer"
                    backgroundColor="#063B87"
                    color="white"
                    onPress={() => navigation.navigate("")}
                />
                <CustomButton
                    title="Cancel"
                    backgroundColor="transparent"
                    color="#063B87"
                    onPress={() => navigation.navigate("")}
                />

            </View>
        </ScrollView>
    </View>);



}

const styles = StyleSheet.create({
        summaryInfo: {
        marginTop: 20
    },
    infoText: {
        fontSize: 25,
        fontWeight: 700,
        marginBottom: 20,
        marginTop: 40,
        alignSelf: "center"
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        color: "white",
        padding: 40,
        flexDirection: "column"
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 24
    },
    summaryTextHeader: {
        fontWeight: 600,
        fontSize: 17
    },
    changeText: {
        fontSize: 16,
        fontWeight: 500,
        color: "#3F5F90"
    },
    freeText: {
        fontWeight: 500,
        fontSize: 17,
        color: "#4F9E57",
        marginRight: 10
    },
    buttonSection: {
        marginTop: 30
    }
})