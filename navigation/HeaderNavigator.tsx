import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  GestureResponderEvent,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";
import { View } from "../components/Themed";

const styles = StyleSheet.create({
  logo: {
    marginLeft: 10,
    marginBottom: -10,
    flex: 1,
    width: 120,
    resizeMode: "contain",
  },
});

const Logo = (): JSX.Element => {
  return (
    <View>
      <Image
        source={require("../assets/images/spotlite-logo.png")}
        style={styles.logo}
      />
    </View>
  );
};

const ProfileIcon = ({ navigation }: { navigation: any }): JSX.Element => {
  return (
    <HeaderIcon
      name="person-outline"
      color={"black"}
      onpress={() => navigation.push("ProfileScreen")}
    />
  );
};

const HeaderIcon = (props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  onpress: (event: GestureResponderEvent) => void;
}): JSX.Element => {
  return (
    <TouchableWithoutFeedback onPress={props.onpress}>
      <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
    </TouchableWithoutFeedback>
  );
};

export { Logo, ProfileIcon };
