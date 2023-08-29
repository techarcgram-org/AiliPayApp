import { StyleSheet, Text } from 'react-native';

export default function InputErrorMessage(props) {
  console.log(props);
  return <Text style={styles.header}>{props.children}</Text>;
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
    color: 'red',
    textAlign: 'left',
    fontSize: 12,
    marginTop: -15,
    marginLeft: 5,
  },
  body: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 400,
    marginBottom: 20
  }
});
