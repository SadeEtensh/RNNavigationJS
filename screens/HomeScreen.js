import { StyleSheet, Text, View, Button } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function HomeScreen({ navigation }) {
  //   const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate("About", {
            name: "Sade",
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
