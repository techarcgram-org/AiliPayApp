import { StyleSheet, View, Text } from "react-native";
import BackIcon from "./BackIcon";
import NotificationIcon from "./NotificationIcon";

export default function AccountSettingsHeader(props) {
  return (
    <View style={styles.headerContainer}>
      <BackIcon onPress={props.backAction} />
      <Text style={styles.infoHeader}>{props.headerTitle}</Text>
      <NotificationIcon onPress={props.notificationAction} />
    </View>
  );
}

const styles = StyleSheet.create ({
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 20
      },
      infoHeader: {
        fontWeight: 700,
        fontSize: 20,
        // marginBottom: 20,
      },
    });
