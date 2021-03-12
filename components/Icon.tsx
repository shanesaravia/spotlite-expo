import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  GestureResponderEvent,
  TouchableWithoutFeedback,
  TextStyle,
  StyleProp,
} from "react-native";

const Icon = (props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  style: StyleProp<TextStyle>;
  color: string;
  onpress: (event: GestureResponderEvent) => void;
}): JSX.Element => {
  return (
    <TouchableWithoutFeedback onPress={props.onpress}>
      <Ionicons size={30} {...props} />
    </TouchableWithoutFeedback>
  );
};

export default Icon;
