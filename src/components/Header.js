import { 
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header({text}) {
  return (
    <View style={styles.container}>
      <Icon
        name="bars"
        size={40}
        color={'#063B87'}
      />
      <Text style={styles.headerText}>{text}</Text>
      <Icon
        name="bell"
        size={40}
        color={'#063B87'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 10
  },
  headerText: {
    fontWeight: 700,
    fontSize: 20
  },
  

});