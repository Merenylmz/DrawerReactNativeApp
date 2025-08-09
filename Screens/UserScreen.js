import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const UserScreen = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Text>User Screen</Text>
      <Button title="Open Drawer" onPress={()=>navigation.toggleDrawer()}/>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
