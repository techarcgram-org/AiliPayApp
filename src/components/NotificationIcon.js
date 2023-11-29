import { StyleSheet, Image, View, TouchableOpacity } from "react-native";

export default function NotificationIcon(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        source={require("../../assets/ScreenIcons/notification-icon.png")}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
  );
}
