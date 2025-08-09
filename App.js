import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import {Ionicons} from "@expo/vector-icons";
import UserScreen from './Screens/UserScreen';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Welcome' screenOptions={{
          headerStyle: {backgroundColor: "#6200a3ff"},
          headerTintColor: "#fff",
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#6200a3ff"
        }}>
          <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{
            drawerLabel: "Welcome Page",
            drawerIcon: ({color, size})=>{
              return <Ionicons name='home' size={size} color={color}/>
            }
          }}/>
          <Drawer.Screen name='User' component={UserScreen} options={{
            drawerLabel: "User Page",
            drawerIcon: ({color, size})=>{
              return <Ionicons name='person' size={size} color={color}/>
            }
          }}/>
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
