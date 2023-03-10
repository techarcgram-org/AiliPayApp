import React from 'react'
import { 
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function DrawerContent() {

  return (
    <View style={styles.drawer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Drawer Header</Text>
      </View>
      <View style={styles.drawerLinks}>
        <Text style={styles.drawerLink} onPress={() => Actions.mainActivityScreen()}>
          Home
        </Text>
        <Text style={styles.drawerLink} onPress={() => Actions.about()}>
          About
        </Text>
      </View>
    </View>
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
