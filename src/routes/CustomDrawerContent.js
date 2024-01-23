import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomDrawerContent(props) {
  const logout = async () => {
    try {
      // Delete the accessToken from AsyncStorage
      await AsyncStorage.removeItem('access_token');
      props.navigation.navigate('LoginScreen');
    } catch (error) {
      console.log('Error while logging out:', error);
    }
  };
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Hello, Peter"
        icon={({ focused, color, size }) => <MaterialIcon name="person" size={40} />}
        onPress={() => props.navigation.navigate('AccountInformation')}
      />
      <DrawerItem
        label="Settings"
        icon={({ focused, color, size }) => <MaterialIcon name="settings" size={40} />}
        onPress={() => props.navigation.navigate('SettingsScreen')}
      />
      <DrawerItem
        label="Help"
        icon={({ focused, color, size }) => <AntIcon name="question" size={40} />}
        onPress={() => props.navigation.navigate('https://mywebsite.com/help')}
      />
      <DrawerItem
        label="Logout"
        icon={({ focused, color, size }) => <AntIcon name="arrowright" size={40} />}
        onPress={logout}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 700
  },
  drawerLinks: {
    marginTop: 20,
    marginLeft: 10
  },
  drawerLink: {
    fontSize: 16,
    marginBottom: 10,
    color: '#007AFF'
  }
});
