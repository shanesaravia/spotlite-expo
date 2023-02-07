import { Button, useTheme } from "react-native-elements";
import { StyleSheet, View } from "react-native";

import Logo from "components/Logo";
import React from "react";

interface Props {
  navigation: { navigate: (arg0: string) => void };
}

const LoginScreen = ({ navigation }: Props): JSX.Element => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <Logo width={160} />
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          titleStyle={{ color: theme.colors?.black }}
          containerStyle={{ marginHorizontal: 20, marginVertical: 5 }}
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="Register"
          titleStyle={{ color: theme.colors?.black }}
          containerStyle={{ marginHorizontal: 20, marginVertical: 5 }}
          onPress={() => navigation.navigate("Register")}
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
