import { 
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default function CustomRadioButton({
  value, 
  selectedValue,
  onValueChange,
  label,
  style
}) {
  return (
    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => onValueChange(value)}
    >
      <View style={styles.radioCircle}>
        {selectedValue === value && <View style={styles.selectedRb} />}
      </View>
      <Text style={[styles.radioLabel, style]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.compose({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 8,
    backgroundColor: '#000',
  },
  radioLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});