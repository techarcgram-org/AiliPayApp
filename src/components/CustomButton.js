import { StyleSheet, TouchableOpacity, Text } from "react-native";
// import { Button } from 'react-native-rapi-ui';

export default function CustomButton(props) {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.button(props), props.style]}
      onPress={props.onPress}
    >
      <Text style={[styles.text(props.color), props.textStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.compose({
  button: (props) => ({
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    backgroundColor: props.backgroundColor,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor:
      props.backgroundColor === "transparent"
        ? "#979EBA"
        : props.backgroundColor,
  }),
  text: (color) => ({
    color,
    fontWeight: 600,
  }),
});
