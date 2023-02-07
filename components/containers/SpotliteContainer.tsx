import { StyleSheet, View } from "react-native";

import React from "react";

interface Props {
  children: any;
  style?: Record<string, unknown>;
}

const SpotliteContainer = ({ children, style }: Props): JSX.Element => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default SpotliteContainer;
