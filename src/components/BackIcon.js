import { Image, TouchableOpacity } from "react-native";

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
