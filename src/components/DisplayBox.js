import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function DisplayBox(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.header}</Text>
      <Text style={styles.body}>{props.body}</Text>
      <View style={styles.footer}>{props.footer}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 35,
    borderRadius: 30
  },
  header: {
    color: '#063B87',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 700
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 400,
    marginBottom: 20
  }
});
