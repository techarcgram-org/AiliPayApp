import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Header({ text }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name="bars" size={40} color={'#063B87'} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{text}</Text>
      <Icon name="bell" size={40} color={'#063B87'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 10,
    marginLeft: 10,
    marginRight: 10
  },
  headerText: {
    fontWeight: 700,
    fontSize: 20
  }
});
