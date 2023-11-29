import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function FrontArrowIcon(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        source={require("../../assets/ScreenIcons/front-arrow.png")}
        style={{ width: 40, height: 20 }}
      />
    </TouchableOpacity>
  );
}