import BottomTabNavigator from "./BottomTabNavigator";
import EmailVerification from "screens/auth/EmailVerification";
import Landing from "screens/auth/Landing";
import LinkingConfiguration from "./LinkingConfiguration";
import Login from "screens/auth/Login";
import { NavigationContainer } from "@react-navigation/native";
import NotFoundScreen from "screens/NotFoundScreen";
import PasswordReset from "screens/auth/PasswordReset";
import React from "react";
import Register from "screens/auth/Register";
import { RootStackParamList } from "../types";
import { createStackNavigator } from "@react-navigation/stack";
import setTheme from "store/actions/theme";
import { useDispatch } from "react-redux";
import { useTheme } from "react-native-elements";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

interface Props {
  colorScheme: string;
  authenticated: boolean;
}

const Navigation = ({ colorScheme, authenticated }: Props): JSX.Element => {
  const dispatch = useDispatch();

  dispatch(setTheme(colorScheme));

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator authenticated={authenticated} />
    </NavigationContainer>
  );
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = ({ authenticated }) => {
  const { theme } = useTheme();
  if (authenticated) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: theme.colors?.white },
          headerStyle: { backgroundColor: theme.colors?.white },
          headerTitleStyle: { color: theme.colors?.black },
          headerTintColor: theme.colors?.black,
        }}
      >
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: theme.colors?.white },
          headerStyle: { backgroundColor: theme.colors?.white },
          headerTitleStyle: { color: theme.colors?.black },
          headerTitle: "",
          headerTintColor: theme.colors?.black,
        }}
      >
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="EmailVerification" component={EmailVerification} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
      </Stack.Navigator>
    );
  }
};

export default Navigation;
