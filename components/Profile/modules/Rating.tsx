import { StyleSheet, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native-elements";

interface Props {
  text: string;
  rating: integer;
  icon: component;
}

const Rating = (props: Props): JSX.Element => {
  const { icon, text, rating } = props;
  return (
    <View style={styles.container}>
      {icon}
      <Text>{text}</Text>
      <Text style={styles.rating}>{rating}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  rating: {
    fontWeight: "bold",
  },
});
