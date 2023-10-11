import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>About Screen</Text>
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
