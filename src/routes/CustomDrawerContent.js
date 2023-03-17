import React from 'react'
import {
  StyleSheet
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default function CustomDrawerContent(props) {
  console.log()
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Hello, Peter"
        icon={({ focused, color, size }) => <MaterialIcon name="person" size={40} />}
        onPress={() => props.navigation.navigate('https://mywebsite.com/help')}
      />
      <DrawerItem
        label="Settings"
        icon={({ focused, color, size }) => <MaterialIcon name="settings" size={40} />}
        onPress={() => props.navigation.navigate('https://mywebsite.com/help')}
      />
      <DrawerItem
        label="Help"
        icon={({ focused, color, size }) => <AntIcon name="question" size={40} />}
        onPress={() => props.navigation.navigate('https://mywebsite.com/help')}
      />
      <DrawerItem
        label="Logout"
        icon={({ focused, color, size }) => <AntIcon name="arrowright" size={40} />}
        onPress={() => props.navigation.navigate('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerHeader: {
    height: 200,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  drawerLinks: {
    marginTop: 20,
    marginLeft: 10,
  },
  drawerLink: {
    fontSize: 16,
    marginBottom: 10,
    color: '#007AFF',
  },
});
