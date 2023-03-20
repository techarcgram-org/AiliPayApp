import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function BackIcon(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        source={require("../../assets/ScreenIcons/back-arrow.png")}
        style={{ width: 40, height: 30 }}
      />
    </TouchableOpacity>
  );
}
