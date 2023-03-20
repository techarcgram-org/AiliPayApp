import { 
  StyleSheet,
  TextInput
} from 'react-native';
import { Button,  } from 'react-native-rapi-ui';

export default function CustomInput(props) {
  console.log(props.backgroundColor)
  return (
    <TextInput 
      {...props}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.compose({
  input: {
    borderBottomWidth: 2,
    borderColor: '#1E1E1E',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 20
  }
});