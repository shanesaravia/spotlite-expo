import React from "react";
import { View } from "react-native";
import { Button, Input, useTheme } from "react-native-elements";

const Register = (): JSX.Element => {
  const { theme } = useTheme();
  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 30 }}>
      <Input
        label="Email"
        placeholder="Email address..."
        labelStyle={{ color: theme.colors?.black }}
      />
      <Input
        label="Full Name"
        placeholder="Full Name..."
        labelStyle={{ color: theme.colors?.black }}
      />
      <Input
        label="Username"
        placeholder="Username..."
        labelStyle={{ color: theme.colors?.black }}
      />
      <Input
        label="Password"
        secureTextEntry
        placeholder="Password..."
        labelStyle={{ color: theme.colors?.black }}
      />

      <Button title="SIGN UP" onPress={() => console.log("Signed up")} />
    </View>
  );
};

export default Register;
