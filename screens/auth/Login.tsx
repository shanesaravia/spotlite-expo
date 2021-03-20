import React from "react";
import { View } from "react-native";
import { Button, Input, useTheme } from "react-native-elements";

const Login = (): JSX.Element => {
  const { theme } = useTheme();
  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
      <Input
        label="Username or email"
        placeholder="Username or email..."
        labelStyle={{ color: theme.colors?.black }}
      />
      <Input
        label="Password"
        secureTextEntry
        placeholder="Password..."
        labelStyle={{ color: theme.colors?.black }}
      />

      <Button title="LOGIN" onPress={() => console.log("Logged In")} />
    </View>
  );
};

export default Login;
