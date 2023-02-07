import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import React from "react";

interface Props {
  // name: React.ComponentProps<typeof Ionicons>["name"];
  name: string;
  source?: string;
  style?: StyleProp<TextStyle>;
  color: string;
  onpress?: (event: GestureResponderEvent) => void;
}

const getIcon = (props: Props) => {
  switch (props.source) {
    case "material":
      return <MaterialIcons size={30} {...props} />;
    case "material-community":
      return <MaterialCommunityIcons size={30} {...props} />;
    default:
      return <Ionicons size={30} {...props} />;
  }
};

const Icon = (props: Props): JSX.Element => {
  return (
    <TouchableWithoutFeedback onPress={props.onpress}>
      {getIcon(props)}
    </TouchableWithoutFeedback>
  );
};

export default Icon;
