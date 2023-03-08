import { 
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function Footer({}) {
  return (
    <View style={styles.container}>
      <Icon
        name="home"
        size={40}
        color={'#063B87'}
      />
      <EntypoIcon
        name="wallet"
        size={40}
        color={'#063B87'}
      />
      <EntypoIcon
        name="swap"
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
    bottom: 10
  },

});