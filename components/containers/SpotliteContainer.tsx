import { StyleSheet, View } from "react-native";

import React from "react";

interface Props {
  children: any;
}

const SpotliteContainer = ({ children }: Props): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});

export default SpotliteContainer;
