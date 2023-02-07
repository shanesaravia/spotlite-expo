import NotificationsScreen from "screens/NotificationsScreen";
import ProfileIcon from "components/Profile/modules/ProfileIcon";
import ProfileNavigator from "./ProfileNavigator";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const NotificationsStack = createStackNavigator();

const NotificationsNavigator = (): JSX.Element => {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          headerTitle: "Notifications",
          headerRight: () => <ProfileIcon navigation={navigation} />,
        })}
      />
      <NotificationsStack.Screen
        name="ProfileScreen"
        component={ProfileNavigator}
        options={{
          headerTitle: "Profile",
          headerShown: false,
        }}
      />
    </NotificationsStack.Navigator>
  );
};

export default NotificationsNavigator;
