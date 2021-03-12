import React from "react";
import { Image, StyleSheet } from "react-native";
import { View } from "./Themed";

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

const styles = StyleSheet.create({
  logo: {
    marginLeft: 10,
    marginBottom: -10,
    flex: 1,
    width: 120,
    resizeMode: "contain",
  },
});

export default Logo;
