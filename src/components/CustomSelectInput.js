import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';

export default function CustomSelectInput(props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched, setFieldValue, handleSubmit },
    options,
    placeholder,
    submitOnChange,
    ...resProps
  } = props;
  const hasError = errors[name] && touched[name];

  const handleOptionPress = (item) => {
    let itemValue;
    let itemName;
    if (item.id) {
      itemValue = item.id.toString();
      itemName = item.name;
    } else {
      itemValue = item;
      itemName = item;
    }
    setSelected(itemName);
    onChange(name)(itemValue);
    setFieldValue(itemValue);
    setFieldTouched(name);
    onBlur(name);
    setOpen(false);
    if (submitOnChange) {
      handleSubmit();
    }
  };

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  return (
    <View style={styles.container(hasError)}>
      <TouchableOpacity style={styles.selectContainer} onPress={handleToggleOpen}>
        <Text style={styles.selectText}>{selected ? selected : placeholder}</Text>
        <EntypoIcons name={open ? 'chevron-up' : 'chevron-down'} size={20} />
      </TouchableOpacity>
      {open ? (
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionContainer}
              onPress={() => handleOptionPress(option)}>
              <Text style={styles.optionText}>{option.name ? option.name : option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: (errors) => ({
    borderWidth: 2,
    borderColor: errors ? 'red' : '#1E1E1E',
    borderRadius: 4,
    marginBottom: 20
  }),
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  selectText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16
  },
  optionsContainer: {
    borderTopWidth: 1,
    borderColor: '#1E1E1E',
    marginTop: -1
  },
  optionContainer: {
    padding: 10
  },
  optionText: {
    fontSize: 16
  }
});
