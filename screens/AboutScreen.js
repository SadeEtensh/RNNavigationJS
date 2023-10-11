import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
// import { useNavigation } from "@react-navigation/native";

export default function ({ route, navigation }) {
  const { name } = route.params;
  //   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>About {name}</Text>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
      <Button
        title="Update the name"
        onPress={() =>
          navigation.setParams({
            name: "myYTChannel",
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    fontSize: 30,
  },
});
