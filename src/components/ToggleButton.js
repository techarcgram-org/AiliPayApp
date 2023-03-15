import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

export default function ToggleButton() {
  const [isEnabled, setIsEnabled] = useState(false);

  function toggleSwitch() {
    setIsEnabled((previousState) => !previousState);
  }

  return (
    <View >
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#063B87" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

