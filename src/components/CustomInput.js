import { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';

export default function CustomInput(props) {
  const [showPassword, setShowPassword] = useState(props.secureTextEntry || false);
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...resProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    <View style={styles.container(hasError)}>
      <TextInput
        {...resProps}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        style={styles.input}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        secureTextEntry={showPassword}
      />
      {resProps.secureTextEntry && (
        <TouchableOpacity styles={styles.icon} onPress={() => setShowPassword(!showPassword)}>
          <EntypoIcons name={showPassword ? 'eye-with-line' : 'eye'} size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.compose({
  container: (errors) => ({
    borderBottomWidth: 2,
    borderColor: errors ? 'red' : '#1E1E1E',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }),
  input: { flex: 10 },
  icon: {
    marginRight: 8,
    flex: 1
  }
});
