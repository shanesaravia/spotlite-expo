import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useTheme } from "react-native-elements";

import { useDispatch } from "react-redux";
import setTheme from "store/actions/theme";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import Landing from "screens/auth/Landing";
import Login from "screens/auth/Login";
import Register from "screens/auth/Register";
import LinkingConfiguration from "./LinkingConfiguration";

// TODO: Add real auth
const isSignedIn = false;

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

const Navigation = ({ colorScheme }: { colorScheme: string }): JSX.Element => {
  const dispatch = useDispatch();

  dispatch(setTheme(colorScheme));

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { theme } = useTheme();
  if (isSignedIn) {
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
      </Stack.Navigator>
    );
  }
};

export default Navigation;
