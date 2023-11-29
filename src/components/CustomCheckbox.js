import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomCheckbox(props) {
  const {
    field: { name, value },
    form: { setFieldValue },
    label
  } = props;

  const handleCheckboxChange = () => {
    setFieldValue(name, !value);
  };

  return (
    <TouchableOpacity onPress={handleCheckboxChange}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name={value ? 'check-square-o' : 'square-o'}
          size={20}
          color={value ? '#00aced' : '#b4b4b4'}
        />
        <Text style={{ marginLeft: 6, fontWeight: 600, fontSize: 14 }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
