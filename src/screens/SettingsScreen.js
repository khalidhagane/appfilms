import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {COLORS} from "../theme/theme";

const SettingsScreen = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings Screen</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bg,
  },
  text: {
    fontWeight: "bold",
    fontSize: 32,
    color: COLORS.body,
  },
});

export default SettingsScreen;

