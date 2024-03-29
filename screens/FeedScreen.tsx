import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const FeedScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Feed</Text>
    </View>
  );
};
export default FeedScreen;

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
