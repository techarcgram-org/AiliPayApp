import { 
  StyleSheet,
  View,
  Text
} from 'react-native';

export default function CustomHr(props) {
  return (
    <View style={{...styles.container, ...props.style}} >
      <View style={styles.bottomBorder} />
      {props.text && <Text style={styles.text}>{props.text}</Text>}
    </View>
  );
}

const styles = StyleSheet.compose({
  container: {
    position: 'relative',
    alignItems: "center"
  },
  bottomBorder: {
    borderBottomWidth: 2,
    borderBottomColor: '#1E1E1E',
    position: 'absolute',
    bottom: 0,
    width: "100%"
  },
  text: {
    position: 'absolute',
    bottom: -8,
    textAlign: 'center',
    backgroundColor: "white",
    paddingHorizontal: 4
    // other styles...
  },
});