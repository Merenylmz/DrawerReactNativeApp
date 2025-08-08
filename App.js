import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import UserScreen from './Screens/UserScreen';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Welcome'>
          <Drawer.Screen name='Welcome' component={WelcomeScreen}/>
          <Drawer.Screen name='User' component={UserScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
