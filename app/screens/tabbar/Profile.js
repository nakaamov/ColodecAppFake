import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import colors from "../../config/colors";

export default function Answers() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Профиль</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.green,
  },
});