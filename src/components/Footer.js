import { 
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Footer({}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("MainActivityScreen")} >
      <Icon
        name="home"
        size={40}
        color={'#063B87'}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate("PastPayPeriodsScreen")}>
        <EntypoIcon
          name="wallet"
          size={40}
          color={'#063B87'}
          
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CompletedPayments")}>
        <EntypoIcon
          name="swap"
          size={40}
          color={'#063B87'}
        />
      </TouchableOpacity>
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