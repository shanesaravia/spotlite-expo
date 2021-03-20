import React from "react";
import { StyleSheet, View } from "react-native";

import Logo from "components/Logo";
import { Button, useTheme } from "react-native-elements";

interface Props {
  navigation: string;
}

const LoginScreen = ({ navigation }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Logo width={160} />
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          titleStyle={{ color: "black" }}
          containerStyle={{ marginHorizontal: 20, marginVertical: 5 }}
          onPress={() => navigation.push("Login")}
        />
        <Button
          title="Register"
          titleStyle={{ color: "black" }}
          containerStyle={{ marginHorizontal: 20, marginVertical: 5 }}
          onPress={() => navigation.push("Register")}
        />
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "relative",
    bottom: "12%",
    width: "100%",
  },
});
