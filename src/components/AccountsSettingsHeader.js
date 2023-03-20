import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function AccountSettingsHeader({headerTitle}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back" size={33} color={"black"} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{headerTitle}</Text>
      <Icon name="bell" size={30} color={"#063B87"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 10,
  },
  headerText: {
    fontWeight: 700,
    fontSize: 20,
    maxWidth: 200,
    textAlign: "center",
  },
});
