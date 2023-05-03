import { StyleSheet, TextInput } from 'react-native';

export default function CustomInput(props) {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...resProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    <TextInput
      {...resProps}
      value={value}
      style={styles.input(hasError)}
      onChangeText={(text) => onChange(name)(text)}
      onBlur={() => {
        setFieldTouched(name);
        onBlur(name);
      }}
    />
  );
}

const styles = StyleSheet.compose({
  input: (errors) => ({
    borderBottomWidth: 2,
    borderColor: errors ? 'red' : '#1E1E1E',
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 20
  })
});
