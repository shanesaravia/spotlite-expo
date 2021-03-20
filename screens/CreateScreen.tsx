import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const CreateScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Content</Text>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
