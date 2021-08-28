import * as React from "react";

import { StyleSheet, View } from "react-native";

import SpotliteCamera from "components/Create/SpotliteCamera";
import { StatusBar } from "expo-status-bar";

const CreateScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"transparent"} />
      <SpotliteCamera />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default CreateScreen;
