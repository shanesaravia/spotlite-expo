import { StyleSheet, View } from "react-native";

import React from "react";

interface Props {
  children: any;
}

const CenterContainer = ({ children }: Props): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CenterContainer;
