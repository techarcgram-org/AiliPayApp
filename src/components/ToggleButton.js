import React, { useState, useEffect } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

export default function ToggleButton(props) {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched, setFieldValue },
    ...resProps
  } = props;

  function toggleSwitch(value) {
    if (resProps.handleSubmit) {
      resProps.handleSubmit();
    }
    setFieldValue(name, value);
  }

  return (
    <View>
      <Switch
        {...resProps}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#063B87' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => toggleSwitch(value)}
        value={value}
      />
    </View>
  );
}
