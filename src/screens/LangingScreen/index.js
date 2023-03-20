import React, { useEffect } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../../components/Logo';

export default function LandingScreen({navigation}) {
  // useEffect(() => {
  //   setTimeout(() => {
  //     Actions.welcomeScreen()
  //   }, 5000)
  // },[])
const goToLandingPage2 = () => {
  navigation.navigate("LandingScreen2")
}

return (
    <View style={styles.container}>
      <Logo />
      <TouchableOpacity style={{ width: "50%" }} onPress={goToLandingPage2}>
        <Text style={styles.seconderyText}>Financial system that works for everyone</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#063B87',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seconderyText: {
    fontWeight: 700,
    color: '#979EBA',
    fontSize: 18,
    textAlign: "center",
    marginTop: 20
  }
});