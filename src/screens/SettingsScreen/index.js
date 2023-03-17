import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";

export default function SettingsScreen() {
    return (
        <SafeAreaView>
            <View>
                
            </View>
            <Header text="SETTINGS"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})